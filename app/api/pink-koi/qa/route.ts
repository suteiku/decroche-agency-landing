import { NextResponse } from "next/server"

import {
  pinkKoiAudit,
  pinkKoiCloseOffer,
  pinkKoiComplianceGates,
  pinkKoiCrmRecord,
  pinkKoiImplementationStack,
  pinkKoiPostCloseActions,
  pinkKoiPublicSnapshot,
  runPinkKoiQa,
} from "@/lib/pink-koi-test"

export function GET() {
  return NextResponse.json({
    status: "internal_test_only_do_not_send",
    audit: {
      slug: pinkKoiAudit.slug,
      score: pinkKoiAudit.score,
      verdict: pinkKoiAudit.verdict,
    },
    offer: pinkKoiCloseOffer,
    crm: pinkKoiCrmRecord,
    stack: pinkKoiImplementationStack,
    complianceGates: pinkKoiComplianceGates,
    postCloseActions: pinkKoiPostCloseActions,
    publicSnapshot: {
      capturedAt: pinkKoiPublicSnapshot.capturedAt,
      targetUrl: pinkKoiPublicSnapshot.targetUrl,
      sources: pinkKoiPublicSnapshot.sources,
      strictLimits: pinkKoiPublicSnapshot.strictLimits,
    },
    qa: runPinkKoiQa(),
  })
}
