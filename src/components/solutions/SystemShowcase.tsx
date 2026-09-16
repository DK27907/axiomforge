"use client";

import { motion } from "framer-motion";
import { SolutionData } from "@/lib/solutions-data";

interface SystemShowcaseProps {
  data: SolutionData;
}

export function SystemShowcase({ data }: SystemShowcaseProps) {
  return (
    <section id="systems" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#4B5468] mb-3">
            ◢ Custom Systems
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FA] mb-4">
            Every System Built For Your Sector.
          </h2>
          <p className="text-base text-[#8B94A7] max-w-2xl mx-auto leading-relaxed">
            No generic chatbot. No shared model. Each system is engineered,
            isolated, and monitored for your specific workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.systems.map((sys, i) => (
            <motion.div
              key={sys.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bento-card group relative overflow-hidden"
              style={{
                borderColor: "#1F2533",
                transition: "all 0.3s ease",
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-12 h-12"
                style={{
                  background: `linear-gradient(135deg, rgba(${data.accentRgb}, 0.15), transparent 70%)`,
                }}
              />

              <div className="relative">
                <div
                  className="terminal-font text-[10px] tracking-widest uppercase mb-4"
                  style={{ color: data.accent }}
                >
                  ◢ 0{i + 1}
                </div>

                <h3 className="text-lg font-semibold text-[#F5F7FA] mb-2 leading-tight">
                  {sys.title}
                </h3>

                <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mb-4">
                  {sys.tagline}
                </div>

                <p className="text-sm text-[#8B94A7] leading-relaxed">
                  {sys.description}
                </p>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{
                  boxShadow: `inset 0 0 0 1px rgba(${data.accentRgb}, 0.3), 0 0 60px rgba(${data.accentRgb}, 0.08)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}