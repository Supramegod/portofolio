import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../../../context/LanguageContext";

export const portfolioItems = [
  {
    id: 1,
    title: "CAIS ERP System",
    desc: "ERP Laravel 12 dengan modul Leads, Quotation, SPK, PKS, custom SSO (Laravel Sanctum), dashboard approval & sales activity.",
    longDesc:
      "Sistem ERP (Enterprise Resource Planning) bernama CAIS — Customer Activity And Information System, dikembangkan menggunakan Laravel 12. Sistem ini mencakup modul Leads Management, Quotation Engine multi-step dengan approval workflow, PKS (Perjanjian Kerja Sama) dengan version history, SPK (Surat Perintah Kerja), Sales Activity, serta dashboard monitoring. Menggunakan Laravel Sanctum untuk custom SSO, MySQL untuk database, dan Chart.js untuk visualisasi data. Sistem ini dirancang multi-tenant dan telah melalui production deployment.",
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
      "Git",
      "Postman",
      "Docker",
      "Vite",
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
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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

export const ProjectContent = () => {
  const { t } = useLanguage();
  const itemsPerPage = 3;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerPage);
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="bg-slate-800/80 rounded-xl border border-gray-700 p-5 shadow-xl transition duration-300 hover:scale-105 hover:border-cyan-400"
          >
            <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-lg bg-gray-900 sm:h-52">
              {item.thumbnailUrl ? (
                <img
                  src={item.thumbnailUrl}
                  alt={`Thumbnail for ${item.title}`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              ) : (
                <span className="text-sm text-gray-500">{t("project.noImage")}</span>
              )}
            </div>

            <h4 className="mb-2 text-xl font-bold text-white">{item.title}</h4>
            <p className="min-h-[60px] text-sm text-gray-400">{item.desc}</p>

            <div className="mt-4 flex items-center justify-end text-sm">
              <a
                href={`/project/${item.id}`}
                className="flex items-center text-cyan-400 transition duration-300 hover:underline"
              >
                {t("portfolio.detail")} <FiExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < portfolioItems.length && (
        <div className="mt-12 sm:mt-16">
          <button
            onClick={showMoreItems}
            className="text-gray-950 cursor-pointer rounded-lg bg-cyan-500 px-8 py-3 text-base font-bold shadow-lg transition duration-300 hover:bg-cyan-400"
          >
            {t("portfolio.seeMore")}
          </button>
        </div>
      )}
    </>
  );
};
