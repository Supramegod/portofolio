# Portofolio Jalu Pradipta

Website portofolio pribadi — Backend Developer Laravel 12 & ERP Specialist.

**Live:** https://jalupradipta.pages.dev

**Tech Stack:** React 18 + Vite 7 + Tailwind CSS v4 + @material-tailwind/react + Framer Motion + Lottie

---

## 🚀 Memulai

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Build produksi
npm run preview    # Preview build
npm run lint       # ESLint
npx prettier --write .   # Format semua file
```

---

## 📁 Struktur Project

```
src/
├── main.jsx                                    # Entrypoint (HelmetProvider + LanguageProvider)
├── index.html                                  # Root HTML (Google verification meta tag)
├── routes/App.jsx                              # Router (/, /about-me, /project/:id, *)
├── context/
│   ├── LanguageContext.jsx                     # ID/EN toggle + useLanguage hook
│   └── translations.js                        # 100+ key-value pairs (id & en)
├── pages/
│   ├── Homepage.jsx                            # Halaman utama
│   ├── profile/AboutMe.jsx                     # Halaman tentang saya
│   ├── portofolio/Portofolio.jsx               # Detail proyek
│   └── errors/Error404.jsx                     # Halaman 404
└── assets/
    ├── css/index.css                           # @import "tailwindcss"
    ├── img/                                    # Foto profil
    ├── animation/                              # Lottie JSON animations
    └── components/
        ├── navbar/Navbar.jsx                   # Navigasi + language toggle
        ├── navbar/Footer.jsx                   # Footer
        ├── home/HeroSection.jsx                # Hero + Lottie + sosial
        ├── home/IntroOverlay.jsx               # Overlay kunjungan pertama
        ├── home/ServiceSection.jsx              # 4 layanan
        ├── home/ContactSection.jsx              # 6 kontak
        ├── portofolio/ProjectContent.jsx       # Proyek (CAIS ERP + placeholder)
        ├── portofolio/CertificateContent.jsx   # Sertifikat (PDF viewer)
        ├── portofolio/TechStackContent.jsx     # Tech stack
        └── seo/                                # Per-page SEO (HomeSEO, AboutSEO, ProjectSEO, NotFoundSEO)
public/
├── docs/                                       # PDF
├── images/                                     # Thumbnail proyek + OG images
├── robots.txt                                  # SEO
├── sitemap.xml                                 # SEO
└── _redirects                                  # SPA fallback rewrite
```

---

## 🧭 Rute

| Rute | Halaman |
|------|---------|
| `/` | Homepage (Hero, About, Services, Portfolio, Contact) |
| `/about-me` | Halaman profil detail |
| `/project/:id` | Detail proyek (1 = CAIS ERP) |
| `*` | 404 |

---

## 👤 Tentang Pemilik

**Jalu Pradipta**
- D3 Teknik Telekomunikasi (PENS)
- Backend Developer — CAIS ERP (Laravel 12)
- Minat: Teknologi, desain sistem, otomatisasi cerdas, integrasi hardware-software

### Skill Utama
- **Backend:** Laravel 12, PHP 8.x, REST API, Laravel Sanctum (SSO)
- **Database:** MySQL
- **System:** ERP Design, Dashboard & Data Visualization, Production Deployment
- **Tools:** Git, Docker, Postman, Composer

### Sosial & Kontak
- **Email:** jluppradipta@gmail.com
- **LinkedIn:** [jalupradipta](https://www.linkedin.com/in/jalupradipta/)
- **GitHub:** [supramegod](https://github.com/supramegod)
- **Instagram:** [jluppradipta_728](https://www.instagram.com/jluppradipta_728/)
- **WhatsApp:** [+62 819-3738-5652](https://wa.me/+6281937385652)

---

## 🛠️ Fitur Website

- **Theme Cyber-Synthwave Tokyo Underground** — Dark purple (#2F006F) with neon cyber-teal & magenta accents
- **Intro Overlay** — Animasi typewriter + badge saat kunjungan pertama
- **Hero** — Split layout 60/40, HUD border, Lottie animation, sosial link
- **About** — Bio, foto profil, statistik, skills, experience, education
- **Services** — 4 kartu layanan glassmorphism (Backend, API, ERP, Deployment)
- **Portfolio Tabs** — Projects, Certificates, Tech Stack
- **Contact** — 6 info kontak + tombol WhatsApp
- **SEO** — react-helmet-async, meta/OG/Twitter tags per halaman, canonical URLs, robots.txt, sitemap.xml
- **JSON-LD Structured Data** — Person, Website, SoftwareApplication, FAQPage schemas
- **Google Search Console** — Terverifikasi (meta tag)
- **Bilingual** — ID/EN toggle via React Context
- **Animasi** — Framer Motion + Lottie

---

## 🎯 Proyek Unggulan

**CAIS ERP System** — ERP Laravel 12 dengan modul Leads, Quotation, SPK, PKS, custom SSO (Laravel Sanctum), dashboard approval & sales activity.

---

## 🌐 Deployment

**Cloudflare Pages** (auto-deploy dari GitHub) — `public/_redirects` me-rewrite semua rute ke `/index.html` (SPA fallback).

### SEO Status
- ✅ Google Search Console terverifikasi (meta tag)
- ✅ Sitemap.xml terdaftar (5 URLs)
- ✅ robots.txt mengizinkan crawling
- ✅ JSON-LD schemas (Person, Website, SoftwareApplication, FAQPage)
- ✅ Canonical URLs → `jalupradipta.pages.dev`
- ✅ OG & Twitter Cards per halaman
- ⏳ Menunggu indexing Google (1-2 minggu)

---

## 📋 TODO

- [ ] Kompres foto (`Profile.jpg` 1.4MB, `Foto.jpg` 2.3MB)
- [ ] Optimasi bundle JS (939 kB → code-split)
- [ ] Tambah lebih banyak entri sertifikat & artikel
- [ ] Beli domain custom (`jalupradipta.com`)
- [ ] Setup Google Analytics
- [ ] Tambah halaman blog/artikel
- [ ] Register backlink dari LinkedIn, GitHub, dsb.
