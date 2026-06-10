"use client";

import { useState, useEffect } from "react";

export type SectionId = "hero" | "about" | "skills" | "experience" | "research" | "projects" | "achievements" | "contact" | "global";

export function useSectionTracking(): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is intersecting most
        let maxRatio = 0;
        let mostVisibleSection = activeSection;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id as SectionId;
          }
        });

        if (maxRatio > 0 && mostVisibleSection !== activeSection) {
          // 'hero' doesn't usually have an ID in page.tsx, so we might need to fallback to hero if no other section is visible
          if (mostVisibleSection) {
            setActiveSection(mostVisibleSection);
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -40% 0px", // Trigger when section is in the middle of the screen
        threshold: [0, 0.25, 0.5, 0.75, 1], // Provide multiple thresholds to get accurate intersectionRatio
      }
    );

    // Grab all sections that we care about
    const sections = [
      "about",
      "skills",
      "experience",
      "research",
      "projects",
      "achievements",
      "contact",
    ];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    
    // Also observe a top-level element or hero section
    const heroElement = document.querySelector("section.relative.min-h-\\[85vh\\]");
    if (heroElement) {
      heroElement.id = "hero";
      observer.observe(heroElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [activeSection]);

  return activeSection || "global";
}
