import Link from "next/link";
import Reveal from "../Reveal";
import { Arrow } from "../Icons";
import { InstallLine } from "../CodeBlock";
import { INSTALL } from "@/lib/sdk";
import DocsLink from "../DocsLink";

/* Three steps from nothing to a working app. The code itself is on /sdk. */
const STEPS = [
  {
    k: "1",
    title: "Install",
    body: "One command. The engine is inside the package: no compiler, no API key.",
  },
  {
    k: "2",
    title: "Pick a model",
    body: "Any open-source model, or one you trained. oragon doctor says how each will run on your machine.",
  },
  {
    k: "3",
    title: "Build",
    body: "Chat, tool calling, structured data, document answers and speech, in a few lines of Python.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="blueprint bg-white">
      <div className="px-5 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="min-w-0">
            <p className="eyebrow mb-6">How it works</p>
            <h2 className="display max-w-[16ch] text-[clamp(30px,4vw,48px)]">
              Running in your app in minutes.
            </h2>
            {/* The install command sits right under the heading. */}
            <div className="mt-8">
              <InstallLine command={INSTALL} />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.k} delay={i * 60} className="h-full">
                <div className="h-full bg-white p-7">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-near-black font-mono text-[13px] text-white">
                    {s.k}
                  </span>
                  <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.015em]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/sdk" className="btn">
                Explore the SDK <Arrow />
              </Link>
              <DocsLink className="btn btn-ghost">
                Read the docs <Arrow />
              </DocsLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
