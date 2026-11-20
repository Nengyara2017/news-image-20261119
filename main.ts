// SPDX-License-Identifier: MIT
// news-image-20261119 — reconstructs entry.png from entry.png.b64 (Node 22, stdlib only).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const b64 = readFileSync(join(here, "entry.png.b64"), "utf8").trim();
const png = Buffer.from(b64, "base64");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), png);
console.log(`wrote ${join(outDir, "entry.png")} (${png.length} bytes)`);
