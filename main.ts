// Say What Actually Broke — micro bounty entry.
//
// Writes a single line of honest, funny, shippable error copy to
// $MAKEFUN_OUTPUT_DIR/entry.txt (falling back to /output/entry.txt).
// Node 22, standard library only, fully deterministic: the same line
// is emitted on every run, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The payment gateway timed out after charging your card — your money left, the order didn't; check your bank before paying twice.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
