"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Brain, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "I",
    title: "Audit (30 min)",
    description: "On analyse vos besoins, votre flux d’appels et vos outils existants. Pas de blabla, juste les faits.",
  },
  {
    number: "II",
    title: "Configuration (10 jours)",
    description: "Voix française, script métier, intégrations CRM et agenda. On teste avant la mise en ligne.",
  },
  {
    number: "III",
    title: "Live + optimisation",
    description: "Mise en production progressive, monitoring et ajustements. Vous dormez, le système continue de capter.",
  },
];

/* ─── Flux d'appel — ligne qui avance + cercles qui s'illuminent ─── */
function FluxAppel() {
  const dur = "10s";
  // Ligne visible (stroke-dasharray) qui dessine de gauche à droite en 2s
  // Cercles illuminés : step1(0.2-0.6), step2(0.8-1.2), step3(1.4-1.8), step4(2.0-2.4)
  // Puis tout s'éteint et recommence

  return (
    <div className="w-full max-w-5xl mx-auto">
      <svg
        viewBox="0 0 960 300"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Flux d’appel : appel entrant, qualification, action, résultat confirmé"
      >
        <defs>
          <linearGradient id="guideLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(190, 100%, 65%)" />
            <stop offset="50%" stopColor="hsl(230, 100%, 70%)" />
            <stop offset="100%" stopColor="hsl(260, 100%, 75%)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ligne de fond (discrète) */}
        <line x1="120" y1="140" x2="840" y2="140" stroke="url(#guideLine)" strokeWidth="1" opacity="0.08" strokeLinecap="round" />

        {/* Ligne qui avance — dessin progressif */}
        <line x1="120" y1="140" x2="840" y2="140" stroke="url(#guideLine)" strokeWidth="2.5" opacity="0.9" strokeLinecap="round" filter="url(#softGlow)" strokeDasharray="720" strokeDashoffset="720">
          <animate attributeName="stroke-dashoffset" values="720;0;0;720" dur={dur} repeatCount="indefinite" keyTimes="0;0.35;0.75;1" />
          <animate attributeName="opacity" values="0.9;0.9;0;0" dur={dur} repeatCount="indefinite" keyTimes="0;0.35;0.38;1" />
        </line>

        {/* ─── Step 1 — Appel entrant (illuminé quand la ligne arrive) ─── */}
        <g>
          {/* Cercle de base (toujours visible, faible) */}
          <circle cx="120" cy="140" r="28" fill="none" stroke="hsl(190, 100%, 65%)" strokeWidth="1.5" opacity="0.12" />
          {/* Cercle qui s'illumine */}
          <circle cx="120" cy="140" r="28" fill="none" stroke="hsl(190, 100%, 65%)" strokeWidth="3" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0;0" dur={dur} repeatCount="indefinite" keyTimes="0;0.08;0.25;0.30;1" />
            <animate attributeName="strokeWidth" values="1.5;4;1.5" dur={dur} repeatCount="indefinite" keyTimes="0;0.15;0.30" />
          </circle>
          {/* Glow halo */}
          <circle cx="120" cy="140" r="28" fill="none" stroke="hsl(190, 100%, 80%)" strokeWidth="5" filter="url(#glow)" opacity="0">
            <animate attributeName="opacity" values="0;0.7;0;0" dur={dur} repeatCount="indefinite" keyTimes="0;0.12;0.25;1" />
          </circle>
          {/* Icone */}
          <foreignObject x="104" y="124" width="32" height="32">
            <div className="flex items-center justify-center w-full h-full">
              <Phone className="w-5 h-5" style={{ color: 'hsl(190,100%,65%)' }}>
                <animate attributeName="opacity" values="0.25;1;0.25" dur={dur} repeatCount="indefinite" keyTimes="0;0.12;0.30" />
              </Phone>
            </div>
          </foreignObject>
          {/* Textes — s'allument */}
          <text x="120" y="200" textAnchor="middle" fontSize="14" fontWeight="600" fill="white" opacity="0.05">
            <animate attributeName="opacity" values="0.05;1;0.05" dur={dur} repeatCount="indefinite" keyTimes="0;0.12;0.30" />
            Appel entrant
          </text>
          <text x="120" y="218" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="hsl(190, 100%, 65%)" opacity="0.03">
            <animate attributeName="opacity" values="0.03;0.9;0.03" dur={dur} repeatCount="indefinite" keyTimes="0;0.12;0.30" />
            24/7, instantané
          </text>
        </g>

        {/* ─── Step 2 — IA écoute ─── */}
        <g>
          <circle cx="360" cy="140" r="28" fill="none" stroke="hsl(220, 100%, 70%)" strokeWidth="1.5" opacity="0.12" />
          <circle cx="360" cy="140" r="28" fill="none" stroke="hsl(220, 100%, 70%)" strokeWidth="3" opacity="0">
            <animate attributeName="opacity" values="0;0;1;1;0;0" dur={dur} repeatCount="indefinite" keyTimes="0;0.22;0.28;0.45;0.50;1" />
            <animate attributeName="strokeWidth" values="1.5;4;1.5" dur={dur} repeatCount="indefinite" keyTimes="0;0.32;0.50" />
          </circle>
          <circle cx="360" cy="140" r="28" fill="none" stroke="hsl(220, 100%, 80%)" strokeWidth="5" filter="url(#glow)" opacity="0">
            <animate attributeName="opacity" values="0;0;0.7;0;0" dur={dur} repeatCount="indefinite" keyTimes="0;0.25;0.35;0.50;1" />
          </circle>
          <foreignObject x="344" y="124" width="32" height="32">
            <div className="flex items-center justify-center w-full h-full">
              <Brain className="w-5 h-5" style={{ color: 'hsl(220,100%,70%)' }}>
                <animate attributeName="opacity" values="0.25;0.25;1;0.25" dur={dur} repeatCount="indefinite" keyTimes="0;0.25;0.35;0.50" />
              </Brain>
            </div>
          </foreignObject>
          <text x="360" y="200" textAnchor="middle" fontSize="14" fontWeight="600" fill="white" opacity="0.05">
            <animate attributeName="opacity" values="0.05;0.05;1;0.05" dur={dur} repeatCount="indefinite" keyTimes="0;0.25;0.35;0.50" />
            IA écoute &amp; comprend
          </text>
          <text x="360" y="218" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="hsl(220, 100%, 70%)" opacity="0.03">
            <animate attributeName="opacity" values="0.03;0.03;0.9;0.03" dur={dur} repeatCount="indefinite" keyTimes="0;0.25;0.35;0.50" />
            Qualification intelligente
          </text>
        </g>

        {/* ─── Step 3 — Action ─── */}
        <g>
          <circle cx="600" cy="140" r="28" fill="none" stroke="hsl(250, 100%, 72%)" strokeWidth="1.5" opacity="0.12" />
          <circle cx="600" cy="140" r="28" fill="none" stroke="hsl(250, 100%, 72%)" strokeWidth="3" opacity="0">
            <animate attributeName="opacity" values="0;0;0;1;1;0;0" dur={dur} repeatCount="indefinite" keyTimes="0;0.42;0.48;0.54;0.70;0.75;1" />
            <animate attributeName="strokeWidth" values="1.5;4;1.5" dur={dur} repeatCount="indefinite" keyTimes="0;0.55;0.75" />
          </circle>
          <circle cx="600" cy="140" r="28" fill="none" stroke="hsl(250, 100%, 82%)" strokeWidth="5" filter="url(#glow)" opacity="0">
            <animate attributeName="opacity" values="0;0;0;0.7;0;0" dur={dur} repeatCount="indefinite" keyTimes="0;0.48;0.55;0.65;0.75;1" />
          </circle>
          <foreignObject x="584" y="124" width="32" height="32">
            <div className="flex items-center justify-center w-full h-full">
              <Zap className="w-5 h-5" style={{ color: 'hsl(250,100%,72%)' }}>
                <animate attributeName="opacity" values="0.25;0.25;0.25;1;0.25" dur={dur} repeatCount="indefinite" keyTimes="0;0.48;0.55;0.65;0.75" />
              </Zap>
            </div>
          </foreignObject>
          <text x="600" y="200" textAnchor="middle" fontSize="14" fontWeight="600" fill="white" opacity="0.05">
            <animate attributeName="opacity" values="0.05;0.05;0.05;1;0.05" dur={dur} repeatCount="indefinite" keyTimes="0;0.48;0.55;0.65;0.75" />
            Action &amp; intégration
          </text>
          <text x="600" y="218" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="hsl(250, 100%, 72%)" opacity="0.03">
            <animate attributeName="opacity" values="0.03;0.03;0.03;0.9;0.03" dur={dur} repeatCount="indefinite" keyTimes="0;0.48;0.55;0.65;0.75" />
            RDV, lead, transfert
          </text>
        </g>

        {/* ─── Step 4 — Résultat ─── */}
        <g>
          <circle cx="840" cy="140" r="32" fill="none" stroke="hsl(260, 100%, 75%)" strokeWidth="1.5" opacity="0.12" />
          <circle cx="840" cy="140" r="32" fill="none" stroke="hsl(260, 100%, 75%)" strokeWidth="3" opacity="0">
            <animate attributeName="opacity" values="0;0;0;0;1;1;0;0" dur={dur} repeatCount="indefinite" keyTimes="0;0.60;0.68;0.74;0.80;0.95;1;1" />
            <animate attributeName="strokeWidth" values="1.5;5;1.5" dur={dur} repeatCount="indefinite" keyTimes="0;0.82;0.95" />
          </circle>
          <circle cx="840" cy="140" r="32" fill="none" stroke="hsl(260, 100%, 85%)" strokeWidth="6" filter="url(#glow)" opacity="0">
            <animate attributeName="opacity" values="0;0;0;0;0.7;0;0" dur={dur} repeatCount="indefinite" keyTimes="0;0.68;0.80;0.88;0.95;1;1" />
          </circle>
          <foreignObject x="820" y="120" width="40" height="40">
            <div className="flex items-center justify-center w-full h-full">
              <CheckCircle2 className="w-6 h-6" style={{ color: 'hsl(260,100%,75%)' }}>
                <animate attributeName="opacity" values="0.25;0.25;0.25;0.25;1;0.25" dur={dur} repeatCount="indefinite" keyTimes="0;0.68;0.78;0.88;0.95;1" />
              </CheckCircle2>
            </div>
          </foreignObject>
          <text x="840" y="200" textAnchor="middle" fontSize="14" fontWeight="600" fill="white" opacity="0.05">
            <animate attributeName="opacity" values="0.05;0.05;0.05;0.05;1;0.05" dur={dur} repeatCount="indefinite" keyTimes="0;0.68;0.78;0.88;0.95;1" />
            Résultat confirmé
          </text>
          <text x="840" y="218" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="hsl(260, 100%, 75%)" opacity="0.03">
            <animate attributeName="opacity" values="0.03;0.03;0.03;0.03;0.9;0.03" dur={dur} repeatCount="indefinite" keyTimes="0;0.68;0.78;0.88;0.95;1" />
            Client satisfait
          </text>
        </g>

        {/* Ligne de connexion visible entre les 4 étapes */}
        <line x1="120" y1="165" x2="840" y2="165" stroke="url(#guideLine)" strokeWidth="3" opacity="0.7" strokeLinecap="round" filter="url(#softGlow)" />
      </svg>
    </div>
  );
}

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 text-center lg:text-left">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-accent/40" />
            Process
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-[opacity,transform] duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            En 3 étapes.
            <br />
            <span className="text-background/50">De l’audit au live.</span>
          </h2>
        </div>

        {/* 1. Flux d'appel */}
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent/60 mb-10 uppercase tracking-widest">
            <span className="w-6 h-px bg-accent/40" />
            Flux d&apos;appel
            <span className="w-6 h-px bg-accent/40" />
          </span>
          <FluxAppel />
        </div>

        {/* 2. Vos 3 étapes — label + cartes */}
        <div className="pt-12 border-t border-background/10">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent/60 mb-10 uppercase tracking-widest">
            <span className="w-6 h-px bg-accent/40" />
            Vos 3 étapes
            <span className="w-6 h-px bg-accent/40" />
          </span>
          <div className="grid lg:grid-cols-3 gap-px bg-background/10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-foreground p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-background/10 last:border-r-0"
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-4xl text-accent/60 shrink-0">{step.number}</span>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-display mb-4">{step.title}</h3>
                    <p className="text-background/60 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
