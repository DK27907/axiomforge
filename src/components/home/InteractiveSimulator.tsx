"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw } from "lucide-react";
import { SectorTabs } from "./SectorTabs";
import { TerminalPanel } from "./TerminalPanel";
import {
  Sector,
  SECTORS,
  SimulatedLine,
  buildSimulation,
} from "@/lib/simulator-responses";

export function InteractiveSimulator() {
  const [sector, setSector] = useState<Sector>("healthcare");
  const [query, setQuery] = useState("");
  const [lines, setLines] = useState<SimulatedLine[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const cfg = SECTORS[sector];

  function handleSectorChange(next: Sector) {
    setSector(next);
    setLines([]);
    setIsRunning(false);
    setQuery("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed || isRunning) return;
    setLines(buildSimulation(sector, trimmed));
    setIsRunning(true);
  }

  function handleReset() {
    setLines([]);
    setIsRunning(false);
    setQuery("");
  }

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0B1120]">
      {/* Subtle dark texture grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Sector-color ambient glow behind terminal */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[900px] rounded-full"
        style={{
          background: `radial-gradient(ellipse, rgba(${cfg.accentRgb}, 0.35) 0%, transparent 55%)`,
        }}
      />

      {/* Top gradient — flows from hero dark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,17,32,1) 0%, transparent 100%)",
        }}
      />

      {/* Bottom gradient — flows into light section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(226,232,240,0.15) 60%, rgba(226,232,240,0.6) 100%)",
        }}
      />

      <div className="relative z-10">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl terminal-font text-[10px] tracking-[0.3em] uppercase text-white/90 mb-5"
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: cfg.accent }}
            />
            Live Sandbox · No Signup Required
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          >
            Don&apos;t Take Our Word For It.
            <br />
            <span className="bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
              Type A Real Query.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            This is a live simulation. Pick your vertical, type any institutional
            query, and watch AxiomForge isolate private data in real time.
          </motion.p>
        </div>

        {/* Sector tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <SectorTabs active={sector} onChange={handleSectorChange} />
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <TerminalPanel
            sector={sector}
            lines={lines}
            isRunning={isRunning}
            onComplete={() => setIsRunning(false)}
          />
        </motion.div>

        {/* Query input */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto mt-5"
        >
          <div
            className="relative flex items-stretch rounded-xl border backdrop-blur-md transition-all duration-300"
            style={{
              borderColor: isRunning ? "rgba(255,255,255,0.08)" : `${cfg.accent}66`,
              backgroundColor: "rgba(255,255,255,0.06)",
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={cfg.placeholder}
              disabled={isRunning}
              className="flex-1 bg-transparent px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none disabled:opacity-60"
            />

            {!isRunning && lines.length === 0 ? (
              <button
                type="submit"
                className="flex items-center gap-2 m-1.5 rounded-lg px-5 text-xs font-semibold terminal-font tracking-widest uppercase transition-all duration-200 text-white shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: cfg.accent,
                  boxShadow: `0 4px 20px ${cfg.accent}55`,
                }}
              >
                <Play size={12} fill="#FFFFFF" />
                Run
              </button>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-2 m-1.5 rounded-lg border border-white/15 px-5 text-xs font-medium terminal-font tracking-widest uppercase transition-all duration-200 text-white/70 hover:text-white hover:bg-white/5"
              >
                <RotateCcw size={12} />
                Reset
              </button>
            )}
          </div>

          <div className="terminal-font text-[10px] tracking-widest uppercase text-white/40 text-center mt-4">
            Simulated output. Zero real patient/student/customer data. Zero telemetry.
          </div>
        </motion.form>
      </div>
    </section>
  );
}