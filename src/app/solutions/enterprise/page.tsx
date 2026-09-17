import { PageShell } from "@/components/layout/PageShell";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SectorInfoPanel } from "@/components/solutions/SectorInfoPanel";
import { BeforeAfterCard } from "@/components/solutions/BeforeAfterCard";
import { SystemShowcase } from "@/components/solutions/SystemShowcase";
import { MetricsStrip } from "@/components/solutions/MetricsStrip";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { getSolution } from "@/lib/solutions-data";

export const metadata = {
  title: "Enterprise AI — Autonomous Corporate Agents | AxiomForge",
  description:
    "Eliminate system friction. Internal knowledge graphs, API-connected support agents, custom workflow orchestration.",
};

export default function EnterprisePage() {
  const data = getSolution("enterprise");
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