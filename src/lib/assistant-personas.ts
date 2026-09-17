export interface Persona {
  name: string;
  role: string;
  greeting: string;
  accent: string;
  accentRgb: string;
  suggestions: string[];
}

export const PERSONAS: Record<string, Persona> = {
  "/": {
    name: "AxiomForge Concierge",
    role: "Central Hub",
    greeting:
      "Welcome. I can walk you through any vertical — healthcare, education, or enterprise. Which sector interests you?",
    accent: "#0E7490",
    accentRgb: "14,116,144",
    suggestions: [
      "How does AxiomForge isolate my data?",
      "What's the pricing for a 300-bed hospital?",
      "How is this different from a chatbot?",
    ],
  },
  "/solutions/healthcare": {
    name: "Medical Data Officer",
    role: "Healthcare Command",
    greeting:
      "Hello. I am your ODPC & HIPAA guide. Ask me how we isolate PHI, or about our clinical scribe deployment timelines.",
    accent: "#047857",
    accentRgb: "4,120,87",
    suggestions: [
      "How do you handle patient consent?",
      "Can it write clinical notes in Swahili?",
      "What's the EHR integration process?",
    ],
  },
  "/solutions/education": {
    name: "Academic Registrar Guide",
    role: "Academic Scale",
    greeting:
      "Karibu. I can help you understand FERPA alignment, admissions automation, or how our syllabus-locked agents avoid hallucination.",
    accent: "#1E40AF",
    accentRgb: "30,64,175",
    suggestions: [
      "How does the syllabus-locking work?",
      "Can it process KCSE certificate verification?",
      "What about exam-season query spikes?",
    ],
  },
  "/solutions/enterprise": {
    name: "Operations Architect",
    role: "Enterprise Engine",
    greeting:
      "Ready to eliminate system friction. Ask me about Slack/Notion integration, API action agents, or custom workflow deployment.",
    accent: "#0E7490",
    accentRgb: "14,116,144",
    suggestions: [
      "Can it act on Stripe or Shopify APIs?",
      "How does internal knowledge search work?",
      "What's the deployment timeline?",
    ],
  },
  "/security-architecture": {
    name: "Compliance Auditor",
    role: "Architecture Vault",
    greeting:
      "I speak the language of SOC 2, ODPC, and container isolation. Ask me the hard questions about tenant data boundaries.",
    accent: "#0E7490",
    accentRgb: "14,116,144",
    suggestions: [
      "Prove that tenants can't see each other's data.",
      "Where are your servers physically located?",
      "How do you handle a data deletion request?",
    ],
  },
};

export const DEFAULT_PERSONA = PERSONAS["/"];

export function getPersonaForPath(pathname: string): Persona {
  if (PERSONAS[pathname]) return PERSONAS[pathname];

  const match = Object.keys(PERSONAS).find(
    (key) => key !== "/" && pathname.startsWith(key),
  );
  return match ? PERSONAS[match] : DEFAULT_PERSONA;
}