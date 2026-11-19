import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { EV_DRIVE_UNIT } from "./drive-units";

describe("EV drive-unit purchasing inquiries", () => {
  it("supports an EV drive-unit inquiry in both site languages", () => {
    assert.equal(EV_DRIVE_UNIT.id, "ev-drive-unit");
    assert.equal(EV_DRIVE_UNIT.inquiry.es, "Unidad de propulsión EV (drive unit)");
    assert.equal(EV_DRIVE_UNIT.inquiry.en, "EV drive unit");
  });
});