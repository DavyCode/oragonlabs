import { ImageResponse } from "next/og";

export const alt = "Oragonlabs | An AI research lab for the real world";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Satori (the ImageResponse renderer) supports a CSS subset: flex only, no
   CSS variables, no Tailwind classes. Brand tokens inlined by hand.
   Brand book §03 sets the social banner as the mark on Night. */
const NIGHT = "#0E0F12";
const PAPER = "#EDEDEB";

const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
<path fill="#fff" fill-rule="evenodd" d="M95.5 42.4L70.6 17.5L35.4 17.5L10.5 42.4L10.5 68.21L95.5 49.79ZM77.9 49.7L63.3 35.1L42.7 35.1L28.1 49.7L28.1 64.39L77.9 53.61Z"/>
<path fill="#fff" fill-rule="evenodd" d="M24.5 68.21L24.5 77.6L49.4 102.5L84.6 102.5L109.5 77.6L109.5 49.79ZM42.1 64.39L42.1 70.3L56.7 84.9L77.3 84.9L91.9 70.3L91.9 53.61Z"/>
</svg>`;

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
          background: NIGHT,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        {/* Lockup: mark + wordmark, brand book §02 proportions */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            width={52}
            height={52}
            alt=""
            src={`data:image/svg+xml;utf8,${encodeURIComponent(MARK)}`}
          />
          <div
            style={{
              display: "flex",
              marginLeft: 39,
              fontSize: 40,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            <span>Oragon</span>
            <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>
              labs
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: PAPER,
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
              color: "rgba(237,237,235,0.6)",
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
            borderTop: "1px solid rgba(237,237,235,0.2)",
            paddingTop: 26,
            fontSize: 20,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            color: "rgba(237,237,235,0.5)",
          }}
        >
          Research · Sovereignty · Proximity
        </div>
      </div>
    ),
    size,
  );
}
