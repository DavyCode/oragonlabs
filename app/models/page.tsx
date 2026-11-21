import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import DocsLink from "@/components/DocsLink";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Contact from "@/components/sections/Contact";
import { Arrow } from "@/components/Icons";
import { InstallLine } from "@/components/CodeBlock";

export const metadata: Metadata = pageMetadata({
  title: "Oragon models",
  description:
    "Oragon models are intelligent small language models with thinking and tool calling, built to run on a CPU and faster still on a GPU. Coming soon.",
  path: "/models",
});

const CAPABILITIES = [
  {
    title: "Thinking",
    body: "Works a problem through step by step before it answers.",
  },
  {
    title: "Tool calling",
    body: "Calls your functions and APIs reliably, so it can act, not just talk.",
  },
  {
    title: "Runs on a CPU",
    body: "Built for the laptops and servers you already own. No GPU needed to run it well.",
  },
  {
    title: "Faster on a GPU",
    body: "Where a GPU is available, the same model uses it. One model, any hardware.",
  },
];

/* What Oragon runs today. "Your own models" is `oragon import` in the
   console docs (oragon-app docs/models.md): a GGUF file or a fine-tune
   checkpoint. Oragon's own models (coming soon) close the page, in the dark
   band above the footer. */
const RUNS: { tag: string; title: string; body: string; command?: string }[] = [
  {
    tag: "Available today",
    title: "Open-source models",
    body: "Any open-source language model, from the popular ones below to whatever ships next.",
  },
  {
    tag: "Available today",
    title: "Your own models",
    body: "Trained or fine-tuned your own? Import the model file or checkpoint folder and run it the same way.",
    command: "oragon import ./my-model.gguf",
  },
];

/* Ready-to-download models, from the console docs (oragon-app
   docs/models.md). Keep in step with that page. */
const SUPPORTED: [string, string, string][] = [
  ["qwen2.5-0.5b", "0.6 GB", "Decisions, extraction, classification; the fastest"],
  ["qwen3-0.6b", "0.8 GB", "General chat on very small machines"],
  ["qwen2.5-1.5b", "1.3 GB", "The default: chat, tools, grounded answers"],
  ["phi-4-mini", "2.7 GB", "Reasoning-heavy tasks on a capable laptop"],
  ["qwen3-8b-standard", "5.4 GB", "Server-class answer quality"],
  ["phi-4-14b", "9.1 GB", "The strongest single model available"],
  ["qwen3-30b-a3b", "18.8 GB", "Server deployments"],
];

export default function ModelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Oragon models · Coming soon"
        title="Intelligent small language models that run on a CPU."
        lede="Our own intelligent small language models: light enough for ordinary hardware, with thinking and tool calling built in. They run on a CPU, and faster still on a GPU."
        actions={
          <>
            <a href="#contact" className="btn btn-on-dark">
              Get early access <Arrow />
            </a>
            <Link
              href="/sdk"
              className="btn btn-pill border-white/35 bg-transparent text-white hover:bg-white hover:text-black"
            >
              Start with the SDK today <Arrow />
            </Link>
          </>
        }
        meta={[
          { k: "Capabilities", v: "Thinking and tool calling" },
          { k: "Runs on", v: "CPU and GPU" },
          { k: "Status", v: "Coming soon" },
        ]}
      />

      {/* --- Capabilities ---------------------------------------------- */}
      <section className="blueprint bg-white">
        <div className="px-5 py-24 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6">What they do</p>
              <h2 className="display max-w-[18ch] text-[clamp(30px,4vw,48px)]">
                Small models, built to do real work.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {CAPABILITIES.map((c, i) => (
                <Reveal key={c.title} delay={i * 60} className="h-full">
                  <div className="h-full bg-white p-7">
                    <h3 className="text-[20px] font-semibold tracking-[-0.015em]">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Available today ------------------------------------------- */}
      <section className="bg-bone">
        <div className="px-5 py-24 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6">Any model</p>
              <h2 className="display max-w-[20ch] text-[clamp(30px,4vw,48px)]">
                Run any open-source model, even one you trained.
              </h2>
              <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink-2">
                Oragon isn&apos;t tied to one model. It runs Oragon&apos;s own
                models, any open-source language model, and the models you have
                trained or fine-tuned yourself, all on your own hardware. None of them
                needs a GPU.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
              {RUNS.map((r, i) => (
                <Reveal key={r.title} delay={i * 60} className="h-full">
                  <div className="flex h-full flex-col bg-white p-7">
                    <span className="font-mono text-[11px] uppercase tracking-[1px] text-grey">
                      {r.tag}
                    </span>
                    <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.015em]">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                      {r.body}
                    </p>
                    {r.command && (
                      <div className="mt-6">
                        <p className="eyebrow mb-3">Bring your own</p>
                        <InstallLine command={r.command} />
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <h3 className="mt-16 text-[22px] font-semibold tracking-[-0.02em]">
                Ready to download
              </h3>
              <p className="mt-2 max-w-[60ch] text-[15.5px] leading-relaxed text-ink-2">
                Popular open models, set up and tested. Any other open-source
                model works too.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-6 overflow-x-auto border border-line bg-white">
                <table className="w-full min-w-[560px] text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-line">
                      <th className="eyebrow px-6 py-4 text-[11.5px]">Model</th>
                      <th className="eyebrow px-6 py-4 text-[11.5px]">Download</th>
                      <th className="eyebrow px-6 py-4 text-[11.5px]">Good at</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SUPPORTED.map(([name, size, use]) => (
                      <tr key={name} className="border-b border-line last:border-b-0">
                        <td className="px-6 py-4 font-mono text-[13.5px]">{name}</td>
                        <td className="px-6 py-4 text-ink-2">{size}</td>
                        <td className="px-6 py-4 text-ink-2">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal>
              <DocsLink path="/models" className="link-arrow mt-10">
                How to choose a model <Arrow />
              </DocsLink>
            </Reveal>
          </div>
        </div>
      </section>

      <Contact
        eyebrow="Coming soon · Oragon models"
        heading="Be first to run Oragon models."
        body="Our own intelligent small language models, built for CPUs. Tell us what you would build with one, and we'll bring you in early."
      />
    </>
  );
}
