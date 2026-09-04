import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const leadSchema = z.object({
  company: z.string().min(1).max(200),
  contactName: z.string().min(1).max(200),
  role: z.string().max(200).optional().default(""),
  email: z.string().email().max(200),
  phone: z.string().min(6).max(60),
  country: z.string().min(1).max(120),
  city: z.string().min(1).max(120),
  chemistry: z.string().max(200).optional().default(""),
  format: z.string().max(200).optional().default(""),
  quantity: z.string().max(200).optional().default(""),
  condition: z.string().max(200).optional().default(""),
  frequency: z.string().max(200).optional().default(""),
  pickup: z.string().max(200).optional().default(""),
  notes: z.string().max(4000).optional().default(""),
  urgent: z.boolean().optional().default(false),
  fileNames: z.array(z.string().max(300)).max(5).optional().default([]),
  sourcePage: z.string().max(500).optional().default(""),
  lang: z.string().max(5).optional().default("es"),
});

export const submitQuoteLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createClient<Database>(
      process.env["SUPABASE_URL"]!,
      process.env["SUPABASE_PUBLISHABLE_KEY"]!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    const { error } = await supabase.from("quote_leads").insert({
      company: data.company,
      contact_name: data.contactName,
      role: data.role,
      email: data.email,
      phone: data.phone,
      country: data.country,
      city: data.city,
      chemistry: data.chemistry,
      format: data.format,
      quantity: data.quantity,
      condition: data.condition,
      frequency: data.frequency,
      pickup: data.pickup,
      notes: data.notes,
      urgent: data.urgent,
      file_names: data.fileNames,
      source_page: data.sourcePage,
      lang: data.lang,
    });

    if (error) {
      console.error("quote_leads insert failed", error.message);
      return { ok: false as const };
    }
    return { ok: true as const };
  });
