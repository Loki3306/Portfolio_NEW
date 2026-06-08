"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiPython, SiTypescript, SiJavascript, SiC, SiCplusplus, 
  SiPytorch, SiTensorflow, SiOpencv, SiNumpy, SiPandas, 
  SiReact, SiNextdotjs, SiTailwindcss, SiThreedotjs, SiFramer, 
  SiNodedotjs, SiExpress, SiFastapi, SiPostgresql, SiMongodb, 
  SiRedis, SiSupabase, SiMysql, SiDocker,  
  SiGithubactions, SiLinux, SiGit, SiGithub, 
  SiStripe, SiRazorpay, SiFirebase,
  SiNetlify, SiArduino, SiWebrtc, SiSocketdotio, SiJsonwebtokens
} from "react-icons/si";
import { FaJava, FaVolumeUp, FaWaveSquare, FaHeadphones, FaMicrophone, FaBrain, FaAws } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { ChevronDown, ChevronUp, Cpu, Server, Layers, Code2, Brain } from "lucide-react";

interface SkillItem {
  name: string;
  category: string;
  capabilities: string[]; // ['fullstack', 'ai', 'research', 'cloud', 'emerging']
  description: string;
  color: string; // hex
  colorRgb: string; // r, g, b
  icon: React.ReactNode;
  isPrimary: boolean;
  relatedCapsText: string[];
}

interface CapabilityItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  bullets: string[];
  description: string;
}

const capabilitiesData: CapabilityItem[] = [
  {
    id: "fullstack",
    title: "Full Stack Applications",
    icon: <Code2 className="w-5 h-5" />,
    bullets: ["SaaS Platforms", "Admin Panels", "Business Systems", "Authentication", "Payments", "Dashboards"],
    description: "Building secure, responsive interfaces and structured server logic that process payments and sync data."
  },
  {
    id: "ai",
    title: "AI & Intelligent Systems",
    icon: <Brain className="w-5 h-5" />,
    bullets: ["OCR Systems", "LLM Pipelines", "Computer Vision", "Automation", "AI Assistants", "Inference Engines"],
    description: "Orchestrating machine learning frameworks, training model layers, and configuring local LLMs."
  },
  {
    id: "research",
    title: "Research & Signal Processing",
    icon: <Cpu className="w-5 h-5" />,
    bullets: ["EEG Processing", "DSP Algorithms", "Beamforming", "Spatial Audio", "Audio Intelligence"],
    description: "Bridging sensory biometrics and spatial audio streams with concurrent low-latency software algorithms."
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: <Server className="w-5 h-5" />,
    bullets: ["APIs & Caching", "Databases", "Docker Containment", "GitHub Actions CI/CD", "Scalable Architectures"],
    description: "Deploying production-ready microservices, designing relational schemas, and structuring clouds."
  },
  {
    id: "emerging",
    title: "Emerging Technologies",
    icon: <Layers className="w-5 h-5" />,
    bullets: ["Blockchain Integration", "IoT Sensors", "Fintech Logic", "Real-time Streaming", "Edge Computing"],
    description: "Exploring system boundaries, connecting hardware transceivers, and writing financial ledgers."
  }
];

