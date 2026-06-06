export default function CompanionFigure({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="34" r="14" className="fill-blush/70 dark:fill-plum/45" />
      <path d="M35 105c2-25 13-42 25-42s23 17 25 42" className="fill-peach-soft/55 dark:fill-plum/45" />
      <path
        d="M44 50c4-6 10-9 16-9s12 3 16 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        className="text-dust-rose/55 dark:text-rose-soft/45"
        strokeLinecap="round"
      />
      <circle cx="26" cy="82" r="4" className="fill-lavender-mist/80 dark:fill-lavender-mist/35" />
      <circle cx="95" cy="73" r="4" className="fill-sage/55 dark:fill-sage/35" />
    </svg>
  )
}

