"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";

const NAV_ITEMS = [
  { label: "Úvod", href: "/" },
  { label: "Kurz", href: "/elektrikar-za-10-dni/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Kontakt", href: "/kontakt/" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalizedPath = pathname.replace(basePath, "") || "/";

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="site-header__logo" aria-label="Voltimo — domů">
            <img
              src={`${basePath}/logo/logo-voltimo.svg`}
              alt="Voltimo"
              width={180}
              height={48}
            />
          </Link>

          <nav className="site-header__nav" aria-label="Hlavní navigace">
            <ul className="site-header__nav-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`site-header__nav-link${normalizedPath === item.href ? " site-header__nav-link--active" : ""}`}
                    aria-current={normalizedPath === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className="site-header__spacer" />

          <a className="site-header__phone" href={LP_DATA.phoneHref}>
            <Phone />
            <span>{LP_DATA.phone}</span>
          </a>

          <Button
            variant="cta"
            size="sm"
            icon={<ArrowRight />}
            href={`${basePath}/elektrikar-za-10-dni/#registrace`}
            className="site-header__cta"
          >
            Rezervovat termín
          </Button>

          <button
            className="site-header__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`site-header__mobile${menuOpen ? " site-header__mobile--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobilní navigace">
          <ul className="site-header__mobile-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`site-header__mobile-link${normalizedPath === item.href ? " site-header__mobile-link--active" : ""}`}
                  aria-current={normalizedPath === item.href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="site-header__mobile-phone" href={LP_DATA.phoneHref}>
          <Phone />
          <span>{LP_DATA.phone}</span>
        </a>
        <Button
          variant="cta"
          size="lg"
          icon={<ArrowRight />}
          href={`${basePath}/elektrikar-za-10-dni/#registrace`}
          block
          onClick={() => setMenuOpen(false)}
        >
          Rezervovat termín
        </Button>
      </div>
    </>
  );
}
