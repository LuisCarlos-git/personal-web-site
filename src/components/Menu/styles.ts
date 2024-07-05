import { tv } from 'tailwind-variants';

export const menuCss = tv({
  base: `fixed
    bottom-0
    right-0
    left-0
    flex
    justify-between
    px-4
    py-4
    shadow-black
    border-t
    border-primary-dark`,
});

export const menuItemCss = tv({
  base: 'text-primary-dark text-lg',
  variants: {
    active: {
      true: 'text-active-dark',
    },
  },
});
