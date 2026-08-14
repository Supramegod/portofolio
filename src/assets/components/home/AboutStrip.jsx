import React from "react";
import { Link } from "react-router-dom";
import { Reveal, Section, SectionLabel } from "../ui/Section";
import { useLanguage, useLocalizedPath } from "../../../context/LanguageContext";

/**
 * A narrow prose strip between the work and the contact section. Grid break #3:
 * the label sits in its own column on the left, the prose in columns 5–12, so
 * the reading measure is offset rather than centred.
 */
export const AboutStrip = () => {
  const { t } = useLanguage();
  const path = useLocalizedPath();

  return (
    <Section
      id="about"
      rhythm={3}
      labelledBy="about-heading"
      className="border-t border-bone"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-3">
          <SectionLabel number="02">{t("about.label")}</SectionLabel>
        </div>

        <div className="md:col-span-8 md:col-start-5">
          <Reveal>
            <h2 id="about-heading" className="text-lg text-ink md:text-xl">
              {t("about.title")}
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="measure mt-6 text-base text-graphite">
              {t("about.body")}
            </p>
            <p className="measure mt-5 text-base text-slate">
              {t("about.bodyTwo")}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* TODO: add public/cv-jalu-pradipta.pdf — the file does not
                  exist yet, so this link 404s until it is committed. */}
              <a
                href="/cv-jalu-pradipta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink px-5 py-2.5 text-xs text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {t("about.cv")}
              </a>
              <Link
                to={path("/about-me")}
                className="border-b border-mist pb-1 text-xs text-slate transition-colors hover:border-ink hover:text-ink"
              >
                {t("about.more")}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};
