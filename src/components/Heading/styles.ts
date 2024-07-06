import { tv } from 'tailwind-variants';

export const wrapperCss = tv({
  base: 'flex gap-4 before:w-1 before:bg-primary-gradient before:content-[""] before:rounded',
});

export const headingCss = tv({
  base: 'text-2xl text-primary-dark',
});

export const subtitleCss = tv({
  base: 'text-base text-secondary-dark',
});
