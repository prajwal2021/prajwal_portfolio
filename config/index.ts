import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Prajwal S | Space Portfolio",
  description: "Welcome to my full stack Next.js 14 space portfolio.",
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "space-portfolio",
    "portfolio",
    "react-icons",
    "cn",
    "clsx",
    "3d-portfolio",
    "3d-website",
    "sonner",
    "framer-motion",
    "motion",
    "animation",
    "heroicons",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "Prajwal S",
    url: "https://github.com/sanidhyy",
  },
} as const;

export const appConfig = {
  /** Enable or disable smooth scrolling using Lenis */
  smoothScroll: true,
} as const;
