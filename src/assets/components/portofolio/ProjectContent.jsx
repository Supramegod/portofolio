/**
 * Single source of truth for projects.
 *
 * Consumed by:
 *   - src/assets/components/home/WorkSection.jsx  (homepage list)
 *   - src/pages/portofolio/Portofolio.jsx         (detail page)
 *   - scripts/generate-sitemap.mjs is NOT wired to this — remember to add
 *     any new `/project/:id` URL there by hand.
 *
 * Language-specific prose is nested under `en` / `id` so no display string
 * is hardcoded in a single language (AGENTS.md). Everything outside those
 * two objects is language-neutral: numbers, URLs, stack names.
 *
 * `featured: true` renders as a full-bleed block; everything else renders
 * as a hairline table row. Mixing the two formats is deliberate — a uniform
 * card grid is the fastest way to look generated (plan §1).
 *
 * Facts here are drawn from docs/projects/*.md, which were read straight
 * off the repositories. Do not inflate them.
 */

export const portfolioItems = [
  {
    id: 1,
    featured: true,
    year: "2025—2026",
    projectUrl: "https://cais2.shelterapp2.co.id/login",
    githubUrl: "https://github.com/Supramegod/project-cais-backend",
    thumbnailUrl: "/images/project-cais.jpg",
    techStack: [
      "Laravel 12",
      "PHP 8.2",
      "MySQL",
      "Laravel Sanctum",
      "OpenAPI",
      "Docker",
      "GitLab CI",
      "AWS S3",
    ],
    copy: {
    en: {
      title: "CAIS ERP",
      role: "Lead backend",
      category: "Backend / ERP",
      desc: "An internal ERP covering the whole leads-to-order cycle. 75,500 lines, 1,203 of 1,305 commits mine, in production with the sales team.",
      longDesc:
        "CAIS is a multi-tenant business system at SHELTER that follows a deal from first contact to signed work order. I am its main contributor — 1,203 of 1,305 commits, working alongside six other people — across 407 PHP files and 75,500 lines. It covers leads and sales assignment, a multi-step quotation engine with tiered cost and margin calculation, cooperation agreements (PKS) with version history and version-to-version comparison, work orders (SPK) with site assignment and field checklists, plus a wage module that follows Indonesian labour regulation: UMP, UMK, UMSK, UMSP, THR. Laravel 12 on PHP 8.2, layered so business logic lives in per-domain services rather than in controllers, token auth via Sanctum, OpenAPI docs, and Docker images shipped through GitLab CI.",
      challenge:
        "A deal passes through six teams and four document types before anyone gets paid, and each handoff was a spreadsheet. Worse, the documents are legally binding: once a quotation becomes a signed agreement, its numbers cannot quietly change, and every revision has to stay auditable. Wage figures inside those documents follow regional minimum-wage rules that change annually and differ per city.",
      solution:
        "I split business logic into per-domain services — Quotation, Pks, Spk, Leads, Report, Upah — so each document type owns its own rules instead of sharing one god class. Agreements are versioned and diffed with sebastian/diff, so a reviewer sees exactly what changed between revision three and four rather than trusting a changelog. Document numbering got its own service because sequence collisions under concurrent submission were the first bug class to appear. Wage calculation reads regional rules from master data rather than constants, so a yearly minimum-wage update is a data change, not a deploy.",
      features: [
        "Quotation engine: multi-step, tiered approval, revision and duplication",
        "Agreement versioning with true version-to-version diff",
        "Work orders with site assignment, uploads, and field checklists",
        "Wage rules following UMP, UMK, UMSK, UMSP, and THR regulation",
        "Document numbering service built for concurrent submission",
        "Menu-level RBAC rather than flat roles",
        "60+ Eloquent models, 40 migrations, 74 test files",
        "Docker images shipped through GitLab CI",
      ],
    },
    id: {
      title: "CAIS ERP",
      role: "Backend utama",
      category: "Backend / ERP",
      desc: "ERP internal yang menutup seluruh siklus leads-to-order. 75.500 baris, 1.203 dari 1.305 commit punya saya, jalan di production dipakai tim sales.",
      longDesc:
        "CAIS adalah sistem bisnis multi-tenant di SHELTER yang mengikuti satu deal dari kontak pertama sampai surat perintah kerja diterbitkan. Saya kontributor utamanya — 1.203 dari 1.305 commit, bareng enam orang lain — di 407 file PHP dan 75.500 baris. Cakupannya: leads dan penugasan sales, quotation engine multi-step dengan perhitungan biaya dan margin bertingkat, PKS dengan version history dan pembandingan antar versi, SPK dengan penugasan site dan checklist lapangan, plus modul pengupahan yang mengikuti regulasi ketenagakerjaan Indonesia: UMP, UMK, UMSK, UMSP, THR. Laravel 12 di atas PHP 8.2, disusun berlapis supaya logika bisnis tinggal di service per domain, bukan menumpuk di controller. Autentikasi token pakai Sanctum, dokumentasi OpenAPI, image Docker dikirim lewat GitLab CI.",
      challenge:
        "Satu deal melewati enam tim dan empat jenis dokumen sebelum ada uang masuk, dan tiap perpindahan tangan dulunya spreadsheet. Lebih rumitnya, dokumen-dokumen itu mengikat secara hukum: begitu quotation jadi perjanjian yang ditandatangani, angkanya tidak boleh diam-diam berubah, dan tiap revisi harus tetap bisa diaudit. Angka upah di dalam dokumen itu mengikuti aturan upah minimum yang berubah tiap tahun dan beda tiap kota.",
      solution:
        "Logika bisnis saya pecah jadi service per domain — Quotation, Pks, Spk, Leads, Report, Upah — supaya tiap jenis dokumen memegang aturannya sendiri, bukan berbagi satu class raksasa. Perjanjian diberi versi dan dibandingkan pakai sebastian/diff, jadi pemeriksa melihat persis apa yang berubah antara revisi tiga dan empat, bukan percaya pada catatan perubahan. Penomoran dokumen dibuatkan service sendiri karena tabrakan nomor saat pengajuan bersamaan adalah kelas bug yang pertama muncul. Perhitungan upah membaca aturan daerah dari master data, bukan dari konstanta, sehingga pembaruan upah minimum tahunan cukup ubah data, tidak perlu deploy.",
      features: [
        "Quotation engine: multi-step, approval bertingkat, revisi dan duplikasi",
        "Versioning perjanjian dengan pembandingan antar versi yang sesungguhnya",
        "SPK dengan penugasan site, unggahan berkas, dan checklist lapangan",
        "Aturan upah mengikuti regulasi UMP, UMK, UMSK, UMSP, dan THR",
        "Service penomoran dokumen yang tahan pengajuan bersamaan",
        "RBAC per menu, bukan sekadar role datar",
        "60+ model Eloquent, 40 migrasi, 74 file test",
        "Image Docker dikirim lewat GitLab CI",
      ],
    },
    },
  },

  {
    id: 2,
    featured: true,
    year: "2026",
    projectUrl: "#",
    githubUrl: "https://github.com/Supramegod",
    thumbnailUrl: "/images/project-finance.jpg",
    techStack: [
      "Go 1.25",
      "Fiber",
      "PostgreSQL",
      "sqlc",
      "React 19",
      "Redux Toolkit",
      "Flutter",
      "Kubernetes",
      "Google Gemini",
    ],
    copy: {
    en: {
      title: "Personal Finance Tracker",
      role: "Solo, all three platforms",
      category: "Full-stack",
      desc: "One product, three clients: a Go API, a React web app, and a Flutter app. ~31,000 lines, built alone.",
      longDesc:
        "A personal and group finance tracker I built end to end for three platforms: a REST API in Go 1.25 with Fiber over PostgreSQL, a web client in React 19 with Redux Toolkit, and a mobile app in Flutter with Riverpod. Around 31,000 lines total. The repository layer is generated from SQL with sqlc rather than hand-written or hidden behind an ORM, auth uses JWT access and refresh tokens, and the Kubernetes manifests include real liveness and readiness probes. An AI insight feature calls Google Gemini on a schedule to read spending patterns — built with a feature flag, a timeout, and a versioned prompt, and covered by unit tests. The whole stack comes up with one Docker Compose command: PostgreSQL, the API, the Vite dev server, an nginx reverse proxy, and Adminer.",
      challenge:
        "The hard part was not the code, it was one modelling question: when someone puts 500,000 rupiah into savings, does that money leave their balance? Book it as an expense and the monthly spending report becomes a lie — the money did not go anywhere, it moved. Book it wrong and every balance, every report, and three separate UIs inherit the mistake.",
      solution:
        "I wrote the design document before the code and settled the question first: savings are a transfer between pockets, not an expense. Total balance stays whole and the spending report stays honest. That single decision then shipped as one coordinated release across all three repositories, with matching commits in Go, React, and Flutter. On the engineering side, sqlc keeps the data layer type-safe, the frontend's nine Redux slices are tested separately in fourteen Vitest files, and nginx fronts everything on one origin during development so CORS never becomes a class of bug worth debugging.",
      features: [
        "One API serving a React web client and a Flutter mobile app",
        "Savings modelled as a transfer, so balances stay truthful",
        "Type-safe repository layer generated from SQL with sqlc",
        "Scheduled Gemini insights with feature flag, timeout, prompt version",
        "JWT access and refresh tokens, bcrypt password hashing",
        "Group finances, instalments, calendar, and charted reports",
        "14 Vitest files covering 9 Redux slices",
        "Five-service local stack in one Docker Compose command",
      ],
    },
    id: {
      title: "Personal Finance Tracker",
      role: "Sendiri, ketiga platform",
      category: "Full-stack",
      desc: "Satu produk, tiga klien: API Go, web React, dan app Flutter. ~31.000 baris, dikerjakan sendirian.",
      longDesc:
        "Pencatat keuangan pribadi dan kelompok yang saya bangun utuh untuk tiga platform: REST API dengan Go 1.25 dan Fiber di atas PostgreSQL, klien web dengan React 19 dan Redux Toolkit, serta app mobile dengan Flutter dan Riverpod. Totalnya sekitar 31.000 baris. Layer repository-nya di-generate dari SQL pakai sqlc, bukan ditulis tangan dan bukan disembunyikan di balik ORM. Autentikasi memakai JWT access dan refresh token, dan manifest Kubernetes-nya punya liveness serta readiness probe yang sungguhan. Fitur AI insight memanggil Google Gemini secara terjadwal untuk membaca pola pengeluaran — dibuat dengan feature flag, timeout, dan prompt yang diberi versi, serta ditutup unit test. Seluruh stack menyala dengan satu perintah Docker Compose: PostgreSQL, API, Vite dev server, reverse proxy nginx, dan Adminer.",
      challenge:
        "Bagian sulitnya bukan kodenya, tapi satu pertanyaan pemodelan: waktu seseorang menabung Rp 500.000, apakah uang itu keluar dari saldonya? Kalau dicatat sebagai pengeluaran, laporan pengeluaran bulanan jadi bohong — uangnya tidak pergi ke mana-mana, cuma pindah tempat. Salah mencatatnya, dan setiap saldo, setiap laporan, dan tiga antarmuka berbeda mewarisi kesalahan itu.",
      solution:
        "Saya menulis dokumen desainnya lebih dulu dan menuntaskan pertanyaan itu di awal: tabungan adalah transfer antar kantong, bukan pengeluaran. Saldo total tetap utuh dan laporan pengeluaran tetap jujur. Keputusan tunggal itu lalu dirilis terkoordinasi di ketiga repo, dengan commit yang bersesuaian di Go, React, dan Flutter. Di sisi rekayasa, sqlc menjaga layer data tetap type-safe, sembilan Redux slice di frontend diuji terpisah lewat empat belas file Vitest, dan nginx menyatukan semuanya jadi satu origin saat pengembangan supaya CORS tidak pernah jadi kelas bug yang perlu ditelusuri.",
      features: [
        "Satu API melayani klien web React dan app mobile Flutter",
        "Tabungan dimodelkan sebagai transfer, jadi saldo tetap jujur",
        "Layer repository type-safe di-generate dari SQL pakai sqlc",
        "Insight Gemini terjadwal dengan feature flag, timeout, versi prompt",
        "JWT access dan refresh token, hashing password bcrypt",
        "Keuangan kelompok, cicilan, kalender, dan laporan bergrafik",
        "14 file Vitest menutupi 9 Redux slice",
        "Stack lokal lima service dalam satu perintah Docker Compose",
      ],
    },
    },
  },

  {
    id: 3,
    featured: false,
    year: "2026",
    projectUrl: "#",
    githubUrl: "https://github.com/Supramegod",
    thumbnailUrl: "",
    techStack: ["Flutter", "Dart 3.10", "Riverpod", "go_router", "dio", "fl_chart"],
    copy: {
    en: {
      title: "Finance Tracker Mobile",
      role: "Solo",
      category: "Mobile",
      desc: "The Flutter client for the tracker above — ten feature modules, 10,856 lines, tokens in the OS keystore.",
      longDesc:
        "The mobile client for Personal Finance Tracker, consuming the same Go API as the web app. 10,856 lines across 101 Dart files, organised feature-first into ten independent modules: auth, dashboard, transactions, calendar, reports, savings, instalments, groups, settings, and more. The boundaries are enforced rather than aspirational — core and shared never import from features, and no feature reaches into another feature's data layer. Navigation is go_router, HTTP is dio, charts are fl_chart, and auth tokens live in the OS keychain or keystore via flutter_secure_storage rather than in plain preferences.",
      challenge:
        "Keeping one product consistent across web and mobile when the two use entirely different state paradigms — Redux Toolkit on one side, Riverpod on the other — while still releasing features to both at the same time without behavioural drift.",
      solution:
        "I set explicit architectural boundaries on the mobile side so each of the ten features could move independently, then coordinated releases per feature rather than per platform: the savings module shipped with equivalent changes in Go, React, and Flutter in a single cycle. One release bug worth remembering — the app worked in debug and failed in release, because Android grants the INTERNET permission automatically in debug builds but not in release ones.",
      features: [
        "Feature-first architecture with ten enforced module boundaries",
        "Riverpod state management with code generation",
        "Declarative go_router navigation with route guards",
        "Tokens stored in the OS keychain or keystore, not preferences",
        "Interactive charts with fl_chart",
        "Indonesian currency and date formatting via intl",
        "Builds for Android, iOS, and desktop targets",
      ],
    },
    id: {
      title: "Finance Tracker Mobile",
      role: "Sendiri",
      category: "Mobile",
      desc: "Klien Flutter untuk tracker di atas — sepuluh modul fitur, 10.856 baris, token disimpan di keystore OS.",
      longDesc:
        "Klien mobile Personal Finance Tracker, memakai API Go yang sama dengan versi web. 10.856 baris di 101 file Dart, disusun feature-first jadi sepuluh modul mandiri: auth, dashboard, transaksi, kalender, laporan, tabungan, cicilan, kelompok, pengaturan, dan lainnya. Batasnya ditegakkan, bukan cuma dicita-citakan — core dan shared tidak pernah mengimpor dari features, dan tidak ada fitur yang menjangkau layer data fitur lain. Navigasi pakai go_router, HTTP pakai dio, grafik pakai fl_chart, dan token autentikasi disimpan di keychain atau keystore OS lewat flutter_secure_storage, bukan di preferensi biasa.",
      challenge:
        "Menjaga satu produk tetap konsisten di web dan mobile padahal keduanya memakai paradigma state yang sama sekali berbeda — Redux Toolkit di satu sisi, Riverpod di sisi lain — sambil tetap merilis fitur ke keduanya serentak tanpa perilaku yang melenceng.",
      solution:
        "Saya menetapkan batas arsitektur yang tegas di sisi mobile supaya kesepuluh fitur bisa bergerak mandiri, lalu mengoordinasikan rilis per fitur, bukan per platform: modul tabungan dirilis dengan perubahan yang setara di Go, React, dan Flutter dalam satu siklus. Ada satu bug rilis yang layak diingat — app-nya jalan di debug tapi gagal di release, karena Android memberi izin INTERNET otomatis di build debug tapi tidak di build release.",
      features: [
        "Arsitektur feature-first dengan sepuluh batas modul yang ditegakkan",
        "State management Riverpod dengan code generation",
        "Navigasi deklaratif go_router dengan route guard",
        "Token disimpan di keychain atau keystore OS, bukan di preferensi",
        "Grafik interaktif dengan fl_chart",
        "Format mata uang dan tanggal Indonesia lewat intl",
        "Build untuk Android, iOS, dan target desktop",
      ],
    },
    },
  },

  {
    id: 4,
    featured: false,
    year: "2026",
    projectUrl: "https://jalupradipta.pages.dev",
    githubUrl: "https://github.com/Supramegod",
    thumbnailUrl: "",
    techStack: ["React 18", "Vite 7", "Tailwind 4", "Framer Motion", "Cloudflare Pages"],
    copy: {
    en: {
      title: "This site",
      role: "Solo",
      category: "Frontend",
      desc: "Monochrome, bilingual, and prerendered enough that a link preview actually shows the right page.",
      longDesc:
        "The site you are reading. React 18 on Vite 7 with Tailwind v4, deployed to Cloudflare Pages. Two languages on separate URL prefixes with hreflang alternates, a hand-set type scale rather than a generated ratio, and a grain overlay doing the work colour usually does. The sitemap is generated at build time and deliberately excludes anything unfinished. A post-build script writes a static head per route so link previews on WhatsApp and LinkedIn show the correct title and image — those crawlers do not run JavaScript, so runtime meta tags never reach them.",
      challenge:
        "A single-page app serves one HTML shell to every URL. Google renders JavaScript and copes, but social crawlers do not: every shared link showed the same generic preview card, and with two language prefixes there were suddenly six URLs all returning identical HTML to anything that could not execute JS.",
      solution:
        "Rather than adopt a prerender plugin — the ones commonly recommended were last released in 2022 — I wrote a post-build script that reads the built HTML and writes one copy per route with that route's title, meta, Open Graph tags, canonical, hreflang, and JSON-LD already inlined. It imports the translation file directly, so titles have exactly one source of truth. Zero new dependencies, and the body still hydrates as the same app.",
      features: [
        "Two languages on separate URL prefixes with hreflang and canonical",
        "Hand-set type scale: 13 / 15 / 17 / 21 / 28 / 44 / 76",
        "Grain overlay and hairline rules instead of shadows",
        "Sitemap generated at build, unfinished work excluded",
        "Per-route static head so link previews resolve correctly",
        "JSON-LD structured data validated in Search Console",
        "Local Docker parity with the Cloudflare rules",
      ],
    },
    id: {
      title: "Situs ini",
      role: "Sendiri",
      category: "Frontend",
      desc: "Monokrom, dua bahasa, dan cukup ter-prerender supaya preview tautan menampilkan halaman yang benar.",
      longDesc:
        "Situs yang sedang kamu baca. React 18 di atas Vite 7 dengan Tailwind v4, di-deploy ke Cloudflare Pages. Dua bahasa di prefix URL terpisah dengan hreflang alternates, skala tipe yang disusun tangan alih-alih hasil rasio, dan overlay grain yang mengerjakan tugas yang biasanya diambil warna. Sitemap di-generate saat build dan sengaja mengecualikan apa pun yang belum selesai. Skrip pasca-build menulis head statis per rute supaya preview tautan di WhatsApp dan LinkedIn menampilkan judul dan gambar yang benar — crawler itu tidak menjalankan JavaScript, jadi meta tag runtime tidak pernah sampai ke mereka.",
      challenge:
        "Aplikasi satu halaman menyajikan satu kerangka HTML untuk semua URL. Google merender JavaScript dan bisa mengatasinya, tapi crawler sosial tidak: tiap tautan yang dibagikan menampilkan kartu preview generik yang sama, dan dengan dua prefix bahasa tiba-tiba ada enam URL yang semuanya mengembalikan HTML identik ke apa pun yang tak bisa mengeksekusi JS.",
      solution:
        "Alih-alih memakai plugin prerender — yang biasa disarankan terakhir dirilis tahun 2022 — saya menulis skrip pasca-build yang membaca HTML hasil build lalu menulis satu salinan per rute dengan judul, meta, tag Open Graph, canonical, hreflang, dan JSON-LD rute itu sudah tertanam. Skrip itu mengimpor file terjemahan langsung, jadi judul punya tepat satu sumber kebenaran. Nol dependensi baru, dan body-nya tetap hydrate sebagai aplikasi yang sama.",
      features: [
        "Dua bahasa di prefix URL terpisah dengan hreflang dan canonical",
        "Skala tipe susun tangan: 13 / 15 / 17 / 21 / 28 / 44 / 76",
        "Overlay grain dan garis hairline menggantikan shadow",
        "Sitemap di-generate saat build, karya belum selesai dikecualikan",
        "Head statis per rute supaya preview tautan tepat sasaran",
        "Structured data JSON-LD tervalidasi di Search Console",
        "Docker lokal yang setara dengan aturan Cloudflare",
      ],
    },
    },
  },
];

/**
 * Flattens one entry for the active language.
 * Falls back to English prose so a missing translation renders real text
 * rather than `undefined`.
 */
export const resolveProject = (item, lang) => {
  if (!item) return null;
  // Prose lives under `copy`, NOT as top-level `en`/`id` keys — a top-level
  // `id` locale key would collide with the numeric `id` in the same object
  // literal, and the later key wins, which silently turned every
  // `item.id` into a translation object and 404'd every detail page.
  const copy = item.copy?.[lang] ?? item.copy?.en ?? {};
  const { copy: _copy, ...rest } = item;
  return { ...rest, ...copy };
};

export const featuredProjects = portfolioItems.filter((p) => p.featured);
export const listedProjects = portfolioItems.filter((p) => !p.featured);
