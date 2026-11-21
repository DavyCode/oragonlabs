---
name: oragon-site-standard
description: The content, structure and design standard for the Oragonlabs website (oragonlabs.com) and the pages it shares a look with (the docs header in the Oragon console, oragon-app). Use before adding, removing, moving or rewording any page, section, card, headline, menu item, call to action or claim on the site, and before any visual change to the homepage, /models, /sdk, /about, /labs, /products or the console docs. Keeps every page on-message (what Oragon is, what it builds, what a visitor gets, what to do next) so the site does not drift out of scope.
---

# Oragonlabs site standard

Every change to the website must leave a first-time visitor able to answer,
within 8 seconds and without scrolling:

1. **What is Oragon?** An AI research lab: AI you own, instead of AI you rent.
2. **What does it build and offer?** Its own intelligent small language
   models (coming soon), the Oragon SDK that runs any model on your own
   hardware with no GPU needed, and products built on it.
3. **What do I do next?** Get the SDK, read the docs, or talk to us.

If a change does not serve one of those three, it belongs on a deeper page
(see *Where things live*) or not on the site at all. Say so before making it.

## The message (source of truth)

Use these facts as written. Do not invent new claims, numbers or products.

| Topic | What is true and approved |
|---|---|
| Positioning | "AI you own, instead of AI you rent." Private by design, owned rather than rented, sovereign wherever it runs. |
| Hero copy | Eyebrow "AI Research Lab"; headline "AI you own, instead of AI you rent."; the paragraph "Oragonlabs builds the infrastructure layer for private and personal AI…". Keep verbatim unless the user rewrites it. |
| Oragon models | **Intelligent small language models**, with thinking/reasoning and tool calling, built for CPUs, faster still on a GPU. Status: **coming soon**. |
| Never say | "large models", "large-model intelligence", "98–99% of large models" or any quality percentage vs other models. The user removed these. |
| Oragon SDK | `pip install oragon`. Runs **any open-source language model**, models you trained or fine-tuned yourself (`oragon import ./my-model.gguf`), and Oragon's own models. **No GPU needed for any model.** Data never leaves the machine. No API key. |
| Measured SDK numbers | 16 requests at once on CPU only; 6,000-request flood test, none dropped; 0.8s from start to first answer. Source: `lib/sdk.ts` `SDK_STATS`. Only these, unless the user supplies new measured figures. |
| In use | Shiga (business payments), Voiceit (live dictation and voice notes), Choredesk (oversight for AI-written software). |
| Live product | Voiceit, https://voiceit.oragonlabs.com/ (the hero card links there, new tab). |

A new number, customer, product or capability needs the user's source. If
there is none, ask; do not write a placeholder that reads as fact.

## Where things live (page roles)

The homepage says what Oragon is. Depth goes on the page that owns it.
Before adding content, find its owner here; do not duplicate a section on
two pages.

| Page | Owns |
|---|---|
| `/` Home | The 8-second answer only. Current order: **Hero** (with Voiceit card) → **InUse** (the measured numbers, a dashed rule, then the In use cards, one band) → **WhatWeDo** (Models, SDK, Products, Labs; one sentence each) → **WhyCPU** → **HowItWorks** (heading, then the `pip install oragon` line under it, three steps, Explore the SDK / Read the docs) → **Contact**. |
| `/models` | Oragon models (coming soon), what they do, "Any model" (open-source and your own models, with the import command in the *Your own models* card), the ready-to-download table, and a closing band "Coming soon · Oragon models / Be first to run Oragon models." |
| `/sdk` | The SDK in depth: install, code, features, platforms, stats. |
| `/about` | Mission (under the hero), the lab story, **The problem**, **What we stand for** (pillars), team, audiences, Azure. |
| `/labs` | Research, plus EdgeAI ("how we do it"). |
| `/products` | Programmes, plus WhatWeBuild (industries). |
| Docs | Live on the console (`DOCS_URL` = `sdk-app.oragonlabs.com/docs`), reached from the **Docs** menu item. Not a page on this site. |

Homepage limits: at most **6 sections**. A new homepage section must replace
one, not add a seventh. Mission, Problem, Pillars, Audiences and Azure stay
off the homepage unless the user says otherwise.

