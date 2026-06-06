import { Link } from 'react-router-dom'
import FeatureCard from '../components/ui/FeatureCard'
import SectionHeading from '../components/ui/SectionHeading'
import SearchBar from '../components/ui/SearchBar'
import HeroIllustration from '../components/illustrations/HeroIllustration'
import CompanionFigure from '../components/illustrations/CompanionFigure'
import { PageShell } from '../components/ui/PageShell'

function IconCycle() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v3m0 12v3M4.2 7.8l2.1 2.1m11.4 11.4l2.1 2.1M3 12h3m12 0h3M4.2 16.2l2.1-2.1m11.4-11.4l2.1-2.1" />
      <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
    </svg>
  )
}

function IconSpark() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-6l1.5-4.5L19 7l-4.5 1.5L13 13l-1.5 4.5L7 17l4.5-1.5L17 13l-4-4z" />
    </svg>
  )
}

function IconHeart() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-blush/35 bg-gradient-to-b from-peach-soft/25 via-parchment to-parchment dark:border-plum/35 dark:from-plum-deep dark:via-plum-deep dark:to-plum-deep">
        <div
          className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-rose-soft/15 blur-3xl dark:bg-plum/25"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[72rem] px-5 pb-24 pt-20 sm:px-8 md:pb-32 md:pt-28 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
            <div className="max-w-xl">
              <p className="font-display text-xs font-medium uppercase tracking-[0.25em] text-dust-rose dark:text-rose-soft">
                Body literacy · without shame
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.15] tracking-tight text-charcoal md:text-5xl lg:text-[3.25rem] dark:text-parchment">
                Understand your body with more confidence and less confusion
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed text-plum dark:text-lavender-mist/88">
                A calm place to learn how cycles, hormones, and life stages shape how you feel—at the pace you choose.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  to="/cycle"
                  className="inline-flex items-center justify-center rounded-full bg-plum-deep px-8 py-3.5 text-sm font-semibold text-parchment shadow-soft transition hover:bg-plum dark:bg-peach-soft dark:text-charcoal dark:hover:bg-peach-soft/90"
                >
                  Learn your cycle
                </Link>
                <Link
                  to="/wellness"
                  className="inline-flex items-center justify-center rounded-full border border-blush/70 bg-warm-white/90 px-8 py-3.5 text-sm font-semibold text-plum-deep transition hover:border-dust-rose hover:bg-blush/25 dark:border-plum/45 dark:bg-plum-deep/50 dark:text-parchment dark:hover:bg-plum/40"
                >
                  Start with wellness
                </Link>
              </div>
            </div>
            <HeroIllustration className="max-w-md opacity-95 lg:max-w-none lg:justify-self-end" />
          </div>
        </div>
      </section>

      <PageShell className="py-20 md:py-28">
        <SectionHeading
          eyebrow="Mission"
          title="Education that respects your whole self"
          description="We explain patterns to help you notice what is true for you—not to label you. Professional care still matters when you need it."
          compact
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <FeatureCard
            title="Cycles & phases"
            description="Walk through each phase with warmth—what happens, how you might feel, and gentle support."
            to="/cycle"
            icon={IconCycle}
          />
          <FeatureCard
            title="Hormones in plain language"
            description="Meet the messengers behind mood, skin, sleep, and energy—without drowning in jargon."
            to="/hormones"
            icon={IconSpark}
          />
          <FeatureCard
            title="Wellness & reflection"
            description="Journal prompts and ideas for nourishment, rest, and movement that honor your rhythm."
            to="/wellness"
            icon={IconHeart}
          />
        </div>
      </PageShell>

      <section className="border-y border-blush/35 bg-warm-white/50 py-20 dark:border-plum/35 dark:bg-plum-deep/25 md:py-28">
        <PageShell>
          <SectionHeading
            eyebrow="Explore"
            title="Find a topic"
            description="Search when you know what you need; browse categories when you want to wander."
            align="center"
            compact
          />
          <div className="mx-auto mt-12 max-w-xl">
            <SearchBar />
          </div>
        </PageShell>
      </section>

      <PageShell className="py-20 md:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="More to explore"
              title="Body changes across a lifetime"
              description="From first periods to menopause—common patterns, honest variation, and when to ask for help."
              compact
            />
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-plum dark:text-lavender-mist/88">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose/80 dark:bg-rose-soft/70" aria-hidden />
                Period health, PMS, tracking, and hygiene basics
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose/80 dark:bg-rose-soft/70" aria-hidden />
                Symptom guide for awareness—not diagnosis
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose/80 dark:bg-rose-soft/70" aria-hidden />
                Resources, FAQs, and encouragement to seek care when needed
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/life-stages"
                className="rounded-full bg-blush/65 px-6 py-3 text-sm font-semibold text-plum-deep transition hover:bg-blush dark:bg-plum/40 dark:text-parchment dark:hover:bg-plum/55"
              >
                Explore life stages
              </Link>
              <Link
                to="/menstrual-health"
                className="text-sm font-semibold text-dust-rose underline-offset-4 hover:underline dark:text-rose-soft"
              >
                Menstrual health →
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-blush/45 bg-gradient-to-br from-lavender-mist/40 to-peach-soft/35 p-8 shadow-soft dark:border-plum/40 dark:from-plum/35 dark:to-plum-deep/80 md:p-10">
            <CompanionFigure className="absolute right-3 top-3 h-16 w-16 opacity-55" />
            <blockquote className="relative font-display text-xl font-medium leading-snug text-charcoal md:text-2xl dark:text-parchment">
              “Your body is not a mystery to solve overnight—it is a story you learn in chapters.”
            </blockquote>
            <p className="relative mt-6 text-sm text-plum dark:text-lavender-mist/80">— Lumen</p>
          </div>
        </div>
      </PageShell>
    </>
  )
}
