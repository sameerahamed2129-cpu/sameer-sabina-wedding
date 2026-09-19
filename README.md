# Sameer Weds Sabina — Luxury Wedding Invitation

A mobile-first React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React wedding invitation.

## Included

- Cinematic Taj Mahal hero using the supplied image at `public/tajmahal.png`
- Natural-scroll portal transition: zoom → split left/right → warm center glow
- Reduced-motion fallback
- Invitation blessing with crescent + star
- Interactive date reveal
- Haldi / Nikah / Walima cards
- Live countdown to Nikah
- Things to Know
- RSVP with validation and localStorage
- Wishes wall with localStorage
- Music-player component ready for a URL in `src/data/weddingData.ts`
- Semantic HTML, accessible labels, keyboard focus states
- Responsive mobile-first layout
- SEO/Open Graph metadata and favicon
- All wedding details centralized in `src/data/weddingData.ts`

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Deploy for WhatsApp sharing

After pushing this repository to GitHub, deploy it with GitHub Pages, Netlify, or Vercel. The resulting HTTPS URL can be shared directly in WhatsApp.

For GitHub Pages with a Vite project, configure the deployment base if your site is hosted under `https://USERNAME.github.io/REPOSITORY/`.

## Edit wedding details

Change only `src/data/weddingData.ts` for names, dates, venues and music URL.

The supplied Taj Mahal artwork is already wired into the hero as `/tajmahal.png`.
