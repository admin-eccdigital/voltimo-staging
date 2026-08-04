import { Phone, Mail, MapPin } from "lucide-react";
import { LP_DATA } from "@/lib/lp-data";
import { CookieSettingsLink } from "./CookieSettingsLink";

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
            <span className="site-footer__lock">
              <img
                src={`${basePath}/logo/logo-voltimo-mark.svg`}
                alt="Voltimo"
                width={44}
                height={44}
              />
              <span className="site-footer__wm">
                Voltimo
                <small>Středisko profesního vzdělávání</small>
              </span>
            </span>
            <p>
              V elektrotechnice, chlazení a klimatizacích. Výcvik, ne škola.
              Praxe, zkoušky podle NSK a státní osvědčení.
            </p>
          </div>
        </div>
        <div className="site-footer__legal">
          <span>
            © 2026 Voltimo · Středisko profesního vzdělávání · Přeštice
          </span>
          <span className="site-footer__legal-links">
            <a href={`${basePath}/gdpr/`}>Zásady ochrany osobních údajů</a>
            <a href={`${basePath}/vop/`}>Všeobecné obchodní podmínky</a>
            <CookieSettingsLink />
          </span>
        </div>
      </div>
    </footer>
  );
}
