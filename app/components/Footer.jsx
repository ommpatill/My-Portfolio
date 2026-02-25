"use client";

import { assets } from '../../assets/assets';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className="w-full px-4 sm:px-[12%] py-10 text-gray-700 dark:text-gray-300 font-Ovo">
      <div className="flex flex-col items-center mb-8">
        <a href="#top" className="transition-transform duration-300 hover:scale-105">
          <Image 
            src={isDarkMode ? assets.logogifdark : assets.logogiflight} 
            alt="Om Patil Logo" 
            className="w-32 sm:w-36 mx-auto mb-2" 
          />
        </a>

        <div className="flex items-center gap-2">
          <Image 
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
            alt="mail icon" 
            className="w-5" 
          />
          <span className="text-sm sm:text-base">omlpatil0609@gmail.com</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 dark:border-gray-700 mx-auto max-w-6xl py-6">
        <p className="order-2 sm:order-1 text-sm sm:text-base mt-6 sm:mt-0">
          © 2026 Om Patil. All rights reserved.
        </p>
        <p className="order-2 sm:order-1 text-sm sm:text-base mt-6 sm:mt-0">
          Updated: February, 2026
        </p>
        
        <ul className="flex items-center gap-6 order-1 sm:order-2">
          <li>
            <a 
              href="https://github.com/ommpatill" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="text-gray-600 dark:text-gray-400 transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/ompatill/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="text-gray-600 dark:text-gray-400 transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/u/ommpatill/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LeetCode Profile"
              className="text-gray-600 dark:text-gray-400 transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <SiLeetcode size={24} />
            </a>
          </li>
          <li>
            <a 
              href="https://instagram.com/ommpatil.__" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram Profile"
              className="text-gray-600 dark:text-gray-400 transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <FaInstagram size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;