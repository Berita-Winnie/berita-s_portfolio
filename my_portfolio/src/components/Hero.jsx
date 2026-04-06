function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 pb-[var(--section-y)] pt-12 lg:px-10 lg:pt-[var(--section-y-tight)]"
    >
      <div className="grid items-stretch gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:items-end">
        <div className="flex flex-col justify-center pb-2 lg:pb-0">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]/88">
            Virtual Assistant
          </p>
          <h1 className="text-[2.1rem] font-medium leading-[1.1] tracking-tight text-[var(--text)] md:text-[2.9rem] lg:text-[3.15rem]">
            Winrose Berita
          </h1>
          <p className="mt-5 max-w-lg text-[0.9375rem] font-normal leading-[1.72] text-[var(--text-muted)] md:text-[0.975rem]">
            I help busy founders and teams stay organized—email, calendars, research, documentation, and
            day-to-day operations—so you can focus on the work only you can do.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <a
              href="#va-samples"
              className="rounded-full bg-[var(--text)] px-5.5 py-2.75 text-[0.875rem] font-medium text-[var(--surface)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-card-hover)]"
            >
              View sample work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--line)] bg-[var(--surface)]/90 px-5.5 py-2.75 text-[0.875rem] font-medium text-[var(--text)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="relative min-h-[280px] rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-3.5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] md:min-h-[320px] md:p-4">
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[var(--accent-soft)]/80 blur-2xl" />
          <div className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)]/60 bg-[var(--surface-muted)] md:min-h-[300px]">
            <img
              src="/berita-profile.png"
              alt="Winrose Berita portrait"
              className="h-full min-h-[260px] w-full flex-1 object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02] md:min-h-[300px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1c1a18]/70 via-[#1c1a18]/25 to-transparent px-5 pb-5 pt-12">
              <p className="text-[12px] font-normal text-white/84">Reliable, discreet, and detail-oriented.</p>
              <p className="mt-1.5 text-[1.05rem] font-medium leading-snug tracking-tight text-white md:text-[1.16rem]">
                Calm inbox.
                <br />
                Clear calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
