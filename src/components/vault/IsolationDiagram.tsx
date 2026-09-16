"use client";

import { motion } from "framer-motion";
import { Lock, Database, Server, ShieldCheck } from "lucide-react";

const TENANTS = [
  { label: "Hospital A", color: "#00F5A0", rgb: "0,245,160" },
  { label: "University B", color: "#2563EB", rgb: "37,99,235" },
  { label: "Bank C", color: "#06B6D4", rgb: "6,182,212" },
];

export function IsolationDiagram() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#4B5468] mb-3">
            ◢ Isolation Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FA] mb-4">
            Physically Separated. Architecturally Impossible To Cross.
          </h2>
          <p className="text-base text-[#8B94A7] max-w-2xl mx-auto leading-relaxed">
            Cross-tenant queries are not blocked by policy — they are
            architecturally impossible. Each tenant&apos;s data lives in a
            physically distinct container.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Edge router */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-md rounded-xl border border-[#1F2533] bg-[#0F131C] p-5 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <ShieldCheck size={16} className="text-[#8B94A7]" />
              <span className="terminal-font text-[10px] tracking-widest uppercase text-[#8B94A7]">
                Public Edge
              </span>
            </div>
            <div className="text-sm text-[#F5F7FA] font-medium">
              Cloudflare WAF + DDoS Protection
            </div>
            <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mt-1">
              No tenant data stored here
            </div>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-[#1F2533]" />
          </div>

          {/* Control plane */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-lg rounded-xl border border-[#06B6D4]/40 bg-[#06B6D4]/5 p-5 text-center"
            style={{ boxShadow: "0 0 40px rgba(6,182,212,0.10)" }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Server size={16} className="text-[#06B6D4]" />
              <span className="terminal-font text-[10px] tracking-widest uppercase text-[#06B6D4]">
                Control Plane
              </span>
            </div>
            <div className="text-sm text-[#F5F7FA] font-medium">
              AxiomForge Routing Layer
            </div>
            <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mt-1">
              Routes requests · Stores nothing · ODPC-audited
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="w-px h-8 bg-[#1F2533]" />
              </div>
            ))}
          </div>

          {/* Tenant containers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {TENANTS.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-xl border p-6 text-center transition-all duration-300"
                style={{
                  borderColor: `${t.color}40`,
                  backgroundColor: `rgba(${t.rgb}, 0.03)`,
                  boxShadow: `0 0 40px rgba(${t.rgb}, 0.06)`,
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Lock size={14} style={{ color: t.color }} />
                  <span
                    className="terminal-font text-[10px] tracking-widest uppercase"
                    style={{ color: t.color }}
                  >
                    Isolated Container
                  </span>
                </div>

                <div className="text-base font-semibold text-[#F5F7FA] mb-3">
                  {t.label}
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-[#8B94A7] mb-3">
                  <Database size={12} />
                  <span className="terminal-font">Encrypted · AES-256</span>
                </div>

                <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] border-t border-[#1F2533] pt-3 mt-3">
                  ✗ No cross-tenant queries
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}