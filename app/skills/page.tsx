import Link from "next/link";

import { SKILL_CATEGORIES } from "@/constants";

export const metadata = {
  title: "Skills — Prajwal S Portfolio",
  description:
    "Technical skills by category: frontend, backend, database, cloud, hosting, testing, CI/CD, AI, and languages.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/#skills"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition mb-4"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to home
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-20 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-medium text-center mb-2">
          Skills by category
        </h1>
        <p className="text-center text-gray-400 mb-12 text-sm max-w-xl mx-auto">
          A snapshot of technologies and practices I use across projects and
          professional work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-[#2A0E61] bg-[#0a0818]/80 backdrop-blur-sm p-6 shadow-lg shadow-purple-950/20"
            >
              <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#e59cff] to-[#9cb2ff] mb-4">
                {cat.title}
              </h2>
              <ul className="flex flex-wrap gap-2 list-none">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md px-3 py-1.5 text-sm text-gray-200 bg-[#2A0E61]/40 border border-[#7042f88b]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
