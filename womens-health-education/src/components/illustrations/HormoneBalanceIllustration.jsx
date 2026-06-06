/** Soft nodes connected by gentle curves — hormone harmony metaphor */
export default function HormoneBalanceIllustration({ className = '' }) {
  return (
    <div className={`w-full max-w-sm ${className}`} aria-hidden="true">
      <svg viewBox="0 0 360 280" className="h-auto w-full">
        <title>Abstract connected shapes representing hormonal balance</title>
        <path
          d="M40 180 Q180 40 320 200"
          fill="none"
          className="stroke-plum/35 dark:stroke-lavender-mist/40"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M60 80 Q180 200 300 90"
          fill="none"
          className="stroke-dust-rose/35 dark:stroke-rose-soft/30"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <circle cx="60" cy="80" r="28" className="fill-blush/70 dark:fill-plum/45" />
        <circle cx="180" cy="140" r="36" className="fill-lavender-mist/70 dark:fill-plum/35" />
        <circle cx="300" cy="90" r="24" className="fill-peach-soft/80 dark:fill-peach-soft/35" />
        <circle cx="40" cy="180" r="20" className="fill-rose-soft/55 dark:fill-rose-soft/35" />
        <circle cx="320" cy="200" r="22" className="fill-sage/45 dark:fill-sage/30" />
        <circle cx="180" cy="140" r="12" className="fill-warm-white/90 dark:fill-plum-deep/70" />
      </svg>
    </div>
  )
}
