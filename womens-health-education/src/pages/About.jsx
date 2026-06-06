import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import Accordion from '../components/ui/Accordion'
import { PageShell, ProseColumn } from '../components/ui/PageShell'
import SectionDivider from '../components/ui/SectionDivider'

const values = [
  {
    title: 'Accuracy with kindness',
    text: 'Evidence-informed content without cold clinical vibes.',
  },
  {
    title: 'Inclusion',
    text: 'Diverse bodies and timelines; language that welcomes questioning and growth.',
  },
  {
    title: 'Agency',
    text: 'You decide what to track, what to share, and when to seek care.',
  },
]

export default function About() {
  const valueItems = values.map((v, i) => ({
    id: `value-${i}`,
    title: v.title,
    content: v.text,
  }))

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <header className="max-w-xl">
        <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-dust-rose dark:text-rose-soft">
          About Lumen
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-charcoal md:text-5xl dark:text-parchment">
          Less shame, less confusion, more confidence
        </h1>
      </header>

      <ProseColumn className="mt-10 space-y-5">
        <p className="text-base leading-relaxed text-plum dark:text-lavender-mist/88">
          Lumen exists because understanding your body should feel dignified—not embarrassing, not overwhelming, and never like a test you can fail.
        </p>
        <p className="text-base leading-relaxed text-plum dark:text-lavender-mist/88">
          We focus on{' '}
          <strong className="font-semibold text-charcoal dark:text-parchment">body literacy</strong>: clear language about cycles, hormones, and life stages so you can notice patterns, ask better questions, and advocate for yourself.
        </p>
      </ProseColumn>

      <div className="mt-10 max-w-xl">
        <Accordion
          defaultOpenId={null}
          items={[
            {
              id: 'tone',
              title: 'Tone & boundaries',
              content:
                'Our voice is warm and intelligent. We avoid fear-based messaging and graphic detail while still respecting the real physical and emotional experiences that come with having a body.',
            },
          ]}
        />
      </div>

      <SectionDivider className="!py-12 md:!py-16" />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="mx-auto w-full max-w-xl">
          <SectionHeading title="What we value" compact />
          <Accordion className="mt-6" defaultOpenId={null} items={valueItems} />
        </div>
        <div className="flex flex-col justify-center rounded-[1.75rem] border border-blush/40 bg-gradient-to-br from-peach-soft/35 to-lavender-mist/45 p-8 dark:border-plum/35 dark:from-plum/40 dark:to-plum-deep/75 md:p-10">
          <p className="font-display text-xl font-medium leading-snug text-charcoal md:text-2xl dark:text-parchment">
            “Education is an act of care—especially when it is slow, honest, and respectful.”
          </p>
          <Link
            to="/resources"
            className="mt-8 inline-flex w-fit rounded-full bg-plum-deep px-6 py-3 text-sm font-semibold text-parchment transition hover:bg-plum dark:bg-peach-soft dark:text-charcoal"
          >
            View resources &amp; FAQ
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
