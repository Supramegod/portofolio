import React from "react";
import { Helmet } from "react-helmet-async";

const projectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: project.title,
  description: project.desc,
  url: "https://jalupradipta.pages.dev/project/" + project.id,
  applicationCategory: project.category || "WebApplication",
  operatingSystem: "Web",
  author: {
    "@type": "Person",
    name: "Jalu Pradipta",
    url: "https://jalupradipta.pages.dev",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
});

export const ProjectSEO = ({ project }) => (
  <Helmet>
    <title>{project.title} — Jalu Pradipta | Backend Developer</title>
    <link
      rel="canonical"
      href={"https://jalupradipta.pages.dev/project/" + project.id}
    />
    <meta name="description" content={project.desc} />
    <meta
      name="keywords"
      content={project.title + ", Jalu Pradipta, Backend Developer, Laravel 12, ERP, " + (project.category || "") + ", " + (project.techStack ? project.techStack.join(", ") : "")}
    />
    <meta name="author" content="Jalu Pradipta" />
    <meta name="robots" content="index, follow" />

    <meta property="og:title" content={project.title + " — Jalu Pradipta | Backend Developer"} />
    <meta property="og:description" content={project.desc} />
    <meta property="og:type" content="article" />
    <meta
      property="og:url"
      content={"https://jalupradipta.pages.dev/project/" + project.id}
    />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="Jalu Pradipta" />
    {project.thumbnailUrl ? (
      <meta
        property="og:image"
        content={"https://jalupradipta.pages.dev" + project.thumbnailUrl}
      />
    ) : (
      <meta
        property="og:image"
        content="https://jalupradipta.pages.dev/images/profile-jalu.jpg"
      />
    )}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={project.title + " — Jalu Pradipta | Backend Developer"} />
    <meta name="twitter:description" content={project.desc} />
    {project.thumbnailUrl ? (
      <meta
        name="twitter:image"
        content={"https://jalupradipta.pages.dev" + project.thumbnailUrl}
      />
    ) : (
      <meta
        name="twitter:image"
        content="https://jalupradipta.pages.dev/images/profile-jalu.jpg"
      />
    )}

    <script type="application/ld+json">
      {JSON.stringify(projectSchema(project))}
    </script>
  </Helmet>
);
