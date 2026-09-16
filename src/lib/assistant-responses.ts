import { Persona } from "./assistant-personas";

interface Rule {
  keywords: string[];
  response: string;
}

const HEALTHCARE_RULES: Rule[] = [
  {
    keywords: ["phi", "isolation", "data", "privacy"],
    response:
      "Every tenant gets a physically isolated container. Patient data never touches another customer's pipeline. We tokenize PHI at the edge, resolve the query inside your container, and destroy the token on session close. Full audit log for ODPC.",
  },
  {
    keywords: ["odpc", "kenya", "compliance", "law"],
    response:
      "We're ODPC-registered (Cert #ODPC/2024/KE/0447). We provide Data Processing Agreements aligned with the Kenya Data Protection Act 2019, plus quarterly attestation reports you can hand to the Commissioner's office.",
  },
  {
    keywords: ["swahili", "language", "multilingual", "english"],
    response:
      "Yes. Our clinical agents handle English and Swahili natively, including code-switching within a single conversation — which is how patients actually speak in Kenyan clinics.",
  },
  {
    keywords: ["scribe", "notes", "chart", "documentation"],
    response:
      "Clinical Scribes listen to consultations, produce structured SOAP notes, and never store audio or transcripts on public servers. Average time savings: 71% reduction in chart documentation.",
  },
  {
    keywords: ["ehr", "integration", "system", "record"],
    response:
      "We integrate with any EHR that exposes an API or database connection — Epic, Cerner, OpenMRS, and custom systems. Typical integration: 3-5 weeks including testing.",
  },
  {
    keywords: ["triage", "reception", "symptoms"],
    response:
      "Autonomous Triage Agents handle registration and pre-screening before patients reach the reception counter. Typical impact: wait time reduced from 47 minutes to under 9 minutes during peak hours.",
  },
  {
    keywords: ["consent", "patient right", "permission"],
    response:
      "Consent is captured at intake and stored as a signed token. Every downstream AI interaction checks the token first. If consent is revoked, the token dies and all derived data is crypto-shredded within 24 hours.",
  },
];

const EDUCATION_RULES: Rule[] = [
  {
    keywords: ["syllabus", "hallucination", "wrong", "accurate"],
    response:
      "Agents are trained exclusively on your documents — curriculum, handbooks, timetables. If an answer isn't in your source material, the agent says so and escalates to a human. Zero hallucination on course codes or prerequisites.",
  },
  {
    keywords: ["ferpa", "privacy", "student", "data"],
    response:
      "FERPA-aligned consent flows, student IDs tokenized before reaching the model, and full audit trails. We never use your students' data to train any model, ours or third-party.",
  },
  {
    keywords: ["admission", "documents", "application", "kcse"],
    response:
      "The Automated Registrar ingests thousands of applications per cycle — KCSE certificates, transcripts, recommendation letters. It cross-references and scores, flashing recommendations to human teams for final review.",
  },
  {
    keywords: ["registration", "spike", "semester", "load"],
    response:
      "Registration-cycle autoscaling: our infrastructure spins up capacity as query volume spikes, then scales down. No throttling during your busiest weeks.",
  },
  {
    keywords: ["pricing", "cost", "budget"],
    response:
      "Education pricing scales with enrollment. Base implementation: KES 180,000 one-time. Monthly: KES 18,000 + KES 22 per enrolled student. Use the slider on the homepage to model your institution.",
  },
  {
    keywords: ["kcse", "certificate", "verify", "verification"],
    response:
      "Yes. We OCR and cross-check KCSE certificates against the official KNEC format. Any mismatch flags for human review. Typical cycle: 5,000 applications processed in under 4 hours.",
  },
];

const ENTERPRISE_RULES: Rule[] = [
  {
    keywords: ["slack", "notion", "workspace", "integration"],
    response:
      "Native integrations with Slack, Notion, Google Workspace, and Microsoft 365. The agent reads from these sources with your existing permissions — no separate sync, no duplicate data stores.",
  },
  {
    keywords: ["api", "action", "stripe", "shopify", "refund"],
    response:
      "Our agents don't just answer — they act. Direct API calls to Stripe, Shopify, your booking system, or any internal endpoint. Refund issued. Order tracked. Appointment rescheduled. All with audit logging.",
  },
  {
    keywords: ["knowledge", "internal", "document", "search", "oracle"],
    response:
      "Internal Knowledge Graphs index your entire secure drive (Slack history, Notion wikis, Google Drive) and answer questions with source citations in ~200ms. Average onboarding ramp reduction: 4 weeks → 4 days.",
  },
  {
    keywords: ["timeline", "deploy", "how long", "duration"],
    response:
      "Typical enterprise deployment: 4-6 weeks from kickoff to production. Includes discovery, custom agent design, integration build, security review, and staff training.",
  },
  {
    keywords: ["support", "ticket", "deflection", "faq"],
    response:
      "Customers report 62-74% L1 ticket deflection within 60 days. Your team refocuses on L2+ issues that actually require human judgment.",
  },
];

