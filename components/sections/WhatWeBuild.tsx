import Reveal from "../Reveal";
import { Arrow } from "../Icons";

/* PLACEHOLDER CONTENT: industries are unconfirmed in the positioning brief
   (§10, open items). Swap these three for your confirmed verticals and add one
   concrete pilot per industry as they land: proof beats promises. */
const INDUSTRIES = [
  {
    eyebrow: "Healthcare",
    name: "Clinical intelligence, inside the building",
    body: "Clinical decision support that runs inside the hospital. No patient record ever leaves the premises, and the system keeps working when the network doesn't.",
    specs: [
      ["Deployment", "On-premise, hospital-owned hardware"],
      ["Data residency", "Never leaves the building"],
      ["Connectivity", "Full offline operation"],
      ["Languages", "[confirm local languages]"],
    ],
  },
  {
    eyebrow: "Financial services",
    name: "Fraud and credit intelligence that stays in-country",
    body: "Fraud detection and credit scoring that complies with local data-residency law out of the box, deployed in your own racks or in-region, priced against local transaction economics.",
    specs: [
      ["Deployment", "In-country / private cloud"],
      ["Compliance", "Local data-protection law by design"],
      ["Latency", "In-region, no transcontinental hop"],
      ["Pricing", "[local currency, per-seat or per-volume]"],
    ],
  },
  {
    eyebrow: "Government services",
    name: "Citizen services on national infrastructure",
    body: "Citizen-facing services in local languages, hosted on national infrastructure, owned and operated by the institutions that answer for them.",
    specs: [
      ["Deployment", "National / sovereign infrastructure"],
      ["Ownership", "Operated by your institution"],
      ["Model basis", "Open-weight, exportable, portable"],
      ["Support", "[local engineering team location]"],
    ],
  },
];

/** Schematic plate: the perimeter diagram, standing in for product imagery. */
function Perimeter({ label }: { label: string }) {
  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-plate p-8">
      <svg viewBox="0 0 320 240" className="w-full max-w-[380px]" aria-hidden>
        <rect
          x="18"
          y="24"
          width="212"
          height="192"
          fill="none"
          stroke="#c7c7c7"
          strokeWidth="1.5"
          strokeDasharray="6 5"
        />
        <text
          x="26"
          y="16"
          fontSize="10"
          letterSpacing="1.2"
          fill="#828282"
          fontFamily="ui-monospace, monospace"
        >
          YOUR PERIMETER
        </text>

        {/* Local compute + the workloads it serves, all inside the boundary. */}
        <rect x="88" y="96" width="72" height="48" fill="#171717" />
        <text
          x="124"
          y="125"
          fontSize="11"
          fill="#fff"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          MODEL
        </text>

        {[
          [52, 56],
          [52, 176],
          [196, 56],
          [196, 176],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="9" fill="none" stroke="#171717" strokeWidth="1.5" />
            <line
              x1={x}
              y1={y}
              x2={124}
              y2={120}
              stroke="#171717"
              strokeWidth="1"
              opacity="0.35"
            />
          </g>
        ))}

        {/* The link that never gets made. */}
        <line
          x1="230"
          y1="120"
          x2="292"
          y2="120"
          stroke="#c7c7c7"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <g stroke="#171717" strokeWidth="2">
          <line x1="254" y1="112" x2="268" y2="128" />
          <line x1="268" y1="112" x2="254" y2="128" />
        </g>
        <text
          x="292"
          y="146"
          fontSize="9.5"
          fill="#828282"
          textAnchor="end"
          fontFamily="ui-monospace, monospace"
        >
          DISTANT CLOUD
        </text>
      </svg>

      <span className="absolute bottom-5 left-6 font-mono text-[11px] uppercase tracking-[1px] text-grey">
        {label}
      </span>
    </div>
  );
}

export default function WhatWeBuild() {
  return (
    <section id="build" className="blueprint bg-white">
      <div className="px-5 pt-24 md:px-12 md:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="eyebrow mb-6">What we build</p>
            <h2 className="display max-w-[14ch] text-[clamp(30px,4vw,48px)]">
              AI, put to work.
            </h2>
            <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink-2">
              We partner with organisations across{" "}
              <span className="text-ink">
                [health, finance, agriculture, education and public services:
                confirm industries]
              </span>{" "}
              to turn these principles into working systems.
            </p>
          </Reveal>
        </div>
      </div>

      {INDUSTRIES.map((ind, i) => (
        <div
          key={ind.eyebrow}
          className="px-5 py-16 md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <div className="rule-dashed pt-8">
                <p className="eyebrow mb-10">{ind.eyebrow}</p>
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <h3 className="display text-[clamp(24px,2.6vw,30px)]">
                      {ind.name}
                    </h3>
                    <p className="mt-4 max-w-[46ch] text-[16.5px] leading-relaxed text-ink-2">
                      {ind.body}
                    </p>
                    <a href="#contact" className="btn mt-8">
                      Talk to our team <Arrow />
                    </a>

                    <dl className="mt-10 border border-line">
                      {ind.specs.map(([label, value]) => (
                        <div key={label} className="spec-cell">
                          <dt className="spec-label">{label}:</dt>
                          <dd className="spec-value">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <Perimeter label={ind.eyebrow} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      ))}
    </section>
  );
}
