# Proposed — Re-audit vs. Current & Competitor

**Date:** 2026-10-29 · **Branch:** `feat/proposed-redesign` · **Scope:** `Proposed/` benchmarked against `Current/` (live site mirror) and `Competitor/` (Venus Polythread).

Every finding below was read out of source or measured against the build; the numbers are reproducible, not estimates. Findings that an adversarial verification pass judged overstated have had their severity corrected here rather than carried forward at the original rating.

---

## Scorecard

| Dimension | Proposed | Current | Competitor | Verdict |
|---|---|---|---|---|
| Product pages with own URL | 1 (`/products`, tabbed) | 3 (`ppmf`, `nwf`, `bct`) | 7 detail pages | **Proposed loses** |
| Per-page title/description | 1 for all 4 routes | 9 distinct | yes | **Proposed loses** |
| Working enquiry form | 3 forms, all fake | real POST | real POST + CSRF + honeypot | **Proposed loses** |
| Application photography | 35 on disk, 0 rendered | 35 rendered | 7 product galleries | **Proposed loses** |
| Languages | EN only | EN / DE / ES | EN | **Proposed loses** |
| Quality page | none (footer link misroutes) | full page | quality-commit | **Proposed loses** |
| Events / trade-show proof | none | full page + gallery | none | **Proposed loses** |
| Denier range stated | 200–6,000 D | not stated | 250–3,600 D | **Proposed wins** |
| Founding claim | Est. 2000, first in India | Est. 2000 | "15+ years" | **Proposed wins** |
| Brand trademarks | THREADLON® / TUFF® / DPL® | yes | none | **Proposed wins** |
| Colour range | 50+ dope-dyed shades | not stated | not stated | **Proposed wins** |
| Mobile/responsive | fully responsive | 2015 fixed-width tables | responsive | **Proposed wins** |
| Visual design | modern, cohesive | dated | templated | **Proposed wins** |

---

## P0 — Ship blockers (correctness & honesty)

### 1. All three enquiry forms fake success; nothing is transmitted
`ContactPage.tsx:50-54` · `HeroSection.tsx:127-130` · `QuickContactBar.tsx:15-18`

No `fetch`, no endpoint, no `action` attribute anywhere in the project. The contact form literally says `// Simulate server transmission for the prototype` and then, on success, tells the buyer their request *"has been logged in this prototype session"* — while three other places on the same site promise **"Response within 4 business hours."** Every lead is discarded.

**vs both:** Current and Competitor both POST to a real endpoint (Competitor adds CSRF `_token` + honeypot).
**Fix:** one shared submit function to a serverless endpoint / CRM / Formspree; show success only on 2xx; add a real error state; delete every "prototype" string. **M.**

### 2. Product lines have no unique URLs — 2 of 3 cannot be indexed, linked, or shared
`App.tsx:13-17` · `ProductsPage.tsx:10,93-119,125`

Three product families live behind `useState('ppmf-yarn')` with `<button>` tabs. Only the selected panel is ever in the DOM. The `slug` field exists in `data/products.ts:7,59,105` and in `types/index.ts:14` — and is read by nothing.

Consequences: a salesperson cannot email "the 3000D spec"; Google can index only PPMF; the other two lines are invisible.

**vs Current:** Current ships three separately-titled pages (`Polypropylene multifilament yarn manufacturer in India`, `PP Narrow woven fabric manufacturer…`, `PP bag closing thread manufacturer…`). **vs Competitor:** seven product detail pages.
**Fix:** add `/products/:slug`, render the tab bar as `<Link>`s, use `product.slug`. **M.**

### 3. "Download Data Sheet (PDF)" produces no PDF
`ProductsPage.tsx:38-44` → `window.print()` after 800 ms. Button label at `:222`.

There is no PDF in the project (`find -iname '*.pdf'` → 0), no `@media print` rule in `index.css`, and no `@page`. Clicking it prints the whole SPA — sticky header, tab bar, floating RFQ widget, footer.

**vs Competitor:** ships a gated catalogue that actually downloads.
**Fix:** real per-product PDFs under `public/`, button becomes `<a href download>`; or a print route with `@media print` that hides chrome. **M.**

### 4. The mobile drawer's primary CTA never closes the drawer
`SiteHeader.tsx:137-143` passes `onClick={() => setMobileMenuOpen(false)}` to `<Button to="/contact">`. `Button.tsx:52-58` renders the `<Link>` branch **without spreading `...props`**, so the handler is silently dropped. Navigate → drawer stays open over the contact page. Only 1 of 17 `<Button to=…>` usages is affected, but it is the highest-intent mobile control.

**Fix:** spread `{...props}` on the `<Link>` branch, or make `to`/`onClick` mutually explicit. **S.**

