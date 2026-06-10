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

No CI, no pre-commit hooks, no tests.
