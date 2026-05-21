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

import { AnimatedNumber, Reveal } from "@/components/audit/audit-motion"
import { AnimatedSphere } from "@/components/landing/animated-sphere"
import { CalSection } from "@/components/landing/cal-section"
import { Button } from "@/components/primitives/button"
import { pinkKoiAudit, pinkKoiPublicSnapshot, runPinkKoiQa } from "@/lib/pink-koi-test"
import { safeExternalRel } from "@/lib/site"

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
    end: 83,
    suffix: "%",
    label: "des PME perdent des appels hors heures d’ouverture",
    detail: "À appliquer au téléphone Pink Koï : entre deux services, après fermeture ou quand l’équipe sert.",
    icon: PhoneCall,
  },
  {
    end: 900,
    suffix: "€",
    label: "de CA potentiel par appel manqué (max)",
    detail: "Un groupe, un anniversaire ou une demande entreprise peut peser bien plus qu’une petite table.",
    icon: Euro,
  },
  {
    end: 28000,
    suffix: "€",
    label: "coût annuel d’un poste réceptionniste (35h/semaine)",
    detail: "L’assistant vocal ne remplace pas l’équipe : il évite que le téléphone mange le service.",
    icon: ShieldCheck,
  },
  {
    end: 500,
    prefix: "<",
    suffix: "ms",
    label: "de latence end-to-end pour une conversation fluide",
    detail: "Réponse rapide, voix naturelle, reprise humaine claire quand la demande sort du cadre.",
    icon: Clock,
  },
]

const agencyStats = [
  { value: "83%", label: "d’appels manqués hors heures", sub: "D’OUVERTURE" },
  { value: "350-900€", label: "CA perdu", sub: "PAR APPEL" },
  { value: "28 000€", label: "économisés", sub: "PAR POSTE / AN" },
  { value: "24/7", label: "disponibilité", sub: "GARANTIE" },
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
    <div className="mb-8">
      <span className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.22em] text-primary">
        <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
        {children}
      </span>
    </div>
  )
}

