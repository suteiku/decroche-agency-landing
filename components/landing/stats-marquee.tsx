const stats = [
  {
    value: "83%",
    label: "d’appels manqués hors horaires",
    sub: "RISQUE À MESURER",
  },
  {
    value: "350–900€",
    label: "CA potentiel par appel manqué",
    sub: "ORDRE DE GRANDEUR",
  },
  {
    value: "28 000€",
    label: "coût annuel d’un poste accueil",
    sub: "BASE DE COMPARAISON",
  },
  {
    value: "24/7",
    label: "capacité de réponse simple",
    sub: "HORS DÉCISION HUMAINE",
  },
]

export function StatsMarquee() {
  return (
    <section
      className="relative border-y border-foreground/10 py-5 sm:py-7 lg:py-8"
      aria-label="Indicateurs commerciaux Decroche"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 lg:gap-x-8">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <p className="font-display text-[clamp(2rem,10vw,3.35rem)] leading-none tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 max-w-[12rem] text-sm leading-snug text-muted-foreground sm:text-[0.95rem]">
                {stat.label}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
