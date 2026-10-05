import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, FileText, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { careers } from "@/content/careers";
import { CONTACT, useI18n } from "@/lib/i18n";
import evPlatform from "@/assets/ev-battery-platform-hd.jpg.asset.json";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Carreras y vacantes | XD Materials" },
      { name: "description", content: "Únete a XD Materials: vacantes de ventas de baterías EV y coordinación EHS en Monterrey, Saltillo y Arteaga. Envía tu CV." },
      { property: "og:title", content: "Trabaja en XD Materials | Careers" },
      { property: "og:description", content: "Construye tu futuro en baterías EV. Conoce nuestras dos vacantes y postúlate con tu CV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/careers") }],
  }),
  component: CareersPage,
});

function CareersPage() {
  const { lang } = useI18n();
  const c = careers[lang];
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={evPlatform.url} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-primary/85" />
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-medium uppercase">{c.eyebrow}</p>
          <h1 className="mt-5 max-w-2xl text-4xl leading-tight font-semibold tracking-normal sm:text-5xl">{c.title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">{c.intro}</p>
          <Button asChild variant="secondary" size="lg" className="mt-8">
            <a href="#vacantes">{c.openings}<ArrowUpRight aria-hidden="true" /></a>
          </Button>
        </div>
      </section>

      <div className="border-b border-border bg-secondary/50">
        <ul className="mx-auto grid max-w-7xl gap-4 px-5 py-6 text-sm font-medium sm:grid-cols-3 lg:px-8">
          {c.principles.map((p) => <li key={p} className="flex items-center gap-3"><span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />{p}</li>)}
        </ul>
      </div>

      <section id="vacantes" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 lg:px-8">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-semibold tracking-normal">{c.openings}</h2>
          <p className="text-sm text-muted-foreground">{c.count}</p>
        </div>
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {c.roles.map((role) => (
            <article key={role.id} className="flex min-w-0 flex-col rounded-lg border border-border bg-card p-6 sm:p-8">
              <div className="border-b border-border pb-6">
                <p className="text-sm font-medium text-muted-foreground">{role.specialty}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-normal">{role.title}</h3>
                <div className="mt-5 flex items-center gap-2 text-sm"><MapPin className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />{role.location}</div>
                <p className="mt-1 pl-6 text-sm text-muted-foreground">{role.mode}</p>
                <div className="mt-3 flex items-center gap-2 text-sm"><CalendarDays className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />{c.start}</div>
                <p className="mt-3 text-xs text-muted-foreground">{c.reports}</p>
              </div>
              <div className="space-y-7 py-6">
                <div><h4 className="text-sm font-semibold">{c.responsibilities}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.mission}</p><JobList items={role.responsibilities} /></div>
                <div><h4 className="text-sm font-semibold">{c.requirements}</h4><JobList items={role.requirements} /></div>
                <div><h4 className="text-sm font-semibold">{c.offer}</h4><JobList items={role.offer} /></div>
              </div>
              <div className="mt-auto border-t border-border pt-6">
                <p className="mb-4 text-xs text-muted-foreground">{c.subject}: <span className="font-medium text-foreground">{role.subject}</span></p>
                <Button asChild className="h-11 w-full sm:w-auto"><a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(role.subject)}`}><Send aria-hidden="true" />{c.apply}</a></Button>
                <p className="mt-2 text-xs text-muted-foreground">{c.emailNote}</p>
                <Button asChild variant="link" className="mt-3 h-auto justify-start whitespace-normal px-0 text-left"><a href={role.pdf} target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />{c.pdf}<ArrowUpRight aria-hidden="true" /></a></Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8"><h2 className="text-2xl font-semibold tracking-normal">{c.howTitle}</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{c.how}</p><a href={`mailto:${CONTACT.email}`} className="mt-5 inline-block break-all font-medium underline underline-offset-4">{CONTACT.email}</a></div>
      </section>
    </>
  );
}

function JobList({ items }: { items: readonly string[] }) {
  return <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">{items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 bg-muted-foreground" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}