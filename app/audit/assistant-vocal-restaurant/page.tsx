import type { CSSProperties, ReactNode } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Euro,
  Headphones,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { AnimatedSphere } from "@/components/landing/animated-sphere"
import { Button } from "@/components/primitives/button"
import { pinkKoiAudit, pinkKoiPublicSnapshot, runPinkKoiQa } from "@/lib/pink-koi-test"
import { safeExternalRel, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Decroche Agency × Pink Koï — Audit opérationnel",
  description:
    "Audit opérationnel Pink Koï : demandes entrantes, temps équipe, réservations préparées, assistant vocal et décision humaine finale.",
  robots: {
    index: false,
    follow: false,
  },
}

const pinkKoiPhone = "01 42 33 67 93"
const pinkKoiBookingUrl = "https://bookings.zenchef.com/results?rid=372306&pid=1001"

const topKpis = [
  {
    value: "≈ 35 k€ / an",
    label: "standard dédié à éviter",
    detail: "Un accueil téléphonique permanent coûte vite le prix d’un poste.",
    icon: Euro,
  },
  {
    value: "17 h / jour",
    label: "demandes hors service",
    detail: "Les questions arrivent aussi entre midi et soir, après fermeture ou avant ouverture.",
    icon: Clock,
  },
  {
    value: "7 h / jour",
    label: "service à protéger",
    detail: "Chaque appel répétitif peut couper l’accueil, la salle ou l’encaissement.",
    icon: ShieldCheck,
  },
  {
    value: "1 décision",
    label: "toujours humaine",
    detail: "L’assistant prépare. L’équipe Pink Koï confirme.",
    icon: PhoneCall,
  },
]

const decrocheStats = [
  { value: "30 min", label: "diagnostic", sub: "pour cadrer le cas" },
  { value: "7–10 j", label: "prototype utile", sub: "avant décision" },
  { value: "3–5", label: "scénarios métiers", sub: "testés avec vous" },
  { value: "4", label: "mesures", sub: "demandes · temps · qualification · reprise" },
]

const facts = [
  { label: "Horaires", value: "12h–15h · 19h–23h" },
  { label: "Prix midi", value: "25 € adulte · 14 € enfant" },
  { label: "Prix soir", value: "42 € adulte · 19 € enfant" },
  { label: "Réserver", value: "Zenchef déjà en place", href: pinkKoiBookingUrl },
  { label: "Téléphone", value: pinkKoiPhone },
  { label: "Adresse", value: "8 Rue Coquillière, Paris 1er" },
] as const

const auditValues = [
  {
    value: `${pinkKoiAudit.score}/100`,
    label: "vitrine déjà forte",
    detail: "Le sujet prioritaire n’est pas l’image : c’est la gestion des demandes avant réservation.",
  },
  {
    value: String(pinkKoiPublicSnapshot.sources.length),
    label: "sources publiques lues",
    detail: "Menu, tarifs, horaires, réservation, téléphone, mentions et informations pratiques.",
  },
  {
    value: `${runPinkKoiQa().passed}/${runPinkKoiQa().total}`,
    label: "scénarios QA prêts",
    detail: "Prix, horaires, groupe, anniversaire, allergène, plainte et cas limites.",
  },
  {
    value: "0",
    label: "confirmation automatique",
    detail: "Table, allergène, litige, paiement ou geste commercial restent validés par l’équipe.",
  },
]

const recommendations = [
  {
    title: "1. Capturer les demandes qui tombent hors service",
    current: "Aujourd’hui, le client peut appeler quand personne n’est disponible pour répondre.",
    next: "La voix donne horaires, tarifs et lien de réservation, puis prépare la demande utile.",
  },
  {
    title: "2. Protéger l’équipe pendant le rush",
    current: "Pendant midi et soir, les appels simples coupent le rythme de la salle.",
    next: "L’assistant absorbe les questions répétitives et transmet seulement ce qui mérite une reprise.",
  },
  {
    title: "3. Structurer les groupes et anniversaires",
    current: "Un groupe sans date, heure, nombre d’adultes, enfants et occasion crée des allers-retours.",
    next: "La demande arrive déjà résumée : horaire souhaité, taille du groupe, occasion, contact.",
  },
  {
    title: "4. Sécuriser les sujets sensibles",
    current: "Allergènes, plaintes, retards, paiements ou modifications ne doivent pas être improvisés.",
    next: "La voix reconnaît le risque, s’arrête et transmet à une personne de l’équipe.",
  },
]

