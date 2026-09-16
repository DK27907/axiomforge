export type Sector = "healthcare" | "education" | "enterprise";

export interface SectorConfig {
  key: Sector;
  label: string;
  shortLabel: string;
  accent: string;         // hex
  accentRgb: string;      // for rgba shadows
  placeholder: string;
  maskLogs: string[];
  headerLine: string;
}

export const SECTORS: Record<Sector, SectorConfig> = {
  healthcare: {
    key: "healthcare",
    label: "Hospital Data",
    shortLabel: "HEALTHCARE",
    accent: "#00F5A0",
    accentRgb: "0,245,160",
    placeholder:
      "Patient Wanjiru, 34F, presented with fever and joint pain at 14:32 EAT...",
    headerLine: "MEDICAL TRIAGE AGENT · ISOLATED CONTAINER · KE-MED-7A3",
    maskLogs: [
      "ISOLATING PHI FROM QUERY PAYLOAD...",
      "PHI MASKED: [PATIENT_NAME→REDACTED], [ID→TOKEN_7A3F]",
      "ROUTING TO COMPLIANCE BOUNDARY (ODPC + HIPAA)...",
      "RESOLVING CLINICAL INTENT...",
    ],
  },
  education: {
    key: "education",
    label: "School Syllabus",
    shortLabel: "EDUCATION",
    accent: "#2563EB",
    accentRgb: "37,99,235",
    placeholder:
      "Does CS301 require a prerequisite in Discrete Mathematics before enrollment?",
    headerLine: "ACADEMIC REGISTRAR AGENT · SYLLABUS-LOCKED · KE-EDU-2201",
    maskLogs: [
      "LOADING CURRICULUM INDEX (2024/2025)...",
      "STUDENT ID MASKED: [REG_NO→TOKEN_2201]",
      "VERIFYING AGAINST REGISTRAR HANDBOOK...",
      "RESOLVING PREREQUISITE CHAIN...",
    ],
  },
  enterprise: {
    key: "enterprise",
    label: "Business CRM",
    shortLabel: "ENTERPRISE",
    accent: "#06B6D4",
    accentRgb: "6,182,212",
    placeholder:
      "Pull last quarter deals above KES 2M with stalled progression and no activity in 14 days.",
    headerLine: "OPERATIONS AGENT · API-CONNECTED · KE-OPS-1188",
    maskLogs: [
      "AUTHENTICATING AGAINST WORKSPACE...",
      "CUSTOMER PII MASKED: [EMAIL→TOKEN_1188]",
      "QUERYING CRM VIA SECURE API BRIDGE...",
      "COMPUTING DEAL PROGRESSION SCORE...",
    ],
  },
};

export interface SimulatedLine {
  type: "input" | "progress" | "success" | "info" | "result" | "blank";
  text: string;
  delay: number;  // ms before this line appears
}

/**
 * Build the full scripted response for a given query + sector.
 */
export function buildSimulation(
  sector: Sector,
  userQuery: string
): SimulatedLine[] {
  const cfg = SECTORS[sector];
  const lines: SimulatedLine[] = [];

  // 1. Echo the input
  lines.push({ type: "input", text: `> INPUT: "${userQuery}"`, delay: 200 });
  lines.push({ type: "blank", text: "", delay: 200 });

  // 2. Mask logs (progress)
  cfg.maskLogs.forEach((log, i) => {
    lines.push({ type: "progress", text: log, delay: 500 + i * 350 });
  });

  lines.push({ type: "blank", text: "", delay: 300 });

  // 3. Sector-specific results
  if (sector === "healthcare") {
    lines.push({
      type: "success",
      text: "TRIAGE RECOMMENDATION:",
      delay: 400,
    });
    lines.push({
      type: "result",
      text: "  Priority: URGENT (Tier 2)",
      delay: 250,
    });
    lines.push({
      type: "result",
      text: "  Suggested: Malaria RDT + Dengue NS1 panel",
      delay: 250,
    });
    lines.push({
      type: "result",
      text: "  Refer to: Dr. [PHYSICIAN_REDACTED] — Triage Bay 3",
      delay: 250,
    });
    lines.push({ type: "blank", text: "", delay: 300 });
    lines.push({
      type: "info",
      text: "Patient data never left your compliance boundary.",
      delay: 400,
    });
  } else if (sector === "education") {
    lines.push({
      type: "success",
      text: "PREREQUISITE CHECK:",
      delay: 400,
    });
    lines.push({
      type: "result",
      text: "  CS301 requires: CS201 (Data Structures) + MATH201 (Discrete Math)",
      delay: 250,
    });
    lines.push({
      type: "result",
      text: "  Student status: ELIGIBLE — 2/2 prerequisites satisfied",
      delay: 250,
    });
    lines.push({
      type: "result",
      text: "  Recommended action: AUTO-ENROLL into CS301, Semester 2",
      delay: 250,
    });
    lines.push({ type: "blank", text: "", delay: 300 });
    lines.push({
      type: "info",
      text: "Response sourced strictly from official Registrar Handbook v2024.",
      delay: 400,
    });
  } else {
    lines.push({
      type: "success",
      text: "CRM QUERY RESULT:",
      delay: 400,
    });
    lines.push({
      type: "result",
      text: "  7 deals matched · Total value KES 24.8M",
      delay: 250,
    });
    lines.push({
      type: "result",
      text: "  Top: Acme Kenya Ltd — KES 8.4M · stalled 22 days",
      delay: 250,
    });
    lines.push({
      type: "result",
      text: "  Recommended action: Owner follow-up + Executive sponsor review",
      delay: 250,
    });
    lines.push({ type: "blank", text: "", delay: 300 });
    lines.push({
      type: "info",
      text: "Query executed via secure API bridge. Zero raw PII exposure.",
      delay: 400,
    });
  }

  return lines;
}

/**
 * Get a default suggested query per sector for the "try this" hint.
 */
export function getSuggestedQuery(sector: Sector): string {
  return SECTORS[sector].placeholder;
}