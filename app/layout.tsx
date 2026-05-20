import React from "react"
import type { Metadata, Viewport } from "next"
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Decroche.agency — assistants IA métier pour PME",
  description:
    "Decroche installe des assistants IA utiles : réponse, qualification, préparation du rendez-vous et transfert humain quand il faut.",
  applicationName: "Decroche.agency",
  authors: [{ name: "Decroche Agency" }],
  openGraph: {
    title: "Decroche.agency — assistants IA métier pour PME",
    description:
      "Un assistant IA clair, mesurable et supervisé par l’humain pour traiter les demandes répétitives.",
    locale: "fr_FR",
    siteName: "Decroche.agency",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#fbfaf5",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
