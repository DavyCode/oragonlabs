import { Arrow } from "../Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-near-black"
    >
      {/* Blueprint gutters, drawn light over the dark field. */}
      <div className="pointer-events-none absolute inset-y-0 left-5 border-l border-dashed border-white/20 md:left-12" />
      <div className="pointer-events-none absolute inset-y-0 right-5 border-l border-dashed border-white/20 md:right-12" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-14 pt-32 md:px-12 md:pb-16">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[640px] flex-1">
            <p className="eyebrow mb-5 whitespace-nowrap text-white/55">
              AI Research Lab
            </p>
            <h1 className="display text-white text-[clamp(38px,5.2vw,66px)]">
              We research AI. Then we put it to work.
            </h1>
            <p className="mt-7 max-w-[56ch] text-[17px] leading-relaxed text-white/70 md:text-[18px]">
              Oragonlabs is an AI research lab finding real-world applications of
              AI for everyday businesses, institutions and the problems that
              matter most to people, and building them so they work at scale,
              affordably, wherever they&apos;re needed.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn btn-on-dark">
                Partner with us <Arrow />
              </a>
              <a
                href="#pillars"
                className="btn btn-pill border-white/35 bg-transparent text-white hover:bg-white hover:text-black"
              >
                See what we build <Arrow />
              </a>
            </div>
          </div>

          {/* Floating card, mirroring the reference site's hero news card. */}
          <a
            href="#edge"
            className="group w-full max-w-[350px] shrink-0 rounded-2xl bg-white p-3 shadow-xl transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3.5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-near-black">
                <span className="font-mono text-[10px] leading-tight text-white/85">
                  ON<br />DEVICE
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="eyebrow mb-1 text-[11px]">Field note</p>
                <p className="text-[15px] font-semibold leading-snug">
                  A language model that runs with no server, no internet, and no
                  data leaving the chip.
                </p>
              </div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black text-white">
                <Arrow />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
