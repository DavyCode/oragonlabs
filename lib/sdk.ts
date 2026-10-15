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

export const INSTALL_STEPS = `pip install oragon        # the engine is inside the package
oragon doctor             # check what this machine can run
oragon try                # download a small model and chat with it`;

/* Real output of HELLO, captured by running it against the published
   package. Re-run it rather than editing this by hand. */
export const HELLO_OUTPUT = `One primary color is red.`;

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


/* Covered on the page as text only, so the only code samples are install and hello-world.
   Full examples for each are in the PyPI README. */
export const MORE_FEATURES = [
  {
    title: "Structured data",
    body: "Pass a JSON schema and get data that matches it, or an ExtractionError. The schema is enforced while the model writes.",
  },
  {
    title: "Your documents",
    body: "Ask questions about your own files and get cited answers, or a refusal when the documents don't say. Searched entirely on your machine.",
  },
  {
    title: "OpenAI-compatible API",
    body: "oragon serve puts an OpenAI-compatible API in front of the model, with a browser playground. Any OpenAI client, in any language, can use it.",
  },
  {
    title: "Decisions",
    body: "Offer a set of labels and get one of them back, or an honest \u201cno match\u201d. Never stretched to fit.",
  },
  {
    title: "Tool use",
    body: "Hand it plain Python functions and act() runs the whole loop, retrying when a tool fails.",
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
