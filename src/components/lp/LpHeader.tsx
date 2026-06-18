"use client";

import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { scrollToRegistration } from "@/lib/lp-scroll";
import { LpLogo } from "./LpLogo";

export function LpHeader() {
  return (
    <header className="lp-header">
      <div className="lp-header__inner">
        <a
          className="lp-header__logo"
          href="#"
          aria-label="Voltimo — výcvik elektrikářů"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <LpLogo height={34} />
        </a>
        <span className="lp-header__spacer" />
        <a className="lp-header__phone" href={LP_DATA.phoneHref}>
          <Phone />
          <span>{LP_DATA.phone}</span>
        </a>
        <Button
          variant="cta"
          size="sm"
          icon={<ArrowRight />}
          onClick={scrollToRegistration}
        >
          Rezervovat termín
        </Button>
      </div>
    </header>
  );
}
