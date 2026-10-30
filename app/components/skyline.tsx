// A night skyline in three layers, generated from fixed seeds so the server
// render and the client hydrate to the same drawing.

const WIDTH = 1600;

type Layer = {
  seed: number;
  height: number;
  min: number;
  max: number;
  fill: string;
  windows: number;
};

export const SKYLINE_LAYERS: Layer[] = [
  { seed: 7, height: 340, min: 120, max: 330, fill: "#11141b", windows: 0.04 },
  { seed: 19, height: 260, min: 80, max: 250, fill: "#0c0e13", windows: 0.07 },
  { seed: 31, height: 170, min: 50, max: 160, fill: "#07080b", windows: 0.1 },
];

function prng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function buildings(layer: Layer) {
  const rand = prng(layer.seed);
  const out: { x: number; w: number; h: number; spire: boolean }[] = [];
  let x = -10;
  while (x < WIDTH) {
    const w = 34 + Math.floor(rand() * 70);
    const tall = rand() > 0.82;
    const h = Math.round(
      layer.min + (tall ? 0.75 + rand() * 0.25 : rand() * 0.6) * (layer.max - layer.min),
    );
    out.push({ x, w, h, spire: tall && rand() > 0.4 });
    x += w + (rand() > 0.7 ? 6 : 0);
  }
  return { list: out, rand };
}

export function SkylineLayer({ layer, index }: { layer: Layer; index: number }) {
  const { list, rand } = buildings(layer);
  const H = layer.height;

  const windows: { x: number; y: number; warm: boolean }[] = [];
  const beacons: { x: number; y: number; d: number }[] = [];

  for (const b of list) {
    const top = H - b.h;
    if (b.spire) beacons.push({ x: b.x + b.w / 2, y: top - 28, d: rand() * 2.4 });
    for (let wy = top + 12; wy < H - 10; wy += 11) {
      for (let wx = b.x + 7; wx < b.x + b.w - 8; wx += 9) {
        if (rand() < layer.windows) windows.push({ x: wx, y: wy, warm: rand() > 0.35 });
      }
    }
  }

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      className="block h-full w-full"
      aria-hidden="true"
    >
      <g fill={layer.fill}>
        {list.map((b) => (
          <g key={b.x}>
            <rect x={b.x} y={H - b.h} width={b.w} height={b.h} />
            {b.spire && <rect x={b.x + b.w / 2 - 1.5} y={H - b.h - 28} width="3" height="28" />}
          </g>
        ))}
      </g>
      <g opacity={0.45 + index * 0.2}>
        {windows.map((w) => (
          <rect
            key={`${w.x}-${w.y}`}
            x={w.x}
            y={w.y}
            width="4"
            height="5"
            fill={w.warm ? "#e8793a" : "#cfd6e0"}
            opacity={w.warm ? 0.85 : 0.35}
          />
        ))}
      </g>
      {beacons.map((b) => (
        <circle
          key={b.x}
          cx={b.x}
          cy={b.y}
          r="2.2"
          fill="#ff6a3d"
          className="blink"
          style={{ "--d": `${b.d}s` } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}
