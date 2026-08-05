"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

type LineVariant = "always" | "sm-only";

export type TimelinePalette = "education" | "experience";

type ScrollTimelineTrackProps = {
  children: ReactNode;
  className?: string;
  /** Which gradient to use (Tailwind classes are static per branch for reliable builds). */
  palette: TimelinePalette;
  lineVariant?: LineVariant;
};

/**
 * Timeline column where the connector line grows from top as the block scrolls into view.
 */
export function ScrollTimelineTrack({
  children,
  className = "",
  palette,
  lineVariant = "always",
}: ScrollTimelineTrackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "end 0.32"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 100 : 40,
    damping: reducedMotion ? 40 : 28,
    mass: reducedMotion ? 0.2 : 0.45,
  });

  const lineVisibility = lineVariant === "sm-only" ? "hidden sm:block" : "";

  const gradientClasses =
    palette === "education"
      ? "bg-gradient-to-b from-purple-500 to-cyan-500"
      : "bg-gradient-to-b from-purple-500 to-pink-500";

  return (
    <div
      ref={ref}
      className={`relative isolate flex flex-col items-start w-full max-w-4xl mx-auto px-4 ${className}`}
    >
      <div
        className={`absolute left-8 top-0 bottom-0 w-1 rounded-full bg-white/10 z-0 pointer-events-none ${lineVisibility}`}
        aria-hidden
      />
      <motion.div
        className={`absolute left-8 top-0 bottom-0 w-1 rounded-full z-[1] origin-top pointer-events-none ${gradientClasses} ${lineVisibility}`}
        style={{ scaleY: smoothProgress }}
        aria-hidden
      />
      {children}
    </div>
  );
}
