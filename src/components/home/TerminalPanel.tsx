"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sector, SECTORS, SimulatedLine } from "@/lib/simulator-responses";

interface TerminalPanelProps {
  sector: Sector;
  lines: SimulatedLine[];
  isRunning: boolean;
  onComplete: () => void;
}

export function TerminalPanel({
  sector,
  lines,
  isRunning,
  onComplete,
}: TerminalPanelProps) {
  const cfg = SECTORS[sector];
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  // Stream lines one at a time
  useEffect(() => {
    // Clear any pending timers
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    if (!isRunning || lines.length === 0) {
      setVisibleCount(0);
      return;
    }

    setVisibleCount(0);
    let elapsed = 0;

    lines.forEach((line, i) => {
      elapsed += line.delay;
      const t = setTimeout(() => {
        setVisibleCount(i + 1);
        if (i === lines.length - 1) {
          onComplete();
        }
      }, elapsed);
      timersRef.current.push(t);
    });

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [lines, isRunning, onComplete]);

  // Auto-scroll as lines appear
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleCount]);

  // Color per line type
  function lineColor(type: SimulatedLine["type"]): string {
    switch (type) {
      case "input":
        return "#F5F7FA";
      case "progress":
        return "#8B94A7";
      case "success":
        return cfg.accent;
      case "result":
        return "#F5F7FA";
      case "info":
        return "#4B5468";
      default:
        return "#F5F7FA";
    }
  }

  function linePrefix(type: SimulatedLine["type"]): string {
    switch (type) {
      case "input":
        return "❯";
      case "progress":
        return "⟳";
      case "success":
        return "✓";
      case "result":
        return " ";
      case "info":
        return "ⓘ";
      default:
        return " ";
    }
  }

  return (
    <div
      className="relative rounded-xl border bg-[#0F131C]/80 backdrop-blur-sm overflow-hidden"
      style={{
        borderColor: "#1F2533",
        boxShadow: isRunning
          ? `0 0 40px rgba(${cfg.accentRgb}, 0.15), inset 0 0 0 1px rgba(${cfg.accentRgb}, 0.2)`
          : "none",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: "#1F2533" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F2533]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F2533]" />
            <span
              className="w-2.5 h-2.5 rounded-full transition-colors"
              style={{
                backgroundColor: isRunning ? cfg.accent : "#1F2533",
                boxShadow: isRunning ? `0 0 8px ${cfg.accent}` : "none",
              }}
            />
          </div>
          <span className="terminal-font text-[10px] tracking-widest text-[#4B5468] uppercase ml-2">
            AxiomForge Sandbox
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="terminal-font text-[10px] tracking-widest uppercase"
            style={{ color: cfg.accent }}
          >
            {cfg.shortLabel}
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: cfg.accent,
              boxShadow: `0 0 8px ${cfg.accent}`,
              opacity: isRunning ? 1 : 0.3,
            }}
          />
        </div>
      </div>

      {/* Body */}
      <div
        ref={containerRef}
        className="terminal-font text-[13px] leading-relaxed px-5 py-5 min-h-[340px] max-h-[440px] overflow-y-auto"
      >
        {/* Header line — always visible */}
        <div className="text-[#4B5468] text-[10px] tracking-widest uppercase mb-3">
          {cfg.headerLine}
        </div>

        {/* Idle state */}
        {!isRunning && lines.length === 0 && (
          <div className="text-[#4B5468] text-[13px] terminal-font">
            <span className="opacity-60">$</span>{" "}
            <span className="opacity-60">
              awaiting input... type a query below and press RUN ▸
            </span>
            <span
              className="ml-1 animate-pulse"
              style={{ color: cfg.accent }}
            >
              ▊
            </span>
          </div>
        )}

        {/* Streaming lines */}
        <AnimatePresence>
          {lines.slice(0, visibleCount).map((line, i) => {
            if (line.type === "blank") {
              return <div key={i} className="h-3" />;
            }
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex gap-2"
                style={{ color: lineColor(line.type) }}
              >
                <span
                  className="shrink-0 w-4 text-center"
                  style={{
                    color:
                      line.type === "progress" ||
                      line.type === "success" ||
                      line.type === "info"
                        ? lineColor(line.type)
                        : "#4B5468",
                  }}
                >
                  {linePrefix(line.type)}
                </span>
                <span className="flex-1 whitespace-pre-wrap">
                  {line.text}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Blinking cursor while streaming */}
        {isRunning && visibleCount < lines.length && (
          <div
            className="mt-2 inline-block w-2 h-4 animate-pulse"
            style={{ backgroundColor: cfg.accent }}
          />
        )}
      </div>
    </div>
  );
}