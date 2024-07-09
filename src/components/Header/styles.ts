import { tv } from 'tailwind-variants';

export const headerWrapperCss = tv({
  base: 'flex gap-4 p-3 border-primary-dark border-b md:hidden',
});

export const titleCss = tv({
  base: 'text-primary-dark text-lg',
});

export const subtitleCss = tv({
  base: 'text-secondary-dark text-sm',
});

export const textWrapperCss = tv({
  base: 'flex flex-col',
});
