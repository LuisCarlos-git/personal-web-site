import { tv } from 'tailwind-variants';

export const navCss = tv({
  base: 'hidden gap-5 md:flex flex-col w-full h-screen max-w-[300px]  border-primary-dark border-r',
});

export const menuItemCss = tv({
  base: 'ml-4 p-2',
  variants: {
    isActive: {
      true: 'bg-secondary-dark rounded-tl-xl rounded-bl-xl',
    },
  },
});
