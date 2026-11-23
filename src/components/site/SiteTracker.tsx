import * as React from "react";
import { useRouterState } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useI18n } from "@/lib/i18n";
import { contactChannel } from "@/lib/kpis";
import { recordContactClick, recordVisit } from "@/lib/tracking.functions";

const PRIVATE = ["/panel", "/auth", "/reset-password"];
const INTERNAL_KEY = "xd_internal";

/** Team browsers: anyone who opened the private login/panel or holds a signed-in session. */
function isInternal(path: string) {
  try {
    if (PRIVATE.some((p) => path.startsWith(p)) || new URLSearchParams(window.location.search).has("team")) {
      localStorage.setItem(INTERNAL_KEY, "1");
    }
    if (Object.keys(localStorage).some((k) => k.startsWith("sb-") && k.endsWith("-auth-token"))) {
      localStorage.setItem(INTERNAL_KEY, "1");
    }
    return localStorage.getItem(INTERNAL_KEY) === "1";
  } catch {
    return false;
  }
}

function sessionId() {
  let id = sessionStorage.getItem("xd_visit");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("xd_visit", id);
  }
  return id;
}

function skipTracking(path: string) {
  const host = window.location.hostname;
  return isInternal(path) || PRIVATE.some((p) => path.startsWith(p)) || host.includes("id-preview--") || host.endsWith("lovableproject.com");
}

/** Records anonymous page visits and contact-button taps for the private leads dashboard. */
export function SiteTracker() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { lang } = useI18n();
  const visit = useServerFn(recordVisit);
  const tap = useServerFn(recordContactClick);
  const langRef = React.useRef(lang);
  langRef.current = lang;

  React.useEffect(() => {
    if (skipTracking(path)) return;
    const ref = document.referrer ? new URL(document.referrer).hostname : "";
    const referrerHost = ref && ref !== window.location.hostname ? ref.replace(/^www\./, "") : null;
    const w = window.innerWidth;
    const device = w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop";
    void visit({ data: { sessionId: sessionId(), path, referrerHost, device, lang: langRef.current } }).catch(() => {});
  }, [path, visit]);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const channel = contactChannel(a.getAttribute("href") ?? "");
      const p = window.location.pathname;
      // Careers CV emails are job applications, not customer contacts.
      if (!channel || skipTracking(p) || p.startsWith("/careers")) return;
      void tap({ data: { sessionId: sessionId(), path: p, channel, lang: langRef.current } }).catch(() => {});
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [tap]);

  return null;
}