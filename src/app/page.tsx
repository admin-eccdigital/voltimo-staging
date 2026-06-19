import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, GraduationCap, Check } from "lucide-react";
import { Button, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "@/components/lp/FadeIn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Voltimo — Středisko profesního vzdělávání",
  description:
    "Opravdová kvalifikace. Opravdové řemeslo. Získejte celostátní osvědčení a práci, která má budoucnost. Přeštice, Plzeňsko.",
};

const STEPS: readonly { title: string; text: string }[] = [
  {
    title: "Vyberte si profesní kvalifikaci",
    text: "Zvolte obor, který odpovídá tomu, co umíte nebo co se chcete naučit. Pomůžeme vám vybrat správnou cestu.",
  },
  {
    title: "Příprava na míru",
    text: "Dostanete přístup ke studijním materiálům, konzultacím, modelovým situacím. Efektivně.",
  },
  {
    title: "Zkouška podle NSK",
    text: "Zkouška probíhá podle státního standardu. U nás, prakticky a s důrazem na to, co skutečně děláte v praxi.",
  },
  {
    title: "Osvědčení a další cesta",
    text: "Získáte Osvědčení o získání profesní kvalifikace. A můžete pokračovat dál – třeba až k úplné profesní kvalifikaci a tím vlastnímu podnikání.",
  },
];

const SOUL_COLS: readonly string[] = [
  "Voltimo nevzniklo jako další vzdělávací agentura. Vzniklo z přesvědčení, že řemeslo má smysl – a že šikovní lidé si zaslouží papír, který jejich práci konečně uzná.",
  "Učíme na reálných zařízeních, ne na teorii z prezentací. Zapojíte ruce od prvního dne a každý krok vám vysvětlíme tak, abyste mu skutečně rozuměli.",
  "Nejsme anonymní instituce. Jsme lidé z oboru, kteří vás provedou od první otázky až po státní osvědčení – a zůstanou vám oporou i potom.",
];

