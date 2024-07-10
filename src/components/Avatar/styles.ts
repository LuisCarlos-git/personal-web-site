import { tv } from 'tailwind-variants';

export const rootCss = tv({
  base: 'inline-flex  select-none items-center justify-center overflow-hidden rounded-full align-middle',
  variants: {
    size: {
      small: 'h-[50px] w-[50px]',
      huge: 'h-[100px] w-[100px]',
    },
  },
});

export const imageCss = tv({
  base: 'h-full w-full rounded-[inherit] object-cover',
});

export const fallbackCss = tv({
  base: 'text-primary-dark flex h-full w-full items-center justify-center bg-secondary-dark text-[15px] font-medium',
});
