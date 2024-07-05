type Menu = {
  href: string;
  label: string;
};

export const menus = [
  {
    href: '/about-me',
    label: 'Sobre mim',
  },
  {
    href: '/projects',
    label: 'Projetos',
  },
  {
    href: '/articles',
    label: 'Artigos',
  },
] as const satisfies Menu[];
