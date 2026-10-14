import fs from "node:fs";
import path from "node:path";

export type Daily = {
  date: string;
  source: string; // model id, or "hand" for a hand-written day
  danish: { word: string; pronunciation: string; meaning: string; example: string; translation: string; note: string };
  maths: { kind: "theorem" | "fact" | "puzzle"; title: string; text: string };
  coding: { title: string; difficulty: "easy" | "medium" | "hard"; topic: string; statement: string; examples: { input: string; output: string; note: string | null }[]; approach: string; code: string; complexity: string };
  olympiad: { title: string; difficulty: "easy" | "medium" | "hard"; topic: string; statement: string; solution: string };
};

const DIR = path.join(process.cwd(), "src", "data", "daily");

/** All generated days, newest first. Read at build time only. */
export function getDays(): Daily[] {
  return fs.readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .reverse()
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as Daily);
}

export function prettyDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" });
}
