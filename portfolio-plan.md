# Portfolio Build Plan — Black & White, Bilingual (EN/ID)

## 1. Goal & Context

**Goal.** Ship a personal portfolio site that reads as if a human designer made deliberate choices: monochrome, typographically driven, bilingual EN/ID, with a curated project list. Built on React 18 + Vite 7 + Tailwind v4, deployed to Cloudflare Pages via GitHub.

**What "natural, non-AI-looking" means concretely:**

| AI-looking tell | Human replacement |
|---|---|
| Perfect 3-column card grid, equal heights | Uneven grid: one project spans 2 cols, another is a text-only line item |
| Every section = centered heading + 2-line subtitle + 3 cards | Varied section rhythm; some sections are a single paragraph, some are a table |
| Rounded-2xl + shadow-lg on everything | Hairline 1px rules, flat surfaces, radius 0–2px |
| Inter/Poppins default | A real pairing with character (see §5) |
| Copy like "Passionate developer crafting seamless digital experiences" | "I build web apps. Mostly React, mostly for small teams that need it working by Friday." |
| Uniform 96px section padding everywhere | Optically tuned spacing — tighter after headings, looser before new topics |
| Stock gradient hero | Type-only hero with real name, role, location, availability |

**Audience & consequence:**
- **Recruiters/hiring managers (primary)** — scan in ~30s. Need: role, stack, 3 strong projects, CV link, contact. Consequence: content above the fold, no scroll-jacking.
- **Freelance clients (secondary)** — need outcomes and reliability, not code. Consequence: each project states problem → what I did → result.
- **Peers/devs (tertiary)** — check GitHub, code quality, site performance. Consequence: fast site, clean HTML, real repo links.

## 2. Constraints & Assumptions

**Constraints**
- Palette: black/white only. Allowed: pure black `#0A0A0A`, off-white `#FAFAF8`, and 4–5 neutral greys. No accent hue. No color-coded states beyond grey weight.
- Bilingual EN + ID, full parity, no machine-translated tone.
- Fixed stack (React 18, Vite 7, Tailwind v4, @material-tailwind/react, Framer Motion, lottie-react, React Router v7, react-helmet-async, react-icons, react-responsive, react-loading-skeleton, ESLint 9, Prettier 3).
- Static hosting on Cloudflare Pages, auto-deploy from GitHub `main`. No server runtime, no DB.

**Assumptions**
- You supply the project list, screenshots, and raw facts; you write final ID copy yourself (native tone matters more than speed).
- No CMS — content lives in typed TS files (`src/content/projects.ts`, `src/content/i18n/{en,id}.ts`).
- No auth, no contact form backend; contact = `mailto:` + socials (or Formspree if a form is mandatory).
- Content volume: 6–10 projects, 1 about page, 1 contact section. Blog is out of scope for v1.

## 3. Stakeholders & Success Criteria

| Stakeholder | Cares about | "Done" means |
|---|---|---|
| You (owner) | Represents you accurately, easy to update | Adding a project = editing one TS object |
| Recruiter | Fast judgment | Role + stack + top project visible without scrolling |
| Client | Trust | Every project has a stated outcome |
| Peer | Craft | Clean DOM, no layout shift, real code links |

**Measurable success criteria**
- [ ] Lighthouse mobile: Performance ≥ 90, A11y ≥ 95, Best Practices ≥ 95, SEO = 100
- [ ] LCP < 2.0s, CLS < 0.05, total JS < 200KB gzip
- [ ] 100% string parity: automated check that `en` and `id` key sets are identical
- [ ] Correct at 360px, 768px, 1440px — zero horizontal scroll
- [ ] `hreflang` + localized `<title>`/`<meta>`/JSON-LD on both languages
- [ ] Keyboard-navigable; visible focus ring; contrast ≥ 4.5:1 everywhere
- [ ] Copy review: one native EN speaker + one native ID speaker flag zero "AI-sounding" lines

## 4. Decomposition (Work Breakdown)

**Legend:** M = Must, S = Should, N = Nice.

### Phase 0 — Discovery (output: `content-brief.md`)
| Task | Output | Pri | Depends on |
|---|---|---|---|
| Inventory projects: role, stack, dates, problem, outcome, links | Filled table, 6–10 rows | M | — |
| Collect assets: screenshots, logos, CV PDF | `/assets` folder | M | — |
| Write your positioning line (1 sentence, no adjectives) | One line, EN + ID | M | — |
| Pick 3 "hero" projects to feature large | Ranked list | M | inventory |

