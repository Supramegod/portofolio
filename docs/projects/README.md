# Bahan Portofolio — Indeks Project

Hasil eksplorasi folder `/home/supramegod/shelter/jalu/project` per **14 Agustus 2026**.
Semua angka di dokumen ini dibaca langsung dari repo (git log, hitung file, manifest
dependensi), bukan perkiraan.

## Daftar Project

| # | Project | Peran | Stack Inti | Skala | Berkas |
|---|---------|-------|-----------|-------|--------|
| 1 | **CAIS ERP** | Backend Engineer (kontributor utama) | Laravel 12, PHP 8.2, MySQL | 75.500 LoC · 1.305 commit | [01-cais-erp-backend.md](01-cais-erp-backend.md) |
| 2 | **Finance Tracker — API** | Solo | Go 1.25, Fiber, PostgreSQL | 10.865 LoC · 18 commit | [02-finance-tracker-backend-go.md](02-finance-tracker-backend-go.md) |
| 3 | **Finance Tracker — Web** | Solo | React 19, Redux Toolkit, Vite | 9.121 LoC · 16 commit | [03-finance-tracker-frontend-react.md](03-finance-tracker-frontend-react.md) |
| 4 | **Finance Tracker — Mobile** | Solo | Flutter, Riverpod, go_router | 10.856 LoC · 8 commit | [04-finance-tracker-mobile-flutter.md](04-finance-tracker-mobile-flutter.md) |
| 5 | **Website Portofolio** | Solo | React 18, Vite, Tailwind 4 | — | [05-website-portofolio.md](05-website-portofolio.md) |

Project 2–4 adalah **satu produk dengan tiga klien** (`PERSONAL-FINANCE-APP/`). Bisa
dipresentasikan sebagai satu case study besar ("sistem full-stack lintas platform")
atau tiga entri terpisah — lihat rekomendasi di bawah.

## Ringkasan Angka

```
Total kode yang ditulis/di-maintain : ~106.000 baris
Bahasa                              : PHP, Go, JavaScript, Dart
Total commit                        : ~1.347
Rentang aktivitas                   : Sep 2025 — Agu 2026
```

## Positioning yang Aku Sarankan

Tiga project ini menceritakan hal yang berbeda. Jangan diperlakukan sama.

**CAIS ERP — bukti skala & kerja tim.**
Ini aset terkuatmu. Domain bisnis nyata (leads → quotation → kontrak → work order),
75 ribu baris, 1.300 commit, tim 7 orang, production, CI/CD GitLab. Yang dinilai
recruiter di sini: kamu sanggup di codebase besar yang tidak kamu kendalikan sendiri.

**Personal Finance Tracker — bukti kedalaman teknis & kelengkapan.**
Satu produk, tiga platform, dikerjakan sendiri: API Go dengan sqlc + Kubernetes,
web React dengan 14 file test, app Flutter dengan clean architecture. Yang dinilai
di sini: kamu paham satu sistem dari database sampai UI mobile, dan kamu menulis test.
Fitur AI insight (Gemini) adalah pembeda yang layak ditonjolkan.

**Website Portofolio — bukti perhatian ke detail.**
Kecil, tapi SEO-nya serius (JSON-LD, sitemap ter-generate, meta statis untuk crawler
non-JS) dan i18n dua bahasa. Cocok sebagai catatan kaki, bukan headline.

## Rekomendasi Mengisi `portfolioItems`

`src/assets/components/portofolio/ProjectContent.jsx` sekarang punya `id: 1` (CAIS,
sudah terisi) dan `id: 2`, `id: 3` masih placeholder. Setiap file di folder ini
menyediakan **draf entri siap tempel** di bagian akhir.

Urutan yang aku sarankan:

- `id: 1` — CAIS ERP *(sudah ada; lihat catatan koreksi di file 01)*
- `id: 2` — Personal Finance Tracker *(satu entri gabungan, full-stack)*
- `id: 3` — Finance Tracker Mobile *(kalau mau app Flutter tampil terpisah)*

Ingat: menambah project nyata berarti juga **menambah `/project/:id` ke array URL di
`scripts/generate-sitemap.mjs`** — daftar itu di-hardcode dan placeholder sengaja
dikecualikan.

## Catatan Kejujuran & Kerahasiaan

Dua hal yang perlu kamu putuskan sebelum publish, keduanya aku uraikan detail di
file masing-masing:

1. **Klaim "dibangun dari nol" di entri CAIS tidak cocok dengan git history** —
   repo itu punya 7 kontributor. Lihat [01](01-cais-erp-backend.md#catatan-akurasi).
2. **`ARCHITECTURE.md` di repo mobile isinya milik project lain** (menyebut package
   `shelia`, fitur `cleaning_execution`). Jangan dikutip mentah-mentah.
   Lihat [04](04-finance-tracker-mobile-flutter.md#catatan-dokumen-tidak-sinkron).

CAIS adalah sistem internal perusahaan. Aku sengaja hanya mencatat arsitektur,
stack, dan nama modul — tidak ada kredensial, data pelanggan, atau logika bisnis
rahasia yang masuk ke dokumen ini. Sebelum menampilkan screenshot atau URL internal
di portofolio publik, pastikan kamu sudah dapat izin.
