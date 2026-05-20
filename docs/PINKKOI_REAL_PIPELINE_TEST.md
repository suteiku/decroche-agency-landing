# Pink Koï — vrai test interne du pipeline Decroche

Statut : test interne uniquement. Ne pas envoyer au restaurant. Ne pas contacter. Ne pas réserver.

## Ce qui est maintenant implémenté dans le site Next.js

- `/audit/pink-koi-test-interne` : page audit premium, partageable en interne.
- `/audit/pink-koi-test-interne/print` : version print de l’audit.
- `/lab/pink-koi` : cockpit complet du test : data publique, CRM mock, assistant, QA, plan après closing.
- `/api/audit/pink-koi-test-interne` : payload JSON audit.
- `/api/pink-koi/qa` : résultat QA automatique de l’assistant prototype.

## Pipeline testé

```text
URL réelle Pink Koï
→ robots.txt + sitemap
→ pages publiques restaurant
→ extraction des faits utiles
→ audit JSON
→ page audit Next.js
→ fiche CRM Notion mock
→ simulateur assistant restaurant
→ QA scénarios normaux / sensibles / attaque
→ planning après closing
```

## Règles de sécurité

- Données publiques uniquement.
- Aucune action sur Zenchef.
- Aucun formulaire soumis.
- Aucun contact restaurant.
- Aucune réservation confirmée.
- Aucun prix, horaire, allergène ou remboursement inventé.
- Tout cas sensible va vers humain.

## Critère de réussite

Le test est considéré solide si :

- la page audit charge sans erreur ;
- l’API audit retourne le JSON ;
- l’API QA retourne 100% de scénarios passants ;
- le simulateur ne confirme jamais une réservation ;
- les allergies/plaintes/paiements vont vers humain ;
- les incertitudes deviennent des questions à demander après closing.
