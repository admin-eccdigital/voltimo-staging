import Image from "next/image";
import { Play } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";

const VIDEOS = [
  {
    name: "[ Jméno absolventa ]",
    role: "Dnes elektrikář na živnost",
    quote:
      "Dělal jsem u elektriky roky bez papíru. Za 10 dní jsem měl osvědčení.",
    photo: "/photos/03-elektrikar-pri-praci-2.jpg",
    len: "2:14",
  },
  {
    name: "[ Jméno absolventa ]",
    role: "Montér FV → kvalifikovaný elektrikář",
    quote:
      "Bál jsem se zkoušky zbytečně. Příprava seděla přesně na to, co po mě chtěli.",
    photo: "/photos/06-foto-landscape-doplnek.jpg",
    len: "1:48",
  },
];

export function LpProof() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <Section tone="light">
      <div className="lp-wrap">
        <div className="lp-head lp-head--center">
          <Eyebrow>Důkaz, ne sliby</Eyebrow>
          <Heading level={2}>Čísla a lidé, co to mají za sebou.</Heading>
        </div>

        <div className="lp-proof-nums">
          <div className="lp-num">
            <strong>{LP_DATA.stats.graduates}</strong>
            <small>vyškolených absolventů</small>
          </div>
          <div className="lp-num">
            <strong>{LP_DATA.stats.successRate}</strong>
            <small>úspěšnost u zkoušky</small>
          </div>
          <div className="lp-num">
            <strong>{LP_DATA.stats.teacherExperience}</strong>
            <small>praxe lektora v oboru</small>
          </div>
        </div>

        <div className="lp-videos">
          {VIDEOS.map((v, i) => (
            <div className="lp-video" key={i}>
              <div className="lp-video__thumb">
                <Image
                  src={`${base}${v.photo}`}
                  alt={`Videoreference – ${v.name}`}
                  fill
                  sizes="(max-width: 920px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="lp-video__play">
                  <Play />
                </span>
                <span className="lp-video__badge">
                  Videoreference · {v.len}
                </span>
              </div>
              <div className="lp-video__cap">
                <strong>{v.name}</strong>
                <span>{v.role}</span>
                <p>„{v.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
