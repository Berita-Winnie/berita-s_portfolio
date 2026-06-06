import { Link } from 'react-router-dom'

export default function FeatureCard({ title, description, to, icon: Icon, className = '' }) {
  const inner = (
    <>
      {Icon && (
        <div className="mb-5 inline-flex rounded-2xl bg-blush/40 p-3 text-plum dark:bg-plum/35 dark:text-peach-soft/90">
          <Icon />
        </div>
      )}
      <h3 className="font-display text-xl font-semibold text-charcoal dark:text-parchment">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-plum/92 dark:text-lavender-mist/88">{description}</p>
      {to && (
        <span className="mt-6 inline-flex items-center text-sm font-medium text-dust-rose dark:text-rose-soft">
          Continue
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </>
  )

  const base = `group block rounded-[1.75rem] border border-blush/45 bg-warm-white/95 p-7 shadow-soft transition duration-300 hover:border-dust-rose/35 hover:shadow-card dark:border-lavender-mist/20 dark:bg-gradient-to-br dark:from-[#584a60] dark:via-[#4a3d4f] dark:to-[#3f3344] dark:hover:border-lavender-mist/35 ${className}`

  if (to) {
    return (
      <Link to={to} className={base}>
        {inner}
      </Link>
    )
  }

  return <div className={base}>{inner}</div>
}
