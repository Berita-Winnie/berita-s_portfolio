import ExpandableDetails from './ExpandableDetails'

export default function LifeStagePanel({ stage }) {
  const preview = stage.changes.slice(0, 3)
  const extra = stage.changes.slice(3)

  return (
    <div className={`rounded-[1.75rem] border border-blush/45 bg-gradient-to-br ${stage.accent} p-6 shadow-soft dark:border-lavender-mist/20 dark:from-[#584a60] dark:via-[#4a3d4f] dark:to-[#3f3344] md:p-8`}>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-plum/75 dark:text-lavender-mist/75">{stage.age}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-charcoal dark:text-parchment md:text-3xl">{stage.title}</h2>

      <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-plum-deep dark:text-peach-soft">
        Common experiences
      </h3>
      <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-plum dark:text-lavender-mist/90">
        {preview.map((c) => (
          <li key={c} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose/80 dark:bg-rose-soft/70" aria-hidden />
            <span>{c}</span>
          </li>
        ))}
      </ul>
      {extra.length > 0 && (
        <ExpandableDetails label="Show more experiences" className="mt-6">
          <ul className="space-y-2.5 text-sm leading-relaxed text-plum dark:text-lavender-mist/90">
            {extra.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose/80 dark:bg-rose-soft/70" aria-hidden />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </ExpandableDetails>
      )}

      <div className="mt-8 rounded-2xl border border-white/35 bg-warm-white/80 p-5 dark:border-lavender-mist/20 dark:bg-[#2f2733]/90">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-sage-deep dark:text-sage">Reassurance</h3>
        <p className="mt-3 text-sm leading-relaxed text-plum dark:text-lavender-mist/90">{stage.reassurance}</p>
      </div>
    </div>
  )
}
