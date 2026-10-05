import { test } from "node:test";
import assert from "node:assert/strict";
import { add } from "../src/math.js";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("multiply", async () => {
  const { multiply } = await import("../src/math.js");
  assert.equal(multiply(3, 4), 12);
});
