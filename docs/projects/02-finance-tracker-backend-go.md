# Personal Finance Tracker — Backend API (Go)

**Lokasi:** `PERSONAL-FINANCE-APP/personal-finance-tracker-backend`
**Peran:** Solo — arsitektur, implementasi, deployment
**Periode:** 2026-07-24 → 2026-08-09

---

## Ringkasan Satu Paragraf

REST API untuk aplikasi pencatatan keuangan pribadi & kelompok, ditulis dengan Go
dan Fiber di atas PostgreSQL. Melayani tiga klien sekaligus (web React dan app
Flutter), dengan autentikasi JWT access/refresh token, layer repository yang
di-generate dari SQL lewat sqlc, dan fitur AI insight yang memanggil Google Gemini
untuk membaca pola pengeluaran user.

## Angka Konkret

| Metrik | Nilai |
|---|---|
| Baris kode Go | **10.865** |
| File `.go` | 48 |
| Migrasi database | 12 |
| Commit | 18 |
| Deployment target | Docker + Kubernetes (`k8s/`) |

## Stack

| Layer | Teknologi |
|---|---|
| Bahasa | Go 1.25.3 |
| HTTP framework | Fiber v2.52 |
| Database | PostgreSQL, driver pgx/v5 |
| Query layer | **sqlc** — repository di-generate dari SQL, bukan ditulis tangan |
| Auth | JWT v5 (access + refresh), bcrypt via `golang.org/x/crypto` |
| Dokumentasi API | Swagger via swaggo (`make swagger`) |
| AI | Google Gemini — `gemini-2.5-flash-lite` |
| Config | `.env` via godotenv |
| Container | Docker, docker-compose (dev & prod) |
| Orkestrasi | Kubernetes — manifest lengkap di `k8s/` (Kustomize) |
| CI | GitHub Actions — build, `go vet`, test, push image |

## Arsitektur

Clean layering ala Go idiomatik, dependensi mengalir satu arah:

```
cmd/server/          ← entry point (main.go, cleanup.go, probe.go)
cmd/setup/           ← seeding
internal/
  router/            ← registrasi route
  middleware/        ← auth, CORS, rate limit
  handler/           ← parsing request, format response
  service/           ← logika bisnis
  repository/        ← akses data (sebagian di-generate sqlc)
  domain/            ← model & tipe
  config/  helper/
pkg/
  auth/  validator/  ← dapat dipakai ulang, tanpa dependensi internal
db/
  migrations/        ← 12 file SQL berurutan
  queries/           ← sumber untuk sqlc generate
k8s/                 ← manifest Kubernetes
```

**Detail yang layak diceritakan:** `probe.go` terpisah di package main — artinya kamu
menyiapkan liveness/readiness probe untuk Kubernetes secara sadar, bukan sekadar
`docker run`. Begitu juga `cleanup.go` untuk graceful shutdown. Dua hal kecil ini
membedakan "pernah pakai Docker" dari "pernah deploy sungguhan".

## Modul

| Modul | File service |
|---|---|
| Autentikasi (JWT + refresh token) | `auth_service.go` |
| Kategori transaksi | `category_service.go` |
| Transaksi pemasukan/pengeluaran | `transaction_service.go` |
| Ringkasan & saldo | `summary_service.go` |
| Kelompok / keuangan bersama | `group_service.go` |
| Cicilan | `installment_service.go` |
| **Tabungan** | `savings_service.go` (12,8 KB — modul terbesar) |
| **AI Insight** | `ai_insight_service.go` (12,9 KB) |

Dua modul terakhir punya file test sendiri (`savings_service_test.go`,
`ai_insight_service_test.go`) — sebutkan ini, karena menunjukkan kamu menulis test
untuk bagian yang paling berisiko, bukan untuk mengejar angka coverage.

## Sudut Cerita Terkuat: Modul Tabungan

Ada dokumen desain `KONSEP_TABUNGAN.md` (668 baris) di root `PERSONAL-FINANCE-APP/`
yang membuka dengan pertanyaan arsitektural yang tajam:

> Saat user menabung Rp 500.000, apakah uangnya "hilang" dari saldo?

Judul commit-nya menjawab: *"feat(savings): tambah modul tabungan sebagai transfer,
bukan pengeluaran"*. Ini **bahan cerita portofolio terbaik dari seluruh repo ini** —
sebuah keputusan pemodelan data yang punya konsekuensi nyata ke seluruh sistem, dengan
dokumen desain yang ditulis sebelum kode, lalu diimplementasi konsisten di tiga
platform (Go, React, Flutter) dalam satu rilis.

Kalau kamu hanya punya waktu menulis satu case study mendalam, tulis yang ini.

## Sudut Cerita Kedua: AI Insight Terjadwal

`feat: add scheduled AI financial insights` — integrasi Gemini yang berjalan
terjadwal untuk menganalisis pola transaksi user. Yang membuatnya kredibel secara
engineering (bukan sekadar "nempel ChatGPT"):

- Ada `AI_PROMPT_VERSION` di konfigurasi — kamu memikirkan versioning prompt
- Ada `AI_TIMEOUT` dan `AI_INSIGHTS_ENABLED` — feature flag & batas waktu
- Ada unit test untuk service-nya

Poin bicaranya: *"integrasi LLM yang diperlakukan seperti dependensi eksternal biasa —
punya timeout, feature flag, versioning, dan test."*

## Kualitas Rekayasa yang Bisa Ditonjolkan

- **sqlc** — repository di-generate dari SQL. Type-safe, tanpa ORM. Pilihan sadar
  yang bisa kamu argumentasikan (kompromi antara ORM dan SQL mentah).
- **Migrasi otomatis saat start** — tanpa langkah manual saat deploy.
- **Makefile** sebagai satu pintu perintah: build, test, coverage, docker, k8s, swagger.
- **Test bertingkat** — `test-short` (tanpa infra), `test-service` (butuh DB),
  `test-integration` (butuh DB + server, di-gate env var). Ini pemahaman test pyramid
  yang matang.
- **CI gating** — build, vet, dan test wajib hijau sebelum image di-push.

## Draf Entri `portfolioItems`

Lihat file [03](03-finance-tracker-frontend-react.md) — aku sarankan **satu entri
gabungan** untuk seluruh Personal Finance Tracker (backend + web + mobile), karena
kekuatan utamanya justru pada "satu produk, tiga platform, dikerjakan sendiri".
Draf lengkapnya ada di file itu.

Kalau kamu tetap ingin backend berdiri sendiri:

```js
{
  id: 2,
  title: "Finance Tracker API",
  desc: "REST API Go 1.25 | Fiber | PostgreSQL + sqlc | JWT | Kubernetes — melayani klien web dan mobile dengan fitur AI insight berbasis Gemini.",
  category: "Backend / API",
  time: "2026",
  techStack: [
    "Go 1.25", "Fiber", "PostgreSQL", "sqlc", "JWT",
    "Docker", "Kubernetes", "GitHub Actions", "Swagger", "Google Gemini",
  ],
  features: [
    "Autentikasi JWT dengan access & refresh token",
    "Repository type-safe di-generate dari SQL (sqlc)",
    "Modul tabungan dimodelkan sebagai transfer, bukan pengeluaran",
    "AI insight terjadwal via Google Gemini dengan feature flag & timeout",
    "Keuangan kelompok dengan keanggotaan terpisah dari pool user",
    "Migrasi database otomatis saat startup",
    "Manifest Kubernetes lengkap dengan liveness & readiness probe",
    "CI GitHub Actions: build, vet, test, push image",
  ],
}
```
