# Decroche.agency — Style Guide Complet

> Guide exhaustif du système de design. Aucun élément n'est laissé au hasard. A utiliser pour audits, presentations, sites internes/externes, et tout projet derive.

---

## Table des matieres

1. [Identite de marque](#1-identite-de-marque)
2. [Design Tokens](#2-design-tokens)
3. [Palette de couleurs](#3-palette-de-couleurs)
4. [Typographie](#4-typographie)
5. [Spacing & Layout](#5-spacing--layout)
6. [Composants UI](#6-composants-ui)
7. [Animations & Motion](#7-animations--motion)
8. [Effets & Textures](#8-effets--textures)
9. [Sections page par page](#9-sections-page-par-page)
10. [Assets & Ressources](#10-assets--ressources)
11. [Patterns de code reutilisables](#11-patterns-de-code-reutilisables)
12. [Responsive & Breakpoints](#12-responsive--breakpoints)
13. [Guidelines copy](#13-guidelines-copy)
14. [Accessibilite](#14-accessibilite)
15. [Checklist reproductibilite](#15-checklist-reproductibilite)

---

## 1. Identite de marque

### Positionnement
**Decroche.agency** — Agents vocaux IA hyper-realistes pour PME francaises. Reception 24/7, conformite native RGPD/AI Act, hebergement souverain.

### Promesse
"Ne perdez plus un appel."

### Public cible
- TPE / Artisans / Commercants
- PME 5 a 50 salaries
- ETI / Multi-site / Franchise
- Secteur public / Grand compte

### Ton de voix
- **Direct** : pas de periphrases, pas de jargon
- **Structure** : max 2 phrases par bloc
- **Verbes d'action** : "decroche", "qualifie", "prend RDV", "transfere", "recupere"
- **Chiffres concrets** : jamais "beaucoup", toujours des valeurs exactes
- **Urgence douce** : questions rhetoriques, pas d'agressivite
- **Confiance** : mentions conformite, hebergement, chiffres verifiables
- **Zero emoji** (sauf demande explicite)

### Langue
- **Contenu** : francais (FR)
- **Interface** : francais
- **Code** : anglais (variables, composants, fichiers)
- **Metadonnees** : title/description en francais

---

## 2. Design Tokens

### 2.1 Fichier source principal
`app/globals.css` — 191 lignes. C'est le fichier maitre.

Fichier secondaire (LEGACY, non utilise par le layout actuel) : `styles/globals.css` — contient un token set different (baseColor neutral, radius 0.625rem). **Ne pas utiliser.**

### 2.2 Tokens CSS :root (actifs)

| Token | Valeur OKLCH | Role | Usage |
|-------|-------------|------|-------|
| `--background` | `oklch(0.985 0.002 90)` | Fond page | Blanc casse tres chaud |
| `--foreground` | `oklch(0.12 0.01 60)` | Texte principal | Presque noir, chaleur subtile |
| `--card` | `oklch(1 0 0)` | Fond cartes | Blanc pur |
| `--card-foreground` | `oklch(0.12 0.01 60)` | Texte cartes | Meme que foreground |
| `--popover` | `oklch(1 0 0)` | Fond popover | Blanc pur |
| `--popover-foreground` | `oklch(0.12 0.01 60)` | Texte popover | Meme que foreground |
| `--primary` | `oklch(0.45 0.18 270)` | **Indigo** | Couleur identitaire principale |
| `--primary-foreground` | `oklch(0.985 0.002 90)` | Texte sur primary | Blanc casse |
| `--secondary` | `oklch(0.96 0.005 90)` | Gris tres clair | Fonds secondaires |
| `--secondary-foreground` | `oklch(0.12 0.01 60)` | Texte sur secondary | Presque noir |
| `--muted` | `oklch(0.94 0.005 90)` | Gris clair | Fonds desactive |
| `--muted-foreground` | `oklch(0.45 0.02 60)` | Gris median | Texte secondaire, labels |
| `--accent` | `oklch(0.65 0.15 220)` | **Cyan** | Couleur d'accentuation |
| `--accent-foreground` | `oklch(0.12 0.01 60)` | Texte sur accent | Presque noir |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Rouge | Erreurs, alertes |
| `--destructive-foreground` | `oklch(0.577 0.245 27.325)` | Texte sur destructive | Meme que destructive |
| `--border` | `oklch(0.88 0.01 90)` | Bordures | Gris tres clair |
| `--input` | `oklch(0.92 0.01 90)` | Fonds input | Gris clair |
| `--ring` | `oklch(0.45 0.18 270)` | Focus ring | Indigo |
| `--radius` | `0.25rem` (4px) | Radius de base | Petit, precis |

### 2.3 Tokens calcules

| Token | Calcul | Valeur reelle | Usage |
|-------|--------|--------------|-------|
| `--radius-sm` | `calc(var(--radius) - 4px)` | 0px | Coins carres |
| `--radius-md` | `calc(var(--radius) - 2px)` | 2px | Petits arrondis |
| `--radius-lg` | `var(--radius)` | 4px | Arrondis standard |
| `--radius-xl` | `calc(var(--radius) + 4px)` | 8px | Arrondis larges |

### 2.4 Chart colors (graphiques)

| Token | Valeur OKLCH | Hue approx |
|-------|-------------|-----------|
| `--chart-1` | `oklch(0.45 0.18 270)` | Indigo |
| `--chart-2` | `oklch(0.55 0.15 220)` | Cyan-bleu |
| `--chart-3` | `oklch(0.65 0.12 200)` | Bleu clair |
| `--chart-4` | `oklch(0.70 0.10 180)` | Teal |
| `--chart-5` | `oklch(0.85 0.01 60)` | Gris chaud |

### 2.5 Sidebar tokens (non utilises sur le landing mais definis)

| Token | Valeur OKLCH |
|-------|-------------|
| `--sidebar` | `oklch(0.985 0 0)` |
| `--sidebar-foreground` | `oklch(0.145 0 0)` |
| `--sidebar-primary` | `oklch(0.205 0 0)` |
| `--sidebar-primary-foreground` | `oklch(0.985 0 0)` |
| `--sidebar-accent` | `oklch(0.97 0 0)` |
| `--sidebar-accent-foreground` | `oklch(0.205 0 0)` |
| `--sidebar-border` | `oklch(0.922 0 0)` |
| `--sidebar-ring` | `oklch(0.708 0 0)` |

### 2.6 Theme inline (@theme inline)

Le bloc `@theme inline` expose tous les tokens CSS vers Tailwind v4 :

```css
@theme inline {
  --font-sans: var(--font-instrument), 'Instrument Sans', system-ui, sans-serif;
  --font-mono: var(--font-jetbrains), 'JetBrains Mono', monospace;
  --font-display: var(--font-instrument-serif), 'Instrument Serif', Georgia, serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}
```

---

## 3. Palette de couleurs

### 3.1 Couleurs semantiques (Tailwind classes)

| Role | Class Tailwind | Valeur | Usage |
|------|---------------|--------|-------|
| Fond page | `bg-background` | `oklch(0.985 0.002 90)` | Body, sections claires |
| Texte principal | `text-foreground` | `oklch(0.12 0.01 60)` | Titres, paragraphes |
| Texte secondaire | `text-muted-foreground` | `oklch(0.45 0.02 60)` | Labels, descriptions |
| **Primary** | `text-primary`, `bg-primary` | `oklch(0.45 0.18 270)` | **Indigo** — CTA, accents, highlights |
| Primary texte | `text-primary-foreground` | `oklch(0.985 0.002 90)` | Texte sur fond primary |
| **Accent** | `text-accent` | `oklch(0.65 0.15 220)` | **Cyan** — Logo .agency, labels speciaux |
| Muted | `text-muted` | `oklch(0.94 0.005 90)` | Fonds inactifs |
| Bordure | `border-border` | `oklch(0.88 0.01 90)` | Separateurs |
| Bordure faible | `border-foreground/10` | 10% opacity | Lignes decoratives |
| Bordure primary | `border-primary/20` | 20% opacity | Hover states, badges |
| Fond section inversee | `bg-foreground` | `oklch(0.12 0.01 60)` | HowItWorks, CalSection |
| Texte inverse | `text-background` | `oklch(0.985 0.002 90)` | Sur fond noir |

### 3.2 Gradients specifiques

**Gradient flux d'appel (SVG)** :
```svg
<linearGradient id="guideLine" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" stopColor="hsl(190, 100%, 65%)" />   /* Cyan */
  <stop offset="50%" stopColor="hsl(230, 100%, 70%)" />    /* Bleu-indigo */
  <stop offset="100%" stopColor="hsl(260, 100%, 75%)" />   /* Violet clair */
</linearGradient>
```

**Gradient sphere ASCII (Canvas)** :
```javascript
const depthFactor = (point.z + 1) / 2; // 0 (back) -> 1 (front)
const hue = 200 + depthFactor * 70;      // 200 (cyan) -> 270 (indigo)
const saturation = 60 + depthFactor * 10;  // 60% -> 70%
const lightness = 55 - depthFactor * 10;   // 55% -> 45%
const alpha = 0.2 + (point.z + 1) * 0.4;   // 0.2 -> 0.6
ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
```

### 3.3 Opacites standard

| Opacite | Usage |
|---------|-------|
| `opacity-0.03` | Noise overlay |
| `opacity-0.05` | Fonds hover tres subtils |
| `opacity-0.08` | Lignes de fond SVG |
| `opacity-0.10` | Separateurs de section |
| `opacity-0.12` | Bordures de cercles SVG (base) |
| `opacity-0.15` | Textes de fond, bordures faibles |
| `opacity-0.20` | AnimatedWave footer |
| `opacity-0.25` | Icones SVG inactives |
| `opacity-0.30` | Grid lines hero |
| `opacity-0.50` | Textes desactives |
| `opacity-0.60` | Sphere (mobile) |
| `opacity-0.70` | Sphere (desktop), ligne connexion SVG |
| `opacity-0.80` | Backdrop nav scroll |

### 3.4 Couleurs HSL specifiques (animations)

| Element | HSL | Usage |
|---------|-----|-------|
| Step 1 | `hsl(190, 100%, 65%)` | Appel entrant — cyan vif |
| Step 2 | `hsl(220, 100%, 70%)` | IA ecoute — bleu clair |
| Step 3 | `hsl(250, 100%, 72%)` | Action — indigo clair |
| Step 4 | `hsl(260, 100%, 75%)` | Resultat — violet clair |
| Glow step 1 | `hsl(190, 100%, 80%)` | Halo cyan |
| Glow step 2 | `hsl(220, 100%, 80%)` | Halo bleu |
| Glow step 3 | `hsl(250, 100%, 82%)` | Halo indigo |
| Glow step 4 | `hsl(260, 100%, 85%)` | Halo violet |

---

## 4. Typographie

### 4.1 Familles de polices

| Role | Police | Source | Variable CSS | Fallback |
|------|--------|--------|-------------|----------|
| **Display / Titres** | Instrument Serif | Google Fonts (next/font) | `--font-instrument-serif` | Georgia, serif |
| **Body / UI** | Instrument Sans | Google Fonts (next/font) | `--font-instrument` | system-ui, sans-serif |
| **Mono / Code** | JetBrains Mono | Google Fonts (next/font) | `--font-jetbrains` | monospace |

### 4.2 Configuration Next.js (layout.tsx)

```typescript
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});
```

Application :
```html
<body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
```

### 4.3 Classes utilitaires typographie

```css
.font-display {
  font-family: var(--font-display); /* Instrument Serif */
}
```

### 4.4 Echelle typographique complete

| Role | Classes Tailwind | Font | Size | Line Height | Letter Spacing | Weight | Color |
|------|---------------|------|------|-------------|----------------|--------|-------|
| H1 Hero | `text-[clamp(2.5rem,10vw,8rem)]` | Display | clamp(2.5rem,10vw,8rem) | `leading-[0.9]` | `tracking-tight` | 400 (serif) | `text-foreground` |
| H1 mot anime | `text-primary` + anim | Display | idem | `leading-[0.9]` | `tracking-tight` | 400 | `text-primary` |
| H2 Section | `text-4xl lg:text-6xl` | Display | 2.25rem / 3.75rem | `tracking-tight` | normal | 400 | `text-foreground` |
| H2 accent | idem + `text-muted-foreground` ou `text-background/50` | Display | idem | `tracking-tight` | normal | 400 | muted / inverse |
| H3 Feature | `text-3xl lg:text-4xl` | Display | 1.875rem / 2.25rem | normal | normal | 400 | `text-foreground` |
| H3 Card | `text-2xl lg:text-3xl` | Display | 1.5rem / 1.875rem | normal | normal | 400 | `text-foreground` / `text-background` |
| Body large | `text-xl lg:text-2xl` | Sans | 1.25rem / 1.5rem | `leading-relaxed` (1.625) | normal | 400 | `text-muted-foreground` |
| Body | `text-lg` | Sans | 1.125rem | `leading-relaxed` | normal | 400 | `text-muted-foreground` |
| Body standard | `text-base` | Sans | 1rem | normal | normal | 400 | `text-foreground` |
| Small | `text-sm` | Sans | 0.875rem | normal | normal | 400 | `text-muted-foreground` / `text-foreground/70` |
| XSmall | `text-xs` | Sans | 0.75rem | normal | normal | 400 | `text-muted-foreground` |
| **Mono label** | `text-xs` + `uppercase tracking-widest` | Mono | 0.75rem | normal | `tracking-widest` (0.1em) | 400 | `text-muted-foreground` |
| **Mono number** | `text-sm font-mono` | Mono | 0.875rem | normal | normal | 400 | `text-primary` / `text-accent/60` |
| Stats value | `text-4xl lg:text-5xl` | Display | 2.25rem / 3rem | normal | `tracking-tight` | 400 | `text-foreground` |
| Metrics counter | `text-6xl lg:text-8xl` | Display | 3.75rem / 6rem | `tracking-tight` | normal | 400 | `text-primary` |
| Pricing price | `text-5xl lg:text-6xl` | Display | 3rem / 3.75rem | normal | normal | 400 | `text-primary` |
| Quote | `text-4xl md:text-5xl lg:text-6xl` | Display | 2.25rem / 3rem / 3.75rem | `leading-[1.1]` | `tracking-tight` | 400 | `text-foreground` |
| Footer brand | `text-2xl` | Display | 1.5rem | normal | normal | 400 | `text-foreground` |
| Eyebrow | `text-sm font-mono` + ligne | Mono | 0.875rem | normal | normal | 400 | `text-muted-foreground` |
| Nav link | `text-sm` | Sans | 0.875rem | normal | normal | 400 | `text-foreground/70` hover `text-foreground` |
| Nav CTA | `text-xs` / `text-base` | Sans | 0.75rem / 1rem | normal | normal | 500 | `text-primary-foreground` |
| Mobile nav | `text-5xl` | Display | 3rem | normal | normal | 400 | `text-foreground` |
| Badge | `text-xs` | Sans | 0.75rem | normal | normal | 500 | `text-primary-foreground` |
| Feature number | `text-sm font-mono` | Mono | 0.875rem | normal | normal | 400 | `text-primary` |
| Step number | `text-4xl` (I, II, III) | Display | 2.25rem | normal | normal | 400 | `text-accent/60` |
| Sub-label marquee | `text-[10px] font-mono uppercase tracking-wider` | Mono | 10px | normal | `tracking-wider` | 400 | `text-muted-foreground/70` |

### 4.5 Pattern Eyebrow (label de section)

Structure HTML exacte :
```html
<span class="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
  <span class="w-8 h-px bg-primary/40" />
  LABEL DE SECTION
</span>
```

Variante centree (Integrations, CalSection) :
```html
<span class="inline-flex items-center gap-3 text-sm font-mono text-background/50">
  <span class="w-8 h-px bg-accent/40" />
  LABEL
  <span class="w-8 h-px bg-accent/40" />
</span>
```

### 4.6 Stroke text (effet contour)

```css
.text-stroke {
  -webkit-text-stroke: 1.5px currentColor;
  -webkit-text-fill-color: transparent;
}
```

Usage : `className="text-stroke"` sur le texte (ex: "des le 1er mois" dans PricingSection).

---

## 5. Spacing & Layout

### 5.1 Conteneurs

| Nom | max-width | Usage |
|-----|-----------|-------|
| Standard | `max-w-[1400px]` | Navigation, Hero, Features, Metrics, Security, Integrations, Footer |
| Large | `max-w-7xl` (1280px) | Pricing, Testimonials |
| Medium | `max-w-[1000px]` | CalSection (embed) |
| Nav scrolled | `max-w-[1200px]` | Navigation au scroll |
| Nav initial | `max-w-[1400px]` | Navigation initiale |

Padding horizontal commun : `px-6 lg:px-12`

### 5.2 Padding vertical par section

| Section | Mobile | Desktop |
|---------|--------|---------|
| Hero | py-32 | py-40 |
| Features | py-24 | py-32 |
| Metrics | py-24 | py-32 |
| HowItWorks | py-24 | py-32 |
| Security | py-24 | py-32 |
| Integrations | py-24 | py-32 |
| Testimonials | py-32 | py-40 |
| Pricing | py-32 | py-40 |
| CTA | py-24 | py-32 |
| CalSection | py-24 | py-32 |

### 5.3 Separateurs

| Type | Classe | Opacite | Usage |
|------|--------|---------|-------|
| Bordure top | `border-t border-foreground/10` | 10% | StatsMarquee, Testimonials, Pricing |
| Bordure bottom | `border-b border-foreground/10` | 10% | Metrics (avec top aussi) |
| Bordure inverse | `border-background/10` | 10% | HowItWorks (sur fond noir) |
| Bordure carte | `border border-foreground/10` | 10% | Cartes standard |
| Bordure hover | `hover:border-primary/30` | 30% | Hover cartes integrations |

### 5.4 Gap standards

| Context | Gap |
|---------|-----|
| Grille 2 colonnes | `gap-12 lg:gap-24` |
| Grille cards | `gap-6` (marquee), `gap-px` (pricing grid) |
| Flex nav | `gap-12` (desktop), `gap-4` (mobile) |
| CTAs | `gap-4` |
| Footer colonnes | `gap-12 lg:gap-8` |
| Stats marquee | `gap-24 md:gap-32` |

### 5.5 Tailwind spacing (default v4)

Aucun spacing custom n'est defini. Le projet utilise l'echelle Tailwind v4 par defaut :
- 1 = 0.25rem (4px)
- 2 = 0.5rem (8px)
- 3 = 0.75rem (12px)
- 4 = 1rem (16px)
- 6 = 1.5rem (24px)
- 8 = 2rem (32px)
- 10 = 2.5rem (40px)
- 12 = 3rem (48px)
- 14 = 3.5rem (56px)
- 16 = 4rem (64px)
- 20 = 5rem (80px)
- 24 = 6rem (96px)
- 32 = 8rem (128px)
- 40 = 10rem (160px)

---

## 6. Composants UI

### 6.1 Button (shadcn/ui custom)

Fichier : `components/ui/button.tsx`

**Variants definis** :

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
```

**Styles CTA propres au site** (overrides Tailwind direct) :

```html
<!-- CTA Principal -->
<Button 
  size="lg" 
  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base rounded-full group"
>
  <Phone className="w-4 h-4 mr-2" />
  Tester la demo
  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
</Button>

<!-- CTA Secondaire -->
<Button 
  size="lg" 
  variant="outline" 
  className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
>
  Voir les tarifs
</Button>

<!-- Nav CTA scroll -->
<Button
  size="sm"
  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 h-8 text-xs"
>
  Tester la demo
</Button>

<!-- Mobile CTA -->
<Button 
  className="w-full bg-primary text-primary-foreground rounded-full h-14 text-base"
>
  Tester la demo
</Button>
```

**Focus states** :
- `focus-visible:border-ring`
- `focus-visible:ring-ring/50`
- `focus-visible:ring-[3px]`

### 6.2 Card (shadcn/ui)

Fichier : `components/ui/card.tsx`

```typescript
function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}
```

**Note** : Les cards du landing n'utilisent PAS le composant Card shadcn. Elles utilisent des divs avec bordures fines directement.

### 6.3 Badge (shadcn/ui)

Fichier : `components/ui/badge.tsx`

```typescript
const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
```

**Usage sur le site** :
- Badge "Le plus choisi" (Pricing) : custom, pas le composant Badge
```html
<span className="absolute -top-3 left-8 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest">
  Le plus choisi
</span>
```
- Badge "Recrutement" (Footer) : `text-xs px-2 py-0.5 bg-primary text-primary-foreground rounded-full`
- Certifications (Security) : `px-4 py-2 border border-primary/20 text-sm font-mono text-primary`

### 6.4 Input / Form (shadcn/ui — disponibles mais non utilises sur le landing)

Le landing n'a PAS de formulaire. Tous les CTA pointent vers Cal.com.

### 6.5 Navigation patterns

**Desktop nav** :
```html
<header className="fixed z-50 top-0 left-0 right-0">
  <nav className="mx-auto max-w-[1400px] bg-transparent">
    <div className="flex items-center justify-between h-20 px-6 lg:px-8">
      <!-- Logo -->
      <a href="#" className="flex items-center gap-2 group">
        <span className="font-display tracking-tight text-2xl">Decroche</span>
        <span className="text-accent font-mono text-xs mt-1">.agency</span>
      </a>
      
      <!-- Links -->
      <div className="hidden md:flex items-center gap-12">
        <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group">
          Offre
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
      
      <!-- CTA -->
      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
        Tester la demo
      </Button>
    </div>
  </nav>
</header>
```

**Nav scrolled state** :
- Position : `top-4 left-4 right-4` (inset)
- Fond : `bg-background/80 backdrop-blur-xl`
- Bordure : `border border-foreground/10`
- Radius : `rounded-2xl`
- Shadow : `shadow-lg`
- Max-width : `max-w-[1200px]`
- Hauteur : `h-14` (vs `h-20` initial)
- Logo : `text-xl` (vs `text-2xl`)
- CTA : `px-4 h-8 text-xs` (vs `px-6`)

**Mobile nav** :
- Overlay : `fixed inset-0 bg-background z-40`
- Liens : `text-5xl font-display text-foreground hover:text-primary`
- Stagger : `transitionDelay: ${i * 75}ms`
- CTA bottom : `w-full bg-primary text-primary-foreground rounded-full h-14 text-base`

---

## 7. Animations & Motion

### 7.1 Fichier source
Toutes les animations sont definies dans `app/globals.css` lignes 96-191.

### 7.2 Marquee (defilement infini)

```css
.marquee {
  animation: marquee 30s linear infinite;
}

.marquee-reverse {
  animation: marquee-reverse 25s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
```

**Usage** :
- StatsMarquee : 30s, une seule direction
- Integrations : deux marquees (30s normal + 25s reverse)
- Testimonials logos : 30s

**Structure HTML** (doublee pour boucle infinie) :
```html
<div className="flex gap-24 md:gap-32 marquee whitespace-nowrap">
  {[...Array(2)].map((_, i) => (
    <div key={i} className="flex gap-24 md:gap-32">
      {/* items */}
    </div>
  ))}
</div>
```

### 7.3 Line Reveal

```css
.line-reveal {
  clip-path: inset(0 100% 0 0);
  animation: line-reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
}

@keyframes line-reveal {
  to { clip-path: inset(0 0 0 0); }
}
```

**Note** : Cette classe est definie mais NON UTILISEE dans le code actuel. Elle fait partie du template d'origine.

### 7.4 Char In (Hero word animation)

```css
.animate-char-in {
  animation: char-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  opacity: 0;
  filter: blur(40px);
  transform: translateY(100%);
}

@keyframes char-in {
  0% {
    opacity: 0;
    filter: blur(40px);
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}
```

**Usage dans Hero** :
- Le mot change toutes les 2.5s (setInterval 2500ms)
- Chaque lettre a un `animationDelay` incremente de 50ms
- Le mot est enveloppe dans un `<span className="text-primary">` avec un underline decoratif `h-3 bg-primary/10`

```html
<span className="relative inline-block text-primary">
  <span key={wordIndex} className="inline-flex">
    {words[wordIndex].split("").map((char, i) => (
      <span
        key={`${wordIndex}-${i}`}
        className="inline-block animate-char-in"
        style={{ animationDelay: `${i * 50}ms` }}
      >
        {char}
      </span>
    ))}
  </span>
  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/10" />
</span>
```

**Mots** : ["decroche", "qualifie", "prend RDV", "transfere"]

### 7.5 Hover Lift

```css
.hover-lift {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
}
```

**Note** : Defini mais pas explicitement utilise dans les composants actuels. Le site utilise plutot `group-hover:translate-x-1` et `group-hover:translate-x-2`.

### 7.6 Letter Spin

```css
.letter-spin {
  display: inline-block;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.letter-spin:hover {
  transform: rotateY(360deg);
}
```

**Note** : Defini mais NON UTILISE dans le code actuel. Heritage du template.

### 7.7 Intersection Observer Reveal

Pattern standard utilise dans TOUTES les sections :

```typescript
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
```

**Classes de transition** :
```html
<div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
```

**Delais** :
- Hero : delay-200 (description), delay-300 (CTAs)
- Feature cards : `transitionDelay: ${index * 100}ms`
- Metrics grid : `transitionDelay: ${index * 100}ms`
- Security features : `transitionDelay: ${index * 100}ms`
- Certifications : `transitionDelay: ${index * 50 + 200}ms`

### 7.8 Animated Counter (Metrics)

```typescript
function AnimatedCounter({ end, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 secondes
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    // ...
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-6xl lg:text-8xl font-display tracking-tight text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}
```

**Easing** : `1 - Math.pow(1 - progress, 3)` (ease-out cubic)
**Duree** : 2000ms
**Seuil declenchement** : 0.5

### 7.9 Testimonials Carousel

```typescript
useEffect(() => {
  const interval = setInterval(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  }, 5000);
  return () => clearInterval(interval);
}, []);
```

**Timing** :
- Rotation : toutes les 5 secondes
- Fade out : 300ms
- Fade in : 300ms
- Classes : `opacity-0 translate-y-4` → `opacity-100 translate-y-0`

### 7.10 Flux d'appel SVG Animation

**Duree du cycle** : 10s
**Technique** : stroke-dasharray + opacites sequentielles

**Gradient SVG** :
```svg
<linearGradient id="guideLine" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" stopColor="hsl(190, 100%, 65%)" />
  <stop offset="50%" stopColor="hsl(230, 100%, 70%)" />
  <stop offset="100%" stopColor="hsl(260, 100%, 75%)" />
</linearGradient>
```

**Filtres SVG** :
```svg
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
```

**Ligne qui avance** :
```svg
<line x1="120" y1="140" x2="840" y2="140"
  stroke="url(#guideLine)" strokeWidth="2.5" opacity="0.9"
  strokeLinecap="round" filter="url(#softGlow)"
  strokeDasharray="720" strokeDashoffset="720">
  <animate attributeName="stroke-dashoffset" values="720;0;0;720" dur="10s" repeatCount="indefinite" keyTimes="0;0.35;0.75;1" />
  <animate attributeName="opacity" values="0.9;0.9;0;0" dur="10s" repeatCount="indefinite" keyTimes="0;0.35;0.38;1" />
</line>
```

**Sequence d'illumination par step** (10s cycle) :

| Step | Cercle base | Illumination start | Glow peak | Text peak | Fade out |
|------|------------|-------------------|-----------|-----------|----------|
| 1 (120,140) | opacity 0.12 | 0.08 | 0.12 | 0.12 | 0.30 |
| 2 (360,140) | opacity 0.12 | 0.28 | 0.35 | 0.35 | 0.50 |
| 3 (600,140) | opacity 0.12 | 0.54 | 0.65 | 0.65 | 0.75 |
| 4 (840,140) | opacity 0.12 | 0.80 | 0.95 | 0.95 | 1.00 |

**Textes** (base opacity 0.05 / 0.03, peak opacity 1.0 / 0.9) :
- Step 1 : "Appel entrant" / "24/7, instantane"
- Step 2 : "IA ecoute & comprend" / "Qualification intelligente"
- Step 3 : "Action & integration" / "RDV, lead, transfert"
- Step 4 : "Resultat confirme" / "Client satisfait"

**Icones** (Lucide dans foreignObject) :
- Step 1 : Phone (w-5 h-5)
- Step 2 : Brain (w-5 h-5)
- Step 3 : Zap (w-5 h-5)
- Step 4 : CheckCircle2 (w-6 h-6)

**Ligne de connexion** :
```svg
<line x1="120" y1="165" x2="840" y2="165"
  stroke="url(#guideLine)" strokeWidth="3" opacity="0.7"
  strokeLinecap="round" filter="url(#softGlow)" />
```

**Ligne de fond** :
```svg
<line x1="120" y1="140" x2="840" y2="140"
  stroke="url(#guideLine)" strokeWidth="1" opacity="0.08" strokeLinecap="round" />
```

### 7.11 Feature SVG Animations

**ReceptionVisual** (barres animees) :
- 6 barres (rect) a y = 35 + i*16
- Animation opacity : `0.15;0.8;0.15` durant 2s
- Animation width : `20;120;20` durant 2s
- Delai stagger : `i * 0.15s`
- Cercle indicateur : pulse opacity `0.3;1;0.3` durant 1s

**QualifyVisual** (etoile a 6 branches) :
- Cercle central : pulse r `12;14;12` durant 2s
- 6 lignes radiales : angle = i * 60deg, longueur 50px
- Opacite des lignes : `0.3;0.8;0.3` durant 2s, stagger `i * 0.3s`
- Cercles radiaux : pulse r `6;8;6`, stagger `i * 0.3s`
- Halo exterieur : r `20;60`, opacity `0.5;0` durant 2s

**CrmVisual** (synchronisation A→B) :
- Deux rectangles A et B avec cercles au-dessus
- Ligne pointillee entre A et B : `strokeDasharray="4 4"`, animation offset `0;-8` durant 0.5s
- Cercle qui se deplace le long de la ligne : `animateMotion` durant 1.5s
- Indicateur sync en bas : pulse r `6;10;6` et opacity `1;0.3;1` durant 1s

**TransferVisual** (telephone + signal) :
- Forme de telephone en path SVG
- Remplissage interieur : pulse opacity `0.1;0.2;0.1` durant 2s
- Lignes de signal : animation y `40;120;40`, opacity `0;0.5;0` durant 3s

### 7.12 Animated Sphere (Canvas 2D)

**Caracteres** : `░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯`
**Font** : `12px monospace`
**Vitesse rotation** : `time += 0.02` par frame
**Rotations** :
- Y : `time * 0.3`
- X : `time * 0.2`
**Depth sorting** : `points.sort((a, b) => a.z - b.z)`
**Gradient couleur** :
```javascript
const depthFactor = (point.z + 1) / 2;
const hue = 200 + depthFactor * 70;      // 200 -> 270
const saturation = 60 + depthFactor * 10;  // 60 -> 70
const lightness = 55 - depthFactor * 10;  // 55 -> 45
const alpha = 0.2 + (point.z + 1) * 0.4;  // 0.2 -> 0.6
```

**Position Hero** :
```html
<div className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2
  w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px]
  opacity-60 md:opacity-70 pointer-events-none">
  <AnimatedSphere />
</div>
```

### 7.13 Animated Wave (Canvas 2D)

**Caracteres** : `·∘○◯◌●◉`
**Font** : `14px monospace`
**Grille** : 20x20px
**Vagues** :
- wave1 : `sin(x*0.2 + time*2) * cos(y*0.15 + time)`
- wave2 : `sin((x+y)*0.1 + time*1.5)`
- wave3 : `cos(x*0.1 - y*0.1 + time*0.8)`
**Vitesse** : `time += 0.03`
**Alpha** : `0.15 + normalized * 0.5`
**Couleur** : `rgba(0, 0, 0, ${alpha})`
**Position** : Footer, `h-64 opacity-20 pointer-events-none`

### 7.14 Animated Tetrahedron (Canvas 2D)

**Note** : Ce composant existe (`components/landing/animated-tetrahedron.tsx`) mais N'EST PAS UTILISE dans le landing actuel. Heritage du template.

**Caracteres** : `░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯`
**Font** : `18px monospace`
**Rotations** : Y(0.4t), X(0.3t), Z(0.2t)

---

## 8. Effets & Textures

### 8.1 Noise Overlay

```css
.noise-overlay {
  position: relative;
}

.noise-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 1;
}
```

**Application** : `<main className="relative min-h-screen overflow-x-hidden noise-overlay">` (page.tsx)

### 8.2 Grid Lines (Hero)

```html
<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
  {/* 8 lignes horizontales */}
  {[...Array(8)].map((_, i) => (
    <div key={`h-${i}`}
      className="absolute h-px bg-foreground/10"
      style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
    />
  ))}
  {/* 12 lignes verticales */}
  {[...Array(12)].map((_, i) => (
    <div key={`v-${i}`}
      className="absolute w-px bg-foreground/10"
      style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
    />
  ))}
</div>
```

### 8.3 Diagonal Pattern (sections inversees)

```css
background-image: repeating-linear-gradient(
  -45deg,
  transparent,
  transparent 40px,
  currentColor 40px,
  currentColor 41px
);
```

**Opacity** : `0.03`
**Usage** : HowItWorks, CalSection

### 8.4 Spotlight Effect (CTA)

```typescript
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  setMousePosition({
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  });
};
```

```html
<div 
  className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
  style={{
    background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
  }}
/>
```

### 8.5 Decorative Corners (CTA)

```html
<div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
<div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
```

### 8.6 Border Sketch (non utilise)

```css
.border-sketch {
  border: 1px solid transparent;
  background: 
    linear-gradient(var(--background), var(--background)) padding-box,
    linear-gradient(135deg, var(--foreground) 25%, transparent 25%, transparent 50%, var(--foreground) 50%, var(--foreground) 75%, transparent 75%) border-box;
  background-size: 100% 100%, 8px 8px;
}
```

### 8.7 Backdrop Blur

```html
className="bg-background/80 backdrop-blur-xl"
```

**Usage** : Navigation scroll, CalSection embed.

---

## 9. Sections page par page

### 9.1 Page structure (page.tsx)

```typescript
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <StatsMarquee />
      <MetricsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <CalSection />
      <FooterSection />
    </main>
  );
}
```

### 9.2 Navigation

**Fichier** : `components/landing/navigation.tsx`
**Type** : Client component ("use client")
**Hauteur** : 80px initial → 56px scrolled
**Liens** : Offre (#features), Comment ca marche (#how-it-works), Conformite (#security), Tarifs (#pricing)
**CTA unique** : "Tester la demo" → https://cal.com/bruno.crp/30min
**Login** : SUPPRIME (pas de lien login)

**Etats** :
| Etat | Position | Fond | Bordure | Radius | Shadow | Max-width | Hauteur |
|------|----------|------|---------|--------|--------|-----------|---------|
| Initial | `top-0 left-0 right-0` | transparent | none | none | none | 1400px | 80px |
| Scrolled | `top-4 left-4 right-4` | `bg-background/80 backdrop-blur-xl` | `border border-foreground/10` | `rounded-2xl` | `shadow-lg` | 1200px | 56px |
| Mobile open | idem scrolled | `bg-background` | none | none | none | full | full |

**Logo** :
```html
<a href="#" className="flex items-center gap-2 group">
  <span className="font-display tracking-tight text-2xl">Decroche</span>
  <span className="text-accent font-mono text-xs mt-1">.agency</span>
</a>
```

### 9.3 HeroSection

**Fichier** : `components/landing/hero-section.tsx`
**Hauteur** : `min-h-screen`
**Layout** : `flex flex-col justify-center`

**Elements** :
1. Sphère ASCII (absolute right, pointer-events-none, opacity 60-70%)
2. Grid lines (8 horizontales + 12 verticales, opacity 30%)
3. Eyebrow : "Agents vocaux IA pour PME" + ligne decorative
4. H1 : "Un assistant vocal qui [MOT ANIMÉ]"
   - "decroche" → "qualifie" → "prend RDV" → "transfere"
   - Rotation toutes les 2.5s
   - Char-in animation (blur 40px + translateY)
5. Description : "Ne perdez plus un appel. Receptionnez vos clients 24/7 avec une voix humaine en francais. Conforme RGPD. Heberge en France."
6. CTAs : "Tester la demo" (primary, rounded-full) + "Voir les tarifs" (outline, rounded-full)

**Copy exact** :
- Eyebrow : "Agents vocaux IA pour PME"
- H1 L1 : "Un assistant vocal"
- H1 L2 : "qui [mot anime]"
- Description : "Ne perdez plus un appel. Receptionnez vos clients 24/7 avec une voix humaine en francais. Conforme RGPD. Heberge en France."

### 9.4 StatsMarquee

**Fichier** : `components/landing/stats-marquee.tsx`
**Animation** : marquee 30s infinite
**Bordures** : `border-t border-foreground/10`

**Stats** (3 niveaux par item) :
| Value | Label | Sub (uppercase) |
|-------|-------|----------------|
| 83% | d'appels manques hors heures | D'OUVERTURE |
| 350-900€ | CA perdu | PAR APPEL |
| 28 000€ | economises | PAR POSTE / AN |
| 24/7 | disponibilite | GARANTIE |

**Classes** :
- Value : `text-4xl lg:text-5xl font-display text-foreground`
- Label : `text-sm text-muted-foreground leading-tight`
- Sub : `text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70 mt-1`

### 9.5 MetricsSection

**Fichier** : `components/landing/metrics-section.tsx`
**ID** : `#studio` (heritage template)
**Bordures** : `border-y border-foreground/10`
**Layout** : grid 2x2 avec `gap-px bg-foreground/10`

**Metrics** :
| Value | Suffix | Prefix | Label |
|-------|--------|--------|-------|
| 83 | % | | des PME perdent des appels hors heures d'ouverture |
| 900 | € | | de CA potentiel par appel manque (max) |
| 28000 | € | | cout annuel d'UN poste receptionniste (35h/semaine). 10 postes = 280 000€/an. |
| 500 | ms | < | de latence end-to-end. Conversation fluide, indiscernable d'un humain. |

**Eyebrow** : "Le probleme"
**H2** : "Chaque appel manque / est un client perdu." (deuxieme ligne en `text-muted-foreground`)

### 9.6 FeaturesSection

**Fichier** : `components/landing/features-section.tsx`
**ID** : `#features`
**Layout** : liste empilee, cards horizontales (numero + contenu + visuel SVG)

**Features** :
| # | Title | Description | Visual |
|---|-------|-------------|--------|
| 01 | Reception 24/7 | Jamais d'appel manque, meme le dimanche soir. Votre assistant decroche en moins d'une sonnerie, a toute heure. | reception |
| 02 | Qualification intelligente | L'IA identifie le motif de l'appel, priorise les leads chauds et redirige vers le bon service. | qualify |
| 03 | Prise de RDV & CRM | Integration directe a votre agenda (Google Calendar, Doctolib) et votre outil de suivi. Zero saisie manuelle. | crm |
| 04 | Conformite & Transfert | Mention AI Act en debut d'appel, transfert humain avec resume complet de la conversation. Zero risque juridique. | transfer |

**Eyebrow** : "L'offre"
**H2** : "Ce que fait votre / assistant vocal." (deuxieme ligne en `text-primary`)

**Card layout** :
```html
<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
  <span className="font-mono text-sm text-primary">{number}</span>
  <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
        {title}
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
    </div>
    <div className="flex justify-center lg:justify-end">
      <div className="w-48 h-40 text-primary">
        <AnimatedVisual type={visual} />
      </div>
    </div>
  </div>
</div>
```

### 9.7 HowItWorksSection

**Fichier** : `components/landing/how-it-works-section.tsx`
**ID** : `#how-it-works`
**Fond** : `bg-foreground text-background` (inverse)
**Texture** : diagonal pattern `repeating-linear-gradient(-45deg, transparent 40px, currentColor 41px)` a opacity 0.03

**Structure** :
1. Header avec eyebrow "Process" et H2 "Trois etapes. / Zero complexite."
2. **Flux d'appel** (SVG anime, 10s cycle)
   - Label : "Flux d'appel" (accent/60, uppercase tracking-widest)
3. **Vos 3 etapes** (3 cartes)
   - Label : "Vos 3 etapes" (accent/60, uppercase tracking-widest)
   - Bordure top : `border-t border-background/10`
   - Grid : `grid lg:grid-cols-3 gap-px bg-background/10`

**Steps** :
| # | Title | Description |
|---|-------|-------------|
| I | Audit (30 min) | On analyse vos besoins, votre flux d'appels et vos outils existants. Pas de blabla, juste les faits. |
| II | Configuration (10 jours) | Voix francaise, script metier, integrations CRM et agenda. On teste en aveugle avant la mise en ligne. |
| III | Live + Optimisation | Mise en production, monitoring en temps reel et ajustements hebdomadaires. Vous dormez, on travaille. |

**Card inverse** :
```html
<div className="bg-foreground p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-background/10 last:border-r-0">
  <div className="flex items-start gap-6">
    <span className="font-display text-4xl text-accent/60 shrink-0">I</span>
    <div>
      <h3 className="text-2xl lg:text-3xl font-display mb-4">{title}</h3>
      <p className="text-background/60 leading-relaxed text-lg">{description}</p>
    </div>
  </div>
</div>
```

### 9.8 SecuritySection

**Fichier** : `components/landing/security-section.tsx`
**ID** : `#security`
**Fond** : `bg-foreground/[0.02]` (legere teinte)
**Layout** : `grid lg:grid-cols-2 gap-16 lg:gap-24`

**Eyebrow** : "Conformite"
**H2** : "La conformite / n'est pas une option."
**Description** : "Un agent vocal mal deploye peut vous exposer a une amende CNIL de 20 millions d'euros. Nous garantissons zero risque juridique."

**Certifications** (badges) :
```
["RGPD", "AI Act", "ISO 27001", "HDS (Sante)", "DPA fourni"]
```
Classe : `px-4 py-2 border border-primary/20 text-sm font-mono text-primary`

**Security features** :
| Icon | Title | Description |
|------|-------|-------------|
| Shield | RGPD natif | Registre des traitements pre-rempli, DPA fourni, hebergement UE obligatoire. Aucun transfert hors Europe. |
| Lock | AI Act article 50 | Mention obligatoire en debut d'appel : "Vous etes en relation avec un assistant vocal automatise." Conformite legale integree. |
| Eye | Hebergement souverain | OVHcloud et Scaleway. Vos donnees vocales ne quittent jamais la France. Protection contre le Cloud Act US. |
| FileCheck | AIPD & DPO partage | Analyse d'Impact sur la Protection des Donnees modele fournie. DPO partage en option pour les traitements a grande echelle. |

**Card layout** :
```html
<div className="p-6 border border-foreground/10 hover:border-primary/30 transition-all duration-500 group">
  <div className="flex items-start gap-4">
    <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
</div>
```

### 9.9 IntegrationsSection

**Fichier** : `components/landing/integrations-section.tsx`
**ID** : `#integrations`
**Layout** : header centre + 2 marquees full-width

**Eyebrow** : "Integrations" (centre, lignes des deux cotes)
**H2** : "Connecte a vos / outils du quotidien."
**Description** : "Votre assistant s'integre a votre stack existante. Pas de changement d'habitudes."

**Integrations** (12 items) :
```
HubSpot (CRM), Doctolib (Sante), Google Calendar (Agenda), Salesforce (CRM),
Pipedrive (CRM), Twilio (Telephonie), Cal.com (Rendez-vous), Notion (Productivite),
Zapier (Automatisation), Stripe (Paiement), Aircall (Telephonie), Ringover (Telephonie)
```

**Marquee cartes** :
```html
<div className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300 group">
  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">{name}</div>
  <div className="text-sm text-muted-foreground">{category}</div>
</div>
```

### 9.10 TestimonialsSection

**Fichier** : `components/landing/testimonials-section.tsx`
**Bordure** : `border-t border-foreground/10`
**Layout** : quote large (8 cols) + metric + navigation (4 cols)

**Testimonials** (4 temoignages) :
| Quote | Author | Role | Company | Metric |
|-------|--------|------|---------|--------|
| On a recupere 15 000€ de chiffre d'affaires en 6 mois sur les appels du dimanche soir qu'on ne prenait jamais. | Thomas M. | Gerant | Le Bistrot, Metz | 15 000€ recuperes |
| Mes patients peuvent prendre rendez-vous a 22h. J'ai gagne 2 heures de sommeil par jour en moyenne. | Dr. Martin | Chirurgien-dentiste | Cabinet dentaire Martin | +28% de RDV |
| Un appel non traite en 2 heures, c'est un client perdu. Aujourd'hui, notre taux de reponse est de 100%. | Sophie Dupont | Directrice | Agence immobiliere Dupont | 100% de reponse |
| L'assistant qualifie les leads avant de me transferer. Je ne perds plus de temps avec les appels non pertinents. | Karim B. | Gerant | Auto-ecole Pilotis | -35% de temps perdu |

**Header** :
```html
<div className="flex items-center gap-4 mb-16">
  <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Temoignages</span>
  <div className="flex-1 h-px bg-foreground/10" />
  <span className="font-mono text-xs text-muted-foreground">01 / 04</span>
</div>
```

**Quote** : `font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight`
**Author avatar** : `w-16 h-16 rounded-full bg-primary/5 border border-primary/10`
**Metric box** : `p-8 border border-foreground/10` + `font-display text-3xl md:text-4xl text-primary`
**Dots** : `h-2 transition-all`, actif `w-8 bg-primary`, inactif `w-2 bg-foreground/20`

**Logos marquee** (full-width, en dessous) :
```
Le Bistrot, Metz, Cabinet dentaire Martin, Agence Dupont, Auto-ecole Pilotis,
Golf Blue Green, Clinique Veterinaire du Parc, L'Atelier Coiffure, BTP Pro
```
Classe : `font-display text-xl md:text-2xl text-foreground/30 hover:text-foreground`

### 9.11 PricingSection

**Fichier** : `components/landing/pricing-section.tsx`
**ID** : `#pricing`
**Bordure** : `border-t border-foreground/10`
**Container** : `max-w-7xl mx-auto px-6 lg:px-12`

**Header** :
- Eyebrow : "Tarifs" (`font-mono text-xs tracking-widest text-muted-foreground uppercase`)
- H2 : "Un ROI mesurable / des le 1er mois." (deuxieme ligne : `text-stroke`)
- Description : "Setup fee a l'installation + abonnement mensuel. Le setup couvre l'analyse flux, le prompt engineering, la voix, les integrations, les tests et la conformite."

**Plans** (4 colonnes, grid gap-px) :

| Plan | Description | Setup | MRR | Forfait | Overage | Features |
|------|-------------|-------|-----|---------|---------|----------|
| **Demarrage** | TPE / Artisans / Commercants | 2 500 € | 499€ | 300 min/mois | 0.29€/min | 1 ligne, reception 24/7, RDV, mention AI Act, rapport mensuel |
| **Pro** (POPULAR) | PME 5 a 50 salaries | 5 000 € | 999€ | 1 500 min/mois | 0.29€/min | Lignes illimitees, qualification leads, CRM, transfert humain, monitoring prioritaire |
| **Enterprise** | ETI / Multi-site / Franchise | 15 000 €+ | 3 000-8 000 € | custom | - | Multi-site, API, hebergement HDS, DPO, SLA 99.9%, audit securite |
| **Sur-mesure** | Secteur public / Grand compte | Sur audit | Sur audit | custom | - | Architecture dediee, hebergement prive, audit approfondi, formation, accompagnement |

**Card layout** :
```html
<div className="relative p-8 lg:p-10 bg-background">
  {popular && (
    <span className="absolute -top-3 left-8 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest">
      Le plus choisi
    </span>
  )}
  {/* Header */}
  <span className="font-mono text-xs text-muted-foreground">{number}</span>
  <h3 className="font-display text-3xl text-foreground mt-2">{name}</h3>
  <p className="text-sm text-muted-foreground mt-2">{description}</p>
  
  {/* Price */}
  <div className="mb-8 pb-8 border-b border-foreground/10">
    <span className="font-display text-5xl lg:text-6xl text-primary">{price}€</span>
    <span className="text-muted-foreground">/mois</span>
    <div className="mt-2 text-sm text-muted-foreground">
      Setup : <span className="text-foreground font-medium">{setup}</span>
    </div>
    <div className="mt-1 text-xs text-muted-foreground font-mono">
      Au-dela du forfait : 0,29€/min
    </div>
  </div>
  
  {/* Features */}
  <ul className="space-y-4 mb-10">
    {features.map(f => (
      <li className="flex items-start gap-3">
        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
        <span className="text-sm text-muted-foreground">{f}</span>
      </li>
    ))}
  </ul>
  
  {/* CTA */}
  <a href="https://cal.com/bruno.crp/30min" className="...">
    {cta} <ArrowRight className="w-4 h-4" />
  </a>
</div>
```

**CTA style par plan** :
- Popular : `bg-primary text-primary-foreground hover:bg-primary/90`
- Autres : `border border-foreground/20 text-foreground hover:border-primary hover:bg-primary/5`

**Bottom note** :
```
Engagement minimum 12 mois. Tous les packs incluent la conformite RGPD,
l'hebergement souverain et le support email.
```

### 9.12 CtaSection

**Fichier** : `components/landing/cta-section.tsx`
**Layout** : Box centree avec bordure + spotlight souris

**H2** : "Ne perdez plus / un seul appel." (deuxieme ligne `text-primary`)
**Description** : "Vos concurrents qui ont deja l'IA decroche chaque appel en moins d'une sonnerie. Vous, combien d'opportunites laissez-vous sur la table chaque mois ?"
**CTAs** : "Tester la demo" (primary) + "Nous ecrire" (outline, mailto)
**Note** : "Demonstration gratuite de 30 minutes. Sans engagement." (`font-mono`)

**Spotlight** : radial-gradient 600px suivant la souris (voir section 8.4)
**Coins decoratifs** : 32x32px bordures (voir section 8.5)

### 9.13 CalSection

**Fichier** : `components/landing/cal-section.tsx`
**ID** : `#rdv`
**Fond** : `bg-foreground text-background` (inverse)
**Texture** : diagonal pattern a opacity 0.03

**Eyebrow** : "Prendre rendez-vous" (centre, accent/40)
**H2** : "Reserver une demo / de 30 minutes." (deuxieme ligne `text-background/50`)

**Embed Cal.com** :
```html
<div className="rounded-2xl overflow-hidden border border-background/10 bg-background/5 backdrop-blur-sm">
  <iframe
    src="https://cal.com/bruno.crp/30min?embed=true&theme=dark&layout=month_view"
    className="w-full min-h-[700px]"
    frameBorder="0"
    allow="camera; microphone; autoplay; fullscreen"
    title="Reserver un rendez-vous avec Decroche.agency"
  />
</div>
```

### 9.14 FooterSection

**Fichier** : `components/landing/footer-section.tsx`
**Bordure** : `border-t border-foreground/10`
**Background** : AnimatedWave (canvas, h-64, opacity-20)

**Layout** : `grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8`

**Colonne 1 (Brand)** :
```html
<a href="#" className="inline-flex items-center gap-2 mb-6">
  <span className="text-2xl font-display">Decroche</span>
  <span className="text-xs text-accent font-mono">.agency</span>
</a>
<p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
  Agents vocaux IA hyper-realistes pour PME francaises. Conformite native, hebergement souverain, ROI mesurable.
</p>
```

**Social links** :
```
LinkedIn, Twitter
```
Classe : `text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group`
Icone : `ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"`

**Colonnes liens** :

| Colonne | Liens |
|---------|-------|
| Produit | Offre (#features), Comment ca marche (#how-it-works), Conformite (#security), Tarifs (#pricing) |
| Ressources | Documentation (#), FAQ juridique (#), Blog (#), Statut (#) |
| Entreprise | A propos (#), Carrieres (#, badge "Recrutement"), Contact (mailto) |
| Legal | Mentions legales (#), CGV (#), RGPD (#security) |

**Badge "Recrutement"** : `text-xs px-2 py-0.5 bg-primary text-primary-foreground rounded-full`

**Bottom bar** :
- Copyright : "2026 Decroche.agency. Tous droits reserves."
- Status : "Tous les systemes operationnels" + dot verte (`w-2 h-2 rounded-full bg-green-500`)

---

## 10. Assets & Ressources

### 10.1 Polices (Google Fonts via next/font)

| Police | Poids | Subsets | Variable |
|--------|-------|---------|----------|
| Instrument Sans | 400-700 | latin | --font-instrument |
| Instrument Serif | 400 | latin | --font-instrument-serif |
| JetBrains Mono | 400-700 | latin | --font-jetbrains |

### 10.2 Icones (Lucide React v0.454.0)

**Icones utilisees dans le landing** :

| Icone | Import | Taille | Usage |
|-------|--------|--------|-------|
| Phone | `lucide-react` | w-4, w-5 | CTA, Flux d'appel step 1 |
| ArrowRight | `lucide-react` | w-4 | CTAs (group-hover:translate-x-1) |
| Brain | `lucide-react` | w-5 | Flux d'appel step 2 |
| Zap | `lucide-react` | w-5 | Flux d'appel step 3 |
| CheckCircle2 | `lucide-react` | w-6 | Flux d'appel step 4 |
| Check | `lucide-react` | w-4 | Pricing features list |
| Shield | `lucide-react` | w-5 | SecuritySection RGPD |
| Lock | `lucide-react` | w-5 | SecuritySection AI Act |
| Eye | `lucide-react` | w-5 | SecuritySection hebergement |
| FileCheck | `lucide-react` | w-5 | SecuritySection AIPD |
| Menu | `lucide-react` | w-6 | Mobile menu toggle |
| X | `lucide-react` | w-6 | Mobile menu close |
| ArrowUpRight | `lucide-react` | w-3 | Footer social links |

**Style icones** :
- Taille standard inline : `w-4 h-4`
- Taille features/SVG : `w-5 h-5`
- Taille mobile menu : `w-6 h-6`
- Taille large : `w-6 h-6`
- Taille footer social : `w-3 h-3`
- Propriete commune : `shrink-0` (dans les flex)
- Couleur : heritee du parent (`text-primary`, `currentColor`)

### 10.3 Images & Assets publics

| Fichier | Path | Usage |
|---------|------|-------|
| icon.svg | `public/icon.svg` | Favicon SVG |
| apple-icon.png | `public/apple-icon.png` | Apple touch icon |
| icon-dark-32x32.png | `public/icon-dark-32x32.png` | Favicon dark mode |
| icon-light-32x32.png | `public/icon-light-32x32.png` | Favicon light mode |
| placeholder-logo.svg | `public/placeholder-logo.svg` | Logo placeholder |
| placeholder-logo.png | `public/placeholder-logo.png` | Logo placeholder |
| placeholder.jpg | `public/placeholder.jpg` | Image placeholder |
| placeholder-user.jpg | `public/placeholder-user.jpg` | Avatar placeholder |
| placeholder.svg | `public/placeholder.svg` | SVG placeholder |

### 10.4 Composants Canvas

| Composant | Fichier | Type | Utilise |
|-----------|---------|------|---------|
| AnimatedSphere | `components/landing/animated-sphere.tsx` | Canvas 2D, ASCII art | OUI (Hero) |
| AnimatedWave | `components/landing/animated-wave.tsx` | Canvas 2D, wave ASCII | OUI (Footer) |
| AnimatedTetrahedron | `components/landing/animated-tetrahedron.tsx` | Canvas 2D, 3D ASCII | NON (heritage) |

### 10.5 Composants shadcn/ui (57 fichiers)

Le projet utilise shadcn/ui style "New York" avec baseColor "neutral". Les composants suivants sont installes mais seuls Button et Badge sont activement utilises dans le landing :

**Utilises** :
- `button.tsx` — CTAs, nav
- `badge.tsx` — footer "Recrutement", certifications (indirectement)

**Disponibles** (pour futur usage) :
accordion, alert, alert-dialog, aspect-ratio, avatar, breadcrumb, button-group, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, empty, field, form, hover-card, input, input-group, input-otp, item, kbd, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toast, toaster, toggle, toggle-group, tooltip

---

## 11. Patterns de code reutilisables

### 11.1 Helper cn()

Fichier : `lib/utils.ts`

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 11.2 Pattern Intersection Observer Reveal

```typescript
"use client";
import { useEffect, useRef, useState } from "react";

export function MySection() {
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
    <section ref={sectionRef}>
      <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        {/* Content */}
      </div>
    </section>
  );
}
```

### 11.3 Pattern Section Standard (fond clair)

```typescript
<section id="section-id" className="relative py-24 lg:py-32">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
    {/* Eyebrow + H2 + Content */}
  </div>
</section>
```

### 11.4 Pattern Section Inversee (fond noir)

```typescript
<section className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
  {/* Diagonal pattern */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
    <div className="absolute inset-0" style={{
      backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`
    }} />
  </div>
  
  <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
    {/* Content */}
  </div>
</section>
```

### 11.5 Pattern Eyebrow

```html
<span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
  <span className="w-8 h-px bg-primary/40" />
  LABEL
</span>
```

Variante centree inversee :
```html
<span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
  <span className="w-8 h-px bg-accent/40" />
  LABEL
  <span className="w-8 h-px bg-accent/40" />
</span>
```

### 11.6 Pattern Carte avec bordure fine

```html
<div className="p-6 border border-foreground/10 hover:border-primary/30 transition-all duration-500 group">
  {/* Content */}
</div>
```

### 11.7 Pattern Grid avec separateurs (Pricing, HowItWorks)

```html
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
  {items.map((item, idx) => (
    <div key={idx} className="bg-background p-8">
      {/* Content */}
    </div>
  ))}
</div>
```

### 11.8 Pattern Marquee

```html
<div className="flex gap-6 marquee whitespace-nowrap">
  {[...Array(2)].map((_, i) => (
    <div key={i} className="flex gap-6 shrink-0">
      {items.map(item => (
        <div key={item.name} className="shrink-0">
          {/* Content */}
        </div>
      ))}
    </div>
  ))}
</div>
```

### 11.9 Pattern Nav Link avec underline

```html
<a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group">
  Label
  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
</a>
```

### 11.10 Pattern CTA Principal

```html
<Button 
  size="lg" 
  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base rounded-full group"
  asChild
>
  <a href="https://cal.com/bruno.crp/30min" target="_blank" rel="noopener noreferrer">
    <Phone className="w-4 h-4 mr-2" />
    Tester la demo
    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
  </a>
</Button>
```

---

## 12. Responsive & Breakpoints

### 12.1 Breakpoints Tailwind v4

| Nom | Pixel | Prefix | Usage principal |
|-----|-------|--------|-----------------|
| sm | 640px | `sm:` | Peu utilise |
| md | 768px | `md:` | Basculer nav mobile/desktop, grid 2 cols |
| lg | 1024px | `lg:` | Grid 3-4 cols, typography scale, padding |
| xl | 1280px | `xl:` | Container large |
| 2xl | 1536px | `2xl:` | Rarement utilise |

### 12.2 Comportement par section

| Section | Mobile (<768) | Tablet (768-1024) | Desktop (>1024) |
|---------|--------------|-------------------|-----------------|
| **Nav** | Burger menu, full-screen overlay | Liens visibles, CTA visible | Meme |
| **Hero H1** | clamp(2.5rem,10vw,8rem) | idem | idem |
| **Hero sphere** | w-280px, right-8, opacity-60 | w-380px, right-16, opacity-70 | w-480px, right-24 |
| **Stats** | gap-24, text-4xl | gap-32, text-5xl | idem |
| **Metrics** | 1 colonne | 2 colonnes | idem |
| **Features** | Colonne unique | Colonne unique | 2 cols (texte + visuel) |
| **HowItWorks** | Colonne unique | Colonne unique | 3 cols |
| **Security** | Colonne unique | Colonne unique | 2 cols |
| **Pricing** | 1 colonne | 2 colonnes | 4 colonnes |
| **Testimonials** | Colonne unique | Colonne unique | 8+4 cols |
| **Footer** | 2 cols | 6 cols | 6 cols |

### 12.3 Classes responsive cles

```
px-6 lg:px-12           /* Padding horizontal */
text-4xl lg:text-6xl    /* Titres */
text-3xl lg:text-4xl    /* H3 */
py-24 lg:py-32          /* Padding vertical */
gap-12 lg:gap-24        /* Gaps */
flex lg:flex-row        /* Direction flex */
grid lg:grid-cols-2     /* Grille */
grid lg:grid-cols-3     /* Grille 3 */
grid md:grid-cols-2 lg:grid-cols-4  /* Grille 4 */
hidden md:flex          /* Toggle visibility */
md:hidden               /* Toggle visibility */
```

---

## 13. Guidelines Copy

### 13.1 Regles absolues

1. **Maximum 2 phrases** par bloc descriptif
2. **Verbes d'action** en premier : "decroche", "qualifie", "prend RDV", "transfere", "recupere", "economise"
3. **Chiffres concrets** : jamais "beaucoup", toujours des valeurs exactes (83%, 28 000€, 500ms)
4. **Zero jargon** : pas de "solution", "plateforme", "ecosysteme" sans explication
5. **Questions rhetoriques** pour l'urgence : "Combien d'opportunites laissez-vous sur la table ?"
6. **Preuve immediate** : chaque claim a un chiffre ou une garantie
7. **CTA unique** : "Tester la demo" partout, toujours cal.com
8. **Conformite visible** : RGPD, AI Act, hebergement France dans les 3 premiers screens
9. **Zero emoji**

### 13.2 Vocabulaire interdit / recommande

| Eviter | Utiliser |
|--------|----------|
| Solution | Assistant, outil |
| Plateforme | Service |
| Leverage | Utiliser, exploiter |
| Scalable | Qui grandit avec vous |
| Synergy | Travail ensemble |
| Cutting-edge | Simple, efficace |
| Best-in-class | Le plus fiable |
| Optimize | Ameliorer, perfectionner |
| Drive growth | Gagner des clients |

### 13.3 Structure CTA

Toujours la meme structure :
1. **Verbe d'action** (Tester, Voir, Demander, Contacter)
2. **Objet clair** (la demo, les tarifs, un devis)
3. **Friction nulle** (gratuit, sans engagement, 30 min)

---

## 14. Accessibilite

### 14.1 Focus states

```css
/* Buttons */
focus-visible:border-ring
focus-visible:ring-ring/50
focus-visible:ring-[3px]

/* Invalid */
aria-invalid:ring-destructive/20
aria-invalid:border-destructive
```

### 14.2 Contrastes

| Combinaison | Ratio | AAA/AA |
|-------------|-------|--------|
| Primary (oklch 0.45 0.18 270) sur Background (oklch 0.985) | ~7:1 | AAA |
| Foreground (oklch 0.12) sur Background (oklch 0.985) | ~15:1 | AAA |
| Muted-foreground (oklch 0.45) sur Background | ~4.5:1 | AA |
| Background (oklch 0.985) sur Foreground (oklch 0.12) | ~15:1 | AAA |

### 14.3 Attributs ARIA

- Mobile menu button : `aria-label="Toggle menu"`
- Iframe Cal.com : `title="Reserver un rendez-vous avec Decroche.agency"`

### 14.4 Scroll behavior

```css
html {
  scroll-behavior: smooth;
}
```

---

## 15. Checklist Reproductibilite

Pour reproduire ce design sur un autre projet :

### 15.1 Setup technique
- [ ] Next.js 16 + React 19 + TypeScript
- [ ] Tailwind CSS v4 (`@import 'tailwindcss'`, pas de tailwind.config.js)
- [ ] shadcn/ui (style "new-york", baseColor "neutral", CSS variables)
- [ ] next/font/google : Instrument Sans, Instrument Serif, JetBrains Mono
- [ ] `tw-animate-css` pour les animations

### 15.2 Fichiers a copier
- [ ] `app/globals.css` (tokens + animations)
- [ ] `lib/utils.ts` (helper cn)
- [ ] `components/ui/button.tsx` (CTAs)
- [ ] `components/ui/badge.tsx` (badges)

### 15.3 Tokens a recreer
- [ ] :root avec les 39 tokens oklch
- [ ] @theme inline avec font-sans/mono/display
- [ ] @layer base avec border-border et scroll-behavior
- [ ] @layer utilities avec toutes les animations

### 15.4 Animations a recreer
- [ ] marquee (30s) + marquee-reverse (25s)
- [ ] char-in (blur + translateY)
- [ ] Intersection Observer reveal pattern
- [ ] Flux d'appel SVG (stroke-dasharray 10s)

### 15.5 Patterns layout a recreer
- [ ] Conteneur max-w-[1400px] px-6 lg:px-12
- [ ] Noise overlay (pseudo-element SVG fractalNoise)
- [ ] Grid lines hero (8H + 12V)
- [ ] Diagonal pattern inverse (repeating-linear-gradient)
- [ ] Spotlight CTA (radial-gradient souris)
- [ ] Eyebrow pattern (ligne + texte mono)

### 15.6 Ne PAS oublier
- [ ] `.text-stroke` utility (-webkit-text-stroke: 1.5px)
- [ ] `noise-overlay` sur le `<main>`
- [ ] `scroll-behavior: smooth` sur html
- [ ] `shrink-0` sur toutes les icones dans flex
- [ ] `pointer-events-none` sur tous les elements decoratifs
- [ ] `overflow-x-hidden` sur le main
- [ ] Antialiased sur le body

---

## Annexes

### A. Fichiers du projet

```
app/
  globals.css          ← TOKENS, ANIMATIONS, UTILITIES (MASTER)
  layout.tsx           ← FONTS, METADATA, BODY
  page.tsx             ← COMPOSITION DES SECTIONS

components/
  theme-provider.tsx   ← next-themes (disponible, non utilise)
  landing/
    navigation.tsx
    hero-section.tsx
    stats-marquee.tsx
    metrics-section.tsx
    features-section.tsx
    how-it-works-section.tsx
    security-section.tsx
    integrations-section.tsx
    testimonials-section.tsx
    pricing-section.tsx
    cta-section.tsx
    cal-section.tsx
    footer-section.tsx
    animated-sphere.tsx
    animated-wave.tsx
    animated-tetrahedron.tsx  ← NON UTILISE
  ui/                  ← 57 composants shadcn/ui

lib/
  utils.ts             ← cn() helper

public/
  icon.svg
  apple-icon.png
  icon-dark-32x32.png
  icon-light-32x32.png
  placeholder-*.svg/png/jpg

styles/
  globals.css          ← LEGACY (NE PAS UTILISER)

Configuration :
  components.json      ← shadcn config (style: new-york, baseColor: neutral)
  package.json         ← deps (Next 16, Tailwind 4, shadcn/ui, Lucide)
  next.config.mjs      ← output: export compatible, images unoptimized
  postcss.config.mjs   ← @tailwindcss/postcss
```

### B. Dependencies cles

```json
{
  "next": "16.0.10",
  "react": "19.2.0",
  "tailwindcss": "^4.1.9",
  "@tailwindcss/postcss": "^4.1.9",
  "lucide-react": "^0.454.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1",
  "@radix-ui/react-slot": "1.1.1",
  "@vercel/analytics": "1.3.1"
}
```

### C. Metadonnees

```typescript
export const metadata: Metadata = {
  title: 'Decroche.agency — Assistant Vocal IA pour PME',
  description: 'Ne perdez plus un appel. Receptionnez vos clients 24/7 avec une voix humaine en francais. Conforme RGPD, heberge en France.',
  generator: 'v0.app',
}
```

---

> **Document genere le** : 19 mai 2026
> **Projet** : Decroche.agency (landing page)
> **Base** : Template Optimus SaaS (v0.app), transforme pour Decroche.agency
> **Deploy** : https://optimus-the-ai-platform-to-build-and-ship-2hc9i0de1.vercel.app
> **Technologie** : Next.js 16 + React 19 + Tailwind CSS v4 + shadcn/ui
