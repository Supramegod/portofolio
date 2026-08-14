import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
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