### 5. 404 silently teleports to the homepage, and no legacy URL survives
`App.tsx:17` — `<Route path="*" element={<Navigate to="/" replace />} />`; `public/.htaccess:4-8` rewrites everything to `index.html` with HTTP 200.

Every URL Google and buyers already know — `/en/ppmf.html`, `/en/nwf.html`, `/en/bct.html`, `/en/quality.html`, `/en/events.html`, `/en/infrastructure.html` — becomes a **soft 404**: HTTP 200, then a client redirect to `/`. That is how you lose a decade of search equity in a single deploy.

**Fix:** real `NotFound` route inside `Layout`; explicit `301` rules in `.htaccess` mapping each legacy URL to its new counterpart. **S.**

### 6. No error boundary — one render throw blanks the entire site
Zero matches for `ErrorBoundary` / `componentDidCatch` / `errorElement` in `src/`. React 19 unmounts the whole root on an uncaught render error, so a visitor gets a white page with no header, no phone number, no email.

**Fix:** top-level boundary rendering `Layout` + a "something went wrong" panel carrying the real phone/email. **S.**

---

## P1 — Commercial gaps (biggest delta vs. both references)

### 7. 35 application photos ship on disk and render nowhere
`ProductsPage.tsx:257-283` renders numbered text badges; `app.image` is never read. All 35 paths in `data/products.ts` exist on disk (1.46 MB) and all 35 correspond 1:1 with Current's captioned application tiles (PPMF 14, NWF 12, BCT 9).

This is the single largest content regression. Current's most persuasive sales asset — a captioned photo per use-case (FIBC bags, fishing nets, geotextile, ropes, safety belts, upholstery…) — is replaced by boilerplate text cards reading "Engineered technical conversion grade."

**Fix:** render `<img src={app.image}>` in the existing 3-up grid with the name as caption. The data and the images are already there — this is a rendering change, not a content project. **S–M.**

### 8. Empty `#root` — no prerendering, no crawlable HTML
`dist/index.html` is 1,100 bytes; its body is `<div id="root"></div>`. Googlebot renders the SPA, but LinkedIn, WhatsApp, Slack, email preview bots and most AI crawlers do not — they see a blank page. For an exporter whose buyers discover suppliers through shared links, this is the difference between a preview card and a bare URL.

**Fix:** prerender step (`vite-plugin-prerender` / `react-snap`) so each route emits real HTML. **L.**

### 9. One title tag and one description for all four routes
`index.html:7-8` is the only head. No `document.title`, no Helmet, no canonical, no `og:*`, no `twitter:*`.

**vs Current:** nine distinct, keyword-led titles. **vs Competitor:** ships `og:type/title/description/image/url/site_name` + canonical + two JSON-LD blocks.
**Fix:** small `useDocumentMeta` hook driven by a per-route config; add OG/Twitter/canonical; add Organization + two LocalBusiness nodes from `company.ts:95-121`. **S–M.**

### 10. The meta description advertises a product line Daman does not make
`index.html:8` promises "spunbond non-woven fabrics." Grep of all of `src` for `non.?woven|spunbond` → nothing. Current's mirror (EN + DE, all HTML) → nothing. The real third line is Narrow Woven Fabrics & Webbings.

**Fix:** rewrite title (currently 73 chars, also over the ~60 display budget) and description to the three real lines. **S.**

### 11. Missing pages that Current already ranks with
| Page | Current | Proposed |
|---|---|---|
| Quality (`quality.html` — Assurance & Control / Testing / Precise Packaging) | yes | **none** — and the footer's "Quality Control Lab" link (`SiteFooter.tsx:124`) points at `/about`, which has no quality content |
| Events (`events.html` — Techtextil Russia 2017/2018, Colombiatex 2017/2018, Techtextil Germany 2017, plus media coverage) | yes | **none** |
| Careers (`jobs@damanpolythread.com`) | yes | **none** — footer "Career Opportunities" (`:130`) lands on an RFQ form |
| Infrastructure (`infrastructure.html` — 21 unique photos, 4 category filters, lightbox) | yes | 8 static, unclickable tiles on `/about` |

**Fix:** add `/quality` (highest priority — quality is a first-order buying criterion for industrial yarn); add `/events` reusing Current's exhibition photography; either add `/careers` or drop the footer link. **M each.**

### 12. German and Spanish locales dropped
Current exposes an EN/DE/ES switcher in the masthead of every page, linking to live `/de/` and `/es/` trees. Proposed is English-only with no language affordance and no `hreflang`.

**Fix:** minimum — keep the switcher wired to the live `/de/` and `/es/` URLs and add `hreflang`; ideally route-level i18n before launch. **M–L.**

