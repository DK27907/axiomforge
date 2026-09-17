import { PageShell } from "@/components/layout/PageShell";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SectorInfoPanel } from "@/components/solutions/SectorInfoPanel";
import { BeforeAfterCard } from "@/components/solutions/BeforeAfterCard";
import { SystemShowcase } from "@/components/solutions/SystemShowcase";
import { MetricsStrip } from "@/components/solutions/MetricsStrip";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { getSolution } from "@/lib/solutions-data";

export const metadata = {
  title: "Academic AI — FERPA-Aligned Campus Scale | AxiomForge",
  description:
    "Syllabus-locked academic AI for Kenyan universities and schools. Admissions automation, registrar agents, registration-cycle autoscaling.",
};

export default function EducationPage() {
  const data = getSolution("education");
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