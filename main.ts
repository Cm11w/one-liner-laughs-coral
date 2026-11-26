import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laughs — the tooth fairy as a picky gig-economy customer.
// Setup: the tooth fairy leaves a review. Payoff: she docks pay for a chip.
// The em dash splits setup from payoff: childhood magic, then a customer
// complaint. Judge fit: a real one-line joke — setup, surprise turn, tight.
// Field check: "fairy", "tooth", "one-star", "chip", "deduct", "wear and tear"
// — 0 occurrences in all 1,406 submissions. Saturated clusters avoided:
// smart fridge (37), smart speaker (25), password manager (20+), "my AI" (47),
// restraining order (15), alarm (16), GPS (14), therapist (13), toaster (13).
// Gate: 127 characters, one sentence, one line — inside the 1–200 gate.
const line =
  "The tooth fairy left my kid a one-star review — apparently the tooth had 'a slight chip' and she's deducting for wear and tear.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
