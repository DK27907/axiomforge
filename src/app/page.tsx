import { PageShell } from "@/components/layout/PageShell";
import { HeroBanner } from "@/components/home/HeroBanner";
import { InteractiveSimulator } from "@/components/home/InteractiveSimulator";

export default function Home() {
  return (
    <PageShell>
      <HeroBanner />
      <InteractiveSimulator />
    </PageShell>
  );
}