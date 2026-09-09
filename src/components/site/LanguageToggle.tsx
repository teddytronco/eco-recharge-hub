import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-border p-0.5 text-xs font-semibold",
        className,
      )}
      role="group"
      aria-label="Language / Idioma"
    >
      {([
        { code: "es", label: "ES", flag: "🇲🇽" },
        { code: "en", label: "EN", flag: "🇺🇸" },
      ] as const).map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={cn(
            "inline-flex items-center gap-1 rounded-[5px] px-1.5 py-1.5 uppercase transition-colors 2xl:gap-1.5 2xl:px-2.5",
            lang === l.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <span aria-hidden="true" className="hidden 2xl:inline">
            {l.flag}
          </span>
          <span>{l.label}</span>
        </button>
      ))}
    </div>
  );
}
