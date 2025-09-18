"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Academic from "./components/Academic";

function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTarget = searchParams.get("scroll");
    if (scrollTarget) {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // ✅ Clean URL (remove ?scroll=xxx after scrolling)
          window.history.replaceState(null, "", "/");
        }
      }, 100);
    }
  }, [searchParams]);

  return null;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Academic />
      <Skills />
      <Experience />
      <Projects limit={3} />
      <Certifications limit={3} />
      <Contact />
      <Footer />
      {/* ✅ Needed for useSearchParams */}
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
    </>
  );
}
