import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { useLanguage } from "../../../context/LanguageContext";

const certificateItems = (t) => [
  {
    id: 1,
    title: t("portfolio.certTitle"),
    desc: t("portfolio.certDesc"),
    category: "Sertifikat",
    fileUrl: "/docs/sertifikat.pdf",
    thumbnailUrl: "",
  },
];

export const CertificateContent = () => {
  const { t } = useLanguage();
  const items = certificateItems(t);
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-slate-800/80 rounded-xl border border-gray-700 p-5 shadow-xl transition duration-300 hover:scale-105 hover:border-cyan-400"
        >
          <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-900 text-sm text-gray-500 sm:h-64">
            {item.thumbnailUrl ? (
              <img
                src={item.thumbnailUrl}
                alt={`Thumbnail ${item.title}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-cyan-900/40 text-cyan-400">
                <HiOutlineDocumentText className="h-20 w-20" />
              </div>
            )}
          </div>

          <h4 className="mb-1 text-lg font-bold text-white sm:text-xl">
            {item.title}
          </h4>
          <p className="text-xs text-gray-400 sm:text-sm">{item.desc}</p>
          <a
            href={item.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-xs text-cyan-400 transition duration-300 hover:underline sm:text-sm"
          >
            {t("portfolio.certView")} <FiExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
      ))}
    </div>
  );
};
