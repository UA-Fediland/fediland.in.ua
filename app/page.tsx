"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Zap, FileText, Settings } from "lucide-react"

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const parallaxBg = document.querySelector(".parallax-bg") as HTMLElement
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    const featuresSection = document.querySelector(".features-section")
    featuresSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="pt-16">
      <section className="parallax-hero">
        <div className="parallax-bg" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="hero-content">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Відкритість. Децентралізація.
            <br />
            Інновації.
          </h1>
          <p className="text-xl mb-8">Творимо майбутнє разом!</p>
        </div>
        <button
          onClick={scrollToContent}
          className="scroll-indicator absolute bottom-24 left-1/2 -translate-x-1/2"
          aria-label="Прокрутити вниз"
        >
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </button>
      </section>

      <section className="py-20 bg-[#11252E] features-section">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="feature-icon">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Швидкість</h2>
            <p className="text-lg">Блискавична швидкість і надійність сервісів.</p>
          </div>

          <div className="text-center">
            <div className="feature-icon">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Приватність</h2>
            <p className="text-lg">Ваші дані залишаються вашими – це наш пріоритет.</p>
          </div>

          <div className="text-center">
            <div className="feature-icon">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Відкритість</h2>
            <p className="text-lg">Маємо відкрите ПЗ, як і спілкування з адміністрацією.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="space-y-16 py-20">
        {/* Mastodon */}
        <section className="container mx-auto px-4">
          <div className="service-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="https://vwrinhz4a3iiasjx.public.blob.vercel-storage.com/mastodon.webp"
                alt="Mastodon"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto"
              />
              <div>
                <h2 className="text-4xl font-bold mb-4">Mastodon Social</h2>
                <p className="mb-6 text-gray-300">
                  Ваша стрічка має бути заповнена тим, що вам важливо, а не тим, що корпорація вважає за належне вам
                  показати. Радикально інша соціальна мережа – повністю в руках людей.
                </p>
                <div className="flex gap-4">
                  <Link href="https://soc.ua-fediland.de/" className="btn-primary">
                    Перейти
                  </Link>
                  <Link href="https://docs.fediland.in.ua/Mastodon/%D0%9E%D0%BF%D0%B8%D1%81" className="btn-outline">
                    Документація
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PeerTube */}
        <section className="container mx-auto px-4">
          <div className="service-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h2 className="text-4xl font-bold mb-4">PeerTube</h2>
                <p className="mb-6 text-gray-300">
                  З PeerTube більше ніяких непрозорих алгоритмів або незрозумілих правил модерації! Платформи PeerTube,
                  які ви відвідуєте, створюються, керуються та модеруються їх власниками.
                </p>
                <div className="flex gap-4">
                  <Link href="https://peertube.in.ua/" className="btn-primary">
                    Перейти
                  </Link>
                  <Link href="https://docs.fediland.in.ua/guide/peertube.html" className="btn-outline">
                    Документація
                  </Link>
                </div>
              </div>
              <div className="md:order-1">
                <Image
                  src="https://vwrinhz4a3iiasjx.public.blob.vercel-storage.com/peertube.webp"
                  alt="PeerTube"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Forgejo */}
        <section className="container mx-auto px-4">
          <div className="service-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="https://vwrinhz4a3iiasjx.public.blob.vercel-storage.com/forgejo.webp"
                alt="Forgejo"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto"
              />
              <div>
                <h2 className="text-4xl font-bold mb-4">Forgejo</h2>
                <p className="mb-6 text-gray-300">
                  Поверніть собі контроль над процесом розробки програмного забезпечення, самостійно розміщуйте свої
                  проекти та залучайте всіх, хто бере участь у створенні якісного програмного забезпечення, до спільної
                  роботи.
                </p>
                <div className="flex gap-4">
                  <Link href="https://git.fediland.in.ua/" className="btn-primary">
                    Перейти
                  </Link>
                  <Link href="https://docs.fediland.in.ua/guide/forgejo.html" className="btn-outline">
                    Документація
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misskey */}
        <section className="container mx-auto px-4">
          <div className="service-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h2 className="text-4xl font-bold mb-4">Misskey</h2>
                <p className="mb-6 text-gray-300">Світ без обмежень: ваш простір в Misskey!</p>
                <div className="flex gap-4">
                  <Link href="https://mk.fediland.in.ua/" className="btn-primary">
                    Перейти
                  </Link>
                  <Link href="https://docs.fediland.in.ua/guide/misskey.html" className="btn-outline">
                    Документація
                  </Link>
                </div>
              </div>
              <div className="md:order-1">
                <Image
                  src="https://vwrinhz4a3iiasjx.public.blob.vercel-storage.com/misskey.webp"
                  alt="Misskey"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Matrix */}
        <section className="container mx-auto px-4">
          <div className="service-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="https://vwrinhz4a3iiasjx.public.blob.vercel-storage.com/matrix.webp"
                alt="Matrix"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto"
              />
              <div>
                <h2 className="text-4xl font-bold mb-4">Matrix</h2>
                <p className="mb-6 text-gray-300">Відкрита мережа для безпечного, децентралізованого спілкування.</p>
                <div className="flex gap-4">
                  <Link href="/contacts" className="btn-primary">
                    Перейти
                  </Link>
                  <Link href="https://docs.fediland.in.ua/guide/matrix.html" className="btn-outline">
                    Документація
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Dots Separator */}
      <div className="dots-separator">
        <div className="flex justify-center">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="bg-[#121F25] py-32 text-center">
        <h2 className="text-4xl font-bold">Від людей, для людей!</h2>
      </section>
    </main>
  )
}
