// A decorative QR-style mark (it does not encode anything), drawn from a
// fixed seed so the server and client render the same pattern.
const SIZE = 25;

function cells(seed: number) {
  let s = seed;
  const rand = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };

  const inFinder = (x: number, y: number) =>
    (x < 8 && y < 8) || (x >= SIZE - 8 && y < 8) || (x < 8 && y >= SIZE - 8);

  const on: [number, number][] = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (inFinder(x, y)) continue;
      if (x === 6 || y === 6) {
        if ((x + y) % 2 === 0) on.push([x, y]);
        continue;
      }
      if (rand() > 0.52) on.push([x, y]);
    }
  }
  return on;
}

function Finder({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0h7v7H0z M1 1v5h5V1z" fillRule="evenodd" />
      <rect x="2" y="2" width="3" height="3" />
    </g>
  );
}

export function QrCode({
  seed = 48230,
  className,
}: {
  seed?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect x="-1" y="-1" width={SIZE + 2} height={SIZE + 2} fill="#eceef1" />
      <g fill="#07080b">
        <Finder x={0} y={0} />
        <Finder x={SIZE - 7} y={0} />
        <Finder x={0} y={SIZE - 7} />
        {cells(seed).map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
        ))}
      </g>
    </svg>
  );
}
