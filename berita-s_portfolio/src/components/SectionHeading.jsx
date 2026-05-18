function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 md:mb-14">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--accent)]/90">
        {eyebrow}
      </p>
      <h2 className="max-w-2xl text-[1.65rem] font-medium leading-snug tracking-tight text-[var(--text)] md:text-3xl md:leading-snug">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[0.9375rem] font-normal leading-relaxed tracking-normal text-[var(--text-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
