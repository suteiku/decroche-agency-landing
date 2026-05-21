import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Database,
  FileText,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from "lucide-react"

import { AnimatedSphere } from "@/components/landing/animated-sphere"
import { AnimatedWave } from "@/components/landing/animated-wave"
import { Button } from "@/components/primitives/button"
import type { AuditPayload } from "@/lib/pink-koi-test"
import {
  pinkKoiCloseBridge,
  pinkKoiCloseOffer,
  pinkKoiComplianceGates,
  pinkKoiCrmRecord,
  pinkKoiImplementationStack,
  pinkKoiPostCloseActions,
  pinkKoiPublicSnapshot,
  runPinkKoiQa,
} from "@/lib/pink-koi-test"
import { safeExternalRel } from "@/lib/site"

const scoreColor = "#4f46e5"

function ScoreGauge({ score }: { score: number }) {
  return (
    <div className="audit-float relative mx-auto flex size-48 items-center justify-center rounded-full bg-background shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
      <div
        className="absolute inset-0 rounded-full transition-[background] duration-700"
        style={{
          background: `conic-gradient(${scoreColor} ${score * 3.6}deg, rgba(15, 23, 42, 0.08) 0deg)`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-3 rounded-full bg-background shadow-inner" aria-hidden="true" />
      <div className="relative text-center">
        <div className="font-display text-7xl leading-none tracking-tight">{score}</div>
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
    <div className="audit-reveal rounded-[2rem] border border-foreground/10 bg-white/70 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_30px_90px_rgba(15,23,42,0.10)]">
      <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="font-display text-2xl leading-none">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  )
}

function ClosingBridge() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <SectionLabel>Argument de closing</SectionLabel>
          <h2 className="font-display text-5xl leading-none tracking-tight text-balance sm:text-6xl">
            On ne vend pas un gadget. On vend un assistant vocal utile dès le premier appel.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            La page doit amener le prospect à une conclusion simple : son site donne envie, mais l’équipe perd encore du temps sur les mêmes appels avant réservation.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {pinkKoiCloseBridge.map((item, index) => (
            <article
              key={item.label}
              className="audit-reveal group relative overflow-hidden rounded-[2.25rem] border border-foreground/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_90px_rgba(15,23,42,0.10)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="absolute right-5 top-4 font-display text-7xl text-foreground/[0.035]">0{index + 1}</div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{item.label}</p>
              <h3 className="relative mt-5 font-display text-3xl leading-none">{item.value}</h3>
              <p className="relative mt-5 text-sm leading-6 text-muted-foreground">{item.closeAngle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function OfferCloseCard({ audit }: { audit: AuditPayload }) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] bg-foreground text-background shadow-[0_40px_120px_rgba(15,23,42,0.18)]">
        <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-15 lg:block" aria-hidden="true">
            <AnimatedWave />
          </div>
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/55">Offre de fermeture</p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl leading-none tracking-tight sm:text-6xl">
              {pinkKoiCloseOffer.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-background/78">{pinkKoiCloseOffer.promise}</p>
            <p className="mt-5 max-w-2xl rounded-2xl border border-background/15 bg-background/10 p-4 text-sm leading-6 text-background/65">
              {pinkKoiCloseOffer.priceNote} Aucun résultat financier garanti. Le but est de tester un flux d’appels réel, mesurable et supervisé.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link href={audit.cta.href}>Voir le cockpit de livraison</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/25 text-background hover:bg-background/10">
                <Link href={`/audit/${audit.slug}/print`}>Ouvrir la version print</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-[2rem] border border-background/15 bg-background/10 p-6 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-background/55">Inclus si on close</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-background/78">
              {pinkKoiCloseOffer.includes.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-background/10 p-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-200" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function PostCloseAndStack() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel>Après closing</SectionLabel>
            <h2 className="font-display text-5xl leading-none tracking-tight text-balance sm:text-6xl">
              Dès qu’il dit oui, on sait quoi faire.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              La vente ne doit pas créer du flou. Elle déclenche un protocole : cadrage, data minimale, validation, prototype, QA, pilote.
            </p>
            <div className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-5 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">Point clé :</span> tant que le numéro officiel n’est pas connecté, Decroche reste en mode sûr : numéro de test, brouillon, résumé équipe, validation humaine.
            </div>
          </div>
          <div className="space-y-3">
            {pinkKoiPostCloseActions.map((item, index) => (
              <div
                key={item.phase}
                className="audit-reveal grid gap-4 rounded-[1.75rem] border border-foreground/10 bg-white/70 p-5 shadow-sm backdrop-blur md:grid-cols-[9rem_1fr]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{item.phase}</div>
                <div>
                  <p className="font-medium leading-6">{item.action}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.riskGate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2.5rem] border border-foreground/10 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
            <SectionLabel>Stack prête par niveau</SectionLabel>
            <div className="space-y-4">
              {pinkKoiImplementationStack.map((item) => (
                <div key={item.layer} className="rounded-2xl border border-foreground/10 bg-background/70 p-4">
                  <h3 className="font-display text-2xl leading-none">{item.layer}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground"><span className="font-semibold text-foreground">V1 : </span>{item.v1}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground"><span className="font-semibold text-foreground">Après validation : </span>{item.later}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-foreground/10 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
            <SectionLabel>RGPD / voix IA / légal</SectionLabel>
            <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
              {pinkKoiComplianceGates.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-foreground/10 bg-background/70 p-3">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-2xl bg-foreground p-4 text-xs leading-5 text-background/70">
              Ceci n’est pas un avis juridique. Avant production avec données client réelles : cadre écrit, validation client, et si besoin avis expert/partenaire qualifié.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function RestaurantAuditPage({ audit, printMode = false }: { audit: AuditPayload; printMode?: boolean }) {
  const qa = runPinkKoiQa()
  const openingKpis = [
    {
      value: `${audit.score}/100`,
      label: "score audit Pink Koï",
      note: "Vitrine premium, mais appels pré-réservation à cadrer.",
    },
    {
      value: String(pinkKoiPublicSnapshot.sources.length),
      label: "sources publiques",
      note: "Menu, tarifs, horaires, réservation et informations pratiques.",
    },
    {
      value: `${qa.passed}/${qa.total}`,
      label: "tests QA",
      note: "Prix, horaires, groupes, allergènes, plaintes et sécurité.",
    },
    {
      value: "10j",
      label: "prototype vocal",
      note: "Numéro de test privé, aucune réservation réelle confirmée.",
    },
  ]

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
              Audit privé — closing test
            </div>
            <Button asChild size="sm" variant="outline">
              <Link href={audit.cta.href}>Cockpit test</Link>
            </Button>
          </div>
        </div>
      ) : null}

      <section className="px-4 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-sm backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            KPI de départ — Pink Koï
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {openingKpis.map((metric, index) => (
              <div
                key={metric.label}
                className="audit-reveal rounded-[1.75rem] border border-foreground/10 bg-white/70 p-5 shadow-sm backdrop-blur"
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

      <section className="relative px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="audit-grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="absolute right-[-10rem] top-10 size-[34rem] opacity-20" aria-hidden="true">
          <AnimatedSphere />
        </div>
        <div className="absolute left-[-12rem] top-0 size-[30rem] rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="audit-reveal">
            <SectionLabel>Audit restaurant prêt à closer</SectionLabel>
            <h1 className="max-w-4xl font-display text-6xl leading-[0.88] tracking-[-0.055em] text-balance sm:text-7xl lg:text-8xl">
              Transformer les appels répétitifs de Pink Koï en demandes mieux préparées.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Cas réel basé sur les pages publiques de <span className="font-medium text-foreground">{audit.company.name}</span>. L’objectif n’est pas de juger le restaurant : c’est de montrer un assistant vocal IA simple, sûr et vendable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={audit.cta.href}>
                  Voir le cockpit de livraison <ArrowRight className="size-4" aria-hidden="true" />
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
              ].map((item, index) => (
                <div
                  key={item}
                  className="audit-reveal flex items-center gap-2 rounded-full border border-foreground/10 bg-white/60 px-4 py-2 shadow-sm backdrop-blur"
                  style={{ animationDelay: `${160 + index * 70}ms` }}
                >
                  <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="audit-reveal rounded-[2.75rem] border border-foreground/10 bg-white/72 p-5 shadow-[0_40px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8" style={{ animationDelay: "120ms" }}>
            <div className="audit-scanline rounded-[2rem] border border-foreground/10 bg-background/70 p-6">
              <ScoreGauge score={audit.score} />
              <div className="mt-8 text-center">
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Verdict pour ouvrir le rendez-vous</p>
                <p className="mt-3 text-xl leading-8 text-foreground">{audit.verdict}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-foreground p-5 text-background">
                <div className="text-3xl font-semibold">{qa.passed}/{qa.total}</div>
                <div className="mt-1 text-sm text-background/70">QA vocal</div>
              </div>
              <div className="rounded-3xl border border-foreground/10 bg-background p-5">
                <div className="text-3xl font-semibold">{pinkKoiPublicSnapshot.sources.length}</div>
                <div className="mt-1 text-sm text-muted-foreground">sources lues</div>
              </div>
              <div className="rounded-3xl border border-primary/20 bg-primary/8 p-5">
                <div className="text-3xl font-semibold">10j</div>
                <div className="mt-1 text-sm text-muted-foreground">prototype vocal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Score opérationnel</SectionLabel>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {audit.scoreBreakdown.map((item, index) => {
              const percent = Math.round((item.value / item.max) * 100)
              return (
                <div
                  key={item.label}
                  className="audit-reveal rounded-[2rem] border border-foreground/10 bg-white/65 p-5 shadow-sm backdrop-blur transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_30px_80px_rgba(15,23,42,0.09)]"
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-medium leading-6">{item.label}</h2>
                    <span className="font-mono text-sm text-primary">
                      {item.value}/{item.max}
                    </span>
                  </div>
                  <div className="mt-5 h-2 rounded-full bg-foreground/10">
                    <div className="h-2 rounded-full bg-primary transition-[width] duration-700" style={{ width: `${percent}%` }} aria-hidden="true" />
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
          <SectionLabel>Appels visibles à transformer en offre</SectionLabel>
          <div className="grid gap-5 lg:grid-cols-3">
            {audit.visibleLeaks.map((leak, index) => (
              <article
                key={leak.title}
                className="audit-reveal relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground p-6 text-background shadow-[0_30px_90px_rgba(15,23,42,0.16)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_38px_110px_rgba(15,23,42,0.22)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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

      <ClosingBridge />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="audit-shimmer rounded-[2.5rem] border border-primary/20 bg-[linear-gradient(120deg,rgba(79,70,229,0.08),rgba(14,165,233,0.08),rgba(255,255,255,0.72))] p-6 sm:p-8">
            <Sparkles className="size-8 text-primary" aria-hidden="true" />
            <h2 className="mt-5 font-display text-4xl leading-none tracking-tight">{audit.valueHypothesis.label}</h2>
            <p className="mt-5 text-lg leading-8 text-foreground">{audit.valueHypothesis.text}</p>
            <p className="mt-5 rounded-2xl bg-background/70 p-4 text-sm leading-6 text-muted-foreground">
              {audit.valueHypothesis.importantNote}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {audit.quickWins.map((win, index) => (
              <div
                key={win}
                className="audit-reveal rounded-[2rem] border border-foreground/10 bg-white/70 p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_26px_70px_rgba(15,23,42,0.08)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CheckCircle2 className="size-6 text-primary" aria-hidden="true" />
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{win}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfferCloseCard audit={audit} />
      <PostCloseAndStack />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Preuve que le pipeline est complet</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <GuardrailCard icon={Database} title="Data propre" text="Robots.txt, sitemap et pages publiques. Les inconnues sont listées au lieu d’être inventées." />
            <GuardrailCard icon={FileText} title="Audit JSON" text="La page est alimentée par un payload structuré, prêt à être généré automatiquement pour d’autres secteurs." />
            <GuardrailCard icon={PhoneCall} title="Assistant vocal testé" text="Le simulateur répond aux cas tarifs, horaires, groupes, allergènes, plaintes et consignes dangereuses." />
            <GuardrailCard icon={ShieldCheck} title="Handoff humain" text="Aucune réservation, paiement, allergie ou plainte n’est traité sans validation humaine." />
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
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/55">Prochaine étape de closing</p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl leading-none tracking-tight">
                Passer de l’audit au diagnostic : confirmer les vrais appels reçus par l’équipe.
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
