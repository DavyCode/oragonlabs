import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* Brand book §03 "app · dark": mark at 0.75 scale on Night.
   No corner radius here on purpose: iOS applies its own mask to
   apple-touch-icon, and baking one in leaves dark fringes at the corners. */
const NIGHT = "#0E0F12";

const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
<path fill="#fff" fill-rule="evenodd" d="M94.5 42.4L69.6 17.5L34.4 17.5L9.5 42.4L9.5 68.21L94.5 49.79ZM72.3 51.6L60.4 39.7L43.6 39.7L31.7 51.6L31.7 63.4L72.3 54.6Z"/>
<path fill="#fff" fill-rule="evenodd" d="M25.5 68.21L25.5 77.6L50.4 102.5L85.6 102.5L110.5 77.6L110.5 49.79ZM47.7 63.4L47.7 68.4L59.6 80.3L76.4 80.3L88.3 68.4L88.3 54.6Z"/>
</svg>`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: NIGHT,
        }}
      >
        <img
          width={135}
          height={135}
          alt=""
          src={`data:image/svg+xml;utf8,${encodeURIComponent(MARK)}`}
        />
      </div>
    ),
    size,
  );
}
