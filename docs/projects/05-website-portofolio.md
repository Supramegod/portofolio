# Website Portofolio (repo ini)

**Lokasi:** `/home/supramegod/shelter/jalu/project/portofolio`
**Peran:** Solo
**Status:** live, auto-deploy ke Cloudflare Pages saat push ke `main`

---

## Ringkasan Satu Paragraf

Situs portofolio single-page dengan React 18 dan Vite, berbahasa Indonesia dengan
toggle Inggris, dianimasikan dengan Framer Motion, dan dioptimasi untuk mesin pencari
lewat structured data JSON-LD, sitemap yang di-generate saat build, dan meta tag
statis untuk crawler yang tidak menjalankan JavaScript.

## Stack

| Layer | Teknologi |
|---|---|
| UI | React 18 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (plugin `@tailwindcss/vite`) + Material Tailwind |
| Animasi | Framer Motion, Lottie |
| Routing | React Router 7 |
| SEO | `react-helmet-async` + JSON-LD |
| Hosting | Cloudflare Pages |
| Container | Docker + Compose (dev & prod nginx) |

## Tiga Sistem Lintas-Fitur

**1. i18n dua bahasa.** `LanguageContext` + `translations.js` dengan kunci ber-namespace
titik (`hero.title1`). Kalau kunci tidak ditemukan, yang tampil adalah kuncinya sendiri
— bukan error. Pilihan bahasa disimpan di `localStorage`. Seluruh teks yang tampil ke
user wajib lewat `t()`, tidak ada string yang di-hardcode.

**2. Data project terpusat.** Array `portfolioItems` di `ProjectContent.jsx` adalah
satu-satunya sumber kebenaran; dipakai oleh grid di halaman utama sekaligus oleh
halaman detail `/project/:id`.

**3. SEO berlapis.** Satu komponen SEO per rute (`HomeSEO`, `AboutSEO`, `ProjectSEO`,
`NotFoundSEO`), masing-masing merender `<Helmet>` plus JSON-LD (`WebSite`, `Person`,
`ItemList` berisi `Event`). Di samping itu `index.html` membawa meta/OG/Twitter
**statis**, karena crawler yang tidak mengeksekusi JavaScript tidak akan pernah
melihat output Helmet.

## Detail yang Layak Disebut

Ini project kecil, tapi beberapa keputusannya lebih matang dari rata-rata situs portofolio:

- **Sitemap di-generate saat build.** `scripts/generate-sitemap.mjs` jalan sebagai
  `prebuild` dan sengaja mengecualikan project placeholder — sitemap tidak pernah
  mengiklankan halaman kosong.
- **`public/_headers` memaksa `Content-Type: application/xml`** pada sitemap, dan
  `public/_redirects` punya aturan passthrough eksplisit agar splat SPA
  (`/* → /index.html`) tidak menelan `/sitemap.xml`. Bug halus yang sudah kamu tangani.
- **Field wajib Schema.org dipenuhi** — entri `Event` menyertakan `startDate`,
  `location`, `organizer`, `performer`, `image` supaya lolos validasi Google Search
  Console.
- **Docker lokal** — `docker compose up dev` untuk Vite + HMR di port 3000,
  `docker compose up prod` untuk build produksi via nginx di port 8080, dengan
  konfigurasi nginx yang mencerminkan aturan Cloudflare agar perilaku lokal sama
  dengan produksi.

## Cara Memakainya di Portofolio

Jangan jadikan ini entri utama — ukurannya tidak sebanding dengan CAIS atau Finance
Tracker. Tapi ada satu kalimat yang layak masuk ke halaman "About":

> Situs ini sendiri dibangun dengan React dan Vite, dengan structured data JSON-LD,
> sitemap yang di-generate otomatis saat build, dan dukungan dua bahasa.

Fungsinya bukan memamerkan project, tapi menunjukkan bahwa perhatian ke detail itu
konsisten — sampai ke situs yang sedang dibaca orang tersebut.

## Yang Perlu Dikerjakan Selanjutnya

Berdasarkan kondisi repo per 14 Agustus 2026:

1. **Isi slot placeholder.** `id: 2` dan `id: 3` masih "Proyek Lainnya — segera
   diupdate". Draf pengisinya sudah siap di file
   [03](03-finance-tracker-frontend-react.md) dan [04](04-finance-tracker-mobile-flutter.md).
2. **Perbaiki klaim di entri CAIS.** Detailnya di [01](01-cais-erp-backend.md#catatan-akurasi).
3. **Tambahkan URL project baru ke `scripts/generate-sitemap.mjs`.** Daftarnya
   di-hardcode; project baru tidak akan muncul di sitemap kalau lupa.
4. **Siapkan `thumbnailUrl`.** Entri baru butuh gambar di `public/images/`; sekarang
   hanya `project-cais.jpg` yang dirujuk.
5. **Sinkronkan `index.html` dan komponen SEO** kalau judul/deskripsi situs berubah —
   keduanya menyimpan salinan sendiri dan bisa melenceng satu sama lain.
