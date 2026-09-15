import { Section, SectionTitle } from "@/components/site/blocks";
import { chemistries } from "@/content/chemistries";
import { ui } from "@/content/ui";
import { useI18n } from "@/lib/i18n";

export function ChemistryGuide() {
  const { lang } = useI18n();

  return (
    <Section muted>
      <SectionTitle title={ui.materials.chemTitle[lang]} subtitle={ui.materials.chemSubtitle[lang]} />
      <div className="mt-10 grid gap-6">
        {chemistries.map((c) => (
          <article
            key={c.id}
            className="grid gap-6 rounded-xl border border-border bg-card p-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start"
          >
            <div>
              <img
                src={c.image}
                alt={c.alt[lang]}
                width={1024}
                height={640}
                loading="lazy"
                className="w-full rounded-lg border border-border object-cover"
              />
              <h3 className="mt-4 text-base font-semibold">{c.name[lang]}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.short[lang]}</p>
            </div>
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
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">{ui.materials.chemNote[lang]}</p>
    </Section>
  );
}
