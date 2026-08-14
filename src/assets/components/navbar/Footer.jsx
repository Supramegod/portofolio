import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

/**
 * Closing hairline, two lines of small print, one anchor back to the top.
 * Anything more here is decoration.
 */
export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="measure">
          <p className="text-xs text-slate">{t("footer.built")}</p>
          <p className="meta mt-3">
            © {year} {t("hero.name")} — {t("footer.rights")}
          </p>
        </div>

        <a
          href="#main"
          className="meta border-b border-mist pb-1 text-ink transition-colors hover:border-ink"
        >
          {t("footer.backToTop")}
        </a>
      </div>
    </footer>
  );
};
