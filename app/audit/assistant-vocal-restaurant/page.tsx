import type { CSSProperties, ReactNode } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Headphones,
  Mic2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { AnimatedSphere } from "@/components/landing/animated-sphere"
import { Button } from "@/components/primitives/button"
import { pinkKoiAudit, pinkKoiPublicSnapshot, runPinkKoiQa } from "@/lib/pink-koi-test"
import { safeExternalRel, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Audit assistant vocal Pink Koï — Exemple client",
  description:
    "Audit simple Pink Koï pour présenter un assistant vocal IA qui répond aux appels téléphoniques avant une démo privée.",
  robots: {
    index: false,
    follow: false,
  },
}

const painPoints = [
  {
    title: "Les mêmes appels reviennent souvent",
    proof: "Horaires, tarifs midi/soir, enfants, groupes, anniversaires, allergies, voiturier, réservation.",
    impact: "L’équipe doit répondre au téléphone alors qu’elle doit déjà gérer l’accueil, la salle et le service.",
  },
  {
    title: "Le client ne donne pas toujours les bonnes infos",
    proof: "Pour un groupe, il manque souvent la date, l’heure, le nombre d’adultes, le nombre d’enfants ou le motif de la venue.",
    impact: "L’équipe doit rappeler, compléter la demande ou traiter une réservation mal préparée.",
  },
  {
    title: "Certains appels doivent rester humains",
    proof: "Allergie, plainte, retard, remboursement, grande réservation, privatisation ou demande spéciale.",
    impact: "L’assistant doit filtrer et préparer, mais ne doit jamais prendre une décision sensible seul.",
  },
]

const assistantCanDo = [
  "décrocher un appel simple",
  "répondre aux horaires et à l’adresse",
  "expliquer les tarifs validés",
  "préparer une demande de groupe",
  "demander les infos manquantes",
  "rassurer sur les prochaines étapes",
  "transmettre un résumé clair à l’équipe",
]

const assistantWontDo = [
  "confirmer une table sans validation",
  "promettre une disponibilité",
  "gérer un paiement ou un remboursement",
  "garantir une information allergène",
  "répondre seul à une plainte sensible",
  "modifier une réservation existante",
]

const deliverySteps = [
  {
    day: "Jour 1",
    title: "On cadre les appels à traiter",
    text: "On choisit un seul flux : appels téléphoniques simples avant réservation.",
  },
  {
    day: "Jours 2–3",
    title: "On valide les réponses du restaurant",
    text: "Horaires, tarifs, règles groupes, enfants, anniversaires, allergies, transfert humain.",
  },
  {
    day: "Jours 4–6",
    title: "On prépare l’assistant vocal privé",
    text: "Il répond à voix haute, comme un accueil professionnel, pose les bonnes questions et sait quand s’arrêter.",
  },
  {
    day: "Jours 7–8",
    title: "On teste les appels compliqués",
    text: "Plainte, allergie, client pressé, infos contradictoires, demande spéciale.",
  },
  {
    day: "Jours 9–10",
    title: "Vous testez avant toute utilisation réelle",
    text: "Vous appelez le numéro de test, vous écoutez les réponses, vous validez, puis on décide si on lance un pilote supervisé.",
  },
]

const callLines = [
  {
    speaker: "Client",
    text: "Bonjour, vous êtes ouverts ce soir ? On serait 6 adultes et 2 enfants.",
  },
  {
    speaker: "Assistant vocal",
    text: "Bonjour. D’après les horaires publics de Pink Koï, le restaurant est ouvert ce soir de 19h à 23h. Pour préparer une demande complète à l’équipe, les enfants ont-ils moins de 10 ans ?",
  },
  {
    speaker: "Client",
    text: "Oui, et c’est pour un anniversaire vers 20h30.",
  },
  {
    speaker: "Assistant vocal",
    text: "Très bien. Je note : 6 adultes, 2 enfants de moins de 10 ans, un anniversaire et une arrivée souhaitée vers 20h30. Je transmets la demande à l’équipe Pink Koï pour confirmer la disponibilité.",
  },
]

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
      {children}
    </div>
  )
}

