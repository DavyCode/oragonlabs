# Placeholders to fill

Every `[square bracket]` in the site's visible copy, with the sentence it sits
in so you can see how your answer will read.

**How to use this:** write your answer after `FILL:` on each line. Leave `FILL:`
blank for anything you don't have yet and I'll leave that placeholder alone.
When you're done, hand this file back and I'll replace each one at its source.

Named it `PLACEHOLDERS.md` rather than `README.md` so it doesn't collide with
the existing project README.

---

## A · About page — ✅ ANSWERED, strip currently hidden

All three values are confirmed:

- **A1 Founded** → 2025
- **A2 Based in** → Lagos, Nigeria
- **A3 Languages supported** → English, Yoruba, Hausa, Igbo

The hero meta strip that displayed them is **hidden for now** by request. The
values are preserved in a comment at `app/about/page.tsx`, directly under the
`lede` prop — restore the strip by passing that array back to `meta`.
`PageHero` renders nothing when the prop is omitted, so there is no empty
container left behind.

**A4 Hiring locations** — ✅ RESOLVED without naming a place. The line was
reworded to "we're looking for research and deployment engineers", so the live
`[locations]` bracket is gone. Say the word and it becomes "…engineers in
Lagos" once the location is public.

Note: A2's second use ("We build from [location] … it's our address") no longer
exists in the page; that copy was removed at some earlier point.

The About page now contains **no placeholder brackets at all**.

---

## B · Products page

Six research programmes. Each needs a codename and a status.

### B1 · Codenames
**Where:** `app/products/page.tsx` — one per programme, shown above each title

| # | Programme | FILL |
|---|---|---|
| 01 | Intelligent video systems | |
| 02 | Assistive technology | |
| 03 | Identity & civil registration | |
| 04 | Defence & public safety | |
| 05 | Clinical decision support | |
| 06 | Financial integrity | |

### B2 · Status per programme
**Where:** `app/products/page.tsx` — last row of each spec table
**Reads as:** Status · **[research direction]**

Suggested vocabulary, so the six read as one scale:
`Research direction` → `Prototype` → `Pilot` → `Deployed`

| # | Programme | FILL |
|---|---|---|
| 01 | Intelligent video systems | |
| 02 | Assistive technology | |
| 03 | Identity & civil registration | |
| 04 | Defence & public safety | |
| 05 | Clinical decision support | |
| 06 | Financial integrity | |

### B3 · Local languages (assistive technology only)
**Where:** `app/products/page.tsx:44` — assistive technology spec table
**Reads as:** Languages · **[local languages: confirm]**

FILL:

---

## C · Investors page

⚠️ Every figure on this page is a representation to investors. Publicly
advertising a raise is regulated differently by jurisdiction, and "committed" in
particular is a claim with legal weight. Worth counsel's eye on the disclaimer
whatever goes in here.

### C1 · Stage — ✅ DONE
Pre-seed

### C2 · Raising — ⚠️ CHANGED to match the deck
**$250,000** (was $300,000). The deck sizes it for 18 months.

### C3 · Committed — ✅ RESOLVED
Row removed from the page. Add it back once there's a first cheque.

### C4 · Instrument — ⚠️ CHANGED to match the deck
Now reads "Discussed live". The deck deliberately does not state an instrument
publicly; the site previously did.

### C5 · Use of funds — four percentages
**Where:** `app/investors/page.tsx:47-50`
**Reads as:**
- Research — **[%]** for efficient models, on-device inference, local-language work
- Deployment engineering — **[%]** for reference architectures and pilot delivery
- Go-to-market — **[%]** for government and enterprise partnerships in [markets]
- Operations — **[%]** for [runway in months]

⚠️ SUPERSEDED by the pre-seed deck, which splits it differently:
**50% engineering and research · 30% pilot deployments · 20% operations and
go-to-market.** The deck's split is now live on the page.

### C6 · Runway in months — ✅ DONE (from the pre-seed deck)
18 months. Applied to the round table and the data-room list.

### C7 · Target markets — ✅ DONE
Sectors, in all three places: government, finance, healthcare, robotics.
No geography named anywhere on the page.

✅ RESOLVED — robotics is dropped. It appears nowhere in the pre-seed deck,
which commits to three verticals. Removed from both places on the page.

### C8 · Pilots in discussion — ✅ DONE
3

### C9 · Institutional partners — ✅ DONE
2

### C10 · Team — ⚠️ STILL OPEN
Now reads "ML engineers, AI researchers & full-stack developers".

The other three cells in that row are counts, so a description here reads as an
answer to a different question. If you want a number, say it and I'll swap.

---

## D · Homepage spec card (EdgeAI band) — ✅ DONE (from the pre-seed deck)

All three placeholders are filled with figures the deck states were measured on
your own hardware, not estimated.

- **D1 Model size** → `0.5B parameters`
- **D3 Throughput** → `~151 tokens / sec, M4 laptop`
- **D2 Hardware cost** → row **replaced**. The deck gives no $/unit figure, but
  gives something stronger: no GPU at all. The slot now reads
  `Concurrent requests · 16 · one laptop, no GPU`, from the deck's engineering
  proof slide.

The card's closing line now reads "Every figure was measured on our own
machines, and nothing is rounded up," echoing the deck's own caveat.

The deck's fuller hardware table (0.5B/151, 1.5B/66, 4B/27, 70B+ "not our
market", plus the memory-bandwidth reasoning) is **not yet on the site** and is
a strong candidate for its own section.

## E · Site-wide

### E1 · Contact email
**Where:** 6 places — `sections/Contact.tsx`, `sections/Footer.tsx`,
`app/about/page.tsx`, `app/investors/page.tsx` (×2)
**Currently:** `hello@oragonlabs.com`

Note: the footer has a comment explaining that this address is one unbreakable
157px word and affects the layout. A much longer address may need a look.

✅ CONFIRMED by the deck's contact slide — `hello@oragonlabs.com` is correct and
unchanged. (`david@oragonlabs.com` also exists but is not used on the site.)

### E2 · Confirm the three industries
**Where:** `components/sections/WhatWeBuild.tsx`
**Currently:** Healthcare · Financial services · Government services

✅ CONFIRMED by the deck. It commits to exactly three verticals — banks,
hospitals and ministries — which map onto the site's existing Financial
services · Healthcare · Government services. No change needed.

### E3 · Labs page holding note
**Where:** `app/labs/page.tsx:219`
**Reads as:** "[Field notes and benchmarks are not published yet. This is where
they will live. See §9 of the positioning brief.]"

✅ DONE — replaced. Its premise ("benchmarks are not published yet") stopped
being true once the deck's measured figures went onto the homepage. It now
points readers at those benchmarks instead.

---

## Not in this list

Tracked elsewhere, no bracket to fill:

- **Portraits** — both are in and wired up.
- **`NEXT_PUBLIC_SITE_URL`** — a Vercel env var, not copy. See the README.
- **Investor legal disclaimer** — wording exists; it needs counsel, not a value.
- **Data-handling & sovereignty policy** — referenced by the products page
  governance section but not yet written. A document, not a field.
