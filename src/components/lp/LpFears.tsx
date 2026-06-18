import { type ReactNode } from "react";
import { HelpCircle, ShieldCheck } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

interface Fear {
  q: string;
  a: ReactNode;
  tag: string;
}

const FEARS: Fear[] = [
  {
    q: "Nemám výuční list. Vezmou mě?",
    a: (
      <>
        Ano. Na profesní kvalifikaci výuční list{" "}
        <strong>nepotřebujete</strong>. Stačí, že jste manuálně zručný a chcete
        se to naučit.
      </>
    ),
    tag: "Bez školy to jde",
  },
  {
    q: "Dám tu zkoušku?",
    a: (
      <>
        Připravíme vás prakticky na všech 5 kvalifikací, krok za krokem. Ke
        zkoušce jdete až ve chvíli, kdy na ni budete{" "}
        <strong>připravený</strong>.
      </>
    ),
    tag: "96 % úspěšnost",
  },
  {
    q: "Co když se nezúčastním?",
    a: (
      <>
        Záruka prvního dne: když po prvním dni zjistíte, že to není pro vás,{" "}
        <strong>vrátíme vám peníze</strong>.
      </>
    ),
    tag: "Záruka vrácení peněz",
  },
];

export function LpFears() {
  return (
    <Section tone="subtle">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head">
          <Eyebrow>Bez obav</Eyebrow>
          <Heading level={2}>Tři věci, co tě nejspíš brzdí.</Heading>
        </div>
        <div className="lp-fears">
          {FEARS.map((f) => (
            <div className="lp-fear" key={f.q}>
              <h3 className="lp-fear__q">
                <span className="lp-fear__q-ic">
                  <HelpCircle />
                </span>
                {f.q}
              </h3>
              <p className="lp-fear__a">{f.a}</p>
              <span className="lp-fear__tag">
                <ShieldCheck />
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
