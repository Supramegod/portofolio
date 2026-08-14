import React from "react";
import { Reveal } from "../ui/Section";
import { useLanguage } from "../../../context/LanguageContext";

/**
 * The timeline, migrated here from the deleted home/JourneySection.jsx.
 *
 * WHY IT LIVES ON /about-me: the homepage was pruned to four sections, so the
 * timeline left it — but it could not simply be deleted. AboutSEO.jsx carries a
 * `journeySchema` JSON-LD block of Schema.org `Event` items describing exactly
 * these entries, and Google requires structured data to reflect content that is
 * actually visible on the page. This component is what makes that schema truthful.
 *
 * THEREFORE: `start` / `end` below must stay identical to the `startDate` /
 * `endDate` of the matching `journeySchema` item, and `org` must match its
 * `organizer`. `schemaPosition` records which ListItem each row answers to.
 * If you change a date here, change it there in the same commit.
 *
 * Language-specific prose sits under `en` / `id` (AGENTS.md); dates, orgs, and
 * positions are language-neutral. `num` — not `id` — is the identifier, because
 * `id` is already the Indonesian language key.
 *
 * The two entries the old JourneySection called "Fokus Saat Ini" and "Visi Masa
 * Depan" are deliberately not here: they were undated aspirations, they have no
 * corresponding schema Event, and `aboutPage.trackNote` promises dates.
 */
export const trackRecordEntries = [
  {
    num: "01",
    schemaPosition: 1,
    start: "2022",
    end: "2025",
    period: "2022 — 2025",
    org: "Politeknik Elektronika Negeri Surabaya (PENS)",
    en: {
      title: "D3 Telecommunication Engineering, PENS",
      desc: "Three years on networks, telecommunication systems, and information technology in Surabaya. Graduated 2025 with a 3.48 GPA. The degree is not software, which turned out to matter less than knowing how systems fail.",
    },
    id: {
      title: "D3 Teknik Telekomunikasi, PENS",
      desc: "Tiga tahun di jaringan, sistem telekomunikasi, dan teknologi informasi di Surabaya. Lulus 2025 dengan IPK 3,48. Jurusannya bukan perangkat lunak, dan itu ternyata kurang penting dibanding tahu bagaimana sistem gagal.",
    },
  },
  {
    num: "02",
    schemaPosition: 2,
    start: "2023",
    end: "2023",
    period: "2023",
    org: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    en: {
      title: "National finalist, KRTI",
      desc: "Kontes Robot Terbang Indonesia, held at ITERA Lampung. Fixed Wing division, on electrical — my job was that every component on the aircraft still worked when it left the ground.",
    },
    id: {
      title: "Finalis nasional KRTI",
      desc: "Kontes Robot Terbang Indonesia di ITERA Lampung. Cabang Fixed Wing, bagian electrical — tugas saya memastikan setiap komponen pesawat masih berfungsi saat lepas dari tanah.",
    },
  },
  {
    num: "03",
    schemaPosition: 3,
    start: "2023",
    end: "2023",
    period: "2023",
    org: "Jalu Pradipta",
    en: {
      title: "Started writing software seriously",
      desc: "Programming stopped being coursework. Automation, system integration, and the specific satisfaction of a problem that stays solved.",
    },
    id: {
      title: "Mulai menulis perangkat lunak dengan serius",
      desc: "Pemrograman berhenti jadi tugas kuliah. Automation, integrasi sistem, dan kepuasan khas dari masalah yang selesai dan tetap selesai.",
    },
  },
  {
    num: "04",
    schemaPosition: 4,
    start: "2024",
    end: "2024",
    period: "2024",
    org: "Jalu Pradipta",
    en: {
      title: "Narrowed to backend: Laravel and ERP",
      desc: "The Laravel ecosystem, REST API design, and how a business system is actually laid out. First ERP-shaped applications, none of them in front of a paying user yet.",
    },
    id: {
      title: "Menyempit ke backend: Laravel dan ERP",
      desc: "Ekosistem Laravel, desain REST API, dan bagaimana sistem bisnis sebenarnya disusun. Aplikasi berbentuk ERP pertama, belum satu pun di depan pengguna yang membayar.",
    },
  },
  {
    num: "05",
    schemaPosition: 5,
    start: "2025",
    end: "2025",
    period: "2025",
    org: "PT Shelter Indonesia",
    en: {
      title: "Graduated PENS, backend intern at PT Shelter Indonesia",
      desc: "Straight from the degree into CAIS ERP on Laravel 12 — now 1,203 of its 1,305 commits — plus Smart Warehouse research using a genetic algorithm over MQTT.",
    },
    id: {
      title: "Lulus PENS, intern backend di PT Shelter Indonesia",
      desc: "Langsung dari bangku kuliah ke CAIS ERP di atas Laravel 12 — kini 1.203 dari 1.305 commit-nya — plus riset Smart Warehouse memakai genetic algorithm lewat MQTT.",
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
 * One 1px rule down the left, dated entries hanging off it. Not alternating
 * left/right cards: that layout reads as a template, doubles the horizontal
 * space needed, and collapses to a single column on mobile anyway.
 */
export const TrackRecord = () => {
  const { lang } = useLanguage();
  const entries = trackRecordEntries.map((entry) => resolveEntry(entry, lang));

  return (
    <ol className="mt-10 border-l border-bone md:mt-14">
      {entries.map((entry, index) => (
        <Reveal
          as="li"
          key={entry.num}
          delay={index * 0.04}
          className="relative pb-10 pl-6 last:pb-0 md:pl-10"
        >
          {/* The node: a 5px square on the rule, no ring, no glow. */}
          <span
            aria-hidden="true"
            className="absolute -left-[3px] top-[0.6rem] h-[5px] w-[5px] bg-ink"
          />

          <p className="meta">{entry.period}</p>

          <h3 className="mt-3 text-md text-ink md:text-lg">{entry.title}</h3>

          <p className="meta mt-2 normal-case">{entry.org}</p>

          <p className="measure mt-4 text-base text-slate">{entry.desc}</p>
        </Reveal>
      ))}
    </ol>
  );
};
