/** Soft pad + heart metaphor — care & support (abstract, non-graphic) */
export default function MenstrualHealthIllustration({ className = '' }) {
  return (
    <div className={`w-full max-w-xs ${className}`} aria-hidden="true">
      <svg viewBox="0 0 280 240" className="h-auto w-full">
        <title>Abstract shapes suggesting comfort and care</title>
        <rect
          x="70"
          y="60"
          width="140"
          height="140"
          rx="28"
          className="fill-warm-white/95 stroke-blush/80 dark:fill-plum-deep/70 dark:stroke-plum/40"
          strokeWidth="1.5"
        />
        <path
          d="M120 130c0-20 16-36 36-36s36 16 36 36-16 36-36 36c-8 0-15-2-21-6"
          fill="none"
          className="stroke-dust-rose/35 dark:stroke-rose-soft/35"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <circle cx="140" cy="120" r="8" className="fill-rose-soft/55 dark:fill-rose-soft/35" />
        <circle cx="175" cy="125" r="6" className="fill-peach-soft/80 dark:fill-peach-soft/40" />
        <circle cx="155" cy="150" r="5" className="fill-lavender-mist/90 dark:fill-lavender-mist/45" />
      </svg>
    </div>
  )
}
