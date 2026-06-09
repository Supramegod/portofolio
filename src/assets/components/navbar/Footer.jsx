import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useLanguage } from "../../../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const emailAddress = "jluppradipta@gmail.com";

  return (
    <footer className="bg-gray-950 border-t border-cyan-500/30 py-4 font-sans text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
        <div className="mb-4 flex w-full max-w-7xl flex-col items-center justify-center sm:flex-row sm:justify-between sm:space-y-0">
          <div className="mb-4 text-xl font-extrabold tracking-wider text-gray-400 transition duration-300 sm:mb-0 sm:text-2xl">
            Jalu Pradipta
          </div>

          <div className="flex max-w-sm flex-wrap justify-center gap-x-4 gap-y-2 sm:max-w-none">
            <a
              href="https://github.com/supramegod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 transition duration-200 hover:scale-150 hover:text-cyan-400 sm:text-2xl"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jalupradipta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 transition duration-200 hover:scale-150 hover:text-cyan-400 sm:text-2xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/+6281937385652"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 transition duration-200 hover:scale-150 hover:text-cyan-400 sm:text-2xl"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/jluppradipta_728/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 transition duration-200 hover:scale-150 hover:text-cyan-400 sm:text-2xl"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="text-lg text-gray-400 transition duration-200 hover:scale-150 hover:text-cyan-400 sm:text-2xl"
              title={`Kirim Email ke ${emailAddress}`}
            >
              <AiOutlineMail />
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500 sm:mt-2">
          &copy; {currentYear} Jalu Pradipta. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};
