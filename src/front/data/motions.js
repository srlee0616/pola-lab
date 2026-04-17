export const portfolioVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export const modalVariants = {
  initial: {
    opacity: 0,
    scale: 0.9, // 시작 크기를 키워 확장 거리를 줄임
    x: "-50%",
    y: "-50%"
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.45,
      // 튕김 수치를 1.1로 낮춰 자연스러운 확산감을 줌
      ease: [0.34, 1.1, 0.64, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.25, ease: "easeOut" }
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
