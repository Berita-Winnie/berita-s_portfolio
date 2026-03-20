import beritaImage from '../assets/berita-profile.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mx-auto w-full max-w-6xl overflow-hidden  px-6 pb-20 pt-14 lg:px-10 lg:pt-20"
    >
      <div className=" grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]  text-[var(--accent)]">
            Frontend Developer & Virtual Assistant
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Winrose Berita
          </h1>
          <p className="mt-6 max-w-xl text-base  leading-relaxed  text-[var(--text-muted)] md:text-lg">
            I help businesses build clean digital experiences while keeping
            operations organized and calm.My work combines thoughtful UI
            development with practical support systems that make everyday
            workflows lighter and cleaner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--text)] px-6 py-3 text-sm font-medium text-[var(--surface)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent)]  "
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5  hover:border-[var(--accent)] hover:text-[var(--accent)]  "
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative min-h-[260px] rounded-3xl border border-[var(--line)] bg-[var(--surface)]  p-4 md:min-h-[320px] md:p-6 ">
          <div className="absolute right-8 top-8 h-20 w-20 rounded-full bg-[var(--accent-soft)] blur-md " />
          <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--line)]/70 ">
            <img
              src={beritaImage}
              alt="Winrose Berita portrait"
              className="relative h-full min-h-[280px] w-full object-cover object-center transition duration-500 hover:scale-[1.02] "
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent p-5">
              <p className="text-sm text-white/90">
                Creative, organized, and detail-oriented.
              </p>
              <p className="mt-2 text-xl font-medium  tracking-tight text-white md:text-2xl">
                Calm systems.
                <br />
                Clear interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
