import { FaqItem } from "@/components/faq/FaqAccordion";

export const FAQ_CATEGORIES: { title: string; items: FaqItem[] }[] = [
  {
    title: "General",
    items: [
      {
        q: "What exactly does AxiomForge build?",
        a: "We engineer custom, isolated AI agents and contextual chatbots. Every deployment runs inside a physically separated container with its own encrypted database. No shared models, no shared data, no reselling of third-party APIs.",
      },
      {
        q: "How is this different from ChatGPT or a generic chatbot?",
        a: "Generic chatbots run on shared infrastructure and can't guarantee data isolation. AxiomForge builds a dedicated container for your institution, trains the agent strictly on your documents, and gives you a complete audit trail suitable for ODPC, HIPAA, or FERPA review.",
      },
      {
        q: "Where are you based?",
        a: "Nairobi, Kenya. Primary infrastructure region: Nairobi. Secondary failover: Cape Town, South Africa. We're ODPC-registered (Cert #ODPC/2024/KE/0447).",
      },
      {
        q: "How long does deployment take?",
        a: "Typical engagement: 4-6 weeks from kickoff to production. Includes discovery, custom agent design, integration build, security review, and staff training.",
      },
    ],
  },
  {
    title: "Data & Security",
    items: [
      {
        q: "How do you ensure my data never leaks?",
        a: "Three layers: (1) Physically isolated containers per tenant. (2) PHI/PII tokenized at the edge before reaching any model. (3) Per-tenant encryption keys managed via HSM with 90-day rotation. Cross-tenant queries are architecturally impossible.",
      },
      {
        q: "Do you train models on my data?",
        a: "Never. Not ours, not any third-party's. Your data is used only to answer your queries inside your isolated container. When the session ends, the tokens are destroyed.",
      },
      {
        q: "What happens if I request data deletion?",
        a: "One-click API deletion. Your tenant data is crypto-shredded within 24 hours of a valid request. We issue a signed certificate of destruction within 72 hours for your records.",
      },
      {
        q: "Are you ODPC registered?",
        a: "Yes. ODPC Certificate #ODPC/2024/KE/0447. We provide Data Processing Agreements aligned with the Kenya Data Protection Act 2019, plus quarterly attestation reports.",
      },
    ],
  },
  {
    title: "Pricing & Contracts",
    items: [
      {
        q: "Is pricing really public?",
        a: "Yes. Every engagement has a transparent base implementation rate and monthly operations rate published on our pricing page. Use the interactive slider to model your scale in KES and USD.",
      },
      {
        q: "Do I have to book a sales call?",
        a: "No. Submit your institutional email on the homepage and you get immediate sandbox access. If you want a technical walkthrough later, you can request one — but it's optional.",
      },
      {
        q: "What's included in the base implementation?",
        a: "Isolated tenant container, custom agent design (3 workflows), integration with your existing systems, compliance audit trail setup, staff training, and 4-6 weeks of delivery. See the pricing page for the full list.",
      },
      {
        q: "Can I pay in KES?",
        a: "Yes. We invoice in KES for Kenyan institutions and USD for international customers. Rates are published at a fixed KES/USD conversion for transparency.",
      },
    ],
  },
  {
    title: "Technical",
    items: [
      {
        q: "What systems can you integrate with?",
        a: "Any system with an API or database connection. Common integrations: Epic, Cerner, OpenMRS (healthcare); KNEC verification, common SIS platforms (education); Slack, Notion, Google Workspace, Stripe, Shopify (enterprise).",
      },
      {
        q: "Which languages do your agents support?",
        a: "English and Swahili natively, including code-switching within a single conversation. Additional languages on request.",
      },
      {
        q: "What uptime do you guarantee?",
        a: "99.95% uptime SLA on standard deployments. 99.99% for education during registration weeks, and healthcare during business hours.",
      },
      {
        q: "Can your agents take real actions, not just answer?",
        a: "Yes. Our agents connect to Stripe, Shopify, your booking system, or any internal endpoint to issue refunds, track orders, reschedule appointments, and more — all with audit logging.",
      },
    ],
  },
];