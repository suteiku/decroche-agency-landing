import { NextResponse } from "next/server"

import { auditPayloads } from "@/lib/pink-koi-test"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const audit = auditPayloads[slug]

  if (!audit) {
    return NextResponse.json({ error: "audit_not_found" }, { status: 404 })
  }

  return NextResponse.json({ audit })
}
