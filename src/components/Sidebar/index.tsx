'use client'
import { usePathname } from 'next/navigation';

import {Avatar, Link, Profile} from '@/components';

import { menus } from '@/utils/constants';

import * as styles from './styles';


export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navCss()}>
      <Profile component='desktop'/>
      <ul>
        {menus.map(menu => (
          <li className={styles.menuItemCss({isActive: pathname === menu.href})} key={menu.label}>
            <Link
              href={menu.href}
              label={menu.label}
              isActive={pathname === menu.href}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
