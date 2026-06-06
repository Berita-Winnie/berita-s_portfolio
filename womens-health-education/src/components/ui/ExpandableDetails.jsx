import { useId, useState } from 'react'

export default function ExpandableDetails({
  label = 'Read more',
  collapseLabel = 'Show less',
  children,
  className = '',
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="group inline-flex items-center gap-2 rounded-full border border-blush/70 bg-transparent px-4 py-2 text-sm font-medium text-plum-deep transition hover:bg-blush/35 dark:border-plum/45 dark:text-parchment dark:hover:bg-plum/40"
      >
        {open ? collapseLabel : label}
        <svg
          className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div id={panelId} className="mt-6 space-y-4 border-t border-blush/40 pt-6 dark:border-plum/40">
          {children}
        </div>
      )}
    </div>
  )
}
