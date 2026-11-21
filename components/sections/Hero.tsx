import Link from "next/link";
import { Arrow } from "../Icons";

/* The 8-second test: a first-time visitor should know what Oragon is, who
   it is for and what to do next without scrolling. One headline, one line
   under it, two actions. Everything else lives further down or on its own
   page. */
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
          <div className="max-w-[680px] flex-1">
            <p className="eyebrow mb-5 whitespace-nowrap text-white/55">
              AI Research Lab
            </p>
            <h1 className="display text-white text-[clamp(38px,5.2vw,66px)]">
              AI you own, instead of AI you rent.
            </h1>
            <p className="mt-7 max-w-[56ch] text-[17px] leading-relaxed text-white/70 md:text-[18px]">
              Oragonlabs builds the infrastructure layer for private and personal
              AI: private by design, owned rather than rented, and sovereign
              wherever it runs. Software an institution installs on the machines
              it already owns, so the data never has to leave.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/sdk" className="btn btn-on-dark">
                Get the SDK <Arrow />
              </Link>
              <a
                href="#contact"
                className="btn btn-pill border-white/35 bg-transparent text-white hover:bg-white hover:text-black"
              >
                Talk to us <Arrow />
              </a>
            </div>
          </div>

          {/* Floating card: the first shipped product. It opens on Voiceit's
              own site. */}
          <a
            href="https://voiceit.oragonlabs.com/"
            target="_blank"
            rel="noreferrer"
            className="group w-full max-w-[350px] shrink-0 rounded-2xl bg-white p-3 shadow-xl transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3.5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-near-black">
                <span className="font-mono text-[10px] leading-tight text-white/85">
                  VOICE<br />IT
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="eyebrow mb-1 text-[11px]">Now live · Voiceit</p>
                <p className="text-[15px] font-semibold leading-snug">
                  Our first product: dictation and voice notes, built on the
                  Oragonlabs engine.
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
