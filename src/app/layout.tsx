import type { Metadata } from 'next';
import { DM_Mono } from 'next/font/google';

import '@/styles/global.css';

import { Menu, Header } from '@/components';

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
        <Menu />
        <Header />
        {children}
      </body>
    </html>
  );
}
