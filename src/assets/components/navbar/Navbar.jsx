import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../../../context/LanguageContext";

const NAV_ITEMS = [
  { hash: "work", key: "nav.work" },
  { hash: "about", key: "nav.about" },
  { hash: "contact", key: "nav.contact" },
];

/**
 * Header: wordmark, three anchors, language toggle.
 * A single hairline under it implies print structure — no shadow, no blur.
 */
export const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const path = useLocalizedPath();
  const [open, setOpen] = useState(false);

  // Close the mobile sheet on Escape — expected of anything that overlays.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const other = lang === "id" ? "EN" : "ID";

  return (
    <header className="sticky top-0 z-40 border-b border-bone bg-paper/90 backdrop-blur-[2px]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 focus:bg-ink focus:px-3 focus:py-2 focus:text-xs focus:text-paper"
      >
        {t("nav.skipToContent")}
      </a>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link
          to={path("/")}
          className="font-display text-md leading-none tracking-tight text-ink"
        >
          Jalu&nbsp;Pradipta
        </Link>

        <div className="flex items-center gap-6">
          {/* Anchors resolve against the homepage so they work from any page. */}
          <nav aria-label={t("nav.work")} className="hidden md:block">
            <ul className="flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <li key={item.hash}>
                  <Link
                    to={`${path("/")}#${item.hash}`}
                    className="text-xs text-slate transition-colors hover:text-ink"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className="hidden h-4 w-px bg-mist md:block" />

          {/* Toggle navigates to the same page in the other language, so the
              reader keeps their place instead of bouncing to the homepage. */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("nav.langSwitch")}
            className="meta border border-mist px-2.5 py-1 leading-none text-ink transition-colors hover:border-ink"
          >
            {other}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="meta text-ink md:hidden"
          >
            {open ? t("nav.menuClose") : t("nav.menuOpen")}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label={t("nav.work")}
          className="border-t border-bone md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.hash} className="border-b border-bone last:border-0">
                <Link
                  to={`${path("/")}#${item.hash}`}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base text-ink"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
