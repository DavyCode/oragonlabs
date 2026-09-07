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
  bio: string | string[];
  focus: string[];
  linkedin?: string;
};

const FOUNDERS: Founder[] = [
  {
    name: "David Azemoh",
    role: "Chief Engineer & AI Researcher",
    photo: "/team/david-azemoh.png",
    experience: "8+ years",
    bio: [
      "Eight years architecting distributed systems serving more than 5 million monthly active users, across national infrastructure, regulated finance and public-sector platforms.",
      "Researches how models actually get deployed, starting with inference that holds under real load.",
      "Builds systems that keep working offline, and works out what it takes to run them on hardware an institution already owns.",
      "Builds and leads the engineering teams that keep those systems running.",
    ],
    focus: ["AI infrastructure", "Edge deployment"],
    linkedin: "https://www.linkedin.com/in/dazemoh",
  },
  {
    name: "Daniel Adama",
    role: "Chief AI Researcher",
    photo: "/team/daniel-adama.png",
    experience: "6+ years",
    bio: [
      "Spearheaded George, an AI auditor built to ISA, IAASB and GAAS.",
      "Reconciles 220,000+ transactions against the general ledger in under 12 minutes for banks and fintechs, multi-tenant, on statement data that arrives messy and inconsistent.",
      "Fine-tuned YOLOv8 across 142,000+ images and 14 classes for real-time detection: cameras placed, data annotated, variants benchmarked, model shipped.",
      "Fine-tuned and deployed an open-source LLM end to end in early 2023, gathering and processing the training data himself.",
      "Builds for what compute costs: serverless GPUs for the heavy vision jobs, a cheap model for bulk matching with heavier processing held back for ambiguous cases, event-driven workers that scale to zero between runs.",
    ],
    focus: ["Applied research", "Production AI at scale"],
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
          className="founder-photo object-cover"
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
                    Oragonlabs started with engineers building AI for
                    institutions that needed it, and watching the work fall over
                    for reasons that had nothing to do with the models. The
                    models were fine. Everything around them took things for
                    granted: a data centre nearby, a network that stayed up, and
                    an organisation happy to send its records abroad just to get
                    an answer back.
                  </p>
                  <p>
                    Two things got in the way, and neither of them was the
                    technology. One was what it cost to even start. Using AI
                    meant rebuilding: new infrastructure, new specialists, money
                    signed off long before anyone had seen it work. The other
                    was trust. No hospital is going to hand over patient
                    records, and no ministry is going to hand over citizen data,
                    to a system it can&apos;t inspect, running somewhere it
                    can&apos;t visit, under terms it didn&apos;t write. Most of
                    them looked at that and said no.
                  </p>
                  <p className="text-ink">
                    We&apos;re a research lab before we&apos;re a product
                    company. Our work starts with a question: can this model run
                    on hardware this institution already owns, in the language
                    its users actually speak, without its data ever leaving the
                    building? It ends with a system somebody depends on.
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
                  <article className="founder-card flex h-full flex-col gap-7 bg-bone p-8 sm:flex-row md:p-10">
                    <div className="w-full shrink-0 sm:w-[38%]">
                      <Portrait name={f.name} photo={f.photo} />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-[23px] font-semibold tracking-[-0.02em]">
                            <span className="founder-name">{f.name}</span>
                          </h3>
                          <p className="mt-1 text-[15px] text-ink-2">{f.role}</p>
                        </div>
                        <span className="shrink-0 border border-dash px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.5px] text-ink-2">
                          {f.experience}
                        </span>
                      </div>
                      {Array.isArray(f.bio) ? (
                        <ul className="founder-bio mt-4 flex flex-col gap-2.5 text-[15px] leading-relaxed text-ink-2">
                          {f.bio.map((line, bi) => (
                            <li key={bi} className="founder-bullet pl-4">
                              {line}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="founder-bio mt-4 text-[15px] leading-relaxed text-ink-2">
                          {f.bio}
                        </p>
                      )}
                      <div className="mt-auto pt-6">
                        <div className="flex flex-wrap gap-2">
                          {f.focus.map((tag, ti) => (
                            <span
                              key={ti}
                              className="founder-tag bg-white px-3 py-1.5 text-[12.5px] text-ink-2"
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
