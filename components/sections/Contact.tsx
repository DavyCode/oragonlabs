import Reveal from "../Reveal";
import { Arrow } from "../Icons";

export default function Contact({
  heading = "Let's build intelligence that belongs here.",
  body = "Whether you're a ministry planning national AI capability or a business ready to put AI to work, we'd like to talk.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section id="contact" className="relative bg-near-black text-white">
      <div className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-white/15 md:left-12 md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-5 hidden border-l border-dashed border-white/15 md:right-12 md:block" />

      <div className="px-5 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1180px] text-center">
          <Reveal>
            <h2 className="display mx-auto max-w-[18ch] text-[clamp(32px,5vw,62px)]">
              {heading}
            </h2>
            <p className="mx-auto mt-7 max-w-[56ch] text-[17px] leading-relaxed text-white/60">
              {body}
            </p>
            {/* PLACEHOLDER — swap for your real address. */}
            <a href="mailto:hello@oragonlabs.com" className="btn btn-on-dark mt-10">
              Get in touch: hello@oragonlabs.com <Arrow />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
