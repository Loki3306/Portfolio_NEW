"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionTracking, SectionId } from "@/hooks/useSectionTracking";

const DIALOGUE = {
  global: [
    "Currently running on coffee and bad decisions.",
    "I know where all the bugs are buried.",
    "I've reviewed his GitHub. It's dangerous.",
    "Hover something. I dare you.",
    "I promise the portfolio has fewer bugs than production.",
    "Yes, I have opinions.",
    "Ask me why he built that.",
  ],
  hero: [
    "Building things again.",
    "Ask me about Lokesh.",
    "He wrote too much Java.",
  ],
  about: [
    "This is the human section.",
    "I know all his secrets.",
  ],
  skills: [
    "His stack is larger than my memory.",
    "He learns faster than I render.",
  ],
  experience: [
    "USCAPES is pretty cool.",
    "Lots of AI here.",
  ],
  projects: [
    "Click a project.",
    "This one took too many weekends.",
  ],
  achievements: [
    "Hackathons were involved.",
    "Sleep was sacrificed.",
  ],
  contact: [
    "You're this close to hiring him.",
    "Send the message.",
  ],
  idle: [
    "You still there?",
    "Lost in the details?",
    "Need help?",
  ],
};

interface CompanionThoughtBubbleProps {
  isModelLoaded?: boolean;
}

export default function CompanionThoughtBubble({ isModelLoaded = true }: CompanionThoughtBubbleProps) {
  const currentSection = useSectionTracking();
  const [thought, setThought] = useState("");
  const [isIdle, setIsIdle] = useState(false);
  const [hoverContext, setHoverContext] = useState<string | null>(null);
  const idleTimeoutRef = useRef<NodeJS.Timeout>(null);
  const cycleTimeoutRef = useRef<NodeJS.Timeout>(null);

  // Listen for project hover events
  useEffect(() => {
    const handleProjectHover = (e: CustomEvent<{ projectId: string | null }>) => {
      setHoverContext(e.detail.projectId);
    };
    
    // Type casting because standard EventTarget doesn't know about CustomEvent details
    window.addEventListener("projectHover" as any, handleProjectHover as any);
    return () => window.removeEventListener("projectHover" as any, handleProjectHover as any);
  }, []);

  // Mouse idle detection
  useEffect(() => {
    const handleMouseMove = () => {
      setIsIdle(false);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => {
        setIsIdle(true);
      }, 30000); // 30 seconds idle
    };

    window.addEventListener("mousemove", handleMouseMove);
    handleMouseMove(); // Initialize

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  // Thought cycling
  useEffect(() => {
    const updateThought = () => {
      if (!isModelLoaded) {
        setThought("Loading engineering opinions...");
        return;
      }

      if (hoverContext) {
        if (hoverContext === "airavat") setThought("Agriculture meets AI.");
        else if (hoverContext === "scholarship") setThought("Blockchain actually had a purpose here.");
        else if (hoverContext === "ocr") setThought("Documents fear this project.");
        else setThought("That's an interesting one.");
        return;
      }

      let pool: string[] = [];

      if (isIdle) {
        pool = DIALOGUE.idle;
      } else {
        // 70% chance for section-specific thought, 30% global
        const useGlobal = Math.random() < 0.3;
        if (!useGlobal && DIALOGUE[currentSection as keyof typeof DIALOGUE]) {
          pool = DIALOGUE[currentSection as keyof typeof DIALOGUE] || DIALOGUE.global;
        } else {
          pool = DIALOGUE.global;
        }
      }

      const randomThought = pool[Math.floor(Math.random() * pool.length)];
      setThought(randomThought);

      // Schedule next thought (8-12 seconds)
      const nextDelay = Math.random() * 4000 + 8000;
      cycleTimeoutRef.current = setTimeout(updateThought, nextDelay);
    };

    updateThought();

    return () => {
      if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
    };
  }, [currentSection, isIdle, isModelLoaded, hoverContext]);

  return (
    <AnimatePresence mode="wait">
      {thought && (
        <motion.div
          key={thought}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute bottom-full right-0 mb-1 z-50 max-w-[200px] sm:max-w-[240px] w-max pointer-events-none"
        >
          <div className="relative bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-2xl rounded-br-sm shadow-xl leading-snug w-full">
            {thought}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
