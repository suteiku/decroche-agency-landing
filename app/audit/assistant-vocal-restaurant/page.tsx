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
} from "lucide-react"

import { AnimatedSphere } from "@/components/landing/animated-sphere"
import { Button } from "@/components/primitives/button"
import { safeExternalRel, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Decroche Agency × Pink Koï — Audit assistant vocal",
  description:
    "Audit commercial Pink Koï pour un assistant vocal téléphonique : coût d’un standard, appels hors service, temps équipe, demandes qualifiées et décision humaine finale.",
  robots: {
    index: false,
    follow: false,
  },
}

const pinkKoiPhone = "01 42 33 67 93"
const pinkKoiBookingUrl = "https://bookings.zenchef.com/results?rid=372306&pid=1001"

const heroKpis = [
  {
    value: "≈ 35 k€ / an",
    label: "coût d’un standard dédié",
    note: "À comparer au coût réel d’une personne mobilisée sur les appels.",
    icon: Euro,
  },
  {
    value: "17 h / jour",
    label: "hors service à couvrir",
    note: "Quand l’équipe ne sert pas, les questions prix, horaires et réservation peuvent encore arriver.",
    icon: Headphones,
  },
  {
    value: "7 h / jour",
    label: "service à protéger",
    note: "Pendant midi et soir, les appels répétitifs coupent la salle.",
    icon: ShieldCheck,
  },
  {
    value: "7–10 jours",
    label: "démo appelable",
    note: "3 à 5 scénarios Pink Koï, testés avant tout branchement réel.",
    icon: PhoneCall,
  },
]

const valueMeasures = [
  "Demandes captées",
  "Temps équipe gagné",
  "Réservations préparées",
  "Reprises humaines claires",
]

const pinkKoiFacts = [
  { label: "Horaires", value: "12h–15h · 19h–23h" },
  { label: "Prix midi", value: "25 € adulte · 14 € enfant" },
  { label: "Prix soir", value: "42 € adulte · 19 € enfant" },
  { label: "Réservation", value: "Zenchef déjà en place", href: pinkKoiBookingUrl },
  { label: "Téléphone", value: pinkKoiPhone },
  { label: "Expérience", value: "buffet premium · 100+ spécialités" },
] as const

const leakPoints = [
  {
    title: "Hors service",
    loss: "Le client appelle après 15h, avant 19h ou tard le soir.",
    fix: "La voix donne les infos utiles et prépare une demande propre.",
  },
  {
    title: "Pendant le rush",
    loss: "La salle répond à des questions simples au lieu de servir.",
    fix: "La voix absorbe horaires, prix, enfants, adresse, Zenchef.",
  },
  {
    title: "Groupes & anniversaires",
    loss: "Les demandes à forte valeur arrivent sans les bons détails.",
    fix: "La voix collecte date, heure, nombre, occasion et téléphone.",
  },
  {
    title: "Cas sensibles",
    loss: "Allergènes, litiges, paiement ou promesse de place peuvent créer du risque.",
    fix: "La voix s’arrête et transmet. Pink Koï confirme.",
  },
]

const callLines = [
  {
    speaker: "Client",
    text: "Bonsoir, vous êtes ouverts ce soir ? C’est combien pour 2 adultes et un enfant de 8 ans ? On aimerait venir vers 20h30.",
  },
  {
    speaker: "Accueil Pink Koï",
    text: "Bonsoir, Pink Koï. Oui, le service du soir est de 19h à 23h. Le soir, la formule est à 42 € par adulte et 19 € par enfant de moins de 10 ans.",
  },
  {
    speaker: "Accueil Pink Koï",
    text: "Pour 20h30, je ne confirme pas la table directement. Je peux vous envoyer vers la réservation Zenchef ou préparer la demande pour l’équipe.",
  },
  {
    speaker: "Client",
    text: "Préparez la demande, s’il vous plaît.",
  },
  {
    speaker: "Accueil Pink Koï",
    text: "Très bien. Je note : ce soir, 20h30, 2 adultes, 1 enfant de 8 ans. Il me manque seulement un prénom et un numéro de rappel. L’équipe Pink Koï garde la confirmation finale.",
  },
]

