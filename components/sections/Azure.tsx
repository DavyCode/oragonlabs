import Reveal from "../Reveal";

const PLANS = [
  {
    k: "GPU capacity",
    v: "Testing and benchmarking models on Azure GPUs before they ship, so what we deploy on modest local hardware has been measured against the full range first.",
  },
  {
    k: "Managed private deployments",
    v: "Hosting dedicated, single-tenant environments on Azure for customers who are comfortable with a dedicated cloud environment rather than their own hardware.",
  },
];

export default function Azure() {
  return (
    <section id="azure" className="blueprint bg-white">
      <div className="px-5 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="eyebrow mb-6">Growing on Azure</p>
            <h2 className="display max-w-[18ch] text-[clamp(30px,4vw,48px)]">
              How we plan to use Azure as we grow.
            </h2>
          </Reveal>

          <Reveal delay={110}>
            <dl className="mt-14 border border-line">
              {PLANS.map((p) => (
                <div key={p.k} className="spec-cell">
                  <dt className="spec-label">{p.k}:</dt>
                  <dd className="spec-value">{p.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
