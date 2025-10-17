"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Header = ({ isDarkMode }) => {
  return (
    <motion.div
      id="header"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-10 sm:pt-16"
      // 👆 added top padding to push content slightly down
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>

      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Hi! I'm Marlon Trinidad
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        aspiring front-end developer from the Philippines.
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        I am a motivated and detail-oriented Computer Science graduate with a strong passion for web development and design. I’m dedicated to creating visually appealing, user-friendly, and responsive websites that provide great user experiences.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* CONTACT ME button */}
        <a
          href="#contact"
          className={`inline-flex px-10 py-3 rounded-full items-center gap-2 border shadow-sm transition-colors
            ${
              isDarkMode
                ? "bg-white text-black border-white hover:bg-gray-100"
                : "bg-black text-white border-black hover:bg-black/90"
            }`}
        >
          contact me{" "}
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_black
                : assets.right_arrow_white
            }
            alt=""
            className="w-4"
          />
        </a>

        {/* MY RESUME button */}
        <a
          href="/Marlon-Trinidad-Resume.pdf"
          download
          className={`inline-flex px-10 py-3 rounded-full items-center gap-2 border shadow-sm transition-colors
            ${
              isDarkMode
                ? "bg-black text-white border-white hover:bg-neutral-900"
                : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:text-gray-900"
            }`}
        >
          my resume{" "}
          <Image
            src={isDarkMode ? assets.download_white : assets.download_icon}
            alt=""
            className="w-5 sm:w-6"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Header;
