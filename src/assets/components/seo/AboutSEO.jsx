import React from "react";
import { Helmet } from "react-helmet-async";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jalu Pradipta",
  givenName: "Jalu",
  familyName: "Pradipta",
  email: "jluppradipta@gmail.com",
  url: "https://jalupradipta.pages.dev",
  image: "https://jalupradipta.pages.dev/images/foto-jalu.jpg",
  sameAs: [
    "https://github.com/supramegod",
    "https://www.linkedin.com/in/jalupradipta/",
    "https://www.instagram.com/jluppradipta_728/",
  ],
  jobTitle: "Backend Developer",
  knowsAbout: [
    "Laravel 12",
    "PHP 8.x",
    "MySQL",
    "REST API",
    "ERP System",
    "Laravel Sanctum",
    "Docker",
    "GitLab CI",
    "Chart.js",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Politeknik Elektronika Negeri Surabaya (PENS)",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Siapa Jalu Pradipta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jalu Pradipta adalah seorang Backend Developer lulusan D3 Teknik Telekomunikasi dari PENS yang berpengalaman dalam pengembangan sistem enterprise berbasis Laravel.",
      },
    },
    {
      "@type": "Question",
      name: "Apa proyek utama Jalu Pradipta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proyek utama Jalu adalah CAIS ERP System, sebuah sistem ERP berbasis Laravel 12 dengan modul Leads, Quotation, SPK, PKS, dan custom SSO menggunakan Laravel Sanctum.",
      },
    },
    {
      "@type": "Question",
      name: "Apa keahlian utama Jalu Pradipta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keahlian utama Jalu meliputi Laravel 12, Laravel Sanctum, REST API, MySQL, ERP System Design, Dashboard & Data Visualization, dan Production Deployment.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menghubungi Jalu Pradipta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jalu dapat dihubungi melalui email di jluppradipta@gmail.com, LinkedIn di jalupradipta, atau WhatsApp di +62 819-3738-5652.",
      },
    },
  ],
};

export const AboutSEO = () => (
  <Helmet>
    <title>About Jalu Pradipta — Backend Developer Laravel 12 & ERP Specialist</title>
    <link rel="canonical" href="https://jalupradipta.pages.dev/about-me" />
    <meta
      name="description"
      content="Profil lengkap Jalu Pradipta — Backend Developer Laravel 12 & ERP System, lulusan PENS. Pelajari perjalanan, keahlian backend, dan proyek CAIS ERP di sini."
    />
    <meta
      name="keywords"
      content="Jalu Pradipta, Backend Developer, Laravel 12, PHP 8.x, ERP, CAIS, PENS, Surabaya, About Jalu Pradipta, Backend Developer Indonesia"
    />
    <meta name="author" content="Jalu Pradipta" />
    <meta name="robots" content="index, follow" />

    <meta property="og:title" content="About Jalu Pradipta — Backend Developer Laravel 12 & ERP Specialist" />
    <meta
      property="og:description"
      content="Backend Developer spesialis Laravel 12, REST API, dan ERP System. Lulusan PENS dengan pengalaman produksi sistem enterprise."
    />
    <meta property="og:type" content="profile" />
    <meta
      property="og:url"
      content="https://jalupradipta.pages.dev/about-me"
    />
    <meta
      property="og:image"
      content="https://jalupradipta.pages.dev/images/foto-jalu.jpg"
    />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="500" />
    <meta property="og:image:alt" content="Foto Jalu Pradipta" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="Jalu Pradipta" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About Jalu Pradipta — Backend Developer Laravel 12 & ERP Specialist" />
    <meta
      name="twitter:description"
      content="Backend Developer spesialis Laravel 12, REST API, dan ERP System. Lulusan PENS dengan pengalaman produksi sistem enterprise."
    />
    <meta
      name="twitter:image"
      content="https://jalupradipta.pages.dev/images/foto-jalu.jpg"
    />
    <meta name="twitter:image:alt" content="Foto Jalu Pradipta" />

    <script type="application/ld+json">
      {JSON.stringify([personSchema, faqSchema])}
    </script>
  </Helmet>
);
