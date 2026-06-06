export default function JournalPromptCard({ prompt, hint }) {
  return (
    <div className="rounded-[1.5rem] border border-blush/50 bg-warm-white/90 p-6 dark:border-lavender-mist/20 dark:bg-gradient-to-br dark:from-[#584a60] dark:to-[#3f3344]">
      <p className="font-display text-base font-medium leading-snug text-charcoal md:text-lg dark:text-parchment">{prompt}</p>
      {hint && <p className="mt-3 text-sm italic text-plum/85 dark:text-lavender-mist/75">{hint}</p>}
    </div>
  )
}
