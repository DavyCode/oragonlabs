# Oragonlabs — website

Next.js 16 (App Router) + Tailwind v4 + TypeScript.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Pages

| Route | What it is |
|---|---|
| `/` | **Home 1** — leads with sovereignty and emerging markets |
| `/home-2` | **Home 2** — A/B variant leading with the research-lab identity and sector breadth. Light hero, so the two are distinguishable at a glance. `noindex`ed. |
| `/about` | The lab story + founding team |
| `/products` | Six research programmes (none shipping — see the status banner) |
| `/investors` | Thesis, the round, use of funds, data room |

Both homepages share `Mission`, `Contact` and the global `Nav` / `Footer`, so
copy edits to those propagate to both variants.

## Components

| File | Role |
|---|---|
| `app/globals.css` | **The design system** — all tokens, blueprint grid, buttons |
| `lib/site.ts` | Origin resolution, sitemap routes, `pageMetadata()` |
| `components/Nav.tsx` | Fixed nav; transparent over hero → solid on scroll |
| `components/ActivationField.tsx` | Animated hero backdrop — a forward pass through model layers. `tone="light"` for light heroes. |
| `components/PageHero.tsx` | Shared hero for subpages |
| `components/Reveal.tsx` | Scroll-triggered fade-and-rise |
| `components/Icons.tsx` | Logo + six pillar icons (inline SVG, original) |
| `components/sections/Hero.tsx` | Home 1 hero |
| `components/sections/Mission.tsx` | Mission band — used by both homepages |
| `components/sections/Problem.tsx` | The problem — bone band |
| `components/sections/Pillars.tsx` | Six pillars — 3×2 grid |
| `components/sections/EdgeAI.tsx` | How we do it — black inversion band |
| `components/sections/WhatWeBuild.tsx` | Industries — alternating bands |
| `components/sections/Audiences.tsx` | Governments / businesses split |
| `components/sections/Contact.tsx` | Closing CTA — accepts `heading` / `body` overrides |
| `components/sections/Footer.tsx` | Global footer |

## Design system

Tokens live in `app/globals.css` — change them there, not in components.

- **Palette:** white · `#f0efea` bone · `#0a0a0a` near-black · `#171717` ink ·
  `#515151` secondary · `#c7c7c7` dash. No accent colour anywhere.
- **Type:** Rethink Sans at 400/500/600/700. `.display` for headings
  (−0.04em tracking), `.eyebrow` for uppercase labels (+0.5px).
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
| `app/about/page.tsx` | **Founder names, roles, bios, years of experience, focus tags** — plus city/country, founded year, languages. Portraits: drop files in `public/team/` and swap the `Portrait` placeholder for `next/image`. |
| `app/investors/page.tsx` | **Every figure is a placeholder** — stage, raise size, committed, instrument, use-of-funds percentages, traction counts. Also confirm the legal disclaimer wording with counsel: rules on publicly advertising a raise vary by jurisdiction. |
| `app/products/page.tsx` | Codenames and per-programme `Status` values. Link the data-handling policy in the governance section once written. |
| `sections/EdgeAI.tsx` | **The four spec-card figures are placeholders** (`[0.5B]`, `[$X]`, `[N]`). Replace with your own benchmark numbers or delete the card — don't ship invented figures. |
| `sections/WhatWeBuild.tsx` | **Confirm the three industries** — currently health / finance / government from the brief's example list. Also pricing model and support location. |
| `sections/Contact.tsx`, footer | `hello@oragonlabs.com` — swap for the real address |
| `app/favicon.ico` | Still the Create Next App default — replace with the Oragonlabs mark |

## Deployment (Vercel)

Zero-config: Vercel detects Next.js and runs `npm run build`. All routes are
statically prerendered.

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
| `app/robots.ts` | `/robots.txt` — disallows `/home-2` |
| `app/opengraph-image.tsx` | Generated 1200×630 share card |
| `next.config.ts` | Security headers, `poweredByHeader: false` |

`/home-2` is an A/B variant of `/`. It is `noindex`ed and excluded from the
sitemap so the two homepages don't compete as duplicate content — when a winner
is picked, fold it into `/` and delete the route.

## Not yet built

The brief implies these follow: field notes / technical blog (§9 — the strongest
proof channel), per-industry case studies, and a published data-handling &
sovereignty policy. No CMS yet — all copy is inline in the components.
# oragonlabs
