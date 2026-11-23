import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Day 1: list 200 Shopify stores running Meta ads (Ad Library). Email each a $49 AI checkout audit: I crawl the store, find 5 leaks, deliver fixes in 24h. Close 2% = 4 sales = $196. Raise to $79 week 2, upsell $199 fixes. Likely day 30: $400-600 net. Edge: buyers pay for traffic.";

const length = [...PLAN].length;
if (length < 1 || length > 280) {
  console.error(`entry is ${length} code points, must be 1-280`);
  process.exit(1);
}
if (PLAN.trim().length === 0) {
  console.error("entry is only whitespace");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
console.log(`wrote /output/entry.txt (${length} code points)`);
