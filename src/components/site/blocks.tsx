import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT, useI18n, whatsappUrl } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  muted,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section className={cn(muted && "bg-secondary/40", className)}>
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">{children}</div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/75 lg:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Card({
  title,
  children,
  index,
}: {
  title: string;
  children: ReactNode;
  index?: number;
}) {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent">
      {index !== undefined && (
        <span className="text-xs font-semibold tracking-[0.2em] text-accent-foreground/70">
          {String(index).padStart(2, "0")}
        </span>
      )}
      <h3 className="mt-2 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function BulletList({ items, tone = "default" }: { items: readonly string[]; tone?: "default" | "warn" | "deny" }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
          <span
            className={cn(
              "mt-2 size-1.5 shrink-0 rounded-full",
              tone === "warn" && "bg-chart-5",
              tone === "deny" && "bg-destructive",
              tone === "default" && "bg-accent",
            )}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function EmergencyNotice() {
  const { t } = useI18n();
  return (
    <div
      role="alert"
      className="rounded-lg border border-destructive/40 bg-destructive/5 p-6 sm:p-7"
    >
      <div className="flex gap-4">
        <AlertTriangle className="size-6 shrink-0 text-destructive" aria-hidden />
        <div>
          <h2 className="text-base font-semibold text-destructive">{t.common.emergencyTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {t.common.emergencyBody}
          </p>
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="size-4" aria-hidden />
            {t.common.emergencyCta}: {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}

export function ContactActions({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={`tel:${CONTACT.phoneHref}`}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
      >
        <Phone className="size-4" aria-hidden />
        {t.cta.call}
      </a>
      <a
        href={`mailto:${CONTACT.email}`}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
      >
        <Mail className="size-4" aria-hidden />
        {t.cta.email}
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        <MessageCircle className="size-4" aria-hidden />
        {t.cta.whatsapp}
      </a>
    </div>
  );
}

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight">{t.common.reqTitle}</h2>
          <p className="mt-3 text-primary-foreground/75">{t.common.reqBody}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contacto"
            search={{ material: undefined }}
            className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {t.cta.quote}
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            {t.cta.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
