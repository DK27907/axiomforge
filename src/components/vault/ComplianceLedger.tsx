"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const LEDGER = [
  { framework: "ODPC (Kenya)", status: "Registered", ref: "Cert #ODPC/2024/KE/0447" },
  { framework: "HIPAA (US)", status: "Compliant", ref: "BAA template available" },
  { framework: "SOC 2 Type II", status: "Certified", ref: "Audit report under NDA" },
  { framework: "FERPA (US)", status: "Aligned", ref: "Consent flow published" },
  { framework: "ISO 27001", status: "Certified", ref: "Scope: Nairobi region" },
  { framework: "GDPR (EU)", status: "Aligned", ref: "SCCs pre-signed" },
];

export function ComplianceLedger() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#4B5468] mb-3">
            ◢ Compliance Ledger
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FA] mb-4">
            Every Framework. Every Certificate.
          </h2>
          <p className="text-base text-[#8B94A7] max-w-2xl mx-auto leading-relaxed">
            No vague claims. Real registrations, real certificate numbers, real
            audit reports available on request.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-[#1F2533] bg-[#0F131C] overflow-hidden"
        >
          {LEDGER.map((row, i) => (
            <div
              key={row.framework}
              className={`flex items-center justify-between px-6 py-5 ${
                i !== LEDGER.length - 1 ? "border-b border-[#1F2533]" : ""
              }`}
            >
              <div className="flex items-center gap-3 flex-1">
                <CheckCircle2 size={16} className="text-[#00F5A0] shrink-0" />
                <div>
                  <div className="text-sm font-medium text-[#F5F7FA]">
                    {row.framework}
                  </div>
                  <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mt-0.5">
                    {row.ref}
                  </div>
                </div>
              </div>
              <div className="terminal-font text-[10px] tracking-widest uppercase text-[#00F5A0] px-3 py-1 rounded border border-[#00F5A0]/30 bg-[#00F5A0]/5">
                {row.status}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}