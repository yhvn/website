// yh.Labs wordmark, from yh-labs-wordmark-rounded-transparent-light.svg.
// The viewBox is cropped to the strokes so it lines up with the page margins.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="75 85 1202 358"
      className={className}
      role="img"
      aria-label="yh.Labs"
    >
      <g
        fill="none"
        strokeWidth="46"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#EEF0F4"
      >
        <path d="M98 214 L170 320" stroke="#8DB8FF" />
        <path d="M232 214 L140 420" />
        <path d="M304 108 L304 340" />
        <path d="M304 276 C304 236 330 214 360 214 C392 214 414 238 414 276 L414 340" />
        <path d="M570 108 L570 340 L672 340" />
        <circle cx="810" cy="277" r="63" />
        <path d="M873 214 L873 340" />
        <path d="M960 108 L960 340" />
        <circle cx="1023" cy="277" r="63" />
        <path
          d="M1176 234 C1160 218 1140 214 1125 214 C1100 214 1086 228 1086 245 C1086 262 1100 270 1135 277 C1168 284 1184 292 1184 309 C1184 326 1166 340 1140 340 C1120 340 1100 334 1086 320"
          transform="translate(70,0)"
        />
      </g>
      <rect x="468" y="317" width="48" height="48" fill="#DB8149" />
    </svg>
  );
}
