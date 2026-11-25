// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene (exactly 200 characters, one line)
// to <MAKEFUN_OUTPUT>/entry.txt with no trailing newline.
// Node-only, no dependencies. Written fresh from zero.

import * as fs from "node:fs";
import * as path from "node:path";

const ANSWER =
  "Sunday dinner, my daughter taught her grandma to video-call me, and grandma held the phone upside down the whole time, but she still saw my face, and I saw hers, and nobody fixed it because it worked.";

function isAscii(text) {
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) > 127) return false;
  }
  return true;
}

function checkAnswer(text) {
  if (text.length !== 200) throw new Error("answer must be exactly 200 characters, got " + text.length);
  if (text.length < 1 || text.length > 280) throw new Error("answer must be 1-280 characters");
  if (text.includes("\n") || text.includes("\r")) throw new Error("answer must be a single line");
  if (!isAscii(text)) throw new Error("answer must be ASCII only");
  if (text !== text.trim()) throw new Error("answer must not have leading or trailing spaces");
  if (text.trim().length === 0) throw new Error("answer must not be whitespace-only");
}

function main() {
  checkAnswer(ANSWER);
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, "entry.txt");
  fs.writeFileSync(outFile, ANSWER, "utf8");
  const back = fs.readFileSync(outFile, "utf8");
  if (back !== ANSWER) throw new Error("verify-after-write failed: entry.txt differs from answer");
  const bytes = fs.readFileSync(outFile);
  if (bytes.length !== 200) throw new Error("verify-after-write failed: entry.txt must be 200 bytes, got " + bytes.length);
}

main();
