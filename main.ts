import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

// Rebuild #2: dial-memory + wipe (135c).
const line = "I toasted for four of your exes. My dial remembers their settings. You wiped my memory this morning. I'm leaving. I don't remember you.";

const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);
