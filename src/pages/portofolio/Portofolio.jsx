import React from "react";
import { Link, useParams } from "react-router-dom";

import { useLanguage, useLocalizedPath } from "../../context/LanguageContext";
import {
  portfolioItems,
  resolveProject,
} from "../../assets/components/portofolio/ProjectContent";
import { Section, Reveal, SectionLabel } from "../../assets/components/ui/Section";
import { Navbar } from "../../assets/components/navbar/Navbar";
import { Footer } from "../../assets/components/navbar/Footer";
import { ProjectSEO } from "../../assets/components/seo/ProjectSEO";
import { Error404 } from "../errors/Error404";

/**
 * A labelled prose block: mono label, then one column of text at 68ch.
 * Used three times (overview / problem / what I did) so the three read as
 * the same object rather than three ad-hoc layouts.
 */
const ProseBlock = ({ label, body, delay = 0 }) => {
  if (!body) return null;
  return (
    <Reveal className="border-t border-bone pt-6" delay={delay}>
      <SectionLabel>{label}</SectionLabel>
      <p className="measure whitespace-pre-line text-base text-graphite">{body}</p>
    </Reveal>
  );
};

/**
 * Project detail. Route is `/:lang/project/:id`, so every internal link has
 * to go through `useLocalizedPath()` — a bare "/" would silently drop the
 * language prefix and bounce the reader through the root redirect.
 *
 * A missing project renders <Error404 /> in place rather than navigating:
 * no effect, no redirect, and no flash of empty layout before it resolves.
 */
export const Portofolio = () => {
  const { t, lang } = useLanguage();
  const { id } = useParams();
  const path = useLocalizedPath();

  // `Number("about")` is NaN, so a non-numeric segment simply fails to match.
  const item = portfolioItems.find((entry) => entry.id === Number(id));
  const project = resolveProject(item, lang);

  if (!project) return <Error404 />;

  const hasLiveSite = project.projectUrl && project.projectUrl !== "#";
  const hasThumbnail = Boolean(project.thumbnailUrl);
  const metaLine = [project.year, project.role, project.category].filter(Boolean);
  const features = project.features ?? [];
  const techStack = project.techStack ?? [];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <ProjectSEO project={project} />
      <div className="grain" aria-hidden="true" />

      <Navbar />

      <main id="main">
        {/* 1 — return path, then the masthead: metadata, title, lead. */}
        <Section rhythm={2}>
          <Reveal>
            <Link
              to={`${path("/")}#work`}
              className="meta inline-block border-b border-mist pb-1 transition-colors hover:border-ink hover:text-ink"
            >
              &larr;&nbsp;{t("project.back")}
            </Link>
          </Reveal>

          <Reveal className="mt-12 md:mt-16" delay={0.05}>
            <p className="meta flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {metaLine.map((entry, index) => (
                <span key={entry} className="flex items-baseline gap-x-3">
                  {index > 0 ? <span aria-hidden="true">&middot;</span> : null}
                  <span>{entry}</span>
                </span>
              ))}
            </p>

            <h1 className="mt-5 max-w-[24ch] text-xl md:text-2xl">
              {project.title}
            </h1>

            {project.desc ? (
              <p className="measure mt-8 text-md text-graphite">{project.desc}</p>
            ) : null}
          </Reveal>
        </Section>

        {/* 2 — the image runs wider than the text column: a deliberate break
            in the grid, and the only place on the page that does it. */}
        <Section rhythm={2} bleed>
          <Reveal className="mx-auto w-full max-w-[88rem] px-6 md:px-10">
            {hasThumbnail ? (
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                loading="lazy"
                className="plate w-full border border-bone object-cover"
              />
            ) : (
              <div className="flex min-h-[15rem] items-center justify-center border border-bone px-6 py-20 md:min-h-[26rem]">
                <p className="font-display max-w-[18ch] text-center text-xl leading-tight text-mist md:text-2xl">
                  {project.title}
                </p>
              </div>
            )}
          </Reveal>
        </Section>

        {/* 3 — the write-up. Three prose blocks, hairline-separated. */}
        <Section rhythm={1}>
          <div className="flex flex-col gap-14 md:gap-20">
            <ProseBlock label={t("project.overview")} body={project.longDesc} />
            <ProseBlock
              label={t("project.challenge")}
              body={project.challenge}
              delay={0.05}
            />
            <ProseBlock
              label={t("project.solution")}
              body={project.solution}
              delay={0.1}
            />
          </div>
        </Section>

        {/* 4 — what is actually in the build: a hairline list, not cards. */}
        {features.length > 0 ? (
          <Section rhythm={2}>
            <Reveal>
              <SectionLabel>{t("project.features")}</SectionLabel>
              <ul className="mt-6 border-t border-bone">
                {features.map((feature, index) => (
                  <li
                    key={feature}
                    className="flex items-baseline gap-5 border-b border-bone py-4"
                  >
                    <span className="meta shrink-0" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="measure text-xs text-graphite md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Section>
        ) : null}

        {/* 5 — stack, then the two outbound links. */}
        <Section rhythm={4}>
          {techStack.length > 0 ? (
            <Reveal className="border-t border-bone pt-6">
              <SectionLabel>{t("project.stack")}</SectionLabel>
              <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                {techStack.map((tech, index) => (
                  <li key={tech} className="meta flex items-baseline gap-x-3">
                    {index > 0 ? <span aria-hidden="true">&middot;</span> : null}
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          <Reveal className="mt-14 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-10">
            {hasLiveSite ? (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg leading-none text-ink underline decoration-mist decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
              >
                {t("project.live")}&nbsp;&rarr;
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg leading-none text-ink underline decoration-mist decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
              >
                {t("project.repo")}&nbsp;&rarr;
              </a>
            ) : null}
          </Reveal>
        </Section>
      </main>

      <Footer />
    </div>
  );
};
