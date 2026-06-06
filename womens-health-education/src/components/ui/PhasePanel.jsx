import ExpandableDetails from './ExpandableDetails'

export default function PhasePanel({ phase }) {
  const { name, shortLabel, summary, body, physical, emotional, energy, selfCare, accent } = phase

  return (
    <article
      className={`rounded-[1.75rem] border border-blush/45 bg-gradient-to-br ${accent} p-6 shadow-soft dark:border-lavender-mist/20 dark:from-[#584a60] dark:via-[#4a3d4f] dark:to-[#3f3344] md:p-8`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-plum/75 dark:text-lavender-mist/75">{shortLabel}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-charcoal dark:text-parchment md:text-3xl">{name}</h2>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-plum dark:text-lavender-mist/90">{summary}</p>

      {phase.takeaways && (
        <ul className="mt-8 space-y-3 border-t border-white/20 pt-8 dark:border-plum/30">
          {phase.takeaways.map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed text-charcoal dark:text-parchment/95">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose/80 dark:bg-rose-soft/70" aria-hidden />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )}

      <ExpandableDetails label="Expand full details" className="mt-8">
        <div className="space-y-6 text-sm">
          <div>
            <h3 className="font-semibold text-plum-deep dark:text-peach-soft">In the body</h3>
            <p className="mt-2 text-plum dark:text-lavender-mist/90">{body}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-plum-deep dark:text-peach-soft">Physical</h3>
              <ul className="mt-2 list-inside list-disc space-y-1.5 text-plum dark:text-lavender-mist/90">
                {physical.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-plum-deep dark:text-peach-soft">Emotional</h3>
              <ul className="mt-2 list-inside list-disc space-y-1.5 text-plum dark:text-lavender-mist/90">
                {emotional.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-plum-deep dark:text-peach-soft">Energy &amp; mood</h3>
            <p className="mt-2 text-plum dark:text-lavender-mist/90">{energy}</p>
          </div>
          <div className="rounded-2xl border border-white/30 bg-warm-white/75 p-4 dark:border-lavender-mist/20 dark:bg-[#2f2733]/90">
            <h3 className="font-semibold text-sage-deep dark:text-sage">Gentle self-care</h3>
            <ul className="mt-2 list-inside list-disc space-y-1.5 text-plum dark:text-lavender-mist/90">
              {selfCare.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </ExpandableDetails>
    </article>
  )
}
