export const monthLabelVariants = {
  initial: {
    scale: 1,
    y: -10,
    opacity: 0
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  },
  exit: {
    scale: 0.5,
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};
export const cardVariants = {
  initial: {
    scale: 0.92,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  },
  exit: {
    scale: 0.92,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};
