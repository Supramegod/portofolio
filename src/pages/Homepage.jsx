import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { HomeSEO } from "../assets/components/seo/HomeSEO";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Component
import Profile from "../assets/img/Profile.jpg";
import { Navbar } from "../assets/components/navbar/Navbar";
import { Footer } from "../assets/components/navbar/Footer";
import { Loading } from "../assets/components/loading/Loading";
import { IntroOverlay } from "../assets/components/home/IntroOverlay";
import { HeroSection } from "../assets/components/home/HeroSection";
import { ProjectContent } from "../assets/components/portofolio/ProjectContent";
import { CertificateContent } from "../assets/components/portofolio/CertificateContent";
import { TechStackContent } from "../assets/components/portofolio/TechStackContent";
import { ServiceSection } from "../assets/components/home/ServiceSection";
import { JourneySection } from "../assets/components/home/JourneySection";
import { ContactSection } from "../assets/components/home/ContactSection";

// Icons
import { FaUser, FaBriefcase, FaClock } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiCertificateFill } from "react-icons/pi";
import { GiGears } from "react-icons/gi";
import { HiCode } from "react-icons/hi";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const INTRO_SHOWN_KEY = "intro_overlay_shown";
const INTRO_DISPLAY_TIME_MS = 3000;
const MINIMUM_LOAD_TIME_MS = 500;

// Komponen Section
const Section = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-10 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
};

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

// Variants untuk Judul/Header Section (Muncul dari Atas) - Digunakan di About dan Portfolio
const sectionHeaderVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Variants untuk Konten (Muncul/Fade In) - Digunakan di About dan Portfolio Nav
const contentFadeInVariants = (direction = "up") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
});

// Variants Container untuk Staggering (misalnya, Daftar Kontak atau Statistik)
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

// Variants untuk item-item di dalam Stagger Container
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// Komponen Statistik
const StatItem = ({ icon: Icon, number, label }) => (
  <div className="flex flex-col items-center p-4">
    <div className="flex items-center">
      <Icon className="mr-2 h-5 w-5 text-[#00FFB1] sm:h-6 sm:w-6" />
      <p className="text-3xl font-extrabold text-[#F8F9FA] sm:text-4xl">{number}</p>
    </div>
      <p className="mt-1 text-center text-xs uppercase tracking-widest text-[#B0BEC5]/70">
      {label}
    </p>
  </div>
);

