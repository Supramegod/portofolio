# CAIS — Customer Acquisition & Integrated Services (Backend)

**Lokasi:** `/home/supramegod/shelter/jalu/project/backend/project-cais-backend`
**Jenis:** Sistem internal perusahaan (SHELTER), production
**Peran:** Backend Engineer — kontributor terbesar dalam tim 7 orang

---

## Ringkasan Satu Paragraf

CAIS adalah backend API untuk sistem manajemen bisnis multi-tenant yang menangani
seluruh siklus *leads-to-order*: dari akuisisi leads, penyusunan quotation bertingkat
dengan perhitungan biaya/margin, kontrak kerja sama (PKS) berversi, sampai surat
perintah kerja (SPK) dengan checklist di lapangan. Dibangun di atas Laravel 12 dengan
autentikasi token Sanctum dan dokumentasi OpenAPI, di-deploy lewat Docker + GitLab CI.

## Angka Konkret

| Metrik | Nilai |
|---|---|
| Baris kode (`app/`) | **75.500** |
| File PHP (`app/`) | 407 |
| Endpoint route | `routes/api.php` 602 baris + modul `spk.php` |
| Model Eloquent | 60+ |
| Migrasi database | 40 |
| File test | 74 |
| Total commit | **1.305** |
| Commit atas namamu | **1.203** (`jalu` 654 + `Jalu Pradipta` 549) ≈ **92%** |
| Kontributor | 7 orang |
| Rentang aktif | 2025-09-18 → 2026-08-13 (masih berjalan) |

## Stack

| Layer | Teknologi |
|---|---|
| Framework | Laravel 12 |
| Bahasa | PHP ^8.2 (runtime 8.2.32) |
| Database | MySQL (prod) / SQLite (dev) |
| Auth | Laravel Sanctum 4 — token-based, custom SSO |
| Dokumentasi API | L5-Swagger (anotasi `@OA`) |
| Storage | Flysystem + AWS S3 |
| Image processing | Intervention Image 3 |
| Observability | Laravel Telescope |
| Quality | Laravel Pint (formatter), PHPUnit 11 |
| Container | Docker (4 varian compose: local/dev/prod) |
| CI/CD | GitLab CI |

## Arsitektur

Layered Laravel yang disiplin — bukan controller gemuk:

```
app/
  Http/Controllers/   ← tipis, delegasi ke service
  Http/Requests/      ← validasi terpisah dari controller
  Http/Resources/     ← transformasi response API
  Services/           ← inti logika bisnis, dipecah per domain
    Quotation/  Pks/  Spk/  Leads/  Report/
    SalesRevenue/  Upah/  Numbering/  Option/  CustomerActivity/
  DTO/  Enums/  Rules/  Traits/
  Jobs/  Events/  Listeners/  Mail/   ← proses async & notifikasi
  Models/             ← 60+ entitas
```

Yang menarik untuk diceritakan saat interview:

- **Pemisahan service per domain.** `Services/Quotation/`, `Services/Pks/`,
  `Services/Spk/` masing-masing direktori sendiri — bukan satu file raksasa.
  Ini keputusan arsitektur yang bisa kamu pertahankan argumennya.
- **`Services/Numbering/`** — generator nomor dokumen. Masalah klasik yang kelihatan
  sepele tapi penuh jebakan (race condition, reset per periode, format per jenis dokumen).
- **`Services/Upah/`** — perhitungan pengupahan mengikuti regulasi Indonesia
  (UMP, UMK, UMSK, UMSP, THR, tunjangan jabatan). Domain logic yang sangat spesifik
  dan tidak bisa disalin dari tutorial mana pun.
- **`MenuPermissionService`** — RBAC granular berbasis menu, bukan sekadar role flat.

## Modul Fungsional

- **Leads Management** — tracking leads, assignment tim sales, import/export
- **Quotation Engine** — multi-step, approval workflow, revisi & duplikasi,
  export PDF, multi-site, perhitungan biaya & margin bertingkat
- **PKS (Perjanjian Kerja Sama)** — kontrak dengan version history, perbandingan
  antar versi, approval & aktivasi, jadwal kunjungan + bukti foto
- **SPK (Surat Perintah Kerja)** — work order, penugasan site, upload berkas,
  submission checklist
