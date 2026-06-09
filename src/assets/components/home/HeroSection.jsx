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
  { icon: FaWhatsapp, href: "https://wa.me/+6281937385652", label: "WhatsApp" },
  { icon: SiGmail, href: "mailto:jluppradipta@gmail.com", label: "Email" },
];

const Section = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
};

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

export const HeroSection = ({ handleSmoothScroll }) => {
  const { t } = useLanguage();

  return (
  <Section
    id="home"
    className="from-gray-950 via-slate-800 to-blue-950 bg-linear-to-r overflow-hidden text-left"
  >
    <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl grow items-center justify-center">
      <div className="flex h-full w-full flex-col-reverse items-center gap-10 py-4 lg:flex-row lg:gap-16">
        {/* KOLOM KIRI */}
        <motion.div
          className="flex h-full w-full flex-col justify-center lg:w-3/5"
          variants={contentFadeInVariants("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Main Headline */}
          <h1 className="text-6xl font-extrabold leading-tight text-white sm:text-7xl md:text-8xl">
            <span className="block text-cyan-400">{t("hero.title1")}</span>
            <span className="mt-2 block">{t("hero.title2")}</span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-gray-300 md:text-2xl">
            {t("hero.tagline")}
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400 lg:mx-0 lg:max-w-none">
            {t("hero.desc")}
          </p>

          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "portfolio")}
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-cyan-900/50 transition duration-300 hover:scale-[1.05] hover:bg-cyan-700 sm:px-8 sm:text-lg"
            >
              <FaBriefcase className="mr-2 h-5 w-5" /> {t("hero.btnPortfolio")}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-300 hover:scale-[1.05] hover:bg-white/10 sm:px-8 sm:text-lg"
            >
              <FaEnvelope className="mr-2 h-5 w-5" /> {t("hero.btnContact")}
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex w-full justify-center space-x-6 border-t border-gray-700/50 pt-6 lg:justify-start">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 transition duration-300 hover:scale-125 hover:text-cyan-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              >
                <link.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* KOLOM KANAN */}
        <motion.div
          className="group relative hidden w-full justify-center lg:flex lg:h-full lg:w-2/4 lg:items-center"
          variants={contentFadeInVariants("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Kontainer untuk Lottie */}
          <div className="relative h-full w-full max-w-full sm:h-[600px] sm:w-[600px]">
            <Lottie
              animationData={webDeveloperAnimation}
              loop={true}
              autoplay={true}
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
    </Section>
  );
};
