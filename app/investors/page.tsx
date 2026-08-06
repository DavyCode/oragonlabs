import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Investors",
  description:
    "Oragonlabs is raising to build sovereign, efficient AI for emerging markets. The thesis, the opportunity, and how to reach us.",
  path: "/investors",
});

/* PLACEHOLDER: every figure on this page must be replaced with your real
   numbers before publishing. Nothing here is a claim we can stand behind. */
const RAISE = [
  { k: "Stage", v: "Pre-seed" },
  { k: "Raising", v: "$300,000" },
  { k: "Instrument", v: "SAFE / equity" },
];

const THESIS = [
  {
    n: "01",
    title: "The market that needs AI most is served last",
    body: "Frontier AI is trained, hosted and priced in a handful of countries. Institutions across emerging markets, a combined population in the billions, are locked out by data-residency law, connectivity, and dollar pricing. That is not a niche; it is most of the world.",
  },
  {
    n: "02",
    title: "Efficiency just changed what's possible",
    body: "Capable models now run on hardware that costs less than a monthly cloud bill. The constraint that justified centralised AI, the need for a data centre, is dissolving. Whoever industrialises that shift for these markets defines the category.",
  },
  {
    n: "03",
    title: "Sovereignty is becoming procurement policy",
    body: "Governments are writing data-residency and AI-sovereignty requirements into law and tender documents. That converts our architectural position from a preference into a qualification criterion competitors cannot meet by adding a region.",
  },
  {
    n: "04",
    title: "Proximity is a defensible moat",
    body: "Local languages, local regulation, local workflows and local engineers are not things a distant incumbent can add from a roadmap. The advantage compounds with every deployment.",
  },
];

const USE_OF_FUNDS = [
  ["Research", "20% for efficient models, on-device inference, local-language work"],
  ["Deployment engineering", "40% for reference architectures and pilot delivery"],
  ["Go-to-market", "20% for partnerships across government, finance, healthcare, robotics and beyond"],
  ["Operations", "20% for [runway in months]"],
];

const TRACTION = [
  { k: "Pilots in discussion", v: "3" },
  { k: "Institutional partners", v: "2" },
  { k: "Target markets", v: "Government, finance, healthcare, robotics etc." },
  { k: "Team", v: "ML engineers, AI researchers & full-stack developers" },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="We're raising to build the lab this market needs."
        lede="Oragonlabs is an AI research lab turning the efficiency frontier into sovereign, affordable systems for people, businesses and governments in emerging markets. If you invest in AI infrastructure and you think the next decade of adoption happens outside the countries that built the models, we should talk."
        meta={RAISE.slice(0, 3).map((r) => ({ k: r.k, v: r.v }))}
      />

      {/* --- Thesis -------------------------------------------------------- */}
      <section className="blueprint bg-white">
        <div className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6">The thesis</p>
              <h2 className="display max-w-[18ch] text-[clamp(30px,4vw,48px)]">
                Why this, why here, why now.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
              {THESIS.map((t, i) => (
                <Reveal key={t.n} delay={(i % 2) * 80}>
                  <div className="h-full bg-white p-8 md:p-10">
                    <span className="font-mono text-[13px] text-grey">{t.n}</span>
                    <h3 className="mt-4 text-[22px] font-semibold leading-snug tracking-[-0.015em]">
                      {t.title}
                    </h3>
                    <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink-2">
                      {t.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- The raise ----------------------------------------------------- */}
      <section className="relative bg-near-black text-white">
        <div className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-white/15 md:left-12 md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-5 hidden border-l border-dashed border-white/15 md:right-12 md:block" />

        <div className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6 text-white/45">The round</p>
              <h2 className="display max-w-[16ch] text-[clamp(30px,4vw,48px)]">
                What we&apos;re raising.
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <dl className="mt-14 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
                {RAISE.map((r) => (
                  <div key={r.k} className="bg-near-black px-7 py-9">
                    <dt className="text-[12.5px] uppercase tracking-[0.5px] text-white/40">
                      {r.k}
                    </dt>
                    <dd className="mt-3 font-mono text-[30px] leading-none">
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div className="mt-16 grid gap-14 lg:grid-cols-2">
              <Reveal>
                <div>
                  <p className="eyebrow mb-6 text-white/45">Use of funds</p>
                  <dl className="border border-white/15">
                    {USE_OF_FUNDS.map(([k, v]) => (
                      <div
                        key={k}
                        className="border-b border-white/15 px-6 py-5 last:border-b-0"
                      >
                        <dt className="text-[15px] font-semibold">{k}</dt>
                        <dd className="mt-1.5 text-[15px] text-white/55">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <div>
                  <p className="eyebrow mb-6 text-white/45">Where we are</p>
                  <dl className="grid grid-cols-2 gap-px border border-white/15 bg-white/15">
                    {TRACTION.map((t) => (
                      <div key={t.k} className="bg-near-black px-6 py-7">
                        <dt className="text-[12.5px] uppercase tracking-[0.5px] text-white/40">
                          {t.k}
                        </dt>
                        <dd className="mt-2.5 font-mono text-[24px] leading-none">
                          {t.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-6 text-[15px] leading-relaxed text-white/50">
                    Detailed metrics, pipeline and financial model are in the data
                    room, shared on request.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- Teaser / data room -------------------------------------------- */}
      <section className="blueprint bg-bone">
        <div className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <div>
                  <p className="eyebrow mb-6">The materials</p>
                  <h2 className="display max-w-[16ch] text-[clamp(28px,3.6vw,42px)]">
                    Teaser, deck and data room.
                  </h2>
                  <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-2">
                    The teaser is a one-pager on the thesis and the round. The
                    deck and data room (model, pipeline, technical roadmap and
                    team detail) are shared after a short call.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href="mailto:hello@oragonlabs.com?subject=Oragonlabs%20investor%20enquiry"
                      className="btn"
                    >
                      Request the teaser <Arrow />
                    </a>
                    <a
                      href="mailto:hello@oragonlabs.com?subject=Oragonlabs%20intro%20call"
                      className="btn btn-ghost"
                    >
                      Book an intro call <Arrow />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <div className="border border-dash/60 bg-white p-8 md:p-9">
                  <p className="eyebrow mb-5">In the data room</p>
                  <ul className="space-y-3.5">
                    {[
                      "Thesis and market sizing for government, finance, healthcare and robotics",
                      "Technical roadmap and research agenda",
                      "Product programmes and pilot pipeline",
                      "Financial model and [runway] plan",
                      "Founding team and hiring plan",
                      "Data-handling and sovereignty policy",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[15.5px] leading-relaxed text-ink-2"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <p className="mt-14 border-t border-dash/50 pt-7 text-[13.5px] leading-relaxed text-grey">
                This page is provided for information only and is not an offer to
                sell or a solicitation of an offer to buy securities.
                [Confirm the wording and what you may publish with counsel.
                Rules on publicly advertising a raise vary by jurisdiction.]
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
