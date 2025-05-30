"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"

export default function InteractiveGlobe() {
  const globeRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 })
  const autoRotationRef = useRef(0)

  useEffect(() => {
    let animationId: number

    const animate = () => {
      if (!isDragging) {
        autoRotationRef.current += 0.5
        setRotation((prev) => ({
          ...prev,
          y: prev.y + 0.5,
        }))
      }
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setLastMouse({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - lastMouse.x
    const deltaY = e.clientY - lastMouse.y

    setRotation((prev) => ({
      x: Math.max(-30, Math.min(30, prev.x + deltaY * 0.5)),
      y: prev.y + deltaX * 0.5,
    }))

    setLastMouse({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setIsDragging(true)
    setLastMouse({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const touch = e.touches[0]
    const deltaX = touch.clientX - lastMouse.x
    const deltaY = touch.clientY - lastMouse.y

    setRotation((prev) => ({
      x: Math.max(-30, Math.min(30, prev.x + deltaY * 0.5)),
      y: prev.y + deltaX * 0.5,
    }))

    setLastMouse({ x: touch.clientX, y: e.clientY })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ background: "transparent" }}>
      <div
        ref={globeRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isDragging ? "none" : "transform 0.1s ease-out",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="w-96 h-96 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/globe-texture.png)",
            filter: "contrast(1.1) brightness(0.9)",
          }}
        />
      </div>
    </div>
  )
}
