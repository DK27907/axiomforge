import { PageShell } from "@/components/layout/PageShell";
import { HeroBanner } from "@/components/home/HeroBanner";
import { InteractiveSimulator } from "@/components/home/InteractiveSimulator";
import { PricingEngine } from "@/components/home/PricingEngine";
import { DeploymentTrustStrip } from "@/components/home/DeploymentTrustStrip";

export default function Home() {
  return (
    <PageShell>
      <HeroBanner />
      <InteractiveSimulator />
      <PricingEngine />
      <DeploymentTrustStrip />
    </PageShell>
  );
}