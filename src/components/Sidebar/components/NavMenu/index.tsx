'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as styles from './styles';

import { menus } from './menus';

export function NavMenu() {
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
