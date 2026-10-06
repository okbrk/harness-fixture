import { test } from "node:test";
import assert from "node:assert/strict";
import { subtract, multiply, divide, modulo } from "../src/index.js";

test("subtract", () => {
  assert.equal(subtract(7, 2), 5);
});

test("multiply", () => {
  assert.equal(multiply(3, 4), 12);
});

test("divide", () => {
  assert.equal(divide(9, 3), 3);
});

test("modulo", () => {
  assert.equal(modulo(9, 4), 1);
});

test("divide by zero throws", () => {
  assert.throws(() => divide(1, 0), {
    name: "RangeError",
    message: "division by zero",
  });
});

test("modulo by zero throws", () => {
  assert.throws(() => modulo(1, 0), {
    name: "RangeError",
    message: "division by zero",
  });
});
