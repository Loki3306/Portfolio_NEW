"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Users, Code2 } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={textVariants}
        className="mb-12 md:mb-16 text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <span className="text-[12px] uppercase font-mono tracking-widest text-accent font-bold">
            {"// ABOUT"}
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="space-y-12"
        >
          {/* WHO I AM */}
          <motion.div variants={textVariants} className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif text-[#f5c542] flex items-center gap-3">
              <Terminal className="w-6 h-6 text-accent" />
              Who I Am
            </h3>
            <p className="text-body text-zinc-300 leading-relaxed text-lg">
              I'm Lokesh Gile, a <strong className="text-white font-medium">Full-Stack AI Software Engineer</strong> and <strong className="text-white font-medium">Product Builder</strong>. I specialize in taking complex technical requirements and turning them into scalable, production-ready software.
            </p>
            <p className="text-body text-zinc-400 leading-relaxed">
              I don't just write code—I architect systems, design databases, build intuitive frontends, and configure the infrastructure needed to deploy them.
            </p>
          </motion.div>

          {/* WHAT I BUILD */}
          <motion.div variants={textVariants} className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif text-[#f5c542] flex items-center gap-3">
              <Code2 className="w-6 h-6 text-accent" />
              What I Build
            </h3>
            <p className="text-body text-zinc-300 leading-relaxed text-lg">
              My engineering focus spans <strong className="text-white font-medium">Product Engineering</strong>, <strong className="text-white font-medium">AI Systems</strong>, and <strong className="text-white font-medium">Backend Infrastructure</strong>.
            </p>
            <ul className="space-y-3 mt-4">
              {[
                "End-to-end web platforms (Next.js, React, Node)",
                "Data-intensive APIs & Backend Services (FastAPI, PostgreSQL)",
                "Applied AI Integrations (LangChain, OpenAI, ONNX)",
                "Mobile Development (React Native)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="space-y-12"
        >
          {/* WHAT DRIVES ME */}
          <motion.div variants={textVariants} className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif text-[#f5c542] flex items-center gap-3">
              <Cpu className="w-6 h-6 text-accent" />
              What Drives Me
            </h3>
            <p className="text-body text-zinc-300 leading-relaxed text-lg">
              I thrive in high-velocity <strong className="text-white font-medium">Startup Environments</strong> and intense engineering challenges.
            </p>
            <p className="text-body text-zinc-400 leading-relaxed">
              I am driven by the impact software can have on real-world problems. Whether it's optimizing a database query to reduce load times by 50% or building a seamless payment workflow, I focus on delivering tangible value to users.
            </p>
          </motion.div>

          {/* COMMUNITY & LEADERSHIP */}
          <motion.div variants={textVariants} className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif text-[#f5c542] flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              Community & Leadership
            </h3>
            <p className="text-body text-zinc-300 leading-relaxed text-lg">
              Beyond engineering, I am deeply involved in the developer community through <strong className="text-white font-medium">Hackathons</strong> and <strong className="text-white font-medium">Technical Leadership</strong>.
            </p>
            <p className="text-body text-zinc-400 leading-relaxed">
              As a technical lead and community builder, I regularly mentor junior developers, organize technical workshops, and collaborate with cross-functional teams to bring hackathon concepts from ideation to working prototypes in 48 hours.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
