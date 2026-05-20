import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { RestaurantAuditPage } from "@/components/audit/restaurant-audit-page"
import { auditPayloads } from "@/lib/pink-koi-test"

export function generateStaticParams() {
  return Object.keys(auditPayloads).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const audit = auditPayloads[slug]

  if (!audit) {
    return {
      title: "Audit introuvable — Decroche.agency",
    }
  }

  return {
    title: `Audit interne ${audit.company.name} — Decroche.agency`,
    description: audit.verdict,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function AuditSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const audit = auditPayloads[slug]

  if (!audit) {
    notFound()
  }

  return <RestaurantAuditPage audit={audit} />
}
