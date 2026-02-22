import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Claws — Agence d'agents IA autonomes en France";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#F5F2EE",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo pixel placeholder + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Pixel robot icon — simplified SVG inline */}
          <svg width="48" height="48" viewBox="0 0 512 512" fill="none">
            {/* body */}
            <rect x="96" y="224" width="320" height="160" fill="#0E0E0E" />
            {/* legs */}
            <rect x="128" y="320" width="96" height="128" fill="#0E0E0E" />
            <rect x="288" y="320" width="96" height="128" fill="#0E0E0E" />
            {/* arms */}
            <rect x="32" y="224" width="64" height="80" fill="#0E0E0E" />
            <rect x="416" y="224" width="64" height="80" fill="#0E0E0E" />
            {/* neck */}
            <rect x="224" y="160" width="64" height="64" fill="#0E0E0E" />
            {/* head glow */}
            <rect x="208" y="128" width="96" height="96" fill="#E85D04" />
          </svg>
          <span
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#0E0E0E",
              letterSpacing: "-0.04em",
            }}
          >
            Claws
          </span>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "#0E0E0E",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              maxWidth: "880px",
            }}
          >
            Des agents IA qui travaillent{" "}
            <span style={{ color: "#E85D04" }}>pour vous.</span>
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#555",
              fontWeight: "400",
              letterSpacing: "-0.01em",
            }}
          >
            Installation, configuration et maintenance — claws.fr
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "18px", color: "#999", letterSpacing: "0.08em" }}>
            PARIS · 2025
          </span>
          <div
            style={{
              background: "#E85D04",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "4px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            claws.fr →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
