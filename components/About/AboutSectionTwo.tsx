"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
const AboutSectionTwo = () => {
  const { theme } = useTheme();
  
  
  return (
    <section id="vision" className="flex flex-col items-center justify-center h-screen sm:p-3 relative overflow-hidden motion-safe:animate-fadeIn">
      <Image className="absolute m-auto rounded-lg opacity-10 dark:opacity-60" src={(theme==='dark')?'/images/about/visionBG2.svg':'/images/about/visionBG.svg'} alt="image" width="400" height="400"/>
      <div className="text-center  relative z-10">
      <h2 className="text-4xl font-semibold mb-4">Our Vision</h2>
        <div className="text-lg mb-8 max-w-md mx-auto">
          <p className="text-lg mb-8">
            To be the global leader in app development and ensure human-centric benefits and eperiences.
          </p>
        </div>
        
      </div>
      <a href="#mission" className="mb-4 border-2 border-dark dark:border-white animate-bounce p-2 rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </section>
  );
};

export default AboutSectionTwo;
