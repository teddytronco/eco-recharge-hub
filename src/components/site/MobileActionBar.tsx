import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { CONTACT, useI18n, whatsappUrl } from "@/lib/i18n";

export function MobileActionBar() {
  const { t, lang } = useI18n();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <div
        className="grid grid-cols-3 gap-1 px-2 py-2"
        style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={`tel:${CONTACT.phoneHref}`}
          aria-label={`${t.cta.call}: ${CONTACT.phoneDisplay}`}
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md text-[11px] font-semibold transition-colors active:bg-secondary"
        >
          <Phone className="size-5" aria-hidden />
          {t.cta.call}
        </a>
        <a
          href={whatsappUrl(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md text-[11px] font-semibold transition-colors active:bg-secondary"
        >
          <MessageCircle className="size-5" aria-hidden />
          {t.cta.whatsapp}
        </a>
        <Link
          to="/contacto"
          search={{ material: undefined }}
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md bg-primary px-2 text-center text-[11px] font-semibold text-primary-foreground"
        >
          <FileText className="size-5" aria-hidden />
          {t.cta.quote}
        </Link>
      </div>
    </div>
  );
}
