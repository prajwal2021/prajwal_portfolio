import type { Metadata } from "next";

/**
 * Canonical site URL for Open Graph / Twitter cards. Social apps need absolute
 * image URLs; Next resolves relative paths using `metadataBase`.
 *
 * Set in production: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
 * On Vercel, `VERCEL_URL` is used as a fallback if unset.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

/** Preview image when your portfolio link is shared (WhatsApp, LinkedIn, etc.). */
const ogImagePath = "/mainlogo.png";

export const siteConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Prajwal S | Portfolio",
  description: "Welcome to my full stack Next.js 14 portfolio.",
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
    url: "https://github.com/prajwal2021",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Prajwal S | Portfolio",
    title: "Prajwal S | Portfolio",
    description: "Welcome to my full stack Next.js 14 portfolio.",
    url: "/",
    images: [
      {
        url: ogImagePath,
        alt: "Prajwal S — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajwal S | Portfolio",
    description: "Welcome to my full stack Next.js 14 portfolio.",
    images: [ogImagePath],
  },
};

export const appConfig = {
  /** Enable or disable smooth scrolling using Lenis */
  smoothScroll: true,
} as const;
