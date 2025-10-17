"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ed6d1162-0019-484b-ac68-e9fcdd8e2baf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="contact"
      className={`w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20 transition-colors duration-300 
        ${isDarkMode ? 'bg-neutral-900 text-gray-100' : 'bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800'}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
    >
      <motion.h4
        className={`text-center mb-2 text-lg font-Ovo ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
        variants={fadeUp}
      >
        Connect with me
      </motion.h4>

      <motion.h2
        className={`text-center text-5xl font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        variants={fadeUp}
      >
        Get in touch
      </motion.h2>

      <motion.p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        variants={fadeUp}
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      {/* FORM SECTION */}
      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        variants={fadeUp}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mb-6">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className={`w-full p-4 outline-none border rounded-lg transition-all duration-300
              ${isDarkMode
                ? 'bg-neutral-900 border-neutral-700 text-gray-100 placeholder-gray-400 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-700'
                : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-gray-400 focus:ring-2 focus:ring-gray-200'}`}
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className={`w-full p-4 outline-none border rounded-lg transition-all duration-300
              ${isDarkMode
                ? 'bg-neutral-900 border-neutral-700 text-gray-100 placeholder-gray-400 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-700'
                : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-gray-400 focus:ring-2 focus:ring-gray-200'}`}
          />
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
          className={`w-full p-4 outline-none border rounded-lg resize-y transition-all duration-300 mb-6
            ${isDarkMode
              ? 'bg-neutral-900 border-neutral-700 text-gray-100 placeholder-gray-400 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-700'
              : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-gray-400 focus:ring-2 focus:ring-gray-200'}`}
        ></textarea>

        <motion.button
          type="submit"
          className={`py-4 px-8 w-max flex items-center justify-center gap-2 rounded-full mx-auto font-medium transition-all duration-300 shadow-sm
            ${isDarkMode
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-gray-800 text-white hover:bg-gray-900'}`}
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
        >
          Submit now
          <Image
            src={isDarkMode ? assets.right_arrow_black : assets.right_arrow_white}
            alt=""
            className="w-4"
          />
        </motion.button>

        <p className={`mt-4 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