### Phase 1 — Design (output: static mockup or coded prototype)
| Task | Output | Pri | Depends on |
|---|---|---|---|
| Typography pair + type scale (7 steps, hand-set) | `styles.css` `@theme` tokens | M | — |
| Greyscale ramp + spacing scale (non-uniform) | tokens | M | — |
| Layout sketch per section (rhythm map) | wireframe | M | Phase 0 |
| Grain/noise texture treatment | SVG/CSS noise overlay | S | tokens |
| Motion spec (what moves, how much, duration) | 1-page spec | S | layout |

### Phase 2 — Content (output: i18n files)
| Task | Output | Pri | Depends on |
|---|---|---|---|
| Write EN copy in your own voice | `i18n/en.ts` | M | Phase 0 |
| Write ID copy natively (not translated line-by-line) | `i18n/id.ts` | M | en.ts |
| Per-project case blurbs (60–120 words) | in `projects.ts` | M | Phase 0 |
| Compress/convert screenshots to WebP/AVIF | optimized assets | M | Phase 0 |

### Phase 3 — Development
| Task | Output | Pri | Depends on |
|---|---|---|---|
| Vite + Tailwind v4 + ESLint/Prettier scaffold | running dev server | M | — |
| Design tokens in `src/styles.css` (`@theme`) | tokens live | M | Phase 1 |
| Router: `/:lang` prefix (`/en/*`, `/id/*`), redirect `/` | routes | M | scaffold |
| i18n provider: context + `useT()` + typed keys | hook | M | Phase 2 |
| Layout shell: header, lang toggle, footer | components | M | tokens |
| Home: hero, selected work, about strip, contact | page | M | shell |
| Projects list + project detail page | pages | M | projects.ts |
| Skeletons for image-heavy blocks | react-loading-skeleton | S | pages |
| Framer Motion entrances + reduced-motion guard | motion | S | motion spec |
| One Lottie accent (lazy, single file) | component | N | motion |

### Phase 4 — SEO
| Task | Output | Pri |
|---|---|---|
| react-helmet-async per route, localized title/desc | meta | M |
| `hreflang` alternates + `x-default` | link tags | M |
| JSON-LD: `Person`, `WebSite`, `CreativeWork` per project | scripts | M |
| Prerender routes (`vite-plugin-prerender` / `react-snap`) so bots get HTML | static HTML per route | M |
| `sitemap.xml` (both langs) + `robots.txt` + OG images | files | S |

### Phase 5 — Testing
| Task | Pri |
|---|---|
| i18n key-parity script in CI | M |
| Lighthouse CI on preview deploy | M |
| Manual pass at 360/768/1440 + keyboard + screen reader | M |
| Native-speaker copy review (EN + ID) | M |
| Broken-link check | S |

### Phase 6 — Deployment
| Task | Pri |
|---|---|
| GitHub repo + Cloudflare Pages project (build `npm run build`, output `dist`) | M |
| SPA fallback `_redirects`: `/* /index.html 200` (after prerender, keep 404 for real misses) | M |
| Custom domain + HTTPS + cache headers for hashed assets | S |
| Search Console + analytics (Cloudflare Web Analytics, cookieless) | S |

## 5. Design Strategy — "Anti-AI" Principles

