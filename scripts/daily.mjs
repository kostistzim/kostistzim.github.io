// Generates today's "daily" content (Danish word, maths item, two problems with full solutions)
// with one Claude call and writes it to src/data/daily/YYYY-MM-DD.json.
// Runs in the deploy workflow before `next build`. Skips quietly when there is no API key
// or today's file already exists, so the build never depends on the API being up.
import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";

const OUT = path.resolve("src/data/daily");
const MODEL = process.env.DAILY_MODEL || "claude-haiku-5-5";

const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Copenhagen", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
const file = path.join(OUT, `${today}.json`);

if (fs.existsSync(file)) { console.log(`daily: ${today} already exists`); process.exit(0); }
if (!process.env.ANTHROPIC_API_KEY) { console.log("daily: ANTHROPIC_API_KEY not set, keeping the last generated day"); process.exit(0); }

const previous = fs.readdirSync(OUT).filter((f) => f.endsWith(".json")).sort().slice(-21)
  .map((f) => JSON.parse(fs.readFileSync(path.join(OUT, f), "utf8")));
const avoid = {
  words: previous.map((d) => d.danish?.word).filter(Boolean),
  maths: previous.map((d) => d.maths?.title).filter(Boolean),
  coding: previous.map((d) => d.coding?.title).filter(Boolean),
  olympiad: previous.map((d) => d.olympiad?.title).filter(Boolean),
};

// Difficulty follows the weekday so the week has a rhythm: easy Monday, hard Friday, mixed weekend.
const weekday = new Date(`${today}T12:00:00Z`).getUTCDay(); // 0 = Sunday
const codingLevel = ["medium", "easy", "easy", "medium", "medium", "hard", "hard"][weekday];
const olympiadLevel = ["hard", "easy", "medium", "easy", "medium", "hard", "medium"][weekday];

const Example = z.object({ input: z.string(), output: z.string(), note: z.string().nullable() });
const Daily = z.object({
  danish: z.object({
    word: z.string().describe("A useful everyday Danish word or short phrase"),
    pronunciation: z.string().describe("Rough pronunciation for an English speaker"),
    meaning: z.string().describe("Plain English meaning, one line"),
    example: z.string().describe("A natural Danish example sentence"),
    translation: z.string().describe("English translation of the example"),
    note: z.string().describe("One sentence of usage or cultural context"),
  }),
  maths: z.object({
    kind: z.enum(["theorem", "fact", "puzzle"]),
    title: z.string(),
    text: z.string().describe("Two to five sentences: state it, then why it is true or why it is surprising. Plain text and Unicode symbols, no LaTeX."),
  }),
  coding: z.object({
    title: z.string(),
    difficulty: z.enum(["easy", "medium", "hard"]),
    topic: z.string().describe("e.g. arrays, hashing, dynamic programming, graphs"),
    statement: z.string().describe("The full problem statement in plain text, with constraints"),
    examples: z.array(Example).min(2).max(3),
    approach: z.string().describe("The idea behind the solution in a short paragraph"),
    code: z.string().describe("A complete, correct Python 3 solution as a function, with brief comments"),
    complexity: z.string().describe("Time and space complexity, one line"),
  }),
  olympiad: z.object({
    title: z.string(),
    difficulty: z.enum(["easy", "medium", "hard"]),
    topic: z.string().describe("e.g. number theory, combinatorics, inequalities, geometry"),
    statement: z.string().describe("A self-contained problem in the style of a national olympiad, plain text and Unicode, no LaTeX"),
    solution: z.string().describe("A complete rigorous solution with every step justified, in plain text"),
  }),
});

const client = new Anthropic();
let response;
try {
  response = await client.messages.parse({
  model: MODEL,
  max_tokens: 16000,
  system:
    "You write a short daily page for a personal site of a mathematics graduate in Copenhagen who is learning Danish. " +
    "Everything must be correct: verify every solution before answering, and prefer a slightly easier problem you are certain about over a harder one you are not. " +
    "Use plain text with Unicode mathematical symbols (×, ≤, √, ∑, ², ₙ); never LaTeX. Keep statements self-contained and original in wording.",
  messages: [{
    role: "user",
    content:
      `Date: ${today}. Produce today's content.\n` +
      `Coding problem difficulty: ${codingLevel}. Olympiad problem difficulty: ${olympiadLevel}.\n` +
      `Do not reuse these recent Danish words: ${avoid.words.join(", ") || "none"}.\n` +
      `Do not reuse these recent maths titles: ${avoid.maths.join("; ") || "none"}.\n` +
      `Do not reuse these recent coding problems: ${avoid.coding.join("; ") || "none"}.\n` +
      `Do not reuse these recent olympiad problems: ${avoid.olympiad.join("; ") || "none"}.`,
  }],
  output_config: { format: zodOutputFormat(Daily) },
  });
} catch (err) {
  // A failed call must never fail the deploy: the site keeps the last generated day.
  if (err instanceof Anthropic.AuthenticationError) console.error("daily: the API key was rejected");
  else if (err instanceof Anthropic.RateLimitError) console.error("daily: rate limited, will try again tomorrow");
  else if (err instanceof Anthropic.APIError) console.error(`daily: API error ${err.status}: ${err.message}`);
  else console.error("daily: request failed:", err);
  process.exit(0);
}

if (response.stop_reason === "refusal") { console.error("daily: the model refused", response.stop_details); process.exit(0); }
const data = response.parsed_output;
if (!data) { console.error("daily: could not parse the model output"); process.exit(0); }

fs.writeFileSync(file, JSON.stringify({ date: today, source: MODEL, ...data }, null, 2) + "\n");
console.log(`daily: wrote ${file} (${response.usage.input_tokens} in, ${response.usage.output_tokens} out)`);
