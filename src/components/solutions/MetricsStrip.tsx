"use client";

import { motion } from "framer-motion";
import { SolutionData } from "@/lib/solutions-data";

interface MetricsStripProps {
  data: SolutionData;
}

export function MetricsStrip({ data }: MetricsStripProps) {
  return (
    <section className="relative py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 md:p-12 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center md:text-left"
              >
                <div
                  className="terminal-font text-3xl md:text-4xl font-bold tracking-tight mb-2"
                  style={{ color: data.accent }}
                >
                  {m.value}
                </div>
                <div className="text-xs font-medium text-slate-900 mb-1">
                  {m.label}
                </div>
                <div className="terminal-font text-[10px] tracking-widest uppercase text-slate-400">
                  {m.caption}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="h-px bg-slate-200 my-10" />

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3">
            <span className="terminal-font text-[10px] tracking-widest uppercase text-slate-400">
              Certified:
            </span>
            {data.trust.map((label) => (
              <span
                key={label}
                className="text-xs text-slate-600 flex items-center gap-1.5"
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: data.accent }}
                />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}