"use client"

import { useEffect, useRef, useState } from "react"

const useCases = [
  {
    sector: "Agence immobilière locale",
    pain: "Les demandes de visite arrivent hors horaires ou sans informations utiles.",
    assistant: "L’assistant qualifie le bien, le budget, le délai et prépare le rappel humain.",
    measure: "Demandes qualifiées + délai de réponse",
  },
  {
    sector: "Artisan / dépannage premium",
    pain: "Les appels urgents coupent le travail et les demandes faibles prennent trop de temps.",
    assistant: "L’assistant collecte urgence, adresse, photos si besoin et priorise le rappel.",
    measure: "Temps gagné + interventions mieux triées",
  },
  {
    sector: "Restaurant / hôtellerie indépendante",
    pain: "Réservations, horaires, groupes et privatisations reviennent en boucle.",
    assistant: "L’assistant répond aux questions simples et prépare les demandes commerciales.",
    measure: "Demandes traitées + demandes groupe transmises",
  },
  {
    sector: "Loisirs premium / golf",
    pain: "Les prospects veulent une réponse rapide avant de choisir un concurrent.",
    assistant: "L’assistant renseigne, qualifie le besoin et déclenche une suite commerciale claire.",
    measure: "Leads captés + rendez-vous préparés",
  },
]

const verticals = [
  "Immobilier local",
  "Artisans premium",
  "Restauration",
  "Hôtellerie",
  "Golf & loisirs",
  "Services B2B",
  "Écoles privées",
  "Cabinets spécialisés",
]

export function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const showUseCase = (index: number) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    setIsAnimating(true)
    timeoutRef.current = window.setTimeout(() => {
      setActiveIndex(index)
      setIsAnimating(false)
    }, 260)
  }

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return undefined

    const interval = window.setInterval(() => {
      showUseCase((activeIndex + 1) % useCases.length)
    }, 5200)

    return () => {
      window.clearInterval(interval)
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [activeIndex])

  const activeUseCase = useCases[activeIndex]

  return (
    <section className="relative border-t border-foreground/10 py-32 lg:pb-14 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Cas d’usage
          </span>
          <div className="h-px flex-1 bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(useCases.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-8">
            <div
              className={`transition-[opacity,transform] duration-300 ${
                isAnimating ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <p className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
                Exemple à valider en diagnostic
              </p>
              <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {activeUseCase.sector}
              </h2>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <div className="border border-foreground/10 p-6">
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Problème métier
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">{activeUseCase.pain}</p>
                </div>
                <div className="border border-foreground/10 p-6">
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Assistant utile
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">{activeUseCase.assistant}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-4">
            <div
              className={`border border-foreground/10 p-8 transition-[opacity,transform] duration-300 ${
                isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Mesure de valeur
              </span>
              <p className="font-display text-3xl text-primary md:text-4xl">{activeUseCase.measure}</p>
            </div>

            <div className="mt-8 flex gap-2" aria-label="Changer de cas d’usage">
              {useCases.map((useCase, index) => (
                <button
                  key={useCase.sector}
                  type="button"
                  onClick={() => showUseCase(index)}
                  className={`h-2 rounded-full transition-[background-color,width] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                    index === activeIndex ? "w-8 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Afficher le cas ${useCase.sector}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-foreground/10 pt-12">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Secteurs à tester en priorité — pas des références clients
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center gap-16 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center gap-16" aria-hidden={setIndex === 1}>
              {verticals.map((vertical) => (
                <span
                  key={`${setIndex}-${vertical}`}
                  className="whitespace-nowrap font-display text-xl text-foreground/30 transition-colors duration-300 hover:text-foreground md:text-2xl"
                >
                  {vertical}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
