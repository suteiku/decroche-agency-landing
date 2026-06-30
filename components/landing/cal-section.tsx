"use client";

import { useEffect, useRef, useState } from "react";

export function CalSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoadCal, setShouldLoadCal] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
        setShouldLoadCal(true);
      }, 0);
      return () => clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        setShouldLoadCal(true);
        observer.disconnect();
      },
      { rootMargin: "480px 0px", threshold: 0.01 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="rdv" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-accent/40" />
            Prendre rendez-vous
            <span className="w-8 h-px bg-accent/40" />
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Réserver une démo
            <br />
            <span className="text-background/50">de 30 minutes.</span>
          </h2>
        </div>

        {/* Cal.com Embed */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl overflow-hidden border border-background/10 bg-background/5 backdrop-blur-sm">
            {shouldLoadCal ? (
              <iframe
                src="https://cal.com/bruno.crp/30min?embed=true&theme=dark&layout=month_view"
                className="w-full min-h-[700px]"
                frameBorder="0"
                loading="lazy"
                allow="camera; microphone; autoplay; fullscreen"
                title="Réserver un rendez-vous avec Decroche.agency"
              />
            ) : (
              <div className="flex min-h-[520px] flex-col items-center justify-center gap-4 p-8 text-center">
                <p className="max-w-md text-background/60">
                  Le calendrier Cal.com se charge seulement quand cette section approche pour alléger le premier affichage.
                </p>
                <a
                  href="https://cal.com/bruno.crp/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground"
                >
                  Ouvrir le calendrier
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
