function Wrap({ children }) {
  return (
    <div className="mx-auto w-full max-w-[220px] rounded-2xl border border-blush/35 bg-parchment/85 p-4 shadow-[0_8px_22px_-14px_rgba(74,61,79,0.35)] dark:border-lavender-mist/20 dark:bg-gradient-to-br dark:from-[#352d39] dark:to-[#2b242f] dark:shadow-[0_12px_28px_-14px_rgba(0,0,0,0.6)]">
      {children}
    </div>
  )
}

function PadsArt() {
  return (
    <Wrap>
      <svg viewBox="0 0 220 120" className="h-auto w-full" aria-hidden>
        <rect x="38" y="20" width="144" height="80" rx="28" className="fill-warm-white stroke-blush/75 dark:fill-plum-deep dark:stroke-plum/45" strokeWidth="2" />
        <ellipse cx="110" cy="60" rx="52" ry="20" className="fill-peach-soft/45 dark:fill-peach-soft/25" />
        <path d="M52 60h116" className="stroke-dust-rose/45 dark:stroke-rose-soft/35" strokeWidth="1.4" strokeDasharray="2 7" />
        <ellipse cx="38" cy="60" rx="9" ry="16" className="fill-blush/60 dark:fill-plum/45" />
        <ellipse cx="182" cy="60" rx="9" ry="16" className="fill-blush/60 dark:fill-plum/45" />
      </svg>
    </Wrap>
  )
}

function TamponsArt() {
  return (
    <Wrap>
      <svg viewBox="0 0 220 120" className="h-auto w-full" aria-hidden>
        <rect x="30" y="50" width="92" height="22" rx="11" className="fill-warm-white stroke-blush/75 dark:fill-plum-deep dark:stroke-plum/45" strokeWidth="2" />
        <rect x="122" y="53" width="52" height="16" rx="8" className="fill-peach-soft/55 dark:fill-peach-soft/32" />
        <circle cx="34" cy="61" r="2.8" className="fill-dust-rose/60 dark:fill-rose-soft/55" />
        <line x1="174" y1="61" x2="203" y2="61" className="stroke-dust-rose/65 dark:stroke-rose-soft/55" strokeWidth="2" strokeLinecap="round" />
        <path d="M203 61c4 0 6 2 6 5 0 3-2 5-6 5" className="fill-none stroke-dust-rose/55 dark:stroke-rose-soft/45" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    </Wrap>
  )
}

function CupArt() {
  return (
    <Wrap>
      <svg viewBox="0 0 220 120" className="h-auto w-full" aria-hidden>
        <path d="M72 24h76c0 31-6 49-18 61-6 6-12 10-20 10s-14-4-20-10C78 73 72 55 72 24z" className="fill-lavender-mist/80 stroke-plum/35 dark:fill-plum/45 dark:stroke-lavender-mist/35" strokeWidth="2" />
        <path d="M80 24h60" className="stroke-warm-white/80 dark:stroke-parchment/65" strokeWidth="2" strokeLinecap="round" />
        <line x1="110" y1="95" x2="110" y2="109" className="stroke-dust-rose/70 dark:stroke-rose-soft/60" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="110" cy="111" r="2.8" className="fill-dust-rose/70 dark:fill-rose-soft/60" />
      </svg>
    </Wrap>
  )
}

function UnderwearArt() {
  return (
    <Wrap>
      <svg viewBox="0 0 220 120" className="h-auto w-full" aria-hidden>
        <path d="M52 28h116l-11 62H63L52 28z" className="fill-blush/72 stroke-dust-rose/60 dark:fill-plum/45 dark:stroke-rose-soft/35" strokeWidth="2" />
        <path d="M82 28c0 13 12 24 28 24s28-11 28-24" className="fill-none stroke-warm-white/90 dark:stroke-parchment/80" strokeWidth="3" />
        <rect x="88" y="57" width="44" height="19" rx="7.5" className="fill-peach-soft/55 dark:fill-peach-soft/30" />
        <path d="M74 45h72" className="stroke-warm-white/60 dark:stroke-parchment/45" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </Wrap>
  )
}

function LinersArt() {
  return (
    <Wrap>
      <svg viewBox="0 0 220 120" className="h-auto w-full" aria-hidden>
        <ellipse cx="110" cy="60" rx="58" ry="23" className="fill-warm-white stroke-blush/78 dark:fill-plum-deep dark:stroke-plum/45" strokeWidth="2" />
        <ellipse cx="110" cy="60" rx="36" ry="11" className="fill-peach-soft/45 dark:fill-peach-soft/24" />
        <path d="M84 60h52" className="stroke-dust-rose/45 dark:stroke-rose-soft/35" strokeWidth="1.5" strokeDasharray="2 6" />
      </svg>
    </Wrap>
  )
}

function MixArt() {
  return (
    <Wrap>
      <svg viewBox="0 0 220 120" className="h-auto w-full" aria-hidden>
        <rect x="24" y="44" width="68" height="32" rx="14" className="fill-warm-white stroke-blush/80 dark:fill-plum-deep dark:stroke-plum/45" strokeWidth="2" />
        <path d="M100 24h48c0 20-4 31-10 38-4 4-8 7-14 7-5 0-10-3-13-7-7-7-11-18-11-38z" className="fill-lavender-mist/80 stroke-plum/35 dark:fill-plum/45 dark:stroke-lavender-mist/35" strokeWidth="2" />
        <path d="M158 34h38l-4 42h-30l-4-42z" className="fill-blush/70 stroke-dust-rose/60 dark:fill-plum/45 dark:stroke-rose-soft/35" strokeWidth="2" />
      </svg>
    </Wrap>
  )
}

export default function ProductIllustration({ type }) {
  if (type === 'pads') return <PadsArt />
  if (type === 'tampons') return <TamponsArt />
  if (type === 'cups') return <CupArt />
  if (type === 'underwear') return <UnderwearArt />
  if (type === 'liners') return <LinersArt />
  return <MixArt />
}

