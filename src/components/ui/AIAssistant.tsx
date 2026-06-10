"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import CompanionThoughtBubble from "@/components/ui/CompanionThoughtBubble";

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
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "assistant", 
      content: "Hi! I'm Loki. Ask me about:\n• Experience\n• Projects\n• Skills\n• Availability" 
    }
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
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
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

  const handleCompanionClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Mobile Backdrop / Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 right-0 p-4 md:bottom-6 md:right-6 z-[100] flex flex-col items-end pointer-events-none">
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-[calc(100vw-32px)] sm:w-[450px] h-[calc(100vh-100px)] md:h-[500px] max-h-[80vh] md:max-h-[70vh] bg-black border border-zinc-800 flex flex-col overflow-hidden pointer-events-auto shadow-2xl md:mb-4 font-mono font-semibold"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-950">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm text-zinc-400">Terminal - root@loki:~</h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-500 hover:text-white transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar bg-black text-sm">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-1"
                  >
                    <div className="text-zinc-600 text-xs">
                      {msg.role === "assistant" ? "LOKI@SYSTEM" : "USER@GUEST"} ~ $
                    </div>
                    <div
                      className={`whitespace-pre-wrap leading-relaxed pl-2 border-l-2 ${
                        msg.role === "user"
                          ? "border-emerald-500 text-emerald-400"
                          : "border-zinc-500 text-zinc-300"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex flex-col gap-1">
                    <div className="text-zinc-600 text-xs">LOKI@SYSTEM ~ $</div>
                    <div className="pl-2 border-l-2 border-zinc-500 text-zinc-500 flex items-center gap-2">
                      <span className="animate-pulse">Processing request...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {!isLoading && messages[messages.length - 1]?.role !== "user" && (
                <div className="px-4 pb-2 flex flex-wrap gap-2 bg-black">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(q)}
                      className="text-[10px] px-2 py-1 border border-zinc-800 bg-zinc-950 text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors text-left"
                    >
                      &gt; {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <div className="p-3 border-t border-zinc-800 bg-zinc-950">
                <div className="relative flex items-center gap-2">
                  <span className="text-emerald-500 font-bold ml-2">{'>'}</span>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type command..."
                    className="w-full bg-transparent border-none py-2 text-sm text-emerald-400 placeholder:text-zinc-700 focus:outline-none focus:ring-0"
                  />
                  <button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim() || isLoading}
                    className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:text-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative w-24 h-32 pointer-events-auto z-[40] cursor-pointer group"
                onClick={handleCompanionClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute top-8 left-0 z-[45] scale-90 origin-bottom-right">
                  <CompanionThoughtBubble isModelLoaded={true} />
                </div>
                
                <div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full animate-pulse -z-10 group-hover:bg-emerald-500/20 transition-colors" />
                
                <motion.div
                  animate={{
                    y: [-3, 3, -3]
                  }}
                  transition={{
                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                  }}
                  className="w-full h-full flex items-center justify-center pb-2"
                >
                  <img 
                    src="/cute-ai-robot-chatbot-thumbs-up-on-isolated-transparent-background-png.webp" 
                    alt="AI Assistant Loki" 
                    className="w-full h-full object-contain filter drop-shadow-xl"
                  />
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
