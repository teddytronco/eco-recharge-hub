import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const getDashboardAccess = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
    return { isAdmin: data === true, email: (context.claims as { email?: string }).email ?? "" };
  });

export const getDashboardData = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ from: z.string().datetime(), to: z.string().datetime() }).parse(d))
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
    if (isAdmin !== true) throw new Error("Forbidden");
    const sb = context.supabase;
    const range = <T extends { gte: (c: string, v: string) => T; lt: (c: string, v: string) => T }>(q: T) => q.gte("created_at", data.from).lt("created_at", data.to);
    const [leads, visits, clicks] = await Promise.all([
      range(sb.from("quote_leads").select("id, created_at, company, contact_name, email, phone, country, city, chemistry, quantity, notes, source_page, lang")).order("created_at", { ascending: false }).limit(5000),
      range(sb.from("site_visits").select("created_at, session_id, path, referrer_host, device")).limit(50000),
      range(sb.from("contact_clicks").select("created_at, session_id, channel, path")).limit(20000),
    ]);
    const err = leads.error ?? visits.error ?? clicks.error;
    if (err) throw new Error(err.message);
    return { leads: leads.data ?? [], visits: visits.data ?? [], clicks: clicks.data ?? [] };
  });