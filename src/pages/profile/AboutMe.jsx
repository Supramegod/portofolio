import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AboutSEO } from "../../assets/components/seo/AboutSEO";
import { Navbar } from "../../assets/components/navbar/Navbar";
import { Footer } from "../../assets/components/navbar/Footer";
import {
  Section,
  Reveal,
  SectionLabel,
} from "../../assets/components/ui/Section";
import { TechStackContent } from "../../assets/components/portofolio/TechStackContent";
import { CertificateContent } from "../../assets/components/portofolio/CertificateContent";
import { TrackRecord } from "../../assets/components/profile/TrackRecord";
import {
  useLanguage,
  useLocalizedPath,
} from "../../context/LanguageContext";

/**
 * /about-me — the long version.
 *
 * Section rhythm is deliberately uneven (2 / 1 / 3 / 1 / 4). One constant
 * padding value on every section is the clearest tell of a generated layout,
 * which is why `Section` takes a `rhythm` prop at all (plan §1).
 *
 * The track record lives on this page rather than the homepage, and
 * AboutSEO.jsx carries the matching `journeySchema` — see the note at the top
 * of assets/components/profile/TrackRecord.jsx before editing either.
 */
export const AboutMe = () => {
  const { t } = useLanguage();
  const path = useLocalizedPath();

  // A route change keeps the previous scroll offset otherwise, so the page
  // opens halfway down.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutSEO />
      <div className="grain" aria-hidden="true" />
      <Navbar />

      <main id="main">
        {/* --- 1. Header ------------------------------------------------- */}
        <Section rhythm={2} labelledBy="about-heading">
          <Reveal>
            <h1
              id="about-heading"
              className="text-xl text-ink md:text-2xl"
            >
              {t("aboutPage.title")}
            </h1>
            <p className="measure mt-6 text-md text-slate">
              {t("aboutPage.lead")}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-5">
              <img
                src="/images/profile-jalu.jpg"
                alt="Jalu Pradipta"
                width="500"
                height="500"
                className="plate w-full max-w-sm border border-bone object-cover md:max-w-none"
              />
            </Reveal>

            <Reveal className="md:col-span-7" delay={0.06}>
              <p className="measure text-base text-ink">{t("about.body")}</p>
              <p className="measure mt-6 text-base text-slate">
                {t("about.bodyTwo")}
              </p>

              {/*
                TODO: cv-jalu-pradipta.pdf is not in public/ yet — add the file
                or this link 404s. Nothing else references it.
              */}
              <a
                href="/cv-jalu-pradipta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block border-b border-mist pb-1 text-xs text-ink transition-colors hover:border-ink"
              >
                {t("about.cv")}
              </a>
            </Reveal>
          </div>
        </Section>

        {/* --- 2. Stack -------------------------------------------------- */}
        <Section rhythm={1} labelledBy="stack-heading">
          <SectionLabel number="02">{t("aboutPage.stackLabel")}</SectionLabel>

          <Reveal>
            <h2 id="stack-heading" className="text-lg text-ink md:text-xl">
              {t("aboutPage.stackLabel")}
            </h2>
            <p className="measure mt-5 text-base text-slate">
              {t("aboutPage.stackNote")}
            </p>
          </Reveal>

          <TechStackContent />
        </Section>

        {/* --- 3. Certificates ------------------------------------------- */}
        <Section rhythm={3} labelledBy="cert-heading">
          <SectionLabel number="03">{t("aboutPage.certLabel")}</SectionLabel>

          <Reveal>
            <h2 id="cert-heading" className="text-lg text-ink md:text-xl">
              {t("aboutPage.certLabel")}
            </h2>
            <p className="measure mt-5 text-base text-slate">
              {t("aboutPage.certNote")}
            </p>
          </Reveal>

          <CertificateContent />
        </Section>

        {/* --- 4. Track record ------------------------------------------- */}
        <Section rhythm={1} labelledBy="track-heading">
          <SectionLabel number="04">{t("aboutPage.trackLabel")}</SectionLabel>

          <Reveal>
            <h2 id="track-heading" className="text-lg text-ink md:text-xl">
              {t("aboutPage.trackLabel")}
            </h2>
            <p className="measure mt-5 text-base text-slate">
              {t("aboutPage.trackNote")}
            </p>
          </Reveal>

          <TrackRecord />
        </Section>

        {/* --- 5. Back home ---------------------------------------------- */}
        <Section rhythm={4}>
          <Reveal>
            <hr />
            <Link
              to={path("/")}
              className="mt-10 inline-block border-b border-mist pb-1 text-md text-ink transition-colors hover:border-ink md:text-lg"
            >
              {t("aboutPage.backHome")}
            </Link>
          </Reveal>
        </Section>
      </main>

      <Footer />
    </>
  );
};
