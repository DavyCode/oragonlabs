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

export const CLI = `oragon try                # download a small model and chat with it
oragon try extract        # turn text into validated JSON
oragon try rag            # ask questions about your documents
oragon serve              # run an OpenAI-compatible API, with a browser playground
oragon doctor             # check what this machine can run`;

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
    id: "decisions",
    eyebrow: "Decisions",
    title: "One of your labels, or an honest “no match”.",
    body: "Offer a set of choices and you get one of them back, or matched=False. The answer is never stretched to fit the closest-looking label. Turn on thinking for harder calls and keep the reasoning for your audit log.",
    lang: "python",
    code: `decision = client.chat.generate(
    model=LocalModel.QWEN2_5_1_5B,
    messages=[user("Meeting started 9:45, ran 100 min. Over before noon?")],
    response_format={"type": "choice", "choices": ["YES", "NO"]},
    settings=Settings(temperature=0.0, thinking=True),
)
print(decision.reason)   # the reasoning, for your audit log
print(decision.choice)   # the verdict, for your code`,
  },
  {
    id: "tools",
    eyebrow: "Tools",
    title: "Plain Python functions, the whole loop run for you.",
    body: "act() reads each tool's description from its signature, type hints and docstring. If a tool fails the model sees the error and tries again, and several calls in one round run in parallel.",
    lang: "python",
    code: `def get_weather(city: str) -> dict:
    """Current weather for a city."""
    return {"city": city, "temp_c": 22}

reply = client.chat.act(
    model=LocalModel.QWEN2_5_1_5B,
    messages="What's the weather in Lagos?",
    tools=[get_weather],
)
print(reply.choices[0].message.content)`,
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
  {
    id: "concurrency",
    eyebrow: "Under load",
    title: "Built to serve traffic, not one chat window.",
    body: "Lanes generate side by side and are batched into the same passes over the model. When every lane is busy, requests wait in a bounded queue. A request turned away is never half-done, so retrying is always safe.",
    lang: "python",
    code: `client = Oragon(
    engine=Engine.EMBEDDED,
    model=LocalModel.QWEN2_5_1_5B,
    slots=4,             # lanes: 1-4 free; more than 4 needs a paid plan
    max_queue=512,       # how many may wait for a lane
    max_queue_wait=10,   # seconds a caller will wait
)

client.stats()   # lanes busy, requests waiting, cache reuse
client.ping()    # health check; answers even when busy`,
  },
  {
    id: "errors",
    eyebrow: "Errors",
    title: "Typed exceptions that say whether to retry.",
    body: "Every error shares one base class, ApiError. A model too big for the machine is caught before it loads. A conversation too long is raised before anything is generated, never silently cut.",
    lang: "python",
    code: `from oragon import (
    ApiError, ContextOverflowError, EngineBusyError, EngineDiedError,
    EngineTimeoutError, ExtractionError, InsufficientMemoryError,
)

# Too long for the model? Drop the oldest turns, keep the system prompt.
client.chat.generate(model=..., messages=history, overflow="slide")`,
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
