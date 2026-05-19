"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "RGPD natif",
    description: "Registre des traitements pré-rempli, DPA fourni, hébergement UE obligatoire. Aucun transfert hors Europe.",
  },
  {
    icon: Lock,
    title: "AI Act article 50",
    description: "Mention obligatoire en début d'appel : \"Vous êtes en relation avec un assistant vocal automatisé.\" Conformité légale intégrée.",
  },
  {
    icon: Eye,
    title: "Hébergement souverain",
    description: "OVHcloud et Scaleway. Vos données vocales ne quittent jamais la France. Protection contre le Cloud Act US.",
  },
  {
    icon: FileCheck,
    title: "AIPD & DPO partagé",
    description: "Analyse d'Impact sur la Protection des Données modèle fournie. DPO partagé en option pour les traitements à grande échelle.",
  },
];

const certifications = ["RGPD", "AI Act", "ISO 27001", "HDS (Santé)", "DPA fourni"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-primary/40" />
              Conformité
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              La conformité
              <br />
              n'est pas une option.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Un agent vocal mal déployé peut vous exposer à une amende CNIL de 20 millions d'euros. 
              Nous garantissons zéro risque juridique.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={cert}
                  className={`px-4 py-2 border border-primary/20 text-sm font-mono text-primary transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="grid gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 border border-foreground/10 hover:border-primary/30 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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
