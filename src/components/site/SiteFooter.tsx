import { Phone, Mail, MapPin } from "lucide-react";
import { LP_DATA } from "@/lib/lp-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__band">
        <div className="site-footer__band-inner">
          <a className="site-footer__contact" href={LP_DATA.phoneHref}>
            <span className="site-footer__contact-icon">
              <Phone />
            </span>
            <span>
              <small>Zavolejte nám</small>
              <strong>{LP_DATA.phone}</strong>
            </span>
          </a>
          <a className="site-footer__contact" href={`mailto:${LP_DATA.email}`}>
            <span className="site-footer__contact-icon">
              <Mail />
            </span>
            <span>
              <small>Napište nám</small>
              <strong>{LP_DATA.email}</strong>
            </span>
          </a>
          <span className="site-footer__contact">
            <span className="site-footer__contact-icon">
              <MapPin />
            </span>
            <span>
              <small>Najdete nás</small>
              <strong>{LP_DATA.address}</strong>
            </span>
          </span>
        </div>
      </div>
      <div className="site-footer__main">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <img
              src={`${basePath}/logo/logo-voltimo-inverse.svg`}
              alt="Voltimo"
              width={140}
              height={37}
            />
            <p>
              Středisko profesního vzdělávání v elektrotechnice. Výcvik, ne
              škola. Praxe, zkouška §6 a státní osvědčení Elektrikář.
            </p>
          </div>
        </div>
        <div className="site-footer__legal">
          <span>
            © 2026 Voltimo · Středisko profesního vzdělávání · Přeštice
          </span>
          <span className="site-footer__legal-links">
            <a href={`${basePath}/docs/gdpr.pdf`} target="_blank" rel="noopener noreferrer">
              Zásady ochrany osobních údajů
            </a>
            <a href={`${basePath}/docs/vop.pdf`} target="_blank" rel="noopener noreferrer">
              Všeobecné obchodní podmínky
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
