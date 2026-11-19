import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Download, LogOut, Printer } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getDashboardAccess, getDashboardData } from "@/lib/dashboard.functions";
import { leadKind, summarize, toCsv, type LeadRow } from "@/lib/kpis";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/_authenticated/panel")({
  head: () => ({
    meta: [
      { title: "Panel de leads y KPIs | XD Materials" },
      { name: "description", content: "Panel privado de visitas, contactos y leads del sitio de XD Materials." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Panel de leads y KPIs | XD Materials" },
      { property: "og:description", content: "Panel privado de visitas, contactos y leads." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PanelPage,
});

const TZ = "America/Mexico_City";
// Mexico City is UTC-6 all year (no daylight saving since 2022).
function monthRange(ym: string) {
  const [y, m] = ym.split("-").map(Number) as [number, number];
  const start = new Date(Date.UTC(y, m - 1, 1, 6));
  const end = new Date(Date.UTC(y, m, 1, 6));
  const days: string[] = [];
  for (let d = 1; d <= new Date(Date.UTC(y, m, 0)).getUTCDate(); d++) days.push(`${ym}-${String(d).padStart(2, "0")}`);
  return { from: start.toISOString(), to: end.toISOString(), days };
}
function currentMonth() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit" }).format(new Date()).slice(0, 7);
}
function download(name: string, csv: string) {
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}
const fmtDate = (iso: string) => new Intl.DateTimeFormat("es-MX", { timeZone: TZ, dateStyle: "medium", timeStyle: "short" }).format(new Date(iso));

function PanelPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const accessFn = useServerFn(getDashboardAccess);
  const dataFn = useServerFn(getDashboardData);
  const [month, setMonth] = React.useState(currentMonth);
  const range = monthRange(month);
  const access = useQuery({ queryKey: ["dashboard-access"], queryFn: () => accessFn() });
  const data = useQuery({
    queryKey: ["dashboard", month],
    queryFn: () => dataFn({ data: { from: range.from, to: range.to } }),
    enabled: access.data?.isAdmin === true,
  });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    void navigate({ to: "/auth", replace: true });
  }

  if (access.isPending) return <Shell onSignOut={signOut}><p className="text-muted-foreground">Cargando…</p></Shell>;
  if (!access.data?.isAdmin)
    return (
      <Shell onSignOut={signOut}>
        <h1 className="text-2xl font-semibold">Sin acceso / No access</h1>
        <p className="mt-3 max-w-lg text-muted-foreground">
          {access.data?.email || "Esta cuenta"} no tiene permiso para ver el panel. Pida al administrador que agregue su correo. / This account isn't approved for the dashboard.
        </p>
      </Shell>
    );

  const s = data.data ? summarize(data.data as { leads: LeadRow[]; visits: never[]; clicks: never[] }, range.days, TZ) : null;
  const leads = (data.data?.leads ?? []) as LeadRow[];

  function exportLeads() {
    download(`leads-${month}.csv`, toCsv([
      ["Fecha", "Tipo", "Empresa", "Contacto", "Correo", "Teléfono", "País", "Ciudad", "Material", "Cantidad", "Notas", "Página de origen", "Idioma"],
      ...leads.map((l) => [fmtDate(l.created_at), leadKind(l) === "quick" ? "Formulario rápido" : "Formulario completo", l.company, l.contact_name, l.email, l.phone, l.country, l.city, l.chemistry, l.quantity, l.notes, l.source_page, l.lang]),
    ]));
  }
  function exportSummary() {
    if (!s) return;
    download(`kpis-${month}.csv`, toCsv([
      ["KPI", month],
      ["Visitas", s.visits], ["Páginas vistas", s.pageViews], ["Leads de formulario", s.formLeads],
      ["Toques WhatsApp", s.byChannel.whatsapp], ["Toques teléfono", s.byChannel.phone], ["Toques correo", s.byChannel.email],
      ["Intentos de contacto totales", s.contactAttempts], ["Tasa de contacto (%)", s.contactRate],
      [], ["Día", "Visitas", "Leads", "Toques de contacto"],
      ...s.daily.map((d) => [d.day, d.visits, d.leads, d.taps]),
    ]));
  }

  return (
    <Shell onSignOut={signOut}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold sm:text-3xl">Leads y KPIs del sitio</h1>
          <p className="mt-1 text-sm text-muted-foreground">Hora de Ciudad de México · Website leads & KPIs</p>
        </div>
        <div className="flex flex-wrap items-end gap-2 print:hidden">
          <label className="text-xs font-semibold text-muted-foreground uppercase">Mes / Month
            <Input type="month" value={month} max={currentMonth()} onChange={(e) => e.target.value && setMonth(e.target.value)} className="mt-1 h-10 w-44" />
          </label>
          <Button variant="outline" className="h-10" onClick={exportSummary} disabled={!s}><Download aria-hidden />KPIs CSV</Button>
          <Button variant="outline" className="h-10" onClick={exportLeads} disabled={!s}><Download aria-hidden />Leads CSV</Button>
          <Button variant="outline" className="h-10" onClick={() => window.print()}><Printer aria-hidden />PDF</Button>
        </div>
      </div>

      {data.isError && <p className="mt-8 text-destructive">No se pudieron cargar los datos. Intente de nuevo.</p>}
      {!s && !data.isError && <p className="mt-8 text-muted-foreground">Cargando datos…</p>}
      {s && (
        <>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Kpi label="Visitas / Visits" value={s.visits} hint={`${s.pageViews} páginas vistas`} />
            <Kpi label="Leads de formulario" value={s.formLeads} hint={`${s.fullLeads} completos · ${s.quickLeads} rápidos`} />
            <Kpi label="Toques de contacto" value={s.contactTaps} hint={`WhatsApp ${s.byChannel.whatsapp} · Tel ${s.byChannel.phone} · Correo ${s.byChannel.email}`} />
            <Kpi label="Tasa de contacto" value={`${s.contactRate}%`} hint="Visitas que dejaron lead o tocaron contacto" />
          </div>

          <section className="mt-6 rounded-lg border border-border bg-card p-5">
            <h2 className="font-semibold">Actividad diaria</h2>
            <div className="mt-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={s.daily.map((d) => ({ ...d, label: d.day.slice(8) }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="label" tick={{ fontSize: 11 }} stroke="var(--muted-foreground)" />
                  <YAxis allowDecimals={false} tick={{ fontSize: 11 }} stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)" }} />
                  <Legend />
                  <Bar dataKey="visits" name="Visitas" fill="var(--primary)" />
                  <Bar dataKey="taps" name="Toques de contacto" fill="var(--accent)" />
                  <Bar dataKey="leads" name="Leads" fill="var(--chart-1)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <TopList title="Páginas más vistas" rows={s.topPages} />
            <TopList title="De dónde llegan" rows={s.topSources} />
            <TopList title="Dispositivo" rows={s.devices} />
          </div>

          <section className="mt-6 rounded-lg border border-border bg-card p-5">
            <h2 className="font-semibold">Leads del mes ({leads.length})</h2>
            {leads.length === 0 ? <p className="mt-3 text-sm text-muted-foreground">Sin leads de formulario en este mes.</p> : (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="text-xs text-muted-foreground uppercase"><tr>{["Fecha", "Empresa / Contacto", "Correo", "Teléfono", "Material", "Cantidad", "Origen"].map((h) => <th key={h} className="border-b border-border py-2 pr-3 font-semibold">{h}</th>)}</tr></thead>
                  <tbody>
                    {leads.map((l) => (
                      <tr key={l.id} className="align-top">
                        <td className="border-b border-border py-3 pr-3 whitespace-nowrap">{fmtDate(l.created_at)}</td>
                        <td className="border-b border-border py-3 pr-3"><span className="font-medium">{l.company !== "—" ? l.company : "Formulario rápido"}</span>{l.contact_name !== "—" && <span className="block text-muted-foreground">{l.contact_name}</span>}</td>
                        <td className="border-b border-border py-3 pr-3">{l.email ? <a className="underline" href={`mailto:${l.email}`}>{l.email}</a> : "—"}</td>
                        <td className="border-b border-border py-3 pr-3 whitespace-nowrap">{l.phone ? <a className="underline" href={`tel:${l.phone}`}>{l.phone}</a> : "—"}</td>
                        <td className="border-b border-border py-3 pr-3">{l.chemistry || "—"}</td>
                        <td className="border-b border-border py-3 pr-3">{l.quantity || "—"}</td>
                        <td className="border-b border-border py-3 pr-3 text-muted-foreground">{l.source_page ? safeHost(l.source_page) : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
          <p className="mt-6 text-xs text-muted-foreground">
            Visitas y toques de contacto se registran desde el 19 de noviembre de 2026; los meses anteriores solo muestran leads de formulario. Las conversaciones de WhatsApp, llamadas y correos ocurren fuera del sitio: aquí se cuenta el toque del botón, no el mensaje.
          </p>
        </>
      )}
    </Shell>
  );
}

function safeHost(url: string) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url.slice(0, 40); }
}

function Shell({ children, onSignOut }: { children: React.ReactNode; onSignOut: () => void }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="mb-6 flex justify-end print:hidden"><Button variant="ghost" size="sm" onClick={onSignOut}><LogOut aria-hidden />Cerrar sesión / Sign out</Button></div>
      {children}
    </section>
  );
}

function Kpi({ label, value, hint }: { label: string; value: number | string; hint: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <p className="text-xs font-semibold text-muted-foreground uppercase">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

function TopList({ title, rows }: { title: string; rows: { label: string; count: number }[] }) {
  return (
    <section className="rounded-lg border border-border bg-card p-5">
      <h2 className="font-semibold">{title}</h2>
      {rows.length === 0 ? <p className="mt-3 text-sm text-muted-foreground">Sin datos aún.</p> : (
        <ul className="mt-3 space-y-2 text-sm">{rows.map((r) => <li key={r.label} className="flex justify-between gap-3"><span className="truncate">{r.label}</span><span className="font-semibold">{r.count}</span></li>)}</ul>
      )}
    </section>
  );
}