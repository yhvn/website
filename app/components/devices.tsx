import type { ReactNode } from "react";
import { QrCode } from "./qr-code";

// Every size in this file is in em. The hero scene sets its font size from
// its own width, so the whole composition scales as one drawing.

export function Phone({
  kind,
  label,
  className = "",
  children,
}: {
  kind: "ios" | "android";
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <figure
      data-ui
      aria-label={label}
      className={`relative w-[19em] rounded-[3em] bg-[#1b1d23] p-[0.55em] shadow-[0_3em_6em_-1.5em_rgba(0,0,0,0.85),0_0_0_0.1em_rgba(255,255,255,0.09),inset_0_0_0_0.12em_rgba(255,255,255,0.06)] ${className}`}
    >
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.5em] bg-night-2">
        {kind === "ios" ? (
          <div className="absolute left-1/2 top-[0.8em] z-10 h-[1.9em] w-[6.2em] -translate-x-1/2 rounded-full bg-black" />
        ) : (
          <div className="absolute left-1/2 top-[1em] z-10 size-[1.3em] -translate-x-1/2 rounded-full bg-black" />
        )}
        <StatusBar />
        {children}
      </div>
    </figure>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-[1.9em] pt-[1.05em] text-[0.95em] font-medium text-ink">
      <span>9:41</span>
      <span className="flex items-center gap-[0.35em]" aria-hidden="true">
        <span className="flex items-end gap-[0.12em]">
          {[0.35, 0.55, 0.75, 0.95].map((h) => (
            <span key={h} className="w-[0.22em] rounded-[0.05em] bg-ink" style={{ height: `${h}em` }} />
          ))}
        </span>
        <span className="h-[0.9em] w-[1.8em] rounded-[0.25em] border-[0.1em] border-ink/60 p-[0.1em]">
          <span className="block h-full w-3/4 rounded-[0.1em] bg-ink" />
        </span>
      </span>
    </div>
  );
}

/* ---------- e-learning (Flutter) ---------- */

const courses = [
  { title: "Flutter from zero", lessons: "24 lessons", done: 0.72, tone: "#e8793a" },
  { title: "State management", lessons: "12 lessons", done: 0.4, tone: "#3f8f86" },
  { title: "Animations in Dart", lessons: "9 lessons", done: 0.15, tone: "#c9a35b" },
];

