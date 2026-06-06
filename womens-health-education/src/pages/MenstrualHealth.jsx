import { useMemo } from 'react'
import { myths } from '../data/myths'
import SectionHeading from '../components/ui/SectionHeading'
import MenstrualHealthIllustration from '../components/illustrations/MenstrualHealthIllustration'
import Accordion from '../components/ui/Accordion'
import Tabs from '../components/ui/Tabs'
import SectionDivider from '../components/ui/SectionDivider'
import { PageShell, ProseColumn } from '../components/ui/PageShell'

const topics = [
  {
    title: 'Periods & flow',
    body: 'Bleeding usually lasts a few days; “normal” flow is personal. Track what is typical for you. Very heavy bleeding or clots with anemia symptoms should be evaluated.',
  },
  {
    title: 'Cramps',
    body: 'Cramping happens when the uterus contracts. Heat, gentle movement, and OTC pain relief help many. Severe pain is not something you must accept silently.',
  },
  {
    title: 'Irregular cycles',
    body: 'Stress, illness, travel, weight change, thyroid issues, PCOS, and perimenopause can shift timing. A few off months can happen; persistent irregularity deserves a chat with a clinician.',
  },
  {
    title: 'Discharge',
    body: 'Cervical fluid often changes through the cycle—clear or stretchy near ovulation is common. Foul odor, itching, or gray/green discharge suggests infection screening.',
  },
  {
    title: 'PMS & mood',
    body: 'Physical and emotional symptoms before a period are common. If mood swings disrupt work or relationships most months, ask about PMDD—treatments exist.',
  },
  {
    title: 'Tracking',
    body: 'Note bleeding, mood, sleep, pain, and triggers you care about. Patterns help you prepare and give clinicians useful history.',
  },
  {
    title: 'Hygiene',
    body: 'Pads, tampons, cups, period underwear—choose what fits your body and comfort. Change products as directed; wash hands; sleep safely with appropriate protection.',
  },
]

const normalBullets = [
  'Cycles roughly 21–35 days for many adults',
  'Mild cramps responsive to self-care',
  'Short mood shifts before a period',
  'Variation of a few days month to month',
]

const discussBullets = [
  'Soaking through protection hourly or large clots',
  'Severe pain, especially if new or worsening',
  'No period for months (and not pregnant)',
  'Symptoms that derail daily life most cycles',
]

export default function MenstrualHealth() {
  const topicItems = useMemo(
    () =>
      topics.map((t, i) => ({
        id: `topic-${i}`,
        title: t.title,
        content: t.body,
      })),
    [],
  )

  const mythItems = useMemo(
    () =>
      myths.map((m, i) => ({
        id: `myth-${i}`,
        title: `Reality check ${i + 1}`,
        subtitle: m.myth,
        content: (
          <p>
            <span className="font-medium text-charcoal dark:text-parchment">Fact: </span>
            {m.fact}
          </p>
        ),
      })),
    [],
  )

  const normalPanel = (
    <ul className="space-y-3 text-sm leading-relaxed text-plum dark:text-lavender-mist/88">
      {normalBullets.map((b) => (
        <li key={b} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage/60 dark:bg-sage/45" aria-hidden />
          {b}
        </li>
      ))}
    </ul>
  )
  const discussPanel = (
    <ul className="space-y-3 text-sm leading-relaxed text-plum dark:text-lavender-mist/88">
      {discussBullets.map((b) => (
        <li key={b} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose/70 dark:bg-rose-soft/55" aria-hidden />
          {b}
        </li>
      ))}
    </ul>
  )

  const comparePanels = {
    normal: normalPanel,
    discuss: discussPanel,
  }

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <header className="max-w-xl">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-dust-rose dark:text-rose-soft">
            Menstrual health
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-charcoal md:text-5xl dark:text-parchment">
            Periods, comfort, and knowing your baseline
          </h1>
          <ProseColumn className="mt-6">
            <p className="text-base leading-relaxed text-plum dark:text-lavender-mist/88">
              Learning what is common helps you notice what is different for you—without graphic detail, and with room to breathe.
            </p>
          </ProseColumn>
        </header>
        <MenstrualHealthIllustration className="mx-auto max-w-[min(100%,280px)] lg:mx-0 lg:justify-self-end" />
      </div>

      <SectionDivider className="!py-12 md:!py-16" />

      <div className="mx-auto max-w-2xl">
        <SectionHeading
          title="Topics A–Z"
          description="Open only what you need—everything stays available, nothing shouts at once."
          compact
        />
        <Accordion className="mt-8" defaultOpenId={null} items={topicItems} />
      </div>

      <SectionDivider label="When to pause and ask" className="!py-14 md:!py-20" />

      <div className="mx-auto max-w-2xl">
        <SectionHeading
          title="Normal range vs. worth a conversation"
          description="A guide for questions—not a reason to worry about every symptom."
          compact
        />
        <div className="mt-8">
          <Tabs
            tabs={[
              { id: 'normal', label: 'Often healthy range', hint: 'Common, non-urgent patterns' },
              { id: 'discuss', label: 'Discuss with a clinician', hint: 'When extra support helps' },
            ]}
            panels={comparePanels}
            defaultId="normal"
          />
        </div>
      </div>

      <SectionDivider className="!py-14 md:!py-20" />

      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Myth vs. fact" title="Gentle reality checks" compact />
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-plum dark:text-lavender-mist/85">
          Shame thrives on silence. Facts can be kind—open one at a time.
        </p>
        <Accordion className="mt-8" defaultOpenId={null} items={mythItems} />
      </div>
    </PageShell>
  )
}
