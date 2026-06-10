# Portofolio Jalu Pradipta

Website portofolio pribadi untuk menampilkan proyek, sertifikat, artikel, dan tech stack sebagai Backend Developer.

**Tech Stack:** React 18 + Vite 7 + Tailwind CSS v4 + @material-tailwind/react

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
├── images/                                     # Thumbnail proyek
├── robots.txt                                  # SEO
└── sitemap.xml                                 # SEO
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

- **Intro Overlay** — Animasi typewriter + badge saat kunjungan pertama
- **Hero** — Animasi Lottie, sosial link, CTA ke portfolio & kontak
- **About** — Bio, foto profil, statistik, skills, experience, education
- **Services** — 4 kartu layanan (Backend, API, ERP, Deployment)
- **Portfolio Tabs** — Projects, Certificates, Tech Stack
- **Contact** — 6 info kontak + tombol WhatsApp
- **SEO** — react-helmet-async, meta/OG/Twitter tags per halaman, robots.txt, sitemap.xml
- **FAQ + Person Schema** — JSON-LD di halaman About
- **Bilingual** — ID/EN toggle via React Context (tanpa library eksternal)
- **Animasi** — Framer Motion di seluruh halaman

---

## 🎯 Proyek Unggulan

**CAIS ERP System** — ERP Laravel 12 dengan modul Leads, Quotation, SPK, PKS, custom SSO (Laravel Sanctum), dashboard approval & sales activity.

---

## 🌐 Deployment

**Cloudflare Pages** — `public/_redirects` me-rewrite semua rute ke `/index.html` (SPA fallback).

---

## 📋 TODO (Sebelum Production)

- [ ] Ganti `src/assets/img/Foto.jpg` dan `src/assets/img/Profile.jpg` dengan foto Jalu
- [ ] Tambah screenshot proyek di `public/images/project-cais.jpg`
- [x] Hapus tab Artikel (tidak relevan)
- [x] Tambah sertifikat PDF (`public/docs/sertifikat.pdf`)
- [x] Tambah thumbnail proyek (`public/images/project-cais.jpg`)
- [ ] Update CV di `public/docs/`
- [ ] Update `public/sitemap.xml` dengan domain asli
