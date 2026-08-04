"use client";

import { useEffect, useState } from "react";
import { BASE_PATH } from "@/lib/site";
import {
  getConsent,
  setConsent,
  OPEN_SETTINGS_EVENT,
  type ConsentValue,
} from "@/lib/consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  if (!open) return null;

  function choose(value: ConsentValue) {
    setConsent(value);
    setOpen(false);
  }

  return (
    <div
      className="cookie-bar"
      role="dialog"
      aria-label="Souhlas s cookies"
      aria-live="polite"
    >
      <div className="cookie-bar__inner">
        <p className="cookie-bar__text">
          Používáme nezbytné cookies pro fungování webu a – s vaším souhlasem –
          analytické cookies pro měření návštěvnosti. Více v{" "}
          <a href={`${BASE_PATH}/gdpr/`}>Zásadách zpracování osobních údajů</a>.
        </p>
        <div className="cookie-bar__actions">
          <button
            type="button"
            className="cookie-bar__btn cookie-bar__btn--ghost"
            onClick={() => choose("denied")}
          >
            Odmítnout
          </button>
          <button
            type="button"
            className="cookie-bar__btn cookie-bar__btn--cta"
            onClick={() => choose("granted")}
          >
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
