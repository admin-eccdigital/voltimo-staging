"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/brand";

export function ChlSticky() {
  return (
    <div className="lp-sticky">
      <div className="lp-sticky__txt">
        <strong>Dvě kvalifikace NSK za 4 dny</strong>
        <span>20 000 Kč se slevou 20 % · do 31. 8. 2026</span>
      </div>
      <Button variant="cta" icon={<ArrowRight />} href="#poptavka">
        Poptat termín
      </Button>
    </div>
  );
}
