

```markdown
# JALU_PORTFOLIO_FROM_BAGUS.md – Ubah Portofolio Bagus → Jalu + SEO & FAQ

## 🎯 Tujuan

Repurpose template portofolio milik **Bagus Dwi Putra Adiyono** menjadi portofolio **Jalu Pradipta** dengan:
- Semua teks, data proyek, sertifikat, artikel, tech stack diganti dengan data Jalu (atau placeholder jika belum ada).
- Tetap mempertahankan semua fitur: Intro Overlay, Hero Lottie, Services, Portfolio Tabs (Projects, Certificates, Articles, TechStack), Contact, Navbar scroll-aware, animasi Framer Motion.
- Menambahkan **SEO** (react-helmet-async, meta tag per halaman, robots.txt, sitemap.xml).
- Menambahkan **FAQ schema** (JSON-LD) di halaman About.

Patuhi aturan teknis di `AGENTS.md` (port 3000, Tailwind v4, Material Tailwind, Vite, React Router, dll).

---

## 👤 Data Jalu Pradipta (Gunakan persis)

**Nama:** Jalu Pradipta  
**Pendidikan:** Lulusan D3 Teknik Telekomunikasi, PENS (Politeknik Elektronika Negeri Surabaya)  
**Minat:** Teknologi, desain sistem, otomatisasi cerdas, integrasi hardware-software  
**Peran terbaru:** Backend Developer untuk CAIS (ERP Laravel 12)  
**Kepribadian:** Praktis, kreatif, kolaboratif, adaptif, santai

**Skill (Tech Stack):**  
- Laravel 12, Laravel Sanctum (SSO), MySQL, REST API  
- Dashboard & Data Visualization, ERP System Design  
- Production Deployment, Git, Postman  
- (Tambahkan jika menguasai: React, Tailwind, Node.js? Jika tidak, tulis yang dikuasai saja. Sementara ini pakai yang disebut.)

**Kontak & Sosial (isi sesuai yang punya Jalu, jika belum ada pakai placeholder):**  
- Email: jluppradipta@gmail.com
- LinkedIn:jalupradipta 
- GitHub: supramegod 
- WhatsApp: +62 821-3157-5147
- Instagram: jluppradipta_728

**Proyek Unggulan (wajib ditampilkan di tab Projects):**  
- **CAIS ERP System**  
  Deskripsi: ERP Laravel 12 dengan modul Leads, Quotation, SPK, PKS, custom SSO (Laravel Sanctum), dashboard approval & sales activity. lebih lengkap lihat `CAIS_README.md`
  Teknologi: Laravel 12, Sanctum, MySQL, Chart.js  
  Gambar: `/images/project-cais.jpg` (placeholder)  
  Link demo/repo: # (kosong)

**Sertifikat:** Karena user belum memberi data, kosongkan tab Certificates dengan pesan "Segera hadir" atau tampilkan 1 contoh placeholder.

**Artikel:** Juga kosongkan atau placeholder.

---

## 📁 Struktur yang Harus Diedit (berdasarkan template Bagus)

src/pages/
  Homepage.jsx          – ubah judul meta, mungkin teks statis
  profile/AboutMe.jsx   – ganti dengan teks tentang Jalu (paragraf panjang dari data)
  portofolio/Portofolio.jsx – halaman detail proyek (pastikan project 1 = CAIS)

src/assets/components/
  home/HeroSection.jsx       – ganti nama, tagline, sosial link
  home/IntroOverlay.jsx      – ganti teks typewriter (jika ada)
  home/ServiceSection.jsx    – mungkin biarkan (generic), atau sesuaikan layanan dengan skill Jalu (Backend Dev, API Integration, dll)
  home/ContactSection.jsx    – ganti 6 kontak dengan data Jalu
  portofolio/ProjectContent.jsx – **sangat penting** – array data proyek (6 proyek). Hanya proyek CAIS yang diisi, sisanya placeholder.
  portofolio/CertificateContent.jsx – kosongkan atau placeholder
  portofolio/ArticleContent.jsx – kosongkan
  portofolio/TechStackContent.jsx – ganti dengan skill Jalu (Laravel, MySQL, dll) – 25+ item? Isi dengan yang relevan, ulangi jika perlu.
  navbar/Footer.jsx – ganti copyright dll.


## 🚀 TUGAS URUT UNTUK AI

### Tugas 1 – Ganti semua teks personal Bagus → Jalu

Gunakan `grep` atau cari manual di file-file di atas:
- Nama "Bagus Dwi Putra Adiyono" → "Jalu Pradipta"
- Email, sosial, nomor WA, LinkedIn, GitHub, Instagram → ganti dengan data Jalu (jika tidak ada, kosongkan atau tulis "kontak akan diupdate")
- Teks "S1 Sistem Informasi UPN" → ganti dengan "Lulusan Teknik Telekomunikasi PENS"
- Paragraf "Tentang Saya" di `AboutMe.jsx` → gunakan paragraf panjang dari data Jalu (yang diberikan di file ini atau di PORTFOLIO_COMPLETE_TASK.md)
- Statistik (14+ proyek, 13 sertifikat, dll) bisa diubah sesuai (misal: 1+ proyek unggulan, 0 sertifikat sementara, dll) atau biarkan dengan catatan.

### Tugas 2 – Ganti data Proyek di `ProjectContent.jsx`

File ini berisi array `projects` (6 item). Ganti menjadi:
- Proyek 1: CAIS ERP System (id:1, dengan detail di atas)
- Proyek 2-6: Proyek placeholder dengan judul "Proyek Lainnya", deskripsi "Segera diupdate", gambar placeholder.

Pastikan halaman detail proyek (`Portofolio.jsx`) bisa membaca id dan menampilkan konten dengan benar.

### Tugas 3 – Ganti Tech Stack di `TechStackContent.jsx`

Buat array skill Jalu yang disebutkan, bisa ditambah jika perlu (misal: Git, Postman, REST API). Jumlah minimal 6-10 item. Tidak perlu 25+, bisa diulang atau ditambah skill serupa.

### Tugas 4 – Kosongkan Sertifikat dan Artikel (atau beri pesan)

Di `CertificateContent.jsx` dan `ArticleContent.jsx`, set array kosong atau tampilkan pesan: "Belum ada data, akan segera diupdate".

### Tugas 5 – Sesuaikan ServiceSection (opsional)

Biarkan 4 layanan generic (Full-Stack, Frontend, API Integration, Database Design) karena Jalu juga bisa melakukan itu. Tapi jika ingin spesifik, ubah menjadi: Backend Development, API Integration, Database Design, System Automation.

### Tugas 6 – Pasang SEO (sama seperti di PORTFOLIO_COMPLETE_TASK.md)

- Install `react-helmet-async`
- Update `main.jsx` dengan HelmetProvider
- Tambahkan `<Helmet>` dengan meta tags di `Homepage.jsx`, `AboutMe.jsx`, dan `Portofolio.jsx` (untuk proyek CAIS).
- Buat `public/robots.txt` dan `public/sitemap.xml` (isi sitemap: /, /about-me, /project/1)

### Tugas 7 – Tambahkan FAQ schema JSON-LD

Di `AboutMe.jsx`, setelah Helmet, tambahkan script FAQ schema (salin dari PORTFOLIO_COMPLETE_TASK.md, sesuaikan dengan data Jalu).

### Tugas 8 – Uji coba dan laporan

Jalankan `npm run dev`, pastikan tidak ada error. Cek semua halaman. Beri laporan file yang diubah dan instruksi untuk user (tambah foto profil di `src/assets/img/` dan gambar proyek).

---

## ⚠️ Aturan Penting

- Jangan hapus atau pindah file komponen, hanya edit konten.
- Jangan ubah konfigurasi Vite, Tailwind, atau vercel.json.
- Gunakan Prettier setelah edit (`npx prettier --write src/`).
- Jika ada error karena komponen mengimpor file gambar yang tidak ada, buat placeholder atau beri instruksi ke user.

---

## ✅ Output yang diharapkan

Setelah AI selesai:
- Website berjalan di localhost:3000
- Semua teks milik Jalu, bukan Bagus
- Halaman about menampilkan paragraf lengkap Jalu
- Tab Projects menampilkan CAIS ERP dan placeholder lain
- Tab Tech Stack menampilkan skill Jalu
- Tab Certificates & Articles kosong atau placeholder
- Meta tags dan FAQ schema terpasang
- Sitemap & robots.txt ada

User tinggal menambahkan gambar dan data tambahan.

---
