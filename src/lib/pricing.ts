export type Sector = "healthcare" | "education" | "enterprise";

export const USD_RATE = 129;

export interface SectorPricing {
  key: Sector;
  label: string;
  accent: string;
  accentRgb: string;

  min: number;
  max: number;
  step: number;
  defaultValue: number;
  unit: string;

  implementationBase: number;
  monthlyBase: number;
  perUnitMonthly: number;

  includes: string[];
}

export const PRICING: Record<Sector, SectorPricing> = {
  healthcare: {
    key: "healthcare",
    label: "Healthcare",
    accent: "#047857",
    accentRgb: "4,120,87",
    min: 10,
    max: 800,
    step: 10,
    defaultValue: 240,
    unit: "active hospital beds",
    implementationBase: 320_000,
    monthlyBase: 24_000,
    perUnitMonthly: 180,
    includes: [
      "Isolated tenant container (KE-MED region)",
      "ODPC + HIPAA compliance audit trail",
      "3 custom clinical workflows",
      "Clinical scribe deployment",
      "24/7 monitored uptime SLA 99.95%",
      "Quarterly security attestation",
    ],
  },
  education: {
    key: "education",
    label: "Education",
    accent: "#1E40AF",
    accentRgb: "30,64,175",
    min: 100,
    max: 25_000,
    step: 100,
    defaultValue: 3_500,
    unit: "enrolled students",
    implementationBase: 180_000,
    monthlyBase: 18_000,
    perUnitMonthly: 22,
    includes: [
      "Isolated tenant container (KE-EDU region)",
      "FERPA-aligned consent flow",
      "Syllabus-locked academic agents",
      "Automated admissions registrar",
      "Registration-cycle autoscaling",
      "Quarterly security attestation",
    ],
  },
  enterprise: {
    key: "enterprise",
    label: "Enterprise",
    accent: "#0E7490",
    accentRgb: "14,116,144",
    min: 50_000,
    max: 5_000_000,
    step: 50_000,
    defaultValue: 500_000,
    unit: "monthly API calls",
    implementationBase: 420_000,
    monthlyBase: 38_000,
    perUnitMonthly: 0.28,
    includes: [
      "Isolated tenant container (KE-OPS region)",
      "Slack / Notion / Google Workspace integration",
      "Internal knowledge graph setup",
      "API-connected external support agents",
      "Custom agent forge (2 workflows)",
      "Quarterly security attestation",
    ],
  },
};

export interface PriceBreakdown {
  implementation: number;
  monthly: number;
  firstYearTotal: number;
  firstYearUSD: number;
  unitValue: number;
  unitLabel: string;
}

export function computePrice(sector: Sector, unitValue: number): PriceBreakdown {
  const cfg = PRICING[sector];
  const monthly = cfg.monthlyBase + unitValue * cfg.perUnitMonthly;
  const firstYearTotal = cfg.implementationBase + monthly * 12;
  return {
    implementation: cfg.implementationBase,
    monthly,
    firstYearTotal,
    firstYearUSD: firstYearTotal / USD_RATE,
    unitValue,
    unitLabel: cfg.unit,
  };
}

export function formatKES(n: number): string {
  return `KES ${Math.round(n).toLocaleString("en-KE")}`;
}

export function formatUSD(n: number): string {
  return `$${Math.round(n).toLocaleString("en-US")}`;
}

export function formatNumber(n: number): string {
  return Math.round(n).toLocaleString("en-KE");
}