/** Rest, moon, and gentle botanical — wellness & reflection */
export default function WellnessCalmIllustration({ className = '' }) {
  return (
    <div className={`w-full max-w-md ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 260" className="h-auto w-full">
        <title>Calm moon and leaves suggesting rest and reflection</title>
        <circle cx="200" cy="120" r="72" className="fill-lavender-mist/50 dark:fill-plum/35" />
        <circle cx="228" cy="120" r="58" className="fill-parchment dark:fill-plum-deep" />
        <path
          d="M85 200 Q130 150 200 155 T315 200"
          fill="none"
          className="stroke-sage/45 dark:stroke-sage/35"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <ellipse cx="120" cy="175" rx="28" ry="12" transform="rotate(-25 120 175)" className="fill-sage/35 dark:fill-sage/25" />
        <ellipse cx="280" cy="178" rx="30" ry="13" transform="rotate(30 280 178)" className="fill-sage/30 dark:fill-sage/22" />
        <ellipse cx="200" cy="210" rx="22" ry="10" className="fill-rose-soft/40 dark:fill-dust-rose/28" />
        <circle cx="330" cy="60" r="6" className="fill-peach-soft/80 dark:fill-peach-soft/40" />
        <circle cx="70" cy="95" r="4" className="fill-dust-rose/50 dark:fill-rose-soft/35" />
        <circle cx="50" cy="130" r="3" className="fill-peach-soft/70 dark:fill-peach-soft/35" />
      </svg>
    </div>
  )
}
