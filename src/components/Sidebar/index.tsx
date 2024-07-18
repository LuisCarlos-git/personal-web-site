'use client';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { Avatar, Link, Profile } from '@/components';

import { menus } from '@/utils/constants';

import * as styles from './styles';
import { sidebarAnimations } from '@/utils/animations';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navCss()}>
      <Profile component="desktop" />
      <ul>
        {menus.map((menu, i) => (
          <motion.li
            initial={sidebarAnimations.initial}
            animate={sidebarAnimations.animate}
            className={styles.menuItemCss({ isActive: pathname === menu.href })}
            key={menu.label}
            transition={sidebarAnimations.transition(i)}
          >
            <Link
              href={menu.href}
              label={menu.label}
              isActive={pathname === menu.href}
            />
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
