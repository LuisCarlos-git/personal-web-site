import { tv } from 'tailwind-variants';

export const linkCss = tv({
  base: 'text-primary-dark text-lg w-full flex',
  variants: {
    active: {
      true: 'text-transparent bg-primary-gradient bg-clip-text animate-gradient bg-[length:200%_auto]',
    },
  },
});
