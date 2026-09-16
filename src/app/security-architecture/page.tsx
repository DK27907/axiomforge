import { PageShell } from "@/components/layout/PageShell";
import { VaultHero } from "@/components/vault/VaultHero";
import { IsolationDiagram } from "@/components/vault/IsolationDiagram";
import { ComplianceLedger } from "@/components/vault/ComplianceLedger";
import { GuardrailsList } from "@/components/vault/GuardrailsList";
import { VaultCTA } from "@/components/vault/VaultCTA";

export const metadata = {
  title: "Architecture Vault — Data Isolation Audit | AxiomForge",
  description:
    "Open-source data isolation audit. Physically separated tenant containers, ODPC registration, SOC 2 Type II, HIPAA aligned. Verify our guardrails.",
};

export default function ArchitectureVaultPage() {
  return (
    <PageShell>
      <VaultHero />
      <IsolationDiagram />
      <ComplianceLedger />
      <GuardrailsList />
      <VaultCTA />
    </PageShell>
  );
}