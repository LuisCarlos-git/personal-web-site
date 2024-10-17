import colors from 'tailwindcss/colors';

export type Technologies = 'react' | 'tailwind' | 'zustand' | 'react-query';

export const colorsMapper: Record<Technologies, string> = {
  react: '#58c4dc',
  tailwind: colors.sky[500],
  zustand: colors.slate[400],
  'react-query': colors.amber[500],
};
