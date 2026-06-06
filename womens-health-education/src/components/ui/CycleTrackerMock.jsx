const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export default function CycleTrackerMock() {
  return (
    <div className="rounded-3xl border border-blush/50 bg-warm-white p-6 shadow-soft dark:border-lavender-mist/20 dark:bg-gradient-to-br dark:from-[#584a60] dark:to-[#3f3344]">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-charcoal dark:text-parchment">Sample month view</h3>
        <span className="rounded-full bg-blush/60 px-3 py-1 text-xs text-plum dark:bg-plum/40 dark:text-peach-soft">
          Mock UI
        </span>
      </div>
      <p className="mt-2 text-sm text-plum dark:text-lavender-mist/90">
        A gentle visual for logging—your real data stays private.
      </p>
      <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs font-medium text-plum/70 dark:text-lavender-mist/70">
        {days.map((d, i) => (
          <span key={`${d}-${i}`}>{d}</span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-2">
        {Array.from({ length: 28 }).map((_, i) => {
          const phase =
            i < 5 ? 'bg-rose-soft/50' : i < 13 ? 'bg-peach-soft/60' : i < 16 ? 'bg-sage/40' : 'bg-lavender-mist/70'
          return (
            <button
              key={i}
              type="button"
              className={`aspect-square rounded-xl ${phase} text-[10px] font-medium text-plum-deep/80 transition hover:ring-2 hover:ring-dust-rose/40 dark:text-parchment dark:hover:ring-peach-soft/40`}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
      <ul className="mt-6 flex flex-wrap gap-3 text-xs text-plum dark:text-lavender-mist/85">
        <li className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-rose-soft/50" /> Period
        </li>
        <li className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-peach-soft/60" /> Follicular
        </li>
        <li className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-sage/40" /> Ovulation window
        </li>
        <li className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-lavender-mist/70" /> Luteal
        </li>
      </ul>
    </div>
  )
}
