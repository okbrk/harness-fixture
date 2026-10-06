import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp } from "../src/clamp.js";

test("clamp returns min when value is below min", () => {
  assert.equal(clamp(-5, 0, 10), 0);
});

test("clamp returns value when inside the range", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp returns max when value is above max", () => {
  assert.equal(clamp(15, 0, 10), 10);
});

test("clamp returns min when value equals min", () => {
  assert.equal(clamp(0, 0, 10), 0);
});

test("clamp returns max when value equals max", () => {
  assert.equal(clamp(10, 0, 10), 10);
});
