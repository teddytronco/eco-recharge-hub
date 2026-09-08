import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, SectionTitle } from "@/components/site/blocks";
import { chemistries } from "@/content/chemistries";
import { ui } from "@/content/ui";
import { useI18n } from "@/lib/i18n";

export function ChemistryGuide() {
  const { lang } = useI18n();

  return (
    <Section>
      <SectionTitle title={ui.materials.chemTitle[lang]} subtitle={ui.materials.chemSubtitle[lang]} />
      <Accordion type="single" collapsible className="mt-8 divide-y divide-border border-y border-border">
        {chemistries.map((c) => (
          <AccordionItem key={c.id} value={c.id} className="border-b-0">
            <AccordionTrigger className="py-5 text-left hover:no-underline">
              <span className="flex flex-col gap-1 pr-4">
                <span className="text-base font-semibold">{c.name[lang]}</span>
                <span className="text-sm font-normal leading-relaxed text-muted-foreground">{c.short[lang]}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-6 pb-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
                <img
                  src={c.image}
                  alt={c.alt[lang]}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full rounded-lg border border-border object-cover"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold">{ui.materials.chemIdentify[lang]}</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {c.identify[lang].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{ui.materials.chemIncludes[lang]}</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {c.includes[lang].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border bg-muted/40 p-4 sm:col-span-2">
                    <h4 className="text-sm font-semibold">{ui.materials.chemHandling[lang]}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.handling[lang]}</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">{ui.materials.chemNote[lang]}</p>
    </Section>
  );
}
