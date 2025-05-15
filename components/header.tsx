"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, Menu } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#11252E]/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://vwrinhz4a3iiasjx.public.blob.vercel-storage.com/logo.webp"
              alt="UA Fediland Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-xl font-semibold text-white">UA Fediland</span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="text-white hover:text-white/80">
                  Домівка
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-white hover:text-white/80">
                  Контакти
                </Link>
              </li>
              <li>
                <Link href="https://send.monobank.ua/jar/AQiVab8fC" className="text-white hover:text-white/80">
                  Донат
                </Link>
              </li>
              <li>
                <Link href="https://up.fediland.in.ua/status/uafediland" className="text-white hover:text-white/80">
                  Статус
                </Link>
              </li>
            </ul>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#11252E] z-50">
          <div className="container mx-auto px-4 py-4 flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-[calc(100vh-5rem)]">
            <ul className="space-y-8 text-center">
              <li>
                <Link href="/" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
                  Домівка
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
                  Контакти
                </Link>
              </li>
              <li>
                <Link
                  href="https://send.monobank.ua/jar/AQiVab8fC"
                  className="text-white text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Донат
                </Link>
              </li>
              <li>
                <Link
                  href="https://up.fediland.in.ua/status/uafediland"
                  className="text-white text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Статус
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

