import React from "react";
import { Helmet } from "react-helmet-async";

import { useLanguage } from "../../../context/LanguageContext";

const BASE = "https://jalupradipta.pages.dev";
const OG_IMAGE = `${BASE}/images/profile-jalu.jpg`;
const TIMELINE_IMAGE = `${BASE}/images/profile-jalu.jpg`;

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
    "MySQL",
    "PostgreSQL",
    "REST API",
    "ERP System",
    "Laravel Sanctum",
    "Docker",
    "GitLab CI",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Politeknik Elektronika Negeri Surabaya (PENS)",
  },
};

/**
 * Moved here verbatim from HomeSEO: the timeline this ItemList describes now
 * renders on /about-me, and Event markup must sit on the page that shows it.
 *
 * Every `Event` keeps startDate, location, organizer, performer and image —
 * those five fields were added specifically to clear Google Search Console
 * validation. Do not prune them.
 */
const journeySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Engineering Journey Timeline",
  description:
    "Perjalanan karir Jalu Pradipta dari mahasiswa hingga backend developer",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Event",
        name: "Mulai D3 Teknik Telekomunikasi PENS",
        startDate: "2022",
        endDate: "2025",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Politeknik Elektronika Negeri Surabaya",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Surabaya",
            addressCountry: "ID",
          },
        },
        organizer: {
          "@type": "Organization",
          name: "Politeknik Elektronika Negeri Surabaya (PENS)",
        },
        performer: { "@type": "Person", name: "Jalu Pradipta" },
        image: TIMELINE_IMAGE,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Event",
        name: "Finalist KRTI (Kontes Robot Terbang Indonesia) Nasional",
        startDate: "2023",
        endDate: "2023",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Indonesia",
          address: { "@type": "PostalAddress", addressCountry: "ID" },
        },
        organizer: {
          "@type": "Organization",
          name: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
        },
        performer: { "@type": "Person", name: "Jalu Pradipta" },
        image: TIMELINE_IMAGE,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Event",
        name: "Eksplorasi Software Development",
        startDate: "2023",
        endDate: "2023",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Indonesia",
          address: { "@type": "PostalAddress", addressCountry: "ID" },
        },
        organizer: { "@type": "Person", name: "Jalu Pradipta" },
        performer: { "@type": "Person", name: "Jalu Pradipta" },
        image: TIMELINE_IMAGE,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Event",
        name: "Fokus Backend Laravel & ERP",
        startDate: "2024",
        endDate: "2024",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Indonesia",
          address: { "@type": "PostalAddress", addressCountry: "ID" },
        },
        organizer: { "@type": "Person", name: "Jalu Pradipta" },
        performer: { "@type": "Person", name: "Jalu Pradipta" },
        image: TIMELINE_IMAGE,
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Event",
        name: "Lulus PENS & Intern PT Shelter Indonesia",
        startDate: "2025",
        endDate: "2025",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "PT Shelter Indonesia",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Surabaya",
            addressCountry: "ID",
          },
        },
        organizer: { "@type": "Organization", name: "PT Shelter Indonesia" },
        performer: { "@type": "Person", name: "Jalu Pradipta" },
        image: TIMELINE_IMAGE,
      },
    },
  ],
};

export const AboutSEO = () => {
  const { lang, t } = useLanguage();

  const title = t("seo.about.title");
  const description = t("seo.about.description");
  const canonical = `${BASE}/${lang}/about-me/`;
  const ogLocale = lang === "id" ? "id_ID" : "en_US";

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jalu Pradipta" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={`${BASE}/en/about-me/`} />
      <link rel="alternate" hrefLang="id" href={`${BASE}/id/about-me/`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE}/`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="profile" />
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
        {JSON.stringify([personSchema, journeySchema])}
      </script>
    </Helmet>
  );
};
