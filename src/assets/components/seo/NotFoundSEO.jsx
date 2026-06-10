import React from "react";
import { Helmet } from "react-helmet-async";

export const NotFoundSEO = () => (
  <Helmet>
    <title>404 — Halaman Tidak Ditemukan | Jalu Pradipta</title>
    <link rel="canonical" href="https://jalupradipta.pages.dev/404" />
    <meta
      name="description"
      content="404 — Halaman tidak ditemukan. Kembali ke halaman utama Jalu Pradipta — Backend Developer Laravel 12 & ERP System."
    />
    <meta
      name="keywords"
      content="404, halaman tidak ditemukan, Jalu Pradipta, Backend Developer"
    />
    <meta name="author" content="Jalu Pradipta" />
    <meta name="robots" content="noindex, follow" />

    <meta property="og:title" content="404 — Halaman Tidak Ditemukan | Jalu Pradipta" />
    <meta
      property="og:description"
      content="Halaman yang Anda cari tidak ditemukan. Kembali ke homepage Jalu Pradipta."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jalupradipta.pages.dev/404" />
    <meta
      property="og:image"
      content="https://jalupradipta.pages.dev/images/profile-jalu.jpg"
    />
    <meta property="og:image:alt" content="Jalu Pradipta" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="Jalu Pradipta" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="404 — Halaman Tidak Ditemukan | Jalu Pradipta" />
    <meta
      name="twitter:description"
      content="Halaman yang Anda cari tidak ditemukan. Kembali ke homepage Jalu Pradipta."
    />
    <meta
      name="twitter:image"
      content="https://jalupradipta.pages.dev/images/profile-jalu.jpg"
    />
  </Helmet>
);
