/** Growing path — life stages as gentle stepping stones */
export default function LifeStagesPathIllustration({ className = '' }) {
  return (
    <div className={`w-full max-w-sm ${className}`} aria-hidden="true">
      <svg viewBox="0 0 320 220" className="h-auto w-full">
        <title>Stepping stones along a path suggesting life stages</title>
        <path
          d="M20 180 Q80 40 160 100 T300 60"
          fill="none"
          className="stroke-peach-soft/70 dark:stroke-plum/45"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 0"
          opacity="0.6"
        />
        <circle cx="50" cy="165" r="14" className="fill-blush/80 dark:fill-plum/45" />
        <circle cx="120" cy="120" r="14" className="fill-rose-soft/65 dark:fill-rose-soft/40" />
        <circle cx="190" cy="85" r="14" className="fill-lavender-mist/90 dark:fill-lavender-mist/45" />
        <circle cx="260" cy="70" r="14" className="fill-sage/45 dark:fill-sage/32" />
        <circle cx="300" cy="55" r="12" className="fill-dust-rose/50 dark:fill-dust-rose/35" />
        <path
          d="M40 150 Q45 130 55 125"
          fill="none"
          className="stroke-sage/40 dark:stroke-sage/30"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M270 45 Q285 30 295 25"
          fill="none"
          className="stroke-sage/35 dark:stroke-sage/28"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
