import type { Metadata } from "next";
import Link from "next/link";
import ActivationField from "@/components/ActivationField";
import Reveal from "@/components/Reveal";
import Contact from "@/components/sections/Contact";
import Mission from "@/components/sections/Mission";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: { absolute: "Oragonlabs | An AI research lab putting AI to work" },
  description:
    "Oragonlabs is an AI research lab. We research real-world applications of AI for everyday businesses, organisations and the problems that matter most to people, and deploy them at scale.",
  // A/B variant of `/` — kept out of the index so the two homepages don't
  // compete as duplicate content.
  robots: { index: false, follow: true },
};

/* ------------------------------------------------------------------
   HOME 2 — experimental variant.
   Home 1 leads with sovereignty and emerging markets.
   This variant leads with the research-lab identity and the breadth of
   sectors AI can be applied to, keeping sovereignty as the method rather
   than the headline. Light hero, so the two are visually distinguishable
   at a glance when comparing.
   ------------------------------------------------------------------ */

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

export default function HomeTwo() {
  return (
    <>
      {/* --- Hero — light variant ---------------------------------------- */}
      <section className="relative min-h-[100svh] overflow-hidden bg-bone">
        <ActivationField tone="light" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(240,239,234,0.96)_0%,rgba(240,239,234,0.88)_34%,rgba(240,239,234,0.45)_66%,rgba(240,239,234,0.6)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-5 border-l border-dashed border-dash md:left-12" />
        <div className="pointer-events-none absolute inset-y-0 right-5 border-l border-dashed border-dash md:right-12" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-14 pt-32 md:px-12 md:pb-16">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[660px] flex-1">
              <p className="eyebrow mb-5">AI Research Lab</p>
              <h1 className="display text-[clamp(38px,5.2vw,66px)]">
                We research AI. Then we put it to work.
              </h1>
              <p className="mt-7 max-w-[56ch] text-[17px] leading-relaxed text-ink-2 md:text-[18px]">
                Oragonlabs is an AI research lab finding real-world applications of
                AI for everyday businesses, institutions and the problems that
                matter most to people, and building them so they work at scale,
                affordably, wherever they&apos;re needed.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn">
                  Work with the lab <Arrow />
                </a>
                <a href="#sectors" className="btn btn-ghost btn-pill border-dash">
                  See where it applies <Arrow />
                </a>
              </div>
            </div>

            <div className="w-full max-w-[350px] shrink-0 border border-dash/70 bg-white p-6">
              <p className="eyebrow mb-3">Our position</p>
              <p className="text-[16px] font-medium leading-snug">
                The best AI research in the world is useless to most of the world
                if it only runs in a data centre they can&apos;t reach.
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-2">
                So our research question is not just <em>can the model do it</em>.
                It&apos;s <em>can it do it here</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero is bone here, so the mission band takes white. */}
      <Mission tone="white" />

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
