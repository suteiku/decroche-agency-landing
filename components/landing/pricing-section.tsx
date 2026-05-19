"use client";

import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Démarrage",
    description: "TPE / Artisans / Commerçants",
    setup: "2 500 €",
    price: 499,
    features: [
      "1 ligne téléphonique dédiée",
      "Réception 24/7 avec voix humaine",
      "Prise de rendez-vous",
      "Mention AI Act conforme",
      "300 minutes/mois incluses",
      "Rapport mensuel",
    ],
    cta: "Demander un devis",
    popular: false,
  },
  {
    name: "Pro",
    description: "PME 5 à 50 salariés",
    setup: "5 000 €",
    price: 999,
    features: [
      "Lignes téléphoniques illimitées",
      "Qualification automatique des leads",
      "Intégration CRM (HubSpot, Pipedrive)",
      "Transfert humain avec résumé",
      "1 500 minutes/mois incluses",
      "Monitoring & support prioritaire",
    ],
    cta: "Demander un devis",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "ETI / Multi-site / Franchise",
    setup: "15 000 €+",
    price: null,
    priceRange: "3 000 — 8 000 €",
    features: [
      "Multi-site & routing avancé",
      "API & webhooks personnalisés",
      "Hébergement dédié HDS (santé)",
      "DPO dédié",
      "SLA 99.9%",
      "Audit de sécurité annuel",
    ],
    cta: "Contacter l'équipe",
    popular: false,
  },
  {
    name: "Sur-mesure",
    description: "Secteur public / Grand compte",
    setup: "Sur audit",
    price: null,
    priceRange: "Sur audit",
    features: [
      "Architecture dédiée",
      "Hébergement privé souverain",
      "Audit de sécurité approfondi",
      "Formation équipe sur site",
      "Accompagnement stratégique",
    ],
    cta: "Prendre rendez-vous",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Tarifs
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Un ROI mesurable
            <br />
            <span className="text-stroke">dès le 1er mois.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Setup fee à l'installation + abonnement mensuel. Le setup couvre l'analyse flux, le prompt engineering, la voix, les intégrations, les tests et la conformité.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-10 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-14 border-2 border-primary" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Le plus choisi
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                {plan.price !== null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl lg:text-6xl text-primary">
                      {plan.price}€
                    </span>
                    <span className="text-muted-foreground">/mois</span>
                  </div>
                ) : (
                  <span className="font-display text-4xl text-primary">{plan.priceRange}</span>
                )}
                <div className="mt-2 text-sm text-muted-foreground">
                  Setup : <span className="text-foreground font-medium">{plan.setup}</span>
                </div>
                {plan.price !== null && (
                  <div className="mt-1 text-xs text-muted-foreground font-mono">
                    Au-delà du forfait : 0,29€/min
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://cal.com/bruno.crp/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-foreground/20 text-foreground hover:border-primary hover:bg-primary/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Engagement minimum 12 mois. Tous les packs incluent la conformité RGPD, l'hébergement souverain et le support email.{" "}
          <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Comparer toutes les fonctionnalités
          </a>
        </p>
      </div>
    </section>
  );
}
