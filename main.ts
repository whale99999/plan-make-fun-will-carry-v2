import { mkdirSync, writeFileSync } from "node:fs";

const PLAN = "Day 1: sell $49 Shopify checkout audits on Fiverr, 24h delivery. Find buyers in Meta Ads Library: ad-running stores, slow checkouts. Deliver a friction report + fixes. $100 funds a promoted gig + 2 samples. 2/wk = $392/mo. Edge: a product, not hours — one template, no meetings.";

const n = [...PLAN].length;
if (n < 1 || n > 280 || PLAN.trim().length === 0) {
  console.error(`plan is ${n} code points, must be 1-280`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
console.log(`wrote ${n} code points to /output/entry.txt`);
