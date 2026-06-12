# AGENTS.md — Portofolio Jalu Pradipta

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server on **port 3000** (not Vite default) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint (flat config, `eslint.config.js`) |
| `npx prettier --write .` | Format all files (no npm script exists) |

No test, typecheck, or codegen commands exist.

## Lint & Style

- ESLint v9 flat config — `no-unused-vars` is **off**; don't waste time fixing those.
- `react/prop-types` errors are **pre-existing** across the project — don't fix them unless the task explicitly asks.
- `eslint-plugin-react` is a **required dev dep** for lint to run (install if missing).
- Prettier uses `prettier-plugin-tailwindcss` (sorts `className`). No `.prettierrc` — config is in `prettier.config.js`.
- Tailwind CSS v4 via `@import "tailwindcss"` — **no PostCSS config**, no `@tailwind` directives.

## Framework & Tooling

- **React 18** + **Vite 7** (port 3000), plain JSX (no TypeScript).
- **Router:** React Router v7 — routes in `src/routes/App.jsx`: `/`, `/about-me`, `/project/:id`, `*` (404).
- **SEO:** `react-helmet-async` — HelmetProvider wraps the app in `main.jsx`.
- **UI:** `@material-tailwind/react` — `tailwind.config.js` must wrap export with `withMT()`.
- **Animation:** Framer Motion + Lottie (`lottie-react`). JSON animation files in `src/assets/animation/`.
- **Icons:** `react-icons`.

## Deployment

- **Cloudflare Pages** — `public/_redirects` handles SPA fallback. Static assets in `public/docs/` and `public/images/` are served directly.
- `public/robots.txt` and `public/sitemap.xml` are in place for SEO.
- **SEO canonical URLs** must point to `jalupradipta.pages.dev` (not `vercel.app`) — check `src/assets/components/seo/*.jsx`.

## Project Structure

```
src/
  main.jsx              — entrypoint (HelmetProvider wraps app)
  routes/App.jsx        — router setup
  pages/                — page components
  assets/components/    — reusable sections (navbar, home sections, portfolio tabs)
  assets/css/index.css  — global CSS (just @import "tailwindcss")
```

## Available Agents

Gunakan `@agent-name` di prompt untuk memicu agent.

### Marketing Team (10)

| Agent | Role | File |
|-------|------|------|
| `@seo-master` | Technical & On-Page SEO | `.opencode/agent/seo-master.md` |
| `@keyword-strategist` | Keyword research & competitor analysis | `.opencode/agent/keyword-strategist.md` |
| `@content-writer` | SEO copywriter & blogger | `.opencode/agent/content-writer.md` |
| `@link-builder` | Backlink & outreach specialist | `.opencode/agent/link-builder.md` |
| `@social-media-strategist` | Content planner TikTok, IG, LinkedIn | `.opencode/agent/social-media-strategist.md` |
| `@ad-copywriter` | Google Ads, Meta Ads, TikTok Ads | `.opencode/agent/ad-copywriter.md` |
| `@conversion-rate-expert` | CRO & UX analyst | `.opencode/agent/conversion-rate-expert.md` |
| `@analytics-translator` | GA4 & Search Console expert | `.opencode/agent/analytics-translator.md` |
| `@frontend-seo` | Speed, Core Web Vitals, HTML optimization | `.opencode/agent/frontend-seo.md` |
| `@project-manager-marketing` | Orchestrator — koordinasi 9 agent di atas | `.opencode/agent/project-manager-marketing.md` |

### Design Team (6)

| Agent | Role | File |
|-------|------|------|
| `@design-coordinator` | Orchestrator tim desain | `.opencode/agent/design-coordinator.md` |
| `@ui-designer` | Layout, tipografi, Tailwind v4, tema synthwave | `.opencode/agent/ui-designer.md` |
| `@motion-expert` | Framer Motion, Lottie, mikro-interaksi | `.opencode/agent/motion-expert.md` |
| `@code-viewer` | QA & reviewer JSX, bundle size | `.opencode/agent/code-viewer.md` |
| `@hrd-tester` | Simulasi review HRD (6 detik scan) | `.opencode/agent/hrd-tester.md` |
| `@techlead-tester` | Simulasi review Tech Lead / CTO | `.opencode/agent/techlead-tester.md` |

## Owner

- **Name:** Jalu Pradipta
- **Email:** jluppradipta@gmail.com
- **GitHub:** supramegod
- **LinkedIn:** jalupradipta

## User TODO (before production)

- Replace `src/assets/img/Foto.jpg` and `src/assets/img/Profile.jpg` with Jalu's photo
- Add project screenshot at `public/images/project-cais.jpg`
- Populate Certificates and Articles tab data (more entries)
- [Done] Update CV at `public/docs/` — file must match the `fileUrl` path in `CertificateContent.jsx`
- [Done] sitemap.xml updated to jalupradipta.pages.dev
- [Done] SEO canonical URLs migrated from vercel.app → pages.dev
- [Done] Translations (hero, about, services, project) optimized with Laravel 12 / PHP 8.x / REST API / Sanctum SSO mentions

## Known Quirks

- **Certificate PDF path**: `CertificateContent.jsx` references `/docs/sertifikat1.pdf` — if you rename/replace the file, update the path there too.
- **ESLint**: requires `eslint-plugin-react` to be installed (`npm install eslint-plugin-react --save-dev`).

## SEO Status

- ✅ Google Search Console verified (meta tag)
- ✅ Sitemap.xml submitted (5 URLs)
- ✅ robots.txt allows crawling
- ✅ JSON-LD schemas (Person, Website, SoftwareApplication, FAQPage)
- ✅ Canonical URLs → `jalupradipta.pages.dev`
- ✅ OG & Twitter Cards per page (Home, About, Project, 404)
- ⏳ Waiting for Google indexing (1-2 weeks)

No CI, no pre-commit hooks, no tests.
