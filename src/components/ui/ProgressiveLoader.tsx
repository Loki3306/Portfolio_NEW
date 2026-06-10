"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_TEXTS = [
  "Building products...",
  "Training models...",
  "Shipping ideas..."
];

export default function ProgressiveLoader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // 1. Check LocalStorage for repeat visits
    const hasVisited = localStorage.getItem("portfolio_visited");
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasVisited === "true" || prefersReducedMotion) {
      // Bypass instantly
      setIsVisible(false);
      onComplete();
      return;
    }

    // 2. Typewriter interval (cycle every 500ms)
    const textInterval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < LOADING_TEXTS.length - 1) return prev + 1;
        return prev;
      });
    }, 500);

    // 3. Mark as visited and remove loader after 1.8 seconds max
    const completeTimer = setTimeout(() => {
      localStorage.setItem("portfolio_visited", "true");
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow fade-out animation to finish
    }, 1800);

    // 4. Show skip button if something hangs (failsafe at 2000ms)
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    return () => {
      clearInterval(textInterval);
      clearTimeout(completeTimer);
      clearTimeout(skipTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    localStorage.setItem("portfolio_visited", "true");
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono selection:bg-accent selection:text-black"
        >
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-blueprint pointer-events-none opacity-20" />
          
          <div className="z-10 flex flex-col items-center">
            {/* LOKESH GILE Branding */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-white mb-6"
            >
              LOKESH GILE
            </motion.h1>

            {/* Typewriter Text Container */}
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={textIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-accent text-sm md:text-base"
                >
                  {LOADING_TEXTS[textIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Skip Button (Failsafe) */}
            <AnimatePresence>
              {showSkip && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleSkip}
                  className="mt-12 px-6 py-2 border border-zinc-800 text-zinc-500 text-xs tracking-widest uppercase hover:text-white hover:border-zinc-500 transition-colors"
                >
                  Skip Loading
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
