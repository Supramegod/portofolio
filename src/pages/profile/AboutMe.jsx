import React, { useEffect, useState } from "react";
import { AboutSEO } from "../../assets/components/seo/AboutSEO";
import { useLanguage } from "../../context/LanguageContext";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaLightbulb,
  FaHeart,
  FaUserTie,
} from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import Foto from "../../assets/img/Foto.jpg";
import { Navbar } from "../../assets/components/navbar/Navbar";
import { Loading } from "../../assets/components/loading/Loading";
import { motion } from "framer-motion";

const hobbies = [
  "Bermain Futsal",
  "Bermain Game",
  "Menonton Film",
  "Mendengarkan Musik",
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export const AboutMe = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const minimumLoadTime = 700;
    const startTime = Date.now();
    let timer;

    timer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = minimumLoadTime - elapsedTime;

      setTimeout(
        () => {
          setIsLoading(false);
        },
        Math.max(0, remainingTime),
      );
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const interest = [t("intro.badge1"), t("intro.badge2"), t("intro.badge3")];

  const categorizedSkills = {
    [t("aboutme.skillBackend")]: [
      "Laravel 12",
      "Laravel Sanctum",
      "RESTful API Development",
      "PHP 8.x",
      "MySQL",
      "Chart.js",
    ],
    [t("aboutme.skillSystem")]: [
      "ERP System Design",
      "Dashboard & Data Visualization",
      "SSO Implementation",
      "Production Deployment",
    ],
    [t("aboutme.skillTools")]: [
      "Git & GitHub",
      "Postman",
      "Visual Studio Code",
      "Composer",
      "Docker",
    ],
  };

  const myExperiences = [
    {
      title: t("aboutme.expTitle"),
      company: t("aboutme.expCompany"),
      duration: t("aboutme.expDuration"),
      jobdesk: [
        t("aboutme.expTask1"),
        t("aboutme.expTask2"),
        t("aboutme.expTask3"),
        t("aboutme.expTask4"),
      ],
    },
  ];

  const myEducation = [
    {
      degree: t("aboutme.eduDegree"),
      institution: t("aboutme.eduInstitution"),
      duration: "2022-2025",
      gpa: "3,48",
    },
  ];

  const myEducationNonFormal = [];

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.div
      className="from-gray-950 to-blue-950 via-slate-800 bg-linear-to-br min-h-screen px-4 pb-16 sm:px-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <AboutSEO />

      <Navbar handleSmoothScroll={handleSmoothScroll} />

      <div className="mx-auto max-w-7xl pt-24 sm:pt-[100px]">
        <motion.header className="mb-8 text-center" variants={fadeIn}>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            {t("aboutme.subtitle")}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div
            className="lg:order-0 order-1 space-y-8 lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="bg-slate-800/60 rounded-xl border border-gray-700 p-8 shadow-2xl"
              variants={fadeInLeft}
            >
              <div className="mx-auto mb-6 h-60 w-60 overflow-hidden rounded-xl border-4 border-cyan-400/50 bg-gray-700/70 shadow-inner">
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={Foto}
                    loading="lazy"
                    alt="Foto Profil Jalu Pradipta"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h2 className="mb-4 text-center text-3xl font-bold text-white">
                Jalu Pradipta
              </h2>

              <p className="mb-6 text-center text-lg text-gray-400">
                D3 Teknik Telekomunikasi | Backend Developer
              </p>

              <div className="space-y-3 text-gray-300">
                <p className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-cyan-400">Email:</span>
                  <span className="text-right">jluppradipta@gmail.com</span>
                </p>
                <p className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-cyan-400">Telepon:</span>
                  <span className="text-right">+62 819-3738-5652</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-cyan-400">Lokasi:</span>
                  <span className="text-right">Surabaya, Indonesia</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/60 hidden rounded-xl border border-gray-700 p-8 shadow-2xl lg:block"
              variants={fadeInLeft}
            >
              <h2 className="mb-5 flex items-center text-2xl font-bold text-white">
                <FaHeart className="mr-3 text-pink-400" /> {t("aboutme.hobbies")}
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-300">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-pink-400">&#9679;</span>
                    {hobby}
                  </li>
                ))}
              </ul>
              <h2 className="mb-5 mt-6 flex items-center text-2xl font-bold text-white">
                <FaBriefcase className="mr-3 text-cyan-400" /> {t("aboutme.interests")}
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-300">
                {interest.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-cyan-400">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.section
              className="bg-slate-800/60 hidden space-y-6 rounded-xl border border-gray-700 p-6 shadow-xl lg:block"
              variants={fadeInLeft}
            >
              <h2 className="flex items-center text-3xl font-bold text-white">
                <FaCode className="mr-3 text-yellow-400" />
                {t("aboutme.expertise")}
              </h2>

              {Object.keys(categorizedSkills).map((category) => (
                <div key={category} className="pt-2">
                  <h3 className="mb-3 text-xl font-semibold text-cyan-400">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {categorizedSkills[category].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="rounded-full bg-gray-700/70 px-4 py-1 text-sm font-medium text-white shadow-md transition duration-200 hover:bg-gray-600"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + index * 0.05,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.section>
          </motion.div>

          <motion.div
            className="lg:order-0 order-2 space-y-12 lg:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.section
              className="lg:order-0 order-2 space-y-4"
              variants={fadeInRight}
            >
                <h2 className="flex items-center border-b border-cyan-500/50 pb-2 text-3xl font-bold text-white">
                  <FaUserTie className="mr-3 text-cyan-400" /> {t("aboutme.summary")}
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  {t("aboutme.summary1")}
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  {t("aboutme.summary2")}
                </p>
            </motion.section>

            <motion.section
              className="lg:order-0 order-3 space-y-6"
              variants={fadeInRight}
            >
                <h2 className="flex items-center border-b border-cyan-500/50 pb-2 text-3xl font-bold text-white">
                  <MdWorkHistory className="mr-3 text-green-400" /> {t("aboutme.experience")}
                </h2>
              <div className="space-y-6">
                {myExperiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-cyan-400 pl-4"
                    variants={fadeInRight}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="font-medium text-cyan-300">
                      {exp.company} | {exp.duration}
                    </p>
                    <ul className="mt-2 list-none space-y-1 text-gray-400">
                      {exp.jobdesk.map((point, i) => {
                        const match = point.match(/^(.*?)(\(.*?\))(.*)$/);
                        return (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1.5 text-cyan-400">
                              &#9679;
                            </span>
                            <span>
                              {match ? (
                                <>
                                  {match[1]}
                                  <span className="rounded-md border border-cyan-500/30 bg-cyan-500/20 px-1.5 py-0.5 text-sm font-medium text-cyan-300">
                                    {match[2]}
                                  </span>
                                  {match[3]}
                                </>
                              ) : (
                                point
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="lg:order-0 order-4 space-y-6"
              variants={fadeInRight}
            >
                <h2 className="flex items-center border-b border-cyan-500/50 pb-2 text-3xl font-bold text-white">
                  <FaGraduationCap className="mr-3 text-red-400" /> {t("aboutme.education")}
                </h2>
              <div className="space-y-4">
                {myEducation.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-cyan-400 pl-4"
                    variants={fadeInRight}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="font-medium text-gray-300">
                      {edu.institution} | {edu.duration}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {myEducationNonFormal.length > 0 && (
              <motion.section
                className="lg:order-0 order-4 space-y-6"
                variants={fadeInRight}
              >
                <h2 className="flex items-center border-b border-cyan-500/50 pb-2 text-3xl font-bold text-white">
                  <GiBookmarklet className="mr-3 text-blue-400" /> Education
                  Non-Formal
                </h2>
                <div className="space-y-4">
                  {myEducationNonFormal.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="border-l-4 border-cyan-400 pl-4"
                      variants={fadeInRight}
                    >
                      <h3 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="font-medium text-gray-300">
                        {edu.institution}
                      </p>
                      <p className="mt-1 text-sm text-gray-400">
                        {edu.duration}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            <motion.div
              className="bg-slate-800/60 lg:order-0 order-5 rounded-xl border border-gray-700 p-8 shadow-2xl lg:hidden"
              variants={fadeInRight}
            >
              <h2 className="mb-5 flex items-center text-2xl font-bold text-white">
                <FaHeart className="mr-3 text-pink-400" /> {t("aboutme.hobbies")}
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-300">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-pink-400">&#9679;</span>
                    {hobby}
                  </li>
                ))}
              </ul>

              <h2 className="mb-5 mt-6 flex items-center text-2xl font-bold text-white">
                <FaBriefcase className="mr-3 text-cyan-400" /> {t("aboutme.interests")}
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-300">
                {interest.map((interest, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-blue-400">&#9679;</span>
                    {interest}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.section
              className="bg-slate-800/60 lg:order-0 order-6 space-y-4 rounded-xl border border-gray-700 p-6 shadow-xl"
              variants={fadeInRight}
            >
              <h2 className="flex items-center text-3xl font-bold text-white">
                <FaLightbulb className="mr-3 text-amber-400" /> {t("aboutme.future")}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {t("aboutme.futureText")}
              </p>
            </motion.section>

            <motion.section
              className="bg-slate-800/60 lg:order-0 order-7 space-y-6 rounded-xl border border-gray-700 p-6 shadow-xl lg:hidden"
              variants={fadeInRight}
            >
              <h2 className="flex items-center text-3xl font-bold text-white">
                <FaCode className="mr-3 text-yellow-400" />
                {t("aboutme.expertise")}
              </h2>

              {Object.keys(categorizedSkills).map((category) => (
                <div key={category} className="pt-2">
                  <h3 className="mb-3 text-xl font-semibold text-cyan-400">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {categorizedSkills[category].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="rounded-full bg-gray-700/70 px-4 py-1 text-sm font-medium text-white shadow-md transition duration-200 hover:bg-gray-600"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + index * 0.05,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.section>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
