import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT, useI18n, whatsappUrl } from "@/lib/i18n";
import logo from "@/assets/xd-materials-logo.png.asset.json";
import { ui } from "@/content/ui";


export function Footer() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/servicios", label: t.nav.services },
    { to: "/proceso", label: t.nav.process },
    { to: "/materiales", label: t.nav.materials },
    { to: "/cobertura", label: ui.nav[lang].coverage },
    { to: "/cumplimiento", label: t.nav.compliance },
    { to: "/logistica", label: t.nav.logistics },
    { to: "/recursos", label: ui.nav[lang].resources },
    { to: "/nosotros", label: t.nav.about },
    { to: "/contacto", label: t.nav.contact },
  ] as const;


  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt=""
              width={768}
              height={489}
              loading="lazy"
              className="h-8 w-auto"
            />
            <span className="text-base leading-none font-semibold tracking-tight">
              XD
              <span className="block text-[11px] tracking-[0.32em] text-muted-foreground uppercase">
                Materials
              </span>
            </span>

          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.about}</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">{t.footer.navTitle}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-muted-foreground md:grid-cols-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">
            {t.footer.contactTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="size-4" aria-hidden />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 break-all transition-colors hover:text-foreground"
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">
            {t.footer.legalTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {t.footer.legalLinks.map((l) => (
              <li key={l}>
                <Link to="/legal" className="transition-colors hover:text-foreground">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">{t.footer.disclaimer}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground lg:px-8">
          © {year} XD Materials. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
