import React, { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectSEO } from "../../assets/components/seo/ProjectSEO";
import { useLanguage } from "../../context/LanguageContext";
import { FiExternalLink } from "react-icons/fi";
import { FaCode, FaStar, FaGithub, FaClock } from "react-icons/fa";
import { portfolioItems } from "../../assets/components/portofolio/ProjectContent";
import { Navbar } from "../../assets/components/navbar/Navbar";
import { Loading } from "../../assets/components/loading/Loading";
import { motion } from "framer-motion";

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
      delay: 0.2,
    },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Portofolio = () => {
  const { t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const project = portfolioItems.find((item) => item.id === parseInt(id));

  useEffect(() => {
    const minimumLoadTime = 700;
    const startTime = Date.now();
    let timer;

    setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = minimumLoadTime - elapsedTime;

      timer = setTimeout(
        () => {
          setIsLoading(false);
          if (!project) {
            navigate("/404", { replace: true });
          }
        },
        Math.max(0, remainingTime),
      );
    }, 50);

    return () => clearTimeout(timer);
  }, [id, navigate, project]);

  const featuresList = project?.features || [];
  const technologiesList = project?.techStack || [];
  const githubLink = project?.githubUrl || "#";
  const mainDescription = project?.longDesc || project?.desc;

  const handleProjectLinkClickBreadcrumb = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        window.history.replaceState(null, null, `/#${sectionId}`);
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Logika retry untuk memastikan scroll
          setTimeout(() => {
            const retryElement = document.getElementById(sectionId);
            if (retryElement) {
              retryElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 300);
        }
      }, 100);
    },
    [navigate],
  );

  if (isLoading || !project) {
    return <Loading />;
  }

  if (!project) {
    return null;
  }

  return (
    <>
      <ProjectSEO project={project} />

      <Navbar />

      <motion.div
        className="from-gray-950 to-blue-950 via-slate-800 bg-linear-to-r min-h-screen px-4 pb-16 pt-20 sm:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <div className="mx-auto max-w-7xl pt-4">
          <motion.div
            className="mb-8 flex items-center space-x-2 text-sm text-gray-400"
            variants={itemVariants}
          >
            <a
              href="/"
              onClick={(e) => handleProjectLinkClickBreadcrumb(e, "home")}
              className="hover:text-cyan-400"
            >
              {t("project.breadcrumbHome")}
            </a>
            <span>/</span>
            <a
              href="/#portfolio"
              onClick={(e) => handleProjectLinkClickBreadcrumb(e, "portfolio")}
              className="hover:text-cyan-400"
            >
              {t("project.breadcrumbProject")}
            </a>
            <span>/</span>
            <span className="cursor-default font-medium text-cyan-400 underline">
              {project.title}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <motion.div
              className="order-1 space-y-8 lg:col-span-3"
              variants={contentFadeInVariants("left")}
            >
              <div className="space-y-3">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center justify-between gap-y-2">
                  <p className="text-lg text-gray-300">{project.category}</p>

                  {project.time && (
                    <p className="text-md flex items-center text-cyan-400">
                      <FaClock className="mr-2 h-4 w-4 text-gray-400" />
                      {project.time}
                    </p>
                  )}
                </div>
              </div>

              <div className="block lg:hidden">
                <motion.div
                  className="overflow-hidden rounded-xl border border-gray-700 shadow-2xl"
                  variants={itemVariants}
                >
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="h-auto w-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="space-y-8">
                <p className="whitespace-pre-wrap pt-0 text-xl leading-relaxed text-gray-400">
                  {mainDescription}
                </p>

                <motion.div
                  className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                  variants={staggerContainerVariants}
                >
                  <motion.a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-linear-to-r inline-flex flex-1 items-center justify-center rounded-lg from-cyan-600 to-blue-700 px-6 py-3 text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-cyan-500"
                    variants={itemVariants}
                  >
                    {t("project.liveDemo")}
                    <FiExternalLink className="ml-2 h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-600 px-6 py-3 text-lg font-bold text-gray-300 shadow transition duration-300 hover:bg-gray-800 hover:text-white"
                    variants={itemVariants}
                  >
                    {t("project.github")}
                    <FaGithub className="ml-2 h-5 w-5" />
                  </motion.a>
                </motion.div>

                <motion.div
                  className="bg-slate-800/60 rounded-xl border border-gray-700 p-6"
                  variants={staggerContainerVariants}
                >
                  <h2 className="mb-4 flex items-center text-xl font-bold text-white">
                    <FaCode className="mr-2 text-cyan-400" />                     {t("project.techUsed")}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {technologiesList.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="rounded-full bg-gray-700/70 px-3 py-1 text-sm font-medium text-cyan-300"
                        variants={itemVariants}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="order-2 space-y-8 lg:col-span-2"
              variants={contentFadeInVariants("right")}
            >
              <div className="hidden overflow-hidden rounded-xl border border-gray-700 shadow-2xl lg:block">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="h-auto w-full object-cover"
                />
              </div>

              <motion.div
                className="bg-slate-800/60 rounded-xl border border-gray-700 p-8 shadow-xl"
                variants={staggerContainerVariants}
              >
                <h2 className="mb-5 flex items-center text-2xl font-bold text-white">
                  <FaStar className="mr-3 text-yellow-400" />                   {t("project.features")}
                </h2>
                <ul className="list-none space-y-3 pl-0">
                  {featuresList.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-lg text-gray-300"
                      variants={itemVariants}
                    >
                      <span className="mr-3 mt-1 font-bold text-cyan-400">
                        &#9679;
                      </span>{" "}
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
