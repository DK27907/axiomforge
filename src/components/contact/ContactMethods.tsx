"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

const METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "info@axiomforge.co.ke",
    href: "mailto:info@axiomforge.co.ke",
    accent: "#06B6D4",
    rgb: "6,182,212",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+254 748 249 882",
    href: "https://wa.me/254748249882",
    accent: "#25D366",
    rgb: "37,211,102",
  },
  {
    icon: MapPin,
    label: "Nairobi",
    value: "Kenya · East Africa",
    href: null,
    accent: "#00F5A0",
    rgb: "0,245,160",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "< 6 hours",
    href: null,
    accent: "#2563EB",
    rgb: "37,99,235",
  },
];

export function ContactMethods() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {METHODS.map((m, i) => {
          const Icon = m.icon;
          const Inner = (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border p-7 transition-all duration-300 h-full"
              style={{
                borderColor: `${m.accent}30`,
                backgroundColor: `rgba(${m.rgb}, 0.03)`,
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{
                  backgroundColor: `rgba(${m.rgb}, 0.1)`,
                  border: `1px solid rgba(${m.rgb}, 0.3)`,
                }}
              >
                <Icon size={18} style={{ color: m.accent }} />
              </div>
              <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mb-2">
                {m.label}
              </div>
              <div className="text-lg font-medium text-[#F5F7FA]">
                {m.value}
              </div>
            </motion.div>
          );

          return m.href ? (
            <a key={m.label} href={m.href} className="block">
              {Inner}
            </a>
          ) : (
            <div key={m.label}>{Inner}</div>
          );
        })}
      </div>
    </section>
  );
}