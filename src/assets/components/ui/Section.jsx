import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Section rhythm. Deliberately NOT one constant — uniform 96px padding
 * everywhere is the clearest tell of a generated layout (plan §1).
 * Values come from the plan: 112 / 64 / 144 / 80.
 */
export const RHYTHM = {
  1: "py-14 md:py-[7rem]", // 112 — after the hero, breathing room
  2: "py-10 md:py-16", // 64  — tight, follows a heading closely
  3: "py-16 md:py-36", // 144 — before a new topic
  4: "py-12 md:py-20", // 80  — closing sections
};

/** 400ms fade + 8px rise, once. Plan §8 scopes motion to exactly this. */
export const revealVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Reveals children on first scroll into view, then never animates again.
 * Honours `prefers-reduced-motion` by rendering the final state immediately —
 * the CSS override in index.css collapses durations, but skipping the
 * transform entirely avoids any chance of a stuck offset.
 */
export const Reveal = ({ children, className = "", delay = 0, as = "div" }) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (reduced) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
};

/**
 * Small monospace label above a section heading — a brutalist borrowing
 * that gives the page print-like structure (plan §8).
 */
export const SectionLabel = ({ children, number }) => (
  <p className="meta mb-5 flex items-baseline gap-3">
    {number ? <span aria-hidden="true">{number}</span> : null}
    <span>{children}</span>
  </p>
);

/**
 * Section shell. `rhythm` picks the vertical padding; `bleed` opts out of
 * the centred container so a child can run to the viewport edge.
 */
export const Section = ({
  id,
  children,
  rhythm = 4,
  bleed = false,
  className = "",
  labelledBy,
}) => (
  <section
    id={id}
    aria-labelledby={labelledBy}
    className={`${RHYTHM[rhythm] ?? RHYTHM[4]} ${className}`}
  >
    {bleed ? (
      children
    ) : (
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>
    )}
  </section>
);