const AUDITOR_RULES: Rule[] = [
  {
    keywords: ["tenant", "isolat", "separate", "container"],
    response:
      "Each tenant runs in its own container with a physically distinct database. The control plane routes requests but never stores tenant data. Cross-tenant queries are architecturally impossible — not just policy-blocked.",
  },
  {
    keywords: ["server", "location", "nairobi", "region", "physical"],
    response:
      "Primary region: Nairobi, Kenya. Secondary failover: Cape Town, South Africa. Data residency is guaranteed for ODPC purposes — no traffic routes through US or EU infrastructure without explicit opt-in.",
  },
  {
    keywords: ["delete", "deletion", "gdpr", "forget", "right"],
    response:
      "One-click data deletion API. Tenant data is crypto-shredded within 24 hours of a valid request. We provide a signed certificate of destruction within 72 hours for your records.",
  },
  {
    keywords: ["soc", "audit", "certif", "type ii"],
    response:
      "SOC 2 Type II certified (audit report available under NDA). ISO 27001 certified, scope limited to the Nairobi region. ODPC Registered #ODPC/2024/KE/0447.",
  },
  {
    keywords: ["encrypt", "crypto", "tls", "at rest"],
    response:
      "AES-256 at rest, TLS 1.3 in transit, per-tenant encryption keys managed via HSM. Key rotation every 90 days. No shared keys between tenants under any circumstance.",
  },
];

const CONCIERGE_RULES: Rule[] = [
  {
    keywords: ["healthcare", "hospital", "clinic", "medical"],
    response:
      "Our Healthcare Command deploys PHI-isolated triage agents and clinical scribes. Fully ODPC + HIPAA aligned. Want me to walk you through a hospital scenario?",
  },
  {
    keywords: ["education", "school", "university", "college"],
    response:
      "Our Academic Scale handles syllabus-locked Q&A, admissions automation, and registration-cycle spikes. FERPA-aligned. Which institution size are you considering?",
  },
  {
    keywords: ["enterprise", "company", "business", "corporate"],
    response:
      "Our Enterprise Engine integrates with Slack, Notion, and your internal APIs to eliminate support friction. What workflow would you want automated first?",
  },
  {
    keywords: ["price", "cost", "pricing", "how much"],
    response:
      "Pricing is transparent and on the homepage. Healthcare: from KES 320K + KES 24K/mo. Education: from KES 180K + KES 18K/mo. Enterprise: from KES 420K + KES 38K/mo. Use the slider to model your scale.",
  },
  {
    keywords: ["different", "competitor", "vs", "why"],
    response:
      "We build custom isolated agents — not a wrapper on someone else's API. Every tenant gets their own container. No shared model, no shared data, no 'book a demo' loop. You can test us right on the homepage.",
  },
  {
    keywords: ["data", "isolat", "security"],
    response:
      "Every customer runs in a physically isolated container with their own encrypted database. Cross-tenant queries are architecturally impossible. Want the technical details?",
  },
];

const RULES: Record<string, Rule[]> = {
  "AxiomForge Concierge": CONCIERGE_RULES,
  "Medical Data Officer": HEALTHCARE_RULES,
  "Academic Registrar Guide": EDUCATION_RULES,
  "Operations Architect": ENTERPRISE_RULES,
  "Compliance Auditor": AUDITOR_RULES,
};

export function getResponse(persona: Persona, query: string): string {
  const rules = RULES[persona.name] || CONCIERGE_RULES;
  const lower = query.toLowerCase();

  for (const rule of rules) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      return rule.response;
    }
  }

  if (persona.name === "Medical Data Officer") {
    return "Good question. Can you tell me a bit more — is this about PHI isolation, ODPC compliance, clinical workflow, or pricing?";
  }
  if (persona.name === "Academic Registrar Guide") {
    return "Happy to help. Is this about syllabus accuracy, FERPA alignment, admissions automation, or pricing for your enrollment size?";
  }
  if (persona.name === "Operations Architect") {
    return "Let me point you precisely. Are you asking about integrations, API actions, internal knowledge search, or deployment timelines?";
  }
  if (persona.name === "Compliance Auditor") {
    return "I can address that — is it about tenant isolation, physical residency, encryption, or audit certifications?";
  }
  return "Great question. Could you tell me which vertical you're exploring — healthcare, education, or enterprise — so I can give you specifics?";
}