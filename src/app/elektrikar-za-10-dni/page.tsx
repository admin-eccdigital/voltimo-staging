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
      <a
        href="#hlavni-obsah"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-voltimo-yellow focus:text-voltimo-primary focus:px-4 focus:py-2 focus:rounded-voltimo-md focus:font-semibold"
      >
        Přeskočit na obsah
      </a>
      <LpHeader />
      <main id="hlavni-obsah">
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
