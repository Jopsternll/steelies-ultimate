# Project: [Naam van je Website]

## Overzicht
[Korte beschrijving van de website, bijv.: Een moderne portfolio website gebouwd met Next.js en Tailwind CSS.]

## Tech Stack
- **Framework:** Next.js (App Router)
- **Taal:** TypeScript
- **Styling:** Tailwind CSS
- **CMS/Database:** [Bijv. Sanity / Supabase / Geen]

## Code Stijl & Regels
- Gebruik TypeScript voor alle componenten.
- **Styling:** Gebruik alleen Tailwind utility classes. Geen inline CSS of externe CSS-bestanden tenzij strikt noodzakelijk.
- **Componenten:** Maak componenten in `/components`, pagina's in `/app`.
- **Functioneel:** Geef de voorkeur aan functionele componenten en hooks.
- **Reusability:** Maak herbruikbare componenten voor knoppen, kaarten, en lay-out elementen.

## Workflow & Commando's
- **Start dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`

## Belangrijke Instructies
- Focus op responsive design (mobile-first).
- Zorg voor toegankelijkheid (ARIA labels, semantische HTML).
- Optimaliseer afbeeldingen (gebruik `next/image`).
- **Voor UI-wijzigingen:** Beschrijf de wijziging en zorg dat de Tailwind-klassen consistent blijven met het bestaande kleurenpalet: `[Vul hier je primaire kleuren in]`.
- **Verificatie:** Voer na wijzigingen altijd `npm run lint` uit om te controleren op TypeScript-fouten.

## Bestandslocaties
- Componenten: `/components`
- Pagina's: `/app`
- Assets (afbeeldingen): `/public`
- Stijlen: `/app/globals.css`
