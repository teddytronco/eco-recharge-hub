import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import driveUnitImage from "@/assets/ev-drive-unit.webp.asset.json";
import { driveUnits, EV_DRIVE_UNIT } from "@/content/drive-units";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Section } from "./blocks";

export function DriveUnitsSection() {
  const { lang } = useI18n();
  const c = driveUnits[lang];
  return <Section className="border-y border-border">
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <figure>
        <img src={driveUnitImage.url} alt={c.imageAlt} width={1536} height={1024} loading="lazy" className="aspect-[3/2] w-full rounded-lg object-contain" />
        <figcaption className="mt-3 text-xs text-muted-foreground">{c.caption}</figcaption>
      </figure>
      <div>
        <p className="text-xs font-semibold text-accent-foreground uppercase">{c.eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold text-balance sm:text-3xl">{c.title}</h2>
        <p className="mt-4 text-muted-foreground">{c.body}</p>
        <p className="mt-4 text-sm text-muted-foreground">{c.details}</p>
        <Button asChild className="mt-6 h-auto min-h-12 whitespace-normal py-3">
          <Link to="/" search={{ material: EV_DRIVE_UNIT.id }} hash="evaluacion">{c.cta}<ArrowRight aria-hidden /></Link>
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">{c.terms}</p>
      </div>
    </div>
  </Section>;
}