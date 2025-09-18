"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "../components/SectionHeading";

// Reusable Academic Card component
const AcademicCard = ({ institution, degree, duration, location, grade }) => {
  return (
    <div className="bg-white/80 dark:bg-darkHover/40 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl shadow-lg px-6 py-4 transition-transform hover:scale-[1.02]">
      <h4 className="mb-1 text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
        {institution}
      </h4>
      <time className="block mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
        {duration}
      </time>
      <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
        {degree} –{" "}
        <span className="text-gray-500">{location}</span>
      </p>
      {grade && (
        <p className="mt-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
          {grade}
        </p>
      )}
    </div>
  );
};


const Academic = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      setHasMounted(true);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const academicData = [
    {
      institution: "BRACT's Vishwakarma Institute of Information Technology",
      degree: "Bachelor of Technology in Information Technology",
      duration: "August 2023 - June 2026 (Expected)",
      location: "Pune, India",
      grade: "CGPA: 7.79",
    },
    {
      institution: "DBATU's Institute of Petrochemical Engineering",
      degree: "Diploma in Information Technology",
      duration: "July 2020 - June 2023",
      location: "Lonere, Raigad",
      grade: "Percentage: 91.30",
    },
    {
      institution: "Sharada Highschool Kasu",
      degree: "Secondary School Certificate (Class 10)",
      duration: "Completed: March 2020",
      location: "Pen, Raigad",
      grade: "Percentage: 83.60%",
    },
  ];

  if (!hasMounted) {
    return null; // Return null to prevent hydration mismatch on first server render
  }

  return (
    <div id="academic" className="w-full px-4 sm:px-[12%] py-10 scroll-mt-12 lg:scroll-mt-20">
      
      <SectionHeading subheading={"My Education"}>
        Academic Journey
      </SectionHeading>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical gradient timeline */}
        {!isMobile && (
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-700 -translate-x-1/2"></div>
        )}

        <div className="flex flex-col gap-8">
          {academicData.map((item, index) => (
            <div
              key={index}
              className={`relative flex w-full md:items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline dot with glow */}
              {!isMobile && (
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-purple-500 ring-4 ring-white dark:ring-darkTheme shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
              )}

              {/* Card */}
              <div className="w-full md:w-5/12">
                <AcademicCard {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academic;