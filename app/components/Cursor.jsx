"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

/* ------------ snippets ------------ */
const codeSnippets = [
  `// Java: The backbone of robust applications.
class PortfolioWelcome {
  public static void main(String[] args) {
    String visitor = "a discerning recruiter ;)";
    System.out.println("Hello, " + visitor + "! Welcome to my digital workspace.");
    // TODO: Figure out how to offer them a virtual coffee.
    System.out.println("Compiling impressive skills... Please wait.");
  }
}`,
  `// JavaScript: Bringing web pages to life.
async function fetchProjects() {
  console.log('Searching for top-tier code...');
  try {
    // This is a simulation, my actual projects are right here!
    const response = await Promise.resolve({ status: 200, data: '100% Awesome' });
    console.log('Success! Found: ' + response.data);
  } catch (error) {
    console.error("Oops, the code hamster fell off its wheel.");
  }
}`,
  `# Python: As readable as a good story.
def greet_visitor(name="Recruiter"):
    print(f"Hello, {name}! Glad you made it.")
    # Fun fact: This portfolio has zero snakes. I checked.
    potential_hires = ["Om Patil"]
    good_choice = [name for name in potential_hires if name == "Om Patil"]
    print(f"Analyzing candidates... Match found: {good_choice[0]}")`,
  `// C: Welcome to the core level. Mind the memory leaks!
#include <stdio.h>
int main() {
   printf("Hello, World! (The old-school way)\\n");
   // If you see a segfault, you didn't. It's a feature.
   char* status = "Looking for a great developer?";
   printf("Status: %s\\n", status);
   return 0;
}`,
  `// C++: Like C, but with more... everything.
#include <iostream>
class Greeter {
public:
    Greeter() {
        std::cout << "Object constructed. Welcome to the portfolio!" << std::endl;
    }
    void showSkills() {
        std::cout << "Loading skills... they are quite impressive." << std::endl;
    }
};`,
  `-- SQL: Let's query the database for a good candidate...
SELECT
    candidate.name,
    candidate.skill_level,
    candidate.hireability
FROM
    Candidates candidate
JOIN
    Skills s ON candidate.id = s.candidate_id
WHERE
    s.name = 'Java' AND candidate.hireability = 'Extremely High';
-- Spoiler: The query returns 'Om Patil'.`,
  `<header>
  <h1>Welcome, Human!</h1>
</header>
<main>
  <p>You've found the digital home of a dedicated developer.</p>
  </main>`,
  `/* CSS: Making things look good. It's not magic, it's CSS. */
.recruiter-view {
    --primary-color: #8A2BE2; /* A nice purple */
    color: var(--primary-color);
    border: 1px solid #000;
    /* The eternal struggle... but I've mastered it. */
    display: flex;
    align-items: center;
    justify-content: center;
}`
];


const generateCodeBlock = (snippets, length) => {
  let block = "";
  for (let i = 0; i < length; i++) {
    block += snippets[Math.floor(Math.random() * snippets.length)] + "\n\n";
  }
  return block;
};

// Throttle helper function for performance optimization
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};


const Cursor = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [longCode, setLongCode] = useState("");
  const [isOverContent, setIsOverContent] = useState(false);
  
  // ✅ RE-ADDED: State for column calculation
  const [cols, setCols] = useState(
    typeof window !== "undefined"
      ? Math.max(1, Math.ceil(window.innerWidth / 300)) // Use 300 for denser columns
      : 4
  );

  const mouse = {
    x: useSpring(0, { stiffness: 300, damping: 30, mass: 0.5 }),
    y: useSpring(0, { stiffness: 300, damping: 30, mass: 0.5 })
  };

  const maskPosition = useTransform(
    [mouse.x, mouse.y],
    ([latestX, latestY]) =>
      `radial-gradient(20rem circle at ${latestX}px ${latestY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`
  );

  useEffect(() => {
    setIsMounted(true);
    setLongCode(generateCodeBlock(codeSnippets, 400)); // Length can be reduced now
    
    const handleMouseMoveForAnimation = (e) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };

    const handleMouseMoveForDetection = (e) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element && (element.tagName === 'BODY' || element.tagName === 'HTML')) {
        setIsOverContent(false);
      } else {
        setIsOverContent(true);
      }
    };

    const throttledDetection = throttle(handleMouseMoveForDetection, 100);

    // ✅ RE-ADDED: handleResize listener to make columns responsive
    const handleResize = () => {
      setCols(Math.max(1, Math.ceil(window.innerWidth / 300)));
    };

    window.addEventListener("mousemove", handleMouseMoveForAnimation);
    window.addEventListener("mousemove", throttledDetection);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveForAnimation);
      window.removeEventListener("mousemove", throttledDetection);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isMounted) return null;

  // ✅ RE-ADDED: preStyle object for seamless column layout
  const preStyle = {
    columnCount: cols,
    columnGap: "0.5rem", // A tiny gap for texture, avoids messy overlaps
    WebkitColumnBreakInside: "avoid",
    pageBreakInside: "avoid",
    breakInside: "avoid",
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          WebkitMaskImage: maskPosition,
          maskImage: maskPosition,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0">
          {/* This version shows in LIGHT mode (dark text) */}
          <pre
            style={preStyle} // ✅ ADDED style prop
            // ✅ UPDATED: Blur levels are now blur-xs (slight) and blur-sm (stronger)
            className={`text-[10.5px] leading-tight font-mono whitespace-pre-wrap h-full w-full p-12 text-gray-900 block dark:hidden transition-all duration-300 ${isOverContent ? 'blur-sm' : 'blur-xs'}`}
          >
            <code>{longCode}</code>
          </pre>

          {/* This version shows in DARK mode (bright text) */}
          <pre
            style={preStyle} // ✅ ADDED style prop
            // ✅ UPDATED: Blur levels are now blur-xs (slight) and blur-sm (stronger)
            className={`text-[10.5px] leading-tight font-mono whitespace-pre-wrap h-full w-full p-12 text-gray-200 hidden dark:block transition-all duration-300 ${isOverContent ? 'blur-sm' : 'blur-xs'}`}
          >
            <code>{longCode}</code>
          </pre>
        </div>
      </motion.div>
    </div>
  );
};

export default Cursor;