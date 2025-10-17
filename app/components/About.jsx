"use client";

import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  // simple fade-up variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="about"
      className={`w-full px-[12%] py-10 scroll-mt-20 transition-colors duration-300
        ${isDarkMode ? 'bg-neutral-900 text-gray-100' : 'bg-white text-gray-800'}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
    >
      <motion.h4
        className={`text-center mb-2 text-lg font-Ovo ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className={`text-center text-5xl font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        variants={fadeUp}
      >
        {/* Profile Image */}
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none overflow-hidden"
          variants={fadeUp}
        >
          <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
        </motion.div>

        {/* Text and cards */}
        <motion.div className="flex-1" variants={fadeUp}>
          <p className={`mb-10 max-w-2xl font-Ovo ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I’m Marlon Trinidad, a passionate and goal-driven Computer Science graduate from the National University of Laguna. I specialize in creating responsive, user-friendly, and visually appealing websites. My focus is on transforming creative ideas into modern digital experiences through clean and efficient code.
          </p>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className={`rounded-xl p-6 cursor-pointer transform duration-500
                  ${isDarkMode
                    ? 'bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 hover:shadow-[0_8px_25px_rgba(255,255,255,0.04)]'
                    : 'bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]'}`}
                whileHover={{ translateY: -6 }}
                variants={fadeUp}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className={`my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            className={`my-6 font-Ovo ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
            variants={fadeUp}
          >
            Tools I use
          </motion.h4>

          <motion.ul className="flex items-center gap-3 sm:gap-5" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer duration-500
                  ${isDarkMode ? 'bg-neutral-900 border-neutral-700 hover:bg-neutral-800' : 'bg-white border-gray-300 hover:bg-gray-50'}`}
                whileHover={{ y: -6, scale: 1.03 }}
                variants={fadeUp}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
