/* The Oragon SDK, as published on PyPI. Snippets are lifted from the package
   README (pypi.org/project/oragon); keep them in step when the API changes,
   since people will paste these straight into a terminal. No version number
   is hardcoded on purpose: PyPI is the source of truth for that. */

export const PYPI_URL = "https://pypi.org/project/oragon/";
export const INSTALL = "pip install oragon";

export const HELLO = `from oragon import Oragon, Engine, LocalModel, user

client = Oragon(
    engine=Engine.EMBEDDED,
    model=LocalModel.QWEN2_5_0_5B,
)

reply = client.chat.generate(
    model=LocalModel.QWEN2_5_0_5B,
    messages=[user("Name one primary color.")],
)
print(reply.choices[0].message.content)`;

/** The four promises the README leads with, condensed for cards. */
export const SDK_POINTS = [
  {
    k: "01",
    title: "It says when it doesn't know",
    body: "Valid data or a clear error. The exact label you asked for or “no match”. A cited answer or an honest refusal. Never a guess dressed up as an answer.",
  },
  {
    k: "02",
    title: "It fails like production software",
    body: "Every error is a typed exception that says whether a retry is safe. Memory is checked before a model loads, context length before a word is generated.",
  },
  {
    k: "03",
    title: "It handles many requests at once",
    body: "Requests are batched, shared prompts are cached, overflow waits in a bounded queue, and a request turned away is retried for you.",
  },
  {
    k: "04",
    title: "Your data stays yours",
    body: "The engine ships inside the package. No signup, no API key, no telemetry. Prompts and answers never leave the machine.",
  },
];

export type Snippet = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  lang: "python" | "shell";
  code: string;
};

export const SNIPPETS: Snippet[] = [
  {
    id: "structured",
    eyebrow: "Structured data",
    title: "Data that matches your schema, or an error.",
    body: "Pass a JSON schema. It is enforced while the model writes, so output that would break it cannot be produced. You get valid data or an ExtractionError, nothing in between.",
    lang: "python",
    code: `rows = client.chat.generate(
    model=LocalModel.QWEN2_5_1_5B,
    messages=[user(invoice_text)],
    response_schema={"type": "array", "items": {
        "type": "object",
        "required": ["date", "amount"],
        "properties": {"date": {"type": "string"}, "amount": {"type": "number"}},
    }},
)`,
  },
  {
    id: "documents",
    eyebrow: "Your documents",
    title: "Cited answers, and a refusal when the documents don't say.",
    body: "Search by words and by meaning, entirely on your machine. The embedding model runs inside the same engine, so there is no second service. A citation the model made up is flagged, not quietly fixed.",
    lang: "python",
    code: `from oragon.rag import DocumentQA, EngineRetriever, ingest

retriever = EngineRetriever()
ingest(["handbook.md", "policy.pdf"], retriever)

qa = DocumentQA(client, model=LocalModel.QWEN2_5_1_5B, retriever=retriever)
result = qa.ask("How many vacation days do new hires get?")

if result.refused:
    print("The documents don't say.")
else:
    print(result.text)               # with citations like [1]`,
  },
  {
    id: "serve",
    eyebrow: "OpenAI-compatible API",
    title: "Serve it over HTTP. Any OpenAI client can join in.",
    body: "oragon serve runs an OpenAI-compatible API with a browser playground and a live console. Binding to a network address without a token is refused at startup.",
    lang: "python",
    code: `# $ oragon serve --expose
from openai import OpenAI

client = OpenAI(base_url="http://127.0.0.1:8080/v1", api_key=TOKEN)
client.chat.completions.create(model="qwen2.5-1.5b", messages=[...])`,
  },
];

/* Covered on the page as text only, to keep it to a few code samples.
   Full examples for each are in the PyPI README. */
export const MORE_FEATURES = [
  {
    title: "Decisions",
    body: "Offer a set of labels and get one of them back, or an honest \u201cno match\u201d. Never stretched to fit.",
  },
  {
    title: "Tool use",
    body: "Hand it plain Python functions and act() runs the whole loop, retrying when a tool fails.",
  },
  {
    title: "Built for load",
    body: "Requests run side by side, wait in a bounded queue when busy, and are retried for you when turned away.",
  },
  {
    title: "Typed errors",
    body: "Every error says whether a retry is safe. Too little memory or too long a prompt is caught before any work starts.",
  },
];

/* Measured, from the README's benchmark table: 16 GB MacBook (Apple M4)
   running qwen2.5-1.5b unless stated. */
export const SDK_STATS = [
  { label: "Concurrent, CPU only", value: "16", unit: "requests, 12+ tok/s each" },
  { label: "Flood test", value: "6,000", unit: "requests, none left hanging" },
  { label: "Long system prompt", value: "10s → 0.5s", unit: "warmed at startup" },
  { label: "Startup", value: "0.8s", unit: "to first answer, small model" },
];

export const PLATFORMS: [string, string][] = [
  ["Python", "3.9 to 3.13"],
  ["macOS 11+, Apple silicon", "Accelerated on the Apple GPU"],
  ["Linux x86-64", "NVIDIA, AMD or Intel GPU via Vulkan, or CPU"],
  ["Linux arm64", "CPU"],
  ["Servers & GPUs", "pip install \"oragon[gpu]\" (Linux, NVIDIA)"],
  ["Windows, Intel Macs", "Coming soon"],
];
