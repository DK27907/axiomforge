import { PageShell } from "@/components/layout/PageShell";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { FAQ_CATEGORIES } from "@/lib/faq-data";

export const metadata = {
  title: "FAQs — AxiomForge",
  description:
    "Frequently asked questions about AxiomForge: data isolation, compliance, pricing, integrations, and deployment timelines.",
};

export default function FaqsPage() {
  return (
    <PageShell>
      <section className="pt-24 pb-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#4B5468] mb-4">
            ◢ Frequently Asked
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F7FA] mb-6 leading-tight">
            Questions.
            <br />
            <span className="text-[#06B6D4]">Answered Directly.</span>
          </h1>
          <p className="text-base text-[#8B94A7] leading-relaxed">
            No sales fluff. No vague promises. Straight answers to the
            questions our clients actually ask.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <div className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#06B6D4] mb-5">
                ◢ {cat.title}
              </div>
              <FaqAccordion items={cat.items} defaultOpen={0} />
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
            Still have questions?
          </h3>
          <p className="text-sm text-[#8B94A7] mb-6">
            Reach us directly — we reply within 6 hours.
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <a
              href="mailto:info@axiomforge.co.ke"
              className="inline-flex items-center gap-2 rounded-lg bg-[#06B6D4] px-6 py-3 text-sm font-medium text-[#0A0D14]"
            >
              Email info@axiomforge.co.ke
            </a>
            <a
              href="https://wa.me/254748249882"
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