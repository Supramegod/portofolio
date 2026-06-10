import React from "react";
import { Helmet } from "react-helmet-async";

export const ProjectSEO = ({ project }) => (
  <Helmet>
    <title>{project.title} — Jalu Pradipta</title>
    <link
      rel="canonical"
      href={`https://jalupradipta.pages.dev/project/${project.id}`}
    />
    <meta name="description" content={project.desc} />
    <meta name="author" content="Jalu Pradipta" />
    <meta name="robots" content="index, follow" />

    <meta property="og:title" content={`${project.title} — Jalu Pradipta`} />
    <meta property="og:description" content={project.desc} />
    <meta property="og:type" content="article" />
    <meta
      property="og:url"
      content={`https://jalupradipta.pages.dev/project/${project.id}`}
    />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="Jalu Pradipta" />
    {project.thumbnailUrl && (
      <meta
        property="og:image"
        content={`https://jalupradipta.pages.dev${project.thumbnailUrl}`}
      />
    )}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`${project.title} — Jalu Pradipta`} />
    <meta name="twitter:description" content={project.desc} />
    {project.thumbnailUrl && (
      <meta
        name="twitter:image"
        content={`https://jalupradipta.pages.dev${project.thumbnailUrl}`}
      />
    )}
  </Helmet>
);
