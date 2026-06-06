import ExpandableDetails from './ExpandableDetails'

export default function HormonePanel({ hormone }) {
  const { name, role, patterns, effects, tone } = hormone
  const preview = effects.slice(0, 2)
  const extra = effects.slice(2)

  return (
    <div className={`rounded-[1.75rem] border border-blush/40 bg-gradient-to-br ${tone} p-6 shadow-soft dark:border-lavender-mist/20 dark:from-[#584a60] dark:via-[#4a3d4f] dark:to-[#3f3344] md:p-8`}>
      <h2 className="font-display text-2xl font-semibold text-charcoal dark:text-parchment">{name}</h2>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-plum dark:text-lavender-mist/90">{role}</p>
      <p className="mt-4 text-sm leading-relaxed text-charcoal/95 dark:text-parchment/95">
        <span className="font-medium text-plum-deep dark:text-peach-soft">Patterns: </span>
        {patterns}
      </p>
      <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-plum-deep dark:text-peach-soft">
        Common effects (examples)
      </h3>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-plum dark:text-lavender-mist/90">
        {preview.map((e) => (
          <li key={e} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose dark:bg-rose-soft" aria-hidden />
            {e}
          </li>
        ))}
      </ul>
      {extra.length > 0 && (
        <ExpandableDetails label="Show additional effects" className="mt-8">
          <ul className="space-y-2 text-sm leading-relaxed text-plum dark:text-lavender-mist/90">
            {extra.map((e) => (
              <li key={e} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose dark:bg-rose-soft" aria-hidden />
                {e}
              </li>
            ))}
          </ul>
        </ExpandableDetails>
      )}
    </div>
  )
}
