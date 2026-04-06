const pathSets = {
  wave: [
    "M8 130c30-48 66-74 109-79 44-5 79 15 111 49 26 29 52 42 84 40",
    "M24 184c42-22 88-30 134-24 40 5 76 20 120 48",
    "M82 62c20-14 41-21 62-20 22 1 42 9 62 24",
  ],
  contour: [
    "M10 156c41-34 82-52 124-54 42-2 84 12 130 45",
    "M22 108c26-26 56-40 87-42 31-3 57 8 82 29",
    "M38 194c30-16 64-24 98-23 33 1 62 9 91 23",
  ],
};

function LineArt({ className = "", mirrored = false, variant = "wave" }) {
  const paths = pathSets[variant] ?? pathSets.wave;

  return (
    <svg
      viewBox="0 0 320 220"
      aria-hidden="true"
      className={`line-art pointer-events-none absolute ${className}`}
      style={{ transform: mirrored ? "scaleX(-1)" : undefined }}
      fill="none"
    >
      {paths.map((path) => (
        <path
          key={path}
          d={path}
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export default LineArt;
