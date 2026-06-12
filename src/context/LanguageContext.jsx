import React, { createContext, useContext, useState } from "react";
import { id, en } from "./translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("app_lang") || "id";
  });

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "id" ? "en" : "id";
      localStorage.setItem("app_lang", next);
      return next;
    });
  };

  const t = (key) => {
    const dict = lang === "id" ? id : en;
    return dict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
