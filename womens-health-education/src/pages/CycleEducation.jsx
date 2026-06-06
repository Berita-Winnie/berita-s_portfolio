import { useMemo } from 'react'
import { cyclePhases } from '../data/cyclePhases'
import CycleTimeline from '../components/ui/CycleTimeline'
import CycleTrackerMock from '../components/ui/CycleTrackerMock'
import SectionHeading from '../components/ui/SectionHeading'
import BookmarkButton from '../components/ui/BookmarkButton'
import CycleOrbitalIllustration from '../components/illustrations/CycleOrbitalIllustration'
import Tabs from '../components/ui/Tabs'
import PhasePanel from '../components/ui/PhasePanel'
import Accordion from '../components/ui/Accordion'
import SectionDivider from '../components/ui/SectionDivider'
import { PageShell, ProseColumn } from '../components/ui/PageShell'

export default function CycleEducation() {
  const tabItems = useMemo(
    () =>
      cyclePhases.map((p) => ({
        id: p.id,
        label: p.name.replace(' phase', ''),
        hint: p.shortLabel,
      })),
    [],
  )

  const panels = useMemo(() => {
    const o = {}
    cyclePhases.forEach((p) => {
      o[p.id] = <PhasePanel phase={p} />
    })
    return o
  }, [])

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <header className="max-w-xl">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-dust-rose dark:text-rose-soft">
            Cycle education
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-charcoal md:text-5xl dark:text-parchment">
            Your cycle, explained kindly
          </h1>
          <ProseColumn className="mt-6">
            <p className="text-base leading-relaxed text-plum dark:text-lavender-mist/88">
              The menstrual cycle is more than a period—it is an ongoing conversation between your brain, ovaries, and uterus.
              Start with one phase, then expand when you want more depth.
            </p>
          </ProseColumn>
        </header>
        <CycleOrbitalIllustration className="mx-auto max-w-[min(100%,280px)] opacity-90 lg:mx-0 lg:justify-self-end" />
      </div>

      <SectionDivider className="!py-12 md:!py-16" />

      <div className="flex flex-wrap items-center gap-3">
        <BookmarkButton label="Cycle overview" />
        <span className="text-xs text-plum/65 dark:text-lavender-mist/55">Save is local to this browser—just for your convenience.</span>
      </div>

      <SectionHeading
        eyebrow="Phases"
        title="Explore one phase at a time"
        description="Each tab highlights three takeaways first. Open the full details when you are ready to go deeper."
        compact
      />
      <div className="mt-10">
        <Tabs tabs={tabItems} panels={panels} defaultId={cyclePhases[0].id} />
      </div>

      <SectionDivider label="Tools" className="!py-14 md:!py-20" />

      <div className="mx-auto max-w-2xl">
        <SectionHeading
          title="Map & tracking (optional)"
          description="A simple visual and a mock calendar—useful context, not something you must study all at once."
          compact
        />
        <Accordion
          className="mt-8"
          defaultOpenId={null}
          items={[
            {
              id: 'timeline',
              title: 'A month-at-a-glance map',
              subtitle: 'A gentle overview of how phases often flow',
              content: (
                <div className="pt-2">
                  <CycleTimeline />
                </div>
              ),
            },
            {
              id: 'tracker',
              title: 'Sample tracking layout',
              subtitle: 'Illustration only—your data stays private',
              content: (
                <div className="pt-2">
                  <CycleTrackerMock />
                </div>
              ),
            },
          ]}
        />
      </div>
    </PageShell>
  )
}
