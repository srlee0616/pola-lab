export const portfolioVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
  },
  scrollAnimate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 }
  }
};

export const modalOverlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.1 } }
};

export const modalVariants = {
  initial: {
    opacity: 0,
    scaleX: 0.5,
    scaleY: 0.05,
    x: "-50%",
    y: "-50%",
    transformOrigin: "center center"
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  exit: {
    opacity: 0,
    scaleX: 0.8,
    scaleY: 0.5,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.3, ease: [0.33, 0, 0.67, 0] }
  }
};

export const overlayVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
      duration: 0.3
    }
  }
};

export const textChildVariants = {
  initial: { opacity: 0, y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  }
};

export const modalTextWrapVariants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
};

export const modalTextItemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
  },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
};
