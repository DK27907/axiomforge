"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  Database,
  Shield,
  Zap,
  Users,
  FileText,
  Activity,
  GitBranch,
  Cloud,
} from "lucide-react";
import { SolutionData } from "@/lib/solutions-data";

const SECTOR_SYSTEMS: Record<string, { icon: typeof Server; label: string; detail: string }[]> = {
  healthcare: [
    { icon: Activity, label: "Autonomous Triage", detail: "Multi-lingual intake · EHR-connected" },
    { icon: FileText, label: "Clinical Scribes", detail: "Voice-to-text · zero retention" },
    { icon: Shield, label: "PHI Vault", detail: "Per-tenant AES-256 · HSM keys" },
    { icon: Database, label: "EHR Bridge", detail: "Epic · Cerner · OpenMRS" },
    { icon: Users, label: "Patient Portal", detail: "Registration · pre-screening" },
    { icon: Server, label: "ODPC Console", detail: "Real-time compliance posture" },
  ],
  education: [
    { icon: Users, label: "Registrar Agents", detail: "24/7 student Q&A" },
    { icon: FileText, label: "Admissions OCR", detail: "KCSE · transcripts · bulk verify" },
    { icon: Database, label: "Syllabus Index", detail: "Curriculum-locked · zero hallucination" },
    { icon: Activity, label: "Faculty Amplifier", detail: "Institutional memory search" },
    { icon: GitBranch, label: "Registration Autoscale", detail: "Semester-peak capacity" },
    { icon: Shield, label: "FERPA Consent", detail: "Tokenized student IDs" },
  ],
  enterprise: [
    { icon: Database, label: "Knowledge Graph", detail: "Slack · Notion · Drive" },
    { icon: Zap, label: "API Action Agents", detail: "Stripe · Shopify · custom" },
    { icon: Cloud, label: "Workspace Bridge", detail: "Google · Microsoft 365" },
    { icon: Cpu, label: "Custom Agent Forge", detail: "Workflow orchestration" },
    { icon: Server, label: "Isolated Container", detail: "Per-tenant · no cross-talk" },
    { icon: Shield, label: "Audit Console", detail: "Every action logged" },
  ],
};

interface SectorInfoPanelProps {
  data: SolutionData;
}

export function SectorInfoPanel({ data }: SectorInfoPanelProps) {
  const systems = SECTOR_SYSTEMS[data.key] ?? [];

  return (
    <section className="relative py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div
            className="terminal-font text-[10px] tracking-[0.3em] uppercase mb-3"
            style={{ color: data.accent }}
          >
            ◢ Every System We Build
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F7FA]">
            Six Production Systems. One Isolated Container.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {systems.map((sys, i) => {
            const Icon = sys.icon;
            return (
              <motion.div
                key={sys.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-[#1F2533] bg-[#0F131C]/60 p-4 hover:border-[#2A3242] transition-colors"
              >
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center mb-3"
                  style={{
                    backgroundColor: `rgba(${data.accentRgb}, 0.08)`,
                    border: `1px solid rgba(${data.accentRgb}, 0.25)`,
                  }}
                >
                  <Icon size={14} style={{ color: data.accent }} />
                </div>
                <div className="text-[12px] font-semibold text-[#F5F7FA] leading-tight mb-1.5">
                  {sys.label}
                </div>
                <div className="text-[10px] text-[#8B94A7] leading-snug">
                  {sys.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}