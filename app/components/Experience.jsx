
// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// const experienceData = [
//   {
//     id: "unified-mentor",
//     role: "Fullstack Web Development Intern",
//     company: "Unified Mentor Pvt. Ltd.",
//     date: "August 2025 - November 2025",
//     teaser:
//       "Gained hands-on MERN stack experience, built a personal portfolio, and learned the full development cycle from Git to deployment.",
//     summary: [
//       "Gained practical MERN stack experience, achieving proficiency in React.js and Redux while building multiple real-world projects.",
//       "Finalized my personal portfolio project, focusing on dynamic functionality and responsive design.",
//       "Learned the full development cycle from version control with Git to deployment on platforms like Vercel.",
//       "Mastered foundational web technologies: HTML5, CSS3, and Modern JavaScript (ES6+).",
//     ],
//   },
//   {
//     id: "internshala",
//     role: "Software Developer Intern",
//     company: "Internshala",
//     date: "July 2022 - August 2022",
//     teaser:
//       "Developed Python automation solutions, reducing manual task effort by 20%, and optimized an SQLite database for a 35% faster query speed.",
//     summary: [
//       "Developed & tested automation solutions using Python, reducing manual task effort by 20% and improving process efficiency.",
//       "Optimized an SQLite database for performance, achieving a 35% faster query speed through strategic indexing.",
//       "Collaborated with cross-functional teams to translate business requirements into technical solutions.",
//     ],
//   },
// ];

// const Experience = () => {
//   const [activeMobile, setActiveMobile] = useState(null);

//   // Desktop hover/click logic
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [clickedItem, setClickedItem] = useState(null);

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (clickedItem && !e.target.closest("#experience-cards")) {
//         setClickedItem(null);
//         setHoveredItem(null);
//       }
//     };
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [clickedItem]);

//   // Card animation
//   const cardVariants = {
//     initial: { opacity: 0, x: -40 },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: { type: "spring", damping: 20, stiffness: 100 },
//     },
//     hover: {
//       scale: 1.02,
//       boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
//       transition: { type: "spring", stiffness: 300, damping: 18 },
//     },
//     clicked: { scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
//   };

//   const summaryVariants = {
//     initial: { opacity: 0, height: 0 },
//     animate: {
//       opacity: 1,
//       height: "auto",
//       transition: { duration: 0.3 },
//     },
//     exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
//   };

//   const bulletPointVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.4 },
//     }),
//   };

//   // Mobile card toggle
//   const handleClickMobile = (item) => {
//     setActiveMobile(activeMobile === item.id ? null : item.id);
//   };

//   // Desktop hover
//   const handleMouseEnter = (item) => !clickedItem && setHoveredItem(item);
//   const handleMouseLeave = () => !clickedItem && setHoveredItem(null);

//   // ✅ Desktop click-to-lock/unlock
//   const handleClickDesktop = (item) => {
//     if (clickedItem?.id === item.id) {
//       setClickedItem(null);
//       setHoveredItem(null);
//     } else {
//       setClickedItem(item);
//       setHoveredItem(item);
//     }
//   };

//   const handleCloseClick = () => {
//     setClickedItem(null);
//     setHoveredItem(null);
//   };

//   const activeItem = clickedItem || hoveredItem;

//   return (
//     <>
//       <motion.div
//         id="experience"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: false, amount: 0.2 }}
//         // ✅ desktop fix: clip out next section, but no top gap
//         className="w-full px-4 sm:px-[12%] py-2 scroll-mt-24 relative lg:overflow-hidden"
//       >
//         {/* Heading */}
//         <motion.h4
//           initial={{ y: -20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           viewport={{ once: false }}
//           className="text-center mb-2 text-lg font-Ovo text-purple-500"
//         >
//           My Professional Journey
//         </motion.h4>

//         <motion.h2
//           initial={{ y: -20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           viewport={{ once: false }}
//           className="text-center text-4xl sm:text-5xl font-Ovo mb-6"
//         >
//           Experience
//         </motion.h2>

//         <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-start lg:items-center">
//           {/* Left Column */}
//           <div
//             id="experience-cards"
//             className="w-full lg:w-1/2 flex flex-col gap-4"
//           >
//             {experienceData.map((item) => (
//               <motion.div
//                 key={item.id}
//                 initial="initial"
//                 whileInView="animate"
//                 whileHover="hover"
//                 whileTap="clicked"
//                 variants={cardVariants}
//                 viewport={{ once: false, amount: 0.6 }}
//                 onMouseEnter={() => handleMouseEnter(item)}
//                 onMouseLeave={handleMouseLeave}
//                 onClick={() =>
//                   window.innerWidth >= 1024
//                     ? handleClickDesktop(item)
//                     : handleClickMobile(item)
//                 }
//                 className={`bg-gray-50 dark:bg-darkHover/30 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg cursor-pointer relative overflow-hidden will-change-transform`}
//               >
//                 <div className="relative z-20 p-6">
//                   <h3 className="text-xl font-semibold font-Ovo text-gray-900 dark:text-white">
//                     {item.role}
//                   </h3>
//                   <h4 className="font-medium text-gray-700 dark:text-gray-300">
//                     {item.company}
//                   </h4>
//                   <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//                     {item.date}
//                   </p>
//                   <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
//                     {item.teaser}
//                   </p>
//                 </div>

