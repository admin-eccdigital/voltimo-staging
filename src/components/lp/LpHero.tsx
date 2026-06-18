"use client";

import { MapPin, ArrowRight } from "lucide-react";
import { Button, YellowLabel, StatCircle } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { scrollToRegistration } from "@/lib/lp-scroll";

export function LpHero() {
  return (
    <section className="lp-hero">
      <div
        className="lp-hero__media"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/03-elektrikar-pri-praci-2.jpg)`,
        }}
      />
      <div className="lp-hero__overlay" />
      <div className="lp-hero__inner">
        <span className="lp-hero__eyebrow">
          <MapPin /> Prezenční výcvik v Přešticích · Plzeňsko
        </span>

        <span className="lp-hero__tabs">
          <YellowLabel lines={["Ne škola.", "Výcvik."]} size="lg" />
        </span>

        <p className="lp-hero__claim">Pro šikovné lidi, kteří chtějí papír.</p>

        <p className="lp-hero__lead">
          Úplná kvalifikace Elektrikář za 10 dní výcviku. Žádné měsíce u videí
          a teorie – jen praxe, zkouška §6 a státní osvědčení. Nemusíte mít
          školu, stačí mít ruce a chuť.
        </p>

        <div className="lp-hero__cta">
          <Button
            variant="cta"
            size="lg"
            icon={<ArrowRight />}
            onClick={scrollToRegistration}
          >
            Rezervovat termín
          </Button>
          <span className="lp-hero__note">
            Nezávazně online ·{" "}
            <strong>vše vyřídíte bez telefonu</strong>
          </span>
        </div>

        <div className="lp-urgency">
          <span className="lp-urgency__dot" />
          <span>Ušetříte {LP_DATA.price.discount.toLocaleString("cs-CZ")} Kč</span>
          <span className="lp-urgency__chip">
            při registraci do {LP_DATA.price.deadline}
          </span>
        </div>

        <div className="lp-hero__trust">
          <StatCircle value="10" label="dní do osvědčení" variant="yellow" />
          <StatCircle value="5" label="profesních kvalifikací" variant="blue" />
          <StatCircle value="96" label="% úspěšnost u zkoušky" variant="outline" />
        </div>
      </div>
    </section>
  );
}
