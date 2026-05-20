import type { Metadata } from "next"

import { PinkKoiPipelineLab } from "@/components/audit/pink-koi-pipeline-lab"

export const metadata: Metadata = {
  title: "Cockpit Pink Koï — test interne Decroche",
  description:
    "Pipeline Decroche complet en conditions réelles : audit, CRM mock, assistant restaurant, QA et garde-fous.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PinkKoiLabPage() {
  return <PinkKoiPipelineLab />
}
