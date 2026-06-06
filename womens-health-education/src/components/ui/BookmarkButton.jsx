import { useState } from 'react'

export default function BookmarkButton({ label }) {
  const [saved, setSaved] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setSaved((s) => !s)}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
        saved
          ? 'border-dust-rose bg-blush/60 text-plum-deep dark:border-rose-soft dark:bg-plum/50 dark:text-parchment'
          : 'border-blush/80 text-plum hover:bg-blush/40 dark:border-plum/50 dark:text-lavender-mist dark:hover:bg-plum/40'
      }`}
      aria-pressed={saved}
    >
      <svg className="h-4 w-4" fill={saved ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
      {saved ? 'Saved' : 'Save'} · {label}
    </button>
  )
}
