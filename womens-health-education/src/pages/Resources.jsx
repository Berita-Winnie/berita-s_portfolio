import { useMemo } from 'react'
import { resourceCards, faqs } from '../data/resources'
import ResourceCard from '../components/ui/ResourceCard'
import Accordion from '../components/ui/Accordion'
import SectionHeading from '../components/ui/SectionHeading'
import ResourcesBooksIllustration from '../components/illustrations/ResourcesBooksIllustration'
import { PageShell, ProseColumn } from '../components/ui/PageShell'
import SectionDivider from '../components/ui/SectionDivider'
import ExpandableDetails from '../components/ui/ExpandableDetails'

export default function Resources() {
  const faqItems = useMemo(
    () =>
      faqs.map((f, i) => ({
        id: `faq-${i}`,
        title: f.q,
        content: f.a,
      })),
    [],
  )

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <header className="max-w-xl">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-dust-rose dark:text-rose-soft">
            Resources
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-charcoal md:text-5xl dark:text-parchment">
            Learn more, gently
          </h1>
          <ProseColumn className="mt-6">
            <p className="text-base leading-relaxed text-plum dark:text-lavender-mist/88">
              Cards and FAQs below—open one thread at a time. Pair anything you read with a clinician when you need personal guidance.
            </p>
          </ProseColumn>
        </header>
        <ResourcesBooksIllustration className="mx-auto max-w-[min(100%,220px)] opacity-90 lg:mx-0 lg:justify-self-end" />
      </div>

      <SectionDivider className="!py-12 md:!py-16" />

      <div className="mx-auto max-w-2xl">
        <SectionHeading title="Educational resource cards" description="Sample topics you might grow into articles later." compact />
        <div className="mt-8 space-y-5">
          {resourceCards.map((r) => (
            <ResourceCard key={r.id} title={r.title} description={r.description} tag={r.tag} />
          ))}
        </div>
      </div>

      <SectionDivider label="Questions" className="!py-14 md:!py-20" />

      <div className="mx-auto max-w-2xl">
        <SectionHeading title="FAQ" description="Short answers—your clinician can personalize this." compact />
        <Accordion className="mt-8" defaultOpenId={null} items={faqItems} />
      </div>

      <SectionDivider className="!py-14 md:!py-20" />

      <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-blush/40 bg-gradient-to-br from-lavender-mist/35 to-peach-soft/30 p-6 dark:border-lavender-mist/20 dark:from-[#584a60] dark:via-[#4a3d4f] dark:to-[#3f3344] md:p-8">
        <SectionHeading title="Trusted support" compact />
        <ProseColumn className="mt-4">
          <p className="text-sm leading-relaxed text-plum dark:text-lavender-mist/92">
            Look for licensed healthcare providers, certified educators, and organizations with transparent medical oversight.
          </p>
        </ProseColumn>
        <ExpandableDetails label="See types of support" className="mt-5">
          <ul className="space-y-3 text-sm leading-relaxed text-plum dark:text-lavender-mist/92">
            <li className="flex gap-2">
              <span className="text-dust-rose dark:text-rose-soft" aria-hidden>
                ·
              </span>
              Primary care or gynecology for cycle concerns, contraception, and screening
            </li>
            <li className="flex gap-2">
              <span className="text-dust-rose dark:text-rose-soft" aria-hidden>
                ·
              </span>
              Mental health professionals for mood patterns that affect your life
            </li>
            <li className="flex gap-2">
              <span className="text-dust-rose dark:text-rose-soft" aria-hidden>
                ·
              </span>
              Registered dietitians if nutrition questions are complex
            </li>
          </ul>
        </ExpandableDetails>
        <div className="mt-8 rounded-2xl border border-dust-rose/30 bg-warm-white/90 p-5 text-sm leading-relaxed text-plum-deep dark:border-lavender-mist/20 dark:bg-[#2f2733]/90 dark:text-peach-soft">
          <strong className="font-semibold">Medical disclaimer: </strong>
          Persistent pain, heavy bleeding, signs of infection, pregnancy concerns, or any symptom that frightens you deserves
          timely evaluation. Lumen does not provide medical advice.
        </div>
      </div>
    </PageShell>
  )
}
