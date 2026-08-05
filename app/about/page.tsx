import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Contact from "@/components/sections/Contact";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Oragonlabs is an AI research lab. Who we are, why we exist, and the team building it.",
  path: "/about",
});

/* Portraits live in /public/team/. Set `photo` to the path once the file is
   there; leave it null and the placeholder frame renders instead, so a missing
   image never breaks the page. */
type Founder = {
  name: string;
  role: string;
  photo: string | null;
  experience: string;
  bio: string;
  focus: string[];
  linkedin?: string;
};

const FOUNDERS: Founder[] = [
  {
    name: "David Azemoh",
    role: "Chief Engineer",
    photo: null, // → "/team/david-azemoh.jpg"
    experience: "8+ years",
    bio: "David owns the half of the problem that decides whether AI research reaches anyone: the engineering. Eight years architecting distributed systems serving more than 5 million monthly active users, across national infrastructure, regulated finance and public-sector platforms, is the discipline model deployment actually demands, where inference has to hold under real load, services have to stay available when the network does not, and data has to stay inside the building it belongs to. He leads deployment engineering at the lab, taking models off the bench and into institutions that cannot afford them to fail, and has built and led the engineering teams that keep systems at that scale running.",
    focus: ["AI infrastructure", "Edge deployment"],
    linkedin: "https://www.linkedin.com/in/dazemoh",
  },
  {
    name: "Daniel Adama",
    role: "Chief AI Researcher",
    photo: null, // → "/team/daniel-adama.jpg"
    experience: "6+ years",
    bio: "Daniel is a researcher first. His work spans the width of applied AI: computer vision and object detection, optical character recognition, face and gesture recognition, speech-to-text, natural language processing and recommender systems, built end to end from data preparation through deployment and evaluation. The through-line is efficiency, driving deep networks and CNNs down to run inside hardware budgets that would normally rule them out, which is the exact problem this lab exists to solve.",
    focus: ["Computer vision", "Model efficiency"],
    linkedin: "https://www.linkedin.com/in/danieladama/",
  },
];

const VALUES_IN_PRACTICE = [
  {
    k: "Research first",
    v: "We publish what we learn. Field notes, benchmarks and failure reports, not just launch announcements.",
  },
  {
    k: "Applied, not abstract",
    v: "Every research direction is chosen because a real institution has the problem today, not because it is fashionable.",
  },
  {
    k: "Local by construction",
    v: "We build with teams who live in the markets we serve, in the languages people actually speak.",
  },
];

function Portrait({ name, photo }: { name: string; photo: string | null }) {
  if (photo) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-plate">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, 260px"
          className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
        />
      </div>
    );
  }

  /* Fallback frame while the real portrait is missing. */
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-plate">
      <div className="absolute inset-0 grid place-items-center">
        <svg viewBox="0 0 120 150" className="h-2/3 w-2/3" aria-hidden>
          <circle cx="60" cy="52" r="24" fill="none" stroke="#c7c7c7" strokeWidth="1.5" />
          <path
            d="M18 140c0-25 19-42 42-42s42 17 42 42"
            fill="none"
            stroke="#c7c7c7"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute bottom-4 left-5 font-mono text-[10.5px] uppercase tracking-[1px] text-grey">
        Portrait: {name}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="An AI research lab, built where the problems are."
        lede="We started with a simple observation: the places with the most to gain from AI are the places it reaches last. Not because the technology can't help, but because it wasn't designed to. So we're designing it differently: private, close, open, and within reach."
        meta={[
          { k: "Founded", v: "[year]" },
          { k: "Based in", v: "[city, country]" },
          { k: "Languages supported", v: "[list]" },
        ]}
      />

      {/* --- Why we exist ------------------------------------------------- */}
      <section className="blueprint bg-white">
        <div className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              <Reveal>
                <div>
                  <p className="eyebrow mb-6">Why we exist</p>
                  <h2 className="display max-w-[12ch] text-[clamp(30px,4vw,48px)]">
                    About the lab.
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <div className="space-y-6 text-[17px] leading-relaxed text-ink-2">
                  <p className="text-[19px] text-ink">
                    Oragonlabs was founded in{" "}
                    <span className="font-medium">[city, country]</span> by{" "}
                    <span className="font-medium">David Azemoh</span> and{" "}
                    <span className="font-medium">Daniel Adama</span>, a systems
                    engineer and a machine learning researcher who kept running
                    into the same wall: the models worked, but nothing about how
                    they were delivered fit the institutions that needed them.
                  </p>
                  <p>
                    We are a research lab before we are a product company. Our
                    work starts with a question: can this model run on hardware
                    this institution already owns, in the language its users
                    actually speak, without its data ever leaving the building?
                    It ends with a system somebody depends on.
                  </p>
                  <p className="text-ink">
                    We build from <span className="font-medium">[location]</span>{" "}
                    because proximity isn&apos;t just one of our values.
                    It&apos;s our address.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-20 grid gap-px bg-line md:grid-cols-3">
              {VALUES_IN_PRACTICE.map((v, i) => (
                <Reveal key={v.k} delay={i * 80}>
                  <div className="h-full bg-white p-8 md:p-9">
                    <h3 className="text-[20px] font-semibold tracking-[-0.015em]">
                      {v.k}
                    </h3>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-ink-2">
                      {v.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Founding team ------------------------------------------------ */}
      <section id="team" className="blueprint bg-bone">
        <div className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <p className="eyebrow mb-6">The founding team</p>
              <h2 className="display max-w-[16ch] text-[clamp(30px,4vw,48px)]">
                The people building it.
              </h2>
              <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink-2">
                Proximity is a pillar, so who we are and where we sit is part of
                the argument, not a footnote.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px bg-dash/40 md:grid-cols-2">
              {FOUNDERS.map((f, i) => (
                <Reveal key={i} delay={i * 90}>
                  <article className="flex h-full flex-col gap-7 bg-bone p-8 sm:flex-row md:p-10">
                    <div className="w-full shrink-0 sm:w-[38%]">
                      <Portrait name={f.name} photo={f.photo} />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-[23px] font-semibold tracking-[-0.02em]">
                            {f.name}
                          </h3>
                          <p className="mt-1 text-[15px] text-ink-2">{f.role}</p>
                        </div>
                        <span className="shrink-0 border border-dash px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.5px] text-ink-2">
                          {f.experience}
                        </span>
                      </div>
                      <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                        {f.bio}
                      </p>
                      <div className="mt-auto pt-6">
                        <div className="flex flex-wrap gap-2">
                          {f.focus.map((tag, ti) => (
                            <span
                              key={ti}
                              className="bg-white px-3 py-1.5 text-[12.5px] text-ink-2"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {f.linkedin && (
                          <a
                            href={f.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="link-arrow mt-5 text-[14px] text-ink-2 transition-colors hover:text-ink"
                          >
                            LinkedIn <Arrow />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-10 text-[14px] text-grey">
                Hiring: we&apos;re looking for research and deployment engineers
                in [locations].{" "}
                <a href="mailto:hello@oragonlabs.com" className="text-ink underline">
                  Introduce yourself
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Contact
        heading="Come build with us."
        body="Partners, researchers and engineers: if this is the lab you've been waiting for, say hello."
      />
    </>
  );
}
