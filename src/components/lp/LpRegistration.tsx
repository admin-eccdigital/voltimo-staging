"use client";

import { useState, useEffect, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  MailCheck,
  ShieldCheck,
  GraduationCap,
  Phone,
} from "lucide-react";
import {
  Section,
  Eyebrow,
  Heading,
  Button,
  Input,
  Checkbox,
} from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { scrollToRegistration } from "@/lib/lp-scroll";

export function LpRegistration() {
  const [done, setDone] = useState(false);
  const [term, setTerm] = useState<string>(LP_DATA.dates[0].title);

  useEffect(() => {
    function handler(e: Event) {
      setTerm((e as CustomEvent<string>).detail);
    }
    window.addEventListener("lp-pick-term", handler);
    return () => window.removeEventListener("lp-pick-term", handler);
  }, []);

  function submit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
    scrollToRegistration();
  }

  return (
    <Section tone="light" id="registrace">
      <div className="lp-wrap">
        <div className="lp-reg">
          <div className="lp-reg__form">
            {done ? (
              <div className="lp-done">
                <span className="lp-done__ic">
                  <Check />
                </span>
                <h3>Máme to. Držte si místo.</h3>
                <p>
                  Potvrzení a všechny detaily vám pošleme e-mailem. Žádné
                  čekání na telefon, žádný tlak.
                </p>
              </div>
            ) : (
              <>
                <div className="lp-head" style={{ marginBottom: 22 }}>
                  <Eyebrow>Nezávazná rezervace</Eyebrow>
                  <Heading level={3}>
                    Držte si místo v nejbližším běhu
                  </Heading>
                </div>
                <form className="lp-form" onSubmit={submit}>
                  <div className="lp-form__row">
                    <Input
                      label="Jméno a příjmení"
                      required
                      placeholder="Jan Novák"
                      name="name"
                    />
                    <Input
                      label="Telefon"
                      required
                      type="tel"
                      placeholder="+420 ..."
                      name="phone"
                    />
                  </div>
                  <Input
                    label="E-mail"
                    type="email"
                    placeholder="jan@email.cz"
                    name="email"
                  />
                  <div className="lp-form__group">
                    <label className="lp-form__label">
                      Který termín vás láká?
                    </label>
                    <div className="lp-form__chips">
                      {LP_DATA.dates.map((t) => (
                        <button
                          type="button"
                          key={t.title}
                          className={`lp-chip${term === t.title ? " is-active" : ""}`}
                          onClick={() => setTerm(t.title)}
                        >
                          {t.title}
                        </button>
                      ))}
                      <button
                        type="button"
                        className={`lp-chip${term === "Chci jít později" ? " is-active" : ""}`}
                        onClick={() => setTerm("Chci jít později")}
                      >
                        Chci jít později
                      </button>
                    </div>
                  </div>
                  <Checkbox
                    required
                    label="Souhlasím se zpracováním osobních údajů za účelem kontaktu ohledně kurzu."
                  />
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    block
                    icon={<ArrowRight />}
                  >
                    Rezervovat termín nezávazně
                  </Button>
                  <p className="lp-form__fine">
                    Bez závazků a bez platby předem. Termín potvrdíte online,
                    bez nutnosti volat.
                  </p>
                </form>
              </>
            )}
          </div>

          <div className="lp-reg__aside">
            <ul className="lp-reassure">
              <li>
                <span className="lp-reassure__ic">
                  <MailCheck />
                </span>
                <div>
                  <strong>Potvrzení e-mailem</strong>
                  <span>
                    Žádné obvolávání. Detaily a termín vyřídíte online.
                  </span>
                </div>
              </li>
              <li>
                <span className="lp-reassure__ic">
                  <ShieldCheck />
                </span>
                <div>
                  <strong>Záruka prvního dne</strong>
                  <span>
                    Když to po prvním dni není pro vás, vrátíme peníze.
                  </span>
                </div>
              </li>
              <li>
                <span className="lp-reassure__ic">
                  <GraduationCap />
                </span>
                <div>
                  <strong>Připravíme vás krok za krokem</strong>
                  <span>
                    Ke zkoušce jdete, až na ni budete připravený.
                  </span>
                </div>
              </li>
            </ul>
            <div className="lp-reg__call">
              <small>Radši osobně?</small>
              <a href={LP_DATA.phoneHref}>
                <Phone />
                {LP_DATA.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
