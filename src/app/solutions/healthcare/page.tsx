import { PageShell } from "@/components/layout/PageShell";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SectorInfoPanel } from "@/components/solutions/SectorInfoPanel";
import { BeforeAfterCard } from "@/components/solutions/BeforeAfterCard";
import { SystemShowcase } from "@/components/solutions/SystemShowcase";
import { MetricsStrip } from "@/components/solutions/MetricsStrip";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { getSolution } from "@/lib/solutions-data";

export const metadata = {
  title: "Healthcare AI — HIPAA & ODPC Compliant | AxiomForge",
  description:
    "PHI-isolated healthcare AI for Kenyan hospitals. Autonomous triage agents, clinical scribes, ODPC audit console. No sales call required.",
};

export default function HealthcarePage() {
  const data = getSolution("healthcare");
  return (
    <PageShell>
      <SolutionHero data={data} />
      <SectorInfoPanel data={data} />
      <BeforeAfterCard data={data} />
      <SystemShowcase data={data} />
      <MetricsStrip data={data} />
      <SolutionCTA data={data} />
    </PageShell>
  );
}