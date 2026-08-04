import Reveal from "../Reveal";
import { Arrow } from "../Icons";

const AUDIENCES = [
  {
    who: "For governments",
    promise: "Sovereign capability, not rented access.",
    body: "National data stays on national soil. Systems your institutions own and operate. Compliance with your data-protection laws by design, and independence from any single foreign provider. We help you build AI capability as public infrastructure, not a subscription.",
    dark: true,
  },
  {
    who: "For businesses",
    promise: "Enterprise AI that fits your economics.",
    body: "Deploy on your infrastructure or ours. Pay prices set for this market, in terms you can predict. Get systems tuned to your customers' languages and realities, with local engineers who answer when you call.",
    dark: false,
  },
];

export default function Audiences() {
  return (
    <section className="grid lg:grid-cols-2">
      {AUDIENCES.map((a) => (
        <Reveal key={a.who}>
          <div
            className={`flex h-full flex-col justify-between px-5 py-20 md:px-12 md:py-28 ${
              a.dark ? "bg-near-black text-white" : "bg-bone text-ink"
            }`}
          >
            <div>
              <p className={`eyebrow mb-7 ${a.dark ? "text-white/45" : ""}`}>
                {a.who}
              </p>
              <h3 className="display max-w-[16ch] text-[clamp(26px,3vw,36px)]">
                {a.promise}
              </h3>
              <p
                className={`mt-6 max-w-[50ch] text-[16.5px] leading-relaxed ${
                  a.dark ? "text-white/60" : "text-ink-2"
                }`}
              >
                {a.body}
              </p>
            </div>
            <a
              href="#contact"
              className={`btn mt-12 self-start ${a.dark ? "btn-on-dark" : ""}`}
            >
              Talk to our team <Arrow />
            </a>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
