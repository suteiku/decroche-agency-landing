"use client"

import { useEffect, useRef, useState } from "react"

type Metric = {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const frameRef = useRef(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const formatter = new Intl.NumberFormat("fr-FR")

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setCount(end)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1600
          const startTime = performance.now()
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))

            if (progress < 1) frameRef.current = requestAnimationFrame(animate)
          }

          frameRef.current = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameRef.current)
    }
  }, [end, hasAnimated])

  return (
    <div ref={ref} className="font-display text-6xl tracking-tight text-primary lg:text-8xl">
      {prefix}
      {formatter.format(count)}
      {suffix}
    </div>
  )
}

const metrics: Metric[] = [
  {
    value: 1,
    label: "point de contact à traiter proprement au lieu de laisser la demande se perdre.",
  },
  {
    value: 3,
    label: "actions utiles : répondre, qualifier, préparer le rendez-vous ou le transfert.",
  },
  {
    value: 10,
    suffix: " j",
    label: "pour produire une démo contrôlée sur vos vrais scénarios, avant toute mise en production.",
  },
  {
    value: 4,
    label: "mesures simples : demandes traitées, temps gagné, leads qualifiés, reprises humaines.",
  },
]

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="probleme" ref={sectionRef} className="relative border-y border-foreground/10 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-8 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-6 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
              <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
              Le problème
            </span>
            <h2
              className={`text-balance font-display text-4xl tracking-tight transition-[opacity,transform] duration-700 lg:text-6xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Vos demandes entrantes
              <br />
              <span className="text-muted-foreground">doivent être captées.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            On ne vend pas une IA vague. On choisit un flux répétitif, on le transforme en assistant
            simple, puis on mesure s’il aide vraiment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-foreground/10 md:grid-cols-2">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-background p-8 transition-[opacity,transform] duration-700 lg:p-12 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter end={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              <div className="mt-4 text-lg text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
