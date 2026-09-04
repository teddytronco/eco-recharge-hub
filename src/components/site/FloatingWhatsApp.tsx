import { MessageCircle } from "lucide-react";
import { useI18n, whatsappUrl } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const { t } = useI18n();

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.cta.whatsapp}
      className="fixed right-5 bottom-5 z-50 hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none lg:inline-flex"
    >
      <MessageCircle className="size-5 fill-current" aria-hidden />
      <span className="hidden sm:inline">{t.cta.whatsapp}</span>
    </a>
  );
}
