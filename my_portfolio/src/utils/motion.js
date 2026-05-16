const EASE_OUT_SOFT = [0.22, 1, 0.36, 1];

export function getIntroProps(prefersReducedMotion, { delay = 0, duration = 0.68 } = {}) {
  if (prefersReducedMotion) {
    return {
      initial: false,
      animate: { opacity: 1, y: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE_OUT_SOFT },
  };
}

export function getRevealProps(
  prefersReducedMotion,
  { delay = 0, duration = 0.68, amount = 0.2 } = {},
) {
  if (prefersReducedMotion) {
    return {
      initial: false,
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount },
    };
  }

  return {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount },
    transition: { duration, delay, ease: EASE_OUT_SOFT },
  };
}
