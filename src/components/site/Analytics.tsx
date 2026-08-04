"use client";

import { useEffect } from "react";
import { GA_ID } from "@/lib/site";
import { CONSENT_EVENT, getConsent } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let started = false;

function startGA() {
  if (started || !GA_ID) return;
  started = true;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  const dataLayer = (window.dataLayer = window.dataLayer || []);
  const gtag = (...args: unknown[]) => {
    dataLayer.push(args);
  };
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
}

/** Načte GA4 teprve po udělení souhlasu. Bez GA_ID nedělá nic. */
export function Analytics() {
  useEffect(() => {
    if (getConsent() === "granted") startGA();
    const onChange = () => {
      if (getConsent() === "granted") startGA();
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);
  return null;
}
