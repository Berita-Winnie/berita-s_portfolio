/** Gentle waves — noticing patterns without judgment */
export default function SymptomAwarenessIllustration({ className = '' }) {
  return (
    <div className={`w-full max-w-xs ${className}`} aria-hidden="true">
      <svg viewBox="0 0 280 200" className="h-auto w-full">
        <title>Soft waves suggesting awareness of changing patterns</title>
        <path
          d="M0 100 Q70 60 140 100 T280 100"
          fill="none"
          className="stroke-rose-soft/55 dark:stroke-rose-soft/40"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M0 120 Q70 150 140 120 T280 120"
          fill="none"
          className="stroke-lavender-mist/90 dark:stroke-lavender-mist/45"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M0 80 Q70 110 140 80 T280 80"
          fill="none"
          className="stroke-peach-soft/80 dark:stroke-peach-soft/40"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="70" cy="100" r="5" className="fill-plum/30 dark:fill-lavender-mist/40" />
        <circle cx="140" cy="100" r="5" className="fill-dust-rose/50 dark:fill-rose-soft/35" />
        <circle cx="210" cy="100" r="5" className="fill-sage/45 dark:fill-sage/32" />
      </svg>
    </div>
  )
}
