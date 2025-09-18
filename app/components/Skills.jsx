"use client";

import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";

// Updated skills data from your resume
const skillsData = {
  Languages: ["Java", "Python", "SQL", "JavaScript", "C++", "C"],
  Frameworks: ["Spring Boot", "ReactJS", "Node.js", "Express.js", "Flask"],
  Libraries: [
    "Kafka",
    "Hibernate with JPA",
    "Spring MVC",
    "Spring Data",
    "JUnit",
    "AWS",
  ],
  Methodologies: ["Agile", "RESTful APIs", "Microservices", "OOP", "DSA"],
  Databases: ["MySQL", "MongoDB", "SQLite"],
  Tools: ["IntelliJ IDEA", "VS Code", "Git", "Postman", "JIRA", "Docker"],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Languages");

  return (
    <div
      id="skills"
      className="w-full px-4 sm:px-[12%] py-10 lg:py-20 scroll-mt-12 lg:scroll-mt-10 min-h-screen"
    >
      <SectionHeading subheading="My Core Competencies">
        Technical Arsenal
      </SectionHeading>

      {/* Tabs */}
      <div className="w-full overflow-x-auto pb-4 mb-8">
        <div className="flex justify-start md:justify-center gap-4 md:gap-8 border-b border-gray-200 dark:border-white/10">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm md:text-base font-semibold transition-colors duration-300 relative whitespace-nowrap ${
                activeTab === tab
                  ? "text-purple-500 border-b-2 border-purple-500"
                  : "text-gray-500 hover:text-black dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-auto gap-4 max-w-6xl mx-auto">
        {skillsData[activeTab].map((skill) => (
          <div
            key={skill}
            className="group relative flex items-center justify-center p-4 h-24 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-md cursor-pointer transition-transform hover:scale-[1.05] hover:-translate-y-1"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-br from-purple-400 to-pink-400"></div>
            <p className="font-semibold text-gray-800 dark:text-white z-10 text-center">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
