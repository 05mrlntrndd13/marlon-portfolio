"use client";

import React from "react";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Duplicate File Detection Model",
      description:
        "A Python-based hybrid similarity detection system for identifying exact and near-duplicate files using MinHash, LSH, and perceptual hashing techniques.",
      tech: "Python • MinHash • LSH • pHash • dHash",
    },
    {
      title: "Gym E-Commerce Website",
      description:
        "Developed a simple gym e-commerce website focused on front-end design and database integration using PHP and MySQL.",
      tech: "PHP • MySQL • XAMPP Apache",
    },
    {
      title: "Grading System Web Application",
      description:
        "Collaborated as a front-end developer on a grading system with authentication, using Laravel, Laravel Breeze, and MySQL for database management.",
      tech: "Laravel • Laravel Breeze • MySQL • XAMPP Apache",
    },
    {
      title: "Point of Sales (POS) System",
      description:
        "Built a POS application to manage sales tracking and inventory operations efficiently using C# and MySQL.",
      tech: "C# • MySQL",
    },
    {
      title: "2D Video Game",
      description:
        "Created an engaging interactive game in Scratch as part of a game development course, focusing on user experience and basic logic.",
      tech: "Scratch",
    },
  ];

  return (
    <div
      id="work"
      className={`w-full px-4 sm:px-8 lg:px-[12%] py-16 scroll-mt-20 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-b from-neutral-900 to-neutral-950 text-gray-100"
          : "bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
      }`}
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-lg font-Ovo text-gray-500"
      >
        My Portfolio
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-Ovo mb-6"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`text-center max-w-2xl mx-auto mb-12 font-Ovo ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Explore a collection of projects showcasing my expertise in front-end and software development.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-xl p-6 border transition-all hover:-translate-y-2 duration-500 ${
              isDarkMode
                ? "bg-neutral-800 border-gray-700 hover:bg-neutral-700"
                : "bg-white border-gray-200 hover:bg-gray-50"
            } shadow-md hover:shadow-xl`}
          >
            <h3 className="text-2xl font-semibold mb-2 font-Ovo">
              {project.title}
            </h3>
            <p
              className={`text-sm mb-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {project.description}
            </p>
            <p
              className={`text-sm italic ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {project.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
