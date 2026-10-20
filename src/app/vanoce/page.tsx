import type { Metadata } from "next";
import {
  Snowflake, Gift, ArrowRight, Check, CalendarClock, Lock, TrendingUp, Sparkles,
} from "lucide-react";
import { Section, Eyebrow, Heading, Button, YellowLabel, StatCircle } from "@/components/brand";
import { FadeIn } from "@/components/lp/FadeIn";
import { LP_DATA } from "@/lib/lp-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Dej si pod stromeček posun. Kurzy Voltimo 2027",
  description:
    "Elektrikář i chlazení jsou letos vyprodané. Zajistěte si místo na jarní běhy 2027 nebo darujte kurz pod stromeček. Rezervace nezávazná, cena se nezvyšuje.",
};

const ELEKTRO = LP_DATA.price; // 48 400 Kč s DPH / 40 000 bez DPH
const ELEKTRO_2027 = LP_DATA.dates.filter((d) => d.title.includes("2027"));

const CHL_2027 = [
  { title: "Lednový běh 2027", range: "Zkoušky 13. – 14. 1. 2027" },
  { title: "Únorový běh 2027", range: "Zkoušky 10. – 11. 2. 2027" },
];

const WHY = [
  {
    ic: Sparkles,
    t: "Letos už se nedostanete",
    d: "Elektrikář i chlazení jsou do konce roku vyprodané. Jarní běhy 2027 se plní. Kdo chce na jaro, bere místo teď.",
  },
  {
    ic: Lock,
    t: "Cena se nezvyšuje",
    d: "Co vidíte dnes, to platí i v roce 2027. Na nic nečekáte, o nic nepřijdete.",
  },
  {
    ic: Check,
    t: "Rezervace nic nestojí",
    d: "Místo si zamluvíte nezávazně, teď neplatíte ani korunu. Kurz se hradí až fakturou před začátkem.",
  },
];

export default function VanocePage() {
  return (
    <>
      {/* HERO */}
      <section className="vn-hero">
        <div className="vn-hero__snow" aria-hidden="true" />
        <div className="lp-wrap vn-hero__inner">
          <span className="vn-eyebrow">
            <Snowflake size={16} /> Vánoce ve Voltimu
          </span>
          <h1 className="vn-hero__title">
            <YellowLabel lines={["Letos plno.", "Posuň se v 2027."]} size="md" />
          </h1>
          <p className="vn-hero__lead">
            Elektrikář i chlazení jsou do konce roku vyprodané. Nejlepší dárek ale
            nevydrží jen do Silvestra. Zajistěte si (nebo někomu blízkému) místo na
            jarní běh 2027 a začněte nový rok posunem, který vydrží.
          </p>
          <div className="vn-hero__cta">
            <Button variant="cta" size="lg" icon={<ArrowRight />} href="#kurzy">
              Zamluvit místo na 2027
            </Button>
            <Button variant="outline" size="lg" className="chl-btn-ondark" href={`${basePath}/kontakt/`}>
              Darovat kurz pod stromeček
            </Button>
          </div>
          <div className="vn-hero__stats">
            <StatCircle value="2026" label="vyprodáno" variant="yellow" />
            <StatCircle value="2027" label="běhy se plní" variant="blue" />
            <StatCircle value="0 Kč" label="při rezervaci" variant="outline" />
          </div>
        </div>
      </section>

      {/* PROČ TEĎ */}
      <Section tone="light">
        <FadeIn>
          <div className="lp-wrap">
            <div className="lp-head lp-head--center">
              <Eyebrow>Proč to řešit teď</Eyebrow>
              <Heading level={2}>Vyprodáno není konec. Je to důvod být rychlý.</Heading>
            </div>
            <div className="vn-why">
              {WHY.map((w) => (
                <div className="vn-why__card" key={w.t}>
                  <span className="vn-why__ic"><w.ic size={20} /></span>
                  <strong>{w.t}</strong>
                  <p>{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* DÁREK */}
      <Section tone="subtle">
        <FadeIn>
          <div className="lp-wrap">
            <div className="vn-gift">
              <div className="vn-gift__body">
                <span className="vn-gift__tag"><Gift size={16} /> Dárkový poukaz</span>
                <Heading level={2}>Dej pod stromeček posun, ne další krám.</Heading>
                <p>
                  Poukaz na kurz Elektrikář nebo Chlazení. Rozbalí se u stromečku,
                  na kurz jde v novém roce. Dárek, který mění, čím člověk je, ne jen
                  co má v šuplíku.
                </p>
                <Button variant="cta" icon={<ArrowRight />} href={`${basePath}/kontakt/`}>
                  Napsat si o poukaz
                </Button>
              </div>
              <div className="vn-gift__art" aria-hidden="true">
                <Gift size={88} />
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* KURZY 2027 */}
      <Section tone="light" id="kurzy">
        <FadeIn>
          <div className="lp-wrap">
            <div className="lp-head lp-head--center">
              <Eyebrow>Termíny 2027</Eyebrow>
              <Heading level={2}>Vyberte si běh a zamluvte místo.</Heading>
              <p className="lp-head__sub">
                Leden, únor a další jarní termíny. Rezervace nezávazná.
              </p>
            </div>

            <div className="vn-courses">
              {/* ELEKTRO */}
              <div className="vn-course">
                <span className="vn-course__kicker">Úplná kvalifikace · 5 PK</span>
                <h3 className="vn-course__title">Elektrikář za 10 dní</h3>
                <p className="vn-course__price">
                  {ELEKTRO.current.toLocaleString("cs-CZ")} Kč
                  <small>{(40_000).toLocaleString("cs-CZ")} Kč bez DPH</small>
                </p>
                <ul className="vn-course__dates">
                  {ELEKTRO_2027.map((d) => (
                    <li key={d.title}>
                      <CalendarClock size={15} />
                      <span><strong>{d.title}</strong> · {d.range}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="cta" block icon={<ArrowRight />} href={`${basePath}/elektrikar-za-10-dni/#registrace`}>
                  Zamluvit místo
                </Button>
              </div>

              {/* CHLAZENÍ */}
              <div className="vn-course">
                <span className="vn-course__kicker">23-054 + 23-055</span>
                <h3 className="vn-course__title">Chlazení za 4 dny</h3>
                <p className="vn-course__price">
                  26 620 Kč
                  <small>22 000 Kč bez DPH</small>
                </p>
                <ul className="vn-course__dates">
                  {CHL_2027.map((d) => (
                    <li key={d.title}>
                      <CalendarClock size={15} />
                      <span><strong>{d.title}</strong> · {d.range}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="cta" block icon={<ArrowRight />} href={`${basePath}/chlazeni/#poptavka`}>
                  Zamluvit místo
                </Button>
              </div>
            </div>

            <p className="vn-note">
              <TrendingUp size={15} /> Kdo se ozve do 24. 12., vybere si termín přednostně.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ZÁVĚR */}
      <Section tone="dark">
        <div className="lp-wrap vn-final">
          <Heading level={2}>Nový rok, nová kvalifikace.</Heading>
          <p>Letos je plno. Jaro 2027 je na dosah. Zamluvte si místo, než ho vezme někdo jiný.</p>
          <Button variant="cta" size="lg" icon={<ArrowRight />} href="#kurzy">
            Zamluvit místo na 2027
          </Button>
        </div>
      </Section>
    </>
  );
}
