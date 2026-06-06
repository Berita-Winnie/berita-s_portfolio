import { useMemo } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import SectionDivider from '../components/ui/SectionDivider'
import Tabs from '../components/ui/Tabs'
import ProductPanel from '../components/ui/ProductPanel'
import VideoGuideCard from '../components/ui/VideoGuideCard'
import Accordion from '../components/ui/Accordion'
import ExpandableDetails from '../components/ui/ExpandableDetails'
import { PageShell, ProseColumn } from '../components/ui/PageShell'
import CompanionFigure from '../components/illustrations/CompanionFigure'
import { productTypes, firstTimeGuidance, productChoiceTips } from '../data/products'
import { videoGuides } from '../data/videoGuides'

export default function ProductsGuide() {
  const tabItems = useMemo(
    () =>
      productTypes.map((p) => ({
        id: p.id,
        label: p.name,
        hint: 'Quick guide',
      })),
    [],
  )

  const panels = useMemo(() => {
    const o = {}
    productTypes.forEach((p) => {
      o[p.id] = <ProductPanel key={p.id} product={p} />
    })
    return o
  }, [])

  const tipItems = useMemo(
    () =>
      productChoiceTips.map((t) => ({
        id: t.id,
        title: t.title,
        content: <p className="text-sm leading-relaxed text-plum dark:text-lavender-mist/90">{t.content}</p>,
      })),
    [],
  )

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <header className="relative max-w-2xl">
        <CompanionFigure className="pointer-events-none absolute -right-6 -top-3 hidden h-20 w-20 opacity-55 md:block" />
        <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-dust-rose dark:text-rose-soft">
          Practical guides
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-charcoal md:text-5xl dark:text-parchment">
          Period Products &amp; Practical Guides
        </h1>
        <ProseColumn className="mt-6">
          <p className="text-base leading-relaxed text-plum dark:text-lavender-mist/88">
            Explore common period product types in a beginner-friendly way. Start with what feels simplest, then expand when you’re ready for more detail.
          </p>
        </ProseColumn>

        <div className="mt-6 max-w-xl">
          <ExpandableDetails label={firstTimeGuidance.title}>
            <p className="text-sm leading-relaxed text-plum dark:text-lavender-mist/90">{firstTimeGuidance.note}</p>
          </ExpandableDetails>
        </div>
      </header>

      <SectionDivider className="!py-12 md:!py-16" />

      <SectionHeading
        eyebrow="Products"
        title="Pick one to start"
        description="Each product type shows the basics first. Use “Learn more” for extra considerations and notes."
        compact
      />

      <div className="mt-10">
        <Tabs tabs={tabItems} panels={panels} defaultId={productTypes[0].id} />
      </div>

      <SectionDivider label="How to choose what works for you" className="!py-14 md:!py-20" />

      <div className="mx-auto max-w-2xl">
        <Accordion defaultOpenId={null} items={tipItems} />
      </div>

      <SectionDivider label="Watch &amp; Learn" className="!py-14 md:!py-20" />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Video guides"
          description="Short embedded lessons. Browse horizontally—choose only what you need today."
          compact
        />

        <div className="mt-10 flex gap-6 overflow-x-auto pb-2">
          {videoGuides.map((v) => (
            <VideoGuideCard key={v.id} title={v.title} description={v.description} videoId={v.videoId} />
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-dust-rose/35 bg-blush/20 p-6 text-sm leading-relaxed text-plum dark:border-plum/40 dark:bg-plum/20 dark:text-lavender-mist/88">
          <strong className="font-semibold text-plum-deep dark:text-peach-soft">Note:</strong> This page is practical education, not medical advice. If you have persistent pain, bleeding concerns, or irritation, consider checking in with a qualified clinician.
        </div>
      </div>
    </PageShell>
  )
}

