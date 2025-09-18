"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const experienceData = [
  {
    id: "unified-mentor",
    role: "Fullstack Web Development Intern",
    company: "Unified Mentor Pvt. Ltd.",
    date: "August 2025 - November 2025",
    teaser:
      "Gained hands-on MERN stack experience, built a personal portfolio, and learned the full development cycle from Git to deployment.",
    summary: [
      "Gained practical MERN stack experience, achieving proficiency in React.js and Redux while building multiple real-world projects.",
      "Finalized my personal portfolio project, focusing on dynamic functionality and responsive design.",
      "Learned the full development cycle from version control with Git to deployment on platforms like Vercel.",
      "Mastered foundational web technologies: HTML5, CSS3, and Modern JavaScript (ES6+).",
    ],
  },
  {
    id: "internshala",
    role: "Software Developer Intern",
    company: "Internshala",
    date: "July 2022 - August 2022",
    teaser:
      "Developed Python automation solutions, reducing manual task effort by 20%, and optimized an SQLite database for a 35% faster query speed.",
    summary: [
      "Developed & tested automation solutions using Python, reducing manual task effort by 20% and improving process efficiency.",
      "Optimized an SQLite database for performance, achieving a 35% faster query speed through strategic indexing.",
      "Collaborated with cross-functional teams to translate business requirements into technical solutions.",
    ],
  },
];

const Experience = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (clickedItem && !e.target.closest("#experience-cards")) {
        setClickedItem(null);
        setHoveredItem(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [clickedItem]);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.97 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      transition: { type: "spring", stiffness: 300, damping: 18 },
    },
    clicked: {
      scale: 1.02,
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    },
  };

  const summaryVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };

  const bulletPointVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4 },
    }),
  };

  const handleMouseEnter = (item) => !clickedItem && setHoveredItem(item);
  const handleMouseLeave = () => !clickedItem && setHoveredItem(null);
  const handleClick = (item) => {
    setClickedItem(clickedItem?.id === item.id ? null : item);
    setHoveredItem(clickedItem?.id === item.id ? null : item);
  };
  const handleCloseClick = () => {
    setClickedItem(null);
    setHoveredItem(null);
  };

  const activeItem = clickedItem || hoveredItem;

  return (
    <>
      <motion.div
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full px-4 sm:px-[12%] py-2 scroll-mt-24"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-2 text-lg font-Ovo text-purple-500"
        >
          My Professional Journey
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center text-4xl sm:text-5xl font-Ovo mb-12"
        >
          Experience
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-center">
          {/* Left Column */}
          <div
            id="experience-cards"
            className="w-full lg:w-1/2 flex flex-col gap-4"
          >
            {experienceData.map((item) => (
              <motion.div
                key={item.id}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                whileTap="clicked"
                variants={cardVariants}
                viewport={{ once: false, amount: 0.8 }}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(item)}
                className={`bg-gray-50 dark:bg-darkHover/30 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg p-6 cursor-pointer relative overflow-hidden will-change-transform ${
                  activeItem?.id === item.id ? "ring-2 ring-purple-500" : ""
                }`}
              >
                <div className="relative z-20">
                  <h3 className="text-xl font-semibold font-Ovo text-gray-900 dark:text-white">
                    {item.role}
                  </h3>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    {item.company}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.date}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    {item.teaser}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-4 relative">
            <div className="w-full max-w-lg min-h-[400px] relative">
              <AnimatePresence mode="wait">
                {activeItem ? (
                  <motion.div
                    key={activeItem.id}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={summaryVariants}
                    viewport={{ once: false }}
                    className="absolute inset-0 bg-white dark:bg-darkHover/30 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg p-6 flex flex-col"
                  >
                    {clickedItem && (
                      <motion.button
                        onClick={handleCloseClick}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X size={24} />
                      </motion.button>
                    )}
                    <h3 className="text-xl font-semibold font-Ovo text-purple-500 mb-4">
                      Key Accomplishments
                    </h3>
                    <motion.ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm space-y-2">
                      {activeItem.summary.map((point, i) => (
                        <motion.li
                          key={i}
                          variants={bulletPointVariants}
                          initial="hidden"
                          animate="visible"
                          custom={i}
                        >
                          {point}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder-desktop"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={summaryVariants}
                    viewport={{ once: false }}
                    className="absolute inset-0 flex items-center justify-center text-center text-lg font-Ovo text-purple-500 p-6"
                  >
                    <p className="tracking-wide">
                      <span className="text-2xl mb-2 block animate-pulse">✨</span>
                      Hover over an experience for a quick glance, or click to
                      lock for more details.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Experience;
