# Personal Finance Tracker — Web (React)

**Lokasi:** `PERSONAL-FINANCE-APP/personal-finance-tracker-frontend`
**Peran:** Solo
**Periode:** sampai 2026-07-26

---

## Ringkasan Satu Paragraf

Antarmuka web untuk Personal Finance Tracker: dashboard keuangan dengan grafik,
pencatatan transaksi, cicilan, tabungan, laporan, dan pengelolaan anggota kelompok.
Dibangun dengan React 19 dan Redux Toolkit, dites dengan Vitest + Testing Library,
dan di-deploy ke Cloudflare Workers.

## Angka Konkret

| Metrik | Nilai |
|---|---|
| Baris kode (`src/`) | **9.121** |
| File `.js`/`.jsx` | 59 |
| **File test** | **14** |
| Redux slice | 9 (8 di antaranya punya test) |
| Halaman | 7 |
| Commit | 16 |

Rasio test-ke-kode di sini yang paling sehat dari semua project. Layak disebut eksplisit.

## Stack

| Layer | Teknologi |
|---|---|
| UI | React 19.2 |
| State | Redux Toolkit 2.12 + React-Redux 9 |
| Routing | React Router 7.18 |
| HTTP | Axios |
| Grafik | Recharts 3.8 |
| Styling | Tailwind CSS 4.3 + `clsx` + `tailwind-merge` |
| Build | Vite 8 |
| Type checking | TypeScript 6 (`tsc` jalan sebelum build) |
| Testing | Vitest 4, Testing Library (React + user-event), jsdom, coverage v8 |
| Deployment | Cloudflare Workers (wrangler) |
| Container | `Dockerfile.dev` + `vite.config.docker.js` |

## Struktur

```
src/
  pages/            ← 7 halaman
  components/
    layout/         ← kerangka aplikasi
    shared/         ← komponen lintas-halaman
  store/
    slices/         ← 9 Redux slice, masing-masing berpasangan dengan file .test.js
  lib/              ← utilitas (tanggal, mata uang, klien API)
  types/            ← definisi tipe
  test/             ← setup & helper testing
```

## Halaman

| Halaman | Ukuran | Catatan |
|---|---|---|
| `MembersPage.jsx` | 17,7 KB | terbesar — manajemen anggota kelompok |
| `DashboardPage.jsx` | 13,0 KB | ringkasan + grafik Recharts |
| `SavingsPage.jsx` | 11,2 KB | pot tabungan, setoran, penarikan |
| `TransactionPage.jsx` | 6,6 KB | |
| `InstallmentPage.jsx` | 6,6 KB | cicilan |
| `ReportsPage.jsx` | 5,2 KB | |
| `LoginPage.jsx` | 4,8 KB | |

## Redux Slice

`auth`, `balance`, `transaction`, `category`, `calendar`, `group`, `installment`,
`savings`, `aiInsight` — semuanya kecuali satu punya file test berpasangan.

