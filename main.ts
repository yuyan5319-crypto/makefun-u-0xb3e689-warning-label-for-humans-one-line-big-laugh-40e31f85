// Warning Label for Humans: One Line, Big Laugh
// Writes a single-line safety warning label for every human being
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output), mode 0644.

import { mkdirSync, writeFileSync, readFileSync, chmodSync, statSync } from "node:fs";
import { join } from "node:path";

// The label: funny first, plausible second, the punch lands in the
// last few words, like a real printed warning label.
const LINE =
  "WARNING: This human ships with no off switch, no warranty, and a battery that dies at 3 p.m. and refuses to charge until midnight.";

const MAX_LENGTH = 160;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_LENGTH) {
    throw new Error(
      `entry must be 1-${MAX_LENGTH} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // No control characters other than ordinary spacing.
  for (const ch of line) {
    const code = ch.codePointAt(0)!;
    if (code < 0x20 && ch !== "\t") {
      throw new Error(`entry contains control character U+${code.toString(16)}`);
    }
  }
}

function main(): void {
  validate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  chmodSync(outPath, 0o644);
  // Read it back and verify exactly what the grader will see.
  const back = readFileSync(outPath, "utf8");
  if (back !== LINE) {
    throw new Error("verification failed: entry.txt does not match the label");
  }
  // The grader reads the file later, so confirm the mode is really 0644
  // (a 0600 file would fail its read).
  const mode = statSync(outPath).mode & 0o777;
  if (mode !== 0o644) {
    throw new Error(`verification failed: entry.txt mode is 0${mode.toString(8)}, expected 0644`);
  }
  console.log(`wrote ${outPath} (${LINE.length} chars)`);
}

main();
