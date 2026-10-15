import Link from "next/link";
import Reveal from "../Reveal";
import { Arrow } from "../Icons";
import CodeBlock, { InstallLine } from "../CodeBlock";
import { HELLO, INSTALL, PYPI_URL, SDK_POINTS } from "@/lib/sdk";

/* Home-page highlight for the Oragon SDK. Sits straight after EdgeAI, which
   makes the efficiency argument; this is where a developer can act on it.
   Bone, not white: WhatWeBuild below is the white blueprint band. */
export default function SDK() {
  return (
    <section id="sdk" className="bg-bone">
      <div className="px-5 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="border border-ink px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.5px]">
                On PyPI
              </span>
              <span className="eyebrow">The Oragon SDK · for developers</span>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal className="min-w-0">
              <h2 className="display max-w-[16ch] text-[clamp(30px,4vw,48px)]">
                Run AI models inside your own software.
              </h2>
              <p className="mt-6 max-w-[50ch] text-[17px] leading-relaxed text-ink">
                Oragon is our engine as a Python package. On a laptop, your own
                server or your own datacenter, CPU or GPU, and your data never
                leaves the machine.
              </p>
              <p className="mt-4 max-w-[50ch] text-[15.5px] leading-relaxed text-ink-2">
                One command is the whole install. The engine is inside the
                package: no compiler, no separate download, no signup, no API
                key.
              </p>

              <div className="mt-8">
                <InstallLine command={INSTALL} />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={PYPI_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  View on PyPI <Arrow />
                </a>
                <Link href="/sdk" className="btn btn-ghost">
                  Explore the SDK <Arrow />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80} className="min-w-0">
              <CodeBlock code={HELLO} label="hello.py" />
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {SDK_POINTS.map((p, i) => (
              <Reveal key={p.k} delay={i * 60} className="h-full">
                <div className="h-full bg-white p-7">
                  <span className="font-mono text-[13px] text-grey">{p.k}</span>
                  <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.015em]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
