import { useMemo } from 'react'
import { hormones, hormoneEffects } from '../data/hormones'
import HormonePanel from '../components/ui/HormonePanel'
import SectionHeading from '../components/ui/SectionHeading'
import HormoneBalanceIllustration from '../components/illustrations/HormoneBalanceIllustration'
import Tabs from '../components/ui/Tabs'
import Accordion from '../components/ui/Accordion'
import SectionDivider from '../components/ui/SectionDivider'
import { PageShell, ProseColumn } from '../components/ui/PageShell'

export default function HormonalChanges() {
  const tabItems = useMemo(() => hormones.map((h) => ({ id: h.id, label: h.name })), [])
  const panels = useMemo(() => {
    const o = {}
    hormones.forEach((h) => {
      o[h.id] = <HormonePanel hormone={h} />
    })
    return o
  }, [])

  const effectItems = useMemo(
    () =>
      hormoneEffects.map((item, i) => ({
        id: `effect-${i}`,
        title: item.area,
        content: item.note,
      })),
    [],
  )

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <header className="max-w-xl">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-dust-rose dark:text-rose-soft">
            Hormonal changes
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-charcoal md:text-5xl dark:text-parchment">
            Hormones as patterns, not puzzles
          </h1>
          <ProseColumn className="mt-6">
            <p className="text-base leading-relaxed text-plum dark:text-lavender-mist/88">
              You do not need every name memorized. Choose one messenger below, then open daily-life notes only when helpful.
            </p>
          </ProseColumn>
        </header>
        <HormoneBalanceIllustration className="mx-auto max-w-[min(100%,360px)] lg:mx-0 lg:justify-self-end" />
      </div>

      <SectionDivider className="!py-12 md:!py-16" />

      <SectionHeading
        eyebrow="Deep dive"
        title="Meet each hormone"
        description="Read the overview first; additional effects stay tucked away until you expand them."
        compact
      />
      <div className="mt-10">
        <Tabs tabs={tabItems} panels={panels} defaultId={hormones[0].id} />
      </div>

      <SectionDivider label="Daily life" className="!py-14 md:!py-20" />

      <div className="mx-auto max-w-2xl">
        <SectionHeading
          title="How hormones can touch daily life"
          description="One area at a time—open what resonates today."
          compact
        />
        <Accordion className="mt-8" defaultOpenId={null} items={effectItems} />
      </div>
    </PageShell>
  )
}
