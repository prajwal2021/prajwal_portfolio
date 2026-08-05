"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

/** Time between automatic slides (ms). */
const AUTO_ADVANCE_MS = 900;

/** Each slide uses this % of the viewport width (50% = two full projects visible). */
const SLIDE_WIDTH_PCT = 50;

export const Projects = () => {
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [instantJump, setInstantJump] = useState(false);
  const [hoverPause, setHoverPause] = useState(false);
  const total = PROJECTS.length;
  const goNextRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (!instantJump) return;
    const id = requestAnimationFrame(() => setInstantJump(false));
    return () => cancelAnimationFrame(id);
  }, [instantJump, index]);

  const goNext = useCallback(() => {
    setIndex((i) => {
      if (i === total - 1) {
        setInstantJump(true);
        return 0;
      }
      return i + 1;
    });
  }, [total]);

  goNextRef.current = goNext;

  useEffect(() => {
    if (showAll || hoverPause || total <= 1) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const id = window.setInterval(() => {
      if (document.visibilityState === "hidden") return;
      goNextRef.current();
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [showAll, hoverPause, total]);

  const goPrev = useCallback(() => {
    setIndex((i) => {
      if (i === 0) {
        setInstantJump(true);
        return total - 1;
      }
      return i - 1;
    });
  }, [total]);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-14 md:py-16"
    >
      <h1 className="text-[40px] font-semibold text-white py-10 md:py-12">
        My Projects
      </h1>

      {showAll ? (
        <div className="h-full w-full flex flex-col gap-8 px-6 md:px-10 max-w-7xl w-full">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(false)}
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 border border-cyan-500/40 rounded-lg px-4 py-2 transition-colors hover:border-cyan-400/80"
            >
              Back to carousel
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {PROJECTS.map((p) => (
              <ProjectCard
                key={p.slug}
                src={p.image}
                title={p.title}
                description={p.description}
                href={`/projects/${p.slug}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex w-full max-w-6xl flex-col items-center gap-3 px-4 md:px-10">
          <div
            className="flex w-full items-stretch justify-center gap-2 md:gap-6"
            onMouseEnter={() => setHoverPause(true)}
            onMouseLeave={() => setHoverPause(false)}
          >
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous project"
              className="shrink-0 self-center flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#2A0E61] bg-black/40 text-cyan-400 hover:border-cyan-500 hover:bg-black/60 hover:text-cyan-300 transition-all shadow-lg"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="mx-auto w-full max-w-5xl min-w-0 flex-1 overflow-hidden rounded-lg">
              <div
                className={`flex items-stretch will-change-transform ${
                  instantJump
                    ? ""
                    : "transition-transform duration-300 ease-in-out motion-reduce:transition-none"
                }`}
                style={{
                  width: `${total * SLIDE_WIDTH_PCT}%`,
                  transform: `translateX(-${(index * 100) / total}%)`,
                }}
              >
                {PROJECTS.map((p) => (
                  <div
                    key={p.slug}
                    className="box-border flex min-h-0 min-w-0 shrink-0 px-1.5 sm:px-2"
                    style={{ width: `${100 / total}%` }}
                  >
                    <ProjectCard
                      className="h-full w-full"
                      src={p.image}
                      title={p.title}
                      description={p.description}
                      href={`/projects/${p.slug}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
              className="shrink-0 self-center flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#2A0E61] bg-black/40 text-cyan-400 hover:border-cyan-500 hover:bg-black/60 hover:text-cyan-300 transition-all shadow-lg"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="-mt-1 flex flex-col items-center justify-center gap-3 sm:-mt-2 sm:flex-row sm:gap-6">
            <p className="text-sm text-gray-400 tabular-nums">
              {index + 1} <span className="text-gray-600">/</span> {total}
            </p>
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-lg border border-cyan-500/40 px-4 py-2 text-sm font-medium text-cyan-400 transition-colors hover:border-cyan-400/80 hover:text-cyan-300"
            >
              View all projects
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
