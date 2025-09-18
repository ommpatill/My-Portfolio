// "use client";

// import { assets } from "../../assets/assets";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import { useTheme } from "../context/ThemeContext";
// import { motion } from "framer-motion";

// const navLinks = [
//   { name: "Home", hash: "#top" },
//   { name: "About", hash: "#about" },
//   { name: "Academics", hash: "#academic" },
//   { name: "Skills", hash: "#skills" },
//   { name: "Experience", hash: "#experience" },
//   { name: "Projects", hash: "#projects" },
//   { name: "Certifications", hash: "#certifications" },
//   { name: "Contact me", hash: "#contact" },
// ];

// const Navbar = () => {
//   const [isScroll, setIsScroll] = useState(false);
//   const sideMenuRef = useRef();
//   const { isDarkMode, toggleTheme } = useTheme();
//   const [activeSection, setActiveSection] = useState("Home");
//   const timeOfLastClick = useRef(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // New state to track if the menu is open

//   // This single, robust useEffect handles all scroll-related logic.
//   useEffect(() => {
//     const handleScroll = () => {
//       // 1. Handle Navbar background on scroll
//       setIsScroll(window.scrollY > 50);

//       // 2. If a link was just clicked, do nothing. This gives priority to clicks.
//       if (Date.now() - timeOfLastClick.current < 1000) {
//         return;
//       }

//       // 3. Determine the current active section by checking the position of all sections.
//       let currentSection = "Home"; // Default to Home
//       navLinks.forEach((link) => {
//         const element = document.querySelector(link.hash);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           // If the top of the section is above the vertical center of the screen, it's the active one.
//           if (rect.top <= window.innerHeight / 2) {
//             currentSection = link.name;
//           }
//         }
//       });
//       setActiveSection(currentSection);
//     };

