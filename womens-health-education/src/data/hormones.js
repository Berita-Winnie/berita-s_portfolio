export const hormones = [
  {
    id: 'estrogen',
    name: 'Estrogen',
    role: 'Helps regulate the menstrual cycle and supports bone, heart, skin, and brain health in complex ways.',
    patterns: 'Often rises through the follicular phase, peaks around ovulation, then fluctuates in the luteal phase.',
    effects: ['May influence skin hydration and elasticity', 'Can affect mood and verbal memory in some studies', 'Works with other hormones—effects are not “good or bad,” they are contextual'],
    tone: 'from-rose-soft/35 to-blush/40',
  },
  {
    id: 'progesterone',
    name: 'Progesterone',
    role: 'Supports the uterine lining after ovulation and has a calming influence on the nervous system for many people.',
    patterns: 'Rises after ovulation from the corpus luteum; falls if a period begins.',
    effects: ['May contribute to sleepiness or breast tenderness for some', 'Can influence body temperature slightly', 'Dropping levels before a period may relate to PMS for some'],
    tone: 'from-lavender-mist/50 to-plum/20',
  },
  {
    id: 'testosterone',
    name: 'Testosterone',
    role: 'Present in all sexes; in women it supports muscle, mood, and sexual interest in balance with other hormones.',
    patterns: 'Typically lower than in most men, but still meaningful; varies by individual and cycle day.',
    effects: ['May relate to libido and assertiveness for some', 'Skin oil production can be influenced', 'Balance matters—more is not automatically better'],
    tone: 'from-peach-soft/45 to-sage/25',
  },
  {
    id: 'fsh-lh',
    name: 'FSH & LH',
    role: 'Brain–ovary messengers from the pituitary gland that help eggs mature and trigger ovulation.',
    patterns: 'FSH supports follicle growth; a mid-cycle LH surge often precedes egg release.',
    effects: ['You do not “feel” these directly, but they shape the cycle', 'Tracking kits measure LH for those who use them', 'Irregular patterns deserve a clinician’s input if concerning'],
    tone: 'from-sage/20 to-lavender-mist/45',
  },
]

export const hormoneEffects = [
  { area: 'Mood', note: 'Hormones interact with brain chemistry; mood shifts can be physical, not personal failure.' },
  { area: 'Skin', note: 'Oil production and inflammation can fluctuate—gentle routines beat harsh stripping.' },
  { area: 'Energy', note: 'Sleep, stress, and nutrition matter too; hormones are one piece of the picture.' },
  { area: 'Cravings', note: 'Some notice more desire for carbs or sweets before a period—nourishment without shame helps.' },
  { area: 'Sleep', note: 'Progesterone can feel sedating; dropping hormones may disturb sleep for some.' },
  { area: 'Body changes', note: 'Fluid shifts are common; they do not define your worth.' },
]
