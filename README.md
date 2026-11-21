# Oragonlabs — website

Next.js 16 (App Router) + Tailwind v4 + TypeScript.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Pages

| Route | What it is |
|---|---|
| `/` | **Home** — built to pass the 8-second test: what Oragon is, proof, the four things we do, why CPU matters, how to start, contact. Keep it short; long-form copy belongs on the pages below. |
| `/models` | **Oragon models** (coming soon) — CPU-first models, plus the open models the SDK runs today |
| `/labs` | **Labs** — the research arm, plus `EdgeAI` (how we do it). Light hero, so it reads as a distinct destination. |
| `/about` | `Mission` under the hero, the lab story, then `Problem` and `Pillars` right after the story, then the team, `Audiences` and `Azure` |
| `/products` | Research programmes, plus `WhatWeBuild` (industries) |
| `/sdk` | The Oragon SDK |
| `/investors` | Thesis, the round, use of funds, data room (hidden) |

Docs are not on this site: the menu's **Docs** link goes to the public docs on
the console (`DOCS_URL` in `lib/site.ts`, `sdk-app.oragonlabs.com/docs`).

## Components

| File | Role |
|---|---|
| `app/globals.css` | **The design system** — all tokens, blueprint grid, buttons |
| `lib/site.ts` | Origin resolution, sitemap routes, `pageMetadata()` |
| `components/Nav.tsx` | Fixed nav; transparent over hero → solid on scroll |
| `components/PageHero.tsx` | Shared hero for subpages |
| `components/Reveal.tsx` | Scroll-triggered fade-and-rise |
| `components/Brand.tsx` | The "Fault O" mark, wordmark and lockup — `Mark` / `Wordmark` / `Logo` |
| `components/Icons.tsx` | Six pillar icons + `Arrow` (inline SVG, original) |
| `components/sections/Hero.tsx` | Homepage hero |
| `components/sections/WhatWeDo.tsx` | Homepage: Models / SDK / Products / Labs cards |
| `components/sections/WhyCPU.tsx` | Homepage: why CPU matters — black band |
| `components/sections/HowItWorks.tsx` | Homepage: install → pick a model → build |
| `components/sections/Mission.tsx` | Mission band — /about, under the hero |
| `components/sections/Problem.tsx` | The problem — bone band, /about |
| `components/sections/Pillars.tsx` | Six pillars — 3×2 grid, /about |
| `components/sections/EdgeAI.tsx` | How we do it — black inversion band |
| `components/sections/WhatWeBuild.tsx` | Industries — alternating bands |
| `components/sections/Audiences.tsx` | Governments / businesses split |
| `components/sections/Contact.tsx` | Closing CTA — accepts `heading` / `body` overrides |
| `components/sections/Footer.tsx` | Global footer |

## Design system

Tokens live in `app/globals.css` — change them there, not in components.

- **Palette (brand book):** `#141414` Ink · `#ededeb` Paper (`bone`) · `#0e0f12`
  Night (`near-black`) · `#1a16e8` Signal. Supporting: `#515151` secondary ·
  `#75736c` grey · `#c7c7c7` dash. Signal is the one accent — reserved, not
  decorative; nothing in the site uses it yet.
- **Type:** Inter (variable, SIL OFL). `.display` for headings (−0.04em
  tracking), `.eyebrow` for uppercase labels (+0.5px). The wordmark's `labs`
  suffix needs weight 450, which is why the variable axis is loaded.
- **Motifs:** `.blueprint` draws the dashed gutter rules; `.bracket` adds L-shaped
  corner marks; `.rule-dashed` for dashed dividers.
- **Buttons:** `.btn` (square) and `.btn btn-pill` (pill); add `.btn-on-dark`
  over dark bands.

Section rhythm, following the reference — alternate, never repeat a tone back to
back: `dark hero → white → bone → white → black → white → split → black → bone footer`

⚠️ `.btn` sets `display: inline-flex` and is defined after Tailwind's import, so it
beats utilities like `hidden`. Wrap the button in a `<span>` to toggle visibility
(see `Nav.tsx`).

## ⚠️ Placeholders to fill before launch

Everything in `[square brackets]` is unresolved copy carried over from the brief's
open items (§10). Grep for `[` to find them all.

| Where | What's needed |
|---|---|
| `app/about/page.tsx` | Founders are filled in. Still open: **founded year, city/country, languages supported, hiring locations**. Portraits: drop files in `public/team/` and set each founder's `photo` to the path; `Portrait` already renders `next/image` when it's set. |
| `app/investors/page.tsx` | **Every figure is a placeholder** — stage, raise size, committed, instrument, use-of-funds percentages, traction counts. Also confirm the legal disclaimer wording with counsel: rules on publicly advertising a raise vary by jurisdiction. |
| `app/products/page.tsx` | Codenames and per-programme `Status` values. Link the data-handling policy in the governance section once written. |
| `sections/EdgeAI.tsx` | **The four spec-card figures are placeholders** (`[0.5B]`, `[$X]`, `[N]`). Replace with your own benchmark numbers or delete the card — don't ship invented figures. |
| `sections/WhatWeBuild.tsx` | **Confirm the three industries** — currently health / finance / government from the brief's example list. Also pricing model and support location. |
| `sections/Contact.tsx`, footer | `hello@oragonlabs.com` — swap for the real address |

## Deployment (Vercel)

Vercel runs `npm run build`; all routes are statically prerendered.

`vercel.json` pins `"framework": "nextjs"`. Don't delete it. Without it the
project falls back to whatever preset the dashboard holds, and if that is
"Other" the build succeeds and then the deploy fails with:

```
Error: No Output Directory named "public" found after the Build completed.
```

That error is about the *deploy* step, not the build — the Next.js preset reads
`.next`, the "Other" preset looks for a static `public/` and finds nothing.
Settings in `vercel.json` override the dashboard, so fixing it here is durable.

**Required env var** — set in Vercel → Settings → Environment Variables, for
Production *and* Preview (see `.env.example`):

```
NEXT_PUBLIC_SITE_URL=https://<real-domain>
```

It drives `metadataBase`, canonical links, OG URLs, `sitemap.xml` and
`robots.txt`. Without it the build falls back to the Vercel deployment URL, so
nothing breaks — the URLs are just not the canonical domain.

| File | Role |
|---|---|
| `lib/site.ts` | Origin resolution + the sitemap route list + `pageMetadata()` |
| `app/sitemap.ts` | `/sitemap.xml` |
| `app/robots.ts` | `/robots.txt` |
| `app/opengraph-image.tsx` | Generated 1200×630 share card — mark on Night |
| `app/icon.svg` | Favicon — compact mark in Signal |
| `app/apple-icon.tsx` | 180×180 apple-touch-icon — mark on Night |
| `next.config.ts` | Security headers, `poweredByHeader: false` |

## Not yet built

The brief implies these follow: field notes / technical blog (§9 — the strongest
proof channel), per-industry case studies, and a published data-handling &
sovereignty policy. No CMS yet — all copy is inline in the components.
