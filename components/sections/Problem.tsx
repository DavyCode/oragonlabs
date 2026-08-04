import Reveal from "../Reveal";

/* The six distance problems from §2 of the positioning brief, compressed to
   four as the brief recommends. Presented as a spec sheet — the failure and
   its consequence, stated plainly. */
const GAPS = [
  {
    n: "01",
    title: "Your data crosses borders you never agreed to",
    body: "Using frontier AI usually means sending citizen records, financial transactions and medical files to servers on another continent, under another jurisdiction's laws. For governments and regulated industries that is often not merely uncomfortable. It is illegal.",
  },
  {
    n: "02",
    title: "The infrastructure is a continent away",
    body: "When the nearest data centre is thousands of kilometres from you, distance shows up as latency, fragility and dependence. When the nearest AI engineer is that far, it shows up as products that misread local context, languages and workflows.",
  },
  {
    n: "03",
    title: "The pricing assumes budgets your economy doesn't run on",
    body: "AI priced for Silicon Valley is unaffordable at scale for a mid-size business or a public agency here, so adoption stalls exactly where the productivity gains would matter most.",
  },
  {
    n: "04",
    title: "The whole system rests on a handful of providers",
    body: "When a few companies control the models, one policy change, price rise or outage can switch off a country's AI capability overnight. That concentration is a strategic risk no government or serious business should accept.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="blueprint bg-bone">
      <div className="px-5 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="eyebrow mb-6">The problem</p>
            <h2 className="statement max-w-[24ch]">
              AI wasn&apos;t built for everyone. We&apos;re fixing that.
            </h2>
            <p className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-ink-2">
              Today&apos;s most powerful AI is trained, hosted and priced far
              from the people who need it most. For institutions in emerging
              markets, that distance is costly.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px border border-dash/40 bg-dash/40 md:grid-cols-2">
            {GAPS.map((g, i) => (
              <Reveal key={g.n} delay={i * 70}>
                <div className="h-full bg-bone p-8 md:p-10">
                  <span className="font-mono text-[13px] text-grey">{g.n}</span>
                  <h3 className="mt-4 text-[21px] font-semibold leading-snug tracking-[-0.01em]">
                    {g.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-ink-2">
                    {g.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-14 max-w-[58ch] text-[19px] font-medium leading-relaxed tracking-[-0.01em]">
              We believe the next chapter of AI is built differently: closer,
              fairer, and under the control of the people it serves.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
