import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Contact from "@/components/sections/Contact";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Labs",
  description:
    "Oragon Labs is the research arm of Oragonlabs. We work on making capable AI small enough, cheap enough and local enough to run where it is actually needed. We publish what we find, including what fails.",
  path: "/labs",
});

/* ------------------------------------------------------------------
   LABS: the research arm.
   The homepage sells the company; this page explains the lab: what it
   works on, what it produces, and how it decides what to pursue.
   Light hero, so it reads as a distinct destination from `/`.
   ------------------------------------------------------------------ */

/** What the lab actually ships as a lab: outputs, not products. */
const OUTPUTS = [
  {
    n: "01",
    k: "Field notes",
    v: "Short, concrete write-ups of what we tried and what happened. A model on hardware that shouldn't run it, a language nobody has benchmarked, a deployment that broke in an interesting way.",
  },
  {
    n: "02",
    k: "Benchmarks",
    v: "Numbers measured on the hardware institutions here actually own, not on an A100 nobody in the room has. Reproducible, with the setup published alongside.",
  },
  {
    n: "03",
    k: "Open weights",
    v: "Models we train for low-resource languages and narrow tasks, released so the people they serve are not renting access to their own language.",
  },
  {
    n: "04",
    k: "Reference architectures",
    v: "The deployment patterns that survived contact with a real hospital, bank or ministry, documented so the next institution doesn't start from zero.",
  },
];

const HOW_WE_WORK = [
  {
    n: "01",
    k: "Research",
    v: "We start from a question a real institution has, not a benchmark. Most of our work is on efficiency: making capable models small enough, cheap enough and local enough to be deployable here.",
  },
  {
    n: "02",
    k: "Prototype",
    v: "We build the smallest working system that proves or kills the idea, on the hardware the institution actually owns, in the languages its users actually speak.",
  },
  {
    n: "03",
    k: "Deploy",
    v: "What survives becomes a system somebody depends on, installed close to the people it serves, owned by them, and supported by engineers in the same time zone.",
  },
  {
    n: "04",
    k: "Publish",
    v: "We write up what we learned, including what failed. A lab that only publishes its wins is a marketing department.",
  },
];

const SECTORS = [
  {
    k: "Healthcare",
    v: "Diagnostic and triage support that runs inside the hospital, offline, on hardware it already owns.",
  },
  {
    k: "Education",
    v: "Tutoring and teacher support in local languages, on the low-cost devices schools can actually afford.",
  },
  {
    k: "Agriculture",
    v: "Crop, pest and yield intelligence for smallholders, usable on a basic phone with no signal in the field.",
  },
  {
    k: "Financial services",
    v: "Fraud detection and credit intelligence tuned to local patterns, compliant with data-residency law by construction.",
  },
  {
    k: "Public services",
    v: "Citizen-facing services in the languages people speak, hosted on national infrastructure.",
  },
  {
    k: "Accessibility",
    v: "Speech, vision and communication assistance that widens access for people with disabilities, on affordable devices.",
  },
  {
    k: "Safety & security",
    v: "Video understanding that detects events on-site without streaming people's lives to a distant cloud.",
  },
  {
    k: "Energy & utilities",
    v: "Demand forecasting and fault detection for grids that are intermittent by nature, not by exception.",
  },
  {
    k: "Logistics",
    v: "Routing and supply-chain intelligence built for real road networks, informal markets and patchy connectivity.",
  },
];

const AGENDA = [
  ["Model efficiency", "Making capable models small enough to run on hardware institutions already own."],
  ["On-device inference", "Moving computation to the data instead of the data to the computation."],
  ["Low-resource languages", "Serious performance in languages the frontier labs have no incentive to serve."],
  ["Offline-first systems", "Treating intermittent power and patchy networks as design inputs, not edge cases."],
];

