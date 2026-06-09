"use client";

import React, { useRef, useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  tagline: string;
  impact: string;
  techStack: string[];
  github?: string;
  live?: string;
  
  // Expanded details
  overview: string;
  role: string;
  implementation: string;
  features: string[];
  challenges: string[];
  outcome: string;
}

const projects: Project[] = [
  {
    id: "neuro-controlled-hearing-aid",
    title: "Neuro-Controlled Hearing Aid",
    tagline: "AI-powered directional hearing system",
    impact: "Contributing to next-generation assistive hearing technology with real-time target speech enhancement.",
    techStack: ["Python", "PyTorch", "DSP", "ReSpeaker", "FastAPI"],
    overview: "An intelligent hearing assistance system combining spatial audio processing, machine learning, and embedded hardware to improve real-world listening experiences in noisy environments.",
    role: "Developed real-time audio processing pipelines and integrated hardware microphone arrays.",
    implementation: "Python, PyTorch, FastAPI, and DSP libraries interfacing with ReSpeaker Core v2.",
    features: ["Real-time audio processing", "Sound source localization (SRP-PHAT)", "Beamforming workflows", "Target speech enhancement"],
    challenges: ["Minimizing latency in real-time audio pipelines", "Optimizing models for edge deployment"],
    outcome: "Functional hardware-software prototype capable of isolating target speakers in noisy environments."
  },
  {
    id: "eovi",
    title: "EOVI Mobile Platform",
    tagline: "React Native content discovery platform",
    impact: "Delivered a seamless mobile content experience with robust deep linking and social media integrations.",
    techStack: ["React Native", "Node.js", "JavaScript", "Content Systems"],
    overview: "A mobile platform focused on content discovery, curation, and social sharing for modern media consumption.",
    role: "Built core application features, social media embeddings, and internal content management tools.",
    implementation: "React Native frontend, Node.js backend, and deep linking infrastructure.",
    features: ["Social media embedding", "Instagram integration", "Deep linking across screens", "Content management admin panel"],
    challenges: ["Handling complex native deep linking across iOS and Android", "Optimizing feed scroll performance"],
    outcome: "Successful deployment of core features enhancing user engagement and content discovery."
  },
  {
    id: "krushi-unnati",
    title: "Krushi Unnati",
    tagline: "ESP32 IoT sensor network + ML crop recommendations",
    impact: "Full-stack agricultural platform generating real-time crop and irrigation recommendations using XGBoost and MQTT.",
    techStack: ["ESP32", "FastAPI", "React", "XGBoost", "PostgreSQL"],
    github: "https://github.com/Loki3306/Smart-Farming_HACK",
    overview: "An agricultural technology solution focused on improving farming workflows and decision support systems through IoT and ML.",
    role: "Built the ML backend, IoT ingestion pipeline, and frontend dashboard.",
    implementation: "ESP32 firmware (MQTT), FastAPI backend, XGBoost inference, React dashboard.",
    features: ["Real-time soil telemetry", "ML-driven crop recommendations", "Irrigation scheduling", "Historical data analysis"],
    challenges: ["Ensuring reliable MQTT connections in poor connectivity areas", "Tuning XGBoost models on sparse data"],
    outcome: "Domain Prize Winner at Krushi Unnati Hackathon."
  },
  {
    id: "skillzo",
    title: "Skillzo Contributions",
    tagline: "AI-powered sports analytics integrations",
    impact: "Integrated Stripe workflows and AI-powered features using LangChain and OpenAI into a production environment.",
    techStack: ["LangChain", "OpenAI", "Stripe", "Node.js", "Python"],
    overview: "An AI-powered sports analytics system serving coaches and athletes.",
    role: "Handled payment infrastructure integration and assisted with AI feature rollout.",
    implementation: "Node.js, Stripe API, LangChain, OpenAI API.",
    features: ["Subscription management", "Stripe checkout workflows", "AI analytics integration", "Production debugging"],
    challenges: ["Managing complex subscription state across platforms", "Optimizing LLM prompt response times"],
    outcome: "Successfully launched premium tiers and AI features to active users."
  },
  {
    id: "airavat",
    title: "Airavat",
    tagline: "AI-powered offline-first healthcare PWA",
    impact: "Hybrid AI routing between local ONNX inference and cloud LLMs to assist Community Health Workers in connectivity-poor regions.",
    techStack: ["Next.js", "FastAPI", "ONNX", "IndexedDB", "TailwindCSS"],
    github: "https://github.com/Loki3306/Airavat_Hack",
    overview: "Emergency response and disaster coordination platform designed for rural healthcare workers.",
    role: "Built frontend, backend APIs, data flows, and AI integrations.",
    implementation: "FastAPI, Next.js, PostgreSQL, ONNX Runtime Web.",
    features: ["Offline-first PWA", "Local ONNX inference", "Cloud LLM sync via IndexedDB", "Health record management"],
    challenges: ["Implementing robust IndexedDB sync logic for intermittent connections", "Running ML models in-browser efficiently"],
    outcome: "Functional prototype demonstrated during hackathon, proving offline AI viability."
  },
  {
    id: "scholarship-chain",
    title: "Multi Authority Scholarship Chain",
    tagline: "Blockchain decentralized scholarship management",
    impact: "Authority verification system enabling trusted approvals through multi-signature Ethereum smart contracts.",
    techStack: ["Next.js", "Ethereum", "Hardhat", "Solidity", "Prisma"],
    github: "https://github.com/Loki3306/Multi-Authority-Scholarship-Chain",
    overview: "Decentralized scholarship verification system using blockchain to prevent fraud and streamline approvals.",
    role: "Wrote smart contracts and built the web3 frontend integration.",
    implementation: "Solidity smart contracts, Hardhat, Next.js, Ethers.js.",
    features: ["Multi-signature approvals", "Immutable record keeping", "Role-based access control", "Transparent auditing"],
    challenges: ["Optimizing smart contract gas costs", "Building a seamless UX over complex web3 transactions"],
    outcome: "3rd Place Winner."
  },
  {
    id: "stock-simulator",
    title: "Stock Simulator",
    tagline: "Real-time stock market simulation engine",
    impact: "Built a high-performance simulation engine to backtest and visualize algorithmic trading strategies.",
    techStack: ["Python", "React", "WebSockets", "Pandas", "PostgreSQL"],
    github: "https://github.com/Loki3306/stock_simulator_hack",
    overview: "A platform for testing, visualizing, and analyzing algorithmic trading strategies against historical and simulated live data.",
    role: "Developed the core simulation engine and real-time visualization dashboard.",
    implementation: "Python backend, WebSockets for streaming, React for live charts.",
    features: ["Real-time data streaming", "Strategy backtesting", "Portfolio analytics", "Live charting"],
    challenges: ["Handling high-frequency WebSocket data without frontend lag", "Accurate order matching simulation"],
    outcome: "Created a robust tool for validating quantitative strategies."
  },
  {
    id: "ocr-llm",
    title: "OCR + Local LLM Pipeline",
    tagline: "Secure document extraction and structuring",
    impact: "End-to-end OCR pipeline integrated with Local LLM (Ollama) to parse and structure complex documents on-premise.",
    techStack: ["Python", "FastAPI", "Tesseract", "LangChain", "Ollama"],
    github: "https://github.com/Loki3306/OCR-Pipeline",
    overview: "An enterprise-grade document extraction tool that keeps sensitive data entirely on-premise.",
    role: "Designed the ingestion pipeline and engineered the LLM extraction prompts.",
    implementation: "Python, FastAPI, Tesseract OCR, LangChain, Ollama.",
    features: ["Local inference", "Structured JSON output", "Multi-page PDF parsing", "High-accuracy text extraction"],
    challenges: ["Dealing with poor quality scans", "Ensuring consistent JSON schemas from local LLMs"],
    outcome: "Successfully automated manual data entry workflows securely."
  }
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered || isInteracting || expandedId !== null) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % projects.length;
        scrollToIndex(next);
        return next;
      });
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isHovered, isInteracting, expandedId]);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll('.project-card');
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const scrollLeft = card.offsetLeft - container.offsetLeft - 24; 
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, []);

  const handleNext = useCallback(() => {
    setIsInteracting(true);
    setCurrentIndex((prev) => {
      const next = Math.min(prev + 1, projects.length - 1);
      scrollToIndex(next);
      return next;
    });
    setTimeout(() => setIsInteracting(false), 2000);
  }, [scrollToIndex]);

  const handlePrev = useCallback(() => {
    setIsInteracting(true);
    setCurrentIndex((prev) => {
      const next = Math.max(prev - 1, 0);
      scrollToIndex(next);
      return next;
    });
    setTimeout(() => setIsInteracting(false), 2000);
  }, [scrollToIndex]);

  // Scroll event to update index
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth * 0.85 > 600 ? 600 : container.clientWidth * 0.85; 
    const newIndex = Math.round(scrollPosition / cardWidth);
    
    if (newIndex >= 0 && newIndex < projects.length && newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section id="projects" className="py-16 w-full relative">
      <div className="px-6 lg:px-8 max-w-6xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[12px] uppercase font-mono tracking-widest text-accent font-bold">
              {"// SELECTED WORK"}
            </span>
          </div>
          <h2 className="heading-section text-white mb-4">Selected Work</h2>
          <div className="w-12 h-1 bg-accent" />
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center gap-4">
          <div className="font-mono text-zinc-500 text-sm mr-4">
            <span className="text-white">{currentIndex + 1}</span> / {projects.length}
          </div>
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous project"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-white hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-zinc-800 disabled:hover:text-white transition-colors"
          >
            <FaChevronLeft className="w-4 h-4 pr-0.5" />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex === projects.length - 1}
            aria-label="Next project"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-white hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-zinc-800 disabled:hover:text-white transition-colors"
          >
            <FaChevronRight className="w-4 h-4 pl-0.5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onScroll={handleScroll}
        className="w-full overflow-x-auto snap-x snap-mandatory flex items-start gap-6 px-6 lg:px-8 pb-12 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Spacer for alignment to grid */}
        <div className="min-w-[max(0px,calc((100vw-72rem)/2))] hidden lg:block snap-center shrink-0" />
        
        {projects.map((project, idx) => {
          const isExpanded = expandedId === project.id;
          
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="project-card snap-center shrink-0 w-[85vw] sm:w-[500px] lg:w-[600px] flex flex-col group self-start"
            >
              <div className="flex flex-col flex-1 glass-panel p-8 md:p-10 rounded-3xl border border-zinc-800/50 hover:border-accent/30 transition-colors">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{project.title}</h3>
                <p className="text-body text-zinc-400 mb-6 h-[48px] overflow-hidden">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-[10px] font-mono border border-zinc-800 bg-zinc-950/50 text-zinc-300 rounded uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-8 p-5 bg-zinc-900/40 border border-zinc-800/50 rounded-xl">
                  <span className="block text-[10px] font-mono text-accent uppercase tracking-widest mb-2">Impact</span>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <button 
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-200 transition-colors"
                  >
                    {isExpanded ? "Close Details" : "View Details"}
                  </button>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-zinc-800 text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest rounded hover:border-accent hover:text-accent transition-colors">
                      <FaGithub className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>

                {/* Expandable Details Area */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-8 border-t border-zinc-800/50 flex flex-col gap-8 text-sm">
                        
                        <div>
                          <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Overview</h4>
                          <p className="text-zinc-300 font-light leading-relaxed">{project.overview}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">My Role</h4>
                          <p className="text-zinc-300 font-light leading-relaxed">{project.role}</p>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Technical Implementation</h4>
                          <p className="text-zinc-300 font-light leading-relaxed">{project.implementation}</p>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Key Features</h4>
                          <ul className="flex flex-col gap-2 text-zinc-300 font-light">
                            {project.features.map((f, i) => (
                              <li key={i} className="flex gap-3"><span className="text-zinc-600">•</span> {f}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Challenges</h4>
                          <ul className="flex flex-col gap-2 text-zinc-300 font-light">
                            {project.challenges.map((c, i) => (
                              <li key={i} className="flex gap-3"><span className="text-zinc-600">•</span> {c}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-mono text-accent uppercase tracking-widest mb-3">Outcome</h4>
                          <p className="text-white font-medium leading-relaxed">{project.outcome}</p>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          );
        })}

        {/* End spacer */}
        <div className="min-w-[max(0px,calc((100vw-72rem)/2))] hidden lg:block shrink-0" />
      </div>
    </section>
  );
}
