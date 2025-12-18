"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Check if the src is a URL (starts with http or //)
  const isExternal = src.startsWith('http') || src.startsWith('//');

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className="w-20 h-20 flex items-center justify-center"
    >
      {isExternal ? (
        // For external URLs, use a regular img tag with original styling
        <img
          src={src}
          alt={name}
          width={width}
          height={height}
          className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain hover:scale-125 transition-transform duration-300"
        />
      ) : (
        // For local files, use Next.js Image component with original styling
        <Image
          src={`/skills/${src}`}
          alt={name}
          width={width}
          height={height}
          className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain hover:scale-125 transition-transform duration-300"
        />
      )}
    </motion.div>
  );
};
