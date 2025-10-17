import React from "react";
import { motion } from "framer-motion";

const Experiences = ({ isDarkMode }) => {
  return (
    <div
      id="experiences"
      className={`w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-b from-neutral-900 to-neutral-950 text-gray-100"
          : "bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
      }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Experience
      </motion.h2>

      {/* FIXED TEXT COLOR HERE */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo transition-colors duration-300 ${
          isDarkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        A glimpse into my hands-on experience and the skills I developed during
        my internship journey.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`max-w-3xl mx-auto rounded-xl border ${
          isDarkMode
            ? "border-gray-700 bg-neutral-800 hover:bg-neutral-700"
            : "border-gray-200 bg-white hover:bg-gray-50"
        } shadow-sm hover:shadow-lg p-8 transition-all duration-500`}
      >
        <h3 className="text-2xl font-semibold font-Ovo mb-2">
          Intern – BytesCrafter Software Development & I.T. Solutions
        </h3>
        <p
          className={`text-sm mb-4 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          February 2025 – March 2025
        </p>

        <ul className="list-disc ml-5 space-y-2 text-[15px] leading-relaxed">
          <li>
            Designed UI/UX wireframes and layouts using Figma for company and
            client websites.
          </li>
          <li>
            Assisted in WordPress development, improving site functionality and
            design.
          </li>
          <li>Contributed to system testing, bug reporting, and troubleshooting.</li>
          <li>
            Provided IT support for data encoding, PC troubleshooting, and
            system inquiries.
          </li>
          <li>
            Collaborated with development and marketing teams, strengthening
            teamwork and communication skills.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Experiences;
