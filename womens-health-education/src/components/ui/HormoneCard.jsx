export default function HormoneCard({ hormone }) {
  const { name, role, patterns, effects, tone } = hormone

  return (
    <div
      className={`rounded-3xl border border-blush/40 bg-gradient-to-br ${tone} p-6 shadow-soft transition hover:shadow-card dark:border-plum/40`}
    >
      <h3 className="font-display text-xl font-semibold text-charcoal dark:text-parchment">{name}</h3>
      <p className="mt-3 text-sm text-plum dark:text-lavender-mist/90">{role}</p>
      <p className="mt-3 text-sm text-charcoal/90 dark:text-parchment/90">
        <span className="font-medium text-plum-deep dark:text-peach-soft">Patterns: </span>
        {patterns}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-plum dark:text-lavender-mist/90">
        {effects.map((e) => (
          <li key={e} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose dark:bg-rose-soft" aria-hidden />
            {e}
          </li>
        ))}
      </ul>
    </div>
  )
}
