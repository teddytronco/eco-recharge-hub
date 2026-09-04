import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { EmergencyNotice, PageHero, Section } from "@/components/site/blocks";
import { QuoteForm } from "@/components/site/QuoteForm";
import { ContactActions } from "@/components/site/blocks";
import { CONTACT } from "@/lib/i18n";

export const Route = createFileRoute("/contacto")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/contacto",
      title: "Contacto y cotizaci\u00f3n de reciclaje de bater\u00edas | Reciclaje de Bater\u00edas Latinoam\u00e9rica",
      description: "Solicite una evaluaci\u00f3n para el reciclaje o la disposici\u00f3n de sus bater\u00edas de litio. Respuesta por WhatsApp, tel\u00e9fono o correo desde Monterrey, Nuevo Le\u00f3n.",
    }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t.brand.tagline} title={t.contact.title} subtitle={t.contact.subtitle} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <QuoteForm />
          <aside className="space-y-6 lg:sticky lg:top-24">
            <EmergencyNotice />
            <div className="rounded-lg border border-border bg-card p-7">
              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">
                {t.common.quickContact}
              </h2>
              <p className="mt-4 text-sm font-semibold">{CONTACT.phoneDisplay}</p>
              <p className="text-sm break-all text-muted-foreground">{CONTACT.email}</p>
              <ContactActions className="mt-5" />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
