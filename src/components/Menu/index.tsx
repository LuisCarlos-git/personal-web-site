'use client';

import { usePathname } from 'next/navigation';

import { Link } from '@/components';

import { menus } from '@/utils/constants';

import * as styles from './styles';

export function Menu() {
  const pathname = usePathname();
  return (
    <ul className={styles.menuCss()}>
      {menus.map(menu => (
        <li key={menu.href}>
          <Link
            href={menu.href}
            label={menu.label}
            isActive={pathname === menu.href}
          />
        </li>
      ))}
    </ul>
  );
}