const skillsData: SkillItem[] = [
  // Primary Skills (24)
  { name: "Python", category: "Languages", capabilities: ["ai", "research"], description: "Primary language for model training, digital signal processing (DSP), and FastAPI backends.", color: "#3776AB", colorRgb: "55, 118, 171", icon: <SiPython className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["AI & Intelligent Systems", "Research & Signal Processing"] },
  { name: "TypeScript", category: "Languages", capabilities: ["fullstack"], description: "Enforces static typing for frontend views and scalable Node.js scripts.", color: "#3178C6", colorRgb: "49, 120, 198", icon: <SiTypescript className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications"] },
  { name: "React.js", category: "Frontend", capabilities: ["fullstack"], description: "Component-driven user interfaces, state synchronization, and reactive views.", color: "#61DAFB", colorRgb: "97, 218, 251", icon: <SiReact className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications"] },
  { name: "Next.js", category: "Frontend", capabilities: ["fullstack"], description: "App Routing, Server Components, static site exports, and web page rendering optimization.", color: "#ffffff", colorRgb: "255, 255, 255", icon: <SiNextdotjs className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications"] },
  { name: "PyTorch", category: "AI/ML", capabilities: ["ai"], description: "Deep learning framework used to design, train, and test neural network architectures.", color: "#EE4C2C", colorRgb: "238, 76, 44", icon: <SiPytorch className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["AI & Intelligent Systems"] },
  { name: "FastAPI", category: "Backend", capabilities: ["fullstack", "ai"], description: "High-performance Python API microservices for ML models.", color: "#009688", colorRgb: "0, 150, 136", icon: <SiFastapi className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications", "AI Systems"] },
  { name: "PostgreSQL", category: "Databases", capabilities: ["fullstack", "cloud"], description: "Primary relational database for high-integrity, structured tables.", color: "#4169E1", colorRgb: "65, 105, 225", icon: <SiPostgresql className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications", "Cloud & Infrastructure"] },
  { name: "Docker", category: "DevOps", capabilities: ["cloud"], description: "Containerizing service blocks for uniform compilation across machines.", color: "#2496ED", colorRgb: "36, 150, 237", icon: <SiDocker className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Cloud & Infrastructure"] },
  { name: "EEG Signal Processing", category: "Research", capabilities: ["research"], description: "Acquiring, filtering, and modeling brainwave streams for neuro-control systems.", color: "#9b5de5", colorRgb: "155, 93, 229", icon: <GiBrain className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Research & Signal Processing"] },
  { name: "Beamforming", category: "Research", capabilities: ["research"], description: "Directional spatial audio enhancement using microphone array inputs.", color: "#00f5d4", colorRgb: "0, 245, 212", icon: <FaVolumeUp className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Research & Signal Processing"] },
  { name: "Node.js", category: "Backend", capabilities: ["fullstack"], description: "Scalable backend applications and event-driven server scripting.", color: "#339933", colorRgb: "51, 153, 51", icon: <SiNodedotjs className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications"] },
  { name: "AWS", category: "DevOps", capabilities: ["cloud"], description: "Configuring server instances, computing blocks, and cloud storage.", color: "#FF9900", colorRgb: "255, 153, 0", icon: <FaAws className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Cloud & Infrastructure"] },
  { name: "MongoDB", category: "Databases", capabilities: ["fullstack"], description: "NoSQL document store for flexible schema structures and logs.", color: "#47A248", colorRgb: "71, 162, 72", icon: <SiMongodb className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications"] },
  { name: "Tailwind CSS", category: "Frontend", capabilities: ["fullstack"], description: "Configuring typography, responsive spacing structures, and theme properties.", color: "#06B6D4", colorRgb: "6, 182, 212", icon: <SiTailwindcss className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications"] },
  { name: "Stripe API", category: "Backend", capabilities: ["fullstack"], description: "Secure integration of payment gates, invoices, and webhook validations.", color: "#635BFF", colorRgb: "99, 91, 255", icon: <SiStripe className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications"] },
  { name: "Java", category: "Languages", capabilities: ["fullstack"], description: "Used for core data structures & algorithms and competitive programming.", color: "#F89820", colorRgb: "248, 152, 32", icon: <FaJava className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications"] },
  { name: "C++", category: "Languages", capabilities: ["research"], description: "Performance-critical programming, algorithm execution, and systems coding.", color: "#00599C", colorRgb: "0, 89, 156", icon: <SiCplusplus className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Research & Signal Processing"] },
  { name: "TensorFlow", category: "AI/ML", capabilities: ["ai"], description: "Building predictive models and deploying trained networks to execution graphs.", color: "#FF6F00", colorRgb: "255, 111, 0", icon: <SiTensorflow className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["AI & Intelligent Systems"] },
  { name: "Ollama", category: "AI/ML", capabilities: ["ai"], description: "Configuring and serving Large Language Models (LLMs) locally.", color: "#9c27b0", colorRgb: "156, 39, 176", icon: <FaBrain className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["AI & Intelligent Systems"] },
  { name: "Git", category: "Tools", capabilities: ["cloud"], description: "Local version tracking, merging branches, and handling code splits.", color: "#F05032", colorRgb: "240, 80, 50", icon: <SiGit className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Cloud & Infrastructure"] },
  { name: "GitHub", category: "Tools", capabilities: ["cloud"], description: "Hosting remote repositories, reviewing PRs, and automating builds.", color: "#ffffff", colorRgb: "255, 255, 255", icon: <SiGithub className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Cloud & Infrastructure"] },
  { name: "Linux OS", category: "DevOps", capabilities: ["cloud", "ai"], description: "Command-line server navigation, system jobs configuration, and shell scripts.", color: "#FCC624", colorRgb: "252, 198, 36", icon: <SiLinux className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Cloud & Infrastructure", "AI Systems"] },
  { name: "DSP Algorithms", category: "Research", capabilities: ["research"], description: "Executing STFT, window filters, and frequency analysis on signal feeds.", color: "#fee440", colorRgb: "254, 228, 64", icon: <FaMicrophone className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Research & Signal Processing"] },
  { name: "Framer Motion", category: "Frontend", capabilities: ["fullstack"], description: "Physics-based animation control, layout transitions, and scroll events.", color: "#0055FF", colorRgb: "0, 85, 255", icon: <SiFramer className="w-4 h-4" />, isPrimary: true, relatedCapsText: ["Full Stack Applications"] },

  // Secondary Skills (22)
  { name: "JavaScript", category: "Languages", capabilities: ["fullstack"], description: "Used for React frontend development and event-driven Node.js scripts.", color: "#F7DF1E", colorRgb: "247, 223, 30", icon: <SiJavascript className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications"] },
  { name: "C", category: "Languages", capabilities: ["research"], description: "Low-level system logic and hardware performance alignments.", color: "#A8B9CC", colorRgb: "168, 185, 204", icon: <SiC className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Research & Signal Processing"] },
  { name: "SQL", category: "Languages", capabilities: ["fullstack", "cloud"], description: "Database structures, relational layouts, and query setups.", color: "#003B57", colorRgb: "0, 59, 87", icon: <SiPostgresql className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications", "Cloud & Infra"] }, // reused postgres
  { name: "OpenCV", category: "AI/ML", capabilities: ["ai"], description: "Real-time computer vision processing, image filtering, and feature extraction.", color: "#5C3EE8", colorRgb: "92, 62, 232", icon: <SiOpencv className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["AI & Intelligent Systems"] },
  { name: "NumPy", category: "AI/ML", capabilities: ["ai", "research"], description: "Vectorized signal array manipulation and data feature engineering.", color: "#013243", colorRgb: "1, 50, 67", icon: <SiNumpy className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["AI & Signal Processing"] },
  { name: "Pandas", category: "AI/ML", capabilities: ["ai"], description: "Structured data analysis, CSV parsing, and input feature manipulation.", color: "#150458", colorRgb: "21, 4, 88", icon: <SiPandas className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["AI & Intelligent Systems"] },
  { name: "Express.js", category: "Backend", capabilities: ["fullstack"], description: "REST microservice routing and secure request middleware pipelines.", color: "#ffffff", colorRgb: "255, 255, 255", icon: <SiExpress className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications"] },
  { name: "Three.js", category: "Frontend", capabilities: ["fullstack", "research"], description: "WebGL graphic scene builds, camera systems, light paths, and geometry matrices.", color: "#ffffff", colorRgb: "255, 255, 255", icon: <SiThreedotjs className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications", "Research & Signal"] },
  { name: "Redis", category: "Databases", capabilities: ["fullstack", "cloud"], description: "In-memory database cache to store sessions and lower query latencies.", color: "#DC382D", colorRgb: "220, 56, 45", icon: <SiRedis className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications", "Cloud & Infra"] },
  { name: "Supabase", category: "Databases", capabilities: ["fullstack", "cloud"], description: "Relational database hosting, user auth controls, and real-time triggers.", color: "#3ECF8E", colorRgb: "62, 207, 142", icon: <SiSupabase className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications", "Cloud & Infra"] },
  { name: "MySQL", category: "Databases", capabilities: ["fullstack", "cloud"], description: "Standard relational database usage for events, tracking, and logs.", color: "#4479A1", colorRgb: "68, 121, 161", icon: <SiMysql className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications", "Cloud & Infra"] },
  { name: "GitHub Actions", category: "DevOps", capabilities: ["cloud"], description: "Configuring automated CI/CD workflows, tests, and build deployments.", color: "#2088FF", colorRgb: "32, 136, 255", icon: <SiGithubactions className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Cloud & Infrastructure"] },
  { name: "WebRTC", category: "Emerging", capabilities: ["emerging"], description: "Real-time communication framework for low-latency browser streaming.", color: "#FF6F00", colorRgb: "255, 111, 0", icon: <SiWebrtc className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Emerging Technologies"] },
  { name: "Socket.IO", category: "Emerging", capabilities: ["emerging"], description: "Real-time bidirectional event communication library.", color: "#ffffff", colorRgb: "255, 255, 255", icon: <SiSocketdotio className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Emerging Technologies"] },
  { name: "JWT", category: "Backend", capabilities: ["fullstack"], description: "Structuring secure JSON Web Tokens for API authorization headers.", color: "#000000", colorRgb: "0, 0, 0", icon: <SiJsonwebtokens className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications"] },
  { name: "Razorpay", category: "Backend", capabilities: ["fullstack"], description: "Integrating regional Indian payment routes, checks, and API calls.", color: "#0055FF", colorRgb: "0, 85, 255", icon: <SiRazorpay className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications"] },
  { name: "Firebase", category: "Backend", capabilities: ["fullstack"], description: "Cloud database triggers, analytics setups, and real-time database nodes.", color: "#FFCA28", colorRgb: "255, 202, 40", icon: <SiFirebase className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications"] },
  { name: "Vercel", category: "Tools", capabilities: ["fullstack"], description: "Hosting Next.js sites, monitoring performance metrics, and build setups.", color: "#ffffff", colorRgb: "255, 255, 255", icon: <SiNextdotjs className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications"] }, // reuse next logo
  { name: "Netlify", category: "Tools", capabilities: ["fullstack"], description: "Automated serverless builds, CDN routing, and page triggers.", color: "#00C8C8", colorRgb: "0, 200, 200", icon: <SiNetlify className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Full Stack Applications"] },
  { name: "Arduino", category: "Emerging", capabilities: ["emerging"], description: "Microcontroller coding and parsing serial data from sensor modules.", color: "#00979D", colorRgb: "0, 151, 157", icon: <SiArduino className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Emerging Technologies"] },
  { name: "RNNoise", category: "Research", capabilities: ["research"], description: "Recurrent neural network noise suppression workflows for audio inputs.", color: "#ff006e", colorRgb: "255, 0, 110", icon: <FaWaveSquare className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Research & Signal Processing"] },
  { name: "Spatial Audio Synthesis", category: "Research", capabilities: ["research"], description: "Generating sound rendering patterns based on angle vectors.", color: "#3a86c8", colorRgb: "58, 134, 200", icon: <FaHeadphones className="w-4 h-4" />, isPrimary: false, relatedCapsText: ["Research & Signal Processing"] },
];

export default function SkillsUniverse() {
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPos({
      x: e.clientX,
      y: e.clientY - 50,
    });
  };

  const visibleSkills = isExpanded 
    ? skillsData 
    : skillsData.filter(skill => skill.isPrimary);

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto w-full relative h-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 font-bold">
            {"// Systems, Platforms & Technologies"}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Engineering Across Domains
        </h2>
        <div className="h-[1px] w-24 bg-white/20 mx-auto md:mx-0" />
      </motion.div>

      {/* LAYER 1: CAPABILITY CARDS */}
      <div className="mb-16">
        <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6 font-semibold md:text-left text-center">
          Core Capabilities // What I Build
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilitiesData.map((cap) => {
            const isHovered = hoveredCapability === cap.id;
            const isAnyHovered = hoveredCapability !== null;
            
            return (
              <div
                key={cap.id}
                onMouseEnter={() => setHoveredCapability(cap.id)}
                onMouseLeave={() => setHoveredCapability(null)}
                className={`glass-panel linear-border-glow rounded-2xl p-5 bg-zinc-950/20 border transition-all duration-300 flex flex-col justify-between min-h-[220px] ${
                  isHovered 
                    ? "border-white/30 scale-[1.03] shadow-[0_10px_25px_rgba(255,255,255,0.05)] bg-zinc-900/10" 
                    : isAnyHovered 
                      ? "border-zinc-900/40 opacity-40" 
                      : "border-zinc-900/60 hover:border-zinc-800"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                    isHovered ? "bg-white text-black border-white" : "bg-zinc-900/80 border-zinc-800 text-zinc-300"
                  }`}>
                    {cap.icon}
                  </div>
                  <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider">{cap.title}</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{cap.description}</p>
                </div>
                
                <div className="border-t border-zinc-900/80 pt-3 mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.bullets.slice(0, 3).map((bullet) => (
                      <span key={bullet} className="text-[8px] font-mono bg-zinc-950 px-1.5 py-0.5 rounded text-zinc-400">
                        {bullet}
                      </span>
                    ))}
                    {cap.bullets.length > 3 && (
                      <span className="text-[8px] font-mono text-zinc-600">
                        +{cap.bullets.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* LAYER 2: THE TECHNOLOGY CLOUD */}
      <div>
        <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-8 font-semibold md:text-left text-center">
          Technology Stack // Sourced Components
        </h3>

        <div className="glass-panel linear-border-glow rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden bg-zinc-950/40">
          {/* Subtle grid backdrop inside canvas */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Collapsible content wrapper */}
          <motion.div 
            layout
            className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl relative z-10"
          >
            {visibleSkills.map((skill, index) => {
              // Highlight rules:
              // 1. If no capability card is hovered, all remain full opacity (or hover glows them)
              // 2. If a capability card is hovered, highlight only if it belongs to that capability
              const isMapped = skill.capabilities.includes(hoveredCapability || "");
              const isHighlighted = hoveredCapability === null || isMapped;
              
              return (
                <motion.div
                  key={skill.name}
                  layout
                  animate={{
                    // Subtle float movement
                    y: [0, Math.sin(index * 1.5) * 6, 0],
                    x: [0, Math.cos(index * 1.2) * 4, 0],
                    opacity: isHighlighted ? 1 : 0.15,
                    scale: isHighlighted ? 1 : 0.9,
                  }}
                  transition={{
                    y: {
                      duration: 3 + (index % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (index % 5) * 0.1,
                    },
                    x: {
                      duration: 3.5 + (index % 4),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (index % 5) * 0.05,
                    },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  onMouseEnter={(e) => {
                    if (isHighlighted) {
                      setHoveredSkill(skill);
                      setTooltipPos({ x: e.clientX, y: e.clientY - 50 });
                    }
                  }}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onMouseMove={handleMouseMove}
                  style={{
                    color: skill.color,
                    borderColor: (hoveredSkill?.name === skill.name || (hoveredCapability && isMapped))
                      ? skill.color 
                      : "rgba(39, 39, 42, 0.4)",
                    boxShadow: (hoveredSkill?.name === skill.name || (hoveredCapability && isMapped))
                      ? `0 0 15px rgba(${skill.colorRgb}, 0.2)` 
                      : "none",
                  }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-950 border text-zinc-300 cursor-default select-none hover:text-white hover:scale-[1.08] transition-all duration-300 font-mono text-[10px] font-medium"
                >
                  <span style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="text-zinc-300 hover:text-white transition-colors duration-200">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* VIEW MORE TOGGLE BUTTON */}
          <div className="mt-10 relative z-20 flex justify-center w-full border-t border-zinc-900 pt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              {isExpanded ? (
                <>
                  Show Top Technologies <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View All {skillsData.length} Technologies <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Brand Glow Tooltip */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ duration: 0.1 }}
            style={{
              position: "fixed",
              top: tooltipPos.y,
              left: tooltipPos.x,
              transform: "translate(-50%, -100%)",
              pointerEvents: "none",
              zIndex: 100,
              boxShadow: `0 8px 30px rgba(${hoveredSkill.colorRgb}, 0.15)`,
              borderColor: hoveredSkill.color,
            }}
            className="bg-black/95 border px-4 py-3 rounded-2xl text-[10px] text-zinc-300 max-w-xs backdrop-blur-md transition-all"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span style={{ color: hoveredSkill.color }}>
                {hoveredSkill.icon}
              </span>
              <p className="font-bold text-white text-xs font-mono">{hoveredSkill.name}</p>
            </div>
            
            <p className="leading-relaxed font-light text-zinc-400 mb-2">{hoveredSkill.description}</p>
            
            <div className="border-t border-zinc-900 pt-2 flex items-center gap-1.5 flex-wrap">
              <span className="text-[8px] uppercase tracking-wider font-mono text-zinc-500 font-bold">Related:</span>
              {hoveredSkill.relatedCapsText.map((tag) => (
                <span key={tag} className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
