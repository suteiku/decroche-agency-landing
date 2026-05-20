"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "30 min", label: "diagnostic", sub: "POUR CADRER LE CAS" },
  { value: "7–10 j", label: "prototype utile", sub: "AVANT DÉCISION" },
  { value: "3", label: "scénarios métiers", sub: "TESTÉS AVEC VOUS" },
  { value: "1", label: "décision humaine", sub: "TOUJOURS FINALE" },
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
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Résumé de l’offre Decroche"
    >
      <div className="flex gap-24 whitespace-nowrap marquee md:gap-32">
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-24 md:gap-32" aria-hidden={setIndex === 1}>
            {stats.map((stat) => (
              <div key={`${stat.label}-${setIndex}`} className="flex shrink-0 items-baseline gap-4">
                <span className="shrink-0 font-display text-4xl text-foreground lg:text-5xl">
                  {stat.value}
                </span>
                <span className="whitespace-nowrap text-sm leading-tight text-muted-foreground">
                  {stat.label}
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                    {stat.sub}
                  </span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
