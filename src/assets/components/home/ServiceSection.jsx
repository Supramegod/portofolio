import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCode, FaLightbulb } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { useLanguage } from "../../../context/LanguageContext";

const ServiceItem = ({
  icon: Icon,
  title,
  description,
  color,
  ring,
  iconColor,
  variants,
}) => (
  <motion.div
    className={`relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-[#5E00FF]/40 bg-[#2F006F]/20 p-6 text-left shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-[#00FFB1]/30 hover:shadow-lg hover:shadow-[#00FFB1]/15`}
    variants={variants}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
  >
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${color} opacity-15 blur-2xl`}
      animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />

    <div
      className={`relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1A0033]/60 ${ring} ring-2 backdrop-blur-sm transition-all duration-300`}
    >
      <motion.div whileHover={{ scale: 1.2, rotate: 4 }} className={iconColor}>
        <Icon className="h-6 w-6" />
      </motion.div>
    </div>

    <h4 className="relative z-10 mb-2 text-lg font-bold text-[#F8F9FA]">
      {title}
    </h4>

    <motion.p
      className="relative z-10 text-sm leading-relaxed text-[#B0BEC5]"
      whileHover={{ opacity: 1 }}
      initial={{ opacity: 0.8 }}
      transition={{ duration: 0.25 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

const getServices = (t) => [
  {
    icon: FaLaptopCode,
    title: t("services.svc1Title"),
    color: "from-[#00FFB1]/20 to-blue-500/20",
    ring: "ring-[#00FFB1]/30",
    iconColor: "text-[#00FFB1]",
    description: t("services.svc1Desc"),
  },
  {
    icon: FaCode,
    title: t("services.svc2Title"),
    color: "from-[#E500FF]/20 to-pink-500/20",
    ring: "ring-[#E500FF]/30",
    iconColor: "text-[#E500FF]",
    description: t("services.svc2Desc"),
  },
  {
    icon: FaLightbulb,
    title: t("services.svc3Title"),
    color: "from-yellow-500/20 to-orange-500/20",
    ring: "ring-yellow-500/30",
    iconColor: "text-yellow-300",
    description: t("services.svc3Desc"),
  },
  {
    icon: GiGears,
    title: t("services.svc4Title"),
    color: "from-green-500/20 to-emerald-500/20",
    ring: "ring-green-500/30",
    iconColor: "text-green-400",
    description: t("services.svc4Desc"),
  },
];

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
    transition: { delayChildren: 0.15, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contentFadeInVariants = (direction = "up") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
    y: direction === "up" ? 80 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

export const ServiceSection = ({ SectionComponent }) => {
  const { t } = useLanguage();
  const services = getServices(t);
  return (
    <SectionComponent
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#000000] via-[#000000] to-[#2F006F]/50"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E500FF]/5 blur-[150px]" />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-0">
        <motion.div
          className="mb-10 text-center"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-2 py-4 text-4xl font-extrabold text-[#F8F9FA] sm:text-5xl">
            {t("services.title")}
          </h2>
          <p className="flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-[#B388FF]/70 sm:text-sm">
            <RiCustomerServiceFill className="mr-1 hidden h-4 w-4 lg:mr-2 lg:flex" />
            {t("services.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} variants={itemVariants} />
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          variants={contentFadeInVariants("up")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#B0BEC5]/70 sm:text-base">
            {t("services.cta")}
          </p>
        </motion.div>
      </div>
    </SectionComponent>
  );
};
