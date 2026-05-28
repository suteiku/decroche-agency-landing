import { ArrowRight, Check } from "lucide-react"

import { safeExternalRel, site } from "@/lib/site"

const plans = [
  {
    name: "Diagnostic",
    description: "Pour choisir le bon cas d’usage avant de coder quoi que ce soit.",
    price: "0 € bêta",
    setup: "30 à 45 min",
    features: [
      "Cartographie du flux de demandes",
      "Score d’automatisation réaliste",
      "3 scénarios IA priorisés",
      "Go / no-go clair",
      "Recommandation d’offre",
    ],
    cta: "Réserver le diagnostic",
    popular: false,
  },
  {
    name: "Sprint démo",
    description: "Une preuve contrôlée avant de brancher l’assistant sur un vrai flux client.",
    price: "750–1 500 €",
    setup: "7 à 10 jours",
    features: [
      "Script métier et limites",
      "Démo vocale appelable",
      "3 à 5 scénarios testés",
      "Grille QA simple",
      "Rapport de décision",
    ],
    cta: "Tester un scénario",
    popular: true,
  },
  {
    name: "Installation",
    description: "Pour mettre en service un assistant utile avec suivi et reprise humaine.",
    price: "2 500–5 000 €",
    setup: "Setup selon intégrations",
    features: [
      "Assistant configuré",
      "Agenda ou CRM simple",
      "Routage / transfert humain",
      "Documentation d’usage",
      "Rapport mensuel",
    ],
    cta: "Demander un cadrage",
    popular: false,
  },
  {
    name: "Suivi mensuel",
    description: "Pour améliorer l’assistant sans laisser dériver les réponses.",
    price: "299–799 €/mois",
    setup: "Après installation",
    features: [
      "Revue des appels et conversations",
      "Ajustements scripts",
      "Nouveaux scénarios",
      "Monitoring des limites",
      "Compte rendu clair",
    ],
    cta: "Parler du suivi",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative border-t border-foreground/10 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 max-w-3xl">
          <span className="mb-6 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Offres de lancement
          </span>
          <h2 className="text-balance mb-6 font-display text-5xl tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Une première preuve
            <br />
            <span className="text-stroke">avant la production.</span>
          </h2>
          <p className="text-pretty max-w-xl text-lg text-muted-foreground">
            Les montants sont indicatifs et servent à cadrer la conversation. Le devis final dépend du flux,
            des outils, du volume et du niveau de conformité nécessaire.
          </p>
        </div>

        <div className="grid gap-px bg-foreground/10 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`relative bg-background p-8 lg:p-10 ${
                plan.popular ? "border-2 border-primary md:-my-4 md:py-12 lg:py-14" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 bg-primary px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary-foreground">
                  Recommandé
                </span>
              )}

              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-3xl text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-8 border-b border-foreground/10 pb-8">
                <p className="font-display text-4xl text-primary lg:text-5xl">{plan.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">{plan.setup}</p>
              </div>

              <ul className="mb-10 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={site.calUrl}
                target="_blank"
                rel={safeExternalRel}
                className={`group flex w-full items-center justify-center gap-2 py-4 text-sm font-medium transition-[background-color,border-color,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-foreground/20 text-foreground hover:border-primary hover:bg-primary/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Pas de promesse de chiffre d’affaires garanti. La valeur se mesure sur un cas concret : demandes
          captées, temps gagné, qualification et qualité de la reprise humaine.
        </p>
      </div>
    </section>
  )
}