export default function LabsPage() {
  return (
    <>
      {/* --- Hero, light variant ----------------------------------------- */}
      <section className="relative min-h-[100svh] overflow-hidden bg-bone">
        <div className="pointer-events-none absolute inset-y-0 left-5 border-l border-dashed border-dash md:left-12" />
        <div className="pointer-events-none absolute inset-y-0 right-5 border-l border-dashed border-dash md:right-12" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-14 pt-32 md:px-12 md:pb-16">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[660px] flex-1">
              <p className="eyebrow mb-5">Oragon Labs · Research</p>
              <h1 className="display text-[clamp(38px,5.2vw,66px)]">
                The lab behind the products.
              </h1>
              <p className="mt-7 max-w-[56ch] text-[17px] leading-relaxed text-ink-2 md:text-[18px]">
                Oragon Labs is our research arm. We work on one hard problem:
                making capable AI small enough, cheap enough and local enough to
                run where it is actually needed. We publish what we find,
                including the experiments that fail.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#outputs" className="btn">
                  What the lab publishes <Arrow />
                </a>
                <a href="#sectors" className="btn btn-ghost btn-pill border-dash">
                  See where it applies <Arrow />
                </a>
              </div>
            </div>

            <div className="w-full max-w-[350px] shrink-0 border border-dash/70 bg-white p-6">
              <p className="eyebrow mb-3">The research question</p>
              <p className="text-[16px] font-medium leading-snug">
                The best AI research in the world is useless to most of the world
                if it only runs in a data centre they can&apos;t reach.
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-2">
                So ours is not just <em>can the model do it</em>. It&apos;s{" "}
                <em>can it do it here</em>: on this hardware, in this language,
                on this budget, with the power off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- What the lab is, and what it produces -------------------------
          Replaces the shared Mission band here: that states the company's
          mission and already leads the homepage. This page has to answer a
          narrower question: what does the research arm actually do? */}
      <section id="outputs" className="blueprint bg-white">
        <div className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6">The lab</p>
              <h2 className="statement max-w-[28ch]">
                We are a research lab first. The products come out of the
                research, not the other way round.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-14 grid gap-10 border-t border-dash/60 pt-12 lg:grid-cols-[1.05fr_0.95fr]">
                <p className="max-w-[54ch] text-[17px] leading-relaxed text-ink-2">
                  Most of what the frontier produces assumes a data centre, a
                  fibre line and a budget in dollars. Strip those away and most
                  of the answers stop working. The lab exists to find the ones
                  that don&apos;t: smaller models, inference that runs beside
                  the data, languages the field has no commercial reason to
                  serve, systems that survive a power cut.
                </p>
                <p className="max-w-[46ch] text-[19px] font-medium leading-relaxed tracking-[-0.01em]">
                  A lab that only publishes its wins is a marketing department.
                  We publish the failures too. They are usually the more useful
                  half.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <p className="eyebrow mb-8 mt-20">What the lab publishes</p>
            </Reveal>

            <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
              {OUTPUTS.map((o, i) => (
                <Reveal key={o.n} delay={i * 70}>
                  <div className="h-full bg-white p-8">
                    <span className="font-mono text-[13px] text-grey">
                      {o.n}
                    </span>
                    <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.015em]">
                      {o.k}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                      {o.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-10 text-[14px] text-grey">
                First benchmarks are on the{" "}
                <Link href="/#edge" className="text-ink underline">
                  homepage
                </Link>
                : a 0.5B model at ~151 tokens a second on an M4 laptop, and 16
                concurrent requests answered on one machine with no GPU. Written
                field notes follow.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- What kind of lab --------------------------------------------- */}
      <section className="relative bg-near-black text-white">
        <div className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-white/15 md:left-12 md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-5 hidden border-l border-dashed border-white/15 md:right-12 md:block" />
        <div className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6 text-white/45">What kind of lab</p>
              <h2 className="statement max-w-[26ch]">
                Plenty of labs research what AI could do. We research what it can
                do for people who are not being served.
              </h2>
              <p className="mt-8 max-w-[64ch] text-[16.5px] leading-relaxed text-white/60">
                That is a narrower question and a harder one. It rules out
                answers that need a hyperscaler, a fibre line or a Fortune 500
                budget, which is most of the answers the field currently
                produces. What&apos;s left is the work we do.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-4">
              {HOW_WE_WORK.map((s, i) => (
                <Reveal key={s.n} delay={i * 70}>
                  <div className="h-full bg-near-black p-8">
                    <span className="font-mono text-[13px] text-white/35">
                      {s.n}
                    </span>
                    <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.015em]">
                      {s.k}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                      {s.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Sectors ------------------------------------------------------- */}
      <section id="sectors" className="blueprint bg-white">
        <div className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6">Where it applies</p>
              <h2 className="display max-w-[20ch] text-[clamp(30px,4vw,48px)]">
                One research agenda. Every sector that matters.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-ink-2">
                The same underlying work (small models, on-device inference,
                local languages, offline operation) unlocks a different problem
                in each of these. That&apos;s the leverage of doing it at the
                research layer.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
              {SECTORS.map((s, i) => (
                <Reveal key={s.k} delay={(i % 3) * 70}>
                  <div className="h-full bg-white p-8 transition-colors hover:bg-plate/60">
                    <h3 className="text-[19px] font-semibold tracking-[-0.015em]">
                      {s.k}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                      {s.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <Link href="/products" className="link-arrow mt-12">
                See the research programmes <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Research agenda ----------------------------------------------- */}
      <section className="blueprint bg-bone">
        <div className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div>
                  <p className="eyebrow mb-6">The research agenda</p>
                  <h2 className="display max-w-[14ch] text-[clamp(28px,3.6vw,44px)]">
                    What we&apos;re actually working on.
                  </h2>
                  <p className="mt-6 max-w-[46ch] text-[16.5px] leading-relaxed text-ink-2">
                    Four threads, chosen because each one removes a specific
                    reason AI currently fails to reach people.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <dl className="border border-dash/60">
                  {AGENDA.map(([k, v]) => (
                    <div
                      key={k}
                      className="border-b border-dash/60 px-7 py-6 last:border-b-0"
                    >
                      <dt className="text-[17px] font-semibold tracking-[-0.01em]">
                        {k}
                      </dt>
                      <dd className="mt-2 text-[15.5px] leading-relaxed text-ink-2">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- Principles, condensed ----------------------------------------- */}
      <section className="blueprint bg-white">
        <div className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6">How we build</p>
              <h2 className="display max-w-[20ch] text-[clamp(30px,4vw,48px)]">
                Sovereign. Close. Open. Within reach.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-ink-2">
                Four commitments, and each one is an engineering decision before
                it is a value statement.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Sovereign", "Your data, your models, your jurisdiction, your control."],
                ["Close", "Infrastructure and teams near the problems they solve."],
                ["Open", "Built on open models, free of lock-in, resilient by design."],
                ["Within reach", "Accessible and affordable in real-world conditions."],
              ].map(([k, v], i) => (
                <Reveal key={k} delay={i * 70}>
                  <div className="h-full bg-white p-8">
                    <h3 className="text-[22px] font-semibold tracking-[-0.02em]">
                      {k}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                      {v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <Link href="/" className="link-arrow mt-12">
                Read the full six pillars <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Contact
        heading="Put the research to work."
        body="If you run an institution with a problem worth solving, or you want to build this with us, we'd like to talk."
      />
    </>
  );
}
