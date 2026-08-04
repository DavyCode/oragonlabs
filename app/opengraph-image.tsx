import { ImageResponse } from "next/og";

export const alt = "Oragonlabs | An AI research lab for the real world";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Satori (the ImageResponse renderer) supports a CSS subset: flex only,
   no CSS variables, no Tailwind classes. Tokens are inlined from
   app/globals.css by hand. */
const INK = "#171717";
const INK_2 = "#515151";
const BONE = "#f0efea";
const DASH = "#c7c7c7";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BONE,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="44" height="44" viewBox="0 0 26 26" fill="none">
            <path
              d="M4 8.5V4h18M4 17.5V22h18"
              stroke={INK}
              strokeWidth="2.4"
              strokeLinecap="square"
            />
            <circle cx="13" cy="13" r="3.6" fill={INK} />
          </svg>
          <span
            style={{
              marginLeft: 16,
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: INK,
            }}
          >
            Oragonlabs
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: INK,
              maxWidth: 900,
            }}
          >
            An AI research lab for the real world.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 27,
              lineHeight: 1.45,
              color: INK_2,
              maxWidth: 860,
            }}
          >
            Sovereign, affordable AI, deployed close to the people it serves.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: `1px solid ${DASH}`,
            paddingTop: 26,
            fontSize: 20,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            color: INK_2,
          }}
        >
          Research · Sovereignty · Proximity
        </div>
      </div>
    ),
    size,
  );
}
