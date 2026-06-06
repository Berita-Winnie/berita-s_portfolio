export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  compact = false,
  className = '',
}) {
  return (
    <div
      className={`max-w-xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <p className="mb-2 font-display text-xs font-medium uppercase tracking-[0.22em] text-dust-rose dark:text-rose-soft">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-charcoal md:text-3xl dark:text-parchment">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-plum/95 dark:text-lavender-mist/88 ${compact ? 'max-w-prose text-sm leading-relaxed' : 'max-w-prose text-base leading-relaxed'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
