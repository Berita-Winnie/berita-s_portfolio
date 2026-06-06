import ExpandableDetails from './ExpandableDetails'

const patterns = [
  { label: 'Calm focus', phase: 'Early–mid follicular', note: 'Some feel clearer or more social—not universal.' },
  { label: 'Sensitive or inward', phase: 'Late luteal', note: 'Boundaries and rest may matter more.' },
  { label: 'Playful or open', phase: 'Around ovulation', note: 'Energy and desire can shift—honor your reality.' },
]

export default function MoodPatternCard() {
  return (
    <div className="rounded-[1.75rem] border border-blush/40 bg-gradient-to-br from-lavender-mist/35 to-peach-soft/25 p-6 dark:border-lavender-mist/20 dark:from-[#584a60] dark:via-[#4a3d4f] dark:to-[#3f3344] md:p-7">
      <h3 className="font-display text-lg font-semibold text-charcoal dark:text-parchment">Mood patterns</h3>
      <p className="mt-3 text-sm leading-relaxed text-plum dark:text-lavender-mist/88">
        Examples only—your patterns are personal. Use them as invitations to notice, not to predict.
      </p>
      <ExpandableDetails label="View three gentle examples" className="mt-6">
        <ul className="space-y-4">
          {patterns.map((p) => (
            <li key={p.label} className="border-t border-white/30 pt-4 first:border-0 first:pt-0 dark:border-plum/35">
              <p className="font-medium text-charcoal dark:text-parchment">{p.label}</p>
              <p className="text-xs text-dust-rose dark:text-rose-soft">{p.phase}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-plum dark:text-lavender-mist/88">{p.note}</p>
            </li>
          ))}
        </ul>
      </ExpandableDetails>
    </div>
  )
}
