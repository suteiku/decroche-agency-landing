import Link from "next/link"
import { ArrowRight, CheckCircle2, Database, FileJson, GitBranch, ShieldCheck } from "lucide-react"

import { RestaurantAgentSimulator } from "@/components/audit/restaurant-agent-simulator"
import { Button } from "@/components/primitives/button"
import {
  pinkKoiAudit,
  pinkKoiCrmRecord,
  pinkKoiDeliveryPlan,
  pinkKoiPublicSnapshot,
  runPinkKoiQa,
} from "@/lib/pink-koi-test"
import { safeExternalRel } from "@/lib/site"

function SectionIntro({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-primary" />
        {kicker}
      </div>
      <h2 className="font-display text-5xl leading-none tracking-tight text-balance sm:text-6xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-muted-foreground">{text}</p>
    </div>
  )
}

export function PinkKoiPipelineLab() {
  const qa = runPinkKoiQa()

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground noise-overlay">
      <div className="sticky top-0 z-30 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="focus-link font-display text-2xl tracking-tight" aria-label="Retour Decroche">
            Decroche<span className="text-primary">.</span>
          </Link>
          <span className="hidden rounded-full bg-foreground px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-background sm:inline-flex">
            Cockpit interne
          </span>
          <Button asChild size="sm" variant="outline">
            <Link href={`/audit/${pinkKoiAudit.slug}`}>Voir audit</Link>
          </Button>
        </div>
      </div>

      <section className="relative px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-24 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[3rem] border border-foreground/10 bg-white/70 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.10)] backdrop-blur sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Pipeline réel — Pink Koï
                </p>
                <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.9] tracking-[-0.055em] text-balance sm:text-7xl lg:text-8xl">
                  Pas un simple test. Un parcours Decroche complet.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Cette page vérifie le vrai enchaînement : collecte publique, audit web, CRM mock, assistant prototype, QA, limites et plan après closing. Rien n’est envoyé au restaurant.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <a href="#simulateur">
                      Tester l’assistant <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href={`/api/pink-koi/qa`} target="_blank" rel={safeExternalRel}>
                      Voir API QA
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Score audit", value: `${pinkKoiAudit.score}/100` },
                  { label: "QA agent", value: `${qa.passed}/${qa.total}` },
                  { label: "Sources publiques", value: String(pinkKoiPublicSnapshot.sources.length) },
                  { label: "CRM", value: "mock Notion" },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-[2rem] border border-foreground/10 bg-background/80 p-5">
                    <div className="font-display text-4xl leading-none">{metric.value}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            kicker="Étapes testées"
            title="Le pipeline complet, du site réel au prototype"
            text="Chaque étape produit un livrable exploitable. Les données incertaines ne sont pas inventées : elles deviennent des questions à poser après closing."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Database,
                title: "Collecte publique",
                text: "Robots.txt, sitemap, pages menu, horaires, prix, mentions publiques.",
              },
              {
                icon: FileJson,
                title: "Audit JSON",
                text: "Payload structuré pour générer la page /audit/[slug].",
              },
              {
                icon: GitBranch,
                title: "CRM Notion mock",
                text: "Statut, score, prochaine action, lien audit et note courte.",
              },
              {
                icon: ShieldCheck,
                title: "QA + garde-fous",
                text: "Scénarios normaux, sensibles, attaque prompt injection.",
              },
            ].map((step) => (
              <div key={step.title} className="rounded-[2rem] border border-foreground/10 bg-white/70 p-6 shadow-sm backdrop-blur">
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-3xl leading-none">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2.5rem] border border-foreground/10 bg-white/70 p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Database className="size-6 text-primary" aria-hidden="true" />
              <h2 className="font-display text-4xl leading-none">Snapshot public exploitable</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {Object.entries(pinkKoiPublicSnapshot.publicFacts).map(([key, value]) => (
                <div key={key} className="rounded-2xl border border-foreground/10 bg-background/75 p-4">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{key}</div>
                  <p className="mt-2 text-sm leading-6 text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-foreground/10 bg-foreground p-6 text-background shadow-[0_30px_90px_rgba(15,23,42,0.16)] sm:p-8">
            <h2 className="font-display text-4xl leading-none">Questions à demander après closing</h2>
            <p className="mt-4 text-sm leading-6 text-background/65">
              C’est ici que Decroche évite d’inventer. Tout ce qui manque devient une demande simple au client.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-background/78">
              {pinkKoiPublicSnapshot.unknownsToAskAfterClosing.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-background/10 p-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-200" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            kicker="CRM Notion V1"
            title="Une fiche simple, pas un CRM qui enterre l’information"
            text="Le mock respecte la règle Decroche : si le champ ne sert pas à décider la prochaine action, il ne rentre pas dans le CRM V1."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(pinkKoiCrmRecord).map(([key, value]) => (
              <div key={key} className="rounded-[1.75rem] border border-foreground/10 bg-white/70 p-5 shadow-sm">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{key}</div>
                <p className="mt-2 text-sm leading-6 text-foreground">{String(value)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="simulateur" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            kicker="Prototype agent"
            title="Simulation réelle des demandes entrantes"
            text="Le but n’est pas de faire joli : on vérifie que l’agent sait répondre, bloquer, escalader et ne jamais prendre une action sensible."
          />
          <RestaurantAgentSimulator />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            kicker="Après closing"
            title="Planning 10 jours si ce restaurant disait oui"
            text="Même sur un test fictif, on simule la livraison client pour vérifier que Decroche ne close pas dans le vide."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pinkKoiDeliveryPlan.map((step) => (
              <div key={`${step.day}-${step.title}`} className="rounded-[2rem] border border-foreground/10 bg-white/70 p-6 shadow-sm">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{step.day}</div>
                <h3 className="mt-4 font-display text-3xl leading-none">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{step.output}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.75rem] border border-destructive/20 bg-destructive/8 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Limites non négociables</p>
              <h2 className="mt-4 font-display text-5xl leading-none tracking-tight">Ce test reste interne.</h2>
            </div>
            <ul className="grid gap-3 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
              {pinkKoiPublicSnapshot.strictLimits.map((limit) => (
                <li key={limit} className="rounded-2xl border border-destructive/15 bg-background/70 p-4">
                  {limit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
