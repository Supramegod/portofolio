import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useLanguage } from "../../../context/LanguageContext";
import {
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import webDeveloperAnimation from "../animation/Coding.json";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/supramegod", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/jalupradipta/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/jluppradipta_728/",
    label: "Instagram",
  },
  { icon: FaWhatsapp, href: "https://wa.me/+6282131575147", label: "WhatsApp" },
  { icon: SiGmail, href: "mailto:jluppradipta@gmail.com", label: "Email" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.12, staggerChildren: 0.1 },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const HeroSection = ({ handleSmoothScroll }) => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#000000] via-[#000000] to-[#2F006F]/50 px-4 py-16 sm:px-8"
    >
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-[#E500FF]/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-[#00FFB1]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl grow items-center justify-center">
        <div className="flex h-full w-full flex-col items-center gap-8 lg:flex-row lg:gap-16">
          {/* KOLOM KIRI — 60% */}
          <motion.div
            className="flex h-full w-full flex-col justify-center lg:w-3/5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="font-mono text-xs font-medium tracking-[0.25em] text-[#B388FF]/70 sm:text-sm"
              variants={fadeInLeft}
            >
              [SYSTEM_INIT: BACKEND_ENGINEER]
            </motion.p>

            <motion.p
              className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00FFB1]/80 sm:text-base"
              variants={fadeInLeft}
            >
              Jalu Pradipta
            </motion.p>

            <motion.h1
              className="mt-2 text-5xl font-extrabold leading-tight text-[#F8F9FA] sm:text-6xl md:text-7xl lg:text-8xl"
              variants={fadeInLeft}
            >
              <span className="block bg-gradient-to-r from-[#00FFB1] to-[#E500FF] bg-clip-text text-transparent">
                {t("hero.title1")}
              </span>
              <span className="mt-2 block text-[#F8F9FA]">
                {t("hero.title2")}
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 max-w-xl text-base leading-relaxed text-[#B0BEC5] sm:text-lg"
              variants={fadeInLeft}
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0"
              variants={fadeInLeft}
            >
              <a
                href="#portfolio"
                onClick={(e) => handleSmoothScroll(e, "portfolio")}
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-[#00FFB1]/30 bg-[#00FFB1]/10 px-7 py-3.5 text-base font-semibold text-[#00FFB1] backdrop-blur-sm transition-all duration-300 hover:scale-[1.04] hover:border-[#00FFB1]/60 hover:shadow-lg hover:shadow-[#00FFB1]/20 sm:px-9 sm:text-lg"
              >
                <FaBriefcase className="mr-2 h-5 w-5" /> {t("hero.btnPortfolio")}
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="inline-flex items-center justify-center rounded-lg border border-[#E500FF]/30 bg-[#E500FF]/10 px-7 py-3.5 text-base font-semibold text-[#E500FF] backdrop-blur-sm transition-all duration-300 hover:scale-[1.04] hover:border-[#E500FF]/60 hover:shadow-lg hover:shadow-[#E500FF]/20 sm:px-9 sm:text-lg"
              >
                <FaEnvelope className="mr-2 h-5 w-5" /> {t("hero.btnContact")}
              </a>
            </motion.div>

            <motion.div
              className="mt-10 flex w-full space-x-6 border-t border-[#2F006F]/50 pt-6"
              variants={fadeInLeft}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-[#6A1B9A]/70 transition-all duration-300 hover:text-[#00FFB1]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.08, duration: 0.35 }}
                  whileHover={{ scale: 1.25, y: -3 }}
                >
                  <link.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </motion.a>
              ))}
            </motion.div>
            {/* Mobile animation � visible only on mobile */}
            <motion.div
              className="mt-8 flex w-full items-center justify-center lg:hidden"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-full max-w-[220px] border border-[#2F006F] bg-[#1A0033]/60 p-3 backdrop-blur-sm sm:max-w-[280px] sm:p-4 lg:max-w-[400px]">
                <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-[#00FFB1]/50 lg:h-4 lg:w-4" />
                <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-[#E500FF]/50 lg:h-4 lg:w-4" />
                <div className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-[#E500FF]/50 lg:h-4 lg:w-4" />
                <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-[#00FFB1]/50 lg:h-4 lg:w-4" />

                <div className="flex items-center justify-center opacity-60 transition duration-300 hover:opacity-100 lg:aspect-square">
                  <Lottie
                    animationData={webDeveloperAnimation}
                    loop={true}
                    autoplay={true}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* KOLOM KANAN — 40% */}
          <motion.div
            className="hidden lg:flex w-full items-center justify-center lg:w-2/5"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full max-w-[220px] border border-[#2F006F] bg-[#1A0033]/60 p-3 backdrop-blur-sm sm:max-w-[280px] sm:p-4 lg:max-w-[400px]">
              <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-[#00FFB1]/50 lg:h-4 lg:w-4" />
              <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-[#E500FF]/50 lg:h-4 lg:w-4" />
              <div className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-[#E500FF]/50 lg:h-4 lg:w-4" />
              <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-[#00FFB1]/50 lg:h-4 lg:w-4" />

              <div className="flex items-center justify-center opacity-60 transition duration-300 hover:opacity-100 lg:aspect-square">
                <Lottie
                  animationData={webDeveloperAnimation}
                  loop={true}
                  autoplay={true}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
