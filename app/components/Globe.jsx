"use client";

import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useSpring } from 'framer-motion';

const Globe = ({ isDarkMode }) => {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const locationToFocus = [21.1458, 79.0882]; // Nagpur location

  const r = useSpring(0, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: isDarkMode ? 1 : 0, // Controlled by theme
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: isDarkMode ? 6 : 2, // Adjusted for theme
      baseColor: isDarkMode ? [0.3, 0.3, 0.3] : [1, 1, 1], // Controlled by theme
      markerColor: isDarkMode ? [1, 0.5, 1] : [1, 0.1, 0.1], // Purple in dark, Red in light
      glowColor: isDarkMode ? [1, 1, 1] : [0.5, 0.5, 0.5], // Controlled by theme
      markers: [
        { location: locationToFocus, size: 0.1 },
      ],
      onRender: (state) => {
        // This makes the globe rotate automatically
        if (!state.isUserInteracting) {
            state.phi += 0.005;
        }
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [isDarkMode]); // Re-create the globe when the theme changes

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', aspectRatio: '1 / 1' }}
      />
    </div>
  );
};

export default Globe;