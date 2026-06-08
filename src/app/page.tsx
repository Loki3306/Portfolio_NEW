"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AboutSection from "@/components/ui/AboutSection";
import SkillsUniverse from "@/components/ui/SkillsUniverse";
import ExperienceSection from "@/components/ui/ExperienceSection";
import ResearchSection from "@/components/ui/ResearchSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import AchievementsSection from "@/components/ui/AchievementsSection";
import ContactSection from "@/components/ui/ContactSection";

// Dynamically import the R3F scene to prevent SSR issues (window is not defined)
const HeroScene = dynamic(() => import("@/components/scene/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center min-h-[400px]">
      <div className="w-6 h-6 rounded-full border border-zinc-700 border-t-white animate-spin" />
    </div>
  ),
});

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
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-hidden selection:bg-white selection:text-black">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 radial-dark-glow -z-20 pointer-events-none" />

      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between max-w-6xl mx-auto w-full px-6 lg:px-8 pt-32 pb-12 gap-8 md:gap-4">
        <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-4">
          
          {/* Left Side: Technical Info / Brand */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-[1.2] flex flex-col items-start text-left z-10"
          >
            {/* Small Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-900/50 text-[10px] uppercase tracking-widest text-zinc-400 font-mono mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {"// Active for Research & System Development"}
            </motion.div>

            {/* Powerful Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Engineering intelligence through software, signals, and systems.
            </motion.h1>

            {/* Subtitle name block */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest"
            >
              Portfolio of Lokesh Gile
            </motion.p>

            {/* Short Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed font-light"
            >
              Developing real-time systems at the intersection of machine learning, digital signal processing, and robust software engineering. From spatial audio pipelines for assistive technology to neuro-controlled devices, my focus is bridging the gap between raw hardware signals and intelligent software actions.
            </motion.p>

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

          {/* Right Side: Interactive 3D Visualization */}
          <div className="flex-1 w-full h-[300px] md:h-[450px] flex items-center justify-center relative select-none">
            <HeroScene />
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
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Lead Software Engineer Intern <span className="text-zinc-700">@</span> <span className="text-white">USCAPES</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Technical Contributor <span className="text-zinc-700">@</span> <span className="text-white">Skillzo.AI</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              Events Lead <span className="text-zinc-700">@</span> <span className="text-white">CSI-SPIT</span>
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

      {/* Section 2: About Me & Education */}
      <AboutSection />

      {/* Section 3: Skills Universe */}
      <SkillsUniverse />

      {/* Section 4: Experience */}
      <ExperienceSection />

      {/* Section 5: Research & Engineering */}
      <ResearchSection />

      {/* Section 6: Projects */}
      <ProjectsSection />

      {/* Section 7: Achievements */}
      <AchievementsSection />

      {/* Section 8: Contact */}
      <ContactSection />
    </div>
  );
}


