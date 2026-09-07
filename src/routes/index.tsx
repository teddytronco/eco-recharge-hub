import { faqLd, pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, FileCheck2, Truck, Recycle, MessageCircle } from "lucide-react";
import { useI18n, whatsappUrl } from "@/lib/i18n";
import { QuickLeadForm } from "@/components/site/QuickLeadForm";
import {
  Section,
  SectionTitle,
  Card,
  EmergencyNotice,
  ContactActions,
  CtaBand,
} from "@/components/site/blocks";
import { Faq } from "@/components/site/Faq";
import { faqItems } from "@/content/faq";
import hero from "@/assets/hero-facility.jpg";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/",
      title: "Reciclaje de baterías de litio en México | Gestión y disposición B2B",
      description: "Reciclaje de baterías y gestión de disposición de baterías de litio para industria en México y Latinoamérica: retiro coordinado, empaque conforme y expediente documental.",
      jsonLd: faqLd(faqItems.map((i) => ({ q: i.q.es, a: i.a.es }))),
    }),
  component: Index,
});

const icons = [Recycle, ShieldCheck, Truck, FileCheck2];

function Index() {
  const { t, lang } = useI18n();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={hero}
          alt={t.home.heroAlt}
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:gap-12 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              {t.home.eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:mt-5 sm:text-5xl lg:text-6xl">
              {t.home.title}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] text-primary-foreground/80 sm:mt-6 sm:text-base lg:text-lg">
              {t.home.subtitle}
            </p>
            <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
              <a
                href={whatsappUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-[#05300f] shadow-lg transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="size-4 fill-current" aria-hidden />
                {t.cta.whatsapp}
              </a>
              <Link
                to="/contacto"
                search={{ material: undefined }}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                {t.cta.quote}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-5 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                {t.cta.learnServices}
              </Link>
            </div>
            <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {t.home.responsePromise}
            </p>
          </div>

          <QuickLeadForm />
        </div>
      </section>

      <div className="border-b border-border bg-secondary/40">
        <dl className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {t.home.stats.map((s) => (
            <div key={s.k}>
              <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                {s.k}
              </dt>
              <dd className="mt-1 text-base font-semibold">{s.v}</dd>
              <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </dl>
      </div>

      <Section>
        <SectionTitle title={t.home.trustTitle} subtitle={t.home.trustSubtitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.home.trust.map((c) => (
            <div key={c.t} className="rounded-lg border border-border bg-card p-6">
              <ShieldCheck className="size-5 text-accent-foreground" aria-hidden />
              <h3 className="mt-4 text-base font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <EmergencyNotice />
      </div>

      <Section muted>
        <SectionTitle title={t.home.valueTitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {t.home.values.map((v, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <div key={v.t} className="rounded-lg border border-border bg-card p-6">
                <Icon className="size-5 text-accent-foreground" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionTitle title={t.home.servicesTitle} subtitle={t.home.servicesSub} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <Card key={s.t} title={s.t} index={i + 1}>
              {s.d}
            </Card>
          ))}
        </div>
        <Link
          to="/servicios"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
        >
          {t.cta.learnServices}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      <Section muted>
        <SectionTitle title={t.home.processTitle} subtitle={t.home.processSub} />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {t.process.steps.map((s, i) => (
            <li key={s.t} className="bg-card p-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-accent-foreground/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-sm font-semibold">{s.t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle title={t.home.sectorsTitle} />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.home.sectors.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-border bg-card px-4 py-3 text-sm font-medium"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-secondary/60 p-7">
            <h2 className="text-xl font-semibold tracking-tight">{t.compliance.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{t.home.complianceTeaser}</p>
            <Link
              to="/cumplimiento"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            >
              {t.cta.learnCompliance}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase">
                {t.common.quickContact}
              </h3>
              <ContactActions className="mt-4" />
            </div>
          </div>
        </div>
      </Section>

      <Faq />

      <CtaBand />
    </>
  );
}
