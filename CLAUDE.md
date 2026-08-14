# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server on http://localhost:3000 (port is pinned in vite.config.js)
npm run build     # runs prebuild (scripts/generate-sitemap.mjs) then vite build → dist/
npm run preview   # serve the production build
npm run lint      # eslint .
npx prettier --write .   # format (prettier-plugin-tailwindcss sorts Tailwind classes)
```

Docker (local only — deployment is still Cloudflare Pages, which ignores these files):

```bash
docker compose up dev    # Vite dev server + HMR on http://localhost:3000 (source bind-mounted)
docker compose up prod   # production build served by nginx on http://localhost:8080
docker compose build     # rebuild after package.json / package-lock.json changes
```

`Dockerfile` is multi-stage (`deps` → `dev` | `build` → `prod`). `docker/nginx.conf` restates the two
Cloudflare rules for local parity: SPA fallback to `index.html` and `Content-Type: application/xml`
on `/sitemap.xml`. When `public/_redirects` or `public/_headers` change, mirror it there.

There is no test framework in this project — no test runner, no test files. Don't invent one without asking.

## Architecture

Single-page React 18 + Vite portfolio site, Indonesian-first with an EN toggle. Deployed to **Cloudflare Pages** (auto-deploy on push to `main`); `vercel.json` is a leftover alternate host config.

**Provider stack** (`src/main.jsx`): `HelmetProvider` → `LanguageProvider` → `App`. Routes live in `src/routes/App.jsx`: `/`, `/about-me`, `/project/:id`, and `*` → `Error404`.

Note the unusual layout: **components live under `src/assets/components/`**, not `src/components/`. Pages are in `src/pages/`.

### Three cross-cutting systems

**1. i18n — `src/context/LanguageContext.jsx` + `src/context/translations.js`**
`useLanguage()` gives `{ lang, toggleLang, t }`. `t(key)` looks up a flat dot-namespaced key (`"hero.title1"`, `"project.placeholder"`) in the `id` or `en` object and falls back to returning the key itself, so a missing translation shows the raw key rather than throwing. Choice persists in `localStorage` under `app_lang`.
All user-facing copy must go through `t()` — never hardcode display strings. Both `id` and `en` exports in `translations.js` must be kept key-for-key in sync.

**2. Project data — `src/assets/components/portofolio/ProjectContent.jsx`**
The exported `portfolioItems` array is the single source of truth for projects. It is consumed both by the grid component in that file and by `src/pages/portofolio/Portofolio.jsx`, which resolves `useParams().id` against it to render the detail page. Adding a project means adding one entry here (id, title, desc, longDesc, challenge, solution, category, time, projectUrl, githubUrl, techStack) — and then also updating the sitemap script (below). Sibling files `TechStackContent.jsx` and `CertificateContent.jsx` follow the same data-array pattern.

**3. SEO — `src/assets/components/seo/*.jsx`**
One component per route (`HomeSEO`, `AboutSEO`, `ProjectSEO`, `NotFoundSEO`), each rendering `<Helmet>` with meta tags plus JSON-LD structured data (`WebSite`, `Person`, `ItemList` of `Event`, etc.). Google Search Console validates these, so Schema.org required fields matter — `Event` entries need `startDate`, `location`, `organizer`, `performer`, `image`.
`index.html` additionally carries **static** meta/OG/Twitter tags, because crawlers that don't execute JS never see the Helmet output. When site-level title/description/OG data changes, update *both* `index.html` and the relevant SEO component or they drift apart.

### Sitemap and static SEO files

`scripts/generate-sitemap.mjs` runs as `prebuild` and writes `public/sitemap.xml`. The URL list inside it is **hardcoded** (`/`, `/about-me`, `/project/1`) — placeholder/unfinished projects are deliberately excluded. Adding a real project requires manually adding its `/project/:id` entry to that array.

`public/_redirects` handles the SPA fallback (`/* → /index.html 200`) with an explicit passthrough rule for `/sitemap.xml` so the splat doesn't swallow it; `public/_headers` forces `Content-Type: application/xml` on the sitemap. Don't reorder or drop those rules.

## Constraints from AGENTS.md

`AGENTS.md` defines a multi-agent role workflow (plan → approve → implement → report). Regardless of that process, its hard restrictions apply to any change here:

- Don't remove `LanguageContext`, `HelmetProvider`, the SEO components, or restructure the React Router setup.
- Don't hardcode multilingual content.
- Don't add dependencies without a clear need.
- Don't change deployment config (`_redirects`, `_headers`, build settings) casually.

## Conventions

- Components are named exports (`export const Navbar = () => ...`), imported by relative path; no path aliases configured.
- Styling is Tailwind v4 via the `@tailwindcss/vite` plugin — `src/assets/css/index.css` is just `@import "tailwindcss"`. `tailwind.config.js` wraps the config in Material Tailwind's `withMT()` and sets Poppins as the sans font.
- Animation is Framer Motion; page/section components typically define local `variants` objects near the top of the file. Lottie JSON lives in `src/assets/components/animation/`.
- ESLint has `no-unused-vars` turned off intentionally.
