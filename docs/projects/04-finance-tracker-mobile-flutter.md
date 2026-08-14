# Personal Finance Tracker — Mobile (Flutter)

**Lokasi:** `PERSONAL-FINANCE-APP/personal-finance-tracker-mobile`
**Package:** `personaltracker`
**Peran:** Solo
**Periode:** sampai 2026-07-26

---

## Ringkasan Satu Paragraf

Aplikasi mobile Personal Finance Tracker, dibangun dengan Flutter dan Riverpod,
mengonsumsi API Go yang sama dengan versi web. Terorganisir secara *feature-first*
dengan sepuluh modul fitur, navigasi go_router, penyimpanan token yang aman, dan
grafik keuangan via fl_chart.

## Angka Konkret

| Metrik | Nilai |
|---|---|
| Baris kode (`lib/`) | **10.856** |
| File `.dart` | 101 |
| Modul fitur | 10 |
| File test | 1 |
| Commit | 8 |
| Target build | Android, iOS, Web, Windows, macOS, Linux |

## Stack

| Kebutuhan | Paket |
|---|---|
| SDK | Dart ^3.10.1 |
| State management | `flutter_riverpod` 2.5 + `riverpod_annotation` |
| Navigasi | `go_router` 14.2 |
| HTTP | `dio` 5.4 |
| Penyimpanan token | `flutter_secure_storage` 9.2 |
| Preferensi | `shared_preferences` 2.3 |
| Grafik | `fl_chart` 0.68 |
| Lokalisasi | `flutter_localizations` + `intl` 0.20 |
| Codegen | `build_runner` |
| Lint | `flutter_lints` 4 |

Pilihan `flutter_secure_storage` untuk token (bukan `shared_preferences`) adalah
keputusan keamanan yang benar dan patut disebut — token disimpan di Keychain/Keystore
milik OS, bukan di preferensi biasa.

## Struktur — Feature-First

```
lib/
  app/
    di/                ← dependency injection
    router/            ← konfigurasi go_router
    main_navigation/   ← shell tab
  core/
    api/  storage/  theme/  constants/  utils/
  shared/
    widgets/           ← komponen lintas fitur
  features/
    auth/  dashboard/  transactions/  calendar/  reports/
    savings/  installments/  groups/  settings/  more/
```

Sepuluh modul fitur, masing-masing berdiri sendiri. Aturan yang dianut: `core` dan
`shared` tidak boleh mengimpor dari `features/`, dan satu fitur tidak boleh menyentuh
layer `data/` fitur lain. Ini batasan arsitektur yang jelas dan bisa kamu jelaskan
dengan percaya diri.

## Detail Menarik

- **`fix(android): tambahkan izin INTERNET agar build release bisa online`** —
  jebakan klasik Flutter: debug build punya izin INTERNET otomatis, release build
  tidak. Bug yang hanya muncul di release. Cerita debugging yang bagus dan relatable.
- **Rilis tabungan terkoordinasi** — commit `feat(savings): fitur Tabungan dengan pot,
  setoran, dan penarikan` muncul dengan judul yang sama persis di repo backend, web,
  dan mobile. Menunjukkan kamu mengelola rilis lintas-repo, bukan mengerjakan satu
  per satu tanpa rencana.
- **Multi-platform** — folder `android/`, `ios/`, `web/`, `windows/`, `macos/`,
  `linux/` semuanya ada.

## Catatan: Dokumen Tidak Sinkron

**Ini perlu kamu perbaiki sebelum repo dilihat orang lain.**

`ARCHITECTURE.md` di repo ini isinya bukan milik project ini. Buktinya:

| Yang tertulis di `ARCHITECTURE.md` | Kenyataan di repo |
|---|---|
| import `package:shelia/...` | package bernama `personaltracker` |
| fitur `cleaning_execution`, `announcement`, `attendance`, `master_cleaning_plan` | fitur sebenarnya: auth, dashboard, transactions, savings, dll |
| DI pakai **GetIt** (`registerLazySingleton`, `serviceLocator<T>()`) | `pubspec.yaml` memakai **Riverpod**, GetIt tidak ada di dependensi |
| **Bloc** (`base_form_bloc`, `presentation/bloc/`) | Riverpod, bukan Bloc |
| `@RoutePage()` — anotasi **auto_route** | memakai **go_router** |
| perintah pakai `fvm flutter ...` | tidak ada konfigurasi fvm di repo |

