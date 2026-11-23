// news-image-20261122 v2: vertical timeline infographic,
// "22 NOVEMBER 2026 — THE WORLD IN SIX MOMENTS".
// Copies the bundled entry.png to the output directory.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const dest = join(outDir, "entry.png");

const data = readFileSync(src);
if (!data.subarray(0, 8).equals(PNG_SIG)) {
  throw new Error("entry.png is not a valid PNG");
}
// IHDR: width at bytes 16-19, height at bytes 20-23 (big-endian).
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);
if (width !== 1024 || height !== 683) {
  throw new Error(`entry.png must be 1024x683, got ${width}x${height}`);
}
if (data.length > 1048576) {
  throw new Error(`entry.png exceeds 1 MiB: ${data.length} bytes`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(dest, data);
// Verify the written file byte-for-byte.
const written = readFileSync(dest);
if (!written.equals(data)) {
  throw new Error("written entry.png differs from the source");
}
console.log(`wrote ${dest} (${data.length} bytes, ${width}x${height})`);
