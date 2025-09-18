"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Header = () => {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 3,
      },
    },
  };

  const headline = "Architecting Scalable Solutions with Java & Modern Full-Stack Expertise.";
  const description = "A highly driven Software Developer from Pune, transforming complex problems into high-performance digital experiences.";

  // --- 3D Tilt Effect Logic ---
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div id="top" className="w-full min-h-screen px-4 sm:px-[12%] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white dark:bg-darkTheme [mask-image:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(200,200,200,0.6),rgba(255,255,255,0))]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 w-full max-w-6xl"
      >
        <div className="flex flex-col items-center justify-center order-1 lg:order-1 text-center">
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-d" }}
            variants={itemVariants}
            className="relative w-48 h-48 sm:w-60 sm:h-60 p-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-[length:200%_200%] animate-gradient"
          >
            <div className="w-full h-full bg-white dark:bg-darkTheme rounded-full p-1 relative">
              <Image
                src={assets.profile_img}
                alt="Om Patil"
                fill
                priority={true}
                sizes="(max-width: 640px) 192px, 240px"
                className="relative rounded-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.h3
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-xl md:text-2xl mt-6 font-Ovo font-semibold text-gray-800 dark:text-purple-400"
          >
            Hello, I'm Om Patil <Image src={assets.hand_icon} alt='' className="w-6" />
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="max-w-md text-center mt-2 font-Ovo text-gray-700 dark:text-gray-300"
          >
            {description}
          </motion.p>
        </div>

        <div className="text-center lg:text-left order-2 lg:order-2">
          <motion.h1
            variants={containerVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-Ovo leading-tight 
                       text-gray-900 
                       dark:bg-gradient-to-r dark:from-purple-400 dark:via-pink-500 dark:to-orange-400 
                       dark:bg-clip-text dark:text-transparent 
                       dark:bg-[length:200%_200%] dark:animate-gradient"
          >
            {headline.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            variants={buttonVariants}
            className="flex flex-row items-center justify-center lg:justify-start gap-4 mt-6 lg:mt-8"
          >
            <a href="#contact" className="px-8 py-3 w-auto justify-center rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2">
              Contact Me
              <span>&rarr;</span>
            </a>
            <a
              href="/OmPatil_Resume.pdf"
              download
              className="px-8 py-3 w-auto justify-center rounded-full font-semibold 
                         bg-black text-white hover:bg-gray-800
                         dark:bg-darkTheme dark:text-white dark:border dark:border-gray-600 dark:hover:border-white
                         flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              My Resume
              <Image src={assets.download_icon} alt="" className="w-4 invert" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;