**Typography (the entire design carries here since there's no color)**
- Pair a display serif with a neutral grotesk, or go single-family with wide weight contrast. Concrete pick: **Instrument Serif** (headings, tight tracking, large sizes) + **Söhne/Inter Tight/Geist** (body). Avoid Poppins/Montserrat.
- Type scale by hand, not `1.25^n`: `13 / 15 / 17 / 21 / 28 / 44 / 76`. Odd values read as designed.
- Set body at 17px/1.6, max 68ch. Headings tracking `-0.02em`.

**Layout**
- 12-col grid but **break it deliberately** 2–3 times: hero text starting at col 2, a project image bleeding to the viewport edge, a caption hanging in the margin.
- Non-uniform project cards: featured = full-bleed image + 3-line blurb; the rest = a bordered table row (year · name · role · stack). Mixing card and list formats instantly kills the template look.
- Section rhythm: alternate padding `112 / 64 / 144 / 80px`, never one constant.
- Hairlines (`1px solid` grey-200) instead of shadows. Radius 0–2px only.

**Texture & depth (crucial in B&W)**
- SVG feTurbulence grain at 3–5% opacity fixed over the page — the single highest-ROI "not-AI" move.
- Halftone/duotone screenshots: force images to greyscale (`filter: grayscale(1) contrast(1.05)`), remove color on hover for the featured one only.
- Vertical rules and a thin baseline rule under the header to imply print structure.

**Copy micro-rules**
- No "passionate", "crafting", "seamless", "solutions", "journey", "elevate".
- Use specifics: numbers, dates, client type, what broke and how you fixed it.
- Allow lowercase fragments, an aside in parentheses, a dry joke in the footer. One deliberate imperfection > ten polished lines.

**Bilingual structure**
- **URL-prefixed routes**: `/en/...` and `/id/...`. Non-negotiable for SEO — two indexable URLs, no duplicate-content issue when paired with `hreflang`.
- **Toggle in header** (`EN / ID`, hairline divider), persisted to `localStorage`, initial guess from `navigator.language` **only on the bare `/` redirect** — never auto-switch after that.
- Default `/` → `/en` for recruiter reach; ID users land right after one redirect.
- Layout must tolerate ~20–25% longer ID strings: no fixed-width buttons, no `whitespace-nowrap` on nav or CTAs, test the longest ID string in every component.

## 6. Risk Assessment & Mitigation

| # | Risk | Impact | Mitigation | Contingency |
|---|---|---|---|---|
| 1 | B&W reads flat/cheap | High | Carry hierarchy with type scale, grain texture, hairlines, generous whitespace; use 5 greys, not 2 | Add a single "ink" accent (deep warm black or paper cream) — still monochrome-adjacent |
| 2 | ID copy is longer, breaks layout | Med | Fluid type (`clamp()`), no fixed widths, test with longest strings; write ID short, don't translate literally | Per-language line-height/size tweak via `[lang="id"]` selector |
| 3 | @material-tailwind/react vs Tailwind v4 incompatibility (it targets v3 config/plugin model) | **High** | Validate in a spike on day 1 before building UI on it. Use it only for a couple of isolated components | Drop it — build the 5 components you need (button, card, dialog, tabs, input) by hand; the design is custom anyway |
| 4 | Lottie bloat (lib ~250KB + JSON) | Med | Max 1 Lottie, lazy-load via `React.lazy` + IntersectionObserver, keep JSON < 50KB | Replace with an SVG/CSS animation or drop entirely |
| 5 | Duplicate content across EN/ID | Med | `hreflang` alternates + `x-default`, canonical per-URL, localized titles/descriptions | Noindex the weaker language until copy is genuinely distinct |
| 6 | SPA ships empty HTML → poor SEO/social previews | High | Prerender all routes at build time; verify with `curl` on the deployed URL | Pre-generate static HTML per route manually, or move to SSG |
| 7 | Design drifts back to template-generic under time pressure | Med | Lock the rhythm map in Phase 1 and check every section against the "AI tells" table | Ship fewer sections, executed with more care |
| 8 | Content never gets written (most common failure) | High | Write copy in Phase 2 **before** building pages; no lorem ipsum in the repo, ever | Ship 3 projects well rather than 9 half-described |

## 7. Options & Tradeoffs

### Design direction

| Direction | Pros | Cons | Best when |
|---|---|---|---|
| **A. Minimal editorial** (magazine: serif headlines, wide margins, image-led) | Feels human and premium; ages well; showcases screenshots | Needs good imagery; risks "quiet/boring" if copy is weak | You have strong visuals and can write |
| **B. Brutalist / raw** (system fonts, visible borders, dense, monospace details) | Impossible to mistake for AI output; memorable to devs | Polarizing with corporate recruiters; a11y risk | Audience is devs/agencies |
| **C. Swiss typographic** (strict grid, Helvetica-like, numbered sections) | Extremely credible; scales without imagery | Rigid grid is exactly what AI templates imitate; needs perfect execution | You're detail-obsessed and short on images |

**Decision matrix** (1–5, weighted)

| Criterion (weight) | A Editorial | B Brutalist | C Swiss |
|---|---|---|---|
| Recruiter appeal (×3) | 5 (15) | 3 (9) | 4 (12) |
| Anti-AI distinctiveness (×3) | 4 (12) | 5 (15) | 3 (9) |
| Build effort within stack (×2) | 4 (8) | 5 (10) | 3 (6) |
| Works in pure B&W (×2) | 5 (10) | 4 (8) | 5 (10) |
| Bilingual tolerance (×1) | 4 (4) | 4 (4) | 3 (3) |
| **Total** | **49** | **46** | **40** |

### Language handling

| Option | Pros | Cons |
|---|---|---|
| **Toggle + `/en` `/id` routes** | Best SEO, shareable per-language links, user control | Two content sets to maintain |
| Auto-detect only (no URL) | Zero friction | One indexable URL, breaks sharing, users can't override |
| Both languages visible side-by-side | No toggle needed, novel | Doubles page length, hurts scanning, SEO keyword dilution |

### Animation

| Option | Pros | Cons |
|---|---|---|
| **Framer Motion only** | Already in stack, tiny per-use cost, `prefers-reduced-motion` support | No illustrative animation |
| Framer + one Lottie | One memorable moment | +250KB lib, easy to overdo, often the most "AI-template" element |
| No animation | Fastest, most brutal | Feels static/unfinished on scroll |

## 8. Recommendation

- **Design: Direction A — Minimal editorial**, with two brutalist borrowings: a monospace metadata line (year · role · stack) and hairline table rows for non-featured projects. Highest recruiter appeal, strong anti-AI score, and it makes your screenshots do work.
- **Language: URL-prefixed routes + header toggle.** `/` redirects to `/en` unless `navigator.language` starts with `id`. Persist choice. Full `hreflang`.
- **Animation: Framer Motion only.** Scope it to: a 400ms fade+8px-rise on section entry (once, not on every scroll), hover state on featured project images, and page transitions on route change. Respect `prefers-reduced-motion`. **Skip Lottie in v1** — keep `lottie-react` uninstalled until there's a specific reason. This protects the < 200KB JS budget and the Lighthouse target.
- **@material-tailwind/react: spike first, plan to drop it.** With Tailwind v4 and a fully custom B&W design, it buys almost nothing and risks a day of config fighting.

## 9. Timeline & Roadmap

Assumes solo work, ~4 focused hours/day. **Critical path marked ★.**

| Phase | Effort | Sequence | Critical? |
|---|---|---|---|
| 0. Discovery & content inventory | 4h | Day 1 | ★ |
| 1. Design system + rhythm map | 8h | Day 1–2 | ★ |
| 2. Copywriting EN + ID | 10h | Day 2–4 (parallel with dev scaffold) | ★ |
| 3a. Scaffold, tokens, router, i18n | 6h | Day 3 | ★ |
| 3b. Layout shell + Home | 8h | Day 4–5 | ★ |
| 3c. Projects list + detail | 6h | Day 5–6 | ★ |
| 3d. Motion, skeletons, polish | 5h | Day 6–7 | — |
| 4. SEO + prerender | 5h | Day 7 | ★ |
| 5. Testing, a11y, copy review | 6h | Day 8 | ★ |
| 6. Deploy, domain, analytics | 3h | Day 8 | ★ |
| Buffer | 6h | Day 9 | — |
| **Total** | **~67h (~9 working days)** | | |

**Critical path:** Discovery → Design system → Copy → Router/i18n → Home → Projects → SEO/prerender → Testing → Deploy. Everything else (motion, skeletons, Lottie, analytics) can be cut without delaying launch.

## 10. Next Steps — First 5 Actions Today

- [ ] **1. Fill the project inventory table** (60 min). One row per project: name · year · role · stack · problem · what you did · measurable outcome · live URL · repo URL · has screenshot (y/n). Stop at 10.
- [ ] **2. Write your one-line positioning in EN and ID** (20 min). Format: `I'm [name], a [role] in [city]. I build [thing] for [who].` No adjectives. This becomes the hero and every meta description.
- [ ] **3. Run the @material-tailwind × Tailwind v4 spike** (45 min). `npm create vite@latest`, add Tailwind v4 via `@tailwindcss/vite`, install `@material-tailwind/react`, render one Button. If styles don't apply cleanly in 45 minutes, remove it and note the decision.
- [ ] **4. Lock typography and the greyscale ramp** (60 min). Choose the display + body pair, write the 7-step type scale and 5 greys directly into `src/styles.css` under `@theme`. Load fonts with a `<link>` in `index.html`, not a CSS `@import`.
- [ ] **5. Build the rhythm map** (45 min). On one page, sketch Home top-to-bottom with each section's height, padding value, and grid behaviour — explicitly marking the 2–3 places where the grid breaks. This document is what stops the design drifting generic.

**Then, first thing tomorrow:** create the GitHub repo and connect Cloudflare Pages so every commit deploys — you want the deploy pipeline boring and proven before there's anything at stake.
