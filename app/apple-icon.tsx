import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Reuse the tab icon. iOS rounds the corners itself, so the image stays
// full-bleed and the SVG's own rounded square sits on the same night color.
const mark = await readFile(join(process.cwd(), "app/icon.svg"));
const src = `data:image/svg+xml;base64,${mark.toString("base64")}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", backgroundColor: "#07080b" }}>
        <img src={src} alt="" width={180} height={180} />
      </div>
    ),
    { ...size },
  );
}
