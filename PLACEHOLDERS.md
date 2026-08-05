# Placeholders to fill

Every `[square bracket]` in the site's visible copy, with the sentence it sits
in so you can see how your answer will read.

**How to use this:** write your answer after `FILL:` on each line. Leave `FILL:`
blank for anything you don't have yet and I'll leave that placeholder alone.
When you're done, hand this file back and I'll replace each one at its source.

Named it `PLACEHOLDERS.md` rather than `README.md` so it doesn't collide with
the existing project README.

---

## A · About page

### A1 · Founded year
**Where:** `app/about/page.tsx:109` — hero meta strip
**Reads as:** Founded · **[year]**

FILL:

### A2 · City and country
**Where:** `app/about/page.tsx:110` and `:147` — hero meta strip, and again in the body
**Reads as:** Based in · **[city, country]**
**And:** "We build from **[location]** because proximity isn't just one of our values. It's our address."
*(One answer covers both. Say if the second should be shorter, e.g. city only.)*

FILL:

### A3 · Languages supported
**Where:** `app/about/page.tsx:111` — hero meta strip
**Reads as:** Languages supported · **[list]**

FILL:

### A4 · Hiring locations
**Where:** `app/about/page.tsx:241`
**Reads as:** "Hiring: we're looking for research and deployment engineers in **[locations]**."

FILL:

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

### C2 · Raising — ✅ DONE
$300,000

### C3 · Committed — ✅ RESOLVED
Row removed from the page. Add it back once there's a first cheque.

### C4 · Instrument — ✅ DONE
SAFE / equity

### C5 · Use of funds — four percentages
**Where:** `app/investors/page.tsx:47-50`
**Reads as:**
- Research — **[%]** for efficient models, on-device inference, local-language work
- Deployment engineering — **[%]** for reference architectures and pilot delivery
- Go-to-market — **[%]** for government and enterprise partnerships in [markets]
- Operations — **[%]** for [runway in months]

✅ DONE — research 20% · deployment engineering 40% · go-to-market 20% ·
operations 20%

### C6 · Runway in months
**Where:** `app/investors/page.tsx:50` and `:214`
**Reads as:** "Operations — [%] for **[runway in months]**"
**And:** data room list — "Financial model and **[runway]** plan"

FILL:

### C7 · Target markets — ✅ DONE
Sectors, in all three places: government, finance, healthcare, robotics.
No geography named anywhere on the page.

Note: robotics is named here but has no programme on `/products` and no band in
`sections/WhatWeBuild.tsx`. Worth adding one, or dropping it from this list.

### C8 · Pilots in discussion — ✅ DONE
3

### C9 · Institutional partners — ✅ DONE
2

### C10 · Team — ⚠️ PARTIAL
Currently reads "ML engineers & AI researchers".

The other three cells in that row are counts, so a description here reads as an
answer to a different question. If you want a number, say it and I'll swap.

---

## D · Homepage spec card (EdgeAI band)

⚠️ These are benchmark figures. They must come from a measurement you actually
ran, not an estimate — they're the most technically scrutinised numbers on the
site. The fourth value ("Data sent off-device · 0 bytes") is already real
because it's an architectural fact, not a measurement.

**If you haven't benchmarked yet, answer `DELETE` to D1 and I'll remove the
whole card.** An empty proof section is better than an invented one.

### D1 · Model size
**Where:** `components/sections/EdgeAI.tsx:24`
**Reads as:** Model size · **[0.5B]** parameters

FILL:

### D2 · Hardware cost
**Where:** `components/sections/EdgeAI.tsx:25`
**Reads as:** Hardware cost · **[$X]** per unit

FILL:

### D3 · Throughput
**Where:** `components/sections/EdgeAI.tsx:26`
**Reads as:** Throughput · **[N]** tokens / sec

FILL:

---

## E · Site-wide

### E1 · Contact email
**Where:** 6 places — `sections/Contact.tsx`, `sections/Footer.tsx`,
`app/about/page.tsx`, `app/investors/page.tsx` (×2)
**Currently:** `hello@oragonlabs.com`

Note: the footer has a comment explaining that this address is one unbreakable
157px word and affects the layout. A much longer address may need a look.

FILL:

### E2 · Confirm the three industries
**Where:** `components/sections/WhatWeBuild.tsx`
**Currently:** Healthcare · Financial services · Government services

Carried over from the positioning brief's example list, never confirmed. Answer
`CONFIRMED` or give three replacements.

FILL:

### E3 · Labs page holding note
**Where:** `app/labs/page.tsx:219`
**Reads as:** "[Field notes and benchmarks are not published yet. This is where
they will live. See §9 of the positioning brief.]"

This is a note to yourselves, visible to visitors. Answer `DELETE` to remove it,
`KEEP` to leave it until the first field note ships, or write replacement copy.

FILL:

---

## Not in this list

Tracked elsewhere, no bracket to fill:

- **Portraits** — both are in and wired up.
- **`NEXT_PUBLIC_SITE_URL`** — a Vercel env var, not copy. See the README.
- **Investor legal disclaimer** — wording exists; it needs counsel, not a value.
- **Data-handling & sovereignty policy** — referenced by the products page
  governance section but not yet written. A document, not a field.
