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
  /** Larger cell + image scale for small PNG assets (e.g. Docker, Kubernetes) */
  size?: "lg";
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
  size,
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

  const cellClass =
    size === "lg"
      ? "w-36 h-36 flex shrink-0 items-center justify-center sm:w-40 sm:h-40"
      : "w-20 h-20 flex shrink-0 items-center justify-center";
  const imgClass =
    size === "lg"
      ? "w-auto h-auto max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
      : "w-auto h-auto max-w-[80%] max-h-[80%] object-contain hover:scale-125 transition-transform duration-300";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className={cellClass}
    >
      {isExternal ? (
        // For external URLs, use a regular img tag with original styling
        <img
          src={src}
          alt={name}
          width={width}
          height={height}
          className={imgClass}
        />
      ) : (
        // For local files, use Next.js Image component with original styling
        <Image
          src={`/skills/${src}`}
          alt={name}
          width={width}
          height={height}
          className={imgClass}
        />
      )}
    </motion.div>
  );
};
