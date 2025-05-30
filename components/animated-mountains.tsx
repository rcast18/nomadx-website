"use client"

import { useEffect, useRef } from "react"

export default function AnimatedMountains() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mountain generation
    const generateMountainLayer = (baseY: number, amplitude: number, frequency: number, offset: number) => {
      const points: { x: number; y: number }[] = []
      const width = canvas.width + 200 // Extra width for seamless scrolling

      for (let x = -100; x <= width; x += 20) {
        const noise1 = Math.sin((x + offset) * frequency) * amplitude
        const noise2 = Math.sin((x + offset) * frequency * 2) * (amplitude * 0.3)
        const noise3 = Math.sin((x + offset) * frequency * 4) * (amplitude * 0.1)
        const y = baseY + noise1 + noise2 + noise3
        points.push({ x, y })
      }

      return points
    }

    const drawMountainLayer = (points: { x: number; y: number }[], color: string, wireframe = false) => {
      if (points.length < 2) return

      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y)
      }

      // Close the path to the bottom of the canvas
      ctx.lineTo(canvas.width + 100, canvas.height)
      ctx.lineTo(-100, canvas.height)
      ctx.closePath()

      if (wireframe) {
        // Draw wireframe triangles
        ctx.strokeStyle = color
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw triangular mesh
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i]
          const p2 = points[i + 1]
          const bottomY = canvas.height

          // Create triangular segments
          const segments = 3
          for (let j = 0; j < segments; j++) {
            const x1 = p1.x + (p2.x - p1.x) * (j / segments)
            const x2 = p1.x + (p2.x - p1.x) * ((j + 1) / segments)
            const y1 = p1.y + (p2.y - p1.y) * (j / segments)
            const y2 = p1.y + (p2.y - p1.y) * ((j + 1) / segments)

            // Draw triangular mesh
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.lineTo(x1 + (x2 - x1) / 2, bottomY)
            ctx.closePath()
            ctx.stroke()

            // Vertical lines
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x1, bottomY)
            ctx.stroke()
          }
        }
      } else {
        ctx.fillStyle = color
        ctx.fill()
      }
    }

    const animate = () => {
      time += 0.02

      // Clear canvas with white background
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Calculate text area bounds (center area where text will be)
      const textAreaTop = canvas.height * 0.25
      const textAreaBottom = canvas.height * 0.75
      const textAreaHeight = textAreaBottom - textAreaTop

      // Generate multiple mountain layers with different speeds and styles
      // Start mountains below the text area
      const layers = [
        {
          baseY: textAreaBottom + 50, // Start below text
          amplitude: 80,
          frequency: 0.003,
          speed: 1,
          color: "rgba(148, 163, 184, 0.3)",
          wireframe: false,
        },
        {
          baseY: textAreaBottom + 100,
          amplitude: 100,
          frequency: 0.004,
          speed: 1.5,
          color: "rgba(100, 116, 139, 0.4)",
          wireframe: false,
        },
        {
          baseY: textAreaBottom + 150,
          amplitude: 120,
          frequency: 0.005,
          speed: 2,
          color: "rgba(71, 85, 105, 0.5)",
          wireframe: false,
        },
        {
          baseY: textAreaBottom + 200,
          amplitude: 140,
          frequency: 0.006,
          speed: 2.5,
          color: "rgba(51, 65, 85, 0.6)",
          wireframe: true,
        },
        {
          baseY: textAreaBottom + 250,
          amplitude: 160,
          frequency: 0.007,
          speed: 3,
          color: "rgba(30, 41, 59, 0.7)",
          wireframe: true,
        },
      ]

      // Draw layers from back to front
      layers.forEach((layer) => {
        const offset = time * layer.speed * 100
        const points = generateMountainLayer(layer.baseY, layer.amplitude, layer.frequency, offset)
        drawMountainLayer(points, layer.color, layer.wireframe)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />
}
