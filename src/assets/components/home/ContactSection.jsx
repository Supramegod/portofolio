import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

// Data Kontak Pribadi
const contactInfo = [
  {
    icon: BiLogoGmail,
    label: "Email",
    value: "jluppradipta@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "No Telepon",
    value: "+62 819-3738-5652",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "supramegod",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "jalupradipta",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "jluppradipta_728",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Lokasi",
    value: "Surabaya, Indonesia",
  },
];

// Komponen Item Kontak
const ContactItem = ({ icon: Icon, label, value, variants }) => (
  <motion.div
    className="flex cursor-default items-start space-x-3 rounded-lg border border-gray-700 bg-gray-900/50 p-3 transition duration-300 hover:border-cyan-400"
    variants={variants}
  >
    <Icon className="my-3 h-6 w-6 shrink-0 text-cyan-400" />
    <div className="text-left">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <p className="break-word text-base font-semibold text-white sm:text-lg">
        {value.length > 25 ? value.substring(0, 22) + "..." : value}
      </p>
    </div>
  </motion.div>
);

// Framer Motion Variants
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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// Komponen Utama
export const ContactSection = ({ SectionComponent }) => {
  const { t } = useLanguage();
  return (
    <SectionComponent id="contact">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center sm:mb-16"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-2 flex items-center justify-center text-sm font-semibold uppercase tracking-wider text-cyan-400 sm:text-base">
            <FaEnvelope className="mr-2 h-4 w-4" /> Get in Touch
          </p>
          <h2 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            {t("contact.header")}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-xl">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Container */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-2">
          {/* Section Kiri - Ikon Tengah */}
          <motion.div
            className="flex w-full flex-col items-center lg:w-1/2"
            variants={contentFadeInVariants("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-6 text-base font-semibold text-gray-300 sm:text-lg">
              {t("contact.click")}
            </p>
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full sm:h-72 sm:w-72">
              {/* Efek Cincin Bercahaya (Pulsating Ring) */}
              <div className="absolute inset-0 h-full w-full animate-ping rounded-full border border-cyan-500/50 opacity-50"></div>
              <div className="absolute inset-0 h-full w-full rounded-full border-4 border-cyan-500/70 bg-gray-900/50 shadow-2xl shadow-cyan-500/30"></div>

              {/* Ikon */}
              <a href="https://wa.me/+6281937385652" title="Hubungi Saya">
                <FaWhatsapp className="relative z-10 h-28 w-28 text-cyan-400 transition duration-300 hover:scale-110 sm:h-36 sm:w-36" />
              </a>
            </div>
          </motion.div>

          {/* Section Kanan - Daftar Kontak */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactInfo.map((item, index) => (
                  <ContactItem key={index} {...item} variants={itemVariants} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionComponent>
  );
};
