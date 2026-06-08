"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Activity, ChevronRight, Zap, Radio, Network } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const pipelineSteps = [
  {
    id: "eeg",
    label: "8-Channel EEG",
    sublabel: "FC5, FC6, C5, C6, T7, T8, TP7, TP8",
    description: "Bilateral temporal & temporo-parietal electrode sites — regions most linked to auditory cortex tracking.",
    icon: <Radio className="w-4 h-4" />,
    color: "#9b5de5",
    colorRgb: "155, 93, 229",
  },
  {
    id: "preprocess",
    label: "Band-pass Filter",
    sublabel: "0.5Hz – 32Hz",
    description: "Remove low-frequency drift and high-frequency muscle noise, isolating the cortical speech-tracking band.",
    icon: <Activity className="w-4 h-4" />,
    color: "#00f5d4",
    colorRgb: "0, 245, 212",
  },
  {
    id: "envelope",
    label: "Speech Envelope",
    sublabel: "Hilbert Transform",
    description: "Extract temporal amplitude envelope from two competing speech streams — the neural correlate of auditory attention.",
    icon: <Zap className="w-4 h-4" />,
    color: "#fee440",
    colorRgb: "254, 228, 64",
  },
  {
    id: "cnn",
    label: "Temporal CNN",
    sublabel: "~69K Parameters",
    description: "Dilated causal convolutional network learns EEG–speech envelope mappings from population-level data. No calibration needed for new subjects.",
    icon: <Network className="w-4 h-4" />,
    color: "#f72585",
    colorRgb: "247, 37, 133",
  },
  {
    id: "decision",
    label: "Attention Decision",
    sublabel: "Binary Classification",
    description: "System outputs which speaker the listener is attending to — without any per-subject calibration.",
    icon: <Brain className="w-4 h-4" />,
    color: "#4cc9f0",
    colorRgb: "76, 201, 240",
  },
];

const specs = [
  { label: "Subjects", value: "18", note: "LOSO folds" },
  { label: "EEG Channels", value: "8", note: "vs 64+ standard" },
  { label: "Model Params", value: "~69K", note: "lightweight" },
  { label: "Sampling Rate", value: "64Hz", note: "DTU dataset" },
  { label: "Trials/Subject", value: "60", note: "per subject" },
  { label: "Architecture", value: "TCN", note: "Temporal CNN" },
];

