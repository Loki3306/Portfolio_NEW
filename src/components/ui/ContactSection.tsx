"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight, MessageCircle, Code2, Brain, Server, Zap, Database, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const services = [
  { icon: <Globe className="w-4 h-4" />, title: "Web Applications", desc: "SaaS platforms, business websites, admin dashboards — end to end." },
  { icon: <Brain className="w-4 h-4" />, title: "AI Integrations", desc: "OCR systems, LLM chatbots, computer vision, and automation pipelines." },
  { icon: <Server className="w-4 h-4" />, title: "API Development", desc: "Scalable REST microservices, webhook systems, and backend architecture." },
  { icon: <Code2 className="w-4 h-4" />, title: "Payment Systems", desc: "Stripe and Razorpay integrations, subscription billing, and secure checkout." },
  { icon: <Database className="w-4 h-4" />, title: "Database Design", desc: "PostgreSQL, MongoDB, Redis caching — schema design and optimization." },
  { icon: <Zap className="w-4 h-4" />, title: "Realtime Systems", desc: "Socket-based live dashboards, chat apps, and event-driven applications." },
];

const ctaLines = [
  "Have a product idea?",
  "Need an AI integration?",
  "Looking for a backend engineer?",
  "Building something at the edge of software?",
];

const contactLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "lokesh-gile-b61145248",
    href: "https://www.linkedin.com/in/lokesh-gile-b61145248",
    icon: <FaLinkedin className="w-4 h-4" />,
  },
  {
    id: "github",
    label: "GitHub",
    value: "Loki3306",
    href: "https://github.com/Loki3306",
    icon: <SiGithub className="w-4 h-4" />,
  },
  {
    id: "resume",
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: "email",
    label: "Email",
    value: "lokeshgile14@gmail.com", // PLACEHOLDER — update with actual email
    href: "mailto:lokeshgile14@gmail.com",
    icon: <Mail className="w-4 h-4" />,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto w-full relative h-auto">
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
            {"// Let's Build Something"}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Whether it&apos;s a product, a platform,<br className="hidden md:block" /> or a research collaboration.
        </h2>
        <div className="h-[1px] w-24 bg-white/20 mx-auto md:mx-0" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: What I Can Build + CTA Lines */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* CTA Lines */}
          <div className="glass-panel linear-border-glow rounded-3xl p-8 bg-zinc-950/30">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-6 font-bold">
              I&apos;m open to
            </p>
            <div className="flex flex-col gap-3">
              {ctaLines.map((line, idx) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-700 group-hover:text-white transition-colors shrink-0" />
                  <p className="text-zinc-300 text-sm font-light hover:text-white transition-colors cursor-default">
                    {line}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900">
              <p className="text-zinc-500 text-sm font-light">
                I build complete, production-ready products. Whether you need a web application, an AI integration, or a business platform, I deliver end-to-end engineering that works.
              </p>
            </div>
          </div>

          {/* What I Build For Clients */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-5 font-bold">
              What I Can Build For You
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((svc, idx) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-zinc-950/60 border border-zinc-900/60 hover:border-zinc-700 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 group-hover:text-white group-hover:border-zinc-700 transition-all">
                    {svc.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold mb-0.5">{svc.title}</h4>
                    <p className="text-zinc-600 text-[11px] leading-relaxed font-light">{svc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Links + WhatsApp CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Contact Links */}
          <div className="glass-panel linear-border-glow rounded-3xl p-6 bg-zinc-950/30 flex flex-col gap-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold mb-2">
              Get In Touch
            </p>

            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950/60 border border-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">{link.label}</p>
                  <p className="text-zinc-300 text-xs font-mono truncate group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-700 group-hover:text-zinc-400 transition-colors shrink-0 -rotate-45" />
              </motion.a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/918767747750"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-panel linear-border-glow rounded-3xl p-6 bg-emerald-500/5 border-emerald-500/20 flex items-center gap-4 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-bold mb-0.5">Start a conversation</p>
              <p className="text-zinc-500 text-xs font-light">Quick chat via WhatsApp — I respond fast.</p>
            </div>
            <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:text-emerald-400 transition-colors shrink-0 -rotate-45" />
          </motion.a>

          {/* Status Badge */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs font-mono text-zinc-500">
              Available for internships, freelance, and research collaborations
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-zinc-700 text-xs font-mono">
          Lokesh Gile — Portfolio {new Date().getFullYear()}
        </p>
        <p className="text-zinc-700 text-xs font-mono text-center">
          {"Built with Next.js · TypeScript · Tailwind CSS · Framer Motion"}
        </p>
        <p className="text-zinc-700 text-xs font-mono">
          {"SPIT, Mumbai // B.Tech CSE 2024–28"}
        </p>
      </motion.div>
    </section>
  );
}
