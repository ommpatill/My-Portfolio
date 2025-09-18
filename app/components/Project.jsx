"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  date,
  contributions,
}) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <section
        className="group bg-gray-100 border border-black/5 rounded-lg overflow-hidden shadow-lg 
                   hover:shadow-xl transition-shadow duration-300 
                   dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10
                   flex flex-col md:flex-row"
      >
        <div className="relative h-48 w-full flex-shrink-0 md:h-auto md:w-2/5 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Project: ${title}`}
            fill
            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex-1 p-4 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">
                {title}
              </h3>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-white/70 hover:scale-110 hover:text-gray-950 dark:hover:text-white transition ml-2 flex-shrink-0"
                aria-label="View on GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <p className="mt-1 text-xs text-gray-600 dark:text-white/60 md:text-sm">{date}</p>
            
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/80 text-sm md:block">
              {description}
            </p>

            <div className="mt-3 md:mt-4">
              <h4 className="font-semibold text-gray-800 dark:text-white/90 text-sm">
                Key Contributions:
              </h4>
              <ul className="mt-1 list-disc list-inside space-y-1 text-gray-600 dark:text-white/70 text-sm">
                {(contributions || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <ul className="flex flex-wrap mt-4 gap-2 md:mt-6">
            {(tags || []).map((tag, i) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-white/10 dark:text-white/80"
                key={i}
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