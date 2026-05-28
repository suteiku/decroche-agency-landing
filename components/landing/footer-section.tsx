import { ArrowUpRight } from "lucide-react"

import { site } from "@/lib/site"
import { AnimatedWave } from "./animated-wave"

const footerLinks = {
  Site: [
    { name: "Offre", href: "#features" },
    { name: "Process", href: "#how-it-works" },
    { name: "Conformité", href: "#security" },
    { name: "Tarifs", href: "#pricing" },
  ],
  Décroche: [
    { name: "Diagnostic", href: "#rdv" },
    { name: "Cas d’usage", href: "#integrations" },
    { name: "Contact", href: `mailto:${site.email}` },
  ],
  Cadre: [
    { name: "Humain final", href: "#security" },
    { name: "Données limitées", href: "#security" },
    { name: "Prix indicatifs", href: "#pricing" },
  ],
}

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="pointer-events-none absolute inset-0 h-64 overflow-hidden opacity-20" aria-hidden="true">
        <AnimatedWave />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-5 lg:gap-8">
            <div className="col-span-2">
              <a href="#contenu" className="focus-link mb-6 inline-flex items-center gap-2" translate="no">
                <span className="font-display text-2xl">Decroche</span>
                <span className="font-mono text-xs text-accent">.agency</span>
              </a>

              <p className="mb-8 max-w-xs leading-relaxed text-muted-foreground">
                Assistants IA métier pour PME de services. Un problème répétitif, un assistant simple,
                une mesure de valeur, une décision humaine finale.
              </p>

              <a
                href={`mailto:${site.email}`}
                className="focus-link group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Écrire à Decroche
                <ArrowUpRight
                  className="size-3 -translate-x-1 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-6 text-sm font-medium">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="focus-link inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">2026 Decroche.agency. Tous droits réservés.</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-green-500" aria-hidden="true" />
              Site de prévente — validation avant production officielle
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
