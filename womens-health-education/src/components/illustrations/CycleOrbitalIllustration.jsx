/** Soft orbital cycle — four phase nodes on a gentle ellipse */
export default function CycleOrbitalIllustration({ className = '' }) {
  return (
    <div className={`w-full max-w-xs ${className}`} aria-hidden="true">
      <svg viewBox="0 0 320 280" className="h-auto w-full">
        <title>Stylized cycle orbit with four phases</title>
        <ellipse
          cx="160"
          cy="140"
          rx="120"
          ry="95"
          fill="none"
          className="stroke-rose-soft/55 dark:stroke-rose-soft/35"
          strokeWidth="2"
          strokeDasharray="6 14"
          opacity="0.85"
        />
        <ellipse cx="160" cy="140" rx="105" ry="82" fill="none" className="stroke-peach-soft/60 dark:stroke-plum/40" strokeWidth="1" />
        <circle cx="160" cy="45" r="16" className="fill-rose-soft/70 dark:fill-rose-soft/45" />
        <circle cx="250" cy="115" r="16" className="fill-peach-soft/90 dark:fill-peach-soft/40" />
        <circle cx="220" cy="225" r="16" className="fill-sage/50 dark:fill-sage/35" />
        <circle cx="85" cy="175" r="16" className="fill-lavender-mist/95 dark:fill-lavender-mist/45" />
        <circle cx="160" cy="140" r="28" className="fill-blush/40 dark:fill-plum/30" />
        <circle cx="160" cy="140" r="14" className="fill-warm-white/95 dark:fill-plum-deep/85" />
        <text
          x="160"
          y="146"
          textAnchor="middle"
          className="fill-plum-deep font-sans text-[10px] font-semibold dark:fill-parchment"
        >
          ~28d
        </text>
      </svg>
    </div>
  )
}
