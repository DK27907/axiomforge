import { PageShell } from "@/components/layout/PageShell";
import { ContactMethods } from "@/components/contact/ContactMethods";

export const metadata = {
  title: "Contact — AxiomForge",
  description:
    "Talk to AxiomForge. Email info@axiomforge.co.ke, WhatsApp +254 748 249 882. Response within 6 hours.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="pt-24 pb-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#4B5468] mb-4">
            ◢ Contact
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F7FA] mb-6 leading-tight">
            Direct Lines.
            <br />
            <span className="text-[#06B6D4]">No Phone Trees.</span>
          </h1>
          <p className="text-base text-[#8B94A7] leading-relaxed">
            Talk to a real engineer. We reply within 6 hours during business
            days.
          </p>
        </div>
      </section>

      <ContactMethods />

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#1F2533] bg-[#0F131C] p-8 md:p-12 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-[#F5F7FA] mb-3">
            Prefer email?
          </h3>
          <p className="text-sm text-[#8B94A7] mb-6 max-w-lg mx-auto">
            Send us the specifics — sector, scale, and any compliance needs.
            We&apos;ll respond with a tailored architecture sketch.
          </p>
          <a
            href="mailto:info@axiomforge.co.ke?subject=Enquiry from axiomforge.co.ke"
            className="inline-flex items-center gap-2 rounded-lg bg-[#06B6D4] px-7 py-3.5 text-sm font-medium text-[#0A0D14]"
          >
            Email info@axiomforge.co.ke
          </a>
        </div>
      </section>
    </PageShell>
  );
}