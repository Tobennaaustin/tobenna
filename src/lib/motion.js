// export const ease = {
//   expo: [0.16, 1, 0.3, 1],
//   standard: [0.22, 1, 0.36, 1],
// };

// export const duration = {
//   fast: 0.2,
//   base: 0.45,
//   slow: 0.8,
// };

// export const transition = {
//   duration: duration.base,
//   ease: ease.expo,
// };

// /** Fade + rise. The default entrance for anything on this site. */
// export const rise = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0, transition },
// };

// /** Parent wrapper — children enter one after another. */
// export const stagger = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.08, delayChildren: 0.1 },
//   },
// };

// /** Scroll-reveal props. Spread onto any motion element:
//  *  <motion.section {...reveal}> */
// export const reveal = {
//   variants: rise,
//   initial: "hidden",
//   whileInView: "show",
//   viewport: { once: true, margin: "-80px" },
// };


export const ease = {
  expo: [0.16, 1, 0.3, 1],
  standard: [0.22, 1, 0.36, 1],
  smooth: [0.25, 0.1, 0.25, 1],
  spring: [0.34, 1.56, 0.64, 1],
  bounce: [0.68, -0.55, 0.27, 1.55],
  slowMo: [0.7, 0, 0.3, 1],
};

export const duration = {
  fast: 0.2,
  base: 0.45,
  slow: 0.8,
  slower: 1.2,
  instant: 0.1,
};

export const transition = {
  duration: duration.base,
  ease: ease.expo,
};

export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
  mass: 1,
};

export const bounceTransition = {
  type: "spring",
  stiffness: 400,
  damping: 10,
  mass: 0.8,
};

// ========== ENTRANCE ANIMATIONS ==========

/** Fade + rise. The default entrance for anything on this site. */
export const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition },
};

/** Fade + fall (opposite of rise) */
export const fall = {
  hidden: { opacity: 0, y: -18 },
  show: { opacity: 1, y: 0, transition },
};

/** Fade + slide from left */
export const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition },
};

/** Fade + slide from right */
export const slideRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition },
};

/** Zoom in from center */
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition },
};

/** Zoom out (pop effect) */
export const zoomOut = {
  hidden: { opacity: 0, scale: 1.15 },
  show: { opacity: 1, scale: 1, transition },
};

/** Fade only */
export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition },
};

/** Scale up with bounce */
export const scaleBounce = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { ...bounceTransition, duration: duration.base },
  },
};

/** Rotate and fade in */
export const rotateIn = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  show: { opacity: 1, rotate: 0, scale: 1, transition },
};

/** Blur in (glassy effect) */
export const blurIn = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  show: { opacity: 1, filter: "blur(0px)", transition },
};

// ========== STAGGER PARENTS ==========

/** Parent wrapper — children enter one after another with fade+rise */
export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Stagger with faster timing */
export const staggerFast = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

/** Stagger with slower timing */
export const staggerSlow = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/** Stagger with different direction (fall) */
export const staggerFall = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  variants: fall,
};

// ========== HOVER / INTERACTION ANIMATIONS ==========

/** Scale up on hover */
export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: { duration: duration.fast },
  },
  whileTap: {
    scale: 0.95,
    transition: { duration: duration.instant },
  },
};

/** Lift up on hover with shadow */
export const hoverLift = {
  whileHover: {
    y: -6,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: { duration: duration.fast },
  },
  whileTap: {
    y: -2,
    scale: 0.98,
    transition: { duration: duration.instant },
  },
};

/** Glow effect on hover */
export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(255,255,255,0.3)",
    transition: { duration: duration.fast },
  },
};

/** Rotate on hover */
export const hoverRotate = {
  whileHover: {
    rotate: 5,
    scale: 1.02,
    transition: { duration: duration.fast },
  },
};

// ========== SCROLL REVEALS ==========

/** Scroll-reveal props. Spread onto any motion element:
 *  <motion.section {...reveal}> */
export const reveal = {
  variants: rise,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
};

/** Scroll reveal with zoom */
export const revealZoom = {
  variants: zoomIn,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
};

/** Scroll reveal from left */
export const revealLeft = {
  variants: slideLeft,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
};

/** Scroll reveal from right */
export const revealRight = {
  variants: slideRight,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
};

/** Scroll reveal with blur */
export const revealBlur = {
  variants: blurIn,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
};

/** Scroll reveal with bounce */
export const revealBounce = {
  variants: scaleBounce,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
};

// ========== SPECIAL EFFECTS ==========

/** Floating animation (for icons, badges, etc.) */
export const float = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: ease.smooth,
    },
  },
};

/** Pulsing glow */
export const pulse = {
  animate: {
    scale: [1, 1.03, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: ease.smooth,
    },
  },
};

/** Slow rotation (for logos, decorative elements) */
export const spin = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/** Gentle shake (attention grabber) */
export const shake = {
  animate: {
    x: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

/** Parallax scroll effect (use with useScroll) */
export const parallax = (offset = 50) => ({
  whileInView: {
    y: [offset, 0],
    opacity: [0, 1],
    transition: { duration: 0.8, ease: ease.expo },
  },
  viewport: { once: true },
});

// ========== PAGE TRANSITIONS ==========

/** Page enter animation */
export const pageEnter = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.expo },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: duration.base, ease: ease.standard },
  },
};

/** Staggered page enter with children */
export const pageStagger = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// ========== TEXT ANIMATIONS ==========

/** Text character reveal (for use with AnimatePresence) */
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: duration.base,
      ease: ease.expo,
    },
  },
};

/** Typewriter-like fade in */
export const typewriter = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  show: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: 1.2,
      ease: ease.standard,
    },
  },
};

// ========== EXPORT ALL ==========
export default {
  ease,
  duration,
  transition,
  springTransition,
  bounceTransition,

  // Entrances
  rise,
  fall,
  slideLeft,
  slideRight,
  zoomIn,
  zoomOut,
  fade,
  scaleBounce,
  rotateIn,
  blurIn,

  // Staggers
  stagger,
  staggerFast,
  staggerSlow,
  staggerFall,

  // Interactions
  hoverScale,
  hoverLift,
  hoverGlow,
  hoverRotate,

  // Scroll reveals
  reveal,
  revealZoom,
  revealLeft,
  revealRight,
  revealBlur,
  revealBounce,

  // Effects
  float,
  pulse,
  spin,
  shake,
  parallax,

  // Pages
  pageEnter,
  pageStagger,

  // Text
  textReveal,
  typewriter,
};