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

  return {
    title: audit ? `Print audit ${audit.company.name} — Decroche.agency` : "Print audit — Decroche.agency",
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function AuditPrintPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const audit = auditPayloads[slug]

  if (!audit) {
    notFound()
  }

  return <RestaurantAuditPage audit={audit} printMode />
}