const callLines = [
  {
    speaker: "Client",
    text: "Bonsoir, vous êtes ouverts ce soir ? On serait 6 adultes et 2 enfants pour un anniversaire vers 20h30.",
  },
  {
    speaker: "Accueil Pink Koï",
    text: "Bonsoir, Pink Koï. Oui, nous sommes ouverts ce soir de 19h à 23h. Pour une arrivée vers 20h30, je peux préparer la demande pour l’équipe.",
  },
  {
    speaker: "Accueil Pink Koï",
    text: "Pour bien noter : les deux enfants ont moins de 10 ans ? Et vous souhaitez une table pour 8 personnes au total ?",
  },
  {
    speaker: "Client",
    text: "Oui, ils ont moins de 10 ans. Nous serons bien 8. Vous pouvez aussi me rappeler si besoin.",
  },
  {
    speaker: "Accueil Pink Koï",
    text: "Très bien. Pour le soir, la formule est à 42 € par adulte et 19 € par enfant de moins de 10 ans. Je prépare le résumé : 6 adultes, 2 enfants, anniversaire, 20h30.",
  },
  {
    speaker: "Accueil Pink Koï",
    text: "La table n’est pas confirmée ici. Je prends votre prénom et votre numéro, puis l’équipe Pink Koï valide la disponibilité.",
  },
  {
    speaker: "Client",
    text: "C’est Sarah, mon numéro est le 06 00 00 00 00.",
  },
  {
    speaker: "Accueil Pink Koï",
    text: "Merci Sarah. Je transmets : 8 personnes, anniversaire, ce soir à 20h30, enfants de moins de 10 ans, rappel demandé. L’équipe confirme la disponibilité.",
  },
]

const deliverables = [
  ["Numéro de test", "Pink Koï appelle et écoute l’assistant comme un vrai client."],
  ["Base validée", "Horaires, tarifs, enfants, adresse, Zenchef, règles groupes."],
  ["Scénarios QA", "Cas simples, cas sensibles, demandes incomplètes, limites."],
  ["Résumé équipe", "Demande, infos collectées, infos manquantes, action recommandée."],
]

const deliverySteps = [
  { day: "Jour 1", title: "Choisir le flux", text: "Questions avant réservation : horaires, prix, enfants, groupes." },
  { day: "Jours 2–3", title: "Valider les réponses", text: "Ce que la voix peut dire. Ce qu’elle doit transmettre." },
  { day: "Jours 4–6", title: "Préparer la voix", text: "Ton Pink Koï, phrases courtes, collecte utile, résumé équipe." },
  { day: "Jours 7–8", title: "Tester les pièges", text: "Allergène, plainte, retard, groupe, info manquante." },
  { day: "Jours 9–10", title: "Décider", text: "Utile, à ajuster ou à arrêter. Aucun branchement réel sans validation." },
]

const assistantCanDo = [
  "répondre aux horaires et tarifs",
  "orienter vers Zenchef",
  "collecter les infos d’un groupe",
  "préparer un rappel humain",
  "résumer la demande",
  "identifier un cas sensible",
]

const assistantWontDo = [
  "confirmer une table",
  "garantir une place",
  "valider un allergène",
  "prendre un paiement",
  "traiter une plainte seul",
  "modifier une réservation sans équipe",
]

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">{children}</span>
      <span className="h-px flex-1 bg-foreground/10" aria-hidden="true" />
    </div>
  )
}

