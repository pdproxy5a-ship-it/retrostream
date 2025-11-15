import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RetroTunes - Free Music Player',
  description: 'Free legal music streaming with 90s style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}