export function CourseHomeScreen() {
  return (
    <div className="px-[1.4em] pt-[2.4em] text-ink">
      <p className="text-[0.95em] text-ink-muted">Good evening, Linh</p>
      <p className="mt-[0.2em] text-[1.75em] font-semibold leading-[1.1] tracking-[-0.02em]">
        Continue learning
      </p>

      <div className="mt-[1.2em] rounded-[1.4em] bg-copper p-[1.2em] text-night">
        <p className="text-[0.85em] font-medium opacity-80">Lesson 18 of 24</p>
        <p className="mt-[0.3em] text-[1.3em] font-semibold leading-tight tracking-[-0.01em]">
          Building custom widgets
        </p>
        <div className="mt-[1em] flex items-center gap-[0.7em]">
          <span className="grid size-[2.3em] place-items-center rounded-full bg-night text-copper">
            <svg viewBox="0 0 10 10" className="ml-[0.12em] size-[0.85em]" aria-hidden="true">
              <path d="M1 0.5 9.5 5 1 9.5z" fill="currentColor" />
            </svg>
          </span>
          <span className="h-[0.35em] flex-1 rounded-full bg-night/20">
            <span className="block h-full w-[72%] rounded-full bg-night" />
          </span>
        </div>
      </div>

      <p className="mt-[1.4em] text-[1em] font-semibold">Your courses</p>
      <ul className="mt-[0.7em] space-y-[0.7em]">
        {courses.map((c) => (
          <li key={c.title} className="flex items-center gap-[0.8em] rounded-[1.1em] bg-night-3 p-[0.75em]">
            <span className="size-[2.6em] shrink-0 rounded-[0.8em]" style={{ background: c.tone }} />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[0.95em] font-medium">{c.title}</span>
              <span className="block text-[0.8em] text-ink-muted">{c.lessons}</span>
              <span className="mt-[0.4em] block h-[0.25em] rounded-full bg-white/10">
                <span className="block h-full rounded-full" style={{ width: `${c.done * 100}%`, background: c.tone }} />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LessonScreen() {
  return (
    <div className="text-ink">
      <div className="mx-[1em] mt-[1.6em] aspect-video overflow-hidden rounded-[1em] bg-[#1f2b2a]">
        <div className="relative h-full w-full">
          <pre className="absolute inset-x-[12%] top-[22%] h-[56%] rounded-[0.4em] bg-night-2 p-[0.6em] font-mono text-[0.6em] leading-[1.5] text-[#9fd1c7]">
            <code>
              class Card{"\n"}
              <span className="text-ink-muted">  extends StatelessWidget</span>{"\n"}
              <span className="text-copper-soft">  build(context)</span>
            </code>
          </pre>
          <span className="absolute bottom-[0.5em] left-[0.6em] right-[0.6em] h-[0.2em] rounded-full bg-white/20">
            <span className="block h-full w-[38%] rounded-full bg-copper" />
          </span>
        </div>
      </div>
      <div className="px-[1.4em] pt-[1.2em]">
        <p className="text-[0.85em] text-ink-muted">Flutter from zero · 18</p>
        <p className="mt-[0.2em] text-[1.35em] font-semibold leading-tight tracking-[-0.01em]">
          Building custom widgets
        </p>
        <ul className="mt-[1.2em] space-y-[0.55em] text-[0.9em]">
          {["Stateless or stateful", "Composing layouts", "Quiz: widget tree"].map((t, i) => (
            <li key={t} className="flex items-center gap-[0.7em] rounded-[0.9em] bg-night-3 px-[0.9em] py-[0.75em]">
              <span
                className={`size-[1.1em] rounded-full ${i === 0 ? "bg-copper" : "border-[0.12em] border-white/25"}`}
              />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- oxdrop receiver page in the phone's browser ---------- */

const items = [
  { name: "lecture-notes.pdf", size: "2.4 MB", state: "Sent", done: 1 },
  { name: "design-assets.zip", size: "184 MB", state: "62%", done: 0.62 },
  { name: "demo-recording.mov", size: "41 MB", state: "Waiting", done: 0 },
];

export function ReceiveScreen() {
  return (
    <div className="text-ink">
      <div className="mx-[1em] mt-[1.4em] flex items-center gap-[0.5em] rounded-full bg-night-3 px-[0.9em] py-[0.5em] text-[0.8em] text-ink-muted">
        <svg viewBox="0 0 10 12" className="size-[0.9em]" aria-hidden="true">
          <path d="M2 5V3.5a3 3 0 0 1 6 0V5h1v7H1V5zm1.2 0h3.6V3.5a1.8 1.8 0 0 0-3.6 0z" fill="currentColor" />
        </svg>
        <span className="truncate">192.168.1.24 · oxdrop</span>
      </div>

      <div className="px-[1.4em] pt-[1.4em]">
        <p className="flex items-center gap-[0.5em] text-[0.85em] text-ink-muted">
          <span className="size-[0.5em] rounded-full bg-[#5fd08a]" />
          Connected to MacBook Air
        </p>
        <p className="mt-[0.3em] text-[1.6em] font-semibold leading-[1.1] tracking-[-0.02em]">
          3 items for you
        </p>

        <ul className="mt-[1.1em] space-y-[0.6em]">
          {items.map((it) => (
            <li key={it.name} className="rounded-[1em] bg-night-3 px-[0.9em] py-[0.8em]">
              <div className="flex items-baseline justify-between gap-[0.5em]">
                <span className="truncate text-[0.9em] font-medium">{it.name}</span>
                <span className={`shrink-0 text-[0.75em] ${it.done === 1 ? "text-[#5fd08a]" : "text-ink-muted"}`}>
                  {it.state}
                </span>
              </div>
              <div className="mt-[0.15em] text-[0.75em] text-ink-muted">{it.size}</div>
              <span className="mt-[0.5em] block h-[0.25em] rounded-full bg-white/10">
                <span
                  className="block h-full rounded-full bg-copper"
                  style={{ width: `${it.done * 100}%` }}
                />
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-[1.2em] rounded-full bg-ink py-[0.85em] text-center text-[0.95em] font-semibold text-night">
          Download all
        </div>
      </div>
    </div>
  );
}

/* ---------- Rust cards ---------- */

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-[0.45em] border-b border-white/[0.07] px-[1em] py-[0.75em]">
      <span className="size-[0.7em] rounded-full bg-white/15" />
      <span className="size-[0.7em] rounded-full bg-white/15" />
      <span className="size-[0.7em] rounded-full bg-white/15" />
      <span className="ml-[0.6em] text-[0.8em] text-ink-muted">{title}</span>
    </div>
  );
}

const glass =
  "rounded-[1.1em] border border-white/[0.09] bg-[#0f1116]/75 shadow-[0_2.5em_5em_-1.5em_rgba(0,0,0,0.8)] backdrop-blur-md";

export function TerminalCard({ className = "" }: { className?: string }) {
  return (
    <figure data-ui aria-label="Terminal running cargo run for oxdrop" className={`w-[25em] ${glass} ${className}`}>
      <WindowChrome title="~/oxdrop — zsh" />
      <pre className="overflow-hidden px-[1.1em] py-[1em] font-mono text-[0.78em] leading-[1.65] text-ink-muted">
        <code>
          <span className="text-ink">
            <span className="text-copper">$</span> cargo run -p oxdrop-desktop
          </span>
          {"\n"}
          <span className="text-[#7fb5a8]">   Compiling</span> oxdrop-core v0.1.0
          {"\n"}
          <span className="text-[#7fb5a8]">   Compiling</span> oxdrop-desktop v0.1.0
          {"\n"}
          <span className="text-[#7fb5a8]">    Finished</span> `dev` profile in 4.12s
          {"\n"}
          <span className="text-[#7fb5a8]">     Running</span> target/debug/oxdrop-desktop
        </code>
      </pre>
      <div className="flex items-center gap-[1em] border-t border-white/[0.07] px-[1.1em] py-[0.9em]">
        <QrCode className="size-[5.2em] shrink-0 rounded-[0.3em]" />
        <div className="text-[0.85em] leading-[1.45]">
          <p className="font-medium text-ink">Transfer ready</p>
          <p className="text-ink-muted">Scan with your phone to receive 3 items</p>
        </div>
      </div>
    </figure>
  );
}

export function CodeCard({ className = "" }: { className?: string }) {
  return (
    <figure data-ui aria-label="Rust code from oxdrop" className={`w-[22em] ${glass} ${className}`}>
      <WindowChrome title="transfer.rs" />
      <pre className="overflow-hidden px-[1.1em] py-[1em] font-mono text-[0.76em] leading-[1.7] text-ink-muted">
        <code>
          <span className="text-copper-soft">pub fn</span> <span className="text-ink">start</span>(items: Vec&lt;Item&gt;)
          {"\n"}    -&gt; <span className="text-[#7fb5a8]">Result</span>&lt;Transfer&gt; {"{"}
          {"\n"}    <span className="text-copper-soft">let</span> link = Link::<span className="text-ink">random</span>();
          {"\n"}    <span className="text-copper-soft">let</span> t = Transfer::<span className="text-ink">new</span>(items, link);
          {"\n"}    qr::<span className="text-ink">show</span>(&amp;t.link());
          {"\n"}    <span className="text-[#7fb5a8]">Ok</span>(t)
          {"\n"}{"}"}
        </code>
      </pre>
    </figure>
  );
}
