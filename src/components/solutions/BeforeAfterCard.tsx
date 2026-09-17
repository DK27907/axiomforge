"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { SolutionData } from "@/lib/solutions-data";

interface BeforeAfterCardProps {
  data: SolutionData;
}

export function BeforeAfterCard({ data }: BeforeAfterCardProps) {
  return (
    <section className="relative py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="terminal-font text-[10px] tracking-[0.3em] uppercase text-slate-400 mb-3">
            ◢ The Operational Shift
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            What Changes On Day One.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle size={16} className="text-[#DC2626]" />
              <div className="terminal-font text-[10px] tracking-widest uppercase text-[#DC2626]">
                {data.beforeLabel}
              </div>
            </div>
            <ul className="space-y-4">
              {data.beforeProblems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-[#DC2626]" />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border p-8 shadow-sm bg-white"
            style={{
              borderColor: `${data.accent}40`,
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 size={16} style={{ color: data.accent }} />
              <div
                className="terminal-font text-[10px] tracking-widest uppercase"
                style={{ color: data.accent }}
              >
                {data.afterLabel}
              </div>
            </div>
            <ul className="space-y-4">
              {data.afterWins.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <span
                    className="mt-2 shrink-0 w-1 h-1 rounded-full"
                    style={{ backgroundColor: data.accent }}
                  />
                  <span className="text-sm text-slate-900 leading-relaxed">
                    {w}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}