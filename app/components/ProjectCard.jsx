"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  title,
  tags,
  imageUrl,
  githubUrl,
  date,
  contributions,
  productionUrl, 
}) {
  return (
    <div className="h-full group transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <section
        className="bg-gray-100 dark:bg-white/10 border border-black/5 dark:border-transparent 
                        rounded-lg overflow-hidden shadow-lg hover:shadow-xl 
                        transition-all duration-300 flex flex-col h-full"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Project: ${title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-4 md:p-6">
          <div className="flex justify-between items-start gap-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-white/60 md:text-sm">
                {date}
              </p>

              {/* 👇 Live Demo link under title/date */}
              {productionUrl && (
                <a
                  href={productionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            <div className="flex items-center gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black dark:text-white/70 dark:hover:text-white transition"
                  aria-label="View on GitHub"
                >
                  <FaGithub size={24} />
                </a>
              )}
            </div>
          </div>

          <div className="flex-1 mt-3 md:mt-4">
            <h4 className="font-semibold text-gray-800 dark:text-white/90 text-sm">
              Key Contributions:
            </h4>
            <ul className="mt-1 list-disc list-inside space-y-1 text-gray-600 dark:text-white/70 text-sm">
              {(contributions || []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <ul className="flex flex-wrap mt-4 gap-2 pt-4 border-t border-black/10 dark:border-white/10 md:mt-6">
            {(tags || []).map((tag, index) => (
              <li
                className="bg-black/10 text-gray-800 dark:bg.white/10 dark:text-white/80 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
