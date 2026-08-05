"use client";

import Lenis from "lenis";
import { useEffect } from "react";

import { appConfig } from "@/config";

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (!appConfig.smoothScroll) return;

    const lenis = new Lenis({
      duration: 2.2,  // Increased from 1.2 for more pronounced smoothing
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      wheelMultiplier: 1.4,  // Increased from 1 for more movement per scroll
      touchMultiplier: 2.5,  // Increased from 2 for more movement on touch devices
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}; 