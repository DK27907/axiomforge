import { PageShell } from "@/components/layout/PageShell";
import { PricingEngine } from "@/components/home/PricingEngine";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Pricing — Transparent, No Sales Call | AxiomForge",
  description:
    "Pricing in KES and USD. Slide to your scale. No hidden matrix, no demo required.",
};

export default function PricingPage() {
  return (
    <PageShell>
      {/* ── Cinematic hero with dark backdrop ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Dark gradient background */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, #0B1120 0%, #0F172A 45%, #111827 100%)",
          }}
        />

        {/* Subtle grid overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Cyan radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(14,116,144,0.28) 0%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/8 backdrop-blur-xl mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#67E8F9] shadow-[0_0_10px_rgba(103,232,249,0.9)] animate-pulse" />
            <span className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#67E8F9] font-medium">
              ◢ Pricing
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05] drop-shadow-[0_4px_28px_rgba(0,0,0,0.55)]">
            Priced In The Open.
            <br />
            <span className="bg-gradient-to-r from-[#67E8F9] via-[#93C5FD] to-[#67E8F9] bg-clip-text text-transparent">
              No Sales Call. No Asterisks.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]">
            Every engagement is scoped transparently. Model your scale below —
            the price you see is the price you pay. Implementation in 4-6 weeks.
          </p>
        </div>

        {/* Bottom fade into light pricing engine */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #EAEEF3)",
          }}
        />
      </section>

      {/* ── Pricing engine (existing component) ── */}
      <PricingEngine />

      {/* ── Custom enterprise CTA ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Dark gradient background */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, #EAEEF3 0%, #0F172A 30%, #0B1120 70%, #0F172A 100%)",
          }}
        />

        {/* Grid overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(14,116,144,0.25) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/8 backdrop-blur-xl mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#67E8F9] animate-pulse" />
            <span className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#67E8F9] font-medium">
              ◢ Custom Scale
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            Need a quote for a specific scale?
          </h3>
          <p className="text-base text-white/75 mb-8 max-w-lg mx-auto leading-relaxed">
            For custom enterprise scopes above 5M API calls/month, talk to our
            team directly.
          </p>

          <div className="flex flex-wrap gap-3 items-center justify-center">
            <a
              href="mailto:info@axiomforge.co.ke?subject=Custom pricing enquiry"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#0E7490] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
              style={{ boxShadow: "0 8px 32px rgba(14,116,144,0.4)" }}
            >
              Email info@axiomforge.co.ke
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="https://wa.me/254748249882?text=Hi%20AxiomForge%2C%20I%27d%20like%20custom%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 backdrop-blur-xl px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all duration-200"
            >
              WhatsApp +254 748 249 882
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}