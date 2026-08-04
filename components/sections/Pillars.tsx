import Reveal from "../Reveal";
import {
  IconSovereignty,
  IconPrivacy,
  IconAccess,
  IconProximity,
  IconPrice,
  IconDecentralised,
} from "../Icons";

const PILLARS = [
  {
    Icon: IconSovereignty,
    name: "Data Sovereignty",
    promise: "Your data never has to leave your control.",
    body: "We build AI that can run entirely within your infrastructure and your borders. Your data stays under your jurisdiction, works for you, and is never used to enrich someone else's model.",
    practice: "On-premise and in-country deployment · no training on client data without explicit agreement · clear data-ownership terms in every contract",
  },
  {
    Icon: IconPrivacy,
    name: "Privacy by Design",
    promise: "Protection engineered in, not bolted on.",
    body: "Behind every dataset are citizens, customers and patients. We minimise what's collected, encrypt what's held, and design systems that serve people intelligently without exposing them.",
    practice: "Data minimisation by default · encryption in transit and at rest · anonymisation and on-device processing where feasible",
  },
  {
    Icon: IconAccess,
    name: "Access for All",
    promise: "AI that works where people actually are.",
    body: "Low bandwidth, older devices, local languages: we build for real conditions, not ideal ones. If it only works in a capital city with 5G, it isn't finished.",
    practice: "Offline-capable and low-bandwidth modes · local and low-resource language support · lightweight models on modest hardware",
  },
  {
    Icon: IconProximity,
    name: "Built Close to You",
    promise: "Infrastructure, models and people, near the problems they solve.",
    body: "We deploy compute close to where it's used and build with teams who live in the markets they serve. Proximity is how AI becomes fast, resilient and right.",
    practice: "Edge and in-region deployment · local engineering and support · solutions co-designed with local institutions",
  },
  {
    Icon: IconPrice,
    name: "Priced for Reality",
    promise: "World-class AI at prices local economies can sustain.",
    body: "We engineer for efficiency so the economics work for a mid-size business or a public agency, not just a Fortune 500 budget. Affordable isn't a compromise; it's the requirement.",
    practice: "Efficient small and mid-size models · pricing in local currency where possible · predictable costs, no surprise usage bills",
  },
  {
    Icon: IconDecentralised,
    name: "Decentralised Intelligence",
    promise: "No single company, country or server should be a point of failure.",
    body: "We build on open models, support self-hosted deployment, and design systems that keep working even when the cloud doesn't. Your AI capability should be yours.",
    practice: "Open-weight foundations · self-hosted and hybrid deployment · no vendor lock-in, portable systems and exportable data",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="blueprint bg-white">
      <div className="px-5 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="eyebrow mb-6">What we stand for</p>
            <h2 className="display max-w-[16ch] text-[clamp(30px,4vw,48px)]">
              Six commitments shape everything we build.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <article className="flex h-full flex-col bg-white p-8 transition-colors hover:bg-plate/60 md:p-9">
                  <p.Icon className="text-ink" />
                  <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.015em]">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-[16px] font-medium leading-snug">
                    {p.promise}
                  </p>
                  <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink-2">
                    {p.body}
                  </p>
                  <p className="mt-6 border-t border-line pt-5 text-[13.5px] leading-relaxed text-grey">
                    {p.practice}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-14 text-center text-[15px] text-grey">
              In short:{" "}
              <span className="font-semibold text-ink">
                Sovereign. Close. Open. Within reach.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
