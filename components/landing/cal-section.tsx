"use client"

import { useEffect, useRef, useState } from "react"

import { site } from "@/lib/site"

export function CalSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="rdv" ref={sectionRef} className="relative overflow-hidden bg-foreground py-24 text-background lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 lg:px-12">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-6 inline-flex items-center gap-3 text-sm font-mono text-background/50">
            <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
            Prendre rendez-vous
            <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
          </span>
          <h2
            className={`text-balance font-display text-4xl tracking-tight transition-[opacity,transform] duration-700 lg:text-5xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Réserver un diagnostic
            <br />
            <span className="text-background/50">de 30 minutes.</span>
          </h2>
        </div>

        <div
          className={`transition-[opacity,transform] duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-2xl border border-background/10 bg-background/5 backdrop-blur-sm">
            <iframe
              src={`${site.calUrl}?embed=true&theme=dark&layout=month_view`}
              className="min-h-[700px] w-full"
              allow="camera; microphone; autoplay; fullscreen"
              title="Réserver un diagnostic Decroche.agency"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
