"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import Spline from "@splinetool/react-spline";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "Tell me about Lokesh.",
  "What projects has he built?",
  "Can he integrate AI into existing apps?",
  "What technologies does he use?",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Lokesh's AI Assistant. Ask me anything about his experience, projects, or skills." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: `Error: ${data.error || "Something went wrong."}` }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I encountered a network error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[320px] sm:w-[380px] h-[450px] max-h-[70vh] glass-panel linear-border-glow bg-zinc-950/80 border border-zinc-800 rounded-2xl flex flex-col overflow-hidden pointer-events-auto shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Ask Lokesh AI</h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-400 mt-1">
                      <Bot className="w-3 h-3" />
                    </div>
                  )}
                  
                  <div 
                    className={`px-4 py-2.5 rounded-2xl text-sm ${
                      msg.role === "user" 
                        ? "bg-emerald-500/20 border border-emerald-500/30 text-white rounded-tr-sm" 
                        : "bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 rounded-tl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>

                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 mt-1">
                      <User className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 justify-start">
                   <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-400 mt-1">
                      <Bot className="w-3 h-3" />
                    </div>
                    <div className="px-4 py-2.5 rounded-2xl text-sm bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 rounded-tl-sm flex items-center gap-2">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      Thinking...
                    </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions (only if 1 message exists) */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(q)}
                    className="text-[10px] px-2.5 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/30 text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 border-t border-zinc-800 bg-zinc-900/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Lokesh..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-full pl-4 pr-10 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center hover:bg-emerald-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-3 h-3 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating 3D Avatar Button */}
      <div 
        className="relative w-28 h-28 cursor-pointer pointer-events-auto hover:scale-105 transition-transform duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Placeholder Glow behind avatar */}
        <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse -z-10" />
        
        {/* Spline Avatar */}
        <div className="w-full h-full rounded-full overflow-hidden bg-transparent">
          <Spline 
            // IMPORTANT: Replace this generic robot URL with your custom stylized developer avatar URL!
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
            style={{ width: "100%", height: "100%", pointerEvents: "none" }}
          />
        </div>

        {/* Unread Badge / Prompt */}
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-6 right-0 whitespace-nowrap bg-zinc-900 border border-zinc-700 text-white text-[10px] font-mono px-3 py-1.5 rounded-full shadow-lg"
          >
            Ask Lokesh AI <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 animate-pulse" />
          </motion.div>
        )}
      </div>

    </div>
  );
}
