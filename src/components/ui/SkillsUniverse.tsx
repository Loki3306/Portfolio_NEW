"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython, SiTypescript, SiJavascript, SiC, SiCplusplus,
  SiPytorch, SiTensorflow, SiOpencv, SiNumpy, SiPandas,
  SiReact, SiNextdotjs, SiTailwindcss, SiThreedotjs,
  SiNodedotjs, SiExpress, SiFastapi, SiPostgresql, SiMongodb,
  SiRedis, SiSupabase, SiMysql, SiDocker,
  SiGithubactions, SiLinux, SiGit,
  SiStripe, SiNetlify, SiSocketdotio, SiHtml5, SiCss, SiPostman, 
  SiPrisma, SiScikitlearn, SiOpenai, SiHuggingface, SiNginx, SiRailway,
  SiLangchain, SiShadcnui, SiVite, SiRedux, SiFirebase, SiSqlite,
  SiRender, SiVercel, SiArduino, SiEspressif, SiMqtt
} from "react-icons/si";
import { Database, Layout, Server, Brain, Cloud, Cpu, Users, ChevronDown, ChevronUp } from "lucide-react";

interface SkillItem {
  name: string;
  categoryIds: string[];
  icon: React.ReactNode;
  isTopSkill?: boolean;
}

const categories = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Databases" },
  { id: "ai", label: "AI / ML" },
  { id: "devops", label: "DevOps" },
  { id: "soft", label: "Soft Skills" },
];

