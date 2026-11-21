import test from "node:test";
import assert from "node:assert/strict";
import { evaluateScheme } from "../engine.js";

test("likely match only when all required rules pass", () => {
  const scheme = { eligibilityRules: [
    { field: "state", operator: "equals", value: "Assam", explanation: "Resident of Assam" },
    { field: "age", operator: "between", value: [18, 30], explanation: "Age 18–30" },
  ]};
  assert.equal(evaluateScheme({ state: "Assam", age: 22 }, scheme).status, "likely_match");
});

test("missing required information remains unknown", () => {
  const scheme = { eligibilityRules: [
    { field: "incomeBand", operator: "equals", value: "Below ₹2.5 lakh", explanation: "Low income" },
  ]};
  assert.equal(evaluateScheme({}, scheme).status, "needs_more_information");
});

test("one explicit conflict makes the overall result unlikely", () => {
  const scheme = { eligibilityRules: [
    { field: "age", operator: "lte", value: 30, explanation: "30 or younger" },
  ]};
  assert.equal(evaluateScheme({ age: 40 }, scheme).status, "unlikely_match");
});
