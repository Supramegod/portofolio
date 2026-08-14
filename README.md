# Portofolio Jalu Pradipta

[![Live Site](https://img.shields.io/badge/Live-jalupradipta.pages.dev-00E5FF?style=flat-square)](https://jalupradipta.pages.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com)

**Website portofolio pribadi -- Backend Developer Laravel 12 & ERP Specialist.**  
Dibangun dengan tema **Cyber-Synthwave Tokyo Underground** -- dark purple dengan aksen neon cyber-teal & magenta.

**Live:** [jalupradipta.pages.dev](https://jalupradipta.pages.dev)

---

## Daftar Isi

- [Tech Stack](#tech-stack)
- [Fitur Website](#fitur-website)
- [Multi-Agent System](#multi-agent-system)
- [Struktur Folder](#struktur-folder)
- [Rute](#rute)
- [Proyek Unggulan](#proyek-unggulan)
- [Cara Menjalankan](#cara-menjalankan)
- [Deployment](#deployment)
- [SEO Status](#seo-status)
- [Tentang Pemilik](#tentang-pemilik)
- [TODO](#todo)

---

## Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | React 18, Vite 7 |
| **UI & Styling** | Tailwind CSS v4, @material-tailwind/react, PostCSS |
| **Animasi** | Framer Motion, Lottie (lottie-react) |
| **Routing** | React Router DOM v7 |
| **SEO** | react-helmet-async, JSON-LD structured data |
| **Icons** | react-icons |
| **Responsive** | react-responsive |
| **Skeleton** | react-loading-skeleton |
| **Linting & Formatting** | ESLint 9, Prettier 3, prettier-plugin-tailwindcss |
| **Deployment** | Cloudflare Pages (auto-deploy dari GitHub) |

---

## Fitur Website

- **Theme Cyber-Synthwave Tokyo Underground** -- Dark purple (#2F006F) dengan neon cyber-teal & magenta accents
- **Intro Overlay** -- Animasi typewriter + badge saat kunjungan pertama
- **Hero** -- Split layout 60/40, HUD border, Lottie animation, sosial link
- **About** -- Bio, foto profil, statistik, skills, experience, education
- **Services** -- 4 kartu layanan glassmorphism (Backend, API, ERP, Deployment)
- **Portfolio Tabs** -- Projects, Certificates, Tech Stack
- **Contact** -- 6 info kontak + tombol WhatsApp
- **SEO** -- react-helmet-async, meta/OG/Twitter tags per halaman, canonical URLs, robots.txt, sitemap.xml
- **JSON-LD Structured Data** -- Person, Website, SoftwareApplication, FAQPage schemas
- **Google Search Console** -- Terverifikasi (meta tag)
- **Bilingual (ID/EN)** -- Toggle bahasa via React Context (100+ key-value pairs)
- **Animasi** -- Framer Motion (scroll, stagger, hover) + Lottie JSON animations
- **Aksesibilitas** -- Semantic HTML, ARIA labels, focus management

---

## Multi-Agent System

Project ini menggunakan **AI Multi-Agent System** berbasis [OpenCode](https://opencode.ai) dengan 3 tim yang saling terkoordinasi: **Design**, **Marketing**, dan **DevOps**, dikoordinasi oleh `@ceo`.

- **Matriks otoritas, roster lengkap, workflow, dan restrictions:** [`AGENTS.md`](./AGENTS.md)
- **Definisi agent:** `.opencode/agent/` (19 file)
- **Skill agent:** `.opencode/skills/` (28 skill -- AIDA, SEO, CRO, dll)

Hanya `@ceo`, `@design-coordinator`, dan `@devops-coordinator` yang boleh mengeksekusi perubahan source code. Alur kerjanya: `@ceo` memecah goal → delegasi ke koordinator → agent spesialis mengerjakan → koordinator me-review & menggabungkan → `@ceo` melaporkan ringkasan.

---

## Struktur Folder

```
portofolio/
+-- src/                          # Source code utama
|   +-- main.jsx                  # Entrypoint (HelmetProvider + LanguageProvider)
|   +-- routes/
|   |   +-- App.jsx               # Router (/, /about-me, /project/:id, *)
|   +-- context/
|   |   +-- LanguageContext.jsx    # ID/EN toggle + useLanguage hook
|   |   +-- translations.js       # 100+ key-value pairs (id & en)
|   +-- pages/
|   |   +-- Homepage.jsx          # Halaman utama (Hero, About, Services, Portfolio, Contact)
|   |   +-- profile/
|   |   |   +-- AboutMe.jsx       # Halaman tentang saya
|   |   +-- portofolio/
|   |   |   +-- Portofolio.jsx    # Detail proyek
|   |   +-- errors/
|   |       +-- Error404.jsx      # Halaman 404
|   +-- assets/
|       +-- css/
|       |   +-- index.css         # @import "tailwindcss"
|       +-- img/                  # Foto profil
|       +-- animation/            # Lottie JSON animations
|       +-- components/
|           +-- navbar/
|           |   +-- Navbar.jsx    # Navigasi + language toggle
|           |   +-- Footer.jsx    # Footer
|           +-- home/
|           |   +-- HeroSection.jsx     # Hero + Lottie + sosial
|           |   +-- IntroOverlay.jsx    # Overlay kunjungan pertama
|           |   +-- ServiceSection.jsx  # 4 layanan
|           |   +-- ContactSection.jsx  # 6 kontak
|           +-- portofolio/
|           |   +-- ProjectContent.jsx       # Proyek (CAIS ERP + placeholder)
|           |   +-- CertificateContent.jsx   # Sertifikat (PDF viewer)
|           |   +-- TechStackContent.jsx     # Tech stack
|           +-- seo/                      # Per-page SEO components
|               +-- HomeSEO.jsx
|               +-- AboutSEO.jsx
|               +-- ProjectSEO.jsx
|               +-- NotFoundSEO.jsx
|
+-- public/                       # Aset statis
|   +-- docs/                     # PDF (sertifikat, dll)
|   +-- images/                   # Thumbnail proyek + OG images
|   +-- robots.txt                # SEO -- izinkan crawling
|   +-- sitemap.xml               # SEO -- 3 URLs (di-generate saat build)
|   +-- _redirects                # SPA fallback rewrite
|   +-- _headers                  # Content-Type: application/xml utk sitemap
|
+-- scripts/
|   +-- generate-sitemap.mjs      # prebuild -- tulis public/sitemap.xml
|
+-- .opencode/                    # Konfigurasi AI Multi-Agent
|   +-- opencode.json             # Registrasi agent & permissions
|   +-- agent/                    # Definisi 19 agent (19 file .md)
|   +-- skills/                   # 28 skill spesifik (AIDA, SEO, CRO, dll)
|
+-- index.html                    # Root HTML (meta statis + Google verification)
+-- package.json                  # Dependencies & scripts
+-- vite.config.js                # Konfigurasi Vite 7
+-- eslint.config.js              # Konfigurasi ESLint 9
+-- prettier.config.js            # Konfigurasi Prettier
+-- tailwind.config.js            # Konfigurasi Tailwind
+-- vercel.json                   # (Opsional) Konfigurasi Vercel
+-- .gitignore
+-- AGENTS.md                     # Multi-agent system documentation
```

---

## Rute

| Rute | Halaman | SEO Component |
|------|---------|---------------|
| `/` | Homepage (Hero, About, Services, Portfolio, Contact) | HomeSEO |
| `/about-me` | Halaman profil detail | AboutSEO |
| `/project/:id` | Detail proyek (id=1: CAIS ERP) | ProjectSEO |
| `*` | 404 Not Found | NotFoundSEO |

---

## Proyek Unggulan

**CAIS ERP System** -- ERP Laravel 12 dengan modul Leads, Quotation, SPK, PKS, custom SSO (Laravel Sanctum), dashboard approval & sales activity.

> Lihat README khusus: [`CAIS_README.md`](./CAIS_README.md)

---

## Cara Menjalankan

### Prasyarat
- Node.js 18+
- npm 9+

### Instalasi & Development

```bash
# Clone repository
git clone https://github.com/supramegod/portofolio.git
cd portofolio

# Install dependencies
npm install

# Jalankan dev server (http://localhost:3000)
npm run dev

# Build produksi
npm run build

# Preview hasil build
npm run preview

# Linting
npm run lint

# Format semua file dengan Prettier
npx prettier --write .
```

---

## Deployment

**Cloudflare Pages** -- Auto-deploy dari GitHub repository.

- Setiap push ke branch `main` otomatis memicu build & deploy
- File `public/_redirects` me-rewrite semua rute ke `/index.html` (SPA fallback)
- Domain kustom: **jalupradipta.pages.dev**

### Konfigurasi Build di Cloudflare Pages
| Setting | Value |
|---------|-------|
| **Build command** | `npm run build` |
| **Build output** | `dist/` |
| **Root directory** | `/` |

---

## SEO Status

- Google Search Console terverifikasi (meta tag)
- Sitemap.xml terdaftar (3 URLs: `/`, `/about-me`, `/project/1`) -- di-generate otomatis oleh `scripts/generate-sitemap.mjs` saat `prebuild`; proyek placeholder sengaja dikecualikan
- robots.txt mengizinkan crawling
- JSON-LD structured data (Person, Website, SoftwareApplication, FAQPage)
- Canonical URLs ke `jalupradipta.pages.dev`
- OG & Twitter Cards per halaman
- Semantic HTML & heading hierarchy
- react-helmet-async untuk per-page meta tags
- Menunggu indexing Google (1-2 minggu)

---

## Tentang Pemilik

**Jalu Pradipta**
- D3 Teknik Telekomunikasi -- PENS (Politeknik Elektronika Negeri Surabaya)
- Backend Developer -- CAIS ERP (Laravel 12)
- Minat: Teknologi, desain sistem, otomatisasi cerdas, integrasi hardware-software

### Skill Utama
| Kategori | Teknologi |
|----------|-----------|
| **Backend** | Laravel 12, PHP 8.x, REST API, Laravel Sanctum (SSO) |
| **Database** | MySQL |
| **System** | ERP Design, Dashboard & Data Visualization, Production Deployment |
| **Tools** | Git, Docker, Postman, Composer |

### Sosial & Kontak
| Platform | Link |
|----------|------|
| **Email** | [jluppradipta@gmail.com](mailto:jluppradipta@gmail.com) |
| **LinkedIn** | [jalupradipta](https://www.linkedin.com/in/jalupradipta/) |
| **GitHub** | [supramegod](https://github.com/supramegod) |
| **Instagram** | [jluppradipta_728](https://www.instagram.com/jluppradipta_728/) |
| **WhatsApp** | [+62 821-3157-5147](https://wa.me/+6282131575147) |

---

## TODO

- [ ] Kompres foto (`Profile.jpg` 1.4MB, `Foto.jpg` 2.3MB)
- [ ] Optimasi bundle JS (939 kB -- code-split)
- [ ] Tambah lebih banyak entri sertifikat & artikel
- [ ] Beli domain custom (`jalupradipta.com`)
- [ ] Setup Google Analytics
- [ ] Tambah halaman blog/artikel
- [ ] Register backlink dari LinkedIn, GitHub, dsb.

---

## Lisensi

Hak cipta (c) 2026 **Jalu Pradipta**. Seluruh hak cipta dilindungi.

Project ini bersifat pribadi -- tidak untuk didistribusikan atau digunakan tanpa izin pemilik.

---

> Dibuat dengan menggunakan React 18 + Tailwind CSS v4 + Framer Motion + OpenCode AI Agents  
> [jalupradipta.pages.dev](https://jalupradipta.pages.dev)