import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Nueva contraseña | XD Materials" },
      { name: "description", content: "Cambie la contraseña de acceso al panel privado." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Nueva contraseña | XD Materials" },
      { property: "og:description", content: "Cambio de contraseña del panel privado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResetPage,
});

function ResetPage() {
  const navigate = useNavigate();
  const [password, setPassword] = React.useState("");
  const [msg, setMsg] = React.useState<string | null>(null);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setMsg(error.message);
    else void navigate({ to: "/panel", replace: true });
  }
  return (
    <section className="mx-auto max-w-md px-5 py-16">
      <h1 className="text-2xl font-semibold">Nueva contraseña / New password</h1>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <div><Label htmlFor="pw">Contraseña / Password</Label><Input id="pw" type="password" minLength={8} required autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1.5 h-11" /></div>
        {msg && <p role="status" className="text-sm text-destructive">{msg}</p>}
        <Button type="submit" className="h-11 w-full">Guardar / Save</Button>
      </form>
    </section>
  );
}