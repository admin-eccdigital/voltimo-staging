import type { Metadata } from "next";
import {
  LpHeader,
  LpSticky,
  LpHero,
  LpOutcome,
  LpAudience,
  LpTeacher,
  LpHow,
  LpDates,
  LpPrice,
  LpFears,
  LpProof,
  LpEdge,
  LpRegistration,
  LpFooter,
} from "@/components/lp";

export const metadata: Metadata = {
  title: "Elektrikář za 10 dní — Voltimo",
  description:
    "Úplná kvalifikace Elektrikář za 10 dní výcviku. Praxe, zkouška §6 a státní osvědčení. Prezenční výcvik v Přešticích.",
};

export default function ElektrikarPage() {
  return (
    <>
      <LpHeader />
      <main>
        <LpHero />
        <LpOutcome />
        <LpAudience />
        <LpTeacher />
        <LpHow />
        <LpDates />
        <LpPrice />
        <LpFears />
        <LpProof />
        <LpEdge />
        <LpRegistration />
      </main>
      <LpFooter />
      <LpSticky />
    </>
  );
}
