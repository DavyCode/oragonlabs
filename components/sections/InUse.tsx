import Image from "next/image";
import Reveal from "../Reveal";
import { Arrow } from "../Icons";

/* Organisations using Oragonlabs. Logos are each product's own app icon,
   copied into public/logos. */
const ORGS = [
  {
    name: "Shiga",
    note: "Business payments",
    href: "https://business.payshiga.com/login",
    logo: "/logos/shiga.png",
  },
  {
    name: "Voiceit",
    note: "Live dictation and voice notes",
    href: "https://voiceit.oragonlabs.com/",
    logo: "/logos/voiceit.svg",
  },
  {
    name: "Choredesk",
    note: "Oversight for AI-written software",
    href: "https://choredesk.oragonlabs.com/",
    logo: "/logos/choredesk.svg",
  },
];

export default function InUse() {
  return (
    <section id="in-use" className="blueprint bg-white">
      <div className="px-5 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="eyebrow mb-6">In use</p>
            <h2 className="display max-w-[18ch] text-[clamp(30px,4vw,48px)]">
              Already running on Oragonlabs.
            </h2>
            <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink-2">
              Organisations using Oragonlabs technology today.
            </p>
          </Reveal>

          <Reveal delay={110}>
            <ul className="mt-14 grid border border-line sm:grid-cols-3">
              {ORGS.map((o) => (
                <li
                  key={o.name}
                  className="border-line [&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-b-0 sm:[&:not(:last-child)]:border-r"
                >
                  <a
                    href={o.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col px-6 py-8 transition-colors hover:bg-bone"
                  >
                    <Image
                      src={o.logo}
                      alt={`${o.name} logo`}
                      width={48}
                      height={48}
                      className="rounded-[10px]"
                    />
                    <span className="display mt-6 text-[clamp(22px,2.4vw,28px)]">
                      {o.name}
                    </span>
                    <span className="mt-3 font-mono text-[11px] uppercase tracking-[1px] text-grey">
                      {o.note}
                    </span>
                    <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium">
                      Visit <Arrow />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
