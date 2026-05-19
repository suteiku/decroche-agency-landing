"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { value: "83%", label: "d'appels manqués hors heures", sub: "D'OUVERTURE" },
  { value: "350-900€", label: "CA perdu", sub: "PAR APPEL" },
  { value: "28 000€", label: "économisés", sub: "PAR POSTE / AN" },
  { value: "24/7", label: "disponibilité", sub: "GARANTIE" },
];

export function StatsMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`relative py-8 border-t border-foreground/10 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex gap-24 md:gap-32 marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-24 md:gap-32">
            {stats.map((stat) => (
              <div key={`${stat.label}-${i}`} className="flex items-baseline gap-4 shrink-0">
                <span className="text-4xl lg:text-5xl font-display text-foreground shrink-0">{stat.value}</span>
                <span className="text-sm text-muted-foreground leading-tight whitespace-nowrap">
                  {stat.label}
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70 mt-1">
                    {stat.sub}
                  </span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
