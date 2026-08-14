import React from "react";
import { Link } from "react-router-dom";
import { Reveal, Section, SectionLabel } from "../ui/Section";
import { useLanguage, useLocalizedPath } from "../../../context/LanguageContext";
import {
  featuredProjects,
  listedProjects,
  resolveProject,
} from "../portofolio/ProjectContent";

/**
 * Two featured blocks, then a hairline table for the rest. The format switch is
 * the point: four identical cards is the fastest way to look generated.
 */
export const WorkSection = () => {
  const { t, lang } = useLanguage();
  const path = useLocalizedPath();

  const featured = featuredProjects.map((item) => resolveProject(item, lang));
  const listed = listedProjects.map((item) => resolveProject(item, lang));

  return (
    <Section id="work" rhythm={1} labelledBy="work-heading">
      <SectionLabel number="01">{t("work.label")}</SectionLabel>

      <Reveal>
        <h2 id="work-heading" className="text-lg text-ink md:text-xl">
          {t("work.title")}
        </h2>
        <p className="measure mt-5 text-base text-slate">{t("work.note")}</p>
      </Reveal>

      <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
        {featured.map((project, index) => (
          <Reveal key={project.id}>
            <article className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
              {/* Grid break #2: the second block flips image and prose sides. */}
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:order-2 md:col-start-6" : ""
                }`}
              >
                {project.thumbnailUrl ? (
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    loading="lazy"
                    /* `plate` handles both states: greyscale at rest, real
                       colours on hover. No per-image class needed. */
                    className="plate w-full border border-bone object-cover"
                  />
                ) : (
                  /* No screenshot yet — a typographic plate beats a broken img. */
                  <div className="flex min-h-[13rem] items-end border border-bone bg-bone/30 p-6 md:min-h-[17rem]">
                    <p className="font-display text-lg leading-tight text-graphite md:text-xl">
                      {project.title}
                    </p>
                  </div>
                )}
              </div>

              <div
                className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <p className="meta flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span>{project.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.category}</span>
                </p>

                <h3 className="mt-4 text-lg text-ink">{project.title}</h3>

                <p className="measure mt-4 line-clamp-3 text-base text-slate">
                  {project.desc}
                </p>

                <Link
                  to={path(`/project/${project.id}`)}
                  className="mt-6 inline-block border-b border-mist pb-1 text-xs text-ink transition-colors hover:border-ink"
                >
                  {t("work.readCase")}
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* The rest as a table, not cards. Scrolls inside itself on mobile so the
          page body never gains a horizontal scrollbar. */}
      <Reveal className="mt-16 md:mt-24">
        <div className="overflow-x-auto">
          {/* min-width only from sm up: a hard min-width at 360px widens the
              layout viewport itself, so the page gains a sideways scrollbar
              even though this wrapper scrolls on its own. */}
          <table className="w-full border-collapse text-left sm:min-w-[38rem]">
            <thead>
              <tr className="border-y border-mist">
                <th scope="col" className="meta py-3 pr-6 font-normal">
                  {t("work.colYear")}
                </th>
                <th scope="col" className="meta py-3 pr-6 font-normal">
                  {t("work.colProject")}
                </th>
                <th scope="col" className="meta py-3 pr-6 font-normal">
                  {t("work.colRole")}
                </th>
                {/* Stack is the widest, least scannable column — drop it on
                    phones so the other three fit without sideways scrolling.
                    It is still on the project detail page. */}
                <th scope="col" className="meta hidden py-3 font-normal sm:table-cell">
                  {t("work.colStack")}
                </th>
              </tr>
            </thead>
            <tbody>
              {listed.map((project) => (
                <tr key={project.id} className="border-b border-bone">
                  <td className="meta py-5 pr-6 align-top">{project.year}</td>
                  <td className="py-5 pr-6 align-top">
                    <Link
                      to={path(`/project/${project.id}`)}
                      className="text-base text-ink underline decoration-mist decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      {project.title}
                    </Link>
                    <span className="sr-only"> — {t("work.viewDetail")}</span>
                  </td>
                  <td className="py-5 pr-6 align-top text-xs text-slate">
                    {project.role}
                  </td>
                  <td className="hidden py-5 align-top text-xs text-slate sm:table-cell">
                    {project.techStack.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
};
