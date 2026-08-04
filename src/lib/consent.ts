// Správa souhlasu s cookies (analytické). Ukládá volbu do localStorage
// a vysílá událost, na kterou reaguje analytika i lišta.

export const CONSENT_KEY = "voltimo-cookie-consent";
export const CONSENT_EVENT = "voltimo-consent-change";
export const OPEN_SETTINGS_EVENT = "voltimo-open-cookie-settings";

export type ConsentValue = "granted" | "denied";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* localStorage nedostupné – volba prostě nepřežije reload */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