export default function ResearchSection() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section id="research" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto w-full relative h-auto">
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
            {"// Research & Engineering"}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Decoding Intelligence<br className="hidden md:block" /> from Raw Neural Signals
        </h2>
        <div className="h-[1px] w-24 bg-white/20 mx-auto md:mx-0" />
      </motion.div>

      {/* Research Project Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="glass-panel linear-border-glow rounded-3xl overflow-hidden bg-zinc-950/30 mb-10"
      >
        {/* Top Banner */}
        <div className="border-b border-zinc-900 px-8 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Research Paper</p>
              <p className="text-white text-xs font-semibold font-mono">IEEE-Style Technical Publication</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold uppercase tracking-wider">
              Brain-Computer Interface
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 uppercase tracking-wider">
              Signal Processing
            </span>
          </div>
        </div>

        <div className="p-8">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
            Subject-Independent Auditory Attention Decoding
          </h3>
          <p className="text-zinc-500 text-sm font-mono mb-8">
            Using Reduced-Channel EEG and Temporal Convolutional Neural Networks
          </p>

          {/* Problem → Approach → Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: "The Problem",
                icon: "01",
                color: "text-rose-400",
                bg: "bg-rose-500/5 border-rose-500/15",
                content:
                  "Hearing aids amplify acoustics blindly — they have no access to listener intent. In noisy multi-speaker environments (the cocktail party problem), they fail. The solution: decode attention from the brain.",
              },
              {
                label: "The Approach",
                icon: "02",
                color: "text-amber-400",
                bg: "bg-amber-500/5 border-amber-500/15",
                content:
                  "Instead of impractical 64+ electrode systems, use only 8 strategically selected EEG channels targeting bilateral temporal cortex — and train a lightweight Temporal CNN on population-level data without per-subject calibration.",
              },
              {
                label: "The Outcome",
                icon: "03",
                color: "text-emerald-400",
                bg: "bg-emerald-500/5 border-emerald-500/15",
                content:
                  "Successful binary attention classification across all 18 Leave-One-Subject-Out evaluation folds — proving the system generalizes to completely unseen individuals with a practical 8-channel configuration.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl p-5 border ${item.bg} flex flex-col gap-3`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold ${item.color}`}>{item.icon}</span>
                  <p className={`text-[10px] font-mono uppercase tracking-widest font-bold ${item.color}`}>
                    {item.label}
                  </p>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed font-light">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Interactive Pipeline */}
          <div className="mb-10">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-6 font-bold">
              System Pipeline // Click a stage to explore
            </p>

            {/* Pipeline Flow */}
            <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
              {pipelineSteps.map((step, idx) => {
                const isActive = activeStep === step.id;
                const isLast = idx === pipelineSteps.length - 1;

                return (
                  <div key={step.id} className="flex flex-col md:flex-row items-center flex-1">
                    <button
                      onClick={() => setActiveStep(isActive ? null : step.id)}
                      className={`w-full md:flex-1 rounded-xl p-3 border text-left transition-all duration-300 ${
                        isActive
                          ? "border-opacity-100 scale-[1.02] shadow-lg"
                          : "border-zinc-800/60 hover:border-zinc-700 bg-zinc-950/50"
                      }`}
                      style={
                        isActive
                          ? {
                              borderColor: step.color,
                              backgroundColor: `rgba(${step.colorRgb}, 0.08)`,
                              boxShadow: `0 0 20px rgba(${step.colorRgb}, 0.1)`,
                            }
                          : {}
                      }
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center mb-2"
                        style={{
                          backgroundColor: `rgba(${step.colorRgb}, 0.12)`,
                          color: step.color,
                        }}
                      >
                        {step.icon}
                      </div>
                      <p className="text-white text-[11px] font-bold font-mono leading-tight">{step.label}</p>
                      <p className="text-zinc-600 text-[9px] font-mono mt-0.5">{step.sublabel}</p>
                    </button>

                    {!isLast && (
                      <div className="hidden md:flex items-center px-1.5 shrink-0 text-zinc-700">
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Active Step Description */}
            {activeStep && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800"
              >
                {pipelineSteps
                  .filter((s) => s.id === activeStep)
                  .map((step) => (
                    <div key={step.id} className="flex gap-3">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          backgroundColor: `rgba(${step.colorRgb}, 0.12)`,
                          color: step.color,
                        }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <p className="text-white text-xs font-bold font-mono mb-1">{step.label}</p>
                        <p className="text-zinc-400 text-xs leading-relaxed font-light">{step.description}</p>
                      </div>
                    </div>
                  ))}
              </motion.div>
            )}
          </div>

          {/* Technical Specs Grid */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4 font-bold">
              Experimental Specifications
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl p-3 bg-zinc-950/60 border border-zinc-800/60 text-center"
                >
                  <p className="text-white text-lg font-bold font-mono">{spec.value}</p>
                  <p className="text-zinc-400 text-[10px] font-mono">{spec.label}</p>
                  <p className="text-zinc-600 text-[9px] font-mono">{spec.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-600">Evaluation:</span>
            <span className="text-[10px] font-mono text-zinc-400">
              Leave-One-Subject-Out (LOSO) — strictest cross-subject generalization protocol
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-600">Dataset:</span>
            <span className="text-[10px] font-mono text-zinc-400">DTU-style publicly available AAD dataset</span>
          </div>
        </div>
      </motion.div>

      {/* Signal Processing Projects Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-6 font-bold">
          Related Engineering Systems
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Spatial Audio Beamforming",
              desc: "SRP-PHAT direction-of-arrival estimation using a ReSpeaker 4-microphone array. Directional audio capture with real-time beamforming filters.",
              tags: ["Python", "NumPy", "ReSpeaker", "SRP-PHAT"],
              color: "#00f5d4",
            },
            {
              title: "STFT Audio Analysis Pipeline",
              desc: "Short-Time Fourier Transform based frequency decomposition and signal reconstruction for real-time audio intelligence applications.",
              tags: ["Python", "SciPy", "NumPy", "ISTFT"],
              color: "#fee440",
            },
            {
              title: "RNNoise Integration",
              desc: "Recurrent neural network-based noise suppression pipeline for clean audio capture in noisy environments.",
              tags: ["Python", "RNNoise", "DSP", "Neural Nets"],
              color: "#f72585",
            },
          ].map((proj) => (
            <div
              key={proj.title}
              className="glass-panel linear-border-glow rounded-2xl p-5 bg-zinc-950/20 hover:border-zinc-700 transition-colors"
            >
              <div
                className="w-2 h-2 rounded-full mb-4"
                style={{ backgroundColor: proj.color }}
              />
              <h4 className="text-white text-sm font-bold mb-2">{proj.title}</h4>
              <p className="text-zinc-500 text-[11px] leading-relaxed font-light mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[9px] font-mono bg-zinc-950 border border-zinc-800 text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
