"use client";

import { openCookieSettings } from "@/lib/consent";

/** Odkaz „Nastavení cookies" – znovu otevře lištu se souhlasem. */
export function CookieSettingsLink({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className ?? "cookie-settings-link"}
      onClick={openCookieSettings}
    >
      Nastavení cookies
    </button>
  );
}
