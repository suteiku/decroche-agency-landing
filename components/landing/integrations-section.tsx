"use client"

import { useEffect, useRef, useState } from "react"

const integrations = [
  { name: "Google Calendar", category: "Agenda", logo: "/logos/integrations/google-calendar.svg" },
  { name: "Cal.com", category: "Rendez-vous", logo: "/logos/integrations/cal.svg" },
  { name: "HubSpot", category: "CRM", logo: "/logos/integrations/hubspot.svg" },
  { name: "Pipedrive", category: "CRM", logo: "/logos/integrations/pipedrive.svg" },
  { name: "Notion", category: "Suivi", logo: "/logos/integrations/notion.svg" },
  { name: "Airtable", category: "Base client", logo: "/logos/integrations/airtable.svg" },
  { name: "Google Sheets", category: "Reporting", logo: "/logos/integrations/google-sheets.svg" },
  { name: "Make", category: "Automatisation", logo: "/logos/integrations/make.svg" },
  { name: "Zapier", category: "Automatisation", logo: "/logos/integrations/zapier.svg" },
  { name: "Aircall", category: "Téléphonie", logo: "/logos/integrations/aircall.svg" },
  { name: "Salesforce", category: "CRM", logo: "/logos/integrations/salesforce.svg" },
  { name: "Twilio", category: "Téléphonie", logo: "/logos/integrations/twilio.svg" },
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
    <section id="integrations" ref={sectionRef} className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-[opacity,transform] duration-700 lg:mb-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-100"
          }`}
        >
          <span className="mb-5 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
            Intégrations
            <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
          </span>
          <h2 className="text-balance mb-5 font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            Connecté à vos
            <br />
            outils du quotidien.
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            On garde seulement les connexions utiles : agenda, CRM, base client, reporting ou téléphonie,
            avec accès validés côté client.
          </p>
        </div>

        <ul
          className={`mx-auto grid max-w-5xl grid-cols-3 items-center gap-x-8 gap-y-8 bg-transparent sm:grid-cols-4 md:grid-cols-6 lg:gap-x-12 lg:gap-y-10 transition-[opacity,transform] duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-100"
          }`}
          aria-label="Logos des outils compatibles, sur fond transparent"
        >
          {integrations.map((integration) => (
            <li key={integration.name} className="group flex min-h-14 items-center justify-center bg-transparent">
              <img
                src={integration.logo}
                alt={`${integration.name} — ${integration.category}`}
                loading="lazy"
                className="max-h-9 max-w-[112px] object-contain opacity-75 saturate-[0.82] transition-[filter,opacity,transform] duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:saturate-100"
              />
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          Logos affichés sans tuile ni fond ajouté pour rester homogènes. Les connexions exactes sont validées
          au diagnostic selon vos outils et vos droits d’accès.
        </p>
      </div>
    </section>
  )
}
