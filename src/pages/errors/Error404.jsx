import React from "react";
import { Link } from "react-router-dom";

import { NotFoundSEO } from "../../assets/components/seo/NotFoundSEO";
import { Navbar } from "../../assets/components/navbar/Navbar";
import { Footer } from "../../assets/components/navbar/Footer";
import { Section } from "../../assets/components/ui/Section";
import { useLanguage, useLocalizedPath } from "../../context/LanguageContext";

/**
 * 404. Also the fallback when the URL carries an unknown language segment,
 * so it reads nothing from the route — no params, no loading state.
 */
export const Error404 = () => {
  const { t } = useLanguage();
  const path = useLocalizedPath();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <NotFoundSEO />
      <div className="grain" aria-hidden="true" />

      <Navbar />

      <main id="main">
        <Section id="not-found" rhythm={1} labelledBy="not-found-title">
          <p
            className="font-display text-2xl leading-none text-mist"
            aria-hidden="true"
          >
            {t("notFound.code")}
          </p>

          <h1 id="not-found-title" className="mt-6 text-xl">
            {t("notFound.title")}
          </h1>

          <p className="measure mt-5 text-base text-slate">
            {t("notFound.body")}
          </p>

          <p className="mt-10">
            <Link
              to={path("/")}
              className="meta border-b border-ink pb-1 transition-opacity hover:opacity-60"
            >
              {t("notFound.home")}
            </Link>
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
};