//                 {/* Mobile Inline Summary */}
//                 <div className="lg:hidden">
//                   <AnimatePresence>
//                     {activeMobile === item.id && (
//                       <motion.div
//                         key={`${item.id}-summary`}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         variants={summaryVariants}
//                         className="px-6 pb-6"
//                       >
//                         <h3 className="text-lg font-semibold font-Ovo text-purple-500 mb-3 mt-2">
//                           Key Accomplishments
//                         </h3>
//                         <motion.ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm space-y-2">
//                           {item.summary.map((point, i) => (
//                             <motion.li
//                               key={i}
//                               variants={bulletPointVariants}
//                               initial="hidden"
//                               animate="visible"
//                               custom={i}
//                             >
//                               {point}
//                             </motion.li>
//                           ))}
//                         </motion.ul>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             ))}

//             {/* Mobile Placeholder */}
//             <div className="lg:hidden mt-4 text-center text-purple-500 font-Ovo text-sm">
//               <span className="text-xl block mb-1 animate-pulse">✨</span>
//               Tap a card above to see more details
//             </div>
//           </div>

//           {/* Right Column (Desktop Only) */}
//           <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-4 relative">
//             <div className="w-full max-w-lg min-h-[400px] relative">
//               <AnimatePresence mode="wait">
//                 {activeItem ? (
//                   <motion.div
//                     key={activeItem.id}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={summaryVariants}
//                     className="absolute inset-0 bg-white dark:bg-darkHover/30 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg p-6 flex flex-col"
//                   >
//                     {clickedItem && (
//                       <motion.button
//                         onClick={handleCloseClick}
//                         className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
//                         whileHover={{ scale: 1.1, rotate: 90 }}
//                         whileTap={{ scale: 0.9 }}
//                       >
//                         <X size={24} />
//                       </motion.button>
//                     )}
//                     <h3 className="text-xl font-semibold font-Ovo text-purple-500 mb-4">
//                       Key Accomplishments
//                     </h3>
//                     <motion.ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm space-y-2">
//                       {activeItem.summary.map((point, i) => (
//                         <motion.li
//                           key={i}
//                           variants={bulletPointVariants}
//                           initial="hidden"
//                           animate="visible"
//                           custom={i}
//                         >
//                           {point}
//                         </motion.li>
//                       ))}
//                     </motion.ul>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="placeholder-desktop"
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={summaryVariants}
//                     className="absolute inset-0 flex items-center justify-center text-center text-lg font-Ovo text-purple-500 p-6"
//                   >
//                     <p className="tracking-wide">
//                       <span className="text-2xl mb-2 block animate-pulse">
//                         ✨
//                       </span>
//                       Hover over an experience for a quick glance, or click to
//                       lock for more details.
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Experience;



"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading"; // Using the global SectionHeading component

const experienceData = [
  {
    id: "unified-mentor",
    role: "Fullstack Web Development Intern",
    company: "Unified Mentor Pvt. Ltd.",
    date: "August 2025 - November 2025",
    teaser:
      "Gained hands-on MERN stack experience, built a personal portfolio, and learned the full development cycle from Git to deployment.",
    summary: [
      "Gained practical MERN stack experience, achieving proficiency in React.js and Redux while building multiple real-world projects.",
      "Finalized my personal portfolio project, focusing on dynamic functionality and responsive design.",
      "Learned the full development cycle from version control with Git to deployment on platforms like Vercel.",
      "Mastered foundational web technologies: HTML5, CSS3, and Modern JavaScript (ES6+).",
    ],
  },
  {
    id: "internshala",
    role: "Software Developer Intern",
    company: "Internshala",
    date: "July 2022 - August 2022",
    teaser:
      "Developed Python automation solutions, reducing manual task effort by 20%, and optimized an SQLite database for a 35% faster query speed.",
    summary: [
      "Developed & tested automation solutions using Python, reducing manual task effort by 20% and improving process efficiency.",
      "Optimized an SQLite database for performance, achieving a 35% faster query speed through strategic indexing.",
      "Collaborated with cross-functional teams to translate business requirements into technical solutions.",
    ],
  },
];

const Experience = () => {
  const [activeMobile, setActiveMobile] = useState(null);

  // Desktop hover/click logic
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (clickedItem && !e.target.closest("#experience-cards")) {
        setClickedItem(null);
        setHoveredItem(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [clickedItem]);

  // Card animation
  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      transition: { type: "spring", stiffness: 300, damping: 18 },
    },
    clicked: { scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
  };

  const summaryVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  const bulletPointVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4 },
    }),
  };

  // Mobile card toggle
  const handleClickMobile = (item) => {
    setActiveMobile(activeMobile === item.id ? null : item.id);
  };

  // Desktop hover
  const handleMouseEnter = (item) => !clickedItem && setHoveredItem(item);
  const handleMouseLeave = () => !clickedItem && setHoveredItem(null);

  // Desktop click-to-lock/unlock
  const handleClickDesktop = (item) => {
    if (clickedItem?.id === item.id) {
      setClickedItem(null);
      setHoveredItem(null);
    } else {
      setClickedItem(item);
      setHoveredItem(item);
    }
  };

  const handleCloseClick = () => {
    setClickedItem(null);
    setHoveredItem(null);
  };

  const activeItem = clickedItem || hoveredItem;

  return (
    <>
      <div
        id="experience"
        className="w-full px-4 sm:px-[12%] py-10 lg:py-20 scroll-mt-12 lg:scroll-mt-10 relative"
      >
        {/* Heading */}
        <SectionHeading subheading="My Professional Journey">
          Career Highlights
        </SectionHeading>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-start lg:items-center">
          {/* Left Column */}
          <div
            id="experience-cards"
            className="w-full lg:w-1/2 flex flex-col gap-4"
          >
            {experienceData.map((item) => (
              <motion.div
                key={item.id}
                whileHover="hover"
                whileTap="clicked"
                variants={cardHoverVariants}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                onClick={() =>
                  window.innerWidth >= 1024
                    ? handleClickDesktop(item)
                    : handleClickMobile(item)
                }
                className={`bg-gray-50 dark:bg-darkHover/30 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg cursor-pointer relative overflow-hidden will-change-transform`}
              >
                <div className="relative z-20 p-6">
                  <h3 className="text-xl font-semibold font-Ovo text-gray-900 dark:text-white">
                    {item.role}
                  </h3>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    {item.company}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.date}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    {item.teaser}
                  </p>
                </div>

                {/* Mobile Inline Summary */}
                <div className="lg:hidden">
                  <AnimatePresence>
                    {activeMobile === item.id && (
                      <motion.div
                        key={`${item.id}-summary`}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={summaryVariants}
                        className="px-6 pb-6"
                      >
                        <h3 className="text-lg font-semibold font-Ovo text-purple-500 mb-3 mt-2">
                          Key Accomplishments
                        </h3>
                        <motion.ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm space-y-2">
                          {item.summary.map((point, i) => (
                            <motion.li
                              key={i}
                              variants={bulletPointVariants}
                              initial="hidden"
                              animate="visible"
                              custom={i}
                            >
                              {point}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* Mobile Placeholder */}
            <div className="lg:hidden mt-4 text-center text-purple-500 font-Ovo text-sm">
              <span className="text-xl block mb-1 animate-pulse">✨</span>
              Tap a card above to see more details
            </div>
          </div>

          {/* Right Column (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-4 relative">
            <div className="w-full max-w-lg min-h-[400px] relative">
              <AnimatePresence mode="wait">
                {activeItem ? (
                  <motion.div
                    key={activeItem.id}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={summaryVariants}
                    className="absolute inset-0 bg-white dark:bg-darkHover/30 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg p-6 flex flex-col"
                  >
                    {clickedItem && (
                      <motion.button
                        onClick={handleCloseClick}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X size={24} />
                      </motion.button>
                    )}
                    <h3 className="text-xl font-semibold font-Ovo text-purple-500 mb-4">
                      Key Accomplishments
                    </h3>
                    <motion.ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm space-y-2">
                      {activeItem.summary.map((point, i) => (
                        <motion.li
                          key={i}
                          variants={bulletPointVariants}
                          initial="hidden"
                          animate="visible"
                          custom={i}
                        >
                          {point}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder-desktop"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={summaryVariants}
                    className="absolute inset-0 flex items-center justify-center text-center text-lg font-Ovo text-purple-500 p-6"
                  >
                    <p className="tracking-wide">
                      <span className="text-2xl mb-2 block animate-pulse">✨</span>
                      Hover over an experience for a quick glance, or click to
                      lock for more details.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* This empty div pushes the next section down on desktop */}
        <div className="hidden lg:block h-[20vh]" aria-hidden="true" />
      </div>
    </>
  );
};

export default Experience;