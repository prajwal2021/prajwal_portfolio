"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { HeroBgIcons } from "@/components/sub/hero-bg-icons";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('/skills/resume.pdf', '_blank');
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack AI Engineer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>  
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            robust, scalable
            </span>{" "}
            applications that make an impact.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full-stack AI Enginner with experience in building scalable web applications and AI-powered systems using modern cloud and LLM technologies.
           Check out my projects and skills.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4"
        >
          <button
            onClick={openResume}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg px-6"
          >
            Resume
          </button>
          {/* <a
            href="/skills/resume.pdf"
            download="Prajwal_Resume.pdf"
            className="py-2 px-6 text-center text-white cursor-pointer rounded-lg border border-[#7042f88b] hover:bg-[#7042f88b] transition-all"
          >
            Download CV
          </a> */}
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <HeroBgIcons className="w-full h-full max-w-[650px] max-h-[650px] select-none" />
      </motion.div>
    </motion.div>
  );
};
