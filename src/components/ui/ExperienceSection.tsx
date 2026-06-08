"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, Users, Code2 } from "lucide-react";
import { SiNextdotjs, SiReact, SiFastapi, SiPostgresql, SiDocker, SiTailwindcss, SiNodedotjs, SiTypescript, SiPython } from "react-icons/si";

interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  orgShort: string;
  timeline: string;
  status: "active" | "ongoing" | "completed";
  type: string;
  challenge: string;
  responsibilities: string[];
  impact: string;
  techStack: { name: string; icon: React.ReactNode; color: string }[];
  icon: React.ReactNode;
  accentColor: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "uscapes",
    role: "Lead Software Engineer Intern",
    org: "USCAPES",
    orgShort: "USCAPES",
    timeline: "Present",
    status: "active",
    type: "Engineering Internship",
    challenge:
      "Building a production-grade product platform at startup velocity — owning both frontend architecture and backend systems with full end-to-end delivery responsibility.",
    responsibilities: [
      "Leading engineering decisions across the product's frontend and backend system design",
      "Building scalable SaaS-style platform components including auth flows, dashboards, and data pipelines",
      "Shipping full-stack feature sets from design specification through to deployment",
      "Architecting reusable component systems with TypeScript and Next.js App Router",
    ],
    impact:
      "Full product engineering ownership in a live startup — directly shipping to real users with accountability from system design to production.",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3" />, color: "#ffffff" },
      { name: "React", icon: <SiReact className="w-3 h-3" />, color: "#61DAFB" },
      { name: "FastAPI", icon: <SiFastapi className="w-3 h-3" />, color: "#009688" },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-3 h-3" />, color: "#4169E1" },
      { name: "Docker", icon: <SiDocker className="w-3 h-3" />, color: "#2496ED" },
      { name: "Tailwind", icon: <SiTailwindcss className="w-3 h-3" />, color: "#06B6D4" },
    ],
    icon: <Code2 className="w-5 h-5" />,
    accentColor: "rgba(99, 102, 241, 0.15)",
  },
  {
    id: "skillzo",
    role: "Technical Contributor",
    org: "Skillzo.AI",
    orgShort: "Skillzo",
    timeline: "Present",
    status: "active",
    type: "AI Product Engineering",
    challenge:
      "Integrating AI tooling into an EdTech platform where both technical precision and delivery pace are critical — building features that real learners depend on.",
    responsibilities: [
      "Contributing AI-powered feature engineering to the core product stack",
      "Building and integrating software modules that enhance the platform's intelligence layer",
      "Working across the full technical stack to support product development velocity",
      "Collaborating with the product team to translate requirements into shipped features",
    ],
    impact:
      "Cross-domain EdTech product experience combining AI integration with frontend and backend delivery in a live product environment.",
    techStack: [
      { name: "Python", icon: <SiPython className="w-3 h-3" />, color: "#3776AB" },
      { name: "React", icon: <SiReact className="w-3 h-3" />, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript className="w-3 h-3" />, color: "#3178C6" },
      { name: "Node.js", icon: <SiNodedotjs className="w-3 h-3" />, color: "#339933" },
    ],
    icon: <Zap className="w-5 h-5" />,
    accentColor: "rgba(16, 185, 129, 0.12)",
  },
  {
    id: "csi",
    role: "Events Lead",
    org: "Computer Society of India — SPIT Chapter",
    orgShort: "CSI-SPIT",
    timeline: "Ongoing",
    status: "ongoing",
    type: "Technical Leadership",
    challenge:
      "Coordinating large-scale technical events at the college level demands simultaneous management of logistics, cross-team coordination, participant experience, and technical content quality.",
    responsibilities: [
      "Leading planning and execution of technical events, hackathons, and workshops",
      "Coordinating teams of volunteers and managing multi-day event logistics",
      "Driving technical programs that build the engineering community at SPIT",
      "Interfacing with industry partners and organizing speaker sessions",
    ],
    impact:
      "Built and demonstrated organizational leadership and community-building skills alongside deep technical engineering work — a rare combination.",
    techStack: [],
    icon: <Users className="w-5 h-5" />,
    accentColor: "rgba(245, 158, 11, 0.12)",
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

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto w-full relative h-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mb-16 text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 font-bold">
            {"// Professional Experience"}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Where Systems Were Built<br className="hidden md:block" /> Under Real Constraints
        </h2>
        <div className="h-[1px] w-24 bg-white/20 mx-auto md:mx-0" />
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative flex flex-col gap-6">
        {/* Vertical connector line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent hidden md:block" />

        {experiences.map((exp, idx) => {
          const isExpanded = expandedId === exp.id;

          return (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="relative md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-5 w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 hidden md:flex items-center justify-center text-zinc-400 z-10">
                {exp.icon}
              </div>

              {/* Card */}
              <div
                className="glass-panel linear-border-glow rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer hover:border-zinc-700"
                style={{ backgroundColor: exp.accentColor }}
                onClick={() => setExpandedId(isExpanded ? null : exp.id)}
              >
                {/* Card Header */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
                            exp.status === "active"
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                              : exp.status === "ongoing"
                              ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                              : "bg-zinc-800 border-zinc-700 text-zinc-500"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              exp.status === "active"
                                ? "bg-emerald-400 animate-pulse"
                                : exp.status === "ongoing"
                                ? "bg-amber-400"
                                : "bg-zinc-600"
                            }`}
                          />
                          {exp.status === "active" ? "Active" : exp.status === "ongoing" ? "Ongoing" : "Completed"}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-zinc-400 text-sm font-mono">
                        {exp.org}{" "}
                        <span className="text-zinc-700 mx-1">{"//"}</span>
                        <span className="text-zinc-500">{exp.timeline}</span>
                      </p>
                    </div>

                    <button className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors shrink-0 mt-1">
                      <span className="font-mono">{isExpanded ? "Collapse" : "Expand"}</span>
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  </div>

                  {/* Challenge — always visible */}
                  <div className="mt-5 p-4 rounded-xl bg-black/20 border border-zinc-900/60">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-1.5">
                      The Challenge
                    </p>
                    <p className="text-zinc-300 text-sm leading-relaxed font-light">{exp.challenge}</p>
                  </div>

                  {/* Tech stack pills */}
                  {exp.techStack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800/60 text-[10px] font-mono text-zinc-400"
                          style={{ color: tech.color }}
                        >
                          <span style={{ color: tech.color }}>{tech.icon}</span>
                          <span className="text-zinc-400">{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-zinc-900/60 pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Responsibilities */}
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-3">
                              Key Contributions
                            </p>
                            <ul className="flex flex-col gap-2">
                              {exp.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                                  <span className="text-zinc-700 mt-0.5 shrink-0 font-mono">
                                    {String(i + 1).padStart(2, "0")}.
                                  </span>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Impact */}
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-3">
                              Impact
                            </p>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                              <p className="text-zinc-300 text-xs leading-relaxed font-light">{exp.impact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
