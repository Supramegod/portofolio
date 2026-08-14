/**
 * Flat, dot-namespaced keys. `t()` returns the key itself when a string is
 * missing, so a gap shows up on screen as "hero.role" rather than blank.
 *
 * `en` and `id` MUST stay key-for-key identical.
 *
 * Copy rules (plan §5): no "passionate", "crafting", "seamless",
 * "solutions", "journey", "elevate". Prefer numbers, dates, and what
 * actually broke over adjectives. The Indonesian is written natively —
 * it is not a line-by-line translation of the English.
 */

export const en = {
  // --- Navigation ------------------------------------------------------
  "nav.work": "Work",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.skipToContent": "Skip to content",
  "nav.langSwitch": "Read this in Indonesian",
  "nav.menuOpen": "Open menu",
  "nav.menuClose": "Close menu",

  // --- Hero ------------------------------------------------------------
  "hero.name": "Jalu Pradipta",
  "hero.role": "Backend developer",
  "hero.location": "Surabaya, Indonesia",
  "hero.availability": "Open to work",
  "hero.lead":
    "I build backends. Mostly Laravel and Go, for systems a sales team opens every morning and complains about by lunch.",
  "hero.ctaWork": "See the work",
  "hero.ctaContact": "Get in touch",

  // --- Selected work ---------------------------------------------------
  "work.label": "Selected work",
  "work.title": "Four things I built",
  "work.note":
    "Two in depth, two in passing. Line counts and commit numbers come from the repositories, not from memory.",
  "work.readCase": "Read the case",
  "work.colYear": "Year",
  "work.colProject": "Project",
  "work.colRole": "Role",
  "work.colStack": "Stack",
  "work.viewDetail": "Detail",

  // --- About strip -----------------------------------------------------
  "about.label": "About",
  "about.title": "Short version",
  "about.body":
    "D3 in Telecommunication Engineering from PENS, Surabaya. Since 2025 I have been the main contributor on an internal ERP at SHELTER — 1,203 of its 1,305 commits, alongside six other people. Before that I mostly learned by breaking things in production and then having to explain why.",
  "about.bodyTwo":
    "I am most useful on the parts nobody volunteers for: document numbering that must not collide, wage rules that follow actual labour regulation, approval flows where a signed contract cannot quietly change.",
  "about.cv": "Download CV",
  "about.more": "More about me",

  // --- Contact ---------------------------------------------------------
  "contact.label": "Contact",
  "contact.title": "Say hello",
  "contact.lead":
    "Email is fastest. I answer within a day, usually less unless something is on fire.",
  "contact.emailLabel": "Email",
  "contact.email": "jluppradipta@gmail.com",
  "contact.githubLabel": "GitHub",
  "contact.linkedinLabel": "LinkedIn",
  "contact.instagramLabel": "Instagram",

  // --- Footer ----------------------------------------------------------
  "footer.built":
    "Built with React and Vite. Black and white on purpose — colour is a decision I did not need here.",
  "footer.rights": "All rights reserved.",
  "footer.backToTop": "Back to top",

  // --- About page ------------------------------------------------------
  "aboutPage.title": "About",
  "aboutPage.lead":
    "The longer version, for anyone who scrolled past the summary.",
  "aboutPage.stackLabel": "What I work in",
  "aboutPage.stackNote":
    "Listed by how much I have actually shipped in it, not by how it looks on a CV.",
  "aboutPage.certLabel": "Certificates",
  "aboutPage.certNote": "Verifiable copies, linked.",
  "aboutPage.certView": "View",
  "aboutPage.trackLabel": "Track record",
  "aboutPage.trackNote": "Dates are what they are.",
  "aboutPage.backHome": "Back to home",

  // --- Project detail --------------------------------------------------
  "project.back": "Back to work",
  "project.overview": "Overview",
  "project.challenge": "The problem",
  "project.solution": "What I did",
  "project.features": "In the build",
  "project.stack": "Stack",
  "project.role": "Role",
  "project.year": "Year",
  "project.live": "Live site",
  "project.repo": "Repository",
  "project.notFound": "That project does not exist.",
  "project.placeholder": "Nothing written up here yet.",

  // --- 404 -------------------------------------------------------------
  "notFound.code": "404",
  "notFound.title": "Nothing at this address",
  "notFound.body":
    "The page moved, or the link was wrong from the start. Both happen.",
  "notFound.home": "Go home",

  // --- SEO -------------------------------------------------------------
  // Single source of truth for <title> and <meta description>. Read by the
  // SEO components at runtime AND by scripts/generate-static-head.mjs at
  // build time, so social crawlers and Google see the same strings.
  "seo.home.title": "Jalu Pradipta — Backend developer, Laravel and Go",
  "seo.home.description":
    "Backend developer in Surabaya. Main contributor on an internal ERP at SHELTER — 1,203 of 1,305 commits — plus a Go and Flutter finance stack built solo. Four projects, written up with real numbers.",
  "seo.about.title": "About — Jalu Pradipta, backend developer",
  "seo.about.description":
    "The longer version: D3 in Telecommunication Engineering from PENS, the stack I actually ship in, verifiable certificates, and a dated track record.",
  "seo.project.titleSuffix": "Jalu Pradipta",
  "seo.notFound.title": "Nothing at this address — Jalu Pradipta",
  "seo.notFound.description":
    "The page moved, or the link was wrong from the start. Head back to the homepage.",
};

