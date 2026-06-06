/**
 * Decorative editorial illustration — abstract botanical & soft geometry.
 * Purely ornamental (aria-hidden).
 */
export default function HeroIllustration({ className = '' }) {
  return (
    <div className={`relative mx-auto w-full max-w-lg ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 440 400"
        className="h-auto w-full text-rose-soft drop-shadow-[0_20px_50px_rgba(107,91,115,0.12)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
      >
        <ellipse cx="220" cy="210" rx="160" ry="150" className="fill-peach-soft/50 dark:fill-plum/25" />
        <circle cx="220" cy="200" r="118" className="fill-lavender-mist/45 dark:fill-plum/35" />
        <circle
          cx="220"
          cy="200"
          r="132"
          fill="none"
          className="stroke-dust-rose/35 dark:stroke-rose-soft/30"
          strokeWidth="1.25"
          strokeDasharray="4 10"
        />
        {/* Soft overlapping moons — wholeness / rhythm */}
        <circle cx="205" cy="175" r="48" className="fill-warm-white/90 dark:fill-plum-deep/50" />
        <circle cx="235" cy="175" r="48" className="fill-blush/65 dark:fill-plum/45" />
        <path
          d="M120 260 Q160 180 220 165 T320 200 Q340 240 310 290"
          fill="none"
          className="stroke-plum/35 dark:stroke-lavender-mist/45"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M310 120 Q260 160 235 200 Q210 250 195 310"
          fill="none"
          className="stroke-plum/25 dark:stroke-lavender-mist/35"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <ellipse cx="145" cy="230" rx="22" ry="10" transform="rotate(-35 145 230)" className="fill-sage/35 dark:fill-sage/25" />
        <ellipse cx="175" cy="195" rx="20" ry="9" transform="rotate(-55 175 195)" className="fill-sage/30 dark:fill-sage/20" />
        <ellipse cx="335" cy="175" rx="24" ry="11" transform="rotate(40 335 175)" className="fill-rose-soft/45 dark:fill-dust-rose/35" />
        <ellipse cx="300" cy="220" rx="18" ry="8" transform="rotate(25 300 220)" className="fill-rose-soft/35 dark:fill-dust-rose/25" />
        <circle cx="95" cy="140" r="14" className="fill-rose-soft/55 dark:fill-rose-soft/35" />
        <circle cx="355" cy="115" r="10" className="fill-lavender-mist/80 dark:fill-lavender-mist/40" />
        <circle cx="380" cy="260" r="8" className="fill-peach-soft/90 dark:fill-peach-soft/35" />
        <circle cx="60" cy="280" r="11" className="fill-sage/40 dark:fill-sage/30" />
        <path d="M105 95l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" className="fill-dust-rose/50 dark:fill-peach-soft/40" />
        <path d="M360 320l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4z" className="fill-dust-rose/40 dark:fill-peach-soft/30" />
      </svg>
    </div>
  )
}
