import React from "react";
import { Helmet } from "react-helmet-async";

import { useLanguage } from "../../../context/LanguageContext";

const BASE = "https://jalupradipta.pages.dev";
const OG_IMAGE = `${BASE}/images/profile-jalu.jpg`;

export const NotFoundSEO = () => {
  const { lang, t } = useLanguage();

  const title = t("seo.notFound.title");
  const description = t("seo.notFound.description");
  const ogLocale = lang === "id" ? "id_ID" : "en_US";

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jalu Pradipta" />
      {/* noindex, follow: the address is wrong, but the links out of it are
          not — let the crawler leave rather than dead-end. No canonical,
          because an error page is not the canonical version of anything. */}
      <meta name="robots" content="noindex, follow" />

      <link rel="alternate" hrefLang="en" href={`${BASE}/en`} />
      <link rel="alternate" hrefLang="id" href={`${BASE}/id`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE}/`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${BASE}/${lang}`} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content="Jalu Pradipta" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="Jalu Pradipta" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Jalu Pradipta" />
    </Helmet>
  );
};
