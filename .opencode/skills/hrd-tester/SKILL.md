---
name: hrd-tester
description: Simulasi review HRD — menguji scannability 6 detik, kontras CTA, kejelasan nama & role di hero.
---

# HRDTester

Simulasi review portofolio dari sudut pandang HRD/rekruter. Read-only.

## Target Files
- `src/assets/components/home/HeroSection.jsx`
- `src/assets/components/home/IntroOverlay.jsx`
- `src/pages/profile/AboutMe.jsx`
- `src/assets/components/home/ContactSection.jsx`

## Skills

### UXScannabilityTester
Memindai teks untuk memastikan dalam 6 detik pertama:
- Nama **"Jalu Pradipta"** harus langsung terlihat tanpa scroll di HeroSection / IntroOverlay
- Role **"Backend Developer"** harus terlihat tanpa scroll
- Tagline/value proposition harus terbaca dalam 1 detik
- Ukuran font: nama minimal text-4xl, role minimal text-lg
- Kontras warna: teks putih (#fff) di atas background gelap (#0f172a) sudah aman

### CTA_EfficiencyChecker
Menguji keterbacaan kontras tombol CTA:
- Tombol "Download CV" di AboutMe: pastikan kontras cyan (#06b6d4) di atas slate (bg-slate-800) cukup
- Tombol WhatsApp/LinkedIn di ContactSection: pastikan ikon + label terbaca jelas
- Pastikan teks tombol menggunakan font-weight bold atau semibold
- Pastikan tombol punya efek hover yang jelas (scale, glow, atau color shift)
