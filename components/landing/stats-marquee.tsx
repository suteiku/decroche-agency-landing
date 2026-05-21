"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "83%", label: "d'appels manqués hors heures", sub: "D'OUVERTURE" },
  { value: "350-900€", label: "CA perdu", sub: "PAR APPEL" },
  { value: "28 000€", label: "économisés", sub: "PAR POSTE / AN" },
  { value: "24/7", label: "disponibilité", sub: "GARANTIE" },
]

export function StatsMarquee() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden border-t border-foreground/10 py-8 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-100"
      }`}
      aria-label="Indicateurs commerciaux Decroche"
    >
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 md:justify-between lg:flex-nowrap">
        {stats.map((stat) => (
          <div key={stat.label} className="flex shrink-0 items-baseline gap-4">
            <span className="shrink-0 font-display text-4xl text-foreground lg:text-5xl">{stat.value}</span>
            <span className="whitespace-nowrap text-sm leading-tight text-muted-foreground">
              {stat.label}
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                {stat.sub}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
