import { cyclePhases } from '../../data/cyclePhases'

export default function CycleTimeline() {
  const labels = cyclePhases.map((p) => p.name.replace(' phase', ''))

  return (
    <div className="rounded-3xl border border-blush/50 bg-warm-white p-6 shadow-soft dark:border-lavender-mist/20 dark:bg-gradient-to-br dark:from-[#584a60] dark:to-[#3f3344] md:p-8">
      <p className="text-center font-display text-lg font-medium text-charcoal dark:text-parchment">
        A simplified month-at-a-glance
      </p>
      <p className="mx-auto mt-2 max-w-xl text-center text-sm text-plum dark:text-lavender-mist/90">
        Length and timing vary. Think of this as a map, not a ruler.
      </p>
      <div className="relative mt-10 px-2">
        <div
          className="absolute left-[8%] right-[8%] top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-rose-soft/40 via-lavender-mist/60 to-sage/40"
          aria-hidden
        />
        <ol className="relative grid grid-cols-4 gap-2 text-center">
          {labels.map((label, i) => (
            <li key={label} className="flex flex-col items-center">
              <span
                className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-warm-white bg-blush text-xs font-semibold text-plum-deep shadow-soft dark:border-plum-deep dark:bg-plum dark:text-parchment"
              >
                {i + 1}
              </span>
              <span className="mt-3 max-w-[5.5rem] text-xs font-medium leading-snug text-plum dark:text-lavender-mist/90">
                {label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
