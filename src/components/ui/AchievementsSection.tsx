"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal } from "lucide-react";

interface Achievement {
  id: string;
  project: string;
  event: string;
  title: string;
  icon: React.ReactNode;
  accentColor: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    id: "krushi",
    project: "Krushi Unnati",
    event: "Smart Farming Hackathon",
    title: "DOMAIN PRIZE WINNER",
    icon: <Trophy className="w-8 h-8" />,
    accentColor: "#F5A524",
  },
  {
    id: "scholarship",
    project: "Multi Authority Scholarship Chain",
    event: "Web3 Innovation Challenge",
    title: "3RD PLACE",
    icon: <Medal className="w-8 h-8" />,
    accentColor: "#10B981",
  },
  {
    id: "cosmic",
    project: "Cosmic Data Fusion",
    event: "Space Tech Hackathon",
    title: "FINALIST",
    icon: <Star className="w-8 h-8" />,
    accentColor: "#3B82F6",
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 md:mb-16 text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <span className="text-[12px] uppercase font-mono tracking-widest text-accent font-bold">
            {"// ACHIEVEMENTS"}
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group flex flex-col h-full glass-panel rounded-3xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 relative overflow-hidden"
          >
            {/* Subtle glow background */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-full"
              style={{ backgroundColor: achievement.accentColor }}
            />

            <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-zinc-900/50 border border-zinc-800/50 group-hover:scale-110 transition-transform duration-500"
                style={{ color: achievement.accentColor }}
              >
                {achievement.icon}
              </div>

              <div className="mt-auto">
                <h3 className="text-3xl lg:text-4xl font-serif text-[#f5c542] font-bold leading-tight mb-6">
                  {achievement.title}
                </h3>

                <div className="pt-6 border-t border-zinc-800/50">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                    Project
                  </span>
                  <p className="text-white font-medium text-lg mb-2">
                    {achievement.project}
                  </p>
                  
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1 mt-4">
                    Event
                  </span>
                  <p className="text-zinc-400">
                    {achievement.event}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
