import React from "react";
import { Helmet } from "react-helmet-async";

export const HomeSEO = () => (
  <Helmet>
    <title>Jalu Pradipta — Backend Developer</title>
    <link rel="canonical" href="https://jalupradipta.vercel.app/" />
    <meta
      name="description"
      content="Portofolio Jalu Pradipta — Backend Developer lulusan D3 Teknik Telekomunikasi PENS. Spesialisasi dalam Laravel, ERP System, dan REST API."
    />
    <meta
      name="keywords"
      content="Jalu Pradipta, Backend Developer, Laravel, ERP, PENS, Portofolio, Surabaya"
    />
    <meta name="author" content="Jalu Pradipta" />
    <meta name="robots" content="index, follow" />

    <meta property="og:title" content="Jalu Pradipta — Backend Developer" />
    <meta
      property="og:description"
      content="Portofolio Jalu Pradipta — Backend Developer lulusan D3 Teknik Telekomunikasi PENS. Spesialisasi dalam Laravel, ERP System, dan REST API."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jalupradipta.vercel.app/" />
    <meta
      property="og:image"
      content="https://jalupradipta.vercel.app/src/assets/img/Profile.jpg"
    />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="Jalu Pradipta" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Jalu Pradipta — Backend Developer" />
    <meta
      name="twitter:description"
      content="Portofolio Jalu Pradipta — Backend Developer lulusan D3 Teknik Telekomunikasi PENS."
    />
    <meta
      name="twitter:image"
      content="https://jalupradipta.vercel.app/src/assets/img/Profile.jpg"
    />
  </Helmet>
);
