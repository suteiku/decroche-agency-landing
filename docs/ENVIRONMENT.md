# Environnement Decroche Agency

Objectif : garder uniquement les variables demandées pour Decroche : Google Ads, Google AI Studio/Gemini et Vapi.

## Fichier local

- `.env.local` : fichier local ignoré par Git, non commitable.
- `.env.example` : modèle public avec placeholders uniquement.
- `scripts/verify-connections.mjs` : vérifie uniquement Google Ads/Gemini/Vapi sans afficher de secrets.

## Google AI Studio / Gemini

Variables :

- `GOOGLE_API_KEY`
- `GEMINI_API_KEY`

## Google Ads / Keyword Planner

Variables :

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_ADS_DEVELOPER_TOKEN`
- `GOOGLE_ADS_REFRESH_TOKEN`
- `GOOGLE_ADS_CUSTOMER_ID`
- `GOOGLE_ADS_MANAGER_CUSTOMER_ID` ou `GOOGLE_ADS_LOGIN_CUSTOMER_ID`
- `GOOGLE_ADS_API_VERSION`
- `GOOGLE_ADS_LANGUAGE_CONSTANT`
- `GOOGLE_ADS_GEO_TARGET_CONSTANT`
- `GOOGLE_ADS_KEYWORD_NETWORK`

Valeurs par défaut :

- API : `v22`
- langue : français `languageConstants/1002`
- zone : France `geoTargetConstants/2250`
- réseau : `GOOGLE_SEARCH_AND_PARTNERS`

## Vapi

Variables :

- `VAPI_BASE_URL=https://api.vapi.ai`
- `VAPI_API_KEY`
- `VAPI_ASSISTANT_ID`
- `NEXT_PUBLIC_VAPI_PUBLIC_KEY`
- `NEXT_PUBLIC_VAPI_ASSISTANT_ID`
- `VAPI_PHONE_NUMBER_ID`

## Commandes utiles

```bash
pnpm verify:env
pnpm keywords -- "assistant vocal ia"
```

## Règles

- Ne jamais afficher les valeurs de `.env.local`.
- Ne jamais commiter `.env.local`.
- Ne jamais coller une clé dans Telegram/GitHub/chat.
- Aucune action Google Ads réelle sans validation Bruno ; la recherche Keyword Planner reste en lecture seule.
