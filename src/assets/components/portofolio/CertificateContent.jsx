import React from "react";
import { Reveal } from "../ui/Section";
import { useLanguage } from "../../../context/LanguageContext";

/**
 * Single source of truth for certificates shown on /about-me.
 *
 * Consumed by:
 *   - src/pages/profile/AboutMe.jsx  (section 03, "Certificates")
 *
 * Language-specific prose is nested under `en` / `id` so no display string is
 * hardcoded in one language (AGENTS.md). `num`, `year`, and `fileUrl` are
 * language-neutral.
 *
 * `num` — not `id` — carries the identifier: `id` is already the Indonesian
 * language key, and a second `id` in the same object literal would overwrite it.
 *
 * Every `fileUrl` below was checked against `public/` before being linked:
 *   public/docs/sertifikat1.pdf
 *   public/images/sertifikat1.jpg … sertifikat5.jpg
 * Do not add a row whose file is not on disk — a dead certificate link is
 * worse than no row.
 */
export const certificateItems = [
  {
    num: "01",
    year: "2025",
    fileUrl: "/docs/sertifikat1.pdf",
    en: {
      title: "Competency Certificate",
      note: "Software development and information systems.",
      format: "PDF",
    },
    id: {
      title: "Sertifikat Kompetensi",
      note: "Pengembangan perangkat lunak dan sistem informasi.",
      format: "PDF",
    },
  },
  {
    num: "02",
    year: "2025",
    fileUrl: "/images/sertifikat2.jpg",
    en: {
      title: "Competency Certificate 2",
      note: "Supporting software development competencies.",
      format: "JPG",
    },
    id: {
      title: "Sertifikat Kompetensi 2",
      note: "Pendukung kompetensi pengembangan perangkat lunak.",
      format: "JPG",
    },
  },
  {
    num: "03",
    year: "2025",
    fileUrl: "/images/sertifikat3.jpg",
    en: {
      title: "Competency Certificate 3",
      note: "Supporting software development competencies.",
      format: "JPG",
    },
    id: {
      title: "Sertifikat Kompetensi 3",
      note: "Pendukung kompetensi pengembangan perangkat lunak.",
      format: "JPG",
    },
  },
  {
    num: "04",
    year: "2025",
    fileUrl: "/images/sertifikat4.jpg",
    en: {
      title: "Competency Certificate 4",
      note: "Supporting software development competencies.",
      format: "JPG",
    },
    id: {
      title: "Sertifikat Kompetensi 4",
      note: "Pendukung kompetensi pengembangan perangkat lunak.",
      format: "JPG",
    },
  },
  {
    num: "05",
    year: "2025",
    fileUrl: "/images/sertifikat5.jpg",
    en: {
      title: "Competency Certificate 5",
      note: "Supporting software development competencies.",
      format: "JPG",
    },
    id: {
      title: "Sertifikat Kompetensi 5",
      note: "Pendukung kompetensi pengembangan perangkat lunak.",
      format: "JPG",
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
 * Hairline table rows — no thumbnails, no cards. Five image cards was the
 * heaviest, least readable block on the old page. The table scrolls inside
 * its own container so the page body never gains a horizontal scrollbar.
 */
export const CertificateContent = () => {
  const { t, lang } = useLanguage();
  const items = certificateItems.map((item) => resolveEntry(item, lang));

  return (
    <Reveal className="mt-10 md:mt-14">
      <div className="overflow-x-auto">
        {/* min-width only from sm up. At 360px a hard 34rem min-width pushes
            the layout viewport wider than the screen even though the wrapper
            scrolls, which gives the whole page a horizontal scrollbar. */}
        <table className="w-full border-collapse text-left sm:min-w-[34rem]">
          <caption className="sr-only">{t("aboutPage.certLabel")}</caption>
          <tbody>
            {items.map((item) => (
              <tr key={item.num} className="border-b border-bone">
                <td className="meta py-5 pr-6 align-top">{item.year}</td>
                <td className="py-5 pr-6 align-top">
                  <p className="text-base text-ink">{item.title}</p>
                  <p className="measure mt-1 text-xs text-slate">{item.note}</p>
                </td>
                {/* Format is the least useful column; drop it on phones so the
                    remaining three fit 360px without sideways scrolling. */}
                <td className="meta hidden py-5 pr-6 align-top sm:table-cell">
                  {item.format}
                </td>
                <td className="py-5 align-top">
                  <a
                    href={item.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-mist pb-1 text-xs text-ink transition-colors hover:border-ink"
                  >
                    {t("aboutPage.certView")}
                    <span className="sr-only"> — {item.title}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
};
