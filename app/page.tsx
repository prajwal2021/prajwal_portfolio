"use client";

// import { Encryption } from "@/components/main/encryption";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Experience } from "@/components/main/experience";
import { Education } from "@/components/main/education";
import { Testimonials } from "@/components/main/testimonials";

const Connect = dynamic(() => import("@/components/main/connect").then(mod => ({ default: mod.Connect })), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    // Handle hash scrolling when page loads or hash changes
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash;
        // Small delay to ensure DOM is fully rendered
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            // Account for fixed navbar height (65px + some padding)
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Scroll on mount if hash exists (for navigation from other pages)
    handleHashScroll();

    // Also listen for hash changes (for same-page navigation)
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12 md:gap-14">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Testimonials />
        <Connect />
        {/* <Encryption /> */}
      </div>
    </main>
  );
}