- **Sales Activity** — log aktivitas harian sales dengan lampiran
- **Sales Target & Revenue** — KPI, ringkasan revenue, laporan bulanan/mingguan
- **Customer Management** — grup perusahaan, tracking aktivitas, notifikasi email
- **HR Master Data** — pengupahan (UMP/UMK/UMSK/UMSP), aturan gaji, tunjangan, THR
- **Master Data** — barang, jenis perusahaan, bentuk usaha, TOP, management fee,
  supplier, training, posisi
- **Role & Permission** — RBAC berbasis menu
- **Dashboard** — approval, monitoring PKS, notifikasi
- **Announcement** — konten kaya dengan gambar & lampiran
- **Submission** — submission sales dengan sinkronisasi Google Sheet (V2)

## Sudut Cerita untuk Portofolio

Pilih satu, jangan semua — cerita yang fokus lebih kuat dari daftar fitur.

1. **"Quotation Engine multi-step dengan approval bertingkat."**
   Paling mudah dipahami orang non-teknis, dan menunjukkan kamu paham state machine,
   workflow, dan konsekuensi perubahan data di dokumen yang sudah disetujui.

2. **"Versioning kontrak (PKS) dan perbandingan antar versi."**
   Paket `sebastian/diff` ada di dependensi — artinya kamu benar-benar mengimplementasi
   diff dokumen, bukan sekadar simpan salinan. Ini detail teknis yang bagus.

3. **"Perhitungan pengupahan sesuai regulasi ketenagakerjaan Indonesia."**
   Diferensiator paling jelas. Sangat sedikit kandidat yang pernah menyentuh domain ini.

## Catatan Akurasi

Entri CAIS yang **sudah ada** di `ProjectContent.jsx` (`id: 1`) punya dua hal yang
sebaiknya kamu perbaiki sebelum ada yang mengecek:

| Klaim sekarang | Kondisi sebenarnya |
|---|---|
| "PHP 8.3" | `composer.json` → `"php": "^8.2"`, runtime terdeteksi 8.2.32 |
| "saya bangun dari nol" | Git mencatat 7 kontributor; porsimu 92% — besar, tapi bukan sendirian |
| "Chart.js" | Tidak ada di `composer.json` maupun `package.json` backend. Mungkin ada di repo frontend CAIS yang terpisah — verifikasi dulu |

Saranku untuk kalimat pengganti: *"Kontributor utama (92% dari 1.300+ commit) pada
backend ERP yang digunakan tim sales di production."* — angkanya lebih mengesankan
daripada klaim "dari nol", dan tahan diverifikasi.

Satu lagi: `app/Services/QuotationService_ori.php` masih ada di repo. Kalau itu file
sisa refactor, hapus sebelum ada reviewer eksternal melihat repo.

## Draf Entri `portfolioItems`

Perbaikan untuk `id: 1` yang sudah ada — hanya bagian yang berubah:

```js
desc: "ERP Laravel 12 | PHP 8.2 | REST API | Laravel Sanctum SSO — modul Leads, Quotation, SPK, PKS, dashboard approval & sales activity.",

longDesc:
  "CAIS (Customer Acquisition & Integrated Services) adalah backend ERP multi-tenant yang saya kembangkan sebagai kontributor utama — 1.203 dari 1.305 commit — bersama tim 7 orang. Sistem ini menangani siklus leads-to-order secara penuh: Leads Management, Quotation Engine multi-step dengan perhitungan biaya/margin dan approval bertingkat, PKS (Perjanjian Kerja Sama) dengan version history dan perbandingan antar versi, SPK (Surat Perintah Kerja) dengan penugasan site dan checklist lapangan, serta modul pengupahan yang mengikuti regulasi ketenagakerjaan Indonesia (UMP, UMK, UMSK, UMSP, THR). Dibangun dengan Laravel 12 di atas PHP 8.2, arsitektur layered dengan service per domain, autentikasi token Laravel Sanctum, dokumentasi OpenAPI via L5-Swagger, dan deployment Docker melalui GitLab CI. Total 75.500 baris kode pada 407 file, 60+ model Eloquent, dan 40 migrasi database. Sistem berjalan di production dan dipakai aktif oleh tim sales.",

techStack: [
  "Laravel 12", "PHP 8.2", "Laravel Sanctum", "MySQL",
  "RESTful API", "OpenAPI / Swagger", "Docker", "GitLab CI",
  "AWS S3", "PHPUnit",
],
```

`features` dan `challenge`/`solution` yang sekarang sudah cukup akurat — tidak perlu diubah.
