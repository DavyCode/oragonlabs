import Link from "next/link";
import Reveal from "../Reveal";
import { Arrow } from "../Icons";

/* The whole company in four cards, one sentence each. Detail lives on each
   card's own page. */
const CARDS = [
  {
    k: "Models",
    tag: "Coming soon",
    body: "Intelligent small language models with reasoning and tool calling. Built to run on a CPU, faster still on a GPU.",
    href: "/models",
  },
  {
    k: "SDK",
    tag: "On PyPI",
    body: "pip install oragon runs any open-source model, your own trained models, or ours, inside your software. Your data never leaves the machine.",
    href: "/sdk",
  },
  {
    k: "Products",
    tag: "For businesses and governments",
    body: "Applications built on the engine, deployed on infrastructure you own, priced for emerging markets.",
    href: "/products",
  },
  {
    k: "Labs",
    tag: "Research",
    body: "The research behind it: making capable AI small, efficient and sovereign.",
    href: "/labs",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="blueprint bg-bone">
      <div className="px-5 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="eyebrow mb-6">What we do</p>
            <h2 className="display max-w-[20ch] text-[clamp(30px,4vw,48px)]">
              Models, the engine that runs them, and what we build on it.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((c, i) => (
              <Reveal key={c.k} delay={i * 60} className="h-full">
                <Link
                  href={c.href}
                  className="group flex h-full flex-col bg-white p-7 transition-colors hover:bg-plate"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[1px] text-grey">
                    {c.tag}
                  </span>
                  <h3 className="display mt-4 text-[28px]">{c.k}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">
                    {c.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium">
                    Learn more <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
