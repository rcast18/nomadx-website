import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-nunito'
})

export const metadata: Metadata = {
  title: 'NOMADX',
  description: 'Work • Play • Live • Learn',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-sans`}>{children}</body>
    </html>
  )
}
