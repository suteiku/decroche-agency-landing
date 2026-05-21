# Pink Koï — pipeline renforcé pour closer

Statut : test interne uniquement. Ne pas envoyer au restaurant. Ne pas contacter. Ne pas réserver.

## Pages renforcées

- `/audit/pink-koi-assistant-vocal` : audit client-ready assistant vocal IA téléphonique.
- `/audit/pink-koi-test-interne` : audit premium orienté closing.
- `/audit/pink-koi-test-interne/print` : version print.
- `/lab/pink-koi` : cockpit complet avec DA, décisions UX, stack, RGPD, CRM mock, assistant vocal, QA et après closing.
- `/api/audit/pink-koi-test-interne` : payload JSON audit.
- `/api/pink-koi/qa` : QA assistant vocal + stack + garde-fous.

## Ce qui a été renforcé

### DA / animations

- Fond chaud Decroche conservé.
- Typographie éditoriale conservée.
- Accents noir/bleu conservés.
- Ajout de reveals doux sur cartes et sections.
- Ajout d’effets smooth : shimmer, scanline, grille légère, float.
- Réutilisation des animations existantes : sphère et vague canvas.
- Respect `prefers-reduced-motion`.

### Closing

La page ne se contente plus d’afficher un score. Elle pousse vers une conclusion commerciale :

```text
Le site est déjà premium
→ mais certaines demandes restent répétitives
→ on ne refait pas le site
→ on installe un assistant vocal privé contrôlé
→ l’équipe garde la décision finale
→ prototype 10 jours
```

### Après closing

Le cockpit montre maintenant quoi faire dès que le client dit oui :

1. Cadrer le flux unique.
2. Demander les données minimum.
3. Valider prix, horaires, groupes, allergènes, canal de transfert.
4. Construire l’assistant vocal privé.
5. Tester normal/sensible/attaque.
6. Go/No-Go.
7. Pilote supervisé.

### Stack

V1 volontairement sûre :

- Next.js App Router.
- Audit JSON typé.
- CRM Notion mock ou manuel.
- Assistant vocal privé sur numéro de test, non connecté aux actions sensibles.
- Pas de Zenchef, numéro officiel, email ou paiement automatisé au départ.

Après validation seulement :

- Notion API avec clé en `.env`.
- Fournisseur voix/LLM après vérification DPA/conditions.
- Tracking conforme.
- Connecteurs progressifs avec rollback.

### RGPD / légal / voix IA

Garde-fous visibles :

- finalité documentée ;
- minimisation ;
- pas de données sensibles inutiles ;
- pas de secrets en prompt/Git/Notion/Telegram ;
- logs filtrés ;
- droit de suppression/export ;
- revue humaine pour allergènes, plaintes, réservations, paiement/litige.

Important : ce n’est pas un avis juridique. Avant production réelle, valider le cadre client et, si nécessaire, avec un expert/partenaire qualifié.

## Décision produit

Pour closer, ne pas vendre “IA”. Vendre :

> Prototype appels entrants restaurant — 10 jours.

Promesse prudente :

> On teste un assistant vocal privé qui répond aux appels répétitifs et prépare un résumé exploitable par l’équipe, sans toucher aux actions sensibles.
