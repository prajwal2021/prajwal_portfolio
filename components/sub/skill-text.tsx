"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  slideInFromLeft,
  slideInFromRight,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Think better with Next.js 14
        </h1>
      </motion.div> */}

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] text-white font-medium mt-[10px] text-center mb-[15px] px-4"
      >
        How can i contribute ? & My Key Skills.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mt-[10px] mb-3 text-center"
      >
        Make it work, make it right, make it fast.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="-mt-1 flex flex-col items-center justify-center gap-3 sm:-mt-2 sm:flex-row sm:gap-6 mb-10"
      >
        <Link
          href="/skills"
          className="rounded-lg border border-cyan-500/40 px-4 py-2 text-sm font-medium text-cyan-400 transition-colors hover:border-cyan-400/80 hover:text-cyan-300"
        >
          View all Skills
        </Link>
      </motion.div>
    </div>
  );
};
