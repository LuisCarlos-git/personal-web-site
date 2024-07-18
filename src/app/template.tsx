'use client';

import { animationDelayTime } from '@/utils/constants';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 300, filter: 'blur(3px)' }}
      animate={{ opacity: 1, translateX: 0, filter: 'blur(0)' }}
      transition={{ duration: animationDelayTime.slow }}
    >
      <motion.div>{children}</motion.div>
    </motion.div>
  );
}
