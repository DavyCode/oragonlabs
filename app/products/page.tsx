import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Contact from "@/components/sections/Contact";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description:
    "The research directions Oragonlabs is building toward: intelligent video systems, assistive technology, identity infrastructure, defence and public safety, clinical support and financial integrity.",
  path: "/products",
});

/* Every entry is a research direction, not a shipping product. Status values
   are placeholders; set them honestly per programme as work progresses. */
const PRODUCTS = [
  {
    n: "01",
    codename: "[codename]",
    title: "Intelligent video systems",
    summary:
      "Video understanding that runs on the cameras and servers an organisation already owns, detecting events rather than streaming footage to somebody else's cloud.",
    detail:
      "Most video analytics today require sending continuous footage off-site. We are researching on-device inference that keeps raw video inside the perimeter and emits only the events an operator asked for, so a site gains awareness without creating a new surveillance liability.",
    specs: [
      ["Where it runs", "On-premise, on existing camera infrastructure"],
      ["Data leaving site", "Events only, not raw footage"],
      ["Connectivity", "Designed to operate offline"],
      ["Status", "[research direction]"],
    ],
  },
  {
    n: "02",
    codename: "[codename]",
    title: "Assistive technology",
    summary:
      "AI that widens access for people with disabilities: speech, vision and language assistance that works on affordable devices, offline, in local languages.",
    detail:
      "Assistive AI is overwhelmingly built for high-resource languages and expensive hardware. We are researching small models for speech-to-text, text-to-speech, scene description and communication assistance that run on the phones people in our markets actually carry.",
    specs: [
      ["Where it runs", "On-device, mid-range and older phones"],
      ["Connectivity", "Full offline operation"],
      ["Languages", "[local languages: confirm]"],
      ["Status", "[research direction]"],
    ],
  },
  {
    n: "03",
    codename: "[codename]",
    title: "Identity & civil registration",
    summary:
      "Identity verification and civil registration infrastructure that runs on national systems, under national law, owned by the institution accountable for it.",
    detail:
      "Identity systems are among the most sensitive a state operates. Our research position is that they should run on sovereign infrastructure with auditable data handling, never as a rented service from a foreign provider whose terms can change.",
    specs: [
      ["Where it runs", "Sovereign / national infrastructure"],
      ["Ownership", "Operated by the accountable institution"],
      ["Auditability", "Logged, inspectable, exportable"],
      ["Status", "[research direction]"],
    ],
  },
  {
    n: "04",
    codename: "[codename]",
    title: "Defence & public safety",
    summary:
      "Decision-support and situational-awareness systems for national security institutions, built to work in denied, degraded and disconnected conditions.",
    detail:
      "Defence workloads are where the sovereignty argument is least negotiable: no capability that a foreign provider can switch off is a capability at all. Our research focus is resilient, self-hosted systems that keep functioning without external connectivity.",
    specs: [
      ["Where it runs", "Self-hosted, air-gap capable"],
      ["Connectivity", "Denied / degraded environments"],
      ["Dependencies", "No foreign provider in the loop"],
      ["Status", "[research direction]"],
    ],
  },
  {
    n: "05",
    codename: "[codename]",
    title: "Clinical decision support",
    summary:
      "Diagnostic and triage support that runs inside the hospital, so no patient record leaves the building and the system survives a network outage.",
    detail:
      "Health data is the hardest case for cross-border AI and the highest-value one for patients. We are researching compact clinical models that a hospital can host on its own hardware and keep running when connectivity fails.",
    specs: [
      ["Where it runs", "On-premise, hospital-owned hardware"],
      ["Data residency", "Never leaves the building"],
      ["Connectivity", "Full offline operation"],
      ["Status", "[research direction]"],
    ],
  },
  {
    n: "06",
    codename: "[codename]",
    title: "Financial integrity",
    summary:
      "Fraud detection and credit intelligence that satisfies local data-residency law by construction and is priced against local transaction economics.",
    detail:
      "Financial institutions here are asked to choose between compliance and capability. We are researching in-country deployable models that remove that trade-off, tuned to local fraud patterns rather than imported ones.",
    specs: [
      ["Where it runs", "In-country / private cloud"],
      ["Compliance", "Local data-protection law by design"],
      ["Tuning", "Local fraud and credit patterns"],
      ["Status", "[research direction]"],
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="What we're building toward."
        lede="Oragonlabs is a research lab, and this is our agenda in the open. Each programme below is an area where we believe sovereign, efficient AI changes what an institution can do, and where we are actively doing the research."
      />

      {/* Honest status banner: this whole page describes intent, not inventory. */}
      <section className="border-b border-line bg-plate">
        <div className="px-5 py-7 md:px-12">
          <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-4 gap-y-2">
            <span className="border border-ink px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.5px]">
              Please note
            </span>
            <p className="text-[15px] text-ink-2">
              None of the programmes below are commercially available yet. They
              are active research directions. We publish them so partners can
              shape them early.
            </p>
          </div>
        </div>
      </section>

      <section className="blueprint bg-white">
        <div className="px-5 pb-8 pt-20 md:px-12 md:pt-24">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6">Research programmes</p>
              <h2 className="display max-w-[18ch] text-[clamp(28px,3.6vw,44px)]">
                Six directions, one thesis.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-ink-2">
                In every case the question is the same: can this run close to the
                people it serves, on hardware they control, at a price their
                economy sustains?
              </p>
            </Reveal>
          </div>
        </div>

        {PRODUCTS.map((p, i) => (
          <div key={p.n} className="px-5 py-14 md:px-12 md:py-16">
            <div className="mx-auto max-w-[1180px]">
              <Reveal>
                <div className="rule-dashed pt-8">
                  <div className="mb-8 flex flex-wrap items-center gap-4">
                    <span className="font-mono text-[13px] text-grey">{p.n}</span>
                    <span className="eyebrow">{p.codename}</span>
                  </div>

                  <div
                    className={`grid gap-12 lg:grid-cols-2 ${
                      i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <h3 className="display text-[clamp(24px,2.8vw,34px)]">
                        {p.title}
                      </h3>
                      <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-ink">
                        {p.summary}
                      </p>
                      <p className="mt-4 max-w-[48ch] text-[15.5px] leading-relaxed text-ink-2">
                        {p.detail}
                      </p>
                      <a href="#contact" className="btn mt-8">
                        Shape this programme <Arrow />
                      </a>
                    </div>

                    <dl className="h-fit border border-line">
                      {p.specs.map(([label, value]) => (
                        <div key={label} className="spec-cell">
                          <dt className="spec-label">{label}:</dt>
                          <dd className="spec-value">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      {/* --- Governance ---------------------------------------------------
          Several programmes above (video, identity, defence) are ones buyers
          and journalists will scrutinise. Stating the guardrails yourself is
          worth more than being asked. Delete or rewrite as you see fit. */}
      <section className="relative bg-near-black text-white">
        <div className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-white/15 md:left-12 md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-5 hidden border-l border-dashed border-white/15 md:right-12 md:block" />
        <div className="px-5 py-24 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6 text-white/45">How we decide what to build</p>
              <h2 className="display max-w-[20ch] text-[clamp(28px,3.6vw,44px)]">
                Sovereignty cuts both ways.
              </h2>
              <p className="mt-7 max-w-[64ch] text-[17px] leading-relaxed text-white/65">
                Some of the systems above (video understanding, identity,
                defence) are powerful enough to harm the people they are meant
                to protect if deployed carelessly. The same principles that make
                them sovereign make them accountable: data that stays in
                jurisdiction stays subject to that jurisdiction&apos;s law, and
                systems that are auditable can be audited. We publish our
                data-handling terms, we design for logging and inspection, and we
                take a position on deployments we will not support.
              </p>
              <p className="mt-6 text-[15px] text-white/40">
                [Link your published data-handling &amp; deployment policy here
                once written. §9 of the positioning brief.]
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Contact
        heading="Shape a programme before it ships."
        body="We build these with institutions, not for them. If one of these directions is your problem, we want to hear how you'd use it."
      />
    </>
  );
}
