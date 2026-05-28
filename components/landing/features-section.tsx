"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Réception 24/7",
    description:
      "Jamais d’appel manqué, même le dimanche soir. Votre assistant décroche vite, à toute heure utile.",
    visual: "reception",
  },
  {
    number: "02",
    title: "Qualification intelligente",
    description:
      "L’IA identifie le motif de l’appel, priorise les demandes chaudes et transmet au bon endroit.",
    visual: "qualify",
  },
  {
    number: "03",
    title: "Prise de RDV & CRM",
    description:
      "Intégration à l’agenda et au suivi client : rendez-vous préparé, fiche créée, zéro saisie inutile.",
    visual: "crm",
  },
  {
    number: "04",
    title: "Cadre & transfert humain",
    description:
      "Transparence IA, limites écrites, transfert humain avec résumé complet quand la demande sort du cadre.",
    visual: "transfer",
  },
];

const qualifyNodes = [
  { x: "150", y: "80" },
  { x: "125", y: "123.301" },
  { x: "75", y: "123.301" },
  { x: "50", y: "80" },
  { x: "75", y: "36.699" },
  { x: "125", y: "36.699" },
];

function ReceptionVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden="true">
      <defs>
        <clipPath id="receptionClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>
      <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <g clipPath="url(#receptionClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="40"
            y={35 + i * 16}
            width="120"
            height="10"
            rx="2"
            fill="currentColor"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.8;0.15"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values="20;120;20"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>
      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function QualifyVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden="true">
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      {qualifyNodes.map((node, i) => (
        <g key={`${node.x}-${node.y}`}>
          <line
            x1="100"
            y1="80"
            x2={node.x}
            y2={node.y}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur="2s"
              begin={`${i * 0.3}s`}
              repeatCount="indefinite"
            />
          </line>
          <circle
            cx={node.x}
            cy={node.y}
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              values="6;8;6"
              dur="2s"
              begin={`${i * 0.3}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
      <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;60" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function CrmVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden="true">
      <g>
        <rect x="30" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="55" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">A</text>
        <circle cx="55" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      <g>
        <rect x="120" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="145" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">B</text>
        <circle cx="145" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      <line x1="80" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite" />
      </line>
      <circle r="4" fill="currentColor">
        <animateMotion dur="1.5s" repeatCount="indefinite">
          <mpath href="#dataPath" />
        </animateMotion>
      </circle>
      <path id="dataPath" d="M 80 80 L 120 80" fill="none" />
      <g transform="translate(100, 130)">
        <circle r="6" fill="none" stroke="currentColor" strokeWidth="2">
          <animate attributeName="r" values="6;10;6" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function TransferVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden="true">
      <path
        d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z"
        fill="currentColor"
        opacity="0.1"
      >
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
      </path>
      <rect x="85" y="70" width="30" height="25" rx="3" fill="currentColor" />
      <path
        d="M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="100" cy="80" r="4" fill="white" />
      <rect x="98" y="82" width="4" height="8" fill="white" />
      <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="y1" values="40;120;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="40;120;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "reception":
      return <ReceptionVisual />;
    case "qualify":
      return <QualifyVisual />;
    case "crm":
      return <CrmVisual />;
    case "transfer":
      return <TransferVisual />;
    default:
      return <ReceptionVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-[opacity,transform] duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col gap-6 border-b border-foreground/10 py-9 sm:py-12 lg:flex-row lg:gap-16 lg:py-16">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-primary">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="grid flex-1 items-center gap-6 sm:gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 font-display text-3xl transition-transform duration-500 group-hover:translate-x-2 lg:text-4xl">
              {feature.title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {feature.description}
            </p>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="h-32 w-40 text-primary sm:h-40 sm:w-48">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
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
      id="features"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-14 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-primary/40" />
            L'offre
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-[opacity,transform] duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ce que fait votre
            <br />
            <span className="text-primary">assistant IA.</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