export const id = {
  // --- Navigation ------------------------------------------------------
  "nav.work": "Karya",
  "nav.about": "Tentang",
  "nav.contact": "Kontak",
  "nav.skipToContent": "Lewati ke konten",
  "nav.langSwitch": "Baca dalam bahasa Inggris",
  "nav.menuOpen": "Buka menu",
  "nav.menuClose": "Tutup menu",

  // --- Hero ------------------------------------------------------------
  "hero.name": "Jalu Pradipta",
  "hero.role": "Backend developer",
  "hero.location": "Surabaya, Indonesia",
  "hero.availability": "Terbuka untuk kerja",
  "hero.lead":
    "Saya bikin backend. Kebanyakan Laravel dan Go, untuk sistem yang dibuka tim sales tiap pagi dan dikeluhkan sebelum makan siang.",
  "hero.ctaWork": "Lihat karyanya",
  "hero.ctaContact": "Hubungi saya",

  // --- Selected work ---------------------------------------------------
  "work.label": "Karya terpilih",
  "work.title": "Empat yang saya bangun",
  "work.note":
    "Dua dibahas dalam, dua sekadar disebut. Jumlah baris dan commit diambil dari repo, bukan dari ingatan.",
  "work.readCase": "Baca ceritanya",
  "work.colYear": "Tahun",
  "work.colProject": "Proyek",
  "work.colRole": "Peran",
  "work.colStack": "Stack",
  "work.viewDetail": "Detail",

  // --- About strip -----------------------------------------------------
  "about.label": "Tentang",
  "about.title": "Versi singkat",
  "about.body":
    "D3 Teknik Telekomunikasi PENS, Surabaya. Sejak 2025 saya kontributor utama sebuah ERP internal di SHELTER — 1.203 dari 1.305 commit-nya, bareng enam orang lain. Sebelum itu belajarnya lebih banyak dari merusak yang sudah jalan, lalu harus menjelaskan kenapa.",
  "about.bodyTwo":
    "Saya paling kepakai di bagian yang tidak ada yang mau ambil: penomoran dokumen yang tidak boleh tabrakan, aturan pengupahan yang harus ikut regulasi asli, alur approval di mana kontrak yang sudah ditandatangani tidak bisa diam-diam berubah.",
  "about.cv": "Unduh CV",
  "about.more": "Selengkapnya tentang saya",

  // --- Contact ---------------------------------------------------------
  "contact.label": "Kontak",
  "contact.title": "Sapa saya",
  "contact.lead":
    "Email paling cepat. Saya balas dalam sehari, biasanya lebih cepat kalau tidak sedang ada yang kebakaran.",
  "contact.emailLabel": "Email",
  "contact.email": "jluppradipta@gmail.com",
  "contact.githubLabel": "GitHub",
  "contact.linkedinLabel": "LinkedIn",
  "contact.instagramLabel": "Instagram",

  // --- Footer ----------------------------------------------------------
  "footer.built":
    "Dibangun dengan React dan Vite. Hitam putih memang disengaja — warna itu keputusan yang tidak saya perlukan di sini.",
  "footer.rights": "Hak cipta dilindungi.",
  "footer.backToTop": "Kembali ke atas",

  // --- About page ------------------------------------------------------
  "aboutPage.title": "Tentang",
  "aboutPage.lead": "Versi panjangnya, buat yang tadi melewati ringkasannya.",
  "aboutPage.stackLabel": "Yang saya pakai",
  "aboutPage.stackNote":
    "Diurutkan dari yang paling banyak saya kerjakan sungguhan, bukan dari yang paling enak dilihat di CV.",
  "aboutPage.certLabel": "Sertifikat",
  "aboutPage.certNote": "Salinan yang bisa diperiksa, ada tautannya.",
  "aboutPage.certView": "Lihat",
  "aboutPage.trackLabel": "Rekam jejak",
  "aboutPage.trackNote": "Tanggalnya apa adanya.",
  "aboutPage.backHome": "Kembali ke beranda",

  // --- Project detail --------------------------------------------------
  "project.back": "Kembali ke karya",
  "project.overview": "Ringkasan",
  "project.challenge": "Masalahnya",
  "project.solution": "Yang saya kerjakan",
  "project.features": "Isi pengerjaannya",
  "project.stack": "Stack",
  "project.role": "Peran",
  "project.year": "Tahun",
  "project.live": "Situsnya",
  "project.repo": "Repositori",
  "project.notFound": "Proyek itu tidak ada.",
  "project.placeholder": "Belum ada yang ditulis di sini.",

  // --- 404 -------------------------------------------------------------
  "notFound.code": "404",
  "notFound.title": "Tidak ada apa-apa di alamat ini",
  "notFound.body":
    "Halamannya pindah, atau tautannya memang salah sejak awal. Dua-duanya sering terjadi.",
  "notFound.home": "Ke beranda",

  // --- SEO -------------------------------------------------------------
  // Sumber tunggal untuk <title> dan <meta description>. Dibaca komponen SEO
  // saat runtime DAN oleh scripts/generate-static-head.mjs saat build, supaya
  // crawler sosial dan Google melihat teks yang sama.
  "seo.home.title": "Jalu Pradipta — Backend developer, Laravel dan Go",
  "seo.home.description":
    "Backend developer di Surabaya. Kontributor utama sebuah ERP internal di SHELTER — 1.203 dari 1.305 commit — plus stack keuangan Go dan Flutter yang dikerjakan sendirian. Empat proyek, ditulis dengan angka sebenarnya.",
  "seo.about.title": "Tentang — Jalu Pradipta, backend developer",
  "seo.about.description":
    "Versi panjangnya: D3 Teknik Telekomunikasi PENS, stack yang benar-benar saya pakai, sertifikat yang bisa diperiksa, dan rekam jejak bertanggal.",
  "seo.project.titleSuffix": "Jalu Pradipta",
  "seo.notFound.title": "Tidak ada apa-apa di alamat ini — Jalu Pradipta",
  "seo.notFound.description":
    "Halamannya pindah, atau tautannya memang salah sejak awal. Kembali ke beranda.",
};
