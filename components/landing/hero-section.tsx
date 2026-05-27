"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Phone } from "lucide-react"

import { Button } from "@/components/primitives/button"
import { primaryCta, safeExternalRel, secondaryCta, site } from "@/lib/site"
import { AnimatedSphere } from "./animated-sphere"

const words = ["décroche", "qualifie", "prend RDV", "transfère"]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const interval = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden md:min-h-screen">
      <div className="pointer-events-none absolute left-1/2 top-[36%] z-0 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 opacity-[0.18] sm:h-[310px] sm:w-[310px] sm:opacity-[0.24] md:left-auto md:right-16 md:top-1/2 md:h-[380px] md:w-[380px] md:translate-x-0 md:opacity-60 lg:right-24 lg:h-[480px] lg:w-[480px] lg:opacity-70">
        <AnimatedSphere />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30" aria-hidden="true">
        {[...Array(8)].map((_, index) => (
          <div
            key={`h-${index}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (index + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, index) => (
          <div
            key={`v-${index}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (index + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 lg:px-12 lg:py-40">
        <div
          className={`mb-8 transition-[opacity,transform] duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
            Agents vocaux IA pour PME
          </span>
        </div>

        <div className="mb-12 max-w-4xl">
          <h1
            className={`text-balance font-display text-[clamp(2.4rem,8.5vw,7rem)] leading-[0.92] tracking-tight transition-[opacity,transform] duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="block">Un assistant vocal</span>
            <span className="block">
              qui{" "}
              <span className="relative inline-block text-primary">
                <span key={wordIndex} className="inline-block" aria-live="polite">
                  {words[wordIndex]}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/10" aria-hidden="true" />
              </span>
            </span>
          </h1>
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-24">
          <p
            className={`text-pretty max-w-xl text-xl leading-relaxed text-muted-foreground transition-[opacity,transform] delay-200 duration-700 lg:text-2xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Ne perdez plus un appel. Réceptionnez vos clients 24/7 avec une voix humaine en français.
            Chaque demande est qualifiée, résumée, puis transmise quand l’humain doit reprendre.
          </p>

          <div
            className={`flex flex-col items-start gap-4 transition-[opacity,transform] delay-300 duration-700 sm:flex-row ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
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
              <a href="#pricing">{secondaryCta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
