import Link from "next/link";
import Reveal from "../Reveal";
import { Arrow } from "../Icons";

/* The sovereignty argument in three lines. The long version (the problem,
   the six pillars, how we do it) lives on /about and /labs. */
const POINTS = [
  {
    k: "01",
    title: "No GPU bill",
    body: "Runs on the laptops and servers you already have. AI stops being a cost only big companies can carry.",
  },
  {
    k: "02",
    title: "Your data stays put",
    body: "On your premises, in your country. Nothing is sent to a foreign cloud to get an answer.",
  },
  {
    k: "03",
    title: "Works where the internet doesn't",
    body: "No connection needed once it is installed, so it keeps working through outages and in remote places.",
  },
];

export default function WhyCPU() {
  return (
    <section id="why-cpu" className="relative bg-near-black text-white">
      <div className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-white/15 md:left-12 md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-5 hidden border-l border-dashed border-white/15 md:right-12 md:block" />

      <div className="px-5 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="eyebrow mb-6 text-white/45">Why CPU matters</p>
            <h2 className="display max-w-[20ch] text-[clamp(30px,4vw,48px)]">
              Capable AI shouldn&apos;t need a data centre.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border border-white/15 bg-white/15 md:grid-cols-3">
            {POINTS.map((p, i) => (
              <Reveal key={p.k} delay={i * 70} className="h-full">
                <div className="h-full bg-near-black p-7">
                  <span className="font-mono text-[13px] text-white/40">{p.k}</span>
                  <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.015em]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link href="/about" className="link-arrow mt-10 text-white">
              Why we build this way <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
