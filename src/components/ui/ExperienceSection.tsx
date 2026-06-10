"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FaPython, FaReact, FaNodeJs
} from "react-icons/fa";
import { SiFastapi, SiPytorch, SiStripe, SiLangchain, SiOpenai } from "react-icons/si";

interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  timeline?: string;
  mission: string;
  responsibilities: string[];
  impact: string;
  techStack: { name: string; color: string }[];
  accentColor: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "uscapes",
    role: "Software Developer",
    org: "USCAPES",
    timeline: "Present",
    mission: "Developing intelligent hearing assistance systems that combine spatial audio processing, machine learning, and embedded hardware to improve real-world listening experiences.",
    responsibilities: [
      "Real-time audio processing pipelines",
      "Sound source localization using SRP-PHAT",
      "Beamforming workflows",
      "ReSpeaker microphone array integration",
      "AI-assisted hearing technology",
      "Signal processing infrastructure",
    ],
    impact: "Contributing to next-generation assistive hearing technology through software engineering, DSP, and embedded systems.",
    techStack: [
      { name: "Python", color: "#3776AB" },
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "FastAPI", color: "#009688" },
      { name: "DSP", color: "#F5A524" },
      { name: "Beamforming", color: "#F5A524" },
      { name: "SRP-PHAT", color: "#F5A524" },
      { name: "ReSpeaker", color: "#F5A524" },
      { name: "PostgreSQL", color: "#336791" },
    ],
    accentColor: "#F5A524" // Amber
  },
  {
    id: "eovi",
    role: "App Developer",
    org: "EOVI",
    timeline: "2025",
    mission: "Building and enhancing a React Native mobile platform focused on content discovery, curation, and social sharing.",
    responsibilities: [
      "Mobile Development",
      "Deep Linking",
      "Content Systems",
      "React Native architecture",
      "Platform Engineering",
      "Social Integrations",
    ],
    impact: "Delivered a seamless mobile content experience for live users through robust React Native development.",
    techStack: [
      { name: "React Native", color: "#61DAFB" },
      { name: "Node.js", color: "#339933" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Mobile Development", color: "#3B82F6" },
      { name: "Deep Linking", color: "#3B82F6" },
      { name: "Platform Engineering", color: "#3B82F6" },
    ],
    accentColor: "#3B82F6" // Blue
  },
  {
    id: "skillzo",
    role: "Technical Contributor",
    org: "Skillzo.AI",
    // NO TIMELINE / DATE FOR SKILLZO
    mission: "Supporting development of AI-powered sports analytics systems through software integration, payment infrastructure, and platform engineering.",
    responsibilities: [
      "Stripe integrations",
      "Subscription systems",
      "LangChain workflows",
      "OpenAI integrations",
      "Platform engineering",
      "Production support",
    ],
    impact: "Hands-on experience working within a production AI startup environment spanning software engineering, integrations, and platform operations.",
    techStack: [
      { name: "Node.js", color: "#339933" },
      { name: "React", color: "#61DAFB" },
      { name: "Stripe", color: "#008CDD" },
      { name: "LangChain", color: "#ffffff" },
      { name: "LangGraph", color: "#10B981" },
      { name: "OpenAI", color: "#412991" },
      { name: "FastAPI", color: "#009688" },
      { name: "PostgreSQL", color: "#336791" },
    ],
    accentColor: "#10B981" // Emerald
  }
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="py-16 px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-20" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 md:mb-16 text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <span className="text-[12px] uppercase font-mono tracking-widest text-accent font-bold">
            {"// EXPERIENCE"}
          </span>
        </div>
      </motion.div>

      <div className="flex flex-col gap-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative flex flex-col md:flex-row gap-6 md:gap-12"
          >
            {/* Timeline sidebar (Desktop) */}
            <div className="hidden md:flex flex-col items-center mt-2 relative">
              <div 
                className="w-4 h-4 rounded-full border-2 bg-background z-10 transition-colors duration-300"
                style={{ borderColor: exp.accentColor, boxShadow: `0 0 15px ${exp.accentColor}40` }}
              />
              {idx !== experiences.length - 1 && (
                <div className="w-px h-full bg-zinc-800 absolute top-4 group-hover:bg-zinc-700 transition-colors duration-300" />
              )}
            </div>

            <div className="flex-1 glass-panel p-8 md:p-10 rounded-3xl border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white font-semibold mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-lg">
                    <span 
                      className="font-medium"
                      style={{ color: exp.accentColor }}
                    >
                      {exp.org}
                    </span>
                    {exp.timeline && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                        <span className="text-zinc-400 font-mono text-sm uppercase tracking-wider">{exp.timeline}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-body text-zinc-300 leading-relaxed text-lg mb-4 font-light">
                    {exp.mission}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {exp.responsibilities.map((task, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 opacity-60"
                          style={{ backgroundColor: exp.accentColor }}
                        />
                        <span className="text-zinc-400 font-light">{task}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-zinc-900/40 rounded-xl border border-zinc-800/50 mb-6">
                    <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest block mb-2">Impact</span>
                    <p className="text-zinc-300 font-light">{exp.impact}</p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-zinc-800/50 bg-zinc-900/50 text-zinc-300"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
