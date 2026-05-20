# Decroche.agency — landing

Site public de prévente pour Decroche Agency.

## Positionnement

Decroche installe des assistants IA métier pour PME de services, avec une entrée claire : assistant vocal de réception, qualification, préparation du rendez-vous et transfert humain quand il faut.

## Règles de contenu

- Pas de promesse magique ou de chiffre non sourcé.
- Pas de faux témoignages : les cas affichés sont des exemples de cas d’usage.
- Les prix restent indicatifs jusqu’à validation commerciale.
- La décision finale doit rester humaine.
- Les claims RGPD / AI Act doivent rester prudents et documentables.

## Développement

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm build
```

## Structure utile

- `app/` : layout et page Next.js.
- `components/landing/` : sections visibles de la landing.
- `components/primitives/` : composants UI propres au projet.
- `lib/site.ts` : liens et libellés communs.
- `STYLE-GUIDE.md` : référence de direction artistique.