function Card({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`border border-foreground/10 bg-card/80 p-8 backdrop-blur transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/30 lg:p-10 ${className}`} style={style}>
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

      <section className="relative flex min-h-[82vh] flex-col justify-center overflow-hidden px-6 lg:px-12">
        <div className="audit-grid-bg pointer-events-none absolute inset-0 opacity-55" aria-hidden="true" />
        <div className="pointer-events-none absolute right-8 top-1/2 h-[280px] w-[280px] -translate-y-1/2 opacity-25 md:right-16 md:h-[380px] md:w-[380px] lg:right-24 lg:h-[520px] lg:w-[520px]" aria-hidden="true">
          <AnimatedSphere />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] py-28 lg:py-36">
          <Reveal className="mb-8 flex flex-wrap items-center gap-5" delay={40}>
            <span className="font-display text-3xl tracking-tight sm:text-4xl">Decroche Agency</span>
            <span className="font-display text-3xl text-muted-foreground sm:text-4xl">×</span>
            <img
              src="/logos/pink-koi-logo.png"
              alt="Logo Pink Koï"
              className="size-16 rounded-full bg-white object-contain p-2 shadow-[0_12px_40px_rgba(19,19,14,0.10)] ring-1 ring-foreground/10"
              loading="eager"
              decoding="async"
            />
            <span className="font-display text-3xl tracking-tight sm:text-4xl">Pink Koï</span>
          </Reveal>

          <Reveal delay={90}>
            <span className="mb-8 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
              <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
              Audit opérationnel · accueil vocal
            </span>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="max-w-5xl text-balance font-display text-[clamp(2.4rem,8.5vw,7rem)] leading-[0.92] tracking-tight">
              <span className="block">Pink Koï garde la demande.</span>
              <span className="block text-muted-foreground">L’accueil vocal récupère les appels.</span>
            </h1>
          </Reveal>

          <div className="mt-12 grid items-end gap-12 lg:grid-cols-2 lg:gap-24">
            <Reveal delay={250}>
              <p className="max-w-xl text-pretty text-xl leading-relaxed text-muted-foreground lg:text-2xl">
                Le site donne déjà les bonnes informations. La valeur se joue maintenant au téléphone : appels perdus, CA potentiel, coût d’un poste, disponibilité et réponse rapide.
              </p>
            </Reveal>

            <Reveal className="flex flex-col items-start gap-4 sm:flex-row" delay={320} direction="right">
              <Button asChild size="lg" className="group">
                <a href="#kpi-impact">
                  Voir les KPI utiles
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#appel-test">Lire l’appel test</a>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 px-6 py-8 lg:px-12" aria-label="Indicateurs commerciaux Decroche appliqués à Pink Koï">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {agencyStats.map((stat) => (
            <div key={stat.label} className="min-h-28 bg-background p-6 lg:p-8">
              <span className="shrink-0 font-display text-4xl text-foreground lg:text-5xl">{stat.value}</span>
              <span className="mt-3 block text-sm leading-tight text-muted-foreground">
                {stat.label}
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  {stat.sub}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-b border-foreground/10 px-6 py-24 lg:px-12 lg:py-32" id="kpi-impact">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 flex flex-col gap-8 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
                <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
                Le problème
              </span>
              <h2 className="text-balance font-display text-4xl tracking-tight lg:text-6xl">
                Chaque appel manqué
                <br />
                <span className="text-muted-foreground">est une demande perdue.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} direction="right">
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Ce bloc reprend les KPI forts du site agence et les met au service de Pink Koï. Ce sont des ordres de grandeur à valider, pas une promesse de chiffre d’affaires.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px bg-foreground/10 md:grid-cols-2" aria-label="KPI Pink Koï">
            {topKpis.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Reveal key={metric.label} delay={index * 110} className="h-full">
                  <div className="h-full bg-background p-8 lg:p-12">
                    <Icon className="mb-8 size-6 text-primary" aria-hidden="true" />
                    <AnimatedNumber
                      end={metric.end}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      className="block font-display text-6xl leading-none tracking-tight text-primary lg:text-8xl"
                    />
                    <div className="mt-5 text-lg text-muted-foreground">{metric.label}</div>
                    <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{metric.detail}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-32" id="priorites">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Priorités de l’audit</SectionLabel>
          <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-24">
            <Reveal>
              <h2 className="text-balance font-display text-4xl tracking-tight lg:text-6xl">
                Quatre pertes possibles. Quatre corrections simples.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Un bon audit ne liste pas des idées. Il montre où la demande se bloque et ce qu’il faut tester en premier.
              </p>
            </Reveal>
            <div className="grid gap-4">
              {recommendations.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <Card className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Priorité</p>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-balance">{item.title}</h3>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="border border-foreground/10 bg-secondary/50 p-5">
                        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Aujourd’hui</p>
                        <p className="text-base leading-7">{item.current}</p>
                      </div>
                      <div className="border border-primary/20 bg-primary/5 p-5">
                        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">Avec l’assistant</p>
                        <p className="text-base leading-7">{item.next}</p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Base vérifiée</SectionLabel>
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-24">
            <Reveal>
              <h2 className="text-balance font-display text-4xl tracking-tight lg:text-6xl">
                Les réponses sont déjà là. Elles doivent être faciles à obtenir.
              </h2>
            </Reveal>
            <div className="grid gap-px bg-foreground/10 sm:grid-cols-2">
              {facts.map((fact, index) => (
                <Reveal key={fact.label} delay={index * 70} className="h-full">
                  <div className="h-full bg-background p-7">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">{fact.label}</p>
                    {"href" in fact ? (
                      <a href={fact.href} rel={safeExternalRel} target="_blank" className="mt-3 inline-flex text-xl font-semibold text-primary underline-offset-4 hover:underline">
                        {fact.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-xl font-semibold leading-tight">{fact.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-px bg-foreground/10 md:grid-cols-4" aria-label="Valeurs retrouvées de l’audit Pink Koï">
            {auditValues.map((item, index) => (
              <Reveal key={item.label} delay={index * 80} className="h-full">
                <div className="h-full bg-card p-8">
                  <div className="font-display text-5xl leading-none text-primary">{item.value}</div>
                  <h3 className="mt-4 text-lg font-semibold">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-32" id="appel-test">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.84fr_1.16fr] lg:items-start lg:gap-24">
          <Reveal>
            <SectionLabel>Simulation vocale</SectionLabel>
            <h2 className="text-balance font-display text-4xl tracking-tight lg:text-6xl">
              Une vraie question. Une vraie réponse. Puis un résumé exploitable.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              La voix répond dans l’ordre : horaires, contexte, prix, collecte utile, confirmation humaine.
            </p>
          </Reveal>
          <Reveal delay={140} direction="right">
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
                <span
                  key={`${height}-${index}`}
                  className="audit-wave-bar w-1 rounded-full bg-blue-200/70"
                  style={{ height: `${height}px`, animationDelay: `${index * 70}ms` }}
                />
              ))}
            </div>
            <div className="space-y-3">
              {callLines.map((line, index) => {
                const isRestaurant = line.speaker === "Accueil Pink Koï"
                return (
                  <Reveal key={`${line.speaker}-${index}`} delay={index * 55}>
                    <div
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
                  </Reveal>
                )
              })}
            </div>
            <div className="mt-6 border border-background/15 bg-background/10 p-5 text-base leading-7 text-background/78">
              Résultat : horaires et prix répondus, contact collecté, demande résumée, table encore à confirmer par Pink Koï.
            </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground px-6 py-24 text-background lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Livrable Decroche</SectionLabel>
          <div className="grid gap-16 lg:grid-cols-[0.84fr_1.16fr] lg:items-start lg:gap-24">
            <Reveal>
              <h2 className="text-balance font-display text-4xl tracking-tight lg:text-6xl">
                Une preuve appelable avant toute mise en service.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-background/70">
                Le but n’est pas de promettre. Le but est d’écouter, tester et décider sur des appels réels simulés.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map(([title, text], index) => (
                <Reveal key={title} delay={index * 100} className="h-full">
                  <div className="h-full border border-background/15 bg-background/8 p-8">
                    <CalendarCheck className="mb-6 size-6 text-blue-200" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-4 text-base leading-7 text-background/70">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full border border-background/15 p-8 lg:p-10">
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
            </Reveal>
            <Reveal className="h-full" delay={120} direction="right">
              <div className="h-full border border-background/15 p-8 lg:p-10">
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
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Plan de test</SectionLabel>
          <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <Reveal>
              <h2 className="text-balance font-display text-4xl tracking-tight lg:text-6xl">
                Dix jours pour savoir si ça mérite d’aller plus loin.
              </h2>
            </Reveal>
            <div className="grid gap-px bg-foreground/10">
              {deliverySteps.map((step, index) => (
                <Reveal key={step.day} delay={index * 85}>
                  <div className="grid gap-4 bg-background p-8 sm:grid-cols-[130px_1fr] sm:items-center">
                    <div className="font-mono text-sm uppercase tracking-[0.22em] text-primary">{step.day}</div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                      <p className="mt-2 text-base leading-7 text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CalSection />
    </main>
  )
}
