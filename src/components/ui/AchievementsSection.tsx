"use client";

import { motion } from "framer-motion";
import { Trophy, Users, BookOpen, Code2 } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const achievementCategories = [
  {
    id: "competitions",
    label: "Competitive Programming",
    icon: <Code2 className="w-4 h-4" />,
    color: "#fee440",
    colorRgb: "254, 228, 64",
    items: [
      {
        title: "LeetCode — 250+ Problems",
        detail: "Primary language: Java. Focus on data structures, dynamic programming, graph algorithms, and complexity optimization.",
        badge: "250+",
        link: "https://leetcode.com/u/Loki_3306/",
        linkLabel: "leetcode.com/u/Loki_3306",
      },
      {
        title: "Codeforces — Rating 1095",
        detail: "Competitive programming contests. Algorithmic problem-solving under time pressure with correctness guarantees.",
        badge: "1095",
        link: "https://codeforces.com/profile/lowk1ee",
        linkLabel: "codeforces.com/lowk1ee",
      },
    ],
  },
  {
    id: "leadership",
    label: "Technical Leadership",
    icon: <Users className="w-4 h-4" />,
    color: "#4cc9f0",
    colorRgb: "76, 201, 240",
    items: [
      {
        title: "Events Lead — CSI-SPIT",
        detail: "Led planning and execution of large-scale technical events, workshops, and hackathons at the Computer Society of India — SPIT Chapter.",
        badge: "Lead",
        link: undefined,
        linkLabel: undefined,
      },
      {
        title: "Lead Software Engineer Intern — USCAPES",
        detail: "Owned full-stack engineering decisions in a live startup product environment with direct delivery accountability.",
        badge: "Active",
        link: undefined,
        linkLabel: undefined,
      },
    ],
  },
  {
    id: "academic",
    label: "Academic Recognition",
    icon: <BookOpen className="w-4 h-4" />,
    color: "#00f5d4",
    colorRgb: "0, 245, 212",
    items: [
      {
        title: "GPA 8.84 / 10 — SPIT, Mumbai",
        detail: "B.Tech Computer Science and Engineering — Sardar Patel Institute of Technology, Mumbai. 2024–2028.",
        badge: "8.84",
        link: undefined,
        linkLabel: undefined,
      },
      {
        title: "Fintech Engineering Specialization — L&T EduTech",
        detail: "Industry specialization in Fintech Engineering and Digital Financial Systems, certified by L&T EduTech as part of the SPIT curriculum.",
        badge: "Certified",
        link: undefined,
        linkLabel: undefined,
      },
      {
        title: "IEEE-Style Research Publication",
        detail: "Author of 'Subject-Independent Auditory Attention Decoding Using Reduced-Channel EEG and Temporal Convolutional Neural Networks'.",
        badge: "Published",
        link: undefined,
        linkLabel: undefined,
      },
    ],
  },
];

const statHighlights = [
  { value: "250+", label: "LeetCode Problems", note: "Java" },
  { value: "1095", label: "Codeforces Rating", note: "Competitive" },
  { value: "8.84", label: "CGPA / 10", note: "B.Tech CSE" },
  { value: "3+", label: "Active Roles", note: "Simultaneously" },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto w-full relative h-auto">
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
            {"// Achievements & Recognition"}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Proof of Excellence
        </h2>
        <div className="h-[1px] w-24 bg-white/20 mx-auto md:mx-0" />
      </motion.div>

      {/* Stat Highlights */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
      >
        {statHighlights.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="glass-panel linear-border-glow rounded-2xl p-5 text-center bg-zinc-950/20"
          >
            <p className="text-3xl md:text-4xl font-bold text-white font-mono mb-1">{stat.value}</p>
            <p className="text-zinc-400 text-xs mb-0.5">{stat.label}</p>
            <p className="text-zinc-600 text-[10px] font-mono">{stat.note}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievement Categories */}
      <div className="flex flex-col gap-8">
        {achievementCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: catIdx * 0.1 },
              },
            }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center border"
                style={{
                  color: cat.color,
                  borderColor: `rgba(${cat.colorRgb}, 0.3)`,
                  backgroundColor: `rgba(${cat.colorRgb}, 0.08)`,
                }}
              >
                {cat.icon}
              </div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">{cat.label}</h3>
              <div className="flex-1 h-[1px] bg-zinc-900" />
            </div>

            {/* Achievement Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item, itemIdx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.1 + itemIdx * 0.06 }}
                  className="glass-panel linear-border-glow rounded-2xl p-5 bg-zinc-950/20 hover:border-zinc-700 transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 shrink-0" style={{ color: cat.color }} />
                    </div>
                    <span
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border shrink-0"
                      style={{
                        color: cat.color,
                        borderColor: `rgba(${cat.colorRgb}, 0.3)`,
                        backgroundColor: `rgba(${cat.colorRgb}, 0.08)`,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-white text-sm font-bold mb-1.5 leading-snug">{item.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">{item.detail}</p>
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors mt-auto"
                    >
                      → {item.linkLabel}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hackathon placeholder — prominent call to update */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mt-10 rounded-2xl border border-dashed border-zinc-800 p-6 text-center"
      >
        <p className="text-zinc-600 text-xs font-mono">
          {"// Hackathon wins and competition awards — add your specific results here"}
        </p>
      </motion.div>
    </section>
  );
}
