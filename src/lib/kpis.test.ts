import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { contactChannel, leadKind, summarize, toCsv } from "./kpis";

describe("leads dashboard KPIs", () => {
  it("classifies WhatsApp, phone and email taps", () => {
    assert.equal(contactChannel("https://wa.me/528180835739?text=hola"), "whatsapp");
    assert.equal(contactChannel("tel:+528180835739"), "phone");
    assert.equal(contactChannel("mailto:crecio@xd-global.com"), "email");
    assert.equal(contactChannel("/servicios"), null);
  });

  it("separates quick-form leads from full-form leads", () => {
    assert.equal(leadKind({ notes: "Lead rápido (home hero)" }), "quick");
    assert.equal(leadKind({ notes: "Recolección y desecho de baterías" }), "full");
  });

  it("counts visits per session and contact rate", () => {
    const s = summarize({
      visits: [
        { created_at: "2026-11-02T18:00:00Z", session_id: "aaaaaaaa", path: "/", referrer_host: null, device: "mobile" },
        { created_at: "2026-11-02T18:01:00Z", session_id: "aaaaaaaa", path: "/servicios", referrer_host: null, device: "mobile" },
        { created_at: "2026-11-03T18:00:00Z", session_id: "bbbbbbbb", path: "/", referrer_host: "google.com", device: "desktop" },
      ],
      clicks: [{ created_at: "2026-11-02T18:02:00Z", session_id: "aaaaaaaa", channel: "whatsapp", path: "/" }],
      leads: [],
    }, ["2026-11-02", "2026-11-03"]);
    assert.equal(s.visits, 2);
    assert.equal(s.pageViews, 3);
    assert.equal(s.byChannel.whatsapp, 1);
    assert.equal(s.contactRate, 50);
    assert.deepEqual(s.daily.map((d) => d.visits), [1, 1]);
  });

  it("escapes CSV values for spreadsheets", () => {
    assert.equal(toCsv([["a,b", 'say "hi"']]), '\uFEFF"a,b","say ""hi"""');
  });
});