### 13. Competitor features that convert and are simply absent
| Feature | Competitor | Proposed | Impact |
|---|---|---|---|
| Google Maps + directions | 2 embeds on contact | none (and About labels a section "Map" that has no map, `AboutPage.tsx:203`) | A buyer verifying the plant cannot find it |
| Business hours | listed | only "Continuous Manufacturing Operations (3 Shifts)" | Cannot tell when the office answers |
| Testimonials | 3 attributed quotes with deniers | none | No third-party proof |
| Filterable gallery + lightbox | yes | none (8 static tiles) | Facility credibility |
| Per-line capacity breakdown | 4 cards: 2,400 / 300 / 700 / 1,400 MT | `company.ts:29-45` defines it, **no component renders it** | Auditable capacity |

**Fix:** render the existing `capacities` array; add map embeds + hours table to `/contact`; collect real permissioned quotes (omit rather than invent). **S–M each.**

### 14. Product context is dropped between product page and RFQ
`ProductsPage.tsx:205` "Request Sample Spool / RFQ" → bare `/contact`. `ContactPage.tsx:9-10` *does* read `?product=` and seed the select — but grep for `?product=` across `src` returns zero hits, so the param is never supplied and every buyer lands on PPMF regardless of what they were reading. WhatsApp sends one hardcoded generic message.

**Fix:** pass `?product=<id>` from every product CTA and showcase tab; generate per-product WhatsApp text. **S.**

---

## P2 — Accessibility (WCAG 2.2 AA)

Measured failures, not heuristics:

| # | Issue | Evidence | Fix |
|---|---|---|---|
| 15 | **Gold accent `#D9A441` used as text on light backgrounds** | 2.25:1 on white, 2.06:1 on base, 1.93:1 on `accent/20` — AA needs 4.5:1. 128 `text-accent` usages; `ManufacturingProcess.tsx:157` fails even the 3:1 large-text floor | Add `--color-accent-ink: #8A6414` (5.37:1 on white, 4.91:1 on base) for text; keep `accent` for fills |
| 16 | **17 of 18 labels unassociated** | 18 `<label>`, 1 `htmlFor` (`HeroSection.tsx:366`) | Add `id`/`htmlFor` pairs; namespace where a form appears twice |
| 17 | **Zero `aria-live` / `role=status` / `role=alert`** | Form success and error blocks are silent; `ContactPage.tsx:144-149` renders the error above the form while focus stays on the submit button | `role="status" aria-live="polite"` on success, `role="alert"` on error |
| 18 | **RFQ modal is not a dialog** | `QuickContactBar.tsx:56-183` — no `role="dialog"`, no `aria-modal`, no Escape, no focus trap, no focus restore, no scroll lock | Full dialog wiring; it is the primary conversion path on every route |
| 19 | **No skip link** | Zero matches for "skip"; `<main>` has no `id` | Visually-hidden-until-focused link + `id="main-content" tabIndex={-1}` |
| 20 | **No global `:focus-visible`** | `index.css` has no focus rule; only `Button.tsx` has a system; 22 `focus:outline-none` instances; carousel dots have no visible focus at all | One `@layer base` rule |
| 21 | **`prefers-reduced-motion` never honoured** | 14 s infinite Ken Burns + 1 s crossfade + autoplay every 7 s + `scroll-behavior: smooth` | Add the media block; pause animation on reduce |
| 22 | **Heading hierarchy skips levels** | Contact has **no `h2` at all**; `ManufacturingProcess.tsx:132` nests `<h4>` inside `<button>` (invalid HTML); Home jumps h1→h3 | Normalise; Contact gets section headings |
| 23 | **Tabs/steppers/carousel lack semantics** | No `role="tablist"`/`tab`/`aria-selected`, no arrow keys, dots ~14 px tall (below the 24 px WCAG 2.2 minimum) | APG tabs pattern; enlarge dot hit areas |
| 24 | **Contact required fields not programmatic** | `required` appears only in the hero and modal, never on ContactPage's 8 controls; no `aria-invalid`/`aria-describedby` | Add `required` + `aria-required`; tie errors to fields |

*Correction from verification: the asterisk markers are real characters, not colour-only, and several "ringless" controls do have `focus:border-accent` replacements — so items 20 and 24 are narrower than first reported, but both remain real.*

---

## P3 — Performance (measured on the built `dist/`)

| Metric | Value | Budget |
|---|---|---|
| LCP, mobile Slow 4G | **6.6–9.5 s** | 2.5 s |
| JS bundle | 389 KB raw / 111 KB gzip, **one chunk** | split by route |
| Hero image payload | 938,939 B — all 6 banners fetched at first paint | 1 image, ~80 KB |
| Images with `srcset` | **0 of 96** | all |
| Images with `width`/`height` | 0 of 25 | all |
| Mobile first load | 1.72 MB of images | — |
| Public tree never reaching a pixel | **2.25 MB orphans + 1.46 MB unrendered app photos = 3.71 MB of 6.61 MB (56%)** | — |

