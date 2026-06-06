import SectionHeading from '../components/ui/SectionHeading'
import SymptomAwarenessIllustration from '../components/illustrations/SymptomAwarenessIllustration'
import SymptomCard from '../components/ui/SymptomCard'
import { symptoms } from '../data/symptoms'
import { PageShell, ProseColumn } from '../components/ui/PageShell'
import SectionDivider from '../components/ui/SectionDivider'

export default function SymptomGuide() {
  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <header className="max-w-xl">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-dust-rose dark:text-rose-soft">
            Symptom guide
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-charcoal md:text-5xl dark:text-parchment">
            A starting point—not a diagnosis
          </h1>
          <ProseColumn className="mt-6">
            <p className="text-base leading-relaxed text-plum dark:text-lavender-mist/88">
              Skim the list, open only what matches your experience, and use it to prepare questions—not to label yourself.
            </p>
          </ProseColumn>
        </header>
        <SymptomAwarenessIllustration className="mx-auto max-w-[min(100%,280px)] lg:mx-0 lg:justify-self-end" />
      </div>

      <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-dust-rose/35 bg-blush/25 px-5 py-4 text-sm leading-relaxed text-plum-deep dark:border-plum/45 dark:bg-plum/30 dark:text-peach-soft">
        <strong className="font-semibold">Important: </strong>
        This guide cannot diagnose or treat. If something is new, severe, or frightening, seek medical care.
      </div>

      <SectionDivider className="!py-12 md:!py-16" />

      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Symptoms"
          description="Two columns on wide screens, one per row on mobile—tap “Learn more” for cycle links and when to seek support."
          compact
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-8">
          {symptoms.map((s) => (
            <SymptomCard key={s.id} symptom={s} />
          ))}
        </div>
      </div>
    </PageShell>
  )
}
