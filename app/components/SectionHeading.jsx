"use client";

import React from "react";

export default function SectionHeading({ subheading, children }) {
  return (
    <div className="text-center mb-8 ">
      {subheading && (
        <p className="text-md font-semibold text-purple-400 dark:text-purple-300 mb-2">
          {subheading}
        </p>
      )}
      <h2 className="text-5xl font-Ovo dark:text-white">
        {children}
      </h2>
    </div>
  );
}