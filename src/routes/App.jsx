import React, { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";

import {
  LanguageProvider,
  SUPPORTED_LANGS,
  guessLang,
} from "../context/LanguageContext";

// Pages
import { Homepage } from "../pages/Homepage";
import { AboutMe } from "../pages/profile/AboutMe";
import { Portofolio } from "../pages/portofolio/Portofolio";
import { Error404 } from "../pages/errors/Error404";

/**
 * Bare "/" is the only place the browser's language hint is honoured.
 * After this redirect the URL owns the language, so we never auto-switch
 * a reader away from the page they are on.
 */
const RootRedirect = () => <Navigate to={`/${guessLang()}`} replace />;

/**
 * React Router deliberately does not act on the URL hash, and does not reset
 * scroll between routes — both are left to the app. Without this the header's
 * `/id#work` links change the URL and nothing moves, which reads as a dead
 * link, and opening a page from halfway down another one lands mid-content.
 *
 * The rAF wait gives the target route a frame to mount before we look for the
 * element; on a cross-page jump like `/id/about-me` → `/id#work` the section
 * does not exist yet at the moment the location changes.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduced ? "auto" : "smooth";

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    let frame = 0;
    const jump = (attempt = 0) => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior, block: "start" });
      } else if (attempt < 5) {
        frame = requestAnimationFrame(() => jump(attempt + 1));
      }
    };
    frame = requestAnimationFrame(() => jump());

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

/**
 * Rejects unknown language segments so `/fr` or `/assets` render a real 404
 * instead of silently falling back to English and indexing a duplicate page.
 */
const LangGuard = () => {
  const { lang } = useParams();
  if (!SUPPORTED_LANGS.includes(lang)) return <Error404 />;
  return <Outlet />;
};

export const App = () => {
  return (
    <BrowserRouter>
      {/* Inside the Router: the provider reads the language off the URL. */}
      <LanguageProvider>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<RootRedirect />} />

          <Route path="/:lang" element={<LangGuard />}>
            <Route index element={<Homepage />} />
            <Route path="about-me" element={<AboutMe />} />
            <Route path="project/:id" element={<Portofolio />} />
            <Route path="*" element={<Error404 />} />
          </Route>

          {/* Error */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
};
