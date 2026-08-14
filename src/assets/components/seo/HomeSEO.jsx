import React from "react";
import { Helmet } from "react-helmet-async";

import { useLanguage } from "../../../context/LanguageContext";

const BASE = "https://jalupradipta.pages.dev";
const OG_IMAGE = `${BASE}/images/profile-jalu.jpg`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jalu Pradipta",
  givenName: "Jalu",
  familyName: "Pradipta",
  email: "jluppradipta@gmail.com",
  url: BASE,
  image: OG_IMAGE,
  sameAs: [
    "https://github.com/supramegod",
    "https://www.linkedin.com/in/jalupradipta/",
    "https://www.instagram.com/jluppradipta_728/",
  ],
  jobTitle: "Backend Developer",
  knowsAbout: [
    "Laravel 12",
    "PHP 8.x",
    "Go",
    "RESTful API",
    "ERP System",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "GitLab CI",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Politeknik Elektronika Negeri Surabaya (PENS)",
  },
};

/**
 * `journeySchema` used to live here. It moved to AboutSEO because the
 * education/competition timeline it describes now renders on /about-me.
 * Structured data must describe content that is actually on the page.
 */
const websiteSchema = (lang, description) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jalu Pradipta",
  url: `${BASE}/${lang}/`,
  inLanguage: lang === "id" ? "id-ID" : "en-US",
  description,
  about: personSchema,
});

export const HomeSEO = () => {
  const { lang, t } = useLanguage();

  const title = t("seo.home.title");
  const description = t("seo.home.description");
  const canonical = `${BASE}/${lang}/`;
  const ogLocale = lang === "id" ? "id_ID" : "en_US";

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jalu Pradipta" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={`${BASE}/en/`} />
      <link rel="alternate" hrefLang="id" href={`${BASE}/id/`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE}/`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta property="og:image:alt" content="Jalu Pradipta" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="Jalu Pradipta" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Jalu Pradipta" />

      <script type="application/ld+json">
        {JSON.stringify([websiteSchema(lang, description), personSchema])}
      </script>
    </Helmet>
  );
};
