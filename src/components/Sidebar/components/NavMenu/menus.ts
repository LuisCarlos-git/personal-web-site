type TMenu = {
  href: string;
  label: string;
};

export const menus = [
  {
    href: '/',
    label: 'About me',
  },
  {
    href: '/projects',
    label: 'Products',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
] as const satisfies TMenu[];
