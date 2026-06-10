import React from "react";
import { motion } from "framer-motion";

const groups = [
  {
    id: "01",
    label: "RUNTIME & FRAMEWORK",
    items: ["Laravel 12", "PHP 8.x", "Go"],
  },
  {
    id: "02",
    label: "DATA STORAGE",
    items: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    id: "03",
    label: "TOOLS",
    items: ["REST API", "Sanctum SSO", "Git", "Docker"],
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.12 },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export const TechStackContent = () => (
  <motion.div
    className="mx-auto mt-4 w-full max-w-4xl"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {groups.map((group) => (
        <motion.div
          key={group.id}
          className="rounded-xl border border-[#5E00FF]/30 bg-[#2F006F]/15 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#00FFB1]/25 hover:shadow-lg hover:shadow-[#00FFB1]/10"
          variants={groupVariants}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
        >
          <p className="mb-3 font-mono text-xs tracking-widest text-[#B388FF]/60">
            {group.id} //
          </p>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B0BEC5]">
            {group.label}
          </p>
          <div className="space-y-2">
            {group.items.map((item, i) => (
              <motion.p
                key={i}
                className="font-mono text-sm text-[#F8F9FA]"
                variants={itemVariants}
              >
                &gt; {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);
