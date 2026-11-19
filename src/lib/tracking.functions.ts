import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

const base = {
  sessionId: z.string().min(8).max(64),
  path: z.string().min(1).max(300),
  lang: z.enum(["es", "en"]),
};

export const recordVisit = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => z.object({ ...base, referrerHost: z.string().max(200).nullable(), device: z.enum(["desktop", "mobile", "tablet"]) }).parse(d))
  .handler(async ({ data }) => {
    const { error } = await publicClient().from("site_visits").insert({
      session_id: data.sessionId, path: data.path, referrer_host: data.referrerHost, device: data.device, lang: data.lang,
    });
    if (error) console.error("visit insert failed", error.message);
    return { ok: !error };
  });

export const recordContactClick = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => z.object({ ...base, channel: z.enum(["whatsapp", "phone", "email"]) }).parse(d))
  .handler(async ({ data }) => {
    const { error } = await publicClient().from("contact_clicks").insert({
      session_id: data.sessionId, path: data.path, channel: data.channel, lang: data.lang,
    });
    if (error) console.error("contact click insert failed", error.message);
    return { ok: !error };
  });