const pilotSteps = [
  {
    step: "01",
    title: "Cadrer les appels",
    text: "Prix, horaires, enfants, Zenchef, groupes, anniversaires, allergènes.",
  },
  {
    step: "02",
    title: "Tester 3 à 5 scénarios",
    text: "Appels réalistes, limites claires, réponses courtes, ton Pink Koï.",
  },
  {
    step: "03",
    title: "Mesurer l’utilité",
    text: "Demandes captées, temps gagné, demandes qualifiées, reprises humaines.",
  },
  {
    step: "04",
    title: "Décider sans risque",
    text: "Continuer, ajuster ou arrêter. Aucun branchement réel sans validation.",
  },
]

const installPieces = [
  "Une voix d’accueil Pink Koï, pas une interface écrite.",
  "Un numéro de test appelable, séparé du téléphone officiel.",
  "Une base de réponses validée : horaires, tarifs, enfants, Zenchef, adresse.",
  "Un résumé équipe après chaque demande utile.",
  "Un transfert humain pour réservations fermes, allergènes, litiges, paiement et gestes commerciaux.",
  "Un mini-rapport de décision après la démo.",
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
            <Link href="#rdv">Cadrer 30 min</Link>
          </Button>
        </div>
      </nav>

      <section className="relative px-5 pb-14 pt-10 sm:px-8 lg:pb-20 lg:pt-16">
        <div className="audit-grid-bg pointer-events-none absolute inset-0 opacity-55" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              <span className="font-display">Decroche Agency</span>
              <span className="text-muted-foreground">×</span>
              <img
                src="/logos/pink-koi-logo.png"
                alt="Logo Pink Koï"
                className="size-12 rounded-full object-cover ring-1 ring-foreground/10"
                loading="eager"
                decoding="async"
              />
              <span className="font-display">Pink Koï</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm leading-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">Audit téléphone</span>
              <span className="rounded-full border border-foreground/10 bg-card/70 px-3 py-1 text-muted-foreground">pas un audit de site</span>
              <span className="rounded-full border border-foreground/10 bg-card/70 px-3 py-1 text-muted-foreground">pas une messagerie</span>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="audit-reveal">
              <h1 className="max-w-5xl font-display text-5xl leading-[0.92] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Les appels simples coûtent trop cher quand ils tombent au mauvais moment.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Pink Koï a déjà une vitrine premium, Zenchef et une vraie demande. L’enjeu n’est pas de refaire le site : c’est de capter les appels, protéger le service et préparer les demandes que l’équipe doit confirmer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <a href="#kpi">
                    Voir les KPI utiles
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#appel">Voir l’appel test</a>
                </Button>
              </div>
            </div>

            <div className="audit-reveal relative" style={{ animationDelay: "120ms" }}>
              <div className="relative overflow-hidden rounded-[3rem] border border-foreground/10 bg-card/80 p-6 shadow-[0_40px_120px_rgba(19,19,14,0.12)] backdrop-blur">
                <div className="pointer-events-none absolute -right-20 -top-24 size-72 opacity-20" aria-hidden="true">
                  <AnimatedSphere />
                </div>
                <div className="relative">
                  <div className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Opportunité détectée</div>
                  <div className="font-display text-5xl leading-none tracking-tight text-primary">35 k€</div>
                  <p className="mt-4 text-xl font-semibold leading-tight text-balance">à comparer au coût annuel d’un accueil téléphonique dédié.</p>
                  <div className="mt-8 grid gap-3">
                    {[
                      "17h/jour où l’information peut encore être demandée.",
                      "7h/jour où la salle ne doit pas être coupée.",
                      "4 mesures Decroche : demandes, temps, qualification, reprise humaine.",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-foreground/10 bg-background/70 p-4 text-sm font-medium leading-6">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm leading-6 text-muted-foreground">
                    Ordres de grandeur à valider. Aucun revenu garanti. L’objectif : vérifier si une démo vocale mérite d’être installée.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="kpi" className="mt-12 grid gap-3 md:grid-cols-4" aria-label="KPI de valeur Pink Koï">
            {heroKpis.map((metric, index) => {
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

          <div className="mt-4 rounded-[2rem] border border-foreground/10 bg-foreground p-6 text-background shadow-[0_24px_80px_rgba(19,19,14,0.14)]">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-background/55">La valeur mesurée</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {valueMeasures.map((measure) => (
                <div key={measure} className="rounded-2xl border border-background/15 bg-background/10 p-4 text-base font-semibold">
                  {measure}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <MiniLabel>Base Pink Koï utilisée</MiniLabel>
          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-6xl">Les réponses existent déjà. Il faut les rendre disponibles au téléphone.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                L’audit ne critique pas Pink Koï. Il transforme les informations publiques en appels traitables : prix, horaires, enfants, réservation, adresse et téléphone.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {pinkKoiFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-foreground/10 bg-card/80 p-4 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{fact.label}</div>
                  {"href" in fact ? (
                    <a
                      href={fact.href}
                      rel={safeExternalRel}
                      target="_blank"
                      className="mt-2 inline-flex text-base font-semibold text-foreground underline-offset-4 hover:underline"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    <div className="mt-2 text-base font-semibold leading-6 text-foreground">{fact.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <MiniLabel>Où l’argent et le temps se perdent</MiniLabel>
          <div className="grid gap-4 lg:grid-cols-4">
            {leakPoints.map((point) => (
              <Card key={point.title} className="h-full">
                <CheckCircle2 className="mb-6 size-7 text-primary" aria-hidden="true" />
                <h2 className="text-2xl font-semibold tracking-tight text-balance">{point.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{point.loss}</p>
                <div className="mt-6 rounded-2xl bg-secondary/70 p-4 text-sm font-semibold leading-6 text-foreground">{point.fix}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8" id="appel">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <MiniLabel>Appel test</MiniLabel>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">Le client pose trois questions. La voix répond d’abord.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Pas de phrase creuse. Pas de confirmation risquée. La voix donne les faits, puis collecte juste ce qui aide l’équipe.
            </p>
          </div>
          <Card className="bg-foreground text-background">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 text-background/70">
              <div className="flex items-center gap-3">
                <Headphones className="size-5" aria-hidden="true" />
                Simulation vocale — exemple court
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
              La voix prépare. Pink Koï confirme. Allergènes, litiges, paiement et réservations fermes restent humains.
            </div>
          </Card>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <MiniLabel>Architecture du pilote</MiniLabel>
          <div className="grid gap-5 lg:grid-cols-4">
            {pilotSteps.map((item) => (
              <Card key={item.step} className="h-full">
                <div className="mb-6 font-mono text-sm text-primary">{item.step}</div>
                <h2 className="text-2xl font-semibold tracking-tight text-balance">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <MiniLabel>Ce que Pink Koï reçoit</MiniLabel>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">Une preuve appelable, pas une promesse abstraite.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Le livrable doit permettre de décider vite : utile, pas utile, ou à ajuster. Pas de mise en production sans validation.
            </p>
          </div>
          <Card>
            <div className="grid gap-3 sm:grid-cols-2">
              {installPieces.map((item) => (
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
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">Cadrer la démo vocale Pink Koï.</h2>
              <p className="mt-5 text-base leading-7 text-background/70">
                30 minutes pour valider les scénarios, les limites, les sources et les KPI à suivre. Ensuite : démo appelable en 7 à 10 jours si le cas mérite d’être testé.
              </p>
              <Button asChild size="lg" className="mt-7 bg-background text-foreground hover:bg-background/90">
                <Link href={site.calUrl} rel={safeExternalRel} target="_blank">
                  Planifier le cadrage
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
