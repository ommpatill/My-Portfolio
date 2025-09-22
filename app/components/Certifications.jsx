"use client";

import React, { useState } from "react";
import { FiAward, FiArrowUpRight, FiX, FiDownload } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { assets } from "../../assets/assets";
import SectionHeading from "./SectionHeading";

const certificationData = [
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "Infosys Springboard",
    date: "Issued Nov 2023",
    description: "Demonstrated proficiency in core data structures, algorithms, and foundational problem-solving in Java.",
    imageUrl: "/certificates/Om_DSA_java.png",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "J. P. Morgan Chase & Co.",
    date: "Issued Sept 2025",
    description: "Gained practical experience with the software development lifecycle by completing tasks simulating a real-world software engineering workflow at J.P. Morgan.",
    imageUrl: "/certificates/Om_JPMC_JobSimulationCert.png",
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata",
    issuer: "Infosys Springboard",
    date: "Issued Oct 2024",
    description: "Applied principles of formal languages and automata theory to solve complex computational problems.",
    imageUrl: "/certificates/Om_CT_LPF.png",
  },
  {
    title: "Computational Theory: Turing, Transducers, & Complexity",
    issuer: "Infosys Springboard",
    date: "Issued Oct 2024",
    description: "Developed a deep understanding of computational complexity and advanced theoretical models.",
    imageUrl: "/certificates/Om_CT_UsingTTC.png",
  },
  {
    title: "Enhancing the Customer Experience with HCI",
    issuer: "Infosys Springboard",
    date: "Issued Sep 2024",
    description: "Applied Human-Computer Interaction (HCI) principles to improve user satisfaction and product development.",
    imageUrl: "/certificates/Om_HCI.png",
  },
  {
    title: "AI: Human-Computer Interaction Methodologies",
    issuer: "Infosys Springboard",
    date: "Issued Oct 2024",
    description: "Explored advanced methodologies in AI-driven HCI to create more intuitive and intelligent user interfaces.",
    imageUrl: "/certificates/Om_AI_HCI_M.png",
  },
  {
    title: "AI: Human-Computer Interaction Overview",
    issuer: "Infosys Springboard",
    date: "Issued Oct 2024",
    description: "Gained a foundational understanding of AI concepts and their application in modern HCI.",
    imageUrl: "/certificates/Om_AI_HCI.png",
  },
  {
    title: "Problem Solving for Success",
    issuer: "Infosys Springboard",
    date: "Issued Nov 2023",
    description: "Mastered structured problem-solving techniques applicable to software engineering and system design.",
    imageUrl: "/certificates/Om_Problem_Solving.png",
  },
  {
    title: "Introduction to R",
    issuer: "Infosys Springboard",
    date: "Issued Mar 2024",
    description: "Acquired introductory skills in the R programming language for statistical computing and data analysis.",
    imageUrl: "/certificates/Om_Intro_R.png",
  },
];

export default function Certifications({ limit, isStandalonePage = false }) {
  const { isDarkMode } = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);

  const displayedCerts = limit ? certificationData.slice(0, limit) : certificationData;

  return (
    <>
      <section
        id="certifications"
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-12 lg:scroll-mt-10 ${!isStandalonePage ? 'py-10 lg:py-20' : 'pb-10 lg:pb-20'}`}
      >
        <SectionHeading subheading="My Credentials">
          Certifications
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedCerts.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50/80 dark:bg-gray-800/20 backdrop-blur-sm border border-black/5 dark:border-white/10 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/40 p-2 rounded-full">
                  <FiAward className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-Ovo text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.issuer} &bull; {cert.date}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm flex-grow">{cert.description}</p>
              <button
                onClick={() => setSelectedCert(cert)}
                className="text-purple-600 dark:text-purple-400 hover:underline mt-6 inline-flex items-center gap-2 font-semibold self-start"
              >
                <span>View Certificate</span>
                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-16 mb-6">
            <Link
              href="/certifications"
              className="group px-10 py-3 font-semibold border rounded-full border-black  bg-white text-black flex items-center gap-3 w-max mx-auto transition-all duration-300 hover:scale-105 hover:bg-gray-200 active:scale-100 dark:border-white dark:bg-black dark:text-white dark:hover:bg-gray-800"
            >
              View All Certifications
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt="Arrow Icon"
                className="w-4"
              />
            </Link>
          </div>
        )}
      </section>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            // Change 1: Added responsive background color for the modal
            className="relative w-full max-w-5xl max-h-[90vh] bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg p-4 sm:p-6 rounded-xl shadow-2xl flex flex-col cursor-default"
          >
            {/* Change 2: Added responsive text color for the title and icons */}
            <div className="flex justify-between items-center mb-4 text-gray-900 dark:text-white">
              <h3 className="font-semibold text-lg pr-12">{selectedCert.title}</h3>
              <div className="flex items-center gap-4">
                {/* Change 3: Added responsive hover background color for the buttons */}
                <a href={selectedCert.imageUrl} download={`${selectedCert.title.replace(/\s+/g, '_')}.png`} className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors" aria-label="Download certificate">
                  <FiDownload size={20} />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                  aria-label="Close certificate viewer"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>
            <div className="flex-grow overflow-auto rounded-lg">
              <Image
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}