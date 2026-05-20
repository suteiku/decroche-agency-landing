"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Mail, Phone } from "lucide-react"

import { Button } from "@/components/primitives/button"
import { primaryCta, safeExternalRel, site } from "@/lib/site"

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-[opacity,transform] duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          onMouseMove={handleMouseMove}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`,
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24">
            <div className="flex flex-col items-center gap-12 text-center">
              <div>
                <h2 className="text-balance mb-8 font-display text-4xl leading-[0.95] tracking-tight lg:text-7xl">
                  Vous avez un flux
                  <br />
                  <span className="text-primary">répétitif à traiter ?</span>
                </h2>

                <p className="text-pretty mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                  On part d’un problème réel, pas d’une promesse IA. En 30 minutes, on décide si un
                  assistant peut vraiment vous faire gagner du temps.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="group" asChild>
                    <a href={site.calUrl} target="_blank" rel={safeExternalRel}>
                      <Phone className="size-4" aria-hidden="true" />
                      {primaryCta}
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={`mailto:${site.email}`}>
                      <Mail className="size-4" aria-hidden="true" />
                      Écrire à Decroche
                    </a>
                  </Button>
                </div>

                <p className="mt-8 font-mono text-sm text-muted-foreground">
                  Diagnostic gratuit en bêta. Sans engagement. Décision humaine finale.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 h-32 w-32 border-b border-l border-foreground/10" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 h-32 w-32 border-r border-t border-foreground/10" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
