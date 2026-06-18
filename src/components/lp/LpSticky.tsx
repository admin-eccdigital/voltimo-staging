"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/brand";
import { scrollToRegistration } from "@/lib/lp-scroll";

export function LpSticky() {
  return (
    <div className="lp-sticky">
      <div className="lp-sticky__txt">
        <strong>Úplná kvalifikace za 10 dní</strong>
        <span>Nezávazně · termín potvrdíte online</span>
      </div>
      <Button variant="cta" icon={<ArrowRight />} onClick={scrollToRegistration}>
        Rezervovat termín
      </Button>
    </div>
  );
}
