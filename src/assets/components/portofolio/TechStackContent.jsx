import React from "react";
import { Reveal } from "../ui/Section";
import { useLanguage } from "../../../context/LanguageContext";

/**
 * Single source of truth for the stack shown on /about-me.
 *
 * Consumed by:
 *   - src/pages/profile/AboutMe.jsx  (section 02, "What I work in")
 *
 * Language-specific prose is nested under `en` / `id` so no display string is
 * hardcoded in one language (AGENTS.md). Everything outside those two objects
 * is language-neutral: group numbers and tool names.
 *
 * `num` — not `id` — carries the identifier, because `id` is already the
 * Indonesian language key and a second `id` in the same object literal would
 * silently overwrite it.
 *
 * Order is the claim `aboutPage.stackNote` makes: most-shipped first. It is
 * drawn from ProjectContent.jsx, so the two never disagree.
 */
export const techStackGroups = [
  {
    num: "01",
    items: [
      "Laravel 12",
      "PHP 8.2",
      "MySQL",
      "Laravel Sanctum",
      "REST + OpenAPI",
    ],
    en: {
      label: "Backend, day to day",
      note: "75,500 lines of production ERP live here.",
    },
    id: {
      label: "Backend, sehari-hari",
      note: "75.500 baris ERP production tinggal di sini.",
    },
  },
  {
    num: "02",
    items: ["Go 1.25", "Fiber", "PostgreSQL", "sqlc"],
    en: {
      label: "Backend, second language",
      note: "One API in production use, repository layer generated from SQL.",
    },
    id: {
      label: "Backend, bahasa kedua",
      note: "Satu API yang dipakai, layer repository di-generate dari SQL.",
    },
  },
  {
    num: "03",
    items: ["React 19", "Redux Toolkit", "Vite 7", "Tailwind 4"],
    en: {
      label: "Frontend",
      note: "Enough to ship my own clients, including this page.",
    },
    id: {
      label: "Frontend",
      note: "Cukup untuk merilis klien sendiri, termasuk halaman ini.",
    },
  },
  {
    num: "04",
    items: ["Flutter", "Dart 3.10", "Riverpod", "go_router"],
    en: {
      label: "Mobile",
      note: "10,856 lines across ten enforced feature modules.",
    },
    id: {
      label: "Mobile",
      note: "10.856 baris di sepuluh modul fitur yang batasnya ditegakkan.",
    },
  },
  {
    num: "05",
    items: ["Docker", "GitLab CI", "Kubernetes", "nginx", "AWS S3"],
    en: {
      label: "Shipping it",
      note: "Images built in CI, probes that actually probe something.",
    },
    id: {
      label: "Mengirimkannya",
      note: "Image dibangun di CI, probe yang benar-benar memeriksa sesuatu.",
    },
  },
];

/**
 * Flattens one entry for the active language.
 * Falls back to English prose so a missing translation renders real text
 * rather than `undefined`. Mirrors `resolveProject` in ProjectContent.jsx.
 */
export const resolveEntry = (item, lang) => {
  if (!item) return null;
  const copy = item[lang] ?? item.en;
  const { en, id: idCopy, ...rest } = item;
  return { ...rest, ...copy };
};

/**
 * Hairline rows, not a card grid: five identical cards is precisely the
 * templated look this redesign removes (plan §1). The label column is a
 * fraction, never a fixed width, because Indonesian labels run longer.
 */
export const TechStackContent = () => {
  const { lang } = useLanguage();
  const groups = techStackGroups.map((group) => resolveEntry(group, lang));

  return (
    <ul className="mt-10 border-t border-bone md:mt-14">
      {groups.map((group, index) => (
        <Reveal
          as="li"
          key={group.num}
          delay={index * 0.04}
          className="grid grid-cols-1 gap-x-8 gap-y-3 border-b border-bone py-6 md:grid-cols-12 md:py-7"
        >
          <p className="meta flex items-baseline gap-3 md:col-span-4">
            <span aria-hidden="true">{group.num}</span>
            <span>{group.label}</span>
          </p>

          <div className="md:col-span-8">
            <p className="text-base text-ink">{group.items.join(" · ")}</p>
            <p className="measure mt-2 text-xs text-slate">{group.note}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
};
