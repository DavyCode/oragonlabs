/* ------------------------------------------------------------------
   Oragonlabs: the "Fault O" mark and wordmark lockup.
   Spec: oragon-brand-book.html §01 and §02. Do not adjust the slip distance,
   the 12° plane angle, or the mark's rotation. The brand book forbids it.

   The book draws the mark as one ring rendered twice, each pass clipped to
   one side of the fault with <clipPath id="…">. Those ids collide when the
   logo renders more than once on a page (nav + footer) and clipPath is not
   supported by Satori, which builds the OG image. The paths below are that
   same ring pre-clipped analytically. Since (outer \ inner) ∩ H is identical
   to (outer ∩ H) \ (inner ∩ H), each half is one evenodd path with no ids.
   Verified against the book's geometry at 4× supersampling: 4 differing
   pixels in 62,880 for primary, 0 for compact.
   ------------------------------------------------------------------ */

/** Primary mark. Ring outer 46 / inner 27, slip ±7. */
const PRIMARY = {
  upper:
    "M95.5 42.4L70.6 17.5L35.4 17.5L10.5 42.4L10.5 68.21L95.5 49.79Z" +
    "M77.9 49.7L63.3 35.1L42.7 35.1L28.1 49.7L28.1 64.39L77.9 53.61Z",
  lower:
    "M24.5 68.21L24.5 77.6L49.4 102.5L84.6 102.5L109.5 77.6L109.5 49.79Z" +
    "M42.1 64.39L42.1 70.3L56.7 84.9L77.3 84.9L91.9 70.3L91.9 53.61Z",
};

/** Compact mark: thicker ring, wider slip. Required at 26px and below. */
const COMPACT = {
  upper:
    "M94.5 42.4L69.6 17.5L34.4 17.5L9.5 42.4L9.5 68.21L94.5 49.79Z" +
    "M72.3 51.6L60.4 39.7L43.6 39.7L31.7 51.6L31.7 63.4L72.3 54.6Z",
  lower:
    "M25.5 68.21L25.5 77.6L50.4 102.5L85.6 102.5L110.5 77.6L110.5 49.79Z" +
    "M47.7 63.4L47.7 68.4L59.6 80.3L76.4 80.3L88.3 68.4L88.3 54.6Z",
};

type MarkProps = {
  size?: number;
  /** Force the compact cut. Applied automatically at 26px and below. */
  compact?: boolean;
  className?: string;
  title?: string;
};

/**
 * The device mark on its own. Inherits `currentColor`, so the brand's
 * "one colour per rendering" rule holds by construction.
 */
export function Mark({ size = 26, compact, className = "", title }: MarkProps) {
  const g = compact ?? size <= 26 ? COMPACT : PRIMARY;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <path d={g.upper} fill="currentColor" fillRule="evenodd" />
      <path d={g.lower} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

/**
 * Wordmark. "labs" is part of the name: always attached, always lowercase,
 * always the lighter weight, never coloured (brand book §02).
 */
export function Wordmark({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`font-semibold tracking-[-0.03em] whitespace-nowrap ${className}`}
      style={style}
    >
      Oragon
      {/* muted, never coloured: resolves to ~#9a978f on paper and ~50% on dark */}
      <span className="font-[450] opacity-[0.45]">labs</span>
    </span>
  );
}

/**
 * Primary lockup: mark + wordmark.
 * Brand book §02: mark height = 1.3 × cap height, gap = 0.75 × mark width.
 */
export function Logo({
  size = 26,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Mark size={size} />
      <Wordmark
        style={{ marginLeft: size * 0.75, fontSize: size / 1.3 }}
      />
    </span>
  );
}
