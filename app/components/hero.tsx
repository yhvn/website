import { GITHUB_URL } from "../lib/github";
import {
  CodeCard,
  CourseHomeScreen,
  LessonScreen,
  Phone,
  ReceiveScreen,
  TerminalCard,
} from "./devices";
import { Float, HeroStage, Parallax } from "./hero-motion";
import { SKYLINE_LAYERS, SkylineLayer } from "./skyline";

const stack = [
  { name: "Flutter", tone: "#4fb8e8" },
  { name: "Kotlin", tone: "#a77bf3" },
  { name: "Swift", tone: "#f05138" },
  { name: "Rust", tone: "#e8793a" },
];

const layerHeights = ["h-[46%]", "h-[34%]", "h-[22%]"];

export function Hero() {
  return (
    <HeroStage
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-night pt-24 sm:pt-28"
    >
      {/* The one warm glow: behind the devices, and a faint band over the horizon. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_40%_at_72%_42%,rgba(232,121,58,0.22),transparent_70%),radial-gradient(ellipse_80%_30%_at_50%_100%,rgba(232,121,58,0.12),transparent_70%)]"
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[62%]">
        {SKYLINE_LAYERS.map((layer, i) => (
          <Parallax
            key={layer.seed}
            depth={4 + i * 6}
            scrollDepth={40 + i * 70}
            className={`absolute inset-x-[-3%] bottom-0 ${layerHeights[i]}`}
          >
            <SkylineLayer layer={layer} index={i} />
          </Parallax>
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 items-center gap-y-10 px-4 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-x-8 lg:pb-28">
        <div className="relative z-20 lg:col-span-7">
          <p
            className="rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-ink-muted backdrop-blur-sm"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <span className="size-1.5 rounded-full bg-copper" aria-hidden="true" />
            Open source · Mobile &amp; Rust
          </p>

          <h1
            id="hero-title"
            className="rise mt-7 text-[clamp(2.25rem,9vw,4.5rem)] lg:text-[clamp(3rem,5.6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Open source, crafted with care.
          </h1>

          <p
            className="rise mt-8 max-w-[34rem] text-lg leading-relaxed text-ink sm:text-xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Free Flutter, Android, iOS and Rust projects that anyone can use,
            learn from, and contribute to.
          </p>

          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <a
              href="#projects"
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-copper px-7 text-base font-semibold text-night transition-[background-color,transform] duration-200 hover:bg-copper-soft active:scale-[0.98]"
            >
              Explore Projects
              <svg
                viewBox="0 0 16 16"
                className="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M8 2v11m0 0-4.5-4.5M8 13l4.5-4.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-7 text-base font-medium text-ink backdrop-blur-sm transition-[border-color,background-color,transform] duration-200 hover:border-copper/60 hover:bg-white/[0.07] active:scale-[0.98]"
            >
              <svg viewBox="0 0 16 16" className="size-[18px]" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              View on GitHub
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>

          <ul
            aria-label="Technologies"
            className="rise mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            {stack.map((s) => (
              <li key={s.name} className="flex items-center gap-2">
                <span className="size-2 rounded-[2px]" style={{ background: s.tone }} aria-hidden="true" />
                {s.name}
              </li>
            ))}
          </ul>
        </div>

        <HeroScene />
      </div>
    </HeroStage>
  );
}

function HeroScene() {
  return (
    <div
      role="img"
      aria-label="Two of our projects on screen: the oxdrop terminal showing a QR code, a phone receiving the files in its browser, and the Flutter e-learning app on two phones"
      className="relative w-full [container-type:inline-size] lg:col-span-5 lg:-ml-[22%] lg:w-[122%]"
    >
      <div className="relative aspect-[64/60] text-[1.5625cqw] [perspective:140em]">
        {/* Back: Rust terminal with the transfer QR code */}
        <Parallax depth={8} className="absolute left-0 top-[3em] z-10">
          <Float amplitude={7} duration={9} delay={0.6}>
            <TerminalCard className="[transform:rotateY(14deg)_rotateX(4deg)]" />
          </Float>
        </Parallax>

        {/* Back right: Flutter lesson screen, smaller and dimmer */}
        <Parallax depth={10} className="absolute left-[42em] top-[1em] z-10">
          <Float amplitude={9} duration={8.5} delay={1.2}>
            <div className="origin-top-left scale-[0.84] brightness-[0.72]">
              <Phone kind="android" label="Flutter e-learning app: lesson screen" className="[transform:rotateY(-24deg)_rotateX(6deg)_rotateZ(3deg)]">
                <LessonScreen />
              </Phone>
            </div>
          </Float>
        </Parallax>

        {/* Middle: the phone that scanned the QR code */}
        <Parallax depth={18} className="absolute left-[12em] top-[14em] z-20">
          <Float amplitude={12} duration={7} delay={0}>
            <Phone kind="android" label="oxdrop receiver page in an Android browser" className="[transform:rotateY(20deg)_rotateX(5deg)_rotateZ(-5deg)]">
              <ReceiveScreen />
            </Phone>
          </Float>
        </Parallax>

        {/* Rust code panel, between the two front phones */}
        <Parallax depth={22} className="absolute left-[41em] top-[44em] z-30">
          <Float amplitude={8} duration={10} delay={2}>
            <CodeCard className="[transform:rotateY(-14deg)_rotateX(6deg)]" />
          </Float>
        </Parallax>

        {/* Front: Flutter e-learning home on iOS */}
        <Parallax depth={30} className="absolute left-[30em] top-[11em] z-40">
          <Float amplitude={14} duration={6.2} delay={0.9}>
            <Phone kind="ios" label="Flutter e-learning app: home screen on iOS" className="[transform:rotateY(-16deg)_rotateX(6deg)_rotateZ(3deg)]">
              <CourseHomeScreen />
            </Phone>
          </Float>
        </Parallax>
      </div>
    </div>
  );
}
