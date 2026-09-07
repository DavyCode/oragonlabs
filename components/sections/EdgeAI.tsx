import Reveal from "../Reveal";

const PROOFS = [
  {
    k: "01",
    title: "On-device first",
    body: "Models that run where the data is: on a hospital's server, a bank's rack, a field agent's device, not on a hyperscaler's continent. When intelligence lives locally, privacy, latency and sovereignty stop being trade-offs.",
  },
  {
    k: "02",
    title: "Small models, serious work",
    body: "Most business and government workloads don't need a trillion parameters. They need the right model, tuned to the task and the language, running on hardware you already own. Efficiency is our core research area, not an afterthought.",
  },
  {
    k: "03",
    title: "Offline is a feature",
    body: "Systems designed to keep working when connectivity doesn't. Intermittent power and patchy networks are design inputs at Oragonlabs, not edge cases.",
  },
];

/* Measured on our own hardware, not estimated. Source: pre-seed deck,
   "The hardware reality" and "Engineering proof". A person reads about four
   tokens a second, so 151 tok/s is roughly 35x reading speed. */
const STATS = [
  { label: "Model size", value: "0.5B", unit: "parameters" },
  { label: "Throughput", value: "~151", unit: "tokens / sec, M4 laptop" },
  { label: "Concurrent requests", value: "16", unit: "one laptop, no GPU" },
  { label: "Data sent off-device", value: "0", unit: "bytes" },
];

export default function EdgeAI() {
  return (
    <section id="edge" className="relative bg-near-black text-white">
      {/* Blueprint gutters inverted for the dark band. */}
      <div className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-white/15 md:left-12 md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-5 hidden border-l border-dashed border-white/15 md:right-12 md:block" />

      <div className="px-5 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="eyebrow mb-6 text-white/45">How we do it</p>
            <h2 className="display max-w-[20ch] text-[clamp(30px,4.2vw,52px)]">
              The future of AI isn&apos;t a bigger data centre. It&apos;s a
              smaller distance.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div className="space-y-5 text-[16.5px] leading-relaxed text-white/65">
                <p>
                  The industry&apos;s default answer to every AI problem is more
                  compute, more scale, more cloud. We ask a different question:{" "}
                  <strong className="font-semibold text-white">
                    can we move less data instead of adding more compute?
                  </strong>
                </p>
                <p>
                  The frontier of efficient AI is moving fast. Full language
                  models now run on microcontrollers that cost less than a meal,
                  generating tokens fully on-device with no internet, no server,
                  and no data ever leaving the chip. Not by magic, but by
                  rethinking where the model lives and how it&apos;s served.
                </p>
                <p className="text-white">
                  That is the engineering discipline Oragonlabs is built on.
                </p>
              </div>

              {/* Spec card: field-note aesthetic, mono numerals. */}
              <div className="border border-white/15">
                <div className="flex items-center justify-between border-b border-white/15 px-6 py-4">
                  <span className="eyebrow text-white/45">
                    Edge inference · reference profile
                  </span>
                  <span className="font-mono text-[11px] text-white/35">
                    v0.1
                  </span>
                </div>
                <dl className="grid grid-cols-2">
                  {STATS.map((s, i) => (
                    <div
                      key={s.label}
                      className={`px-6 py-7 ${i % 2 === 0 ? "border-r" : ""} ${
                        i < 2 ? "border-b" : ""
                      } border-white/15`}
                    >
                      <dt className="text-[12.5px] uppercase tracking-[0.5px] text-white/40">
                        {s.label}
                      </dt>
                      <dd className="mt-2.5 font-mono text-[28px] leading-none">
                        {s.value}
                      </dd>
                      <dd className="mt-2 text-[13px] text-white/40">
                        {s.unit}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-px bg-white/15 md:grid-cols-3">
            {PROOFS.map((p, i) => (
              <Reveal key={p.k} delay={i * 80}>
                <div className="h-full bg-near-black p-8 md:p-9">
                  <span className="font-mono text-[13px] text-white/35">
                    {p.k}
                  </span>
                  <h3 className="mt-4 text-[21px] font-semibold tracking-[-0.015em]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-white/60">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-14 border-t border-white/15 pt-8 text-[16px] italic text-white/50">
              Every pillar above is an engineering choice before it&apos;s a
              value statement. Every figure was measured on our own machines,
              and nothing is rounded up.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
