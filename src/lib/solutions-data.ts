export type SectorKey = "healthcare" | "education" | "enterprise";

export interface SolutionData {
  key: SectorKey;
  accent: string;
  accentRgb: string;

  // Hero
  heroEyebrow: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubline: string;
  heroCTA: string;

  // Before / After
  beforeLabel: string;
  beforeProblems: string[];
  afterLabel: string;
  afterWins: string[];

  // Systems showcase (3 cards)
  systems: {
    title: string;
    tagline: string;
    description: string;
  }[];

  // Metrics
  metrics: {
    label: string;
    value: string;
    caption: string;
  }[];

  // Trust badges
  trust: string[];

  // Final CTA
  ctaHeadline: string;
  ctaSubline: string;
  ctaButton: string;
}

export const SOLUTIONS: Record<SectorKey, SolutionData> = {
  healthcare: {
    key: "healthcare",
    accent: "#00F5A0",
    accentRgb: "0,245,160",

    heroEyebrow: "◢ Healthcare Command",
    heroHeadline: "HIPAA & ODPC Compliant Healthcare AI.",
    heroHighlight: "Absolute PHI Isolation.",
    heroSubline:
      "Medical staff shouldn't burn eight hours a day on patient charts. Triage queues shouldn't wrap around the reception counter. AxiomForge deploys autonomous agents that respect the sanctity of patient data — and Kenyan law.",
    heroCTA: "Deploy Healthcare AI",

    beforeLabel: "Before AxiomForge",
    beforeProblems: [
      "Staff spent 34 hrs/week on manual chart transcription",
      "Triage delays averaged 47 minutes during peak hours",
      "Patient records spread across 4 incompatible systems",
    ],
    afterLabel: "After AxiomForge",
    afterWins: [
      "Clinical scribes cut chart time by 71%",
      "Autonomous triage reduced wait to under 9 minutes",
      "Unified PHI vault, ODPC-auditable, single pane",
    ],

    systems: [
      {
        title: "Autonomous Patient Triage Agents",
        tagline: "Multi-lingual. EHR-connected.",
        description:
          "Localized chatbots (English and Swahili) that securely manage registration, pre-screen symptoms, and coordinate with Electronic Health Record databases. Trained on your clinical protocols. Never on public data.",
      },
      {
        title: "Secure Clinical Scribes",
        tagline: "Voice-to-text. Zero retention.",
        description:
          "Voice-to-text AI that listens to consultations and formats professional medical notes without storing patient data on public servers. Every transcript tokenized. Every PHI token destroyed after session close.",
      },
      {
        title: "ODPC Audit Console",
        tagline: "Every action. Attestable.",
        description:
          "Every AI action logged. Every data access attestable. Export compliance reports to the Office of the Data Protection Commissioner in one click. Real-time ODPC + HIPAA posture monitoring.",
      },
    ],

    metrics: [
      { label: "Chart time reduction", value: "71%", caption: "Average across 12 clinics" },
      { label: "Triage wait time", value: "< 9 min", caption: "Down from 47 minutes" },
      { label: "PHI incidents", value: "0", caption: "Since deployment" },
      { label: "Uptime SLA", value: "99.95%", caption: "24/7 monitored" },
    ],

    trust: [
      "ODPC Registered (Kenya)",
      "HIPAA Compliant",
      "ISO 27001 Certified",
      "SOC 2 Type II",
    ],

    ctaHeadline: "Ready to deploy isolated healthcare AI?",
    ctaSubline:
      "Enter your institutional email. Get immediate sandbox access. No sales call required.",
    ctaButton: "Forge Your Healthcare System",
  },

  education: {
    key: "education",
    accent: "#2563EB",
    accentRgb: "37,99,235",

    heroEyebrow: "◢ Academic Scale",
    heroHeadline: "FERPA-Aligned Campus Infrastructure.",
    heroHighlight: "Streamline Administration.",
    heroSubline:
      "Mass student queries bury registrar offices every semester. Faculty answer the same 40 questions 400 times. AxiomForge deploys syllabus-locked AI that knows your handbook better than the people who wrote it.",
    heroCTA: "Deploy Academic AI",

    beforeLabel: "Before AxiomForge",
    beforeProblems: [
      "Registrar office 94% capacity answering repeat emails",
      "Registration week: 11-day processing backlog",
      "Students waiting 3+ days for routine timetable queries",
    ],
    afterLabel: "After AxiomForge",
    afterWins: [
      "89% of student queries resolved autonomously",
      "Registration processing down to under 36 hours",
      "Faculty refocused on instruction, not inbox management",
    ],

    systems: [
      {
        title: "24/7 Academic & Syllabus Guides",
        tagline: "Syllabus-locked. Zero hallucination.",
        description:
          "AI assistants trained strictly on your school's unique curriculum, student handbooks, and timetables. Zero hallucination on course codes, credit hours, or prerequisite chains. If it's not in your documents, the bot says so — and escalates.",
      },
      {
        title: "Automated Admissions Registrars",
        tagline: "KCSE OCR. Bulk verification.",
        description:
          "Smart systems that ingest, read, and verify thousands of student application documents. KCSE certificates, transcripts, recommendation letters — parsed, cross-referenced, and scored. Immediate sorting recommendations for human review.",
      },
      {
        title: "Faculty Amplification Layer",
        tagline: "Total institutional memory.",
        description:
          "Let lecturers query the entire syllabus, past exam patterns, and curriculum committee minutes in plain language. Answer student questions from a position of total institutional memory. Consistent, defensible answers every time.",
      },
    ],

    metrics: [
      { label: "Queries auto-resolved", value: "89%", caption: "Average across campuses" },
      { label: "Registration speed", value: "< 36 hrs", caption: "Down from 11 days" },
      { label: "Applications processed", value: "5,000+", caption: "Per cycle, per registrar" },
      { label: "Uptime during peak", value: "99.99%", caption: "Registration-week SLA" },
    ],

    trust: [
      "FERPA Certified",
      "ODPC Registered (Kenya)",
      "ISO 27001 Certified",
      "SOC 2 Type II",
    ],

    ctaHeadline: "Ready to scale your campus administration?",
    ctaSubline:
      "Enter your institutional email. Model your enrollment. Get instant pricing.",
    ctaButton: "Forge Your Academic System",
  },

  enterprise: {
    key: "enterprise",
    accent: "#06B6D4",
    accentRgb: "6,182,212",

    heroEyebrow: "◢ Enterprise Engine",
    heroHeadline: "Eliminate System Friction.",
    heroHighlight: "Deploy Autonomous Corporate Agents.",
    heroSubline:
      "Your support team answers 'how do I reset my password' forty times a day. Your staff lose cumulative weeks every quarter hunting for documents. AxiomForge deploys agents that don't just speak — they act.",
    heroCTA: "Deploy Enterprise AI",

    beforeLabel: "Before AxiomForge",
    beforeProblems: [
      "Support: 62% of tickets are L1 repeat questions",
      "New hires: 3-4 weeks to find internal documentation",
      "Zero memory of last quarter's operational decisions",
    ],
    afterLabel: "After AxiomForge",
    afterWins: [
      "74% ticket deflection on L1, humans focus on L2+",
      "Onboarding ramp: 4 days, not 4 weeks",
      "Institutional memory searchable in 200ms",
    ],

    systems: [
      {
        title: "Internal Knowledge Graphs",
        tagline: "Slack. Notion. Drive. One oracle.",
        description:
          "AI agents deeply integrated into your secure company drives — Slack, Google Workspace, Notion — to act as a brilliant, instantly accessible internal oracle for employee onboarding. Ask 'what did we decide about the pricing model in March?' and get the answer with source citations.",
      },
      {
        title: "API-Connected External Support",
        tagline: "Answers that act.",
        description:
          "Chatbots that don't just speak — they act. They connect directly to your inventory or booking APIs to solve customer issues on autopilot. Refund issued. Order tracked. Appointment rescheduled. All without a human touch.",
      },
      {
        title: "Custom Agent Forge",
        tagline: "If you can describe it, we deploy it.",
        description:
          "Bring us your strangest workflow. We build an agent for it. Document ingestion, multi-system orchestration, scheduled autonomous runs — all inside an isolated container with full audit logging.",
      },
    ],

    metrics: [
      { label: "L1 ticket deflection", value: "74%", caption: "Within 60 days of deploy" },
      { label: "Onboarding ramp", value: "4 days", caption: "Down from 4 weeks" },
      { label: "Internal search speed", value: "200ms", caption: "Across all workspaces" },
      { label: "Concurrent agents", value: "Unlimited", caption: "Per tenant container" },
    ],

    trust: [
      "SOC 2 Type II",
      "ISO 27001 Certified",
      "ODPC Registered (Kenya)",
      "GDPR Aligned",
    ],

    ctaHeadline: "Ready to eliminate operational friction?",
    ctaSubline:
      "Enter your institutional email. Get immediate sandbox access. No sales call required.",
    ctaButton: "Forge Your Enterprise System",
  },
};

export function getSolution(key: SectorKey): SolutionData {
  return SOLUTIONS[key];
}