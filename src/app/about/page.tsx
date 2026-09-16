import { PageShell } from "@/components/layout/PageShell";

export const metadata = {
  title: "About — AxiomForge",
  description:
    "AxiomForge builds isolated AI systems from Nairobi, Kenya. Compliance-first engineering for healthcare, education, and enterprise.",
};

const VALUES = [
  {
    title: "Compliance is architecture, not policy",
    body: "ODPC alignment is enforced at the container level, not bolted on with a terms-of-service checkbox. We architect for the law we actually operate under.",
  },
  {
    title: "Transparency over sales choreography",
    body: "Prices published. Simulator live. No hidden matrix. We win by being the only vendor who tells you the truth on the first page.",
  },
  {
    title: "Isolation is non-negotiable",
    body: "Every tenant gets their own container, their own encryption keys, their own audit trail. Cross-tenant queries are architecturally impossible.",
  },
  {
    title: "Build locally, deploy globally",
    body: "Nairobi-based engineering. Kenyan compliance posture. Infrastructure ready for East Africa and beyond.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#4B5468] mb-4">
            ◢ About AxiomForge
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F7FA] mb-6 leading-tight">
            Built In Nairobi.
            <br />
            <span className="text-[#06B6D4]">Built For Compliance.</span>
          </h1>
          <p className="text-lg text-[#8B94A7] leading-relaxed mb-6">
            AxiomForge exists because AI adoption in Kenya has been held back by
            two things: data residency fear and opaque vendor behavior. We
            engineered our entire company around removing both.
          </p>
          <p className="text-base text-[#8B94A7] leading-relaxed">
            Every deployment runs inside a physically isolated container in
            Nairobi. Every price is published. Every compliance claim is
            backed by a certificate number you can verify. No sales choreography,
            no hidden fees, no vague promises.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="rounded-2xl border border-[#1F2533] bg-[#0F131C] p-7"
            >
              <div className="terminal-font text-[10px] tracking-widest uppercase text-[#06B6D4] mb-4">
                ◢ 0{i + 1}
              </div>
              <h3 className="text-lg font-semibold text-[#F5F7FA] mb-3 leading-tight">
                {v.title}
              </h3>
              <p className="text-sm text-[#8B94A7] leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#1F2533] bg-[#0F131C] p-8 md:p-12 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-[#F5F7FA] mb-3">
            Want to work with us?
          </h3>
          <p className="text-sm text-[#8B94A7] mb-6 max-w-lg mx-auto">
            Whether you&apos;re a client, engineer, or partner — reach out.
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <a
              href="mailto:info@axiomforge.co.ke?subject=About enquiry"
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