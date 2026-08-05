"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { ScrollTimelineTrack } from "@/components/sub/scroll-timeline-track";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-14 md:py-16"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="text-[40px] font-medium text-center text-gray-200 mb-12"
      >
        Experience
      </motion.div>

      <ScrollTimelineTrack
        palette="experience"
        lineVariant="sm-only"
        className="min-h-[600px]"
      >
        {/* TTU Online */}
        <div className="flex items-start mb-16 sm:mb-20 relative z-10 w-full">
          <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 items-center justify-center shadow-lg border-4 border-gray-900 mt-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.15" />
              <path d="M9 9h6v6H9z" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="sm:ml-12 flex-1 w-full min-w-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                TTU Online
              </span>
              <span className="text-white"> — AI Engineer</span>
            </h3>
  
            <div className="flex items-center text-gray-300 mb-3">
              <span className="mr-2">📅</span>
              <span>(2026 – Present) Texas , USA</span>
            </div>
            <ul className="list-disc ml-6 text-lg text-gray-200 space-y-2">
              <li>
                Building and maintaining Python services and internal tools for TTU Online systems, with a focus on reliability and clear integration points between apps and data pipelines.
              </li>
              <li>
                Applying lightweight AI-assisted workflows where they add value—such as summarization, routing, and quality checks—while the stack and requirements continue to take shape.
              </li>
            </ul>
          </div>
        </div>

        {/* TTUHSC */}
        <div className="flex items-start mb-16 sm:mb-20 relative z-10 w-full">
          <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 items-center justify-center shadow-lg border-4 border-gray-900 mt-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.15" />
              <path d="M7 12h10M12 7v10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="sm:ml-12 flex-1 w-full min-w-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                TTUHSC
              </span>
              <span className="text-white"> — Software Developer</span>
            </h3>
            <p className="text-gray-400 text-sm mb-3">Texas Tech University Health Sciences Center</p>
            <div className="flex items-center text-gray-300 mb-3">
              <span className="mr-2">📅</span>
              <span>(2025 – 2026) Texas , USA</span>
            </div>
            <ul className="list-disc ml-6 text-lg text-gray-200 space-y-2">
              <li>
                Served as development team lead on medical research–oriented projects, coordinating implementation priorities with clinicians and researchers while shipping usable software on tight timelines.
              </li>
              <li>
                Built and evolved applications in Python and Next.js to support people with speech and hearing disabilities—focusing on accessible UX, clear feedback, and workflows that work in real clinical contexts.
              </li>
              <li>
                Partnered with doctors and faculty to scope, build, and iterate web apps and desktop tools used inside the hospital for teaching, data collection, and day-to-day clinical support.
              </li>
            </ul>
          </div>
        </div>

        {/* CSGI Full Stack */}
        <div className="flex items-start mb-16 sm:mb-20 relative z-10 w-full">
          <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 to-purple-500 items-center justify-center shadow-lg border-4 border-gray-900 mt-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.15" />
              <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="sm:ml-12 flex-1 w-full min-w-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                CSGI
              </span>
              <span className="text-white"> — Software Engineer, Full Stack</span>
            </h3>
            <div className="flex items-center text-gray-300 mb-3">
              <span className="mr-2">📅</span>
              <span>(August 2023 – August 2025) Banglore , India</span>
            </div>
            <ul className="list-disc ml-6 text-lg text-gray-200 space-y-2">
              <li>
                Built and integrated Venmo payment support into a production-grade platform using secure SDK and API workflows.
              </li>
              <li>
                Executed the migration of critical databases from MSSQL to PostgreSQL, including schema and procedure refactoring.
              </li>
              <li>
                Built and maintained REST APIs, SOAP services, and legacy web applications using .NET Framework and .NET Core.
              </li>
            </ul>
          </div>
        </div>

        {/* CSGI Intern */}
        <div className="flex items-start mb-16 sm:mb-20 relative z-10 w-full">
          <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 items-center justify-center shadow-lg border-4 border-gray-900 mt-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.15" />
              <path d="M7 12h10M12 7v10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="sm:ml-12 flex-1 w-full min-w-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                CSGI
              </span>
              <span className="text-white"> — Developer Intern</span>
            </h3>
            <div className="flex items-center text-gray-300 mb-3">
              <span className="mr-2">📅</span>
              <span>(February – August 2023) Banglore , India</span>
            </div>
            <ul className="list-disc ml-6 text-lg text-gray-200 space-y-2">
              <li>
                Assisted in front-end development using Angular, enhancing UI components for real-world applications.
              </li>
              <li>
                Contributed to code maintenance and debugging in .NET APIs, ensuring smooth integration with backend systems.
              </li>
              <li>
                Gained hands-on experience with SQL and participated in data validation for key modules in the billing platform.
              </li>
            </ul>
          </div>
        </div>

        {/* Exposys Data Labs */}
        <div className="flex items-start relative z-10 w-full">
          <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 to-purple-500 items-center justify-center shadow-lg border-4 border-gray-900 mt-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.15" />
              <path d="M4 16l4-4 4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="sm:ml-12 flex-1 w-full min-w-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Exposys Data Labs
              </span>
              <span className="text-white"> — Data Science Intern</span>
            </h3>
            
            <div className="flex items-center text-gray-300 mb-3">
              <span className="mr-2">📅</span>
              <span>(2022) Banglore , India</span>
            </div>
            <ul className="list-disc ml-6 text-lg text-gray-200 space-y-2">
              <li>
                Developed a diabetes prediction model using machine learning algorithms including Logistic Regression, KNN, and Decision Trees, improving prediction accuracy through data preprocessing and feature engineering.
              </li>
            </ul>
          </div>
        </div>
      </ScrollTimelineTrack>

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
