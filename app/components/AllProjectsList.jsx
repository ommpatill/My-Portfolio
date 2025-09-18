"use client";

import React from "react";
// Change 1: Import 'projectsData' to match the export from your data file.
import { projectsData } from "./data"; 
import ProjectCard from "./ProjectCard";

export default function AllProjectsList({ isStandalonePage = false }) {
  return (
    <section
      id="projects"
      className={`w-full max-w-7xl mx-auto ${!isStandalonePage ? 'pt-16' : ''}`}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold font-Ovo text-gray-900 dark:text-white">
          Code in Action
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          A showcase of my comprehensive work in Java development and beyond, demonstrating expertise in full-stack architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Change 2: Map over the correctly imported 'projectsData' array. */}
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index} // Using index as a key since there's no id
            title={project.title}
            date={project.date}
            description={project.description}
            contributions={project.contributions}
            technologies={project.tags} // Using 'tags' from your data file
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}