export default function HumanGlowIllustration({ className = '' }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 420 360" className="h-auto w-full">
        <defs>
          <radialGradient id="hg-aura" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#f3dde4" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#e8d4d8" stopOpacity="0.15" />
          </radialGradient>
        </defs>
        <ellipse cx="210" cy="185" rx="165" ry="140" fill="url(#hg-aura)" className="dark:opacity-70" />
        <path
          d="M140 290c8-44 38-76 70-84 32 8 62 40 70 84"
          fill="#fffcfa"
          className="dark:fill-[#4a3d4f]"
          opacity="0.92"
        />
        <circle cx="210" cy="146" r="44" fill="#fffcfa" className="dark:fill-[#4a3d4f]" opacity="0.94" />
        <path
          d="M210 102c-18 0-31 10-36 24 8-5 19-8 31-8 13 0 25 3 34 9-4-14-16-25-29-25z"
          fill="#c49aa3"
          className="dark:fill-[#d4a5b0]"
          opacity="0.65"
        />
        <path
          d="M139 292h142"
          stroke="#c49aa3"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="dark:stroke-[#d4a5b0]"
          opacity="0.4"
        />
        <circle cx="90" cy="126" r="6" fill="#d4a5b0" opacity="0.45" />
        <circle cx="330" cy="110" r="5" fill="#9aab9e" opacity="0.45" />
        <circle cx="312" cy="242" r="4" fill="#e4e0ed" opacity="0.9" />
      </svg>
    </div>
  )
}

