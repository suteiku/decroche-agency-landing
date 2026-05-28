"use client"

import { useEffect, useRef, useState } from "react"
import { Eye, FileCheck, Lock, Shield } from "lucide-react"

const securityFeatures = [
  {
    icon: Eye,
    title: "Assistant annoncé clairement",
    description:
      "La personne doit comprendre qu’elle échange avec un assistant automatisé, pas avec un humain caché.",
  },
  {
    icon: Shield,
    title: "Données minimisées",
    description:
      "On collecte seulement les informations utiles au scénario : motif, coordonnées, urgence, contexte.",
  },
  {
    icon: Lock,
    title: "Cadre RGPD documenté",
    description:
      "Finalité, durée de conservation, accès et reprise humaine sont posés avant l’installation.",
  },
  {
    icon: FileCheck,
    title: "Limites écrites",
    description:
      "L’assistant sait quoi refuser, quand transférer et ce qui doit rester une décision humaine.",
  },
]

const safeguards = ["Transparence IA", "RGPD à cadrer", "Données limitées", "Transfert humain", "Journal de suivi"]

export function SecuritySection() {
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
    <section
      id="security"
      ref={sectionRef}
      className="relative overflow-hidden bg-foreground/[0.02] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div
            className={`transition-[opacity,transform] duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="mb-6 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
              <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
              Conformité
            </span>
            <h2 className="text-balance mb-8 font-display text-4xl tracking-tight lg:text-6xl">
              Un assistant utile
              <br />
              reste cadré.
            </h2>
            <p className="text-pretty mb-12 text-xl leading-relaxed text-muted-foreground">
              La conformité n’est pas un badge marketing. C’est un cadre simple : transparence,
              données limitées, reprise humaine et documentation avant publication.
            </p>

            <div className="flex flex-wrap gap-3" aria-label="Garde-fous prévus">
              {safeguards.map((item, index) => (
                <span
                  key={item}
                  className={`border border-primary/20 px-4 py-2 font-mono text-sm text-primary transition-[opacity,transform] duration-500 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`group border border-foreground/10 p-6 transition-[border-color,opacity,transform] duration-500 hover:border-primary/30 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center border border-primary/20 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium transition-transform duration-300 group-hover:translate-x-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
