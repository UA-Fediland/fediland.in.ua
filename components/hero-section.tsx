"use client"

import { useEffect } from "react"

export function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const parallaxBg = document.querySelector(".parallax-bg") as HTMLElement
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    const featuresSection = document.querySelector(".features-section")
    featuresSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
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
  )
}
