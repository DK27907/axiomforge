import { PageShell } from "@/components/layout/PageShell";
import { PricingEngine } from "@/components/home/PricingEngine";

export const metadata = {
  title: "Pricing — Transparent, No Sales Call | AxiomForge",
  description:
    "Pricing in KES and USD. Slide to your scale. No hidden matrix, no demo required.",
};

export default function PricingPage() {
  return (
    <PageShell>
      <section className="pt-24 pb-8 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#4B5468] mb-4">
            ◢ Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F7FA] mb-6 leading-tight">
            Priced In The Open.
            <br />
            <span className="text-[#06B6D4]">No Sales Call. No Asterisks.</span>
          </h1>
          <p className="text-base text-[#8B94A7] leading-relaxed">
            Every engagement is scoped transparently. Model your scale below —
            the price you see is the price you pay. Implementation in 4-6 weeks.
          </p>
        </div>
      </section>

      <PricingEngine />

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto rounded-2xl border border-[#1F2533] bg-[#0F131C] p-8 md:p-12 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-[#F5F7FA] mb-3">
            Need a quote for a specific scale?
          </h3>
          <p className="text-sm text-[#8B94A7] mb-6 max-w-lg mx-auto">
            For custom enterprise scopes above 5M API calls/month, talk to our
            team directly.
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <a
              href="mailto:info@axiomforge.co.ke?subject=Custom pricing enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-[#06B6D4] px-6 py-3 text-sm font-medium text-[#0A0D14]"
            >
              Email info@axiomforge.co.ke
            </a>
            <a
              href="https://wa.me/254748249882?text=Hi%20AxiomForge%2C%20I%27d%20like%20custom%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1F2533] px-6 py-3 text-sm text-[#8B94A7] hover:text-[#F5F7FA] transition-colors"
            >
              WhatsApp +254 748 249 882
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}