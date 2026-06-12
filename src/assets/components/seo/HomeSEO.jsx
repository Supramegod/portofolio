import React from "react";
import { Helmet } from "react-helmet-async";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jalu Pradipta",
  url: "https://jalupradipta.pages.dev",
  description: "Portofolio Jalu Pradipta — Backend Developer spesialis Laravel 12, PHP 8.x, REST API & ERP System.",
  about: {
    "@type": "Person",
    name: "Jalu Pradipta",
    jobTitle: "Backend Developer",
    email: "jluppradipta@gmail.com",
    url: "https://jalupradipta.pages.dev",
    sameAs: [
      "https://github.com/supramegod",
      "https://www.linkedin.com/in/jalupradipta/",
      "https://www.instagram.com/jluppradipta_728/",
    ],
  },
};

const journeySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Engineering Journey Timeline",
  description: "Perjalanan karir Jalu Pradipta dari mahasiswa hingga backend developer",
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Event", name: "Mulai D3 Teknik Telekomunikasi PENS", startDate: "2022" } },
    { "@type": "ListItem", position: 2, item: { "@type": "Event", name: "Eksplorasi Software Development", startDate: "2023" } },
    { "@type": "ListItem", position: 3, item: { "@type": "Event", name: "Fokus Backend Laravel & ERP", startDate: "2024" } },
    { "@type": "ListItem", position: 4, item: { "@type": "Event", name: "Lulus PENS & Intern PT Shelter Indonesia", startDate: "2025" } },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jalu Pradipta",
  givenName: "Jalu",
  familyName: "Pradipta",
  email: "jluppradipta@gmail.com",
  url: "https://jalupradipta.pages.dev",
  image: "https://jalupradipta.pages.dev/images/profile-jalu.jpg",
  sameAs: [
    "https://github.com/supramegod",
    "https://www.linkedin.com/in/jalupradipta/",
    "https://www.instagram.com/jluppradipta_728/",
  ],
  jobTitle: "Backend Developer",
  knowsAbout: [
    "Laravel 12",
    "PHP 8.x",
    "RESTful API",
    "ERP System",
    "MySQL",
    "Laravel Sanctum",
    "Docker",
    "GitLab CI",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Politeknik Elektronika Negeri Surabaya (PENS)",
  },
};

export const HomeSEO = () => (
  <Helmet>
    <title>Jalu Pradipta — Backend Developer | Laravel 12 & ERP Specialist</title>
    <link rel="canonical" href="https://jalupradipta.pages.dev/" />
    <meta
      name="description"
      content="Portofolio Jalu Pradipta — Backend Developer spesialis Laravel 12, PHP 8.x, REST API & ERP System. Lulusan PENS dengan pengalaman production deployment sistem enterprise. Lihat perjalanan engineering dari telekomunikasi ke backend developer."
    />
    <meta
      name="keywords"
      content="Jalu Pradipta, Backend Developer, Laravel 12, PHP 8.x, REST API, ERP, CAIS, PENS, Portofolio, Surabaya, Backend Developer Surabaya, Laravel Developer, ERP System, Engineering Journey, Perjalanan Karir Backend, Smart Warehouse, Genetic Algorithm, PT Shelter Indonesia"
    />
    <meta name="author" content="Jalu Pradipta" />
    <meta name="robots" content="index, follow" />

    <meta property="og:title" content="Jalu Pradipta — Backend Developer | Laravel 12 & ERP Specialist" />
    <meta
      property="og:description"
      content="Backend Developer spesialis Laravel 12 & ERP System. Bangun sistem enterprise scalable, aman, dan production-ready bersama saya."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jalupradipta.pages.dev/" />
    <meta
      property="og:image"
      content="https://jalupradipta.pages.dev/images/profile-jalu.jpg"
    />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="500" />
    <meta property="og:image:alt" content="Foto Profil Jalu Pradipta" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="Jalu Pradipta" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Jalu Pradipta — Backend Developer | Laravel 12 & ERP Specialist" />
    <meta
      name="twitter:description"
      content="Backend Developer spesialis Laravel 12 & ERP System. Bangun sistem enterprise scalable, aman, dan production-ready."
    />
    <meta
      name="twitter:image"
      content="https://jalupradipta.pages.dev/images/profile-jalu.jpg"
    />
    <meta name="twitter:image:alt" content="Foto Profil Jalu Pradipta" />

    <script type="application/ld+json">
      {JSON.stringify([websiteSchema, personSchema, journeySchema])}
    </script>
  </Helmet>
);
