"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Footer from "../components/Footer";
import AllProjectsList from "../components/AllProjectsList";
import ProjectsPageHeader from "../components/PagesHeader"; // Corrected import based on your code

export default function AllProjectsPage() {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen">
        <ProjectsPageHeader title="projects" />

        <div className="w-full mt-8 px-4">
          <AllProjectsList isStandalonePage={true} />
        </div>
        
        <div className="text-center my-16">
          <Link
            href="/#projects"
            className="group px-10 py-3 font-semibold border rounded-full border-black bg-white text-black flex items-center gap-3 w-max mx-auto transition-all duration-300 hover:scale-105 hover:bg-gray-200 active:scale-100 dark:border-white dark:bg-black dark:text-white dark:hover:bg-gray-800"
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}