//     // Set initial state on mount to prevent reload overlap issue
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLinkClick = (linkName) => {
//     setActiveSection(linkName);
//     timeOfLastClick.current = Date.now();
//   };

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = "translateX(-16rem)";
//     setIsMenuOpen(true); // Set state to true when the menu opens
//     document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
//   };

//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = "translateX(16rem)";
//     setIsMenuOpen(false); // Set state to false when the menu closes
//     document.body.style.overflow = "auto"; // Re-enable scrolling when menu is closed
//   };

//   return (
//     <>
//       <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%] dark:hidden">
//         <Image src={assets.header_bg_color} alt="" className="w-full" />
//       </div>

//       {/* Overlay for blur effect on mobile */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-500"
//           onClick={closeMenu}
//         ></div>
//       )}

//       <nav
//         className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300 ${
//           isScroll
//             ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
//             : ""
//         }`}
//       >
//         <a href="#top" onClick={() => handleLinkClick("Home")}>
//           <Image
//             unoptimized
//             src={isDarkMode ? assets.logogifdark : assets.logogiflight}
//             className="w-28 cursor-pointer mr-14"
//             alt="Logo"
//           />
//         </a>

//         <ul
//           className={`hidden md:flex items-center gap-1 rounded-full px-3 py-2 relative ${
//             isScroll
//               ? ""
//               : "bg-white shadow-sm bg-opacity-50 border border-black/50 dark:border dark:border-white/50 dark:bg-transparent"
//           }`}
//         >
//           {navLinks.map((link) => {
//             if (link.name === "Contact me") return null;
//             return (
//               <li
//                 key={link.hash}
//                 className="relative"
//                 onClick={() => handleLinkClick(link.name)}
//               >
//                 <a
//                   href={link.hash}
//                   className={`block px-4 py-2 transition font-Ovo z-10 relative ${
//                     activeSection === link.name
//                       ? "text-black dark:text-white"
//                       : " text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//                 {activeSection === link.name && (
//                   <motion.div
//                     className="absolute inset-0 bg-gray-200/70 dark:bg-white/10 rounded-full"
//                     style={{ zIndex: 0 }}
//                     layoutId="activeSection"
//                     transition={{
//                       type: "spring",
//                       stiffness: 380,
//                       damping: 30,
//                     }}
//                   ></motion.div>
//                 )}
//               </li>
//             );
//           })}
//         </ul>

//         <div className="flex items-center gap-4 ">
//           <button onClick={toggleTheme}>
//             <Image
//               src={isDarkMode ? assets.sun_icon : assets.moon_icon}
//               alt="Theme Toggle"
//               className="w-6"
//             />
//           </button>
//           <a
//             href="#contact"
//             onClick={() => handleLinkClick("Contact me")}
//             className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 font-Ovo transition-all duration-300 ${
//               activeSection === "Contact me"
//                 ? "border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.7)] dark:border-purple-400"
//                 : "border-gray-500 dark:border-white/50"
//             }`}
//           >
//             Contact
//             <Image
//               src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
//               className="w-3"
//               alt="Arrow Icon"
//             />
//           </a>
//           <button className="block md:hidden ml-3" onClick={openMenu}>
//             <Image
//               src={isDarkMode ? assets.menu_white : assets.menu_black}
//               alt="Menu Icon"
//               className="w-6"
//             />
//           </button>
//         </div>

//         <ul
//           ref={sideMenuRef}
//           className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 backdrop-blur-lg bg-rose-50/70 dark:bg-darkHover/70 dark:text-white"
//         >
//           <div className="absolute right-6 top-6" onClick={closeMenu}>
//             <Image
//               src={isDarkMode ? assets.close_white : assets.close_black}
//               alt="Close Icon"
//               className="w-5 cursor-pointer"
//             />
//           </div>
//           {navLinks.map((link) => (
//             <li key={link.hash}>
//               <a
//                 className="font-Ovo"
//                 onClick={() => {
//                   closeMenu();
//                   handleLinkClick(link.name);
//                 }}
//                 href={link.hash}
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", hash: "#top" },
  { name: "About", hash: "#about" },
  { name: "Academics", hash: "#academic" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Certifications", hash: "#certifications" },
  { name: "Contact me", hash: "#contact" },
];

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("Home");
  const timeOfLastClick = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);

      if (Date.now() - timeOfLastClick.current < 1000) {
        return;
      }

      let currentSection = "Home";
      navLinks.forEach((link) => {
        const element = document.querySelector(link.hash);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentSection = link.name;
          }
        }
      });
      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveSection(linkName);
    timeOfLastClick.current = Date.now();
  };

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-500"
          onClick={closeMenu}
        ></div>
      )}

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top" onClick={() => handleLinkClick("Home")}>
          <Image
            unoptimized
            priority={true} // Fixed: Added priority to resolve LCP warning
            src={isDarkMode ? assets.logogifdark : assets.logogiflight}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-1 rounded-full px-3 py-2 relative ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 border border-black/50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {navLinks.map((link) => {
            if (link.name === "Contact me") return null;
            return (
              <li
                key={link.hash}
                className="relative"
                onClick={() => handleLinkClick(link.name)}
              >
                <a
                  href={link.hash}
                  className={`block px-4 py-2 transition font-Ovo z-10 relative ${
                    activeSection === link.name
                      ? "text-black dark:text-white"
                      : " text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
                {activeSection === link.name && (
                  <motion.div
                    className="absolute inset-0 bg-gray-200/70 dark:bg-white/10 rounded-full"
                    style={{ zIndex: 0 }}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4 ">
          <button onClick={toggleTheme}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            onClick={() => handleLinkClick("Contact me")}
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 font-Ovo transition-all duration-300 ${
              activeSection === "Contact me"
                ? "border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.7)] dark:border-purple-400"
                : "border-gray-500 dark:border-white/50"
            }`}
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="Arrow Icon"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu Icon"
              className="w-6"
            />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 backdrop-blur-lg bg-rose-50/70 dark:bg-darkHover/70 dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Icon"
              className="w-5 cursor-pointer"
            />
          </div>
          {navLinks.map((link) => (
            <li key={link.hash}>
              <a
                className="font-Ovo"
                onClick={() => {
                  closeMenu();
                  handleLinkClick(link.name);
                }}
                href={link.hash}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;