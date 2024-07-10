import { tv } from 'tailwind-variants';

export const wrapperCss = tv({
  base: 'flex flex-col gap-4 p-3 border-primary-dark border-b w-full items-center',
});

export const titleCss = tv({
  base: 'text-primary-dark text-xl',
});

export const subtitleCss = tv({
  base: 'text-secondary-dark text-base',
});

export const textWrapperCss = tv({
  base: 'flex flex-col text-center',
});
