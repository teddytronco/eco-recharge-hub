import * as React from "react";
import { Check, Paperclip, ShieldCheck, X } from "lucide-react";
import { CONTACT, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type FormState = {
  company: string;
  contactName: string;
  role: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  chemistry: string;
  format: string;
  quantity: string;
  condition: string;
  frequency: string;
  pickup: string;
  notes: string;
  urgent: boolean;
  consent: boolean;
};

const initial: FormState = {
  company: "",
  contactName: "",
  role: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  chemistry: "",
  format: "",
  quantity: "",
  condition: "",
  frequency: "",
  pickup: "",
  notes: "",
  urgent: false,
  consent: false,
};

const ALLOWED = ["application/pdf", "image/jpeg", "image/png"];
const MAX_SIZE = 10 * 1024 * 1024;
const MAX_FILES = 5;

const fieldClass =
  "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30";

export function QuoteForm({ initialChemistry }: { initialChemistry?: string }) {
  const { t } = useI18n();
  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState<FormState>({
    ...initial,
    chemistry: initialChemistry ?? "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});
  const [files, setFiles] = React.useState<File[]>([]);
  const [fileError, setFileError] = React.useState<string | null>(null);
  const [sent, setSent] = React.useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validateStep = (s: number) => {
    const e: Partial<Record<keyof FormState, string>> = {};
    const req = (k: keyof FormState) => {
      if (!String(values[k]).trim()) e[k] = t.contact.errors.required;
    };
    if (s === 0) {
      (["company", "contactName", "email", "phone", "country", "city"] as const).forEach(req);
      if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email))
        e.email = t.contact.errors.email;
      if (values.phone && values.phone.replace(/\D/g, "").length < 8)
        e.phone = t.contact.errors.phone;
    }
    if (s === 1) {
      (["chemistry", "format", "quantity", "condition"] as const).forEach(req);
    }
    if (s === 2 && !values.consent) e.consent = t.contact.errors.consent;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    const incoming = Array.from(list);
    let error: string | null = null;
    const valid: File[] = [];
    for (const f of incoming) {
      if (!ALLOWED.includes(f.type)) {
        error = `${t.contact.errors.fileType} ${f.name}`;
        continue;
      }
      if (f.size > MAX_SIZE) {
        error = `${t.contact.errors.fileSize} ${f.name}`;
        continue;
      }
      valid.push(f);
    }
    const merged = [...files, ...valid];
    if (merged.length > MAX_FILES) {
      error = t.contact.errors.fileCount;
    }
    setFiles(merged.slice(0, MAX_FILES));
    setFileError(error);
  };

  const summary = () => {
    const f = t.contact.fields;
    const lines = [
      `${f.company}: ${values.company}`,
      `${f.contactName}: ${values.contactName}`,
      `${f.role}: ${values.role}`,
      `${f.email}: ${values.email}`,
      `${f.phone}: ${values.phone}`,
      `${f.country}: ${values.country}`,
      `${f.city}: ${values.city}`,
      "",
      `${f.chemistry}: ${values.chemistry}`,
      `${f.format}: ${values.format}`,
      `${f.quantity}: ${values.quantity}`,
      `${f.condition}: ${values.condition}`,
      `${f.frequency}: ${values.frequency}`,
      `${f.pickup}: ${values.pickup}`,
      `${f.notes}: ${values.notes}`,
      `${f.urgent}: ${values.urgent ? "Sí / Yes" : "No"}`,
      "",
      `${t.contact.selected}: ${files.map((x) => x.name).join(", ") || "-"}`,
      "",
      `Página de origen / Source page: ${document.referrer || window.location.href}`,
    ];
    return lines.join("\n");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(2)) return;
    const subject = `Solicitud de cotización — ${values.company || "Nuevo contacto"}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(summary())}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-lg border border-border bg-card p-8">
        <div className="inline-flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check className="size-5" aria-hidden />
        </div>
        <h2 className="mt-5 text-xl font-semibold">{t.contact.successTitle}</h2>
        <p className="mt-3 max-w-lg text-sm text-muted-foreground">{t.contact.successBody}</p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setStep(0);
            setValues(initial);
            setFiles([]);
          }}
          className="mt-6 rounded-md border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          {t.cta.back}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        {t.contact.steps.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <span
              className={cn(
                "inline-flex size-7 items-center justify-center rounded-full text-xs font-semibold",
                i <= step
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground",
              )}
            >
              {i + 1}
            </span>
            <span
              className={cn(
                "text-sm font-medium",
                i === step ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {label}
            </span>
            {i < t.contact.steps.length - 1 && <span className="h-px w-6 bg-border" />}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        {t.contact.stepLabel} {step + 1} {t.contact.of} {t.contact.steps.length}
      </p>

      <div className="mt-8 space-y-5">
        {step === 0 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t.contact.fields.company} error={errors.company}>
              <input
                className={fieldClass}
                value={values.company}
                onChange={(e) => set("company", e.target.value)}
              />
            </Field>
            <Field label={t.contact.fields.contactName} error={errors.contactName}>
              <input
                className={fieldClass}
                value={values.contactName}
                onChange={(e) => set("contactName", e.target.value)}
              />
            </Field>
            <Field label={t.contact.fields.role}>
              <input
                className={fieldClass}
                value={values.role}
                onChange={(e) => set("role", e.target.value)}
              />
            </Field>
            <Field label={t.contact.fields.email} error={errors.email}>
              <input
                type="email"
                className={fieldClass}
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </Field>
            <Field label={t.contact.fields.phone} error={errors.phone}>
              <input
                type="tel"
                className={fieldClass}
                value={values.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </Field>
            <Field label={t.contact.fields.country} error={errors.country}>
              <input
                className={fieldClass}
                value={values.country}
                onChange={(e) => set("country", e.target.value)}
              />
            </Field>
            <Field label={t.contact.fields.city} error={errors.city}>
              <input
                className={fieldClass}
                value={values.city}
                onChange={(e) => set("city", e.target.value)}
              />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t.contact.fields.chemistry} error={errors.chemistry}>
              <select
                className={fieldClass}
                value={values.chemistry}
                onChange={(e) => set("chemistry", e.target.value)}
              >
                <option value="">—</option>
                {t.contact.options.chemistry.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label={t.contact.fields.format} error={errors.format}>
              <select
                className={fieldClass}
                value={values.format}
                onChange={(e) => set("format", e.target.value)}
              >
                <option value="">—</option>
                {t.contact.options.format.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label={t.contact.fields.quantity} error={errors.quantity}>
              <input
                className={fieldClass}
                value={values.quantity}
                onChange={(e) => set("quantity", e.target.value)}
              />
            </Field>
            <Field label={t.contact.fields.condition} error={errors.condition}>
              <select
                className={fieldClass}
                value={values.condition}
                onChange={(e) => set("condition", e.target.value)}
              >
                <option value="">—</option>
                {t.contact.options.condition.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label={t.contact.fields.frequency}>
              <select
                className={fieldClass}
                value={values.frequency}
                onChange={(e) => set("frequency", e.target.value)}
              >
                <option value="">—</option>
                {t.contact.options.frequency.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label={t.contact.fields.pickup}>
              <input
                className={fieldClass}
                value={values.pickup}
                onChange={(e) => set("pickup", e.target.value)}
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label={t.contact.fields.notes}>
                <textarea
                  rows={4}
                  className={fieldClass}
                  value={values.notes}
                  onChange={(e) => set("notes", e.target.value)}
                />
              </Field>
              <label className="mt-4 flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  className="mt-0.5 size-4"
                  checked={values.urgent}
                  onChange={(e) => set("urgent", e.target.checked)}
                />
                <span className="text-muted-foreground">{t.contact.fields.urgent}</span>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <span className="text-sm font-medium">{t.contact.fields.files}</span>
              <label className="mt-3 flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-border px-4 py-6 text-sm text-muted-foreground transition-colors hover:border-accent">
                <Paperclip className="size-4" aria-hidden />
                <span>PDF · JPG · PNG</span>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="sr-only"
                  onChange={(e) => onFiles(e.target.files)}
                />
              </label>
              {fileError && <p className="mt-2 text-xs text-destructive">{fileError}</p>}
              {files.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {files.map((f) => (
                    <li
                      key={f.name}
                      className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-xs"
                    >
                      <span className="truncate">
                        {f.name} · {(f.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                      <button
                        type="button"
                        aria-label={`${t.contact.remove} ${f.name}`}
                        onClick={() => setFiles((prev) => prev.filter((x) => x !== f))}
                        className="ml-3 text-muted-foreground hover:text-destructive"
                      >
                        <X className="size-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-3 flex gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="size-4 shrink-0" aria-hidden />
                {t.contact.fileSecurity}
              </p>
            </div>

            <div className="rounded-md border border-border bg-secondary/50 p-5">
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase">
                {t.contact.review}
              </h3>
              <pre className="mt-3 max-h-56 overflow-auto text-xs whitespace-pre-wrap text-muted-foreground">
                {summary()}
              </pre>
            </div>

            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                className="mt-0.5 size-4"
                checked={values.consent}
                onChange={(e) => set("consent", e.target.checked)}
              />
              <span className="text-muted-foreground">{t.contact.fields.consent}</span>
            </label>
            {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}
            <p className="text-xs text-muted-foreground">{t.contact.reviewNote}</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="rounded-md border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary disabled:opacity-40"
        >
          {t.cta.back}
        </button>
        {step < 2 ? (
          <button
            type="button"
            onClick={() => {
              if (validateStep(step)) setStep((s) => s + 1);
            }}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.cta.next}
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {t.cta.send}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
