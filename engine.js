export function evaluateRule(profile, rule) {
  const raw = profile[rule.field];
  if (raw === undefined || raw === null || raw === "") {
    return { status: "unknown", explanation: rule.explanation, field: rule.field };
  }

  let passed = false;
  if (rule.operator === "equals") passed = String(raw).toLowerCase() === String(rule.value).toLowerCase();
  if (rule.operator === "in") passed = rule.value.includes(raw);
  if (rule.operator === "gte") passed = Number(raw) >= Number(rule.value);
  if (rule.operator === "lte") passed = Number(raw) <= Number(rule.value);
  if (rule.operator === "between") passed = Number(raw) >= rule.value[0] && Number(raw) <= rule.value[1];
  if (rule.operator === "lteOrUnknown") passed = rule.value.includes(raw) || raw === "";

  return {
    status: passed ? "met" : "not_met",
    explanation: rule.explanation,
    field: rule.field,
  };
}

export function evaluateScheme(profile, scheme) {
  const results = scheme.eligibilityRules.map((rule) => evaluateRule(profile, rule));
  let status = "likely_match";
  if (results.some((item) => item.status === "not_met")) status = "unlikely_match";
  else if (results.some((item) => item.status === "unknown")) status = "needs_more_information";

  return { status, results };
}
