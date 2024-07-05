'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menus } from '@/utils/constants';

import * as styles from './styles';

export function Menu() {
  const pathname = usePathname();
  return (
    <ul className={styles.menuCss()}>
      {menus.map(menu => (
        <li key={menu.href}>
          <Link
            className={styles.menuItemCss({
              active: pathname === menu.href,
            })}
            href={menu.href}
          >
            {menu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
