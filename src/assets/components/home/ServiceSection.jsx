import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCode, FaLightbulb } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { useLanguage } from "../../../context/LanguageContext";

// Komponen Item Layanan
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
    className={`relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-gray-700 bg-gray-900/80 p-6 text-left shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl`}
    style={{
      background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
    }}
    variants={variants}
    whileHover={{ y: -8, transition: { duration: 0.35 } }}
  >
    {/* Glow Background Moving */}
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 blur-2xl`}
      animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.25, 0.18] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Icon */}
    <div
      className={`relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800/40 ${ring} ring-4 transition-all duration-300`}
    >
      <motion.div whileHover={{ scale: 1.15 }} className={iconColor}>
        <Icon className="h-7 w-7" />
      </motion.div>
    </div>

    {/* Title */}
    <h4 className="relative z-10 mb-3 text-xl font-bold text-white">{title}</h4>

    {/* Description */}
    <motion.p
      className="relative z-10 text-sm text-gray-400"
      whileHover={{ opacity: 1 }}
      initial={{ opacity: 0.75 }}
      transition={{ duration: 0.3 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

const getServices = (t) => [
  {
    icon: FaLaptopCode,
    title: t("services.svc1Title"),
    color: "from-cyan-500/20 to-blue-500/20",
    ring: "ring-cyan-400/40",
    iconColor: "text-cyan-400",
    description: t("services.svc1Desc"),
  },
  {
    icon: FaCode,
    title: t("services.svc2Title"),
    color: "from-purple-500/20 to-pink-500/20",
    ring: "ring-purple-400/40",
    iconColor: "text-purple-400",
    description: t("services.svc2Desc"),
  },
  {
    icon: FaLightbulb,
    title: t("services.svc3Title"),
    color: "from-yellow-500/20 to-orange-500/20",
    ring: "ring-yellow-400/40",
    iconColor: "text-yellow-300",
    description: t("services.svc3Desc"),
  },
  {
    icon: GiGears,
    title: t("services.svc4Title"),
    color: "from-green-500/20 to-emerald-500/20",
    ring: "ring-green-400/40",
    iconColor: "text-green-400",
    description: t("services.svc4Desc"),
  },
];

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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
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

// Komponen Utama
export const ServiceSection = ({ SectionComponent }) => {
  const { t } = useLanguage();
  const services = getServices(t);
  return (
    <SectionComponent id="services" className="relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-900/10 blur-[150px]"></div>

      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          className="mb-10 text-center"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-2 py-4 text-4xl font-extrabold text-white sm:text-5xl">
            {t("services.title")}
          </h2>
          <p className="flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-cyan-400 sm:text-sm">
            <RiCustomerServiceFill className="mr-1 hidden h-4 w-4 lg:mr-2 lg:flex" />
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Grid Layanan */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} variants={itemVariants} />
          ))}
        </motion.div>

        {/* Call to Action (CTA) */}
        <motion.div
          className="mt-16 text-center"
          variants={contentFadeInVariants("up")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            {t("services.cta")}
          </p>
        </motion.div>
      </div>
    </SectionComponent>
  );
};