const ZIGZAG: readonly {
  num: string;
  title: string;
  text: string;
  img: string;
  alt: string;
  imgPosition?: string;
  imgSide: "left" | "right";
}[] = [
  {
    num: "01",
    title: "Lidský přístup",
    text: 'Nevyžadujeme zdlouhavé studium ani „razítko pro razítko". Vysvětlíme vám, co a proč děláte.',
    img: "lektor-panel.jpg",
    alt: "Lektor s žákem u panelu",
    imgSide: "left",
  },
  {
    num: "02",
    title: "Praxe bez obalu",
    text: "U nás se neučíte zbytečnosti. Všechno, co děláte, má přímý dopad na reálné zakázky.",
    img: "hero-vycvik.jpg",
    alt: "Elektrikář při práci na panelu",
    imgPosition: "60% center",
    imgSide: "right",
  },
  {
    num: "03",
    title: "Připravíme vás na 100 %",
    text: "Zkouška není strašák, když víte, co čekat. Dostanete jasné zadání, praktický trénink, zpětnou vazbu.",
    img: "priprava-zkouska.jpg",
    alt: "Příprava ke zkoušce",
    imgSide: "left",
  },
  {
    num: "04",
    title: "Rekvalifikace i restart",
    text: "Kurzy připravujeme tak, aby odpovídaly i požadavkům úřadů práce. Pomůžeme vám s administrací i dotací.",
    img: "studium-ucebna.jpg",
    alt: "Studium v učebně",
    imgSide: "right",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — Split Spotlight */}
      <section className="hp-hero">
        <div className="hp-hero__grid">
          <div className="hp-hero__text">
            <span className="hp-hero__eyebrow">
              <GraduationCap size={17} /> Středisko profesního vzdělávání
            </span>
            <div className="hp-hero__labels">
              <span className="hp-hero__label hp-hero__label--top">
                Opravdová kvalifikace.
              </span>
              <span className="hp-hero__label hp-hero__label--bottom">
                Opravdové řemeslo.
              </span>
            </div>
            <p className="hp-hero__lead">
              Využijte profesní kvalifikace k tomu, co dává smysl – získat
              celostátní osvědčení a práci, která má budoucnost.
            </p>
            <div className="hp-hero__actions">
              <Button
                variant="cta"
                size="lg"
                icon={<ArrowRight />}
                href={`${basePath}/elektrikar-za-10-dni/`}
              >
                Vybrat kurz
              </Button>
              <span className="hp-hero__location">
                Husova 380, Přeštice · Plzeňsko
              </span>
            </div>
          </div>
          <div className="hp-hero__photo">
            <Image
              src={`${basePath}/photos/homepage/hero-vycvik.jpg`}
              alt="Elektrikář při praktickém výcviku"
              width={800}
              height={600}
              priority
              className="hp-hero__img"
            />
            <div className="hp-hero__gradient" />
          </div>
        </div>
      </section>

      {/* HLAVNÍ PROGRAM */}
      <section className="hp-program">
        <div className="hp-program__inner">
          <FadeIn>
            <div className="hp-program__card">
              <div className="hp-program__photo">
                <Image
                  src={`${basePath}/photos/homepage/kurz-rozvadec.jpg`}
                  alt="Praktický výcvik na rozvaděči"
                  width={600}
                  height={500}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 40%",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="hp-program__stat">
                  <span className="hp-program__stat-value">10</span>
                  <span className="hp-program__stat-label">
                    dní do osvědčení
                  </span>
                </div>
              </div>
              <div className="hp-program__content">
                <Eyebrow tone="ondark">Náš hlavní program</Eyebrow>
                <h2 className="hp-program__h2">Elektrikář za 10 dní</h2>
                <p className="hp-program__desc">
                  Úplná kvalifikace Elektrikář za 10 dní výcviku. Žádné měsíce
                  u videí a teorie – jen praxe, zkouška §6 a státní osvědčení.
                </p>
                <div className="hp-program__features">
                  <span className="hp-program__feature">
                    <Check size={16} /> 40 hodin praxe
                  </span>
                  <span className="hp-program__feature">
                    <Check size={16} /> Zkouška §6
                  </span>
                  <span className="hp-program__feature">
                    <Check size={16} /> Státní osvědčení
                  </span>
                </div>
                <Button
                  variant="cta"
                  size="lg"
                  icon={<ArrowRight />}
                  href={`${basePath}/elektrikar-za-10-dni/`}
                >
                  Zjistit více
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DUŠE ŠKOLY */}
      <section className="hp-soul">
        <div className="hp-soul__decor" aria-hidden="true">
          <div className="hp-soul__glow" />
          <svg
            className="hp-soul__shape hp-soul__shape--check"
            viewBox="0 0 100 100"
          >
            <path
              d="M18 54 L32 41 L47 59 L79 18 L93 30 L47 83 Z"
              fill="#F9DE74"
            />
          </svg>
          <svg
            className="hp-soul__shape hp-soul__shape--circle"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#F9DE74"
              strokeWidth="5"
            />
          </svg>
        </div>
        <div className="hp-soul__inner">
          <FadeIn>
            <Eyebrow tone="ondark" className="hp-soul__eyebrow">
              O nás
            </Eyebrow>
          </FadeIn>
          <FadeIn>
            <blockquote className="hp-soul__quote">
              „Jsme malá škola s{" "}
              <span className="hp-soul__accent">velkým záměrem</span>: pomáhat
              lidem získat kvalifikaci v tom, co opravdu umí – nebo chtějí
              umět."
            </blockquote>
          </FadeIn>
          <div className="hp-soul__cols">
            {SOUL_COLS.map((text, i) => (
              <FadeIn key={i}>
                <p className="hp-soul__col">{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* JAK TO FUNGUJE */}
      <section className="hp-steps">
        <div className="hp-steps__inner">
          <FadeIn>
            <div className="hp-steps__head">
              <Eyebrow>Jak to funguje</Eyebrow>
              <Heading as="h2">
                Od rozhodnutí k osvědčení ve čtyřech krocích.
              </Heading>
            </div>
          </FadeIn>
          <ol className="hp-steps__list">
            {STEPS.map((step, i) => (
              <FadeIn key={i}>
                <li className="hp-steps__item">
                  <div className="hp-steps__bullet-col">
                    <span
                      className={`hp-steps__num${i === 3 ? " hp-steps__num--last" : ""}`}
                    >
                      {i + 1}
                    </span>
                    {i < 3 && <span className="hp-steps__line" />}
                  </div>
                  <div className="hp-steps__body">
                    <h3 className="hp-steps__title">{step.title}</h3>
                    <p className="hp-steps__text">{step.text}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* PROČ SI VYBRAT — ZIGZAG */}
      <section className="hp-zigzag">
        <div className="hp-zigzag__inner">
          <FadeIn>
            <div className="hp-zigzag__head">
              <Eyebrow>Proč si vybrat naši školu</Eyebrow>
              <Heading as="h2">
                Čtyři důvody, proč to u nás dává smysl.
              </Heading>
            </div>
          </FadeIn>
          <div className="hp-zigzag__items">
            {ZIGZAG.map((item) => (
              <FadeIn key={item.num}>
                <div
                  className={`hp-zigzag__row${item.imgSide === "right" ? " hp-zigzag__row--reverse" : ""}`}
                >
                  <div className="hp-zigzag__img">
                    <Image
                      src={`${basePath}/photos/homepage/${item.img}`}
                      alt={item.alt}
                      width={600}
                      height={450}
                      style={{
                        objectFit: "cover",
                        objectPosition: item.imgPosition ?? "center",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="hp-zigzag__text">
                    <span className="hp-zigzag__num">{item.num}</span>
                    <h3 className="hp-zigzag__title">{item.title}</h3>
                    <p className="hp-zigzag__desc">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hp-cta">
        <FadeIn>
          <div className="hp-cta__inner">
            <h2 className="hp-cta__h2">Připraveni začít?</h2>
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight />}
              href={`${basePath}/elektrikar-za-10-dni/#registrace`}
            >
              Rezervovat termín
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
