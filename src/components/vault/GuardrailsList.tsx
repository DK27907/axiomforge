"use client";

import { motion } from "framer-motion";
import { KeyRound, Eye, Trash2, Server, Lock, FileCheck } from "lucide-react";

const GUARDRAILS = [
  {
    icon: KeyRound,
    title: "Per-tenant encryption keys",
    description:
      "Every customer gets their own AES-256 encryption key managed via HSM. Keys rotate every 90 days. No shared keys between tenants.",
  },
  {
    icon: Eye,
    title: "Zero raw data logging",
    description:
      "PHI, PII, and student records are tokenized at the edge before reaching any model. Raw values never touch a log file.",
  },
  {
    icon: Trash2,
    title: "24-hour crypto-shred",
    description:
      "One-click data deletion API. Tenant data is cryptographically destroyed within 24 hours of a valid request, with a signed certificate of destruction.",
  },
  {
    icon: Server,
    title: "Kenyan data residency",
    description:
      "Primary region: Nairobi. Secondary failover: Cape Town. No traffic routes through US or EU infrastructure without explicit opt-in.",
  },
  {
    icon: Lock,
    title: "AES-256 + TLS 1.3",
    description:
      "Everything encrypted at rest and in transit. No exceptions, no legacy ciphers, no downgrade paths.",
  },
  {
    icon: FileCheck,
    title: "Quarterly attestation",
    description:
      "Independent third-party security audits every quarter. Reports delivered directly to your compliance officer.",
  },
];

export function GuardrailsList() {
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
            ◢ Security Guardrails
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FA] mb-4">
            Six Non-Negotiables. Enforced In Code.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GUARDRAILS.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bento-card"
              >
                <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-[#06B6D4]" />
                </div>
                <h3 className="text-base font-semibold text-[#F5F7FA] mb-2 leading-tight">
                  {g.title}
                </h3>
                <p className="text-sm text-[#8B94A7] leading-relaxed">
                  {g.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}