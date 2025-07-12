"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="text-[40px] font-medium text-center text-gray-200 mb-12"
      >
        Experience
      </motion.div>

      <div className="relative flex flex-col items-start w-full max-w-4xl mx-auto min-h-[600px]">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full z-0" />

        {/* Work 1 */}
        <div className="flex items-start mb-20 relative z-10">
          {/* Timeline Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 flex items-center justify-center shadow-lg border-4 border-gray-900 mt-0">
            {/* Placeholder SVG icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.15" />
              <path d="M7 12h10M12 7v10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          {/* Job Details */}
          <div className="ml-12 flex-1">
            <h3 className="text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent py-20">CSGI</span> - Intern
            </h3>
            <div className="flex items-center text-gray-300 mb-2">
              <span className="mr-2">📅</span>
              <span>Febuary - August 2023</span>
            </div>
            
            <ul className="list-disc ml-6 text-lg text-gray-200 space-y-1">
              <li>Assisted in front-end development using Angular, enhancing UI components for real-world applications.</li>
              <li>Contributed to code maintenance and debugging in .NET APIs, ensuring smooth integration with backend systems.</li>
              <li>Gained hands-on experience with SQL and participated in data validation for key modules in the billing platform.</li>
            </ul>
          </div>
        </div>

        {/* Work 2 */}
        <div className="flex items-start relative z-10">
          {/* Timeline Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 to-purple-500 flex items-center justify-center shadow-lg border-4 border-gray-900 mt-0">
            {/* Placeholder SVG icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.15" />
              <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          {/* Job Details */}
          <div className="ml-12 flex-1">
            <h3 className="text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent py-20">CSGI</span> - Software Engineer Full Stack
            </h3>
            <div className="flex items-center text-gray-300 mb-2">
              <span className="mr-2">📅</span>
              <span>September 2023 - Present</span>
            </div>
          
            <ul className="list-disc ml-6 text-lg text-gray-200 space-y-1">
              <li>Built and integrated Venmo payment support into a production-grade platform using secure SDK and API workflows.</li>
              <li>Executed the migration of critical databases from MSSQL to PostgreSQL, including schema and procedure refactoring.</li>
              <li>Built and maintained REST APIs, SOAP services, and legacy web applications using .NET Framework and .NET Core.</li>
            </ul>
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