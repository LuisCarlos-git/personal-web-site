import { tv } from 'tailwind-variants';

export const menuCss = tv({
  base: 'flex justify-center items-center flex-col flex-1 gap-y-4',
});

export const menuItemCss = tv({
  base: 'text-primary-dark text-lg',
  variants: {
    active: {
      true: 'text-active-dark',
    },
  },
});