const TypewriterText = ({
  texts,
  typingSpeed = 50, // Sangat Cepat
  deletingSpeed = 25, // Sangat Cepat
  pauseDelay = 1000, // Jeda setelah selesai mengetik
  initialDelay = 0,
  className = "text-white",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer;
    const currentText = texts[textIndex % texts.length];
    const fullText = currentText;

    const handleTyping = () => {
      // 1. Mengetik
      if (!isDeleting) {
        if (charIndex < fullText.length) {
          setDisplayedText(fullText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          timer = setTimeout(handleTyping, typingSpeed);
        } else {
          // Selesai mengetik, jeda
          timer = setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } // 2. Menghapus
      else {
        if (charIndex > 0) {
          setDisplayedText(fullText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          timer = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Selesai menghapus, ganti teks
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
          timer = setTimeout(handleTyping, typingSpeed * 2); // Jeda singkat
        }
      }
    };

    const startTypingWithInitialDelay = setTimeout(() => {
      handleTyping();
    }, initialDelay); // Cleanup function

    return () => {
      clearTimeout(timer);
      clearTimeout(startTypingWithInitialDelay);
    };
  }, [
    textIndex,
    charIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    initialDelay,
  ]);

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        aria-hidden="true"
        className="ml-0.5 inline-block h-6 w-1 bg-current align-text-bottom"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
      />
    </motion.p>
  );
};

export const Homepage = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("project");
  const initialShowIntro = sessionStorage.getItem(INTRO_SHOWN_KEY) !== "true";
  const [showIntro, setShowIntro] = useState(initialShowIntro);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const targetElement = document.getElementById(id);

      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  }, [location.hash]);

  // Logika Loading dan Intro
  useEffect(() => {
    let timeoutId;
    let introTimeoutId;

    if (initialShowIntro) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        introTimeoutId = setTimeout(() => {
          setShowIntro(false);
          sessionStorage.setItem(INTRO_SHOWN_KEY, "true");
        }, INTRO_DISPLAY_TIME_MS);
      }, MINIMUM_LOAD_TIME_MS);
    } else {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        setShowIntro(false);
      }, MINIMUM_LOAD_TIME_MS);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (introTimeoutId) clearTimeout(introTimeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const targetElement = document.getElementById(id);

        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
          return;
        }
      }

      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Kolom Statistik Section 2
  const totalProjects = 1;
  const totalCertificates = 1;
  const yearsOfExperience = 1;

  // Component Section Portfolio
  let PortfolioContentComponent;
  if (activeTab === "certificate") {
    PortfolioContentComponent = CertificateContent;
  } else if (activeTab === "techstack") {
    PortfolioContentComponent = TechStackContent;
  } else {
    PortfolioContentComponent = ProjectContent;
  }

  // Active tab section portfolio
  const activeTabStyle =
    "border border-[#00FFB1]/30 bg-[#00FFB1]/10 text-[#00FFB1] shadow-sm";
  const inactiveTabStyle =
    "text-[#B0BEC5]/70 hover:bg-[#2F006F]/20 hover:text-[#F8F9FA] hover:scale-105 cursor-pointer";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#000000] via-[#000000] to-[#2F006F]/50 font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HomeSEO />

      <Navbar handleSmoothScroll={handleSmoothScroll} />

      <main>
        <IntroOverlay showIntro={showIntro} />

        <HeroSection handleSmoothScroll={handleSmoothScroll} />

        <hr className="mx-auto w-full max-w-7xl border-t border-[#5E00FF]/30" />

        {/* 3. ABOUT SECTION */}
        <Section id="about">
          <div className="w-full max-w-7xl pt-0 lg:pt-10">
            <motion.div
              className="mb-10 text-center"
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="mb-2 text-4xl font-extrabold text-[#F8F9FA] sm:text-5xl">
                  {t("about.title")}
                </h2>
                <p className="flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-[#B388FF]/70 sm:text-sm">
                  <FaUser className="mr-1 h-4 w-4 lg:mr-2" /> {t("about.subtitle")}
                </p>
            </motion.div>

            {/* Konten Utama */}
            <div className="flex flex-col items-center gap-10 text-left md:flex-row-reverse md:items-start md:gap-16">
              <motion.div
                className="mt-10 flex w-full justify-center md:mt-0 md:w-1/3 md:justify-end"
                variants={contentFadeInVariants("right")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative h-64 w-64 sm:h-80 sm:w-80">
                  <div className="absolute inset-0 m-auto h-full w-full animate-pulse rounded-full bg-[#E500FF] opacity-20 blur-3xl filter"></div>

                  {/* Container Foto Profil */}
                  <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border-4 border-[#E500FF]/50 bg-[#000000] shadow-2xl shadow-[#E500FF]/20">
                    <img
                      src={Profile}
                      alt="Foto Profil Jalu Pradipta"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Section Kiri */}
              <motion.div
                className="w-full space-y-4 md:w-2/3"
                variants={contentFadeInVariants("left")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-2xl font-light text-[#F8F9FA] sm:text-3xl">
                  <span className="block sm:inline">{t("about.hello")} </span>
                  <span className="font-semibold text-[#00FFB1]">
                    {t("about.name")}
                  </span>
                </p>
                <motion.div>
                  <TypewriterText
                    texts={[
                      t("about.typewriter1"),
                      t("about.typewriter2"),
                      t("about.typewriter3"),
                    ]}
                    typingSpeed={50}
                    deletingSpeed={25}
                    pauseDelay={1000}
                    initialDelay={75}
                    className="font-serif text-4xl font-extrabold text-[#F8F9FA] sm:text-5xl"
                  />
                </motion.div>
                <p className="text-base text-[#B0BEC5] sm:text-lg">
                  {t("about.desc")}
                </p>

                {/* Button */}
                <div className="flex flex-col space-y-3 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <a
                    href="#"
                    target="_blank"
                    className="bg-linear-to-r inline-flex cursor-pointer items-center justify-center rounded-lg from-[#00FFB1] to-[#00FFB1]/80 px-6 py-3 font-semibold text-[#000000] shadow-lg transition duration-300 hover:scale-105"
                  >
                    <span className="mr-2">💾</span> {t("about.downloadCV")}
                  </a>
                  <Link
                    to="/about-me"
                    className="inline-flex items-center justify-center rounded-lg border border-[#E500FF]/30 px-6 py-3 font-semibold text-[#E500FF] transition duration-300 hover:scale-105 hover:bg-[#E500FF]/10"
                  >
                    <span className="mr-2">
                      <CgProfile size={20} />
                    </span>{" "}
                    {t("about.learnMore")}
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Statistik */}
            <motion.div
              className="mt-16 border-t border-[#5E00FF]/30 pt-10"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="grid grid-cols-3 divide-x divide-[#5E00FF]/30 rounded-xl border border-[#5E00FF]/30 bg-[#2F006F]/15"
                variants={staggerContainerVariants}
              >
                {[
                  {
                    icon: HiCode,
                    number: totalProjects,
                    label: t("about.statProjects"),
                  },
                  {
                    icon: PiCertificateFill,
                    number: totalCertificates,
                    label: t("about.statCertificates"),
                  },
                  {
                    icon: FaClock,
                    number: `${yearsOfExperience}+`,
                    label: t("about.statExperience"),
                  },
                ].map((stat, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <StatItem
                      icon={stat.icon}
                      number={stat.number}
                      label={stat.label}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Section>

        <hr className="mx-auto w-full max-w-7xl border-t border-[#5E00FF]/30" />

        {/* 4. ENGINEERING JOURNEY SECTION */}
        <JourneySection SectionComponent={Section} />

        <hr className="mx-auto w-full max-w-7xl border-t border-[#5E00FF]/30" />

        {/* 5. SERVICE SECTION */}
        <ServiceSection SectionComponent={Section} />

        <hr className="mx-auto w-full max-w-7xl border-t border-[#5E00FF]/30" />

        {/* 6. PORTFOLIO SECTION */}
        <Section id="portfolio">
          <div className="w-full max-w-7xl pt-0 text-center lg:pt-10">
            <motion.div
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-2 flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-[#B388FF]/70 sm:text-sm">
                <FaBriefcase className="mr-2 h-4 w-4" /> My Work
              </p>
              <h2 className="mb-4 text-4xl font-extrabold text-[#F8F9FA] sm:text-5xl">
                Portfolio Showcase
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base text-[#B0BEC5] sm:text-lg">
                Telusuri perjalanan karya saya melalui proyek nyata, sertifikasi
                yang saya raih, artikel yang pernah diterbitkan, hingga keahlian
                teknis saya. Setiap bagian adalah bukti dari semangat belajar
                dan perkembangan saya.
              </p>
            </motion.div>

            {/* TOMBOL NAVIGASI */}
            <motion.div
              className="mx-auto mb-12 flex max-w-4xl justify-center space-x-2 rounded-xl border border-[#5E00FF]/40 bg-[#2F006F]/20 p-2 backdrop-blur-sm sm:space-x-4 sm:p-3"
              variants={contentFadeInVariants("up")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Tombol Project */}
              <button
                onClick={() => setActiveTab("project")}
                className={`flex w-1/3 flex-col items-center justify-center rounded-lg px-3 py-3 font-semibold transition duration-300 sm:px-4 sm:py-4 ${
                  activeTab === "project" ? activeTabStyle : inactiveTabStyle
                }`}
              >
                <HiCode className="mb-1 h-6 w-6" />
                <span className="text-sm sm:text-base">{t("portfolio.tabProjects")}</span>
              </button>
              {/* Tombol Certificate */}
              <button
                onClick={() => setActiveTab("certificate")}
                className={`flex w-1/3 flex-col items-center justify-center rounded-lg px-3 py-3 font-semibold transition duration-300 sm:px-4 sm:py-4 ${
                  activeTab === "certificate"
                    ? activeTabStyle
                    : inactiveTabStyle
                }`}
              >
                <PiCertificateFill className="mb-1 h-6 w-6" />
                <span className="text-sm sm:text-base">{t("portfolio.tabCertificates")}</span>
              </button>
              {/* Tombol Tech Stack */}
              <button
                onClick={() => setActiveTab("techstack")}
                className={`flex w-1/3 flex-col items-center justify-center rounded-lg px-3 py-3 font-semibold transition duration-300 sm:px-4 sm:py-4 ${
                  activeTab === "techstack" ? activeTabStyle : inactiveTabStyle
                }`}
              >
                <GiGears className="mb-1 h-6 w-6" />
                <span className="text-sm sm:text-base">{t("portfolio.tabTechStack")}</span>
              </button>
            </motion.div>

            {/* Default Konten */}
            <div className="mt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <PortfolioContentComponent />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Section>

        <hr className="mx-auto w-full max-w-7xl border-t border-[#5E00FF]/30" />

        {/* 7. CONTACT SECTION */}
        <ContactSection SectionComponent={Section} />
      </main>

      <Footer />
    </motion.div>
  );
};
