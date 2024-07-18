'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

export function Transition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: -20,
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
}
