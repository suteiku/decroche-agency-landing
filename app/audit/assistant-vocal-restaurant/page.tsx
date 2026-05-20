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
  UserRound,
} from "lucide-react"

import { AnimatedSphere } from "@/components/landing/animated-sphere"
import { Button } from "@/components/primitives/button"
import { safeExternalRel, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Audit assistant vocal restaurant — Exemple client",
  description:
    "Exemple d’audit simple, sans jargon, pour présenter un assistant vocal IA à un restaurant avant une démo privée.",
  robots: {
    index: false,
    follow: false,
  },
}

const painPoints = [
  {
    title: "Les mêmes questions reviennent souvent",
    proof: "Prix, horaires, enfants, groupes, anniversaires, allergies, réservation.",
    impact: "L’équipe répète les mêmes réponses, surtout pendant les moments où elle doit déjà gérer le service.",
  },
  {
    title: "Le client oublie parfois les infos utiles",
    proof: "Pour un groupe, il manque souvent la date, l’heure, le nombre d’enfants ou le motif de la venue.",
    impact: "L’équipe doit rappeler, compléter la demande ou gérer une réservation mal préparée.",
  },
  {
    title: "Certains appels doivent rester humains",
    proof: "Allergie, plainte, retard, remboursement, grande réservation ou demande spéciale.",
    impact: "L’assistant doit filtrer et préparer, mais ne doit jamais prendre une décision sensible seul.",
  },
]

const assistantCanDo = [
  "répondre aux horaires et à l’adresse",
  "expliquer les prix validés",
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
    text: "On choisit un seul flux : questions fréquentes avant réservation.",
  },
  {
    day: "Jours 2–3",
    title: "On valide les réponses du restaurant",
    text: "Horaires, prix, règles groupes, enfants, anniversaires, allergies, transfert humain.",
  },
  {
    day: "Jours 4–6",
    title: "On prépare l’assistant vocal privé",
    text: "Il parle comme un accueil professionnel, pose les bonnes questions et sait quand s’arrêter.",
  },
  {
    day: "Jours 7–8",
    title: "On teste les appels compliqués",
    text: "Plainte, allergie, client pressé, infos contradictoires, demande spéciale.",
  },
  {
    day: "Jours 9–10",
    title: "Vous testez avant toute utilisation réelle",
    text: "Vous appelez le numéro de test, vous validez, puis on décide si on lance un pilote supervisé.",
  },
]

const callLines = [
  {
    speaker: "Client",
    text: "Bonjour, vous êtes ouverts ce soir ? On serait 6 adultes et 2 enfants.",
  },
  {
    speaker: "Assistant vocal",
    text: "Bonjour, oui je peux vous aider. Pour bien préparer votre demande, les enfants ont moins de 10 ans ?",
  },
  {
    speaker: "Client",
    text: "Oui, et c’est pour un anniversaire vers 20h30.",
  },
  {
    speaker: "Assistant vocal",
    text: "Très bien. Je prépare un résumé pour l’équipe : 6 adultes, 2 enfants, anniversaire, 20h30. L’équipe devra confirmer la disponibilité.",
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

      <section className="relative px-5 pb-16 pt-14 sm:px-8 lg:pb-24 lg:pt-20">
        <div className="audit-grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="audit-reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
              <PhoneCall className="size-4 text-primary" aria-hidden="true" />
              Audit rapide — Restaurant Sakura Buffet
            </div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Un assistant vocal peut gérer vos appels simples.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Votre restaurant donne envie. Le problème n’est pas votre image : c’est le temps perdu sur les mêmes
              questions avant réservation. Un assistant vocal peut décrocher, répondre, filtrer et transmettre.
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
                ["10 jours", "pour un premier test"],
                ["1 flux", "questions fréquentes"],
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
                    Appel entrant
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-full bg-background text-foreground">
                    <Mic2 className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-background/55">L’assistant dit :</div>
                  <p className="mt-4 font-display text-4xl leading-none text-balance sm:text-5xl">
                    Bonjour, je peux vous aider pour les horaires, les tarifs ou préparer une demande pour l’équipe.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Répond aux questions simples",
                    "Pose les bonnes questions",
                    "Transfère les cas sensibles",
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
                Niveau actuel estimé
              </div>
              <div className="mt-8 font-display text-5xl leading-none sm:text-6xl">Bon, mais dépendant de l’équipe.</div>
              <p className="mt-6 text-lg leading-8 text-background/70">
                Le restaurant est attractif, mais les appels simples reposent encore sur la disponibilité de l’équipe.
              </p>
            </Card>
            <Card>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">Ce qu’on voit tout de suite</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Le site donne envie.",
                  "Les informations principales existent.",
                  "Les clients ont encore des questions avant de réserver.",
                  "L’équipe doit répéter les mêmes réponses.",
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
          <SectionLabel>Les 3 points qui coûtent du temps</SectionLabel>
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
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">Le client parle. L’assistant répond simplement.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Le but n’est pas de faire une IA qui raconte beaucoup. Le but est de faire un accueil vocal calme,
              utile et prudent.
            </p>
          </div>
          <Card className="bg-foreground text-background">
            <div className="mb-6 flex items-center gap-3 text-background/70">
              <Headphones className="size-5" aria-hidden="true" />
              Appel simulé — 42 secondes
            </div>
            <div className="space-y-4">
              {callLines.map((line, index) => {
                const isAssistant = line.speaker === "Assistant vocal"
                return (
                  <div key={`${line.speaker}-${index}`} className={`flex gap-3 ${isAssistant ? "justify-start" : "justify-end"}`}>
                    {isAssistant && (
                      <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-background text-foreground">
                        <Sparkles className="size-4" aria-hidden="true" />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] rounded-[1.4rem] p-4 text-sm leading-6 ${
                        isAssistant ? "bg-background text-foreground" : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] opacity-60">{line.speaker}</div>
                      {line.text}
                    </div>
                    {!isAssistant && (
                      <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <UserRound className="size-4" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="mt-6 rounded-2xl border border-background/15 bg-background/10 p-4 text-sm leading-6 text-background/70">
              À aucun moment l’assistant ne confirme la table lui-même. Il prépare la demande et laisse l’équipe valider.
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
                  ["Un numéro de test", "Vous appelez et vous parlez avec l’assistant comme un vrai client."],
                  ["Vos informations validées", "Horaires, prix, adresse, règles groupes, enfants, anniversaires, transferts humains."],
                  ["Des scénarios de test", "On teste les cas simples, les cas sensibles et les demandes qui peuvent piéger l’assistant."],
                  ["Un résumé pour l’équipe", "Chaque demande importante devient une note claire avec les infos utiles et l’action recommandée."],
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
                On commence petit. Un seul type d’appel, un numéro privé, des tests, puis seulement après une utilisation réelle si tout est validé.
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
            L’assistant vocal s’occupe des questions répétitives, prépare les demandes et transmet ce qui doit être confirmé par l’humain.
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
            Exemple fictif présenté pour montrer le format reçu par un client. Aucun résultat financier garanti.
          </p>
        </div>
      </section>
    </main>
  )
}
