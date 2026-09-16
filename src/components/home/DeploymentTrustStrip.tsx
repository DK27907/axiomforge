"use client";

import { motion } from "framer-motion";

export function DeploymentTrustStrip() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-[#1F2533]"
        >
          {/* Image background */}
          <div className="absolute inset-0">
            <img
              src="/images/nairobi-night.jpg"
              alt="Nairobi skyline at night"
              className="w-full h-full object-cover opacity-30"
            />
            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,13,20,0.6) 0%, rgba(10,13,20,0.85) 60%, #0A0D14 100%)",
              }}
            />
            {/* Cyan ambient glow from bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-40"
              style={{
                background:
                  "radial-gradient(ellipse at bottom, rgba(6,182,212,0.18), transparent 70%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-20 md:py-28 text-center">
            <div className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#06B6D4] mb-4">
              ◢ Deployed From Nairobi
            </div>

            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-5 leading-tight max-w-3xl mx-auto">
              Enterprise AI.{" "}
              <span className="text-[#8B94A7]">
                Built By Engineers Who Know Kenya.
              </span>
            </h3>

            <p className="text-base text-[#8B94A7] max-w-2xl mx-auto leading-relaxed mb-10">
              Not a reseller. Not a SaaS wrapper. We architect, deploy, and
              monitor isolated AI systems from our own infrastructure. Compliance
              with ODPC isn't a checkbox — it's our operating assumption.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { label: "Region", value: "Nairobi, KE" },
                { label: "Compliance", value: "ODPC Reg." },
                { label: "Uptime SLA", value: "99.95%" },
                { label: "Response", value: "< 6 hours" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mb-1.5">
                    {stat.label}
                  </div>
                  <div className="text-sm font-semibold text-[#F5F7FA]">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}