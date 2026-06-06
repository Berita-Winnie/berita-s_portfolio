export default function EmptySearchIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 180 120" className={className} aria-hidden="true">
      <rect x="22" y="20" width="96" height="66" rx="14" className="fill-parchment stroke-blush/70 dark:fill-plum-deep dark:stroke-plum/45" strokeWidth="1.5" />
      <circle cx="62" cy="49" r="14" className="fill-none stroke-dust-rose/70 dark:stroke-rose-soft/60" strokeWidth="2" />
      <line x1="72" y1="59" x2="86" y2="73" className="stroke-dust-rose/70 dark:stroke-rose-soft/60" strokeWidth="2" strokeLinecap="round" />
      <circle cx="129" cy="50" r="10" className="fill-lavender-mist/75 dark:fill-plum/45" />
      <path d="M122 68c8 0 14 5 14 12h-28c0-7 6-12 14-12z" className="fill-peach-soft/55 dark:fill-plum/45" />
    </svg>
  )
}

