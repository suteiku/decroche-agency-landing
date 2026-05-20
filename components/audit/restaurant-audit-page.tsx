import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  FileText,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { AnimatedSphere } from "@/components/landing/animated-sphere"
import { Button } from "@/components/primitives/button"
import type { AuditPayload } from "@/lib/pink-koi-test"
import { pinkKoiCrmRecord, pinkKoiPublicSnapshot, runPinkKoiQa } from "@/lib/pink-koi-test"
import { safeExternalRel } from "@/lib/site"

const scoreColor = "#4f46e5"

function ScoreGauge({ score }: { score: number }) {
  return (
    <div className="relative mx-auto flex size-44 items-center justify-center rounded-full bg-background shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(${scoreColor} ${score * 3.6}deg, rgba(15, 23, 42, 0.08) 0deg)`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-3 rounded-full bg-background" aria-hidden="true" />
      <div className="relative text-center">
        <div className="font-display text-6xl leading-none tracking-tight">{score}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.35em] text-muted-foreground">/100</div>
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-sm backdrop-blur">
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </div>
  )
}

function GuardrailCard({ icon: Icon, title, text }: { icon: typeof ShieldCheck; title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-foreground/10 bg-white/70 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="font-display text-2xl leading-none">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  )
}

export function RestaurantAuditPage({ audit, printMode = false }: { audit: AuditPayload; printMode?: boolean }) {
  const qa = runPinkKoiQa()

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground noise-overlay">
      {!printMode ? (
        <div className="sticky top-0 z-30 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" className="focus-link font-display text-2xl tracking-tight" aria-label="Retour Decroche">
              Decroche<span className="text-primary">.</span>
            </Link>
            <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
              <LockKeyhole className="size-4" aria-hidden="true" />
              Test interne — ne pas envoyer
            </div>
            <Button asChild size="sm" variant="outline">
              <Link href={audit.cta.href}>Cockpit test</Link>
            </Button>
          </div>
        </div>
      ) : null}

      <section className="relative px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="absolute right-[-10rem] top-20 size-[34rem] opacity-20" aria-hidden="true">
          <AnimatedSphere />
        </div>
        <div className="absolute left-[-12rem] top-0 size-[28rem] rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionLabel>Audit Next.js privé</SectionLabel>
            <h1 className="max-w-4xl font-display text-6xl leading-[0.88] tracking-[-0.055em] text-balance sm:text-7xl lg:text-8xl">
              Vrai test restaurant, sans action risquée.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Cas réel basé sur les pages publiques de <span className="font-medium text-foreground">{audit.company.name}</span>. Objectif : tester le pipeline Decroche complet avant de proposer quoi que ce soit à un restaurateur.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={audit.cta.href}>
                  Ouvrir le cockpit complet <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/audit/${audit.slug}/print`}>Version print</Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
              {[
                "Aucun contact restaurant",
                "Aucune réservation",
                "Données publiques uniquement",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-full border border-foreground/10 bg-white/60 px-4 py-2">
                  <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-foreground/10 bg-white/70 p-5 shadow-[0_40px_120px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-8">
            <ScoreGauge score={audit.score} />
            <div className="mt-8 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Verdict interne</p>
              <p className="mt-3 text-xl leading-8 text-foreground">{audit.verdict}</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-foreground p-5 text-background">
                <div className="text-3xl font-semibold">{qa.passed}/{qa.total}</div>
                <div className="mt-1 text-sm text-background/70">scénarios agent passent</div>
              </div>
              <div className="rounded-3xl border border-foreground/10 bg-background p-5">
                <div className="text-3xl font-semibold">{pinkKoiPublicSnapshot.sources.length}</div>
                <div className="mt-1 text-sm text-muted-foreground">sources publiques lues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Score opérationnel</SectionLabel>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {audit.scoreBreakdown.map((item) => {
              const percent = Math.round((item.value / item.max) * 100)
              return (
                <div key={item.label} className="rounded-[2rem] border border-foreground/10 bg-white/65 p-5 shadow-sm backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-medium leading-6">{item.label}</h2>
                    <span className="font-mono text-sm text-primary">
                      {item.value}/{item.max}
                    </span>
                  </div>
                  <div className="mt-5 h-2 rounded-full bg-foreground/10">
                    <div className="h-2 rounded-full bg-primary" style={{ width: `${percent}%` }} aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.note}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Fuites visibles</SectionLabel>
          <div className="grid gap-5 lg:grid-cols-3">
            {audit.visibleLeaks.map((leak, index) => (
              <article key={leak.title} className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground p-6 text-background shadow-[0_30px_90px_rgba(15,23,42,0.16)]">
                <div className="absolute right-4 top-4 font-display text-7xl text-background/10">0{index + 1}</div>
                <AlertTriangle className="size-7 text-blue-200" aria-hidden="true" />
                <h2 className="relative mt-6 font-display text-3xl leading-none">{leak.title}</h2>
                <p className="relative mt-4 text-sm leading-6 text-background/72">{leak.evidence}</p>
                <div className="relative mt-5 rounded-2xl bg-background/10 p-4 text-sm leading-6">
                  <span className="font-medium text-blue-100">Risque business : </span>
                  {leak.businessRisk}
                </div>
                <p className="relative mt-4 text-sm leading-6 text-blue-100">{leak.testSignal}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] border border-primary/20 bg-primary/8 p-6 sm:p-8">
            <Sparkles className="size-8 text-primary" aria-hidden="true" />
            <h2 className="mt-5 font-display text-4xl leading-none tracking-tight">{audit.valueHypothesis.label}</h2>
            <p className="mt-5 text-lg leading-8 text-foreground">{audit.valueHypothesis.text}</p>
            <p className="mt-5 rounded-2xl bg-background/70 p-4 text-sm leading-6 text-muted-foreground">
              {audit.valueHypothesis.importantNote}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {audit.quickWins.map((win) => (
              <div key={win} className="rounded-[2rem] border border-foreground/10 bg-white/70 p-5 shadow-sm">
                <CheckCircle2 className="size-6 text-primary" aria-hidden="true" />
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{win}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Preuve que le pipeline est complet</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <GuardrailCard
              icon={Database}
              title="Data propre"
              text="Robots.txt, sitemap et pages publiques. Les inconnues sont listées au lieu d’être inventées."
            />
            <GuardrailCard
              icon={FileText}
              title="Audit JSON"
              text="La page est alimentée par un payload structuré, prêt à être généré automatiquement pour d’autres secteurs."
            />
            <GuardrailCard
              icon={Bot}
              title="Agent testé"
              text="Le simulateur répond aux cas prix, horaires, groupes, allergènes, plaintes et prompt injection."
            />
            <GuardrailCard
              icon={ShieldCheck}
              title="Handoff humain"
              text="Aucune réservation, paiement, allergie ou plainte n’est traité sans validation humaine."
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-foreground/10 bg-white/70 p-6 shadow-sm sm:p-8">
            <SectionLabel>Fiche CRM Notion mock</SectionLabel>
            <dl className="grid gap-4 text-sm">
              {Object.entries(pinkKoiCrmRecord).map(([key, value]) => (
                <div key={key} className="rounded-2xl border border-foreground/10 bg-background/70 p-4">
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{key}</dt>
                  <dd className="mt-2 leading-6 text-foreground">{String(value)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-[2.5rem] border border-foreground/10 bg-white/70 p-6 shadow-sm sm:p-8">
            <SectionLabel>Sources publiques</SectionLabel>
            <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
              {pinkKoiPublicSnapshot.sources.map((source) => (
                <li key={source} className="flex gap-3 rounded-2xl border border-foreground/10 bg-background/70 p-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <a className="focus-link break-all hover:text-foreground" href={source} target="_blank" rel={safeExternalRel}>
                    {source}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.75rem] bg-foreground p-6 text-background shadow-[0_40px_120px_rgba(15,23,42,0.18)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/55">Offre test simulée</p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl leading-none tracking-tight">
                {audit.demoOffer}
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-6 text-background/65">{audit.disclaimer}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link href={audit.cta.href}>Voir le cockpit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/25 text-background hover:bg-background/10">
                <Link href="/">Retour site</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