**Specific defects:**
- **25.** `loading="lazy"` on slides 2-6 does nothing — all six are absolutely positioned inside the viewport, so all six load immediately (`HeroSection.tsx:150-157`). LCP image requested at priority LOWEST and discovered 1,035 ms after CSS, because React creates it rather than the HTML.
- **26.** Zero `React.lazy`/`Suspense` — every visitor pays for all four pages.
- **27.** `bg-fixed` parallax at 4 sites downloads 2,896 px / ~270 KB JPEGs to phones and is **broken on iOS Safari** (which ignores `background-attachment: fixed`).
- **28.** No WebP/AVIF anywhere — 78 JPEG + 18 PNG, zero next-gen. The 9 spool PNGs alone are ~1.1 MB.
- **29.** Render-blocking third-party Google Fonts with no preload; weight mismatches force faux bold.
- **30.** Carousel keeps ticking while the tab is hidden (no `visibilitychange` guard).
- **31.** `.htaccess` has no `mod_deflate`/`mod_brotli` and no cache headers for hashed assets.

**Highest-leverage fixes, in order:** preload + `fetchpriority="high"` on slide 1 (fixes LCP alone) → route-level `React.lazy` → WebP conversion of the 9 spool PNGs → drop `bg-fixed` under `(hover: none)` → self-host fonts.

---

## P4 — Data integrity & code hygiene

- **32. Spec drift across three sources.** Cone sizes: `products.ts:72` says "200g up to 5kg jumbo cones"; `InteractiveProductShowcase.tsx:87` says "200g, 1kg, 2kg, 4kg"; `ManufacturingProcess.tsx` says "200g to 4kg". One buyer reading two pages sees two different specs. Derive the showcase and timeline from `products.ts` — it is already the source of truth.
- **33. Capacity figures need a qualifier.** `CapabilitiesSection.tsx:71` "12,000 MT Combined Capacity" is arithmetically correct (10,000 yarn + 2,000 webbing) but sits beside header/footer/site-wide "10,000 MT Annual Capacity" with no label saying which product it covers. Add "Yarn" / "Combined". *(Verification corrected this from "contradiction" to "clarity" — the numbers reconcile.)*
- **34. Dead components.** `ProductCard.tsx` (96 lines) and `ProductGrid.tsx` (65 lines) are imported by nothing; `ProductCard.tsx:74` links to `/products#${id}`, an anchor that does not exist.
- **35. Tests prove nothing.** `products.test.ts` has 6 `it` blocks asserting literal strings from the same file it imports. It would pass unchanged with every defect in this report present. No jsdom, no `@testing-library/react`.
- **36. `tsconfig.app.json` has no `strict`.** `noUnusedLocals` is on but `strict` is absent from all three tsconfigs.
- **37. No `robots.txt` / `sitemap.xml`** and no JSON-LD. Low effort, standard launch hygiene.

---

## Where Proposed already beats both references

Worth protecting in any refactor:

1. **200–6,000 Denier** stated explicitly vs Competitor's 250–3,600 D — a materially broader range.
2. **"Est. 2000 · First in India"** — a verifiable pioneer claim against Competitor's vague "15+ years."
3. **Registered trademarks** THREADLON®, TUFF®, DPL® surfaced throughout — neither reference uses this as a trust device as consistently.
4. **50+ dope-dyed shades** — a concrete, checkable differentiator neither reference states.
5. **Real technical spec tables** (tenacity in g/denier, TPM, elongation) — Current buries this; Competitor states denier only.
6. **Genuinely responsive** — Current is a 2015 fixed-width build; Proposed works on phones.
7. **Modern, coherent visual identity** — the redesign is a real aesthetic upgrade over both.
8. **Clean React/TS/Tailwind foundation** — the architecture is sound; the gaps above are mostly *unfinished* work, not wrong work.

---

## Suggested order of work

| Phase | Items | Why now |
|---|---|---|
| **1. Stop lying** | 1, 3, 10, 33 | Nothing else matters if a buyer's enquiry evaporates or the site misdescribes the product |
| **2. Restore what was lost** | 7, 11 (quality first), 14 | Cheapest wins: the images and data already exist |
| **3. Be findable** | 2, 5, 8, 9 | Product URLs + 301s + per-route meta; protects existing search equity |
| **4. Be fast** | P3 items 25→29 | LCP alone is the single biggest UX fix |
| **5. Be accessible** | 15–24 | Mostly mechanical; contrast + labels + aria-live cover the bulk |
| **6. Close competitor gaps** | 13 | Map, hours, testimonials, capacity table, gallery |
| **7. Clean up** | P4 | Do it while touching those files anyway |

---

### Counts

- **6 ship blockers** · **8 commercial gaps** · **10 accessibility failures** · **7 performance defects** · **6 hygiene items**
- **31 distinct improvements**, of which **12 are Small** (under an hour each) and **11 are Medium**.
