import type { SVGProps } from "react";

/* Original marks for Oragonlabs — nothing here is traced from the reference site. */

/** Wordmark glyph: intelligence held inside a boundary you control. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <path
          d="M4 8.5V4h18M4 17.5V22h18"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="square"
        />
        <circle cx="13" cy="13" r="3.6" fill="currentColor" />
      </svg>
      <span className="text-[19px] font-semibold tracking-[-0.02em]">
        Oragonlabs
      </span>
    </span>
  );
}

export function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="arrow"
      aria-hidden
      {...props}
    >
      <path
        d="M2.5 8h11m0 0L9 3.5M13.5 8L9 12.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  fill: "none",
  strokeLinecap: "square" as const,
};

/* Pillar icons — thin-line technical marks, one per pillar. */

export function IconSovereignty(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden {...props}>
      <path d="M15 3l10 4v8c0 6-4.4 10-10 12C9.4 25 5 21 5 15V7l10-4z" {...stroke} />
      <path d="M11 14.5h8v5h-8z" {...stroke} />
      <path d="M13 14.5v-2a2 2 0 014 0v2" {...stroke} />
    </svg>
  );
}

export function IconPrivacy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden {...props}>
      <path d="M3 15s4.5-7 12-7 12 7 12 7-4.5 7-12 7-12-7-12-7z" {...stroke} />
      <circle cx="15" cy="15" r="3.2" {...stroke} />
      <path d="M5 25L25 5" {...stroke} />
    </svg>
  );
}

export function IconAccess(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden {...props}>
      <circle cx="15" cy="15" r="11" {...stroke} />
      <path d="M4 15h22M15 4c3 3.4 4.5 7 4.5 11S18 22.6 15 26c-3-3.4-4.5-7-4.5-11S12 7.4 15 4z" {...stroke} />
    </svg>
  );
}

export function IconProximity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden {...props}>
      <path d="M15 26s8-6.4 8-12a8 8 0 10-16 0c0 5.6 8 12 8 12z" {...stroke} />
      <circle cx="15" cy="13.5" r="3" {...stroke} />
    </svg>
  );
}

export function IconPrice(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden {...props}>
      <circle cx="15" cy="15" r="11" {...stroke} />
      <path d="M18.5 11.5c-.8-1.2-2-1.8-3.5-1.8-2.2 0-3.6 1.1-3.6 2.7 0 3.8 7.2 1.8 7.2 5.6 0 1.7-1.5 2.8-3.6 2.8-1.6 0-2.9-.6-3.7-1.9M15 7.5v15" {...stroke} />
    </svg>
  );
}

export function IconDecentralised(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden {...props}>
      <circle cx="15" cy="6" r="3" {...stroke} />
      <circle cx="6" cy="21" r="3" {...stroke} />
      <circle cx="24" cy="21" r="3" {...stroke} />
      <path d="M13 8.6L8 18.4M17 8.6l5 9.8M9 21h12" {...stroke} />
    </svg>
  );
}