function Card({
  children,
  className = "",
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`rounded-[2rem] border border-foreground/10 bg-card/80 p-6 shadow-[0_24px_80px_rgba(19,19,14,0.06)] backdrop-blur ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default function VoiceRestaurantAuditPage() {
  const qa = runPinkKoiQa()
  const openingKpis = [
    {
      value: `${pinkKoiAudit.score}/100`,
      label: "score audit Pink Koï",
      note: "Vitrine forte, appels avant réservation à cadrer.",
    },
    {
      value: String(pinkKoiPublicSnapshot.sources.length),
      label: "sources publiques lues",
      note: "Menu, tarifs, horaires, réservation et infos pratiques.",
    },
    {
      value: `${qa.passed}/${qa.total}`,
      label: "scénarios QA",
      note: "Tarifs, horaires, groupe, anniversaire, allergie, plainte.",
    },
    {
      value: "0",
      label: "décision automatique",
      note: "L’équipe valide les tables, allergies, plaintes et paiements.",
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 noise-overlay" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_14%_10%,rgba(80,91,230,0.18),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(49,171,226,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.76),rgba(250,248,242,0.96))]" />

      <nav className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="focus-link text-lg font-semibold tracking-tight" aria-label="Retour accueil Decroche">
            Decroche.
          </Link>
          <div className="hidden text-sm text-muted-foreground md:block">Exemple client — assistant vocal</div>
          <Button asChild variant="outline" size="sm">
            <Link href={site.calUrl} rel={safeExternalRel} target="_blank">
              Demander une démo
            </Link>
          </Button>
        </div>
      </nav>

      <section className="px-5 pt-8 sm:px-8 lg:pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
            KPI de départ — Pink Koï
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {openingKpis.map((metric, index) => (
              <div
                key={metric.label}
                className="audit-reveal rounded-[1.75rem] border border-foreground/10 bg-card/75 p-5 shadow-sm backdrop-blur"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="font-display text-4xl leading-none tracking-tight">{metric.value}</div>
                <div className="mt-2 text-sm font-semibold text-foreground">{metric.label}</div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 pb-16 pt-12 sm:px-8 lg:pb-24 lg:pt-16">
        <div className="audit-grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="audit-reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
              <PhoneCall className="size-4 text-primary" aria-hidden="true" />
              Audit rapide — Pink Koï
            </div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Un assistant vocal IA pour les appels simples de Pink Koï.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Pink Koï donne déjà envie. Le problème n’est pas la vitrine : ce sont les appels répétitifs avant réservation.
              L’assistant décroche au téléphone, répond aux questions simples, collecte les détails et transmet à l’équipe.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <a href="#appel-test">
                  Voir l’exemple d’appel
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#ce-que-vous-recevez">Ce que vous recevez</a>
              </Button>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ["10 jours", "pour une démo appelable"],
                ["1 flux", "appels simples entrants"],
                ["Humain", "pour les décisions sensibles"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-foreground/10 bg-card/65 p-4 backdrop-blur">
                  <div className="text-2xl font-semibold tracking-tight">{value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="audit-reveal relative" style={{ animationDelay: "120ms" }}>
            <div className="audit-float relative mx-auto aspect-square max-w-[520px] overflow-hidden rounded-[3rem] border border-foreground/10 bg-foreground text-background shadow-[0_40px_120px_rgba(19,19,14,0.24)]">
              <div className="absolute inset-0 opacity-40">
                <AnimatedSphere />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.72))]" />
              <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <div className="rounded-full border border-background/20 px-4 py-2 text-xs uppercase tracking-[0.28em] text-background/70">
                    Appel téléphonique entrant
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-full bg-background text-foreground">
                    <Mic2 className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-background/55">L’assistant décroche :</div>
                  <p className="mt-4 font-display text-4xl leading-none text-balance sm:text-5xl">
                    Bonsoir, Pink Koï. Les horaires publics indiquent 19h à 23h ce soir. Je peux préparer votre demande pour l’équipe.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Décroche l’appel",
                    "Répond à voix haute",
                    "Pose les bonnes questions",
                    "Prépare un résumé équipe",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-background/15 bg-background/10 p-3 text-sm text-background/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8" id="diagnostic">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Résultat de l’audit</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="audit-scanline bg-foreground text-background">
              <div className="flex items-center gap-3 text-background/70">
                <Clock className="size-5" aria-hidden="true" />
                Niveau actuel estimé — Pink Koï
              </div>
              <div className="mt-8 font-display text-5xl leading-none sm:text-6xl">Bon, mais dépendant de l’équipe.</div>
              <p className="mt-6 text-lg leading-8 text-background/70">
                Pink Koï est attractif, mais les appels simples reposent encore sur la disponibilité de l’équipe.
              </p>
            </Card>
            <Card>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">Ce qu’on voit tout de suite</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Le site Pink Koï donne envie.",
                  "Les informations principales existent déjà.",
                  "Les clients ont encore des questions avant de réserver.",
                  "L’équipe doit encore répondre aux mêmes appels.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-foreground/10 bg-secondary/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="text-base leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Les 3 appels qui coûtent du temps</SectionLabel>
          <div className="grid gap-5 lg:grid-cols-3">
            {painPoints.map((point, index) => (
              <Card key={point.title} className="audit-reveal" style={{ animationDelay: `${index * 90}ms` } as CSSProperties}>
                <div className="mb-8 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-balance">{point.title}</h2>
                <p className="mt-5 text-base leading-7 text-muted-foreground">{point.proof}</p>
                <div className="mt-6 rounded-2xl bg-secondary p-4 text-sm leading-6">
                  <span className="font-semibold">Ce que ça peut créer : </span>
                  {point.impact}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8" id="appel-test">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>Exemple d’appel</SectionLabel>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">Le client appelle. L’assistant vocal répond.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ce n’est pas un chat. Le client téléphone, l’assistant répond à voix haute, donne les informations utiles
              et prépare une note claire pour l’équipe.
            </p>
          </div>
          <Card className="bg-foreground text-background">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 text-background/70">
              <div className="flex items-center gap-3">
                <Headphones className="size-5" aria-hidden="true" />
                Appel téléphonique simulé — 42 secondes
              </div>
              <div className="rounded-full border border-background/15 px-3 py-1 text-xs uppercase tracking-[0.22em]">
                Voix, pas chat
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
                  const isAssistant = line.speaker === "Assistant vocal"
                  return (
                    <div
                      key={`${line.speaker}-${index}`}
                      className={`grid gap-3 rounded-[1.35rem] border p-4 sm:grid-cols-[9.5rem_1fr] ${
                        isAssistant
                          ? "border-background/15 bg-background text-foreground"
                          : "border-primary/35 bg-primary/20 text-background"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] opacity-65">
                        {isAssistant ? <Sparkles className="size-4" aria-hidden="true" /> : <PhoneCall className="size-4" aria-hidden="true" />}
                        {isAssistant ? "Voix assistant" : "Voix client"}
                      </div>
                      <p className="text-sm leading-6">{line.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-background/15 bg-background/10 p-4 text-sm leading-6 text-background/70">
              À aucun moment l’assistant ne confirme la table lui-même. Il répond au téléphone, prépare la demande et laisse l’équipe Pink Koï valider.
            </div>
          </Card>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8" id="ce-que-vous-recevez">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Ce que vous recevez</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">Un assistant vocal privé, testé avant utilisation.</h2>
              <div className="mt-8 space-y-5">
                {[
                  ["Un numéro de test", "Vous appelez et vous parlez à voix haute avec l’assistant comme un vrai client."],
                  ["Vos informations validées", "Horaires, tarifs, adresse, règles groupes, enfants, anniversaires, transferts humains."],
                  ["Des scénarios de test", "On teste les cas simples, les cas sensibles et les demandes qui peuvent piéger l’assistant."],
                  ["Un résumé pour l’équipe", "Chaque appel important devient une note claire avec les infos utiles et l’action recommandée."],
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-foreground/10 bg-secondary/60 p-4">
                    <CalendarCheck className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-6">
              <Card>
                <h3 className="text-2xl font-semibold tracking-tight">L’assistant peut faire</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {assistantCanDo.map((item) => (
                    <div key={item} className="flex gap-2 text-sm leading-6">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="border-foreground/15 bg-foreground text-background">
                <h3 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
                  <ShieldCheck className="size-6" aria-hidden="true" />
                  Il ne fait pas au départ
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {assistantWontDo.map((item) => (
                    <div key={item} className="rounded-2xl border border-background/15 bg-background/10 p-3 text-sm leading-6 text-background/75">
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Plan simple</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-6xl">Premier assistant en 10 jours.</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                On commence petit. Un seul type d’appel, un numéro privé, des tests vocaux, puis seulement après une utilisation réelle si tout est validé.
              </p>
            </div>
            <div className="space-y-4">
              {deliverySteps.map((step) => (
                <Card key={step.day} className="grid gap-4 p-5 sm:grid-cols-[110px_1fr] sm:items-center">
                  <div className="rounded-full bg-primary/10 px-4 py-2 text-center text-sm font-semibold text-primary">{step.day}</div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-foreground/10 bg-foreground p-8 text-center text-background shadow-[0_50px_140px_rgba(19,19,14,0.24)] sm:p-12">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-background text-foreground">
            <PhoneCall className="size-6" aria-hidden="true" />
          </div>
          <h2 className="font-display text-4xl leading-tight sm:text-6xl">Votre équipe garde les décisions importantes.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-background/72">
            L’assistant vocal répond aux appels répétitifs, prépare les demandes et transmet ce qui doit être confirmé par l’humain.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link href={site.calUrl} rel={safeExternalRel} target="_blank">
                Préparer une démo appelable
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-background/25 text-background hover:bg-background/10">
              <Link href="/audit/pink-koi-test-interne">Voir l’audit technique interne</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-background/50">
            Exemple Pink Koï basé sur des informations publiques, à valider avant tout envoi réel. Aucun résultat financier garanti.
          </p>
        </div>
      </section>
    </main>
  )
}