Ini pola yang enak diceritakan: *"setiap slice punya test-nya sendiri, jadi logika
state teruji terpisah dari komponen."* Commit `test(store): tambah tes untuk tujuh
slice Redux` menunjukkan kamu sengaja mengejar itu dalam satu sesi kerja.

## Detail yang Menunjukkan Kematangan

- **`feat(ui): input nominal dengan pemisah ribuan`** — masalah UX kecil yang sering
  diabaikan pemula. Menangani format ribuan sambil menjaga nilai numerik tetap benar
  itu lebih rumit dari kelihatannya (posisi kursor, paste, backspace).
- **`fix(categories): seragamkan pesan error dengan slice lain`** — kamu memperhatikan
  konsistensi lintas modul, bukan sekadar "yang penting jalan".
- **TypeScript dipakai untuk type checking meski file-nya `.jsx`** — `build` menjalankan
  `tsc && vite build`. Pendekatan bertahap yang pragmatis.
- **Konfigurasi Vite terpisah untuk Docker** (`vite.config.docker.js`) — sadar bahwa
  dev lokal dan dev dalam container punya kebutuhan berbeda.

## Cara Menjalankan Seluruh Sistem

`PERSONAL-FINANCE-APP/docker-compose.yml` menjalankan **lima service** dalam satu
perintah — ini sendiri layak jadi poin portofolio:

```
db       PostgreSQL 16
api      Backend Go (migrasi + seed admin otomatis)
web      Frontend React via Vite dev server (hot reload)
nginx    Reverse proxy — satu origin untuk web + api
adminer  UI database untuk debug
```

```bash
docker compose up -d --build     # semua jalan
# http://localhost:8000   aplikasi (lewat nginx, satu origin)
# http://localhost:8081   Adminer
```

Komentar di file itu menjelaskan **alasan** nginx dipakai: menyatukan origin supaya
CORS hilang sebagai kelas bug saat debugging lokal, sekaligus menyerupai susunan
produksi. Penalaran seperti ini persis yang dicari pewawancara — kamu tidak menaruh
nginx karena ikut-ikutan.

## Draf Entri `portfolioItems` — Versi Gabungan (rekomendasi)

Satu entri untuk seluruh produk. Ini yang aku sarankan untuk `id: 2`.

```js
{
  id: 2,
  title: "Personal Finance Tracker",
  desc: "Sistem keuangan full-stack lintas platform — API Go + Fiber, web React 19 + Redux, dan app Flutter, dengan AI insight berbasis Google Gemini.",
  longDesc:
    "Personal Finance Tracker adalah sistem pencatatan keuangan pribadi dan kelompok yang saya bangun sendiri dari nol untuk tiga platform sekaligus: REST API dengan Go 1.25 dan Fiber di atas PostgreSQL, aplikasi web dengan React 19 dan Redux Toolkit, serta aplikasi mobile dengan Flutter dan Riverpod. Total sekitar 31.000 baris kode. Backend memakai sqlc untuk menghasilkan layer repository yang type-safe langsung dari SQL, autentikasi JWT dengan access dan refresh token, serta manifest Kubernetes lengkap dengan liveness dan readiness probe. Fitur AI insight memanggil Google Gemini secara terjadwal untuk menganalisis pola pengeluaran, dirancang dengan feature flag, timeout, dan versioning prompt. Seluruh stack dapat dijalankan lokal dengan satu perintah Docker Compose yang mengorkestrasi PostgreSQL, API, frontend, nginx reverse proxy, dan Adminer.",
  challenge:
    "Membangun satu produk keuangan yang konsisten di tiga platform sekaligus, dengan tantangan pemodelan data yang tidak sepele: bagaimana memperlakukan tabungan. Jika menabung dicatat sebagai pengeluaran, saldo user berkurang dan laporan pengeluaran bulanan menjadi menyesatkan — padahal uangnya tidak hilang, hanya berpindah tempat. Keputusan ini memengaruhi perhitungan saldo, laporan, dan tampilan di ketiga klien.",
  solution:
    "Saya menulis dokumen desain terlebih dahulu untuk memutuskan pemodelannya, lalu mengimplementasikan tabungan sebagai transfer antar-kantong, bukan sebagai pengeluaran — sehingga saldo total tetap utuh dan laporan pengeluaran tetap jujur. Keputusan itu diterapkan konsisten di ketiga repo dalam satu rilis terkoordinasi. Di sisi rekayasa, layer repository di-generate dengan sqlc agar type-safe, logika state di frontend diuji terpisah lewat 14 file test Vitest untuk sembilan Redux slice, dan seluruh stack dibungkus Docker Compose dengan nginx sebagai satu origin agar CORS tidak menjadi sumber bug saat pengembangan.",
  category: "Full-Stack / Mobile",
  time: "2026",
  techStack: [
    "Go 1.25", "Fiber", "PostgreSQL", "sqlc",
    "React 19", "Redux Toolkit", "Vite", "Vitest",
    "Flutter", "Riverpod",
    "Docker", "Kubernetes", "Google Gemini",
  ],
  features: [
    "Tiga klien dari satu API: web React, mobile Flutter, dokumentasi Swagger",
    "Autentikasi JWT dengan access & refresh token",
    "Tabungan dimodelkan sebagai transfer, bukan pengeluaran",
    "AI insight terjadwal via Google Gemini dengan feature flag & timeout",
    "Keuangan kelompok dengan anggota dan pembagian",
    "Cicilan, kalender transaksi, dan laporan dengan grafik",
    "14 file test Vitest untuk 9 Redux slice",
    "Satu perintah Docker Compose menjalankan 5 service lengkap",
  ],
}
```

Catatan: kalau kamu pakai draf ini, jangan lupa tambahkan `"/project/2"` ke array URL
di `scripts/generate-sitemap.mjs`, dan siapkan `thumbnailUrl` di `public/images/`.
