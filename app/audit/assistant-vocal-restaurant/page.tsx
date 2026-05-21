import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"
import {
  ArrowRight,
  CheckCircle2,
  Euro,
  Headphones,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

import { AnimatedSphere } from "@/components/landing/animated-sphere"
import { Button } from "@/components/primitives/button"
import { safeExternalRel, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Decroche Agency × Pink Koï — Assistant vocal",
  description:
    "Une page courte pour montrer le chiffre d’affaires potentiel que Pink Koï peut récupérer avec un assistant vocal téléphonique.",
  robots: {
    index: false,
    follow: false,
  },
}

const impactKpis = [
  {
    value: "1 appel raté",
    label: "= 1 table potentiellement perdue",
    note: "Quand l’équipe ne peut pas décrocher, le client peut réserver ailleurs.",
    icon: PhoneCall,
  },
  {
    value: "90 €",
    label: "de CA potentiel pour 1 table de 2",
    note: "Exemple lisible : 2 clients × 45 €. À remplacer par le vrai panier Pink Koï.",
    icon: Euro,
  },
  {
    value: "360 € / mois",
    label: "si 4 tables sont récupérées",
    note: "Seulement 1 réservation sauvée par semaine peut déjà payer une partie du système.",
    icon: Euro,
  },
  {
    value: "900 € / mois",
    label: "si 10 tables sont récupérées",
    note: "Scénario simple à valider en call, sans promesse de chiffre d’affaires garanti.",
    icon: Users,
  },
]

const businessGains = [
  {
    title: "Plus de réservations récupérées",
    text: "L’assistant décroche quand l’équipe est prise, pour éviter qu’un client motivé parte réserver ailleurs.",
  },
  {
    title: "Plus de CA potentiel protégé",
    text: "Chaque table sauvée devient un calcul clair : nombre de couverts × panier moyen × réservations récupérées.",
  },
  {
    title: "Moins de pertes invisibles",
    text: "Aujourd’hui, un appel non décroché ne laisse souvent aucune trace. Demain, il devient une demande qualifiée.",
  },
]

const callLines = [
  {
    speaker: "Client",
    text: "Bonsoir, vous êtes ouverts ce soir ? On serait 6 adultes et 2 enfants.",
  },
  {
    speaker: "Accueil Pink Koï",
    text: "Bonsoir, Pink Koï. Nous sommes ouverts ce soir de 19h à 23h. Pour préparer votre venue, les enfants ont-ils moins de 10 ans ?",
  },
  {
    speaker: "Client",
    text: "Oui, et c’est pour un anniversaire vers 20h30.",
  },
  {
    speaker: "Accueil Pink Koï",
    text: "Parfait, je note : 6 adultes, 2 enfants de moins de 10 ans, anniversaire, arrivée souhaitée vers 20h30. Je fais passer la demande à l’équipe pour confirmer la disponibilité.",
  },
]

const installedPieces = [
  "Une voix d’accueil entraînée sur vos réponses",
  "Un numéro de test pour appeler le prototype",
  "Les scénarios répétitifs : horaires, tarifs, groupes, enfants",
  "Un résumé clair envoyé à l’équipe après chaque demande utile",
]

function MiniLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
      <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
      {children}
    </div>
  )
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2rem] border border-foreground/10 bg-card/80 p-6 shadow-[0_24px_80px_rgba(19,19,14,0.06)] backdrop-blur ${className}`}>
      {children}
    </div>
  )
}

export default function VoiceRestaurantAuditPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 noise-overlay" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_14%_10%,rgba(80,91,230,0.16),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(255,110,180,0.12),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(250,248,242,0.97))]" />

      <nav className="sticky top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="focus-link text-lg font-semibold tracking-tight" aria-label="Retour accueil Decroche">
            Decroche Agency
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link href="#rdv">Réserver 30 min</Link>
          </Button>
        </div>
      </nav>

      <section className="relative px-5 pb-14 pt-10 sm:px-8 lg:pb-20 lg:pt-16">
        <div className="audit-grid-bg pointer-events-none absolute inset-0 opacity-55" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-4 rounded-[2rem] border border-foreground/10 bg-card/70 p-4 backdrop-blur">
            <div className="flex items-center gap-3 rounded-full bg-foreground px-4 py-3 text-background">
              <span className="font-display text-xl leading-none">Decroche</span>
              <span className="text-background/45">×</span>
              <img
                src="/logos/pink-koi-logo.png"
                alt="Logo Pink Koï"
                className="size-9 rounded-full object-cover"
                loading="eager"
                decoding="async"
              />
              <span className="font-display text-xl leading-none">Pink Koï</span>
            </div>
            <div className="text-sm leading-6 text-muted-foreground">
              Une page courte pour se projeter : les tables et le chiffre d’affaires potentiel que Pink Koï peut récupérer au téléphone.
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="audit-reveal">
              <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Une personne en plus au téléphone, sans recruter.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Votre site donne déjà envie. Le vrai sujet, c’est l’argent perdu quand un appel de réservation n’est pas décroché :
                l’assistant répond, récupère la demande et laisse l’équipe confirmer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <a href="#appel">
                    Voir l’appel type
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#rdv">Réserver le call</a>
                </Button>
              </div>
            </div>

            <div className="audit-reveal relative" style={{ animationDelay: "120ms" }}>
              <div className="audit-float relative mx-auto aspect-square max-w-[520px] overflow-hidden rounded-[3rem] border border-foreground/10 bg-foreground text-background shadow-[0_40px_120px_rgba(19,19,14,0.24)]">
                <div className="absolute inset-0 opacity-35">
                  <AnimatedSphere />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.74))]" />
                <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full border border-background/20 px-4 py-2 text-xs uppercase tracking-[0.26em] text-background/70">
                      Appel entrant
                    </div>
                    <div className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-background">
                      <img src="/logos/pink-koi-logo.png" alt="" className="size-full object-cover" loading="eager" decoding="async" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-background/55">Ce que le client entend :</div>
                    <p className="mt-4 font-display text-4xl leading-none text-balance sm:text-5xl">
                      Bonsoir, Pink Koï. Nous sommes ouverts ce soir de 19h à 23h.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Décroche", "Répond", "Qualifie", "Transmet"].map((item) => (
                      <div key={item} className="rounded-2xl border border-background/15 bg-background/10 p-3 text-sm text-background/80">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-foreground/10 bg-foreground p-6 text-background shadow-[0_24px_80px_rgba(19,19,14,0.14)]">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-background/55">KPI argent</div>
            <p className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-balance sm:text-3xl">
              Le calcul est volontairement simple : moins d’appels ratés = plus de tables récupérées.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-background/65">
              Ce sont des scénarios de projection, pas une garantie. En call, on remplace ces chiffres par le vrai panier moyen et le vrai volume d’appels Pink Koï.
            </p>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-4" aria-label="KPI argent Pink Koï">
            {impactKpis.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.label}
                  className="audit-reveal rounded-[1.75rem] border border-foreground/10 bg-card/80 p-5 shadow-sm backdrop-blur"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="font-display text-4xl leading-none tracking-tight">{metric.value}</div>
                  <div className="mt-2 text-sm font-semibold text-foreground">{metric.label}</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.note}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <MiniLabel>Pourquoi faire appel à Decroche</MiniLabel>
          <div className="grid gap-5 lg:grid-cols-3">
            {businessGains.map((gain) => (
              <Card key={gain.title}>
                <CheckCircle2 className="mb-6 size-7 text-primary" aria-hidden="true" />
                <h2 className="text-2xl font-semibold tracking-tight text-balance">{gain.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{gain.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8" id="appel">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <MiniLabel>Appel type</MiniLabel>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">Une discussion naturelle, côté Pink Koï.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Pas un ton robotique. La voix parle au nom du restaurant, répond directement et récupère les infos utiles avant de passer la main.
            </p>
          </div>
          <Card className="bg-foreground text-background">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 text-background/70">
              <div className="flex items-center gap-3">
                <Headphones className="size-5" aria-hidden="true" />
                Appel entrant — 42 secondes
              </div>
              <div className="rounded-full border border-background/15 px-3 py-1 text-xs uppercase tracking-[0.22em]">
                Voix Pink Koï
              </div>
            </div>
            <div className="rounded-[2rem] border border-background/15 bg-background/10 p-4">
              <div className="mb-4 flex items-end gap-1" aria-hidden="true">
                {[18, 32, 24, 44, 28, 52, 22, 38, 30, 46, 20, 34].map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="w-1 rounded-full bg-blue-200/70"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
              <div className="space-y-3">
                {callLines.map((line, index) => {
                  const isRestaurant = line.speaker === "Accueil Pink Koï"
                  return (
                    <div
                      key={`${line.speaker}-${index}`}
                      className={`grid gap-3 rounded-[1.35rem] border p-4 sm:grid-cols-[9.5rem_1fr] ${
                        isRestaurant
                          ? "border-background/15 bg-background text-foreground"
                          : "border-primary/35 bg-primary/20 text-background"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] opacity-65">
                        {isRestaurant ? <Sparkles className="size-4" aria-hidden="true" /> : <PhoneCall className="size-4" aria-hidden="true" />}
                        {line.speaker}
                      </div>
                      <p className="text-sm leading-6">{line.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mt-6 flex gap-3 rounded-2xl border border-background/15 bg-background/10 p-4 text-sm leading-6 text-background/72">
              <ShieldCheck className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              La voix prépare la demande. La confirmation finale reste à l’équipe Pink Koï.
            </div>
          </Card>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <MiniLabel>Ce qu’on installe</MiniLabel>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">Un accueil vocal testable, pas un nouveau site.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              On garde ce qui fonctionne déjà. On ajoute une couche utile : décrocher, répondre, filtrer, transmettre.
            </p>
          </div>
          <Card>
            <div className="grid gap-3 sm:grid-cols-2">
              {installedPieces.map((item) => (
                <div key={item} className="rounded-2xl border border-foreground/10 bg-secondary/60 p-4 text-sm leading-6">
                  <CheckCircle2 className="mb-3 size-5 text-primary" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20" id="rdv">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-foreground text-background shadow-[0_50px_140px_rgba(19,19,14,0.24)]">
          <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="p-8 sm:p-10">
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-full bg-background text-foreground">
                <PhoneCall className="size-6" aria-hidden="true" />
              </div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">Réserver le call Decroche × Pink Koï.</h2>
              <p className="mt-5 text-base leading-7 text-background/70">
                En 30 minutes, on valide les appels à traiter, les gains réalistes et la première démo appelable.
              </p>
              <Button asChild size="lg" className="mt-7 bg-background text-foreground hover:bg-background/90">
                <Link href={site.calUrl} rel={safeExternalRel} target="_blank">
                  Ouvrir sur Cal.com
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="border-t border-background/10 bg-background/5 p-3 lg:border-l lg:border-t-0">
              <iframe
                src={`${site.calUrl}?embed=true&theme=dark&layout=month_view`}
                className="h-[720px] w-full rounded-[1.5rem] bg-background"
                allow="camera; microphone; autoplay; fullscreen"
                title="Réserver un diagnostic Decroche Agency"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
