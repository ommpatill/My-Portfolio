// app/components/MagneticButton.jsx
"use client";

import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  
  // Use springs for smooth, physics-based motion
  const springConfig = { stiffness: 150, damping: 20, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Find the mouse position relative to the button's center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Set the spring values based on mouse position
    x.set(mouseX * 0.3); // Multiplier controls the "magnetic" strength
    y.set(mouseY * 0.3);
  };

  const handleMouseLeave = () => {
    // Reset the spring values when the mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }} // Apply the magnetic translation here
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};