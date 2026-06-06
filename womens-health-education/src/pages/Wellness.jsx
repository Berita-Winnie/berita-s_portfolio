import { useMemo } from 'react'
import { journalPrompts } from '../data/journalPrompts'
import JournalPromptCard from '../components/ui/JournalPromptCard'
import MoodPatternCard from '../components/ui/MoodPatternCard'
import SectionHeading from '../components/ui/SectionHeading'
import WellnessCalmIllustration from '../components/illustrations/WellnessCalmIllustration'
import Accordion from '../components/ui/Accordion'
import SectionDivider from '../components/ui/SectionDivider'
import ExpandableDetails from '../components/ui/ExpandableDetails'
import { PageShell, ProseColumn } from '../components/ui/PageShell'

const pillars = [
  {
    title: 'Energy',
    text: 'Energy is not constant—and that is physiological, not a flaw. Notice peaks and dips without scoring yourself.',
  },
  {
    title: 'Emotions',
    text: 'Feelings can track with hormones, sleep, stress, and life events. Naming patterns reduces shame.',
  },
  {
    title: 'Rest',
    text: 'Rest is not laziness; it is how the nervous system recovers. Prioritize sleep as a health behavior.',
  },
  {
    title: 'Movement',
    text: 'From walking to strength training, choose joy and sustainability over punishment.',
  },
  {
    title: 'Nourishment',
    text: 'Food supports hormones, mood, and recovery. Aim for enough, varied, and satisfying meals.',
  },
  {
    title: 'Self-awareness',
    text: 'Curiosity beats criticism. Small check-ins build body literacy over time.',
  },
]

export default function Wellness() {
  const pillarItems = useMemo(
    () =>
      pillars.map((p, i) => ({
        id: `pillar-${i}`,
        title: p.title,
        content: p.text,
      })),
    [],
  )

  const firstPrompts = journalPrompts.slice(0, 3)
  const morePrompts = journalPrompts.slice(3)

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <header className="max-w-xl">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-dust-rose dark:text-rose-soft">
            Self-understanding
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-charcoal md:text-5xl dark:text-parchment">
            Wellness as listening
          </h1>
          <ProseColumn className="mt-6">
            <p className="text-base leading-relaxed text-plum dark:text-lavender-mist/88">
              Rhythm and compassion—not another checklist. Start with the pillars, then borrow a prompt when it feels right.
            </p>
          </ProseColumn>
        </header>
        <WellnessCalmIllustration className="mx-auto max-w-[min(100%,400px)] lg:mx-0 lg:justify-self-end" />
      </div>

      <SectionDivider className="!py-12 md:!py-16" />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Foundations"
            title="Pillars of monthly self-care"
            description="None of these require perfection—small, repeatable actions matter most."
            compact
          />
          <Accordion className="mt-8" defaultOpenId={null} items={pillarItems} />
        </div>
        <div>
          <MoodPatternCard />
        </div>
      </div>

      <SectionDivider label="Reflection" className="!py-14 md:!py-20" />

      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Journal"
          title="Prompts to try"
          description="Three to begin—add more when you want a longer practice."
          align="center"
          compact
        />
        <div className="mt-10 space-y-6">
          {firstPrompts.map((j) => (
            <JournalPromptCard key={j.id} prompt={j.prompt} hint={j.hint} />
          ))}
        </div>
        {morePrompts.length > 0 && (
          <div className="mt-10 flex flex-col items-center">
            <ExpandableDetails label={`Show ${morePrompts.length} more prompts`}>
              <div className="mx-auto w-full max-w-2xl space-y-6">
                {morePrompts.map((j) => (
                  <JournalPromptCard key={j.id} prompt={j.prompt} hint={j.hint} />
                ))}
              </div>
            </ExpandableDetails>
          </div>
        )}
      </div>
    </PageShell>
  )
}
