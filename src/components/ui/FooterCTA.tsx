"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { User, FileText } from "lucide-react";
import Image from "next/image";

export default function FooterCTA() {
  const [imgError, setImgError] = useState(false);
  const phoneNumber = "+918767747750";
  const whatsappMsg = "Hi Lokesh,%0AI came across your portfolio and wanted to discuss an opportunity.";

  return (
    <section id="contact" className="py-16 px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-10 lg:p-16 relative overflow-hidden">
        
        {/* Abstract Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Left Side: Contact CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-start gap-8 z-10 w-full"
        >
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold mb-4 block">
              Start A Conversation
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#f5c542] leading-tight">
              Ready to build <br /> something exceptional?
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-2 w-full max-w-lg">
            <a 
              href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-black w-full sm:w-auto text-xs font-bold uppercase tracking-widest rounded hover:bg-[#20b858] transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            
            <a 
              href={`mailto:lokeshgile11@gmail.com?subject=${encodeURIComponent("Opportunity Discussion - Portfolio Inquiry")}&body=${encodeURIComponent("Hi Lokesh,\n\nI came across your portfolio and was impressed by your work.\n\nI would like to discuss a potential opportunity/project with you.\n\nLooking forward to connecting.\n\nBest Regards,\n\n[Your Name]\n[Company]")}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black w-full sm:w-auto text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-200 transition-colors"
            >
              <FaEnvelope className="w-4 h-4" />
              Email
            </a>
            
            <a 
              href="https://www.linkedin.com/in/lokesh-gile-b61145248/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 text-white w-full sm:w-auto text-xs font-bold uppercase tracking-widest rounded hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
            
            <a 
              href="https://github.com/Loki3306" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 text-white w-full sm:w-auto text-xs font-bold uppercase tracking-widest rounded hover:border-white transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 text-white w-full sm:w-auto text-xs font-bold uppercase tracking-widest rounded hover:border-accent hover:text-accent transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side: Profile Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 shrink-0 md:-my-8 group cursor-pointer"
        >
          {/* Subtle Glow Ring */}
          <div className="absolute inset-[-10px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-md opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />
          
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-zinc-700/50 shadow-[0_0_30px_rgba(245,165,36,0.15)] relative bg-zinc-900 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
            {!imgError ? (
              <Image 
                src="/lokesh.jpeg" 
                alt="Lokesh Gile"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover object-[center_top]"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-700">
                <User className="w-24 h-24" strokeWidth={1} />
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="mt-16 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Lokesh Gile</span>
        <span>Engineered with Next.js</span>
      </div>
    </section>
  );
}
