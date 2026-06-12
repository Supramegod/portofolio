import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaServer,
  FaBriefcase,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageContext";

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const getMilestones = (t) => [
  {
    year: "2022",
    icon: FaGraduationCap,
    title: t("journey.2022.title"),
    desc: t("journey.2022.desc"),
    tags: ["Telecommunications", "Networking", "Technology Systems"],
    gradient: "from-[#5E00FF]/20 to-[#7C3AED]/20",
    iconColor: "text-[#B388FF]",
    ring: "ring-[#5E00FF]/30",
    nodeColor: "border-[#5E00FF] bg-[#5E00FF]/30",
    lineColor: "bg-[#5E00FF]/30",
  },
  {
    year: "2023",
    icon: FaCode,
    title: t("journey.2023.title"),
    desc: t("journey.2023.desc"),
    tags: ["Programming", "Automation", "System Integration"],
    gradient: "from-[#7C3AED]/20 to-[#9333EA]/20",
    iconColor: "text-[#C084FC]",
    ring: "ring-[#7C3AED]/30",
    nodeColor: "border-[#7C3AED] bg-[#7C3AED]/30",
    lineColor: "bg-[#7C3AED]/30",
  },
  {
    year: "2024",
    icon: FaServer,
    title: t("journey.2024.title"),
    desc: t("journey.2024.desc"),
    tags: ["Laravel", "REST API", "Database Design", "Software Architecture"],
    gradient: "from-[#9333EA]/20 to-[#E500FF]/20",
    iconColor: "text-[#E500FF]",
    ring: "ring-[#E500FF]/30",
    nodeColor: "border-[#E500FF] bg-[#E500FF]/30",
    lineColor: "bg-[#E500FF]/30",
  },
  {
    year: "2025",
    icon: FaBriefcase,
    title: t("journey.2025.title"),
    desc: t("journey.2025.desc"),
    tags: ["Laravel 12", "CAIS ERP", "Genetic Algorithm", "MQTT"],
    gradient: "from-[#E500FF]/20 to-[#00FFB1]/20",
    iconColor: "text-[#00FFB1]",
    ring: "ring-[#00FFB1]/30",
    nodeColor: "border-[#00FFB1] bg-[#00FFB1]/30",
    lineColor: "bg-[#00FFB1]/30",
  },
  {
    year: t("journey.current.title"),
    icon: FaLayerGroup,
    title: t("journey.current.title"),
    desc: t("journey.current.desc"),
    tags: ["Backend", "ERP", "API Architecture", "System Integration"],
    gradient: "from-[#00FFB1]/20 to-[#00E5A0]/20",
    iconColor: "text-[#00FFB1]",
    ring: "ring-[#00FFB1]/30",
    nodeColor: "border-[#00FFB1] bg-[#00FFB1]/30",
    lineColor: "bg-[#00FFB1]/30",
  },
  {
    year: t("journey.future.title"),
    icon: FaRocket,
    title: t("journey.future.title"),
    desc: t("journey.future.desc"),
    tags: ["AI Engineering", "System Architecture", "Leadership", "Entrepreneurship"],
    gradient: "from-[#00FFB1]/20 to-[#E500FF]/20",
    iconColor: "text-[#E500FF]",
    ring: "ring-[#E500FF]/30",
    nodeColor: "border-[#E500FF] bg-[#E500FF]/30",
    lineColor: "bg-[#E500FF]/30",
  },
];

const TimelineNode = ({ milestone, index, isLast, variants }) => (
  <motion.div
    className="relative flex gap-6"
    variants={variants}
  >
    <div className="flex flex-col items-center">
      <div
        className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 backdrop-blur-sm ${milestone.nodeColor} ${milestone.ring} ring-2`}
      >
        <milestone.icon className={`h-5 w-5 ${milestone.iconColor}`} />
      </div>
      {!isLast && (
        <div className={`mt-1 h-full w-0.5 ${milestone.lineColor}`} />
      )}
    </div>

    <div className="flex-1 pb-12">
      <div
        className={`relative overflow-hidden rounded-xl border border-[#5E00FF]/40 bg-[#2F006F]/20 p-5 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-[#00FFB1]/20 hover:shadow-lg hover:shadow-[#00FFB1]/10`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-20 blur-xl`}
        />

        <div className="relative z-10">
          <span className="mb-1 inline-block text-sm font-bold tracking-wider text-[#B388FF]/70">
            {milestone.year}
          </span>
          <h3 className="mb-2 text-lg font-bold text-[#F8F9FA]">
            {milestone.title}
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-[#B0BEC5]">
            {milestone.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {milestone.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-[#00FFB1]/20 bg-[#00FFB1]/5 px-2.5 py-0.5 text-[10px] font-medium text-[#00FFB1]/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const JourneySection = ({ SectionComponent }) => {
  const { t } = useLanguage();
  const data = getMilestones(t);

  return (
    <SectionComponent
      id="journey"
      className="relative overflow-hidden bg-gradient-to-b from-[#000000] via-[#000000] to-[#2F006F]/50"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFB1]/5 blur-[150px]" />

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-0">
        <motion.div
          className="mb-12 text-center"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-2 py-4 text-4xl font-extrabold text-[#F8F9FA] sm:text-5xl">
            {t("journey.title")}
          </h2>
          <p className="mx-auto max-w-xl text-sm font-semibold uppercase tracking-wider text-[#B388FF]/70 sm:text-base">
            {t("journey.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-2xl"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {data.map((milestone, index) => (
            <TimelineNode
              key={index}
              milestone={milestone}
              index={index}
              isLast={index === data.length - 1}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#00FFB1] to-[#00FFB1]/80 px-6 py-3 font-semibold text-[#000000] shadow-lg transition duration-300 hover:scale-105"
          >
            {t("journey.cta.portfolio")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-[#E500FF]/30 px-6 py-3 font-semibold text-[#E500FF] transition duration-300 hover:scale-105 hover:bg-[#E500FF]/10"
          >
            {t("journey.cta.contact")}
          </a>
        </motion.div>
      </div>
    </SectionComponent>
  );
};
