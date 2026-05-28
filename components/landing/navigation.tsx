"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/primitives/button"
import { primaryCta, safeExternalRel, site } from "@/lib/site"

const navLinks = [
  { name: "Offre", href: "#features" },
  { name: "Process", href: "#how-it-works" },
  { name: "Conformité", href: "#security" },
  { name: "Tarifs", href: "#pricing" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header
      className={`fixed z-50 transition-[top,left,right] duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className={`mx-auto transition-[background-color,backdrop-filter,border-color,border-radius,box-shadow,max-width] duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "max-w-[1200px] rounded-2xl border border-foreground/10 bg-background/80 shadow-lg backdrop-blur-xl"
            : "max-w-[1400px] bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 transition-[height] duration-500 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          <a href="#contenu" className="focus-link flex items-center gap-2 group" translate="no">
            <span
              className={`font-display tracking-tight transition-[font-size] duration-500 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              Decroche
            </span>
            <span
              className={`font-mono text-accent transition-[font-size,margin-top] duration-500 ${
                isScrolled ? "mt-0.5 text-[10px]" : "mt-1 text-xs"
              }`}
            >
              .agency
            </span>
          </a>

          <div className="hidden items-center gap-12 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="focus-link group relative text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-[width] duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Button
              size={isScrolled ? "sm" : "md"}
              className={isScrolled ? "px-4" : "px-6"}
              asChild
            >
              <a href={site.calUrl} target="_blank" rel={safeExternalRel}>
                {primaryCta}
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="focus-link -mr-2 inline-flex size-11 items-center justify-center md:hidden"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-mobile"
          >
            {isMobileMenuOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="menu-mobile"
        className={`fixed inset-0 z-40 bg-background transition-[opacity] duration-500 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex h-full flex-col px-8 pb-8 pt-28">
          <div className="flex flex-1 flex-col justify-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`focus-link font-display text-5xl text-foreground transition-[color,opacity,transform] duration-500 hover:text-primary ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={`border-t border-foreground/10 pt-8 transition-[opacity,transform] duration-500 ${
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button className="h-14 w-full text-base" asChild>
              <a
                href={site.calUrl}
                target="_blank"
                rel={safeExternalRel}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {primaryCta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
