"use client"

import { useEffect, useRef, useState } from "react"

const integrations = [
  { name: "Google Calendar", category: "Agenda" },
  { name: "Cal.com", category: "Rendez-vous" },
  { name: "HubSpot", category: "CRM" },
  { name: "Pipedrive", category: "CRM" },
  { name: "Notion", category: "Suivi" },
  { name: "Airtable", category: "Base client" },
  { name: "Google Sheets", category: "Reporting" },
  { name: "Make", category: "Automatisation" },
  { name: "Zapier", category: "Automatisation" },
  { name: "Aircall", category: "Téléphonie" },
  { name: "Ringover", category: "Téléphonie" },
  { name: "CRM maison", category: "Sur devis" },
]

export function IntegrationsSection() {
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
    <section id="integrations" ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-[opacity,transform] duration-700 lg:mb-24 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-6 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
            Intégrations
            <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
          </span>
          <h2 className="text-balance mb-6 font-display text-4xl tracking-tight lg:text-6xl">
            Connecté à vos
            <br />
            outils du quotidien.
          </h2>
          <p className="text-pretty text-xl text-muted-foreground">
            On part de vos habitudes. Une intégration est gardée seulement si elle simplifie le suivi
            et si les accès client sont validés.
          </p>
        </div>
      </div>

      <div className="mb-6 w-full" aria-label="Exemples d’outils compatibles">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0 gap-6" aria-hidden={setIndex === 1}>
              {integrations.map((integration) => (
                <div
                  key={`${integration.name}-${setIndex}`}
                  className="group shrink-0 border border-foreground/10 px-8 py-6 transition-[background-color,border-color] duration-300 hover:border-primary/30 hover:bg-primary/[0.02]"
                >
                  <div className="text-lg font-medium transition-transform duration-300 group-hover:translate-x-1">
                    {integration.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0 gap-6" aria-hidden={setIndex === 1}>
              {[...integrations].reverse().map((integration) => (
                <div
                  key={`${integration.name}-reverse-${setIndex}`}
                  className="group shrink-0 border border-foreground/10 px-8 py-6 transition-[background-color,border-color] duration-300 hover:border-primary/30 hover:bg-primary/[0.02]"
                >
                  <div className="text-lg font-medium transition-transform duration-300 group-hover:translate-x-1">
                    {integration.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
