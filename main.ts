import { mkdirSync, writeFileSync } from "node:fs";

const partA = "Just a reminder: your apartment with ";
const partB = "Dr. Patel is Thursday at 3.";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
