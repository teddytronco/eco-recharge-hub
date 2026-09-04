import { useI18n } from "@/lib/i18n";
import { Section, SectionTitle } from "@/components/site/blocks";
import { faqItems, faqTitle } from "@/content/faq";

export function Faq() {
  const { lang } = useI18n();
  return (
    <Section muted>
      <SectionTitle title={faqTitle[lang]} />
      <dl className="mt-10 grid gap-5 md:grid-cols-2">
        {faqItems.map((item) => (
          <div key={item.q.es} className="rounded-lg border border-border bg-card p-6">
            <dt className="text-base font-semibold leading-snug">{item.q[lang]}</dt>
            <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.a[lang]}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
