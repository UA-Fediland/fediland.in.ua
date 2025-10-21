"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, Menu } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ti-bg/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/design-mode/logo.webp"
              alt="UA Fediland Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-xl font-semibold text-ti-fg">UA Fediland</span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="text-ti-fg hover:text-ti-fg/80 transition-colors">
                  Домівка
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-ti-fg hover:text-ti-fg/80 transition-colors">
                  Правила
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-ti-fg hover:text-ti-fg/80 transition-colors">
                  Контакти
                </Link>
              </li>
              <li>
                <Link
                  href="https://send.monobank.ua/jar/AQiVab8fC"
                  className="text-ti-fg hover:text-ti-fg/80 transition-colors"
                >
                  Донат
                </Link>
              </li>
              <li>
                <Link
                  href="https://up.fediland.in.ua/status/uafediland"
                  className="text-ti-fg hover:text-ti-fg/80 transition-colors"
                >
                  Статус
                </Link>
              </li>
            </ul>
          </nav>

          <button className="md:hidden text-ti-fg" onClick={() => setIsMenuOpen(true)} aria-label="Відкрити меню">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-ti-bg z-50">
          <div className="container mx-auto px-4 py-4 flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="text-ti-fg" aria-label="Закрити меню">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-[calc(100vh-5rem)]">
            <ul className="space-y-8 text-center">
              <li>
                <Link
                  href="/"
                  className="text-ti-fg text-2xl hover:text-ti-fg/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Домівка
                </Link>
              </li>
              <li>
                <Link
                  href="/rules"
                  className="text-ti-fg text-2xl hover:text-ti-fg/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Правила
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-ti-fg text-2xl hover:text-ti-fg/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакти
                </Link>
              </li>
              <li>
                <Link
                  href="https://send.monobank.ua/jar/AQiVab8fC"
                  className="text-ti-fg text-2xl hover:text-ti-fg/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Донат
                </Link>
              </li>
              <li>
                <Link
                  href="https://up.fediland.in.ua/status/uafediland"
                  className="text-ti-fg text-2xl hover:text-ti-fg/80 transition-colors"
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
