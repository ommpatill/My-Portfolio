"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { assets } from "../../assets/assets";
import { projectsData } from "./data";
import Project from "./Project";
import SectionHeading from "./SectionHeading";
  
export default function Projects({ limit }) {
  const { isDarkMode } = useTheme();
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-[12%] py-10 scroll-mt-12 lg:scroll-mt-20 lg:min-h-screen lg:flex lg:flex-col lg:justify-center"
    >
      <SectionHeading subheading="Applying Skills to Real-World Problems">
        Featured Projects
      </SectionHeading>
      <p className="text-center max-w-2xl mx-auto mb-16 font-Ovo leading-relaxed text-gray-700 dark:text-gray-300">
        I have a strong desire to develop my career in Java, and these projects showcase my
        skills in full-stack development. From frontend design to backend implementation,
        each project reflects my focus on efficiency, scalability, and user-centric design.
      </p>
      
      <div className="flex flex-col items-center gap-12 sm:gap-16">
        {displayedProjects.map((project, index) => (
          <Project key={index} {...project} index={index} />
        ))}
      </div>

      {limit && (
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="group px-10 py-3 font-semibold border rounded-full border-black  bg-white text-black flex items-center gap-3 w-max mx-auto transition-all duration-300 hover:scale-105 hover:bg-gray-200 active:scale-100 dark:border-white dark:bg-black dark:text-white dark:hover:bg-gray-800"
          >
            Explore all projects
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-4 transition-transform group-hover:translate-x-1" 
            />
          </Link>
        </div>
      )}
    </section>
  );
}