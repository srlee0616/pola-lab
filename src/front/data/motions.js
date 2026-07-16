export const cardMotion = {
  initial: {
    opacity: 0,
    y: 12
  },
  scrollAnimate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [
        0.25,
        1,
        0.5,
        1
      ]
    }
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.25,
      ease: "easeInOut"
    }
  }
};

export const dimMotion = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0.1
    }
  }
};

export const popupMotion = {
  initial: {
    opacity: 0,
    scale: 0.92,
    x: "-50%",
    y: "-50%",
    transformOrigin: "center center"
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.5,
      ease: [
        0.16,
        1,
        0.3,
        1
      ]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.3,
      ease: [
        0.25,
        1,
        0.5,
        1
      ]
    }
  }
};

export const hoverBg = {
  initial: {
    opacity: 0
  },
  hover: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
      duration: 0.3
    }
  }
};

export const hoverText = {
  initial: {
    opacity: 0,
    y: 20
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [
        0.33,
        1,
        0.68,
        1
      ]
    }
  }
};

export const staggerWrapDetails = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.06
    }
  }
};

export const fadeUpItem = {
  initial: {
    opacity: 0,
    y: 15
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [
        0.25,
        1,
        0.5,
        1
      ]
    }
  }
};

export const staggerWrap = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};