function Card({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`border border-foreground/10 bg-card/80 p-6 backdrop-blur ${className}`} style={style}>
      {children}
    </div>
  )
}

export default function VoiceRestaurantAuditPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 noise-overlay" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_14%_10%,rgba(80,91,230,0.15),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(255,110,180,0.10),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.84),rgba(250,248,242,0.97))]" />

      <nav className="sticky top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
          <Link href="/" className="focus-link text-lg tracking-tight" aria-label="Retour accueil Decroche">
            <span className="font-semibold">Decroche</span>
            <span className="text-primary">.agency</span>
          </Link>
          <Button asChild size="sm">
            <Link href="#rdv">Planifier un diagnostic</Link>
          </Button>
        </div>
      </nav>

      <section className="relative px-6 pb-20 pt-12 lg:px-12 lg:pt-18">
        <div className="audit-grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-wrap items-center gap-5">
            <span className="font-display text-3xl tracking-tight sm:text-4xl">Decroche Agency</span>
            <span className="font-display text-3xl text-muted-foreground sm:text-4xl">×</span>
            <img
              src="/logos/pink-koi-logo.png"
              alt="Logo Pink Koï"
              className="size-14 rounded-full object-cover ring-1 ring-foreground/10"
              loading="eager"
              decoding="async"
            />
            <span className="font-display text-3xl tracking-tight sm:text-4xl">Pink Koï</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div className="audit-reveal">
              <p className="mb-6 font-mono text-sm uppercase tracking-[0.28em] text-primary">Audit opérationnel · accueil vocal</p>
              <h1 className="max-w-5xl font-display text-5xl leading-[0.94] tracking-tight text-balance sm:text-6xl lg:text-8xl">
                Pink Koï a déjà la demande. Le téléphone doit suivre.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">
                Le site donne envie, les prix sont publics, Zenchef est en place. La valeur se joue maintenant sur les appels : les capter, les trier, les résumer, puis laisser l’équipe confirmer.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <a href="#priorites">
                    Voir les priorités
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#appel-test">Lire l’appel test</a>
                </Button>
              </div>
            </div>

            <div className="audit-reveal relative" style={{ animationDelay: "120ms" }}>
              <div className="relative min-h-[520px] overflow-hidden border border-foreground/10 bg-card/70 p-8 shadow-[0_40px_120px_rgba(19,19,14,0.08)] backdrop-blur">
                <div className="absolute inset-0 opacity-30">
                  <AnimatedSphere />
                </div>
                <div className="relative flex h-full min-h-[460px] flex-col justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Valeur à vérifier</p>
                    <div className="mt-8 font-display text-7xl leading-none tracking-tight text-primary sm:text-8xl">35 k€</div>
                    <p className="mt-5 max-w-md text-2xl leading-tight text-foreground">
                      ordre de grandeur d’un accueil téléphonique dédié sur un an.
                    </p>
                  </div>
                  <div className="grid gap-px bg-foreground/10 sm:grid-cols-2">
                    <div className="bg-background/85 p-5">
                      <div className="font-display text-4xl text-primary">17 h</div>
                      <div className="mt-1 text-sm text-muted-foreground">hors service à couvrir</div>
                    </div>
                    <div className="bg-background/85 p-5">
                      <div className="font-display text-4xl text-primary">7 h</div>
                      <div className="mt-1 text-sm text-muted-foreground">service à protéger</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden border-y border-foreground/10 py-8" aria-label="Résumé Decroche adapté à Pink Koï">
            <div className="grid gap-8 md:grid-cols-4">
              {decrocheStats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-4">
                  <span className="font-display text-4xl text-foreground lg:text-5xl">{stat.value}</span>
                  <span className="text-sm leading-tight text-muted-foreground">
                    {stat.label}
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                      {stat.sub}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-px bg-foreground/10 md:grid-cols-4" aria-label="KPI Pink Koï">
            {topKpis.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={metric.label} className="audit-reveal bg-background p-7 lg:p-8" style={{ animationDelay: `${index * 80}ms` }}>
                  <Icon className="mb-8 size-6 text-primary" aria-hidden="true" />
                  <div className="font-display text-5xl leading-none tracking-tight text-primary">{metric.value}</div>
                  <div className="mt-3 text-xl font-semibold tracking-tight">{metric.label}</div>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{metric.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12" id="priorites">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Priorités de l’audit</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <h2 className="font-display text-5xl leading-tight tracking-tight text-balance lg:text-7xl">
                Quatre pertes possibles. Quatre corrections simples.
              </h2>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
                Un bon audit ne liste pas des idées. Il montre où la demande se bloque et ce qu’il faut tester en premier.
              </p>
            </div>
            <div className="grid gap-4">
              {recommendations.map((item, index) => (
                <Card key={item.title} className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]" style={{ animationDelay: `${index * 80}ms` }}>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Priorité</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-balance">{item.title}</h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="border border-foreground/10 bg-secondary/50 p-4">
                      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Aujourd’hui</p>
                      <p className="text-base leading-7">{item.current}</p>
                    </div>
                    <div className="border border-primary/20 bg-primary/5 p-4">
                      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">Avec l’assistant</p>
                      <p className="text-base leading-7">{item.next}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Base vérifiée</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="font-display text-5xl leading-tight tracking-tight text-balance lg:text-7xl">
                Les réponses sont déjà là. Elles doivent être faciles à obtenir.
              </h2>
            </div>
            <div className="grid gap-px bg-foreground/10 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-background p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">{fact.label}</p>
                  {"href" in fact ? (
                    <a href={fact.href} rel={safeExternalRel} target="_blank" className="mt-3 inline-flex text-xl font-semibold text-primary underline-offset-4 hover:underline">
                      {fact.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-xl font-semibold leading-tight">{fact.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-px bg-foreground/10 md:grid-cols-4" aria-label="Valeurs retrouvées de l’audit Pink Koï">
            {auditValues.map((item) => (
              <div key={item.label} className="bg-card p-6">
                <div className="font-display text-5xl leading-none text-primary">{item.value}</div>
                <h3 className="mt-4 text-lg font-semibold">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12" id="appel-test">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <SectionLabel>Simulation vocale</SectionLabel>
            <h2 className="font-display text-5xl leading-tight tracking-tight text-balance lg:text-7xl">
              Une vraie question. Une vraie réponse. Puis un résumé exploitable.
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
              La voix répond dans l’ordre : horaires, contexte, prix, collecte utile, confirmation humaine.
            </p>
          </div>
          <Card className="bg-foreground text-background">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-background/70">
              <div className="flex items-center gap-3">
                <Headphones className="size-5" aria-hidden="true" />
                Appel simulé — groupe anniversaire
              </div>
              <div className="rounded-full border border-background/15 px-3 py-1 text-xs uppercase tracking-[0.22em]">
                Voix Pink Koï
              </div>
            </div>
            <div className="mb-6 flex items-end gap-1" aria-hidden="true">
              {[18, 32, 24, 44, 28, 52, 22, 38, 30, 46, 20, 34, 48, 26].map((height, index) => (
                <span key={`${height}-${index}`} className="w-1 rounded-full bg-blue-200/70" style={{ height: `${height}px` }} />
              ))}
            </div>
            <div className="space-y-3">
              {callLines.map((line, index) => {
                const isRestaurant = line.speaker === "Accueil Pink Koï"
                return (
                  <div
                    key={`${line.speaker}-${index}`}
                    className={`grid gap-3 border p-4 sm:grid-cols-[10rem_1fr] ${
                      isRestaurant ? "border-background/15 bg-background text-foreground" : "border-primary/35 bg-primary/20 text-background"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] opacity-65">
                      {isRestaurant ? <Sparkles className="size-4" aria-hidden="true" /> : <PhoneCall className="size-4" aria-hidden="true" />}
                      {line.speaker}
                    </div>
                    <p className="text-base leading-7">{line.text}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 border border-background/15 bg-background/10 p-5 text-base leading-7 text-background/78">
              Résultat : horaires et prix répondus, contact collecté, demande résumée, table encore à confirmer par Pink Koï.
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground px-6 py-20 text-background lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Livrable Decroche</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div>
              <h2 className="font-display text-5xl leading-tight tracking-tight text-balance lg:text-7xl">
                Une preuve appelable avant toute mise en service.
              </h2>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-background/70">
                Le but n’est pas de promettre. Le but est d’écouter, tester et décider sur des appels réels simulés.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map(([title, text]) => (
                <div key={title} className="border border-background/15 bg-background/8 p-6">
                  <CalendarCheck className="mb-6 size-6 text-blue-200" aria-hidden="true" />
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 text-base leading-7 text-background/70">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="border border-background/15 p-8">
              <h3 className="text-3xl font-semibold tracking-tight">Ce que la voix peut faire</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {assistantCanDo.map((item) => (
                  <div key={item} className="flex gap-3 text-base leading-7 text-background/78">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-blue-200" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-background/15 p-8">
              <h3 className="flex items-center gap-3 text-3xl font-semibold tracking-tight">
                <ShieldCheck className="size-7" aria-hidden="true" />
                Ce qui reste humain
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {assistantWontDo.map((item) => (
                  <div key={item} className="border border-background/15 bg-background/8 p-3 text-base leading-7 text-background/74">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Plan de test</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <h2 className="font-display text-5xl leading-tight tracking-tight text-balance lg:text-7xl">
                Dix jours pour savoir si ça mérite d’aller plus loin.
              </h2>
            </div>
            <div className="grid gap-px bg-foreground/10">
              {deliverySteps.map((step) => (
                <div key={step.day} className="grid gap-4 bg-background p-6 sm:grid-cols-[130px_1fr] sm:items-center">
                  <div className="font-mono text-sm uppercase tracking-[0.22em] text-primary">{step.day}</div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12" id="rdv">
        <div className="mx-auto max-w-6xl overflow-hidden border border-foreground/10 bg-foreground text-background shadow-[0_50px_140px_rgba(19,19,14,0.22)]">
          <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="p-8 sm:p-10">
              <div className="mb-8 inline-flex size-14 items-center justify-center rounded-full bg-background text-foreground">
                <PhoneCall className="size-6" aria-hidden="true" />
              </div>
              <h2 className="font-display text-5xl leading-tight tracking-tight sm:text-6xl">Planifier le diagnostic Pink Koï.</h2>
              <p className="mt-6 text-lg leading-8 text-background/70">
                30 minutes pour valider les appels à traiter, les limites, les sources et les mesures de valeur.
              </p>
              <Button asChild size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90">
                <Link href={site.calUrl} rel={safeExternalRel} target="_blank">
                  Ouvrir Cal.com
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <p className="mt-6 text-sm leading-6 text-background/52">
                Exemple basé sur des informations publiques. Aucune promesse de chiffre d’affaires. Mise en service réelle uniquement après validation.
              </p>
            </div>
            <div className="border-t border-background/10 bg-background/5 p-8 lg:border-l lg:border-t-0 sm:p-10">
              <p className="mb-8 font-mono text-xs uppercase tracking-[0.26em] text-background/55">À valider pendant le diagnostic</p>
              <div className="grid gap-px bg-background/15">
                {[
                  ["Appels à traiter", "horaires, prix, enfants, groupes, anniversaires"],
                  ["Réponses validées", "ce que la voix peut dire sans risque"],
                  ["Transferts humains", "allergènes, litiges, paiement, disponibilité"],
                  ["Mesure de valeur", "demandes captées, temps gagné, reprises propres"],
                ].map(([title, text]) => (
                  <div key={title} className="bg-foreground p-5">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-base leading-7 text-background/68">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
