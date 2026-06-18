import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

export function LpTeacher() {
  return (
    <Section tone="light">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-why">
          <div className="lp-why__media">
            <div className="lp-teacher">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/lektor.jpg`}
                alt="Mistr odborného výcviku – 30 let praxe"
                fill
                sizes="(max-width: 920px) 360px, 40vw"
                style={{ objectFit: "cover", objectPosition: "62% 30%" }}
              />
              <div className="lp-teacher__cap">
                <strong>Mistr odborného výcviku</strong>
                <span>30 let praxe v oboru</span>
              </div>
            </div>
          </div>

          <div>
            <div className="lp-head">
              <Eyebrow>Proč 10 dní stačí</Eyebrow>
              <Heading level={2}>30 let praxe. Zbavených balastu.</Heading>
            </div>
            <p className="lp-why__lead">
              Náš lektor učí odborný výcvik 30 let. Přesně ví, co se ve škole
              učí zbytečně a co potřebujete hned první den v práci.
            </p>
            <p className="lp-why__p">
              Těch 30 let vydestiloval do 40 hodin praktického výcviku. Žádné
              měsíce u videí a teorie – jen to, co fakt potřebujete do práce i
              ke zkoušce.
            </p>

            <div className="lp-why__distill">
              <div className="lp-distill-card">
                <strong>30 let</strong>
                <small>praxe v oboru</small>
              </div>
              <span className="lp-distill-arrow">
                <ArrowRight />
              </span>
              <div className="lp-distill-card lp-distill-card--hi">
                <strong>40 hodin</strong>
                <small>jen to podstatné</small>
              </div>
            </div>

            <p className="lp-why__punch">
              <strong>
                Není to méně než konkurence – je to to nejdůležitější z 30 let.
              </strong>{" "}
              Škola vás učí rok to, co u nás dáte za 10 dní prakticky.
            </p>
          </div>
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
