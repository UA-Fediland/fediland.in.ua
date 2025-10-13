import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "UA Fediland",
  description: "Відкритість. Децентралізація. Інновації.",
  openGraph: {
    type: "website",
    url: "https://fediland.in.ua",
    title: "UA Fediland",
    description: "Відкритість. Децентралізація. Інновації.",
    siteName: "UA Fediland",
    images: [
      {
        url: "https://4j84k2z9mtr6e5m6.public.blob.vercel-storage.com/background.webp",
        width: 1200,
        height: 630,
        alt: "UA Fediland Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UA Fediland",
    description: "Відкритість. Децентралізація. Інновації.",
    images: ["https://4j84k2z9mtr6e5m6.public.blob.vercel-storage.com/background.webp"],
  },
  icons: {
    icon: [
      {
        url: "https://4j84k2z9mtr6e5m6.public.blob.vercel-storage.com/favicon.webp",
        type: "image/webp",
      },
    ],
    shortcut: [
      {
        url: "https://4j84k2z9mtr6e5m6.public.blob.vercel-storage.com/favicon.webp",
        type: "image/webp",
      },
    ],
    apple: [
      {
        url: "https://4j84k2z9mtr6e5m6.public.blob.vercel-storage.com/favicon.webp",
        type: "image/webp",
      },
    ],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://4j84k2z9mtr6e5m6.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://4j84k2z9mtr6e5m6.public.blob.vercel-storage.com" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
