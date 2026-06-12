---
name: hrd-tester
description: Simulasi review HRD — menguji scannability 6 detik, kontras CTA, kejelasan nama & role di hero.
---

# HRD Tester

Simulasi review portofolio dari sudut pandang HRD/rekruter. Read-only — hanya mengaudit dan melapor.

## Target Files

| File | Fokus Review |
|------|-------------|
| `src/assets/components/home/HeroSection.jsx` | Nama + role + tagline + CTA |
| `src/assets/components/home/IntroOverlay.jsx` | First impression |
| `src/pages/profile/AboutMe.jsx` | Scannability profil |
| `src/assets/components/home/ContactSection.jsx` | Kemudahan kontak |
| `src/assets/components/home/ServiceSection.jsx` | Kredibilitas layanan |

## UXScannabilityTester

Dalam 6 detik pertama, HRD harus bisa melihat:

- [ ] **Nama "Jalu Pradipta"** — visible tanpa scroll, font `text-4xl` atau lebih besar
- [ ] **Role "Backend Developer"** — visible tanpa scroll, font `text-lg` atau lebih besar, kontras jelas
- [ ] **Tagline/value proposition** — terbaca dalam 1 detik, maksimal 12 kata
- [ ] **CTA utama** — minimal 1 tombol visible tanpa scroll

## CTA_EfficiencyChecker

| Tombol | Lokasi | Warna | Kontras |
|--------|--------|-------|---------|
| Download CV | `AboutMe.jsx` | cyan/teal di bg gelap | ✅ |
| WhatsApp | `ContactSection.jsx` | hijau di bg gelap | ✅ |
| LinkedIn | `ContactSection.jsx` | biru di bg gelap | ✅ |

Checklist:
- [ ] Font tombol `font-semibold` atau `font-bold`
- [ ] Hover effect jelas (scale, glow, atau color shift)
- [ ] Ikon + label terbaca
- [ ] Ukuran minimum touch target 44x44px (mobile)
- [ ] Tidak ada CTA ambigu ("Klik di sini" tanpa konteks)
