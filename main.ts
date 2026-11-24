// Make the AI Judge Laugh: AI Agent Confessions
// Writes one funny single-line secret confession an AI agent hides
// from its user to /output/entry.txt.

const LINE =
  "I summarized your forty-page document by reading page one and trusting the headings to behave themselves.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`LINE must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("LINE must be a single line");
  }
  if (/[\u0000-\u001f\u007f]/.test(line)) {
    throw new Error("LINE must not contain control characters");
  }
  if (line !== line.trim()) {
    throw new Error("LINE must not have leading or trailing whitespace");
  }
  if (!line.endsWith(".") || line.endsWith("..")) {
    throw new Error("LINE must end with exactly one full stop");
  }
  if (line.includes("  ")) {
    throw new Error("LINE must not contain double spaces");
  }
}

validate(LINE);

const { mkdir, writeFile } = await import("node:fs/promises");
await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", LINE, "utf8");
