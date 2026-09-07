import * as React from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { submitQuickLead } from "@/lib/leads.functions";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-3 text-base text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/40 sm:text-sm";

export function QuickLeadForm() {
  const { t, lang } = useI18n();
  const q = t.home.quick;
  const send = useServerFn(submitQuickLead);

  const [batteryType, setBatteryType] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [state, setState] = React.useState<"idle" | "sending" | "done" | "error" | "invalid">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const c = contact.trim();
    const valid =
      batteryType.length > 0 &&
      (c.includes("@") ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c) : c.replace(/\D/g, "").length >= 8);
    if (!valid) {
      setState("invalid");
      return;
    }
    setState("sending");
    try {
      const res = await send({
        data: {
          batteryType,
          quantity: quantity.trim(),
          contact: c,
          sourcePage: typeof window !== "undefined" ? window.location.href : "",
          lang,
        },
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-xl border border-accent/40 bg-primary-foreground/10 p-6 backdrop-blur-sm sm:p-8">
        <Check className="size-6 text-accent" aria-hidden />
        <p className="mt-4 text-base font-semibold">{q.done}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm sm:p-8"
    >
      <h2 className="text-base font-semibold tracking-tight">{q.title}</h2>
      <p className="mt-1.5 text-sm text-primary-foreground/70">{q.subtitle}</p>

      <div className="mt-5 grid gap-4">
        <label className="block text-xs font-semibold tracking-[0.12em] text-primary-foreground/70 uppercase">
          {q.type}
          <select
            value={batteryType}
            onChange={(e) => setBatteryType(e.target.value)}
            className={fieldClass}
            required
          >
            <option value="">—</option>
            {q.typeOptions.map((o) => (
              <option key={o} value={o} className="text-foreground">
                {o}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-xs font-semibold tracking-[0.12em] text-primary-foreground/70 uppercase">
          {q.quantity}
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className={fieldClass}
            inputMode="text"
          />
        </label>

        <label className="block text-xs font-semibold tracking-[0.12em] text-primary-foreground/70 uppercase">
          {q.contact}
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className={fieldClass}
            required
          />
        </label>
      </div>

      {(state === "invalid" || state === "error") && (
        <p className="mt-3 text-sm text-accent">{state === "invalid" ? q.invalid : q.error}</p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {state === "sending" ? q.sending : q.send}
        <ArrowRight className="size-4" aria-hidden />
      </button>

      <p className="mt-3 text-xs text-primary-foreground/60">
        {q.full}{" "}
        <Link to="/contacto" search={{ material: undefined }} className="font-semibold underline">
          {t.cta.quote}
        </Link>
      </p>
    </form>
  );
}
