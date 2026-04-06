function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-14 md:mb-16">
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]/88">
        {eyebrow}
      </p>
      <h2 className="max-w-2xl text-[1.52rem] font-medium leading-[1.22] tracking-tight text-[var(--text)] md:text-[2rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[0.9125rem] font-normal leading-[1.72] tracking-normal text-[var(--text-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
