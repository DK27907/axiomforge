"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function VaultCTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-[#06B6D4]/40 bg-[#0F131C] p-10 md:p-16 text-center overflow-hidden"
          style={{
            boxShadow:
              "0 0 80px rgba(6,182,212,0.10), inset 0 0 0 1px rgba(6,182,212,0.15)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div
              className="w-[600px] h-[600px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 60%)",
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FA] mb-4 leading-tight">
              Ready to see the architecture in person?
            </h2>
            <p className="text-base text-[#8B94A7] max-w-xl mx-auto mb-8 leading-relaxed">
              Book a 30-minute technical walkthrough with our compliance team.
              No sales pitch. Just the architecture.
            </p>

            <div className="flex flex-wrap gap-3 items-center justify-center">
              <a
                href="mailto:info@axiomforge.co.ke?subject=Architecture walkthrough request"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#06B6D4] px-7 py-3.5 text-sm font-medium text-[#0A0D14] transition-all duration-200"
                style={{ boxShadow: "0 0 40px rgba(6,182,212,0.3)" }}
              >
                Request walkthrough
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="https://wa.me/254748249882?text=Hi%20AxiomForge%2C%20I%27d%20like%20to%20understand%20your%20architecture."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1F2533] px-7 py-3.5 text-sm font-medium text-[#8B94A7] hover:text-[#F5F7FA] hover:border-[#2A3242] transition-all duration-200"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}