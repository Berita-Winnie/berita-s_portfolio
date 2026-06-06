import { useState } from 'react'

export default function SymptomCard({ symptom }) {
  const { title, summary, cycleReasons, whenToSeek } = symptom
  const [open, setOpen] = useState(false)

  return (
    <article className="flex flex-col rounded-[1.75rem] border border-blush/45 bg-warm-white/95 p-6 shadow-soft dark:border-lavender-mist/20 dark:bg-gradient-to-br dark:from-[#584a60] dark:via-[#4a3d4f] dark:to-[#3f3344] md:p-7">
      <h3 className="font-display text-lg font-semibold text-charcoal dark:text-parchment">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-plum dark:text-lavender-mist/88">{summary}</p>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-blush/70 px-3 py-1.5 text-xs font-medium text-plum-deep transition hover:bg-blush/30 dark:border-plum/45 dark:text-parchment dark:hover:bg-plum/40"
      >
        {open ? 'Hide details' : 'Learn more'}
        <svg
          className={`h-3.5 w-3.5 transition ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="mt-5 space-y-4 border-t border-blush/40 pt-5 dark:border-lavender-mist/20">
          <div className="rounded-2xl bg-peach-soft/25 p-4 dark:bg-[#2f2733]/90">
            <p className="text-xs font-semibold uppercase tracking-wider text-plum-deep dark:text-peach-soft">
              Possible cycle links
            </p>
            <p className="mt-2 text-sm leading-relaxed text-plum dark:text-lavender-mist/88">{cycleReasons}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sage-deep dark:text-sage">When to seek support</p>
            <p className="mt-2 text-sm leading-relaxed text-plum dark:text-lavender-mist/88">{whenToSeek}</p>
          </div>
          <p className="text-xs text-plum/65 dark:text-lavender-mist/55">
            Not a diagnosis—use for awareness and conversations with a clinician.
          </p>
        </div>
      )}
    </article>
  )
}
