import React, { useState, useEffect, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";

const SCROLL_THRESHOLD = 100;
const SECTION_IDS = ["home", "about", "services", "portfolio", "contact"];

export const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t, lang, toggleLang } = useLanguage();
  const isHomePage = pathname === "/";

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > SCROLL_THRESHOLD) {
      setIsNavbarHidden(true);
      setIsMenuOpen(false);
    } else if (window.scrollY < lastScrollY) {
      setIsNavbarHidden(false);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection(id);

    if (id === "home") {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (isHomePage) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Navigasi ke homepage dan langsung ke section yang dituju
      navigate(`/#${id}`);
    }
  };

  useEffect(() => {
    if (!isHomePage) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isHomePage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const isLinkActive = (id) => {
    if (isHomePage) {
      return activeSection === id;
    }
    if (id === "about" && pathname === "/about-me") {
      return true;
    }
    if (id === "portfolio" && pathname.includes("/project/")) {
      return true;
    }

    return false;
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transform border-b border-cyan-500/30 bg-transparent shadow-lg backdrop-blur-sm transition-transform duration-300 ease-in-out ${
        isNavbarHidden ? "-translate-y-full" : "translate-y-0"
      } `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-sans text-white lg:px-0">
        {/* Section Kiri */}
        <a
          href="/"
          className="text-2xl font-extrabold tracking-wider text-cyan-400 transition duration-300 hover:text-cyan-300"
          onClick={(e) => handleLinkClick(e, "home")}
        >
          JaluDev
        </a>

        {/* Responsive Hamburger */}
        <button
          className="z-50 p-2 text-gray-300 hover:text-cyan-400 focus:outline-none lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Tutup Menu" : "Buka Menu"}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>

        {/* Section Kanan (Desktop) */}
        <div className="hidden items-center space-x-8 lg:flex">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
              className={`relative text-base font-semibold uppercase tracking-wide transition duration-300 hover:text-cyan-400 ${
                isLinkActive(id)
                  ? "text-cyan-400 after:w-full after:bg-cyan-400"
                  : "text-gray-300 after:w-0 after:bg-gray-500"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300`}
            >
              {t(`nav.${id}`)}
            </a>
          ))}

          <button
            onClick={toggleLang}
            className="rounded-md border border-cyan-500/50 px-2 py-1 text-sm font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-500/20"
          >
            {lang === "id" ? "EN" : "ID"}
          </button>
        </div>
      </div>

      {/* Tautan Navigasi Dropdown (Mobile) */}
      <div
        className={`bg-gray-950/95 absolute w-full overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "max-h-60 border-t border-cyan-500/20 py-4 opacity-100"
            : "max-h-0 opacity-0"
        } `}
      >
        <div className="flex flex-col space-y-2 px-6">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block py-1 text-lg font-medium transition duration-300 ${
                isLinkActive(id)
                  ? "font-bold text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={(e) => handleLinkClick(e, id)}
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
