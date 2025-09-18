"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6ea96a80-c6d2-4826-a349-d898ef503ace");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      // Change: Restored desktop styles (px, py, bg-size) using responsive prefixes.
      className='w-full px-4 lg:px-[12%] py-12 lg:py-20 scroll-mt-12 lg:scroll-mt-10 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-contain lg:bg-[length:90%_auto] dark:bg-none'
    >
      <SectionHeading subheading="Connect with me">
        Get in touch
      </SectionHeading>

      {/* Change: Restored desktop margin */}
      <p className="text-center max-w-2xl mx-auto mt-4 mb-6 lg:mb-8 font-Ovo">
        I am always open to new opportunities and collaborations. If you have a
        project in mind or just want to say hello, feel free to reach out to me.
        Let's connect and create something amazing together!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        {/* Change: Restored desktop margin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4 lg:mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
          />
        </div>
        <textarea
          // Change: Restored original rows for desktop appearance
          rows="6"
          placeholder="Enter your message"
          required
          // Change: Restored desktop margin
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-4 lg:mb-6 dark:bg-darkHover/30 dark:border-white/90"
          name="message"
        ></textarea>
        <button
          type="submit"
         className="group px-10 py-3 font-semibold border rounded-full border-black  bg-white text-black flex items-center gap-3 w-max mx-auto transition-all duration-300 hover:scale-105 hover:bg-gray-200 active:scale-100 dark:border-white dark:bg-black dark:text-white dark:hover:bg-gray-800"
        >
          Submit now{" "}
          <Image
            src={assets.right_arrow_bold}
            alt="Right Arrow"
            className="w-4"
          />
        </button>
        <p className="text-center mt-4 ">{result}</p>
      </form>
    </section>
  );
};

export default Contact;