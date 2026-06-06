/** Stacked cards / books — learning resources */
export default function ResourcesBooksIllustration({ className = '' }) {
  return (
    <div className={`w-full max-w-[220px] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 220 200" className="h-auto w-full">
        <title>Abstract stacked cards suggesting learning materials</title>
        <rect x="30" y="50" width="160" height="110" rx="8" transform="rotate(-6 110 105)" className="fill-blush/60 dark:fill-plum/40" />
        <rect x="40" y="45" width="160" height="110" rx="8" transform="rotate(4 120 100)" className="fill-lavender-mist/75 dark:fill-plum/35" />
        <rect x="50" y="40" width="160" height="110" rx="8" className="fill-warm-white/95 stroke-blush/80 dark:fill-plum-deep/70 dark:stroke-plum/45" strokeWidth="1.5" />
        <line x1="70" y1="75" x2="190" y2="75" className="stroke-peach-soft/80 dark:stroke-peach-soft/35" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="70" y1="95" x2="170" y2="95" className="stroke-plum/20 dark:stroke-lavender-mist/30" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="70" y1="115" x2="180" y2="115" className="stroke-plum/15 dark:stroke-lavender-mist/25" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}
