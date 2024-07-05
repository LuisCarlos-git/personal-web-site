type Menu = {
  href: string;
  label: string;
};

export const menus = [
  {
    href: '/about-me',
    label: 'About me',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/articles',
    label: 'Articles',
  },
] as const satisfies Menu[];
