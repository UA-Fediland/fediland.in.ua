import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

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
        url: "https://pub-855d0d5a7d064c1aa394bcd9550d15a0.r2.dev/logo.webp",
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
    images: ["https://pub-855d0d5a7d064c1aa394bcd9550d15a0.r2.dev/logo.webp"],
  },
  icons: {
    icon: [
      {
        url: "https://pub-855d0d5a7d064c1aa394bcd9550d15a0.r2.dev/favicon.webp",
        type: "image/webp",
      },
    ],
    shortcut: [
      {
        url: "https://pub-855d0d5a7d064c1aa394bcd9550d15a0.r2.dev/favicon.webp",
        type: "image/webp",
      },
    ],
    apple: [
      {
        url: "https://pub-855d0d5a7d064c1aa394bcd9550d15a0.r2.dev/favicon.webp",
        type: "image/webp",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

