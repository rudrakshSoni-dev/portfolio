import { ImageResponse } from "next/og";
import { profile } from "@/lib/data/profile";

export const alt = profile.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 96,
        background: "#0b0b0b",
        color: "#fafafa",
      }}
    >
      <div style={{ fontSize: 32, color: "#4ade80", fontFamily: "monospace" }}>
        ~/rudrakshh.live
      </div>
      <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>
        {profile.fullName}
      </div>
      <div style={{ fontSize: 36, color: "#a1a1aa", marginTop: 16 }}>
        Backend and AI engineer
      </div>
    </div>,
    size,
  );
}
