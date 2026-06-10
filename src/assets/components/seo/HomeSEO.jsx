import React from "react";
import { Helmet } from "react-helmet-async";

export const HomeSEO = () => (
  <Helmet>
    <title>Jalu Pradipta — Backend Developer</title>
    <link rel="canonical" href="https://jalupradipta.pages.dev/" />
    <meta
      name="description"
      content="Portofolio Jalu Pradipta — Backend Developer spesialis Laravel 12, PHP 8.x, REST API & ERP System. Lulusan PENS dengan pengalaman production deployment sistem enterprise."
    />
    <meta
      name="keywords"
      content="Jalu Pradipta, Backend Developer, Laravel 12, PHP 8.x, REST API, ERP, CAIS, PENS, Portofolio, Surabaya"
    />
    <meta name="author" content="Jalu Pradipta" />
    <meta name="robots" content="index, follow" />

    <meta property="og:title" content="Jalu Pradipta — Backend Developer" />
    <meta
      property="og:description"
      content="Backend Developer spesialis Laravel 12 & ERP System. Bangun sistem enterprise scalable, aman, dan production-ready bersama saya."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jalupradipta.pages.dev/" />
    <meta
      property="og:image"
      content="https://jalupradipta.pages.dev/src/assets/img/Profile.jpg"
    />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="Jalu Pradipta" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Jalu Pradipta — Backend Developer" />
    <meta
      name="twitter:description"
      content="Backend Developer spesialis Laravel 12 & ERP System. Bangun sistem enterprise scalable, aman, dan production-ready."
    />
    <meta
      name="twitter:image"
      content="https://jalupradipta.pages.dev/src/assets/img/Profile.jpg"
    />
  </Helmet>
);
