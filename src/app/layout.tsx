import type { Metadata } from 'next';
import { DM_Mono } from 'next/font/google';

import '@/styles/global.css';

import { Menu, Profile, Sidebar, Cursor, Transition } from '@/components';

const inter = DM_Mono({ weight: ['300', '400', '500'], preload: false });

export const metadata: Metadata = {
  title: 'Luis Carlos - Home',
  description: 'home page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <Profile component="mobile" />
        <Menu />
        <div className="flex">
          <Sidebar />
          <Transition>{children}</Transition>
        </div>
      </body>
    </html>
  );
}
