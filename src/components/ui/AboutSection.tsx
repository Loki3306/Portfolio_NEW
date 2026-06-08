"use client";

import { motion } from "framer-motion";
import { 
  Brain, Activity, Cpu, Server, Volume2, FileText, Network, Terminal,
  ChevronRight
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardHoverVariants = {
  hover: {
    scale: 1.03,
    borderColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.08)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto w-full relative h-auto">
      {/* SECTION HEADER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mb-20 text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 font-bold">
            {"// The Engineering Journey"}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          From Algorithms to Intelligent Systems
        </h2>
        <div className="h-[1px] w-24 bg-white/20 mx-auto md:mx-0" />
      </motion.div>

      {/* CHAPTER 1 & CHAPTER 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
        
        {/* Chapter 1: Where It Started (CS & Algorithms) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="lg:col-span-6 flex flex-col justify-between glass-panel linear-border-glow rounded-3xl p-8 bg-zinc-950/20"
        >
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 font-semibold">
              Chapter 01 // The Foundation
            </h3>
            <h4 className="text-xl font-bold text-white mb-4">
              Where It Started: Problem Solving
            </h4>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              My engineering journey began with pure algorithmic logic. Diving deep into data structures and discrete mathematics, I built a strong analytical mindset through competitive programming. Solving <strong className="text-white font-medium">250+ problems on LeetCode</strong> and competing on Codeforces, I trained myself to think about memory optimization, complexity bounds, and micro-performance. This foundational rigor taught me how to write clean, predictable code—a baseline I carry into building real-time hardware-bound interfaces.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3 text-xs font-mono text-zinc-500 border-t border-zinc-900 pt-6">
            <Terminal className="w-4 h-4 text-zinc-600" />
            <span>LeetCode 250+ (Java) // Codeforces 1095</span>
          </div>
        </motion.div>

        {/* Chapter 2: The Progression (Visual Journey Map) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="lg:col-span-6 flex flex-col justify-between glass-panel linear-border-glow rounded-3xl p-8 bg-zinc-950/20"
        >
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 font-semibold">
              Chapter 02 // The Progression
            </h3>
            <h4 className="text-xl font-bold text-white mb-4">
              Expanding Beyond Traditional Software
            </h4>
            
            {/* Visual Step Map */}
            <div className="flex flex-col gap-4 mt-6">
              {[
                { step: "01", label: "Computer Science", desc: "Data structures, algorithms, foundational system design." },
                { step: "02", label: "Backend Engineering", desc: "FastAPI, Node.js, Stripe integrations, scalable microservices." },
                { step: "03", label: "AI Systems", desc: "Neural networks, OCR text extraction, computer vision." },
                { step: "04", label: "Signal Processing", desc: "SRP-PHAT direction-of-arrival, beamforming, STFT/ISTFT streams." },
                { step: "05", label: "Research Engineering", desc: "EEG interfaces, biosensor integrations, real-time sensory pipelines." }
              ].map((item, idx, arr) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="w-[1px] h-6 bg-zinc-900 my-1" />
                    )}
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-semibold font-mono tracking-wider">{item.label}</h5>
                    <p className="text-[10px] text-zinc-500 leading-normal mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* THE EDUCATION TIMELINE BLOCK WITH SPECIALIZATION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="glass-panel linear-border-glow rounded-3xl p-8 mb-20 bg-zinc-950/20"
      >
        <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 font-semibold">
          Academic Journey // Specialized Background
        </h3>
        
        {/* SPIT Nested Tree Representation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <div>
            <h4 className="text-2xl font-bold text-white">Sardar Patel Institute of Technology (SPIT)</h4>
            <p className="text-zinc-500 text-xs font-mono mt-1">{"// Mumbai, India"}</p>
          </div>
          <span className="px-3 py-1 rounded border border-zinc-800 bg-zinc-900 text-zinc-400 font-mono text-xs">
            B.Tech CSE: 2024 - 2028
          </span>
        </div>

        <div className="border-l border-zinc-800 pl-6 ml-2 flex flex-col gap-6 font-mono text-sm">
          {/* Node 1 */}
          <div className="relative">
            <span className="absolute -left-[30px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-zinc-500 font-mono">├─</span>
              <span className="text-zinc-300 font-sans">B.Tech in Computer Science and Engineering</span>
              <span className="text-zinc-500 font-mono">[GPA: 8.84 / 10]</span>
            </div>
          </div>
          
          {/* Node 2 */}
          <div className="relative">
            <span className="absolute -left-[30px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="flex flex-col gap-1 items-start">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 font-mono">└─</span>
                <span className="text-zinc-400 font-mono font-bold uppercase tracking-wider text-[11px] bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  Industry Specialization
                </span>
              </div>
              <div className="pl-6 flex items-start gap-2 mt-1">
                <ChevronRight className="w-4 h-4 text-zinc-600 mt-0.5" />
                <div className="font-sans">
                  <p className="text-white text-xs font-semibold">Fintech Engineering and Digital Financial Systems</p>
                  <p className="text-zinc-500 text-[10px] font-mono mt-0.5">Academic specialization certified by L&T EduTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CHAPTER 3: THREE PILLARS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mb-20"
      >
        <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8 font-semibold">
          Chapter 03 // Core Capabilities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="glass-panel linear-border-glow rounded-3xl p-6 flex flex-col gap-4 bg-zinc-950/10">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Intelligent Systems</h4>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
              Designing interfaces that interact with biosignals and sensory environments. Processing EEG sensor data streams, researching Auditory Attention Decoding (AAD), and executing digital signal processing tasks (beamforming, SRP-PHAT) directly at the hardware-software boundary.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="glass-panel linear-border-glow rounded-3xl p-6 flex flex-col gap-4 bg-zinc-950/10">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Brain className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">AI Applications</h4>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
              Transforming intelligence models into production workflows. Building high-accuracy OCR data capture systems, orchestrating localized Large Language Model (LLM) pipelines, and coding computer vision pipelines for real-world automated decision logic.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="glass-panel linear-border-glow rounded-3xl p-6 flex flex-col gap-4 bg-zinc-950/10">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Engineering Platforms</h4>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
              Structuring robust distributed backends and streaming nodes. Authoring API microservices in FastAPI/Node.js, coding secure authentication systems, integrating Stripe payment layers, and optimizing database storage caches to lower application latencies.
            </p>
          </div>

        </div>
      </motion.div>

      {/* CHAPTER 4: CURRENT FOCUS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="glass-panel linear-border-glow rounded-3xl p-8 mb-20 bg-zinc-950/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div className="max-w-2xl">
          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2 font-semibold">
            Chapter 04 // Current Focus
          </h3>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
            I am dedicated to research-to-production pipelines: taking sensory input feeds (audio, biosignals, brainwaves) and engineering optimized, high-frequency, low-latency software structures that evaluate and decide in real-time.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950 text-xs text-white font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Signal-to-Code Pipeline
        </div>
      </motion.div>

      {/* ENGINEERING HIGHLIGHTS GRID */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="h-auto"
      >
        <div className="mb-12">
          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2 font-semibold">
            Technical Competence // Capabilities
          </h3>
          <h4 className="text-2xl md:text-3xl font-bold text-white">Engineering Highlights</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "AI Systems & Deep Learning", desc: "Training recurrent neural networks (RNNs) and modeling temporal patterns for signal prediction.", icon: <Brain className="w-4 h-4 text-zinc-400" /> },
            { title: "Digital Signal Processing", desc: "Executing STFT/ISTFT filters, audio analysis, and noise cancellation algorithms.", icon: <Activity className="w-4 h-4 text-zinc-400" /> },
            { title: "EEG Research & BCI", desc: "Parsing biological sensor data streams to interface brainwaves with digital logic.", icon: <Cpu className="w-4 h-4 text-zinc-400" /> },
            { title: "Backend Architecture", desc: "Designing secure, high-throughput REST API microservices in FastAPI and Node.js.", icon: <Server className="w-4 h-4 text-zinc-400" /> },
            { title: "Real-Time Audio Pipelines", desc: "Integrating multi-channel microphone arrays (ReSpeaker) for real-time directional captures.", icon: <Volume2 className="w-4 h-4 text-zinc-400" /> },
            { title: "OCR & LLM Orchestration", desc: "Developing automated text extraction systems and local LLM reasoning integrations.", icon: <FileText className="w-4 h-4 text-zinc-400" /> },
            { title: "Distributed Systems & Stripe", desc: "Structuring relational databases (PostgreSQL/MySQL), caching layers, and payment gateways.", icon: <Network className="w-4 h-4 text-zinc-400" /> },
            { title: "Algorithmic Rigor", desc: "Applying complex data structure designs and algorithms with 250+ Java solutions completed.", icon: <Terminal className="w-4 h-4 text-zinc-400" /> }
          ].map((hl) => (
            <motion.div
              key={hl.title}
              whileHover="hover"
              variants={cardHoverVariants}
              className="glass-panel linear-border-glow rounded-2xl p-5 bg-zinc-950/20 border border-zinc-900/60 hover:border-zinc-800 transition-colors flex flex-col justify-between min-h-[160px]"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-4 text-zinc-300">
                {hl.icon}
              </div>
              <div>
                <h5 className="text-white text-sm font-semibold mb-1.5">{hl.title}</h5>
                <p className="text-zinc-400 text-[11px] leading-relaxed font-light">{hl.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
