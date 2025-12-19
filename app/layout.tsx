import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";
import "./lenis.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = {
  ...siteConfig,
  icons: {
    icon: [
      { url: "/mainlogo.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  // The CSS is now included in the Head component below
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <Head>
        <link 
          rel="stylesheet" 
          type='text/css' 
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" 
        />
      </Head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <SmoothScrollProvider>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
