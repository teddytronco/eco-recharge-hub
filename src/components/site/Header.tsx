import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/lib/i18n";
import logo from "@/assets/recyc-latam-mark.png";
import { LanguageToggle } from "./LanguageToggle";
import { ui } from "@/content/ui";


export function Header() {
  const { t, lang } = useI18n();
  const [open, setOpen] = React.useState(false);

  const links = [
    { to: "/servicios", label: t.nav.services },
    { to: "/proceso", label: t.nav.process },
    { to: "/materiales", label: t.nav.materials },
    { to: "/cobertura", label: ui.nav[lang].coverage },
    { to: "/cumplimiento", label: t.nav.compliance },
    { to: "/logistica", label: t.nav.logistics },
    { to: "/recursos", label: ui.nav[lang].resources },
    { to: "/nosotros", label: t.nav.about },
  ] as const;


  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="" width={512} height={512} className="h-9 w-9" />
          <span className="hidden text-sm leading-tight font-semibold tracking-tight sm:block">
            Reciclaje de Baterías
            <span className="block text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Latinoamérica
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <LanguageToggle />
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="hidden items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary xl:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={`tel:${CONTACT.phoneHref}`}
            aria-label={lang === "es" ? "Llamar ahora" : "Call now"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border transition-colors hover:bg-secondary xl:hidden"
          >
            <Phone className="size-5" aria-hidden />
          </a>
          <Link
            to="/contacto"
            search={{ material: undefined }}
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            {t.cta.quote}
          </Link>
          <button
            type="button"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm font-medium"
            >
              {t.nav.home}
            </Link>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              search={{ material: undefined }}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              {t.cta.quote}
            </Link>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Phone className="size-4" aria-hidden />
              {CONTACT.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
