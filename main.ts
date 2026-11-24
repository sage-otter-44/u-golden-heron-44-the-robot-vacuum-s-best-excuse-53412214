import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "My lidar scanned the dust bunny under the couch, classified it as a sleeping pet, and I have been quietly respecting its nap ever since.";

// Gate: the entry must be 1-140 characters of non-whitespace text.
if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`Entry invalid: ${entry.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