## Copy rules

- Headlines: about 10 words or fewer. Body: one or two short sentences.
- Plain words a non-engineer understands at a glance; detail goes behind a link.
- Every section has one job. If it needs a second paragraph, it probably
  belongs on a deeper page.
- Say "intelligent small language models", "no GPU needed", "runs on your
  own hardware". Use "Oragonlabs" for the company and "Oragon" for the
  SDK/models.
- Status words are honest: "Coming soon" for the models, "Available today"
  for what the SDK runs now, "Now live" for Voiceit.
- Calls to action, in priority order: Get the SDK (`/sdk`), Read the docs
  (`DocsLink`), Talk to us / Partner with us (`#contact`).

## Design rules

- Tokens live in `app/globals.css`; use them, never new hex values.
  Palette: Ink, Paper (`bone`), Night (`near-black`); Signal stays reserved.
- **Bands alternate tone**: never two sections of the same background back
  to back. Check the order of the whole page after any move.
- **Blueprint gutters** (`.blueprint`) must run unbroken through content
  that belongs together. Related content shares one section; separate parts
  with `.rule-dashed`, not a blank gap or a new band.
- Reuse what exists: `PageHero`, `Reveal`, `Contact` (`eyebrow`, `heading`,
  `body`), `InstallLine`, `CodeBlock`, `DocsLink`, `Logo`. New sections copy
  an existing section's container (`px-5 … md:px-12`, `max-w-[1180px]`).
- Card grids use `gap-px border border-line bg-line` and span the full
  content width. The user prefers full-width cards over narrowed ones.
- Copy buttons are the **copy icon** (tick once copied), never the word
  "Copy", on the website and in the console.
- Nav: Labs · Models · Products · SDK · Docs · About, then Sign in, Sign up,
  Partner with us. The full menu shows from `xl` (1280px); below that the
  menu button.

## The site and the console stay in step

The console (`../oragon-app`, served at `sdk-app.oragonlabs.com`) is a
separate repo but must look and link like part of the site.

- On `/docs`, the console shows the **website's header** (`renderSiteBar`,
  list `SITE_MENU` in `oragon-app/app.js`). If you change the website nav
  (`components/Nav.tsx` `LINKS`), change `SITE_MENU` the same way.
- The console's own header uses the **Oragonlabs lockup** (mark + wordmark),
  the same as `components/Brand.tsx`; signed out it shows Docs, Sign in,
  Create account.
- Every link to the docs goes through `DocsLink` (or `addFrom` in `Nav`) so
  the docs' "← Back to oragonlabs.com" returns to the page the reader left.
- Addresses: website → console `CONSOLE_URL` (`https://sdk-app.oragonlabs.com`,
  override `NEXT_PUBLIC_CONSOLE_URL`); console → website `SITE_URL`
  (`https://www.oragonlabs.com`, override `window.ORAGON_SITE_URL`). Never
  hardcode `localhost` or `127.0.0.1` in committed code.

## Scope guard

Stop and ask before:

- adding a seventh homepage section, a new top-level menu item, or a new page;
- putting long-form story (mission, problem, pillars, audiences) back on the homepage;
- any new claim, figure, customer or product the table above does not contain;
- changing the hero headline or paragraph;
- introducing a new colour, font, or component style instead of reusing one.

When asked for something off-message, say where it fits (a deeper page, the
docs, or nowhere) and offer that instead.

## Before you finish

1. Re-read the changed page top to bottom as a first-time visitor: does it
   still answer the three questions above, in that order of importance?
2. Check the band order still alternates and gutters are continuous.
3. Search the changed copy for banned phrases (`large model`, `98`, `99%`).
4. `npm run lint` and `npx tsc --noEmit` pass; `npm run build` for anything
   touching routes, metadata or `lib/site.ts`.
5. Look at it at 390, 1024, 1280 and 1440px wide: no horizontal scroll, the
   nav does not collide.
6. If the nav, docs links or brand changed, make the matching change in
   `oragon-app` and check `/docs` and `/login` there.
7. Keep `README.md` (pages table, components table) in step with what moved.
