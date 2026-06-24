"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { FadeIn } from "./FadeIn";

const VIDEOS = [
  {
    heading: "Změna oboru – i kvůli AI",
    quote:
      "Přemýšlel jsem o změně oboru, i kvůli AI – a elektriku snad nahradit nemůže. Za pět týdnů jsem si znalosti ucelil; po malých kouscích z internetu to není ono. S přístupem pana lektora zkouška nebyla těžká.",
    video: "/videos/videorecenze-2.mp4",
    poster: "/videos/videorecenze-2.jpg",
    len: "1:04",
  },
  {
    heading: "Chtěl jsem elektrice rozumět sám",
    quote:
      "Zaujala mě elektrika – je to kombinace, zapojíte hlavu i zručnost. Díky přípravě během těch pěti týdnů šla zkouška složit jednodušeji, než jsem čekal. A ideální je, že si to, co si přečtete, hned vyzkoušíte v praxi na panelech.",
    video: "/videos/videorecenze-1.mp4",
    poster: "/videos/videorecenze-1.jpg",
    len: "1:06",
  },
];

function VideoCard({ v }: { v: (typeof VIDEOS)[number] }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [playing, setPlaying] = useState(false);

  return (
    <div className="lp-video">
      <div
        className={`lp-video__thumb${playing ? " is-playing" : ""}`}
        onClick={() => !playing && setPlaying(true)}
      >
        {playing ? (
          <video
            src={`${base}${v.video}`}
            poster={`${base}${v.poster}`}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <>
            <Image
              src={`${base}${v.poster}`}
              alt={`Videoreference – ${v.heading}`}
              fill
              sizes="(max-width: 920px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <button
              type="button"
              className="lp-video__play"
              aria-label={`Přehrát videoreferenci – ${v.heading}`}
            >
              <Play />
            </button>
            <span className="lp-video__badge">Videoreference · {v.len}</span>
          </>
        )}
      </div>
      <div className="lp-video__cap">
        <strong>{v.heading}</strong>
        <p>„{v.quote}"</p>
      </div>
    </div>
  );
}

export function LpProof() {
  return (
    <Section tone="light">
      <FadeIn>
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
            <VideoCard v={v} key={i} />
          ))}
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
