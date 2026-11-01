import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { Logo } from "./components/logo";
import { SKYLINE_LAYERS, skylineMarkup } from "./components/skyline";

export const alt =
  "yh.Labs: Open source, crafted with care. Flutter, Android, iOS and Rust projects by Andrew Do.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fonts = join(process.cwd(), "assets/fonts");
const geistRegular = await readFile(join(fonts, "Geist-Regular.ttf"));
const geistSemiBold = await readFile(join(fonts, "Geist-SemiBold.ttf"));

const night = "#07080b";
const ink = "#eceef1";
const inkMuted = "#a2a7b0";

const stack = [
  { name: "Flutter", tone: "#4fb8e8" },
  { name: "Kotlin", tone: "#a77bf3" },
  { name: "Swift", tone: "#f05138" },
  { name: "Rust", tone: "#e8793a" },
];

// Same proportions as the hero: back layers tallest.
const layerHeights = [118, 88, 57];

const skyline = SKYLINE_LAYERS.map(
  (layer, i) =>
    `data:image/svg+xml;base64,${Buffer.from(skylineMarkup(layer, i)).toString("base64")}`,
);

// The OG renderer measures each word separately and leaves uneven gaps
// between them. Every line here is fixed, so join its words with
// non-breaking spaces and let it lay out as one run.
const oneLine = (text: string) => text.replaceAll(" ", "\u00a0");

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          padding: "68px 80px",
          backgroundColor: night,
          backgroundImage:
            "radial-gradient(ellipse 55% 60% at 82% 38%, rgba(232,121,58,0.24), transparent 70%), radial-gradient(ellipse 90% 35% at 50% 100%, rgba(232,121,58,0.14), transparent 70%)",
          color: ink,
          fontFamily: "Geist",
        }}
      >
        {skyline.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            width={1272}
            height={layerHeights[i]}
            style={{ position: "absolute", left: -36, bottom: 0 }}
          />
        ))}

        <Logo width={151} height={45} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 92,
            fontSize: 108,
            fontWeight: 600,
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
          }}
        >
          <span>{oneLine("Open source,")}</span>
          <span>{oneLine("crafted with care.")}</span>
        </div>

        <div style={{ display: "flex", marginTop: 36, fontSize: 32, color: ink }}>
          {oneLine("Flutter, Android, iOS and Rust projects by Andrew Do.")}
        </div>

        <div style={{ display: "flex", gap: 28, marginTop: 28, fontSize: 24, color: inkMuted }}>
          {stack.map((s) => (
            <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 11, height: 11, borderRadius: 3, backgroundColor: s.tone }} />
              {s.name}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, style: "normal", weight: 400 },
        { name: "Geist", data: geistSemiBold, style: "normal", weight: 600 },
      ],
    },
  );
}
