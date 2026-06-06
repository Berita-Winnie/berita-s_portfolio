/** Horizontal decorative line — use under headings or between sections */
export default function SectionFlourish({ className = '', align = 'center' }) {
  const justify = align === 'start' ? 'justify-start' : 'justify-center'
  return (
    <div className={`flex items-center ${justify} gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-dust-rose/50 dark:to-rose-soft/40" />
      <svg width="24" height="12" viewBox="0 0 24 12" className="text-dust-rose dark:text-rose-soft">
        <path
          d="M12 2C8 2 5 5 5 9c0 1 1 2 2 2h10c1 0 2-1 2-2 0-4-3-7-7-7z"
          fill="currentColor"
          opacity="0.25"
        />
        <circle cx="12" cy="5" r="2" fill="currentColor" opacity="0.45" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-dust-rose/50 dark:to-rose-soft/40" />
    </div>
  )
}
