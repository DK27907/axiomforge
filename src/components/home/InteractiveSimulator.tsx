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
    <section className="relative py-24 px-6">
      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#4B5468] mb-4"
        >
          ◢ Live Sandbox · No Signup Required
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-4 leading-tight"
        >
          Don't Take Our Word For It.
          <br />
          <span className="text-[#8B94A7]">Type A Real Query.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-[#8B94A7] max-w-2xl mx-auto leading-relaxed"
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
          className="relative flex items-stretch rounded-xl border bg-[#0F131C]/60 backdrop-blur-sm transition-all duration-300"
          style={{
            borderColor: isRunning ? "#1F2533" : `${cfg.accent}40`,
            boxShadow: isRunning ? "none" : `0 0 32px rgba(${cfg.accentRgb}, 0.08)`,
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={cfg.placeholder}
            disabled={isRunning}
            className="flex-1 bg-transparent px-5 py-4 text-sm text-[#F5F7FA] placeholder:text-[#4B5468] outline-none disabled:opacity-60"
          />

          {!isRunning && lines.length === 0 ? (
            <button
              type="submit"
              className="flex items-center gap-2 m-1.5 rounded-lg px-5 text-xs font-medium terminal-font tracking-widest uppercase transition-all duration-200 text-[#0A0D14]"
              style={{ backgroundColor: cfg.accent }}
            >
              <Play size={12} fill="#0A0D14" />
              Run
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 m-1.5 rounded-lg border px-5 text-xs font-medium terminal-font tracking-widest uppercase transition-all duration-200 text-[#8B94A7] hover:text-[#F5F7FA]"
              style={{ borderColor: "#1F2533" }}
            >
              <RotateCcw size={12} />
              Reset
            </button>
          )}
        </div>

        {/* Fine print */}
        <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] text-center mt-4">
          Simulated output. Zero real patient/student/customer data. Zero telemetry.
        </div>
      </motion.form>
    </section>
  );
}