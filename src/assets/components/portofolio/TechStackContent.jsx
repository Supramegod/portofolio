import React from "react";

import { FaPhp, FaGitAlt, FaGithub, FaNpm, FaDocker } from "react-icons/fa";
import {
  SiLaravel,
  SiMysql,
  SiPostman,
  SiChartdotjs,
  SiGitlab,
  SiComposer,
} from "react-icons/si";
import { TbApi, TbBrandVscode } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";

const skillsData = [
  // Backend
  { name: "Laravel 12", icon: SiLaravel, color: "text-red-500" },
  { name: "PHP 8.x", icon: FaPhp, color: "text-indigo-400" },
  { name: "RESTful API", icon: TbApi, color: "text-pink-500" },
  { name: "Laravel Sanctum", icon: SiLaravel, color: "text-orange-500" },
  { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
  { name: "Chart.js", icon: SiChartdotjs, color: "text-pink-400" },

  // Tools & DevOps
  { name: "Git", icon: FaGitAlt, color: "text-orange-700" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "GitLab", icon: SiGitlab, color: "text-orange-400" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "Composer", icon: SiComposer, color: "text-yellow-500" },
  { name: "NPM", icon: FaNpm, color: "text-red-600" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-600" },
];

const SkillItem = ({ skill, Icon, color }) => (
  <div
    key={skill}
    className="flex h-24 w-24 flex-col items-center justify-center rounded-lg border border-gray-700/50 bg-gray-900/50 p-4 text-center transition duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-lg hover:shadow-indigo-500/20 sm:h-28 sm:w-28"
  >
    <Icon className={`mb-2 h-8 w-8 sm:h-10 sm:w-10 ${color}`} />
    <p className="text-xs font-semibold text-white sm:text-sm">{skill}</p>
  </div>
);

export const TechStackContent = () => (
  <div className="bg-slate-800/80 mt-4 rounded-xl border border-gray-700 p-6 shadow-xl sm:p-8">
    <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 sm:gap-8 lg:mx-auto lg:max-w-6xl lg:grid-cols-8">
      {skillsData.map((item) => (
        <SkillItem
          key={item.name}
          skill={item.name}
          Icon={item.icon}
          color={item.color}
        />
      ))}
    </div>
  </div>
);
