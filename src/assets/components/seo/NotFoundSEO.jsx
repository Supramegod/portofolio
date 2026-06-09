import React from "react";
import { Helmet } from "react-helmet-async";

export const NotFoundSEO = () => (
  <Helmet>
    <title>404 — Halaman Tidak Ditemukan | Jalu Pradipta</title>
    <meta
      name="description"
      content="Halaman yang Anda cari tidak ditemukan."
    />
    <meta name="robots" content="noindex, follow" />
    <meta property="og:title" content="404 — Halaman Tidak Ditemukan" />
    <meta
      property="og:description"
      content="Halaman yang Anda cari tidak ditemukan."
    />
  </Helmet>
);
