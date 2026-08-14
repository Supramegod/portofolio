import React from "react";
import { Helmet } from "react-helmet-async";

import { useLanguage } from "../../../context/LanguageContext";

const BASE = "https://jalupradipta.pages.dev";
const FALLBACK_IMAGE = `${BASE}/images/profile-jalu.jpg`;

/**
 * SoftwareSourceCode rather than SoftwareApplication: two of these projects
 * have no public install target, and the old markup claimed a free `Offer`
 * for code that is not distributed. Describing the source is the honest shape.
 */
const projectSchema = (project, lang, url) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: project.title,
  description: project.desc,
  url,
  inLanguage: lang === "id" ? "id-ID" : "en-US",
  image: project.thumbnailUrl ? `${BASE}${project.thumbnailUrl}` : FALLBACK_IMAGE,
  genre: project.category,
  keywords: (project.techStack ?? []).join(", "),
  programmingLanguage: project.techStack ?? [],
  ...(project.githubUrl && project.githubUrl !== "#"
    ? { codeRepository: project.githubUrl }
    : {}),
  author: {
    "@type": "Person",
    name: "Jalu Pradipta",
    url: BASE,
  },
});

/**
 * Receives a project already flattened for the active language by
 * `resolveProject(item, lang)` — so `title`, `desc` and `category` are plain
 * strings here, never the nested `en` / `id` objects.
 */
export const ProjectSEO = ({ project }) => {
  const { lang, t } = useLanguage();

  // A missing project means the page is about to render its own 404 state.
  // Emitting nothing is better than emitting a canonical for a URL that has
  // no content behind it.
  if (!project) return null;

  const title = `${project.title} — ${t("seo.project.titleSuffix")}`;
  const description = project.desc ?? t("seo.home.description");
  const path = `/project/${project.id}`;
  const canonical = `${BASE}/${lang}${path}`;
  const ogLocale = lang === "id" ? "id_ID" : "en_US";
  const image = project.thumbnailUrl
    ? `${BASE}${project.thumbnailUrl}`
    : FALLBACK_IMAGE;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jalu Pradipta" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={`${BASE}/en${path}`} />
      <link rel="alternate" hrefLang="id" href={`${BASE}/id${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE}/`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={project.title} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="Jalu Pradipta" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={project.title} />

      <script type="application/ld+json">
        {JSON.stringify(projectSchema(project, lang, canonical))}
      </script>
    </Helmet>
  );
};
