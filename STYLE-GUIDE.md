# Style guide — Decroche.agency

Statut : référence DA pour la landing de prévente. Aucun secret. Aucune promesse commerciale définitive.

## 1. Positionnement

Decroche.agency installe des assistants IA métier pour PME de services.

L’angle public prioritaire : un assistant qui capte les demandes répétitives, qualifie, prépare le suivi et transfère à l’humain quand il faut.

## 2. Principe commercial

Chaque section doit répondre à 5 points :

1. Problème métier répétitif.
2. Assistant simple.
3. Livraison claire.
4. Décision humaine finale.
5. Mesure de valeur.

## 3. Ton

- Français simple.
- Premium mais pas froid.
- Opérationnel, pas “startup IA magique”.
- Promesses prudentes, mesurables et faisables.
- Maximum 2 phrases par bloc quand c’est possible.

À éviter :

- “indiscernable d’un humain”.
- “zéro risque juridique”.
- “CA garanti”.
- faux témoignages.
- badges ou certifications non validés.
- jargon gratuit : agentic workflow, plateforme autonome, révolution IA.

## 4. Direction artistique

Ambiance : cabinet opérationnel premium.

- Fond clair chaud : `oklch(0.985 0.002 90)`.
- Texte principal : noir doux `oklch(0.12 0.01 60)`.
- Primaire : indigo `oklch(0.45 0.18 270)`.
- Accent : cyan `oklch(0.65 0.15 220)`.
- Bordures fines, beaucoup d’espace, grille légère, noise discret.

Typographies :

- Titres : Instrument Serif.
- Texte : Instrument Sans.
- Labels / chiffres : JetBrains Mono.

## 5. Animations à conserver

Les animations font partie de la DA :

- mot animé dans le hero ;
- sphère ASCII en arrière-plan ;
- grilles et révélations au scroll ;
- marquises lentes ;
- flux d’appel animé ;
- micro-interactions sur boutons/cartes.

Règles :

- animation utile ou atmosphérique, jamais bruyante ;
- `transform` / `opacity` en priorité ;
- respect de `prefers-reduced-motion` ;
- focus clavier visible.

## 6. Sections de la landing

Ordre recommandé :

1. Navigation.
2. Hero.
3. Bandeau de preuves de cadrage.
4. Problème.
5. Offre / fonctionnalités.
6. Process.
7. Conformité prudente.
8. Intégrations possibles.
9. Cas d’usage, pas témoignages.
10. Offres indicatives.
11. CTA.
12. Calendrier.
13. Footer.

## 7. Contenu validé pour prévente

Formulations sûres :

- “assistant annoncé clairement”.
- “cadre RGPD documenté”.
- “données limitées”.
- “reprise humaine prévue”.
- “prix indicatifs, devis après diagnostic”.
- “démo contrôlée avant production”.

## 8. Code attendu

- Pas de traces de générateur ou de template externe dans les métadonnées.
- Composants utiles uniquement.
- Pas de `.DS_Store`, placeholders inutiles, dossiers build ou dépendances lourdes non utilisées.
- `pnpm typecheck` et `pnpm build` doivent passer avant push.
