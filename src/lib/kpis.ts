export type LeadRow = {
  id: string;
  created_at: string;
  company: string;
  contact_name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  chemistry: string | null;
  quantity: string | null;
  notes: string | null;
  source_page: string | null;
  lang: string | null;
};
export type VisitRow = { created_at: string; session_id: string; path: string; referrer_host: string | null; device: string | null };
export type ClickRow = { created_at: string; session_id: string; channel: string; path: string };

export const CHANNELS = ["whatsapp", "phone", "email"] as const;
export type Channel = (typeof CHANNELS)[number];

/** Maps a link address to a contact channel, or null when it is not a contact link. */
export function contactChannel(href: string): Channel | null {
  const h = href.trim().toLowerCase();
  if (h.startsWith("https://wa.me/") || h.startsWith("https://api.whatsapp.com/") || h.startsWith("whatsapp:")) return "whatsapp";
  if (h.startsWith("tel:")) return "phone";
  if (h.startsWith("mailto:")) return "email";
  return null;
}

export function leadKind(lead: Pick<LeadRow, "notes">): "quick" | "full" {
  return (lead.notes ?? "").startsWith("Lead rápido") ? "quick" : "full";
}

function dayKey(iso: string, timeZone: string) {
  return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(iso));
}

function topCounts(values: string[], limit = 8) {
  const m = new Map<string, number>();
  for (const v of values) m.set(v, (m.get(v) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit).map(([label, count]) => ({ label, count }));
}

export function summarize(
  { leads, visits, clicks }: { leads: LeadRow[]; visits: VisitRow[]; clicks: ClickRow[] },
  days: string[],
  timeZone = "America/Mexico_City",
) {
  const sessions = new Set(visits.map((v) => v.session_id));
  const contactSessions = new Set(clicks.map((c) => c.session_id));
  const byChannel = Object.fromEntries(CHANNELS.map((c) => [c, clicks.filter((k) => k.channel === c).length])) as Record<Channel, number>;
  const daily = days.map((day) => ({
    day,
    visits: new Set(visits.filter((v) => dayKey(v.created_at, timeZone) === day).map((v) => v.session_id)).size,
    leads: leads.filter((l) => dayKey(l.created_at, timeZone) === day).length,
    taps: clicks.filter((c) => dayKey(c.created_at, timeZone) === day).length,
  }));
  const contactAttempts = leads.length + clicks.length;
  return {
    visits: sessions.size,
    pageViews: visits.length,
    formLeads: leads.length,
    quickLeads: leads.filter((l) => leadKind(l) === "quick").length,
    fullLeads: leads.filter((l) => leadKind(l) === "full").length,
    contactTaps: clicks.length,
    byChannel,
    contactAttempts,
    contactRate: sessions.size ? Math.min(100, Math.round(((leads.length + contactSessions.size) / sessions.size) * 1000) / 10) : 0,
    daily,
    topPages: topCounts(visits.map((v) => v.path)),
    topSources: topCounts(visits.map((v) => v.referrer_host || "Directo / Direct")),
    devices: topCounts(visits.map((v) => v.device || "desktop")),
  };
}

export function toCsv(rows: (string | number | null | undefined)[][]) {
  return "\uFEFF" + rows.map((r) => r.map((v) => {
    let s = v == null ? "" : String(v);
    if (typeof v === "string" && /^[=+\-@\t\r]/.test(s)) s = "'" + s;
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  }).join(",")).join("\r\n");
}