import { Logo } from "../Brand";

const COLUMNS = [
  {
    head: "Company",
    links: [
      ["About us", "/about"],
      ["Products", "/products"],
      ["Investors", "/investors"],
    ],
  },
  {
    head: "Explore",
    links: [
      ["Home", "/"],
      ["Labs", "/labs"],
    ],
  },
  {
    head: "Contact",
    links: [
      ["hello@oragonlabs.com", "mailto:hello@oragonlabs.com"],
      ["Partner with us", "/#contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bone">
      <div className="px-5 py-16 md:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="max-w-[38ch]">
              <Logo />
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
                Oragonlabs is an AI research lab developing mission-critical
                solutions that are sovereign and affordable for businesses,
                governments and everyday people in emerging markets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-14 gap-y-8 sm:grid-cols-3">
              {COLUMNS.map((col) => (
                <div key={col.head}>
                  <p className="eyebrow mb-4 md:mb-4">{col.head}</p>
                  {/* Rows are touch-sized on mobile and tighten back up on
                      desktop, where the pointer is precise. */}
                  <ul className="space-y-0 md:space-y-2.5">
                    {col.links.map(([label, href]) => (
                      <li key={label}>
                        <a
                          href={href}
                          className="inline-flex min-h-11 items-center text-[14.5px] text-ink-2 transition-colors hover:text-ink md:min-h-0"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rule-dashed mt-14 flex flex-col justify-between gap-3 pt-7 text-[13px] text-grey sm:flex-row">
            <p>© {new Date().getFullYear()} Oragonlabs. All rights reserved.</p>
            <p>Sovereign. Close. Open. Within reach.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
