"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll } from "framer-motion";
import { ArrowDown } from "lucide-react";
const AboutSection = dynamic(() => import("@/components/ui/AboutSection"));
const SkillsUniverse = dynamic(() => import("@/components/ui/SkillsUniverse"));
const ExperienceSection = dynamic(() => import("@/components/ui/ExperienceSection"));
const ProjectsSection = dynamic(() => import("@/components/ui/ProjectsSection"));
const AchievementsSection = dynamic(() => import("@/components/ui/AchievementsSection"));
const AIAssistant = dynamic(() => import("@/components/ui/AIAssistant"), { ssr: false });
import ParticleLoader from "@/components/scene/ParticleLoader";
const FooterCTA = dynamic(() => import("@/components/ui/FooterCTA"));

// Dynamically import the R3F scene to prevent SSR issues (window is not defined)
const HeroScene = dynamic(() => import("@/components/scene/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center min-h-[400px]">
      <div className="w-6 h-6 rounded-full border border-zinc-700 border-t-white animate-spin" />
    </div>
  ),
});

const SectionDivider = () => (
  <div className="w-full flex justify-center py-8 opacity-30 pointer-events-none overflow-hidden">
    <svg width="300" height="40" viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20 Q 75 40 150 20 T 300 20" stroke="currentColor" strokeWidth="1" className="text-zinc-700" strokeDasharray="4 4" fill="none" />
    </svg>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-hidden selection:bg-accent selection:text-black">
      {loading && <ParticleLoader onComplete={() => setLoading(false)} />}
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-light origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Blueprint Grid Pattern overlay for tech feel */}
      <div className="fixed inset-0 bg-blueprint pointer-events-none -z-20 opacity-[0.25] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Background Soft Glow */}
      <div className="absolute inset-0 radial-dark-glow -z-30 pointer-events-none" />

      {/* Section 1: Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-8 pt-32 pb-8 gap-8 md:gap-4">
        <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-4">

          {/* Left Side: Technical Info / Brand */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-[1.2] flex flex-col items-start text-left z-10"
          >
            {/* Small Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-semibold">
                  Lokesh Gile
                </span>
                <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                  Available for new roles
                </span>
            </motion.div>

            {/* Powerful Headline */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="heading-hero text-white mb-6">
                Full-Stack Engineer.
              </h1>
              <p className="text-body max-w-xl text-zinc-300 font-medium text-lg leading-relaxed mb-6">
                Building scalable products, AI systems, and business platforms from idea to deployment.
              </p>
              <div className="flex flex-col gap-1 text-sm font-mono text-zinc-500 uppercase tracking-widest">
                <span><span className="text-accent">▹</span> Frontend.</span>
                <span><span className="text-accent">▹</span> Backend.</span>
                <span><span className="text-accent">▹</span> AI.</span>
                <span><span className="text-accent">▹</span> Mobile.</span>
                <span><span className="text-accent">▹</span> Cloud.</span>
              </div>
            </motion.div>

            {/* Primary CTAs */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-white text-black rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors"
              >
                View Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-zinc-800 text-zinc-300 font-semibold text-xs tracking-wider uppercase hover:bg-zinc-900 transition-colors"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full border border-zinc-800 text-zinc-300 font-semibold text-xs tracking-wider uppercase hover:bg-zinc-900 transition-colors"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Abstract 3D Hero */}
          <div className="flex-1 w-full h-[300px] md:h-[450px] flex items-center justify-center relative select-none order-first md:order-last mb-8 md:mb-0">
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Abstract 3D Elements */}
            <div className="absolute inset-0 z-0">
              <HeroScene />
            </div>
          </div>
        </div>

        {/* Elegant Footer Status Panel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full border-t border-zinc-900 pt-8 flex flex-col md:flex-row gap-4 md:gap-12 items-start md:items-center"
        >
          <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 font-semibold">
            Currently
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Software Developer <span className="text-zinc-700">@</span> <span className="text-white">USCAPES</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              App Developer <span className="text-zinc-700">@</span> <span className="text-white">EOVI</span>
            </div>
          </div>
        </motion.div>

        {/* Down indicator */}
        <div className="w-full flex justify-center pb-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-zinc-700 hover:text-zinc-500 cursor-pointer"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>
      </section>


      <AboutSection />

      <SectionDivider />
      <SkillsUniverse />

      <SectionDivider />
      <ExperienceSection />

      <SectionDivider />
      <ProjectsSection />

      <SectionDivider />
      <AchievementsSection />

      <SectionDivider />
      <FooterCTA />

      {/* Floating AI Assistant */}
      <AIAssistant />
    </div>
  );
}
