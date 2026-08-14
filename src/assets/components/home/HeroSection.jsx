import React from "react";
import { Reveal } from "../ui/Section";
import { useLanguage } from "../../../context/LanguageContext";

/**
 * Type-only hero. No illustration, no Lottie, no gradient — the name is the
 * image. Deliberate grid break: on desktop the whole block starts at column 2
 * of a 12-column grid, so the page does not open flush-left like a template.
 */
export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-bone pb-16 pt-14 md:pb-28 md:pt-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Grid break #1: start at column 2, run to column 12. */}
          <div className="md:col-span-11 md:col-start-2">
            <Reveal>
              {/* Clamped so 76px never overflows a 360px viewport. */}
              <h1 className="text-ink [font-size:clamp(2.5rem,12vw,var(--text-2xl))] [line-height:0.95]">
                {t("hero.name")}
              </h1>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="meta mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span>{t("hero.role")}</span>
                <span aria-hidden="true">·</span>
                <span>{t("hero.location")}</span>
                <span aria-hidden="true">·</span>
                <span>{t("hero.availability")}</span>
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="measure mt-8 text-md text-graphite">
                {t("hero.lead")}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="border border-ink px-5 py-2.5 text-xs text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  {t("hero.ctaWork")}
                </a>
                <a
                  href="#contact"
                  className="border-b border-mist pb-1 text-xs text-slate transition-colors hover:border-ink hover:text-ink"
                >
                  {t("hero.ctaContact")}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
