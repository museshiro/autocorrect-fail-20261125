import { mkdirSync, writeFileSync } from "node:fs";

// Funniest autocorrect fail — the whole entry is this one line.
// Written exactly as-is, with no trailing newline, so the output
// bytes match the expected hash byte-for-byte.
const line = "I accidentally sent the invoice to the wrong climate.";

// The grader's sandbox is read-only outside /output, so the only
// write target is the absolute /output/entry.txt path — never a
// relative entry.txt, and with no env gating or try/catch hiding it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
