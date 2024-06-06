'use client';
import { AnimatePresence, motion } from 'framer-motion';
const TemPlateVariants = {
  start: {
    opacity: 0,
    y: 50,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={children?.toString()}
        initial='start'
        animate='end'
        exit='exit'
        variants={TemPlateVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Template;
