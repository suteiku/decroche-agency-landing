# Environnement Decroche Agency

Objectif : donner au projet tout ce qu’il peut utiliser sans mettre de secrets dans Git ou dans le chat.

## Fichiers

- `.env.local` : fichier local ignoré par Git, créé sur le VPS. Il contient la liste complète des variables attendues et des chemins de fallback locaux.
- `.env.example` : fichier commitable avec placeholders uniquement.
- `scripts/env-utils.mjs` : charge `.env.local` + les fallbacks sans afficher de valeurs.
- `scripts/verify-connections.mjs` : vérifie les connexions sans imprimer de secrets.
- `scripts/google-keyword-research.mjs` : requête Google Ads Keyword Planner en lecture seule.

## Pourquoi utiliser des fallbacks

Les secrets déjà présents dans les profils Hermes ou dans d’autres projets ne doivent pas être recopiés partout. Le projet Decroche charge donc les chemins locaux autorisés listés dans `DECROCHE_ENV_FALLBACK_FILES`.

Cela évite :

- de dupliquer les clés ;
- d’exposer les valeurs ;
- de commiter accidentellement un secret.

## Commandes utiles

```bash
pnpm verify:env
pnpm keywords -- "assistant ia" "agence ia" "standard téléphonique ia"
```

## Google Ads Keyword Planner

Variables utilisées :

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_ADS_REFRESH_TOKEN`
- `GOOGLE_ADS_DEVELOPER_TOKEN`
- `GOOGLE_ADS_CUSTOMER_ID`
- `GOOGLE_ADS_MANAGER_CUSTOMER_ID` ou `GOOGLE_ADS_LOGIN_CUSTOMER_ID`
- `GOOGLE_ADS_LANGUAGE_CONSTANT`
- `GOOGLE_ADS_GEO_TARGET_CONSTANT`

Le chargeur accepte aussi les alias déjà présents dans l’env Hermes global :

- `GOOGLE_ADS_CLIENT_ID` -> `GOOGLE_CLIENT_ID`
- `GOOGLE_ADS_CLIENT_SECRET` -> `GOOGLE_CLIENT_SECRET`
- `GOOGLE_CLIENT_EMAIL` -> `GOOGLE_SERVICE_ACCOUNT_EMAIL`

Par défaut :

- API : `v22`
- langue : français `languageConstants/1002`
- zone : France `geoTargetConstants/2250`

## SEO / recherche

Variables utiles pour les recherches SEO et SERP :

- `SERPER_API_KEY`
- `FIRECRAWL_API_KEY`
- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_DISCOVERY_ENGINE_PROJECT_ID`
- `GOOGLE_DISCOVERY_ENGINE_PROJECT_NUMBER`
- `GOOGLE_DISCOVERY_ENGINE_LOCATION`
- `GOOGLE_DISCOVERY_ENGINE_COLLECTION`
- `GOOGLE_DISCOVERY_ENGINE_ID`
- `GOOGLE_DISCOVERY_ENGINE_SERVING_CONFIG`

## Composio

Variables attendues :

- `COMPOSIO_API_KEY`
- `COMPOSIO_MCP_URL`
- `COMPOSIO_ENTITY_ID=decroche`

Le script `verify:env` ne publie aucune donnée externe ; il vérifie présence et accessibilité basique.

## Règles

- Ne jamais afficher les valeurs de `.env.local`.
- Ne jamais commiter `.env.local`.
- Ne jamais coller une clé dans Telegram.
- Les actions Ads réelles restent interdites sans validation Bruno. La recherche Keyword Planner est lecture seule.
