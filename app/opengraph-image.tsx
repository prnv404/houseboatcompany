import { ImageResponse } from "next/og";
import { BRAND } from "./lib/seo";

// Site-wide default social share card. Detail pages override this with their
// own photography via `openGraph.images` in generateMetadata.
export const alt = "HouseBoat Company — Luxury Alleppey backwater cruises";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0c4a6e 0%, #0369a1 55%, #0891b2 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 2, opacity: 0.9 }}>
          ALLEPPEY · KERALA BACKWATERS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            <span>Luxury Houseboat</span>
            <span>Cruises in Alleppey</span>
          </div>
          <div style={{ display: "flex", fontSize: 34, opacity: 0.92, maxWidth: 900 }}>
            Private whole-boat charters &amp; shared cruises through Kerala&apos;s palm-lined canals.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 600 }}>
          {BRAND}
        </div>
      </div>
    ),
    { ...size },
  );
}
