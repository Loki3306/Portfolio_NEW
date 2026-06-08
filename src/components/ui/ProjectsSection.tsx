"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, Layers, Brain, Server, Zap, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface Project {
  id: string;
  rank?: number;
  title: string;
  tagline: string;
  category: string;
  categoryId: string;
  problem: string;
  solution: string;
  techStack: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  isFlagship: boolean;
  accentColor: string;
  accentRgb: string;
}

const categories = [
  { id: "all", label: "All Projects", icon: <Layers className="w-3.5 h-3.5" /> },
  { id: "ai", label: "AI & Intelligent Systems", icon: <Brain className="w-3.5 h-3.5" /> },
  { id: "fullstack", label: "Full Stack Platforms", icon: <Server className="w-3.5 h-3.5" /> },
  { id: "research", label: "Research & DSP", icon: <Zap className="w-3.5 h-3.5" /> },
  { id: "emerging", label: "Emerging Tech", icon: <Star className="w-3.5 h-3.5" /> },
];

const projects: Project[] = [
  {
    id: "eeg-aad",
    rank: 1,
    title: "EEG Auditory Attention Decoding",
    tagline: "Subject-independent brain-computer interface for hearing assistive technology",
    category: "Research & DSP",
    categoryId: "research",
    problem:
      "Hearing aids amplify all speakers equally, unable to detect who the listener intends to hear. In noisy environments, this fails people with hearing loss.",
    solution:
      "A Temporal CNN trained on 8-channel EEG recordings that decodes listener attention — binary classification between two concurrent speech streams — without any per-subject calibration data.",
    techStack: ["Python", "PyTorch", "NumPy", "SciPy", "Temporal CNN", "EEG", "LOSO Cross-Validation"],
    highlights: [
      "8-channel configuration (vs 64+ in standard systems)",
      "Subject-independent: generalizes to unseen individuals",
      "~69K parameter model — edge deployable",
      "18-subject LOSO evaluation — all folds successful",
      "DTU-style AAD dataset, 64Hz sampling",
      "IEEE-style research paper",
    ],
    github: "https://github.com/Loki3306",
    isFlagship: true,
    accentColor: "rgba(155, 93, 229, 0.08)",
    accentRgb: "155, 93, 229",
  },
  {
    id: "grocify",
    rank: 2,
    title: "Grocify",
    tagline: "Full-stack grocery platform with real-time inventory, cart, and payment flows",
    category: "Full Stack Platforms",
    categoryId: "fullstack",
    problem:
      "Local grocery businesses lack digital infrastructure — no inventory management, no online ordering, no payment integration.",
    solution:
      "A production-grade full-stack web platform with real-time inventory tracking, user auth, cart management, and integrated payment processing via Stripe and Razorpay.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Razorpay", "Tailwind CSS", "JWT"],
    highlights: [
      "Full-stack delivery: frontend to database to payments",
      "Multi-gateway payment support (Stripe + Razorpay)",
      "JWT-based authentication with role separation",
      "PostgreSQL relational schema design",
      "Admin dashboard for inventory and order management",
    ],
    github: "https://github.com/Loki3306",
    isFlagship: true,
    accentColor: "rgba(16, 185, 129, 0.08)",
    accentRgb: "16, 185, 129",
  },
  {
    id: "beamforming",
    rank: 3,
    title: "Spatial Audio Beamforming System",
    tagline: "Directional audio capture using SRP-PHAT and ReSpeaker microphone array",
    category: "Research & DSP",
    categoryId: "research",
    problem:
      "Capturing audio from a specific direction in a noisy room requires more than a single microphone — standard setups pick up all sound equally.",
    solution:
      "Real-time SRP-PHAT (Steered Response Power — Phase Transform) direction-of-arrival estimation with adaptive beamforming filters applied to a 4-microphone ReSpeaker array.",
    techStack: ["Python", "NumPy", "SciPy", "ReSpeaker", "SRP-PHAT", "STFT", "ISTFT"],
    highlights: [
      "4-mic ReSpeaker hardware array integration",
      "SRP-PHAT direction-of-arrival estimation",
      "Real-time beamforming filters",
      "STFT/ISTFT pipeline for frequency-domain processing",
      "Bridges hardware signal acquisition and software DSP",
    ],
    github: "https://github.com/Loki3306",
    isFlagship: true,
    accentColor: "rgba(0, 245, 212, 0.07)",
    accentRgb: "0, 245, 212",
  },
  {
    id: "ocr-llm",
    rank: 4,
    title: "OCR + LLM Extraction Pipeline",
    tagline: "Automated document intelligence: text extraction → local LLM reasoning",
    category: "AI & Intelligent Systems",
    categoryId: "ai",
    problem:
      "Manual document processing is slow, error-prone, and doesn't scale — businesses need automated extraction pipelines that understand context, not just characters.",
    solution:
      "A full extraction pipeline combining high-accuracy OCR text extraction with Ollama-served local LLM reasoning — documents in, structured insights out.",
    techStack: ["Python", "Ollama", "OCR", "FastAPI", "LangChain", "PostgreSQL"],
    highlights: [
      "Local LLM serving via Ollama — no API costs",
      "OCR preprocessing pipeline for noisy document types",
      "FastAPI microservice exposing extraction endpoints",
      "Structured output parsing and database storage",
      "Handles PDFs, images, scanned documents",
    ],
    github: "https://github.com/Loki3306",
    isFlagship: true,
    accentColor: "rgba(238, 76, 44, 0.07)",
    accentRgb: "238, 76, 44",
  },
  {
    id: "smart-farming",
    rank: 5,
    title: "Smart Farming IoT System",
    tagline: "Real-time agricultural monitoring through hardware sensors and cloud telemetry",
    category: "Emerging Tech",
    categoryId: "emerging",
    problem:
      "Traditional farming relies on manual observation. Soil moisture, temperature, and humidity fluctuations go undetected until crop damage occurs.",
    solution:
      "An IoT sensor network built on Arduino with cloud-connected telemetry — real-time environmental monitoring with a web dashboard for farm condition visualization.",
    techStack: ["Arduino", "IoT Sensors", "Node.js", "Firebase", "WebSocket"],
    highlights: [
      "Arduino microcontroller with multi-sensor array",
      "Real-time telemetry streaming to cloud",
      "WebSocket-based live dashboard updates",
      "Soil moisture, temperature, humidity tracking",
      "Hardware-to-software full pipeline",
    ],
    github: "https://github.com/Loki3306",
    isFlagship: true,
    accentColor: "rgba(0, 151, 157, 0.08)",
    accentRgb: "0, 151, 157",
  },
  // Additional non-flagship projects
  {
    id: "auth-system",
    title: "JWT Authentication System",
    tagline: "Multi-role secure authentication with session management",
    category: "Full Stack Platforms",
    categoryId: "fullstack",
    problem: "Building secure, role-based access control that scales without coupling auth to business logic.",
    solution: "JWT-based authentication microservice with refresh token rotation, role guards, and Redis session caching.",
    techStack: ["Node.js", "JWT", "PostgreSQL", "Redis", "Express.js"],
    highlights: ["Refresh token rotation", "Role-based access control", "Redis session caching", "Middleware-level guards"],
    github: "https://github.com/Loki3306",
    isFlagship: false,
    accentColor: "rgba(99, 91, 255, 0.06)",
    accentRgb: "99, 91, 255",
  },
  {
    id: "realtime-socket",
    title: "Real-time Socket System",
    tagline: "Event-driven live communication platform with persistent rooms",
    category: "Emerging Tech",
    categoryId: "emerging",
    problem: "Standard REST APIs can't push updates to connected clients in real-time without polling.",
    solution: "Socket.IO event bus with Redis adapter for multi-instance horizontal scaling and persistent message queuing.",
    techStack: ["Socket.IO", "Node.js", "Redis", "Express.js"],
    highlights: ["Redis pub/sub adapter", "Horizontal scaling support", "Persistent message queuing", "Room management"],
    github: "https://github.com/Loki3306",
    isFlagship: false,
    accentColor: "rgba(255, 111, 0, 0.06)",
    accentRgb: "255, 111, 0",
  },
  {
    id: "rnnoise",
    title: "RNNoise Audio Denoiser",
    tagline: "Recurrent neural network noise suppression for audio inputs",
    category: "AI & Intelligent Systems",
    categoryId: "ai",
    problem: "Raw microphone captures in real environments contain broadband noise that degrades downstream AI audio processing.",
    solution: "RNNoise-based preprocessing pipeline that suppresses background noise before feeding audio into signal processing or ML models.",
    techStack: ["Python", "RNNoise", "NumPy", "SciPy", "DSP"],
    highlights: ["Real-time inference", "Recurrent noise model", "Plug-and-play preprocessing module", "Low latency footprint"],
    isFlagship: false,
    accentColor: "rgba(247, 37, 133, 0.06)",
    accentRgb: "247, 37, 133",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all" ? projects : projects.filter((p) => p.categoryId === activeCategory);

  const flagships = filtered.filter((p) => p.isFlagship);
  const others = filtered.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto w-full relative h-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mb-12 text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 font-bold">
            {"// Projects"}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Systems Built.<br className="hidden md:block" /> Problems Solved.
        </h2>
        <div className="h-[1px] w-24 bg-white/20 mx-auto md:mx-0" />
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="mb-10 flex flex-wrap gap-2 justify-center md:justify-start"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[11px] font-mono transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-white text-black border-white"
                : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Flagship Projects */}
      <AnimatePresence mode="wait">
        {flagships.length > 0 && (
          <motion.div
            key={activeCategory + "-flagships"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            {activeCategory === "all" && (
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-6 font-bold">
                Flagship Projects // Ranked by Technical Depth
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {flagships.map((proj, idx) => {
                const isExpanded = expandedId === proj.id;

                return (
                  <motion.div
                    key={proj.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className={`glass-panel linear-border-glow rounded-3xl overflow-hidden hover:border-zinc-700 transition-all duration-300 ${
                      isExpanded ? "md:col-span-2" : ""
                    }`}
                    style={{ backgroundColor: proj.accentColor }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {proj.rank && (
                              <span
                                className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border"
                                style={{
                                  color: `rgb(${proj.accentRgb})`,
                                  borderColor: `rgba(${proj.accentRgb}, 0.3)`,
                                  backgroundColor: `rgba(${proj.accentRgb}, 0.08)`,
                                }}
                              >
                                #{proj.rank} FLAGSHIP
                              </span>
                            )}
                            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">
                              {proj.category}
                            </span>
                          </div>
                          <h3 className="text-base md:text-lg font-bold text-white mb-1">{proj.title}</h3>
                          <p className="text-zinc-500 text-xs font-light">{proj.tagline}</p>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {proj.github && (
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors"
                            >
                              <SiGithub className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {proj.demo && (
                            <a
                              href={proj.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Problem → Solution */}
                      <div className="flex flex-col gap-2 mb-4">
                        <div className="rounded-xl p-3 bg-black/20 border border-zinc-900/50">
                          <p className="text-[9px] font-mono uppercase text-zinc-600 mb-1">Problem</p>
                          <p className="text-zinc-400 text-xs leading-relaxed font-light">{proj.problem}</p>
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {proj.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[9px] font-mono bg-zinc-950 border border-zinc-800 text-zinc-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : proj.id)}
                        className="flex items-center gap-1 text-[10px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors"
                      >
                        {isExpanded ? "Show less" : "View solution & highlights"}
                        <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronRight className="w-3 h-3" />
                        </motion.div>
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-zinc-900/50 pt-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div>
                                <p className="text-[9px] font-mono uppercase text-zinc-600 mb-2">Solution</p>
                                <p className="text-zinc-300 text-xs leading-relaxed font-light">{proj.solution}</p>
                              </div>
                              <div>
                                <p className="text-[9px] font-mono uppercase text-zinc-600 mb-2">
                                  Architecture Highlights
                                </p>
                                <ul className="flex flex-col gap-1.5">
                                  {proj.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[11px] text-zinc-400">
                                      <span
                                        className="w-1.5 h-1.5 rounded-full mt-1 shrink-0"
                                        style={{ backgroundColor: `rgb(${proj.accentRgb})` }}
                                      />
                                      {h}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Other Projects */}
      <AnimatePresence mode="wait">
        {others.length > 0 && (
          <motion.div
            key={activeCategory + "-others"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {activeCategory === "all" && (
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-6 font-bold">
                Engineering Systems // Additional Projects
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {others.map((proj, idx) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-panel linear-border-glow rounded-2xl p-5 hover:border-zinc-700 transition-all duration-300 flex flex-col"
                  style={{ backgroundColor: proj.accentColor }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-3"
                    style={{ backgroundColor: `rgb(${proj.accentRgb})` }}
                  />
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider mb-1">
                    {proj.category}
                  </span>
                  <h4 className="text-white text-sm font-bold mb-1.5">{proj.title}</h4>
                  <p className="text-zinc-500 text-[11px] leading-relaxed font-light mb-3 flex-1">{proj.tagline}</p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {proj.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-zinc-950 border border-zinc-800/60 text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.techStack.length > 3 && (
                      <span className="text-[9px] font-mono text-zinc-700">+{proj.techStack.length - 3}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
