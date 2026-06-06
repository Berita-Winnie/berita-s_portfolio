import { useMemo } from 'react'
import { lifeStages } from '../data/lifeStages'
import SectionHeading from '../components/ui/SectionHeading'
import LifeStagesPathIllustration from '../components/illustrations/LifeStagesPathIllustration'
import Tabs from '../components/ui/Tabs'
import LifeStagePanel from '../components/ui/LifeStagePanel'
import SectionDivider from '../components/ui/SectionDivider'
import { PageShell, ProseColumn } from '../components/ui/PageShell'
import ExpandableDetails from '../components/ui/ExpandableDetails'

export default function LifeStages() {
  const tabItems = useMemo(
    () =>
      lifeStages.map((s) => ({
        id: s.id,
        label: s.title,
        hint: s.age,
      })),
    [],
  )
  const panels = useMemo(() => {
    const o = {}
    lifeStages.forEach((s) => {
      o[s.id] = <LifeStagePanel stage={s} />
    })
    return o
  }, [])

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <header className="max-w-xl">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-dust-rose dark:text-rose-soft">
            Life stages
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-charcoal md:text-5xl dark:text-parchment">
            Honoring change across a lifetime
          </h1>
          <ProseColumn className="mt-6">
            <p className="text-base leading-relaxed text-plum dark:text-lavender-mist/88">
              Bodies evolve slowly. Move through one chapter at a time—there is no quiz at the end.
            </p>
          </ProseColumn>
        </header>
        <LifeStagesPathIllustration className="mx-auto max-w-[min(100%,320px)] lg:mx-0 lg:justify-self-end" />
      </div>

      <SectionDivider className="!py-12 md:!py-16" />

      <SectionHeading
        eyebrow="Chapters"
        title="Choose a life stage"
        description="Each tab shows a few common experiences first. Expand for more detail, then read the reassurance note."
        compact
      />
      <div className="mt-10">
        <Tabs tabs={tabItems} panels={panels} defaultId={lifeStages[0].id} />
      </div>

      <SectionDivider className="!py-14 md:!py-20" />

      <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-blush/40 bg-warm-white/90 p-6 dark:border-plum/35 dark:bg-plum-deep/45 md:p-8">
        <SectionHeading title="Inclusive framing" compact />
        <ProseColumn className="mt-4">
          <p className="text-sm leading-relaxed text-plum dark:text-lavender-mist/88">
            Women, girls, and people with cycles all deserve respectful language in care settings.
          </p>
        </ProseColumn>
        <ExpandableDetails label="Read the fuller note" className="mt-5">
          <p className="text-sm leading-relaxed text-plum dark:text-lavender-mist/88">
            If something you read here does not fit your body or identity, take what serves you and leave the rest.
          </p>
        </ExpandableDetails>
      </div>
    </PageShell>
  )
}
