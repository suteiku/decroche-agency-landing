"use client"

import { useEffect, useRef, useState } from "react"

type Metric = {
  value: string
  label: string
}

const metrics: Metric[] = [
  {
    value: "83%",
    label: "des PME perdent des appels hors heures d'ouverture",
  },
  {
    value: "350–900€",
    label: "de CA potentiel par appel manqué selon le secteur et l’urgence",
  },
  {
    value: "28 000€",
    label: "coût annuel d’un poste accueil, hors management et imprévus.",
  },
  {
    value: "<500ms",
    label: "objectif de latence pour une conversation fluide et naturelle.",
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
    <section id="probleme" ref={sectionRef} className="relative border-y border-foreground/10 pb-16 pt-28 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
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
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            On remet les chiffres qui avaient disparu : appels perdus, CA potentiel, coût d’un poste
            et vitesse de réponse. Ils cadrent le manque à gagner avant la démo.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-foreground/10">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-background p-4 transition-transform duration-700 sm:p-8 lg:p-12 ${
                isVisible ? "translate-y-0" : "translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-[clamp(2.05rem,9.5vw,7rem)] leading-none tracking-tight text-primary">
                {metric.value}
              </div>
              <div className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
