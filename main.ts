// One Word, First Thought — entry: "defenestration"
// The first word that comes to mind, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate (kit RULES.txt): UTF-8 text of 1 to 24 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "defenestration";

const chars = [...WORD];
if (chars.length < 1 || chars.length > 24) {
  throw new Error(`word must be 1-24 characters, got ${chars.length}`);
}
if (!/\S/.test(WORD)) {
  throw new Error("word must not be only whitespace");
}
if (/\s/.test(WORD)) {
  throw new Error("word must be a single word with no whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`wrote entry.txt: ${WORD} (${chars.length} chars)`);
