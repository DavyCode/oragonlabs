import Reveal from "../Reveal";

/**
 * Mission band — sits directly under the hero, mirroring the reference site's
 * structure (hero → mission statement on bone → everything else).
 *
 * The statement follows the same grammar as the reference's own mission line:
 * "Building [what] that empower [who] to [outcome]."
 */
export default function Mission({
  tone = "bone",
}: {
  tone?: "bone" | "white";
}) {
  return (
    <section
      id="mission"
      className={`blueprint ${tone === "bone" ? "bg-bone" : "bg-white"}`}
    >
      <div className="px-5 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="eyebrow mb-10">Our mission</p>
            <h2 className="statement max-w-[30ch]">
              Building mission-critical AI that empowers emerging markets to own
              their data, serve their people, and shape their future.
            </h2>
          </Reveal>

          <Reveal delay={110}>
            <div className="mt-16 grid gap-10 border-t border-dash/60 pt-12 lg:grid-cols-[1fr_1fr]">
              <p className="max-w-[52ch] text-[17px] leading-relaxed text-ink-2">
                Oragonlabs is an AI research lab developing mission-critical
                solutions that are sovereign and affordable for businesses,
                governments and everyday people in emerging markets. We research
                where the technology genuinely helps, then build it so it runs
                close to the people it serves: on their infrastructure, in their
                languages, at prices their economies sustain.
              </p>
              <p className="max-w-[46ch] text-[19px] font-medium leading-relaxed tracking-[-0.01em]">
                Intelligence should reach the people it was always supposed to
                help. That gap is the whole reason this lab exists.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
