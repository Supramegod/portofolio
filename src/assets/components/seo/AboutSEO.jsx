import React from "react";
import { Helmet } from "react-helmet-async";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jalu Pradipta",
  givenName: "Jalu",
  familyName: "Pradipta",
  email: "jluppradipta@gmail.com",
  url: "https://jalupradipta.vercel.app",
  sameAs: [
    "https://github.com/supramegod",
    "https://www.linkedin.com/in/jalupradipta/",
    "https://www.instagram.com/jluppradipta_728/",
  ],
  jobTitle: "Backend Developer",
  knowsAbout: ["Laravel", "PHP", "MySQL", "REST API", "ERP System"],
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
    <title>Jalu Pradipta — About Me</title>
    <link rel="canonical" href="https://jalupradipta.vercel.app/about-me" />
    <meta
      name="description"
      content="Profil lengkap Jalu Pradipta — Backend Developer, lulusan D3 Teknik Telekomunikasi PENS, berpengalaman dalam pengembangan backend Laravel dan sistem ERP."
    />
    <meta
      name="keywords"
      content="Jalu Pradipta, Backend Developer, Laravel, PENS, ERP, Surabaya"
    />
    <meta name="author" content="Jalu Pradipta" />
    <meta name="robots" content="index, follow" />

    <meta property="og:title" content="Jalu Pradipta — About Me" />
    <meta
      property="og:description"
      content="Profil lengkap Jalu Pradipta — Backend Developer, lulusan D3 Teknik Telekomunikasi PENS."
    />
    <meta property="og:type" content="profile" />
    <meta
      property="og:url"
      content="https://jalupradipta.vercel.app/about-me"
    />
    <meta
      property="og:image"
      content="https://jalupradipta.vercel.app/src/assets/img/Foto.jpg"
    />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="Jalu Pradipta" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Jalu Pradipta — About Me" />
    <meta
      name="twitter:description"
      content="Profil lengkap Jalu Pradipta — Backend Developer, lulusan D3 Teknik Telekomunikasi PENS."
    />
    <meta
      name="twitter:image"
      content="https://jalupradipta.vercel.app/src/assets/img/Foto.jpg"
    />

    <script type="application/ld+json">
      {JSON.stringify([personSchema, faqSchema])}
    </script>
  </Helmet>
);