const skillsData: SkillItem[] = [
  // Top Skills (Shown Initially)
  { name: "React", categoryIds: ["frontend"], icon: <SiReact className="w-5 h-5" />, isTopSkill: true },
  { name: "Next.js", categoryIds: ["frontend"], icon: <SiNextdotjs className="w-5 h-5" />, isTopSkill: true },
  { name: "Node.js", categoryIds: ["backend"], icon: <SiNodedotjs className="w-5 h-5" />, isTopSkill: true },
  { name: "FastAPI", categoryIds: ["backend"], icon: <SiFastapi className="w-5 h-5" />, isTopSkill: true },
  { name: "PostgreSQL", categoryIds: ["database"], icon: <SiPostgresql className="w-5 h-5" />, isTopSkill: true },
  { name: "MongoDB", categoryIds: ["database"], icon: <SiMongodb className="w-5 h-5" />, isTopSkill: true },
  { name: "Docker", categoryIds: ["devops"], icon: <SiDocker className="w-5 h-5" />, isTopSkill: true },
  { name: "LangChain", categoryIds: ["ai"], icon: <SiLangchain className="w-5 h-5" />, isTopSkill: true },
  { name: "PyTorch", categoryIds: ["ai"], icon: <SiPytorch className="w-5 h-5" />, isTopSkill: true },
  { name: "Python", categoryIds: ["languages"], icon: <SiPython className="w-5 h-5" />, isTopSkill: true },

  // Languages
  { name: "Java", categoryIds: ["languages"], icon: <span className="font-bold font-mono">JAVA</span> },
  { name: "JavaScript", categoryIds: ["languages"], icon: <SiJavascript className="w-5 h-5" /> },
  { name: "TypeScript", categoryIds: ["languages"], icon: <SiTypescript className="w-5 h-5" /> },
  { name: "C", categoryIds: ["languages"], icon: <SiC className="w-5 h-5" /> },
  { name: "C++", categoryIds: ["languages"], icon: <SiCplusplus className="w-5 h-5" /> },
  { name: "SQL", categoryIds: ["languages"], icon: <Database className="w-5 h-5" /> },
  { name: "Bash", categoryIds: ["languages"], icon: <span className="font-bold font-mono">BASH</span> },

  // Frontend
  { name: "React Native", categoryIds: ["frontend"], icon: <SiReact className="w-5 h-5" /> },
  { name: "HTML5", categoryIds: ["frontend"], icon: <SiHtml5 className="w-5 h-5" /> },
  { name: "CSS3", categoryIds: ["frontend"], icon: <SiCss className="w-5 h-5" /> },
  { name: "TailwindCSS", categoryIds: ["frontend"], icon: <SiTailwindcss className="w-5 h-5" /> },
  { name: "Redux", categoryIds: ["frontend"], icon: <SiRedux className="w-5 h-5" /> },
  { name: "Zustand", categoryIds: ["frontend"], icon: <Layout className="w-5 h-5" /> },
  { name: "ShadCN", categoryIds: ["frontend"], icon: <SiShadcnui className="w-5 h-5" /> },
  { name: "Vite", categoryIds: ["frontend"], icon: <SiVite className="w-5 h-5" /> },
  { name: "WebGL", categoryIds: ["frontend"], icon: <SiThreedotjs className="w-5 h-5" /> },

  // Backend
  { name: "Express.js", categoryIds: ["backend"], icon: <SiExpress className="w-5 h-5" /> },
  { name: "REST APIs", categoryIds: ["backend"], icon: <Server className="w-5 h-5" /> },
  { name: "JWT", categoryIds: ["backend"], icon: <span className="font-bold font-mono text-xs">JWT</span> },
  { name: "OAuth", categoryIds: ["backend"], icon: <span className="font-bold font-mono text-xs">OAuth</span> },
  { name: "Socket.IO", categoryIds: ["backend"], icon: <SiSocketdotio className="w-5 h-5" /> },
  { name: "Stripe", categoryIds: ["backend"], icon: <SiStripe className="w-5 h-5" /> },
  { name: "Prisma", categoryIds: ["backend"], icon: <SiPrisma className="w-5 h-5" /> },

  // Databases
  { name: "MySQL", categoryIds: ["database"], icon: <SiMysql className="w-5 h-5" /> },
  { name: "Redis", categoryIds: ["database"], icon: <SiRedis className="w-5 h-5" /> },
  { name: "Supabase", categoryIds: ["database"], icon: <SiSupabase className="w-5 h-5" /> },
  { name: "Firebase", categoryIds: ["database"], icon: <SiFirebase className="w-5 h-5" /> },
  { name: "PostGIS", categoryIds: ["database"], icon: <span className="font-bold font-mono text-xs">POSTGIS</span> },
  { name: "SQLite", categoryIds: ["database"], icon: <SiSqlite className="w-5 h-5" /> },

  // AI / ML
  { name: "TensorFlow", categoryIds: ["ai"], icon: <SiTensorflow className="w-5 h-5" /> },
  { name: "Scikit-Learn", categoryIds: ["ai"], icon: <SiScikitlearn className="w-5 h-5" /> },
  { name: "Pandas", categoryIds: ["ai"], icon: <SiPandas className="w-5 h-5" /> },
  { name: "NumPy", categoryIds: ["ai"], icon: <SiNumpy className="w-5 h-5" /> },
  { name: "OpenCV", categoryIds: ["ai"], icon: <SiOpencv className="w-5 h-5" /> },
  { name: "LangGraph", categoryIds: ["ai"], icon: <Brain className="w-5 h-5" /> },
  { name: "OpenAI", categoryIds: ["ai"], icon: <SiOpenai className="w-5 h-5" /> },
  { name: "Ollama", categoryIds: ["ai"], icon: <span className="font-bold font-mono text-xs">Ollama</span> },
  { name: "Hugging Face", categoryIds: ["ai"], icon: <SiHuggingface className="w-5 h-5" /> },
  { name: "EasyOCR", categoryIds: ["ai"], icon: <span className="font-bold font-mono text-xs">OCR</span> },
  { name: "XGBoost", categoryIds: ["ai"], icon: <span className="font-bold font-mono text-xs">XGB</span> },

  // DevOps
  { name: "Git", categoryIds: ["devops"], icon: <SiGit className="w-5 h-5" /> },
  { name: "GitHub Actions", categoryIds: ["devops"], icon: <SiGithubactions className="w-5 h-5" /> },
  { name: "Linux", categoryIds: ["devops"], icon: <SiLinux className="w-5 h-5" /> },
  { name: "Nginx", categoryIds: ["devops"], icon: <SiNginx className="w-5 h-5" /> },
  { name: "Vercel", categoryIds: ["devops"], icon: <SiVercel className="w-5 h-5" /> },
  { name: "Netlify", categoryIds: ["devops"], icon: <SiNetlify className="w-5 h-5" /> },
  { name: "Render", categoryIds: ["devops"], icon: <SiRender className="w-5 h-5" /> },
  { name: "Railway", categoryIds: ["devops"], icon: <SiRailway className="w-5 h-5" /> },
  { name: "Postman", categoryIds: ["devops"], icon: <SiPostman className="w-5 h-5" /> },

  // Soft Skills
  { name: "Leadership", categoryIds: ["soft"], icon: <Users className="w-5 h-5" /> },
  { name: "Project Management", categoryIds: ["soft"], icon: <Users className="w-5 h-5" /> },
  { name: "Public Speaking", categoryIds: ["soft"], icon: <Users className="w-5 h-5" /> },
  { name: "Technical Communication", categoryIds: ["soft"], icon: <Users className="w-5 h-5" /> },
  { name: "Event Management", categoryIds: ["soft"], icon: <Users className="w-5 h-5" /> },
  { name: "Team Collaboration", categoryIds: ["soft"], icon: <Users className="w-5 h-5" /> },
  { name: "Stakeholder Coordination", categoryIds: ["soft"], icon: <Users className="w-5 h-5" /> },
  { name: "Problem Solving", categoryIds: ["soft"], icon: <Users className="w-5 h-5" /> },
];

export default function SkillsUniverse() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayedSkills = isExpanded 
    ? skillsData.filter((s) => activeCategory === "all" ? true : s.categoryIds.includes(activeCategory))
    : skillsData.filter((s) => s.isTopSkill);

  return (
    <section id="skills" ref={scrollRef} className="py-16 px-6 lg:px-8 max-w-6xl mx-auto w-full relative">
      <div className="mb-12">
        <h2 className="heading-section text-[#f5c542] mb-4">Tech Stack</h2>
        <div className="w-12 h-1 bg-accent" />
      </div>

      <div className="flex flex-col gap-8">
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-2 overflow-hidden"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${
                    activeCategory === cat.id
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-zinc-800 bg-zinc-950/50 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="flex items-center gap-3 p-4 glass-panel hover:border-accent/30 transition-all duration-300 text-zinc-400 hover:text-white"
              >
                <div className="text-zinc-500 flex-shrink-0">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium opacity-90 transition-opacity whitespace-nowrap overflow-hidden text-ellipsis">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-4">
          <button 
            onClick={() => {
              setIsExpanded(!isExpanded);
              if (isExpanded) setActiveCategory("all");
            }}
            className="flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-300 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
          >
            {isExpanded ? (
              <>View Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>View More Skills <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
