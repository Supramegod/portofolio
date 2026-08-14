import React, { createContext, useCallback, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { id, en } from "./translations";

export const SUPPORTED_LANGS = ["en", "id"];
export const DEFAULT_LANG = "en";

const DICTS = { id, en };

const LanguageContext = createContext();

/**
 * Language is derived from the first path segment (`/en/...`, `/id/...`),
 * not from state — the URL is the single source of truth, so a shared link
 * always opens in the language it was shared in.
 *
 * Reading the segment from `useLocation()` rather than `useParams()` means
 * this provider also works on routes outside the `/:lang` branch, such as
 * the catch-all 404.
 *
 * Must be mounted inside a Router.
 */
export const LanguageProvider = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const segment = pathname.split("/")[1];
  const lang = SUPPORTED_LANGS.includes(segment) ? segment : DEFAULT_LANG;

  // Keeps <html lang> honest for screen readers and for the
  // html[lang="id"] type adjustment in index.css.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Switch language but stay on the same page — never bounce to the
  // homepage, which loses the reader's place.
  const toggleLang = useCallback(() => {
    const next = lang === "id" ? "en" : "id";
    try {
      localStorage.setItem("app_lang", next);
    } catch {
      // Private browsing can throw on write; the URL still carries the
      // language, so losing the preference is not worth failing over.
    }
    const rest = pathname.split("/").slice(2).join("/");
    navigate(rest ? `/${next}/${rest}` : `/${next}`);
  }, [lang, navigate, pathname]);

  // Missing keys return the key itself, so an untranslated string shows up
  // as "hero.title" on screen instead of throwing or rendering blank.
  const t = useCallback(
    (key) => {
      const dict = DICTS[lang] ?? DICTS[DEFAULT_LANG];
      return dict[key] ?? key;
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

/**
 * Prefixes an internal path with the active language.
 * Use for every in-app link so an unprefixed URL can never leak out:
 *
 *   const path = useLocalizedPath();
 *   <Link to={path("/about-me")}>   →   /en/about-me
 */
export const useLocalizedPath = () => {
  const { lang } = useLanguage();
  return useCallback(
    (path = "/") => {
      const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
      return `/${lang}${clean}`;
    },
    [lang],
  );
};

/** Best guess for the bare "/" redirect only — never used to auto-switch later. */
export const guessLang = () => {
  try {
    const stored = localStorage.getItem("app_lang");
    if (SUPPORTED_LANGS.includes(stored)) return stored;
  } catch {
    // Storage unavailable — fall through to the browser hint.
  }
  const nav =
    typeof navigator !== "undefined"
      ? (navigator.language || "").toLowerCase()
      : "";
  return nav.startsWith("id") ? "id" : DEFAULT_LANG;
};
