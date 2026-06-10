import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useLanguage } from "../../../context/LanguageContext";

export const portfolioItems = [
  {
    id: 1,
    title: "CAIS ERP System",
    desc: "ERP Laravel 12 | PHP 8.x | REST API | Laravel Sanctum SSO — modul Leads, Quotation, SPK, PKS, dashboard approval & sales activity.",
    longDesc:
      "CAIS (Customer Activity And Information System) adalah ERP enterprise yang saya bangun dari nol menggunakan Laravel 12 di atas PHP 8.x dengan arsitektur RESTful API dan Laravel Sanctum untuk custom SSO. Sistem ini mencakup Leads Management, multi-step Quotation Engine dengan approval workflow, PKS (Perjanjian Kerja Sama) berversion history, SPK (Surat Perintah Kerja) dengan file upload & checklist, Sales Activity tracking, dan dashboard monitoring real-time. Database menggunakan MySQL dengan query teroptimasi, visualisasi data dengan Chart.js, dan sistem dirancang multi-tenant dengan role & permissions berbasis menu. Seluruh sistem telah melalui production deployment dan digunakan secara aktif oleh tim sales.",
    challenge:
      "Perusahaan membutuhkan sistem ERP terpadu yang dapat mengelola seluruh siklus leads-to-order — dari akuisisi leads, pembuatan quotation bertingkat dengan approval, pembuatan kontrak kerja (PKS/SPK) yang berversion history, hingga monitoring aktivitas sales secara real-time. Tantangan utamanya adalah integrasi multi-modul dalam satu ekosistem dengan sistem SSO terpusat dan role-based access control.",
    solution:
      "Dibangun dengan Laravel 12 dan PHP 8.x, arsitektur RESTful API memisahkan frontend dan backend secara clean. Laravel Sanctum diimplementasikan sebagai custom SSO yang melayani autentikasi multi-aplikasi. Multi-tier approval workflow memastikan setiap quotation melewati jalur persetujuan bertingkat sebelum menjadi kontrak. Dashboard monitoring dibangun dengan Chart.js untuk visualisasi data sales real-time. Seluruh sistem berjalan di atas Docker dengan production deployment via GitLab CI.",
    category: "Backend / ERP",
    time: "2025",
    projectUrl: "https://cais2.shelterapp2.co.id/login",
    githubUrl: "https://github.com/Supramegod/project-cais-backend",
    techStack: [
      "Laravel 12",
      "PHP 8.2",
      "Laravel Sanctum",
      "MySQL",
      "Chart.js",
      "RESTful API",
      "Docker",
      "GitLab CI",
    ],
    features: [
      "Manajemen Leads dengan assignment tim sales",
      "Quotation Engine multi-step dengan approval workflow",
      "PKS (Perjanjian Kerja Sama) dengan version history",
      "SPK (Surat Perintah Kerja) dengan file upload & checklist",
      "Dashboard approval & monitoring sales activity",
      "Custom SSO dengan Laravel Sanctum",
      "Role & permissions berbasis menu",
      "Sistem multi-tenant",
    ],
    thumbnailUrl: "/images/project-cais.jpg",
  },
  {
    id: 2,
    title: "Proyek Lainnya",
    desc: "Segera diupdate — proyek selanjutnya akan ditampilkan di sini.",
    longDesc:
      "Proyek ini akan segera diupdate dengan informasi lengkap mengenai teknologi, fitur, dan detail pengembangan.",
    category: "-",
    time: "-",
    projectUrl: "#",
    githubUrl: "#",
    techStack: [],
    features: [],
    thumbnailUrl: "",
  },
  {
    id: 3,
    title: "Proyek Lainnya",
    desc: "Segera diupdate — proyek selanjutnya akan ditampilkan di sini.",
    longDesc:
      "Proyek ini akan segera diupdate dengan informasi lengkap mengenai teknologi, fitur, dan detail pengembangan.",
    category: "-",
    time: "-",
    projectUrl: "#",
    githubUrl: "#",
    techStack: [],
    features: [],
    thumbnailUrl: "",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const ProjectContent = () => {
  const { t } = useLanguage();
  const itemsPerPage = 3;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const mainProject = portfolioItems[0];
  const restProjects = portfolioItems.slice(1, visibleCount);

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerPage);
  };

  return (
    <>
      <motion.div
        className="w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="group mb-10 w-full rounded-xl border border-[#5E00FF]/40 bg-[#2F006F]/30 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#00FFB1]/25 hover:shadow-xl hover:shadow-[#00FFB1]/10 sm:p-8"
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
        >
          {mainProject.thumbnailUrl && (
            <div className="mb-6 overflow-hidden rounded-lg border border-[#2F006F]/60 bg-[#000000]">
              <img
                src={mainProject.thumbnailUrl}
                alt={`Thumbnail for ${mainProject.title}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          )}

          <h3 className="mb-2 text-2xl font-bold text-[#F8F9FA] sm:text-3xl">
            {mainProject.title}
          </h3>
          <p className="mb-6 font-mono text-xs tracking-wider text-[#00FFB1]/70">
            {mainProject.category} &mdash; {mainProject.time}
          </p>
          <p className="mb-6 text-sm leading-relaxed text-[#B0BEC5]">
            {mainProject.desc}
          </p>

          <div className="mb-6 rounded-lg border border-[#E500FF]/30 bg-[#1A0033]/60 p-4">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#E500FF]/80">
              // The Challenge
            </p>
            <p className="text-sm leading-relaxed text-[#B0BEC5]">
              {mainProject.challenge}
            </p>
          </div>

          <div className="mb-6 rounded-lg border border-[#00FFB1]/30 bg-[#1A0033]/60 p-4">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00FFB1]/80">
              // The Solution Backend
            </p>
            <p className="text-sm leading-relaxed text-[#B0BEC5]">
              {mainProject.solution}
            </p>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {mainProject.techStack.map((tech, i) => (
              <span
                key={i}
                className="rounded-md border border-[#5E00FF]/40 bg-[#2F006F]/20 px-2.5 py-1 font-mono text-[11px] text-[#B388FF]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 border-t border-[#5E00FF]/30 pt-4">
            <a
              href={mainProject.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[#00FFB1] transition duration-300 hover:text-[#00FFB1]/80"
            >
              <FiExternalLink className="h-4 w-4" /> Live Demo
            </a>
            <a
              href={mainProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[#B0BEC5] transition duration-300 hover:text-[#F8F9FA]"
            >
              <FiGithub className="h-4 w-4" /> GitHub
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restProjects.map((item) => (
            <motion.div
              key={item.id}
              className="group rounded-xl border border-[#5E00FF]/30 bg-[#2F006F]/15 p-5 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-[#E500FF]/30 hover:shadow-lg hover:shadow-[#E500FF]/10 sm:p-6"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 flex h-36 items-center justify-center overflow-hidden rounded-lg bg-[#000000] sm:h-44">
                {item.thumbnailUrl ? (
                  <img
                    src={item.thumbnailUrl}
                    alt={`Thumbnail for ${item.title}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="font-mono text-xs text-[#6A1B9A]/60">
                    {t("project.noImage")}
                  </span>
                )}
              </div>
              <h4 className="mb-2 text-lg font-bold text-[#F8F9FA]">
                {item.title}
              </h4>
              <p className="mb-3 min-h-[48px] text-sm leading-relaxed text-[#B0BEC5]">
                {item.desc}
              </p>
              <div className="flex items-center justify-end text-sm">
                <a
                  href={`/project/${item.id}`}
                  className="flex items-center font-medium text-[#00FFB1] transition duration-300 hover:text-[#00FFB1]/80"
                >
                  {t("portfolio.detail")}{" "}
                  <FiExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {visibleCount < portfolioItems.length && (
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={showMoreItems}
            className="cursor-pointer rounded-lg border border-[#E500FF]/30 bg-[#E500FF]/10 px-8 py-3 text-base font-bold text-[#E500FF] backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-[#E500FF]/60 hover:shadow-lg hover:shadow-[#E500FF]/20"
          >
            {t("portfolio.seeMore")}
          </button>
        </motion.div>
      )}
    </>
  );
};
