export default function SectionDivider({ label, className = '' }) {
  if (label) {
    return (
      <div
        className={`flex items-center gap-6 py-6 ${className}`}
        role="separator"
        aria-label={label}
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-blush/80 to-transparent dark:via-plum/50" />
        <span className="font-display text-xs font-medium uppercase tracking-[0.2em] text-dust-rose/90 dark:text-rose-soft/90">
          {label}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-blush/80 to-transparent dark:via-plum/50" />
      </div>
    )
  }
  return (
    <div className={`py-10 md:py-14 ${className}`} role="separator">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blush/70 to-transparent dark:via-plum/45" />
    </div>
  )
}
