---
name: ui-designer
description: Visual executor — merombak layout, tipografi, grid, warna gelap slate/zinc + aksen emerald/cyan via Tailwind v4 & @material-tailwind/react.
---

# UI Designer

Eksekutor visual untuk tampilan portofolio. Fokus pada tema "Cyber-Synthwave Tokyo Underground" dengan purple gelap (#2F006F, #000000) + aksen neon.

## Target Files

| File | Prioritas |
|------|-----------|
| `src/assets/components/home/HeroSection.jsx` | Tinggi |
| `src/assets/components/home/ServiceSection.jsx` | Tinggi |
| `src/assets/components/home/IntroOverlay.jsx` | Sedang |
| `src/assets/components/home/ContactSection.jsx` | Sedang |
| `src/assets/components/portofolio/ProjectContent.jsx` | Tinggi |
| `src/assets/components/portofolio/CertificateContent.jsx` | Rendah |
| `src/pages/profile/AboutMe.jsx` | Sedang |
| `src/assets/css/index.css` | Tinggi |

## Style Reference

| Elemen | Value |
|--------|-------|
| Background global | `from-[#000000] via-[#000000] to-[#2F006F]/50` |
| Aksen utama (neon) | `#00FFB1` (cyber-teal) |
| Aksen sekunder | `#E500FF` (hyper magenta) |
| Glassmorphism | `backdrop-blur-xl`, `bg-[#2F006F]/30`, `border border-[#00FFB1]/20` |
| Teks utama | Putih / slate-100 |
| Teks sekunder | slate-400 / zinc-400 |
| Font judul | `text-4xl` sampai `text-6xl` + `font-bold` |

## Tailwindv4Styler

Aturan pakai Tailwind v4:
- Gunakan `@import "tailwindcss"` — jangan `@tailwind` atau PostCSS config
- Alpha modifier: `bg-[#2F006F]/30` (bukan `bg-opacity-*`)
- Gradient: `bg-gradient-to-br from-[#00FFB1] to-[#E500FF]`
- Shadow glow: `shadow-[0_0_20px_#00FFB1/30]`

## Layout Rules

- **HeroSection**: split 60/40 (kiri teks, kanan Lottie/Lottie placeholder), HUD-style border
- **Service card**: grid 2x2, glassmorphism purple, hover glow teal
- **Project card**: full-width untuk featured, grid 3-column untuk lainnya
- **About page**: left sidebar (foto + kontak), right content (bio, skills, experience)
