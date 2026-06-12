import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

const certificateItems = (t) => [
  {
    id: 1,
    title: t("portfolio.certTitle"),
    desc: t("portfolio.certDesc"),
    category: "Sertifikat",
    fileUrl: "/docs/sertifikat1.pdf",
    thumbnailUrl: "/images/sertifikat1.jpg",
  },
  {
    id: 2,
    title: t("portfolio.certTitle2"),
    desc: t("portfolio.certDesc2"),
    category: "Sertifikat",
    fileUrl: "/images/sertifikat2.jpg",
    thumbnailUrl: "/images/sertifikat2.jpg",
  },
  {
    id: 3,
    title: t("portfolio.certTitle3"),
    desc: t("portfolio.certDesc3"),
    category: "Sertifikat",
    fileUrl: "/images/sertifikat3.jpg",
    thumbnailUrl: "/images/sertifikat3.jpg",
  },
  {
    id: 4,
    title: t("portfolio.certTitle4"),
    desc: t("portfolio.certDesc4"),
    category: "Sertifikat",
    fileUrl: "/images/sertifikat4.jpg",
    thumbnailUrl: "/images/sertifikat4.jpg",
  },
  {
    id: 5,
    title: t("portfolio.certTitle5"),
    desc: t("portfolio.certDesc5"),
    category: "Sertifikat",
    fileUrl: "/images/sertifikat5.jpg",
    thumbnailUrl: "/images/sertifikat5.jpg",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const CertificateContent = () => {
  const { t } = useLanguage();
  const items = certificateItems(t);
  return (
    <motion.div
      className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="group rounded-xl border border-[#5E00FF]/30 bg-[#2F006F]/15 p-5 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-[#00FFB1]/25 hover:shadow-lg hover:shadow-[#00FFB1]/10 sm:p-6"
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
        >
          <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-lg bg-[#000000] sm:h-64">
            <img
              src={item.thumbnailUrl}
              alt={`Thumbnail ${item.title}`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <h4 className="mb-1 text-lg font-bold text-[#F8F9FA] sm:text-xl">
            {item.title}
          </h4>
          <p className="text-xs text-[#B0BEC5] sm:text-sm">{item.desc}</p>
          <a
            href={item.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-xs font-medium text-[#00FFB1] transition duration-300 hover:text-[#00FFB1]/80 sm:text-sm"
          >
            {t("portfolio.certView")} <FiExternalLink className="ml-1 h-3 w-3" />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};
