import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Acceso del equipo | XD Materials" },
      { name: "description", content: "Acceso privado al panel de leads y KPIs de XD Materials." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Acceso del equipo | XD Materials" },
      { property: "og:description", content: "Acceso privado al panel de leads y KPIs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = React.useState<"in" | "up" | "reset">("in");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [msg, setMsg] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);

  React.useEffect(() => {
    supabase.auth.getUser().then(({ data }) => { if (data.user) void navigate({ to: "/panel", replace: true }); });
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") void navigate({ to: "/panel", replace: true });
    });
    return () => data.subscription.unsubscribe();
  }, [navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg("Correo o contraseña incorrectos / Wrong email or password.");
    } else if (mode === "up") {
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth` } });
      setMsg(error ? error.message : "Revise su correo para confirmar la cuenta / Check your email to confirm your account.");
    } else {
      const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
      setMsg(error ? error.message : "Le enviamos un enlace para cambiar la contraseña / We sent you a reset link.");
    }
    setBusy(false);
  }

  async function google() {
    setMsg(null);
    const res = await lovable.auth.signInWithOAuth("google", { redirect_uri: `${window.location.origin}/auth` });
    if (res.error) setMsg(res.error.message);
  }

  return (
    <section className="mx-auto max-w-md px-5 py-16">
      <h1 className="text-2xl font-semibold">Acceso del equipo</h1>
      <p className="mt-2 text-sm text-muted-foreground">Panel privado de leads y KPIs · Private leads & KPI dashboard</p>
      <Button type="button" variant="outline" className="mt-8 h-11 w-full" onClick={google}>Continuar con Google / Continue with Google</Button>
      <div className="my-6 h-px bg-border" />
      <form onSubmit={submit} className="space-y-4">
        <div><Label htmlFor="email">Correo / Email</Label><Input id="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5 h-11" /></div>
        {mode !== "reset" && <div><Label htmlFor="password">Contraseña / Password</Label><Input id="password" type="password" minLength={8} autoComplete={mode === "up" ? "new-password" : "current-password"} required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1.5 h-11" /></div>}
        {msg && <p role="status" className="text-sm text-muted-foreground">{msg}</p>}
        <Button type="submit" disabled={busy} className="h-11 w-full">{mode === "in" ? "Iniciar sesión / Sign in" : mode === "up" ? "Crear cuenta / Create account" : "Enviar enlace / Send link"}</Button>
      </form>
      <div className="mt-5 flex flex-wrap justify-between gap-2 text-sm">
        <button type="button" className="underline" onClick={() => setMode(mode === "up" ? "in" : "up")}>{mode === "up" ? "Ya tengo cuenta / I have an account" : "Crear cuenta / Create account"}</button>
        <button type="button" className="underline" onClick={() => setMode("reset")}>¿Olvidó su contraseña? / Forgot password?</button>
      </div>
    </section>
  );
}