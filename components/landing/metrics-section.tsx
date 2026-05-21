"use client"

import { useEffect, useRef, useState } from "react"

type Metric = {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  start = false,
}: {
  end: number
  suffix?: string
  prefix?: string
  start?: boolean
}) {
  const [count, setCount] = useState(end)
  const ref = useRef<HTMLDivElement>(null)
  const frameRef = useRef(0)
  const formatter = new Intl.NumberFormat("fr-FR")

  useEffect(() => {
    if (!start) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setCount(end)
      return
    }

    const initialValue = Math.max(1, Math.floor(end * 0.72))
    setCount(initialValue)
    const duration = 1600
    const startTime = performance.now()
    const animate = () => {
      const elapsed = performance.now() - startTime
      const progress = Math.max(0, Math.min(elapsed / duration, 1))
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(Math.max(initialValue, initialValue + eased * (end - initialValue))))

      if (progress < 1) frameRef.current = window.requestAnimationFrame(animate)
    }

    frameRef.current = window.requestAnimationFrame(animate)
    return () => {
      window.cancelAnimationFrame(frameRef.current)
    }
  }, [end, start])

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
    value: 83,
    suffix: "%",
    label: "des PME perdent des appels hors heures d'ouverture",
  },
  {
    value: 900,
    suffix: "€",
    label: "de CA potentiel par appel manqué (max)",
  },
  {
    value: 28000,
    suffix: "€",
    label: "coût annuel d’un poste réceptionniste (35h/semaine). 10 postes = 280 000€/an.",
  },
  {
    value: 500,
    prefix: "<",
    suffix: "ms",
    label: "de latence end-to-end. Conversation fluide, indiscernable d’un humain.",
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
              className={`text-balance font-display text-4xl tracking-tight transition-transform duration-700 lg:text-6xl ${
                isVisible ? "translate-y-0" : "translate-y-4"
              }`}
            >
              Chaque appel manqué
              <br />
              <span className="text-muted-foreground">est un client perdu.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            On remet ici les valeurs fortes : appels perdus, CA potentiel, coût d’un poste et vitesse
            de réponse. C’est la base de la décision.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-foreground/10 md:grid-cols-2">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-background p-8 transition-transform duration-700 lg:p-12 ${
                isVisible ? "translate-y-0" : "translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter end={metric.value} suffix={metric.suffix} prefix={metric.prefix} start={isVisible} />
              <div className="mt-4 text-lg text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
