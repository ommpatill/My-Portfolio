"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPageHeader({ title = "projects" }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-500/20 font-mono text-sm"
    >
      <div className="text-gray-500 dark:text-gray-400">
        <Link href="/" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
          ompatil
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-black dark:text-white">{title}</span>
      </div>

      <motion.button
        onClick={toggleTheme}
        className="p-2.5 rounded-full text-gray-500 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors duration-200"
        aria-label="Toggle theme"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9, rotate: -15 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDarkMode ? "moon" : "sun"}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25 }}
          >
            {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </motion.header>
  );
};