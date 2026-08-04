import ActivationField from "./ActivationField";

export default function PageHero({
  eyebrow,
  title,
  lede,
  meta,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  meta?: { k: string; v: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-near-black text-white">
      <ActivationField />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.94)_0%,rgba(10,10,10,0.84)_38%,rgba(10,10,10,0.45)_70%,rgba(10,10,10,0.6)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-5 border-l border-dashed border-white/20 md:left-12" />
      <div className="pointer-events-none absolute inset-y-0 right-5 border-l border-dashed border-white/20 md:right-12" />

      <div className="relative z-10 px-5 pb-20 pt-40 md:px-12 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-[1180px]">
          <p className="eyebrow mb-6 text-white/55">{eyebrow}</p>
          <h1 className="display max-w-[16ch] text-[clamp(36px,5vw,62px)]">
            {title}
          </h1>
          <p className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-white/70 md:text-[18px]">
            {lede}
          </p>

          {meta && (
            <dl className="mt-12 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-3">
              {meta.map((m) => (
                <div key={m.k} className="bg-near-black px-6 py-6">
                  <dt className="eyebrow text-[11.5px] text-white/40">{m.k}</dt>
                  <dd className="mt-2.5 text-[17px] font-semibold">{m.v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
