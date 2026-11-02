import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CodeBlock, { InstallLine } from "@/components/CodeBlock";
import Contact from "@/components/sections/Contact";
import { Arrow } from "@/components/Icons";
import {
  HELLO,
  HELLO_OUTPUT,
  INSTALL,
  INSTALL_STEPS,
  PLATFORMS,
  PYPI_URL,
  SDK_POINTS,
  SDK_STATS,
  MORE_FEATURES,
} from "@/lib/sdk";

export const metadata: Metadata = pageMetadata({
  title: "Oragon SDK",
  description:
    "pip install oragon. Run AI models inside your own software, on a laptop, server or datacenter, CPU or GPU, with typed errors, validated extraction, cited document answers and an OpenAI-compatible API. Your data never leaves the machine.",
  path: "/sdk",
});

export default function SdkPage() {
  return (
    <>
      <PageHero
        eyebrow="Oragon SDK · Python"
        title="Run AI models inside your own software."
        lede="Oragon is the Oragonlabs engine as a Python package. Local-first model serving for software that has to work: on hardware you don't control, with data that can't leave. One install, no signup, no API key."
      />

      {/* --- Install --------------------------------------------------- */}
      <section className="bg-white">
        <div className="px-5 py-20 md:px-12 md:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <Reveal className="min-w-0">
                <div className="mb-8 flex flex-wrap items-center gap-4">
                  <span className="border border-ink px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.5px]">
                    Beta · On PyPI
                  </span>
                  <span className="eyebrow">Free to start</span>
                </div>
                <h2 className="display text-[clamp(28px,3.6vw,44px)]">
                  That is the whole install.
                </h2>
                <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-ink">
                  The engine is inside the package: no compiler, no separate
                  download, no signup. The model loads once and stays ready, so
                  the second request doesn&apos;t pay for the first one&apos;s
                  startup.
                </p>
                <div className="mt-8">
                  <InstallLine command={INSTALL} />
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={PYPI_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    View on PyPI <Arrow />
                  </a>
                  <a href="#examples" className="btn btn-ghost">
                    What else it does <Arrow />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={80} className="min-w-0 space-y-4">
                <CodeBlock code={INSTALL_STEPS} lang="shell" label="1 · Install" />
                <CodeBlock
                  code={HELLO}
                  label="2 · hello.py"
                  output={HELLO_OUTPUT}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why ------------------------------------------------------- */}
      <section className="border-y border-line bg-bone">
        <div className="px-5 py-20 md:px-12 md:py-24">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6">Why Oragon</p>
              <h2 className="display max-w-[22ch] text-[clamp(28px,3.6vw,44px)]">
                An odd answer from the model becomes something your code can
                catch.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {SDK_POINTS.map((p, i) => (
                <Reveal key={p.k} delay={i * 60} className="h-full">
                  <div className="h-full bg-white p-7">
                    <span className="font-mono text-[13px] text-grey">{p.k}</span>
                    <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.015em]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Examples -------------------------------------------------- */}
      <section id="examples" className="blueprint bg-white">
        <div className="px-5 pb-6 pt-20 md:px-12 md:pt-24">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6">What you can do</p>
              <h2 className="display max-w-[18ch] text-[clamp(28px,3.6vw,44px)]">
                Everything here is free.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-ink-2">
                Three engines share one API (embedded, shared and hosted), so
                where the model runs is a deployment choice, not a rewrite.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="px-5 pb-20 pt-4 md:px-12 md:pb-24">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <div className="rule-dashed pt-8">
                <p className="eyebrow mb-8">Also in the box</p>
                <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                  {MORE_FEATURES.map((f) => (
                    <div key={f.title} className="bg-white p-7">
                      <h3 className="text-[17px] font-semibold tracking-[-0.015em]">
                        {f.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">
                        {f.body}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href={PYPI_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow mt-8"
                >
                  Code for every feature on PyPI <Arrow />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Measured --------------------------------------------------
          Figures from the package README's benchmark table. Keep the
          caption honest about the machine they came from. */}
      <section className="relative bg-near-black text-white">
        <div className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-white/15 md:left-12 md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-5 hidden border-l border-dashed border-white/15 md:right-12 md:block" />
        <div className="px-5 py-24 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6 text-white/45">Measured, not estimated</p>
              <h2 className="display max-w-[20ch] text-[clamp(28px,3.6vw,44px)]">
                Built for the smallest machine, first.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[16.5px] leading-relaxed text-white/60">
                A 16 GB MacBook with an Apple M4, running qwen2.5-1.5b and no
                GPU server. Servers do better. Speed per request is set by your
                hardware and answer quality by the model; what Oragon adds is
                everything around it.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <dl className="mt-12 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
                {SDK_STATS.map((s) => (
                  <div key={s.label} className="bg-near-black px-6 py-7">
                    <dt className="text-[12.5px] uppercase tracking-[0.5px] text-white/40">
                      {s.label}
                    </dt>
                    <dd className="mt-2.5 font-mono text-[26px] leading-none">
                      {s.value}
                    </dd>
                    <dd className="mt-2 text-[13px] text-white/40">{s.unit}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Platforms, pricing, data --------------------------------- */}
      <section className="bg-white">
        <div className="px-5 py-20 md:px-12 md:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2">
            <Reveal className="min-w-0">
              <p className="eyebrow mb-6">Runs on</p>
              <h2 className="display text-[clamp(26px,3vw,36px)]">
                Same code on a laptop, a server or a GPU.
              </h2>
              <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-ink-2">
                CPU is a first-class path, not a fallback. If a GPU is there it
                is used automatically. Every feature works the same on every
                platform; only the speed-up differs.
              </p>
              <dl className="mt-8 border border-line">
                {PLATFORMS.map(([label, value]) => (
                  <div key={label} className="spec-cell">
                    <dt className="spec-label">{label}:</dt>
                    <dd className="spec-value">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={80} className="min-w-0">
              <p className="eyebrow mb-6">Pricing &amp; your data</p>
              <h2 className="display text-[clamp(26px,3vw,36px)]">
                Free unless you need more than four at once.
              </h2>
              <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-ink-2">
                No signup, no token limits, and commercial use is allowed on
                the free tier. You can ship a desktop app to someone who never
                signs up and never connects.
              </p>
              <dl className="mt-8 border border-line">
                {[
                  ["Free", "Up to 4 lanes plus the queue, and every feature, including the HTTP API and GPU serving"],
                  ["Paid", "More than 4 lanes, many processes sharing one model, and Oragon's licensed models, encrypted on disk"],
                  ["Prompts & answers", "Never leave the machine. No code path could send them"],
                  ["Telemetry", "None. No crash reports, no update checks"],
                  ["Air-gapped", "Supported. Licences work offline for their whole validity period"],
                ].map(([label, value]) => (
                  <div key={label} className="spec-cell">
                    <dt className="spec-label">{label}:</dt>
                    <dd className="spec-value">{value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={PYPI_URL}
                target="_blank"
                rel="noreferrer"
                className="link-arrow mt-8"
              >
                Full documentation on PyPI <Arrow />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <Contact
        heading="Building on Oragon?"
        body="Tell us what you're shipping. If you need more lanes, a shared engine across processes or a licensed model, we'll set it up with you."
      />
    </>
  );
}
