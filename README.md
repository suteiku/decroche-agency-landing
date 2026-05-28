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
pnpm verify:env
```

## Environnement / connexions

- `.env.local` existe localement sur le VPS et reste ignoré par Git.
- `.env.example` liste les variables attendues sans secret.
- `docs/ENVIRONMENT.md` documente Google Ads Keyword Planner, Composio, IA, Vercel et emails.

Commandes utiles :

```bash
pnpm verify:env
pnpm keywords -- "assistant ia" "agence ia" "standard téléphonique ia"
```

`pnpm verify:env` ne doit jamais afficher de valeur secrète : uniquement `SET`, `MISSING`, statuts HTTP et erreurs redacted.

## Structure utile

- `app/` : layout et page Next.js.
- `components/landing/` : sections visibles de la landing.
- `components/primitives/` : composants UI propres au projet.
- `lib/site.ts` : liens et libellés communs.
- `STYLE-GUIDE.md` : référence de direction artistique.
