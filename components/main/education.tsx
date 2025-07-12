"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="text-[40px] font-medium text-center text-gray-200 mb-12"
      >
        Education
      </motion.div>

      <div className="relative flex flex-col items-start w-full max-w-4xl mx-auto min-h-[400px]">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full z-0" />

        {/* Education 1 */}
        <div className="flex items-start mb-20 relative z-10">
          {/* Timeline Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg border-4 border-gray-900 mt-0">
            {/* Graduation Cap SVG */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L2 8l10 5 10-5-10-5zm0 13c-4.418 0-8-1.79-8-4V9l8 4 8-4v3c0 2.21-3.582 4-8 4z" fill="#fff" fillOpacity="0.7" />
            </svg>
          </div>
          {/* Education Details */}
          <div className="ml-12 flex-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">Sri Venkateshwara College of Engineering</h3>
            <div className="flex items-center text-gray-300 mb-2">
              <span className="mr-2">🎓</span>
              <span>BE in Computer Science</span>
            </div>
            <div className="italic text-gray-400 mb-2">(2016 - 2020) Bangalore,India</div>
          </div>
        </div>

        {/* Education 2 */}
        <div className="flex items-start relative z-10">
          {/* Timeline Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg border-4 border-gray-900 mt-0">
            {/* Graduation Cap SVG */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L2 8l10 5 10-5-10-5zm0 13c-4.418 0-8-1.79-8-4V9l8 4 8-4v3c0 2.21-3.582 4-8 4z" fill="#fff" fillOpacity="0.7" />
            </svg>
          </div>
          {/* Education Details */}
          <div className="ml-12 flex-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">Texas Tech University</h3>
            <div className="flex items-center text-gray-300 mb-2">
              <span className="mr-2">🎓</span>
              <span>MS in Computer Science. Texas,USA</span>
            </div>
            <div className="italic text-gray-400 mb-2">(2024 - Present) Texas,USA</div>
          </div>
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/blackhole.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}; 