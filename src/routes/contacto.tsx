import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { EmergencyNotice, PageHero, Section } from "@/components/site/blocks";
import { QuoteForm } from "@/components/site/QuoteForm";
import { ContactActions } from "@/components/site/blocks";
import { CONTACT } from "@/lib/i18n";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y cotización | Reciclaje de Baterías Latinoamérica" },
      {
        name: "description",
        content:
          "Solicite la evaluación de su material: formulario técnico en tres pasos, atención telefónica, correo y WhatsApp para clientes industriales.",
      },
      {
        property: "og:title",
        content: "Contacto y cotización | Reciclaje de Baterías Latinoamérica",
      },
      {
        property: "og:description",
        content:
          "Formulario de solicitud para evaluación de baterías de litio y canales de contacto directo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contacto" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
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