Dokumen itu tampaknya tersalin dari project Flutter lain. Isinya bagus sebagai
template, tapi **jangan mengutipnya di portofolio** — kalau ada reviewer teknis
membaca repo lalu menemukan dokumen arsitektur yang tidak cocok dengan kodenya,
itu merusak kredibilitas lebih parah daripada tidak punya dokumen sama sekali.

Dua pilihan: tulis ulang sesuai kondisi nyata (Riverpod + go_router + feature-first),
atau hapus. Menulis ulang lebih menguntungkan — dokumen arsitektur yang akurat adalah
nilai tambah yang jarang dimiliki project portofolio.

## Catatan: Cakupan Test

Hanya ada 1 file test untuk 101 file Dart — kontras tajam dengan sisi web yang punya
14. Kalau kamu punya waktu memperbaiki satu hal sebelum menunjukkan repo ini,
tambahkan test untuk logika `savings` dan `transactions`. Tidak perlu banyak; cukup
untuk menghilangkan kesan "mobile-nya tidak dites".

Alternatifnya, jangan tonjolkan cakupan test di entri mobile — sebutkan test di
konteks backend dan web saja. Itu jujur dan tetap kuat.

## Draf Entri `portfolioItems`

Kalau kamu ingin app Flutter tampil terpisah di `id: 3`:

```js
{
  id: 3,
  title: "Finance Tracker Mobile",
  desc: "Aplikasi Flutter dengan Riverpod & go_router — arsitektur feature-first 10 modul, penyimpanan token aman, dan grafik keuangan fl_chart.",
  longDesc:
    "Aplikasi mobile untuk Personal Finance Tracker yang mengonsumsi REST API Go yang sama dengan versi web. Dibangun dengan Flutter dan Riverpod, disusun secara feature-first dalam sepuluh modul independen — auth, dashboard, transaksi, kalender, laporan, tabungan, cicilan, kelompok, pengaturan, dan menu lainnya — dengan aturan ketat bahwa lapisan core dan shared tidak boleh bergantung pada fitur, dan antar-fitur tidak boleh saling menyentuh lapisan data. Navigasi memakai go_router, komunikasi HTTP dengan dio, token autentikasi disimpan di Keychain/Keystore lewat flutter_secure_storage, dan visualisasi keuangan memakai fl_chart. Total 10.856 baris kode pada 101 file, mendukung build Android, iOS, dan desktop.",
  challenge:
    "Menjaga satu produk tetap konsisten di web dan mobile ketika keduanya memakai paradigma state management yang sama sekali berbeda — Redux Toolkit di web, Riverpod di Flutter — sambil memastikan fitur baru dirilis serentak di ketiga repo tanpa perbedaan perilaku.",
  solution:
    "Saya menetapkan batas arsitektur yang eksplisit di sisi mobile: struktur feature-first dengan sepuluh modul yang tidak boleh saling mengimpor lapisan data, sehingga setiap fitur dapat berkembang mandiri. Rilis lintas platform dikoordinasikan per fitur — modul Tabungan misalnya, dirilis dengan perubahan yang setara di backend Go, web React, dan mobile Flutter dalam satu siklus. Token autentikasi disimpan di penyimpanan aman bawaan sistem operasi, bukan di preferensi biasa, agar sesi pengguna tidak dapat dibaca aplikasi lain.",
  category: "Mobile",
  time: "2026",
  techStack: [
    "Flutter", "Dart 3.10", "Riverpod", "go_router",
    "dio", "fl_chart", "flutter_secure_storage", "intl",
  ],
  features: [
    "Arsitektur feature-first dengan 10 modul independen",
    "State management Riverpod dengan codegen",
    "Navigasi deklaratif go_router dengan route guard",
    "Token disimpan di Keychain/Keystore lewat secure storage",
    "Grafik keuangan interaktif dengan fl_chart",
    "Lokalisasi dan format mata uang Indonesia via intl",
    "Modul tabungan dengan pot, setoran, dan penarikan",
    "Build multi-platform: Android, iOS, dan desktop",
  ],
}
```
