"use client";

import { useEffect } from "react";

export const ExternalStyles = () => {
  useEffect(() => {
    // Check if link already exists
    const existingLink = document.querySelector(
      'link[href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"]'
    );
    
    if (existingLink) {
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
    document.head.appendChild(link);

    return () => {
      const linkToRemove = document.querySelector(
        'link[href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"]'
      );
      if (linkToRemove && linkToRemove.parentNode) {
        linkToRemove.parentNode.removeChild(linkToRemove);
      }
    };
  }, []);

  return null;
};
