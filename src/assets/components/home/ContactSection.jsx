import React from "react";
import { Reveal, Section, SectionLabel } from "../ui/Section";
import { useLanguage } from "../../../context/LanguageContext";

const EMAIL_KEY = "contact.email";

/**
 * No form. A form implies a backend that does not exist here, and a mailto
 * link is one tap on every device. The list is hairline-separated so it reads
 * as an index rather than a row of buttons.
 */
export const ContactSection = () => {
  const { t } = useLanguage();

  const links = [
    {
      id: "email",
      label: t("contact.emailLabel"),
      value: t(EMAIL_KEY),
      href: `mailto:${t(EMAIL_KEY)}`,
      external: false,
    },
    {
      id: "github",
      label: t("contact.githubLabel"),
      value: "github.com/supramegod",
      href: "https://github.com/supramegod",
      external: true,
    },
    {
      id: "linkedin",
      label: t("contact.linkedinLabel"),
      value: "linkedin.com/in/jalupradipta",
      href: "https://www.linkedin.com/in/jalupradipta/",
      external: true,
    },
    {
      id: "instagram",
      label: t("contact.instagramLabel"),
      value: "@jluppradipta_728",
      href: "https://www.instagram.com/jluppradipta_728/",
      external: true,
    },
  ];

  return (
    <Section
      id="contact"
      rhythm={4}
      labelledBy="contact-heading"
      className="border-t border-bone"
    >
      <SectionLabel number="03">{t("contact.label")}</SectionLabel>

      <Reveal>
        <h2 id="contact-heading" className="text-lg text-ink md:text-xl">
          {t("contact.title")}
        </h2>
        <p className="measure mt-5 text-base text-slate">{t("contact.lead")}</p>
      </Reveal>

      <Reveal className="mt-10 border-t border-bone md:mt-14">
        <ul>
          {links.map((link) => (
            <li key={link.id} className="border-b border-bone">
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex flex-col gap-1 py-5 transition-colors hover:bg-bone/40 md:flex-row md:items-baseline md:gap-8 md:py-6"
              >
                {/* min-width, never a fixed width: the ID labels run longer. */}
                <span className="meta md:min-w-[8rem]">{link.label}</span>
                <span className="text-base text-ink underline decoration-mist decoration-1 underline-offset-4 md:text-md">
                  {link.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
};
