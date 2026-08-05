"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./Brand";

const LINKS = [
  { label: "Labs", href: "/labs" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Routes whose hero is light, so the nav must use dark ink over them.
  const LIGHT_HERO = ["/labs"];
  const onDark = !solid && !open && !LIGHT_HERO.includes(pathname);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white/92 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-12">
        {/* Negative margin absorbs the padding, so the hit area grows to a
            touch-sized 44px without moving the lockup. */}
        <Link
          href="/"
          className={`-m-2 flex min-h-11 items-center p-2 ${
            onDark ? "text-white" : "text-ink"
          }`}
          aria-label="Oragonlabs home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.5px] transition-opacity hover:opacity-60 ${
                  onDark ? "text-white" : "text-ink"
                } ${active ? "opacity-100" : "opacity-80"}`}
              >
                {l.label}
                {active && (
                  <span
                    className={`h-1 w-1 rounded-full ${
                      onDark ? "bg-white" : "bg-ink"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Wrapped: `.btn` sets display and would beat Tailwind's `hidden`. */}
          <span className="hidden md:block">
            <Link href="/#contact" className="btn">
              Partner with us
            </Link>
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm lg:hidden"
          >
            <span className="grid grid-cols-2 gap-[3px]">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="block h-[5px] w-[5px] bg-black" />
              ))}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 pb-6 pt-2 lg:hidden">
          <Link
            href="/"
            onClick={close}
            className="block border-b border-line py-3.5 text-[13px] font-semibold uppercase tracking-[0.5px]"
          >
            Home
          </Link>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="block border-b border-line py-3.5 text-[13px] font-semibold uppercase tracking-[0.5px]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={close}
            className="btn mt-5 w-full justify-center"
          >
            Partner with us
          </Link>
        </div>
      )}
    </header>
  );
}
