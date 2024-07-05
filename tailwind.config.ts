import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-dark': '#191920',
        'secondary-dark': '#1F252A',
      },
      borderColor: {
        'primary-dark': '#BDBFC1',
      },
      textColor: {
        'primary-dark': '#BDBFC1',
        'secondary-dark': '#7E8285',
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient( to right,#b8cbb8 0%,#b8cbb8 0%,#b465da 0%,#cf6cc9 33%,#ee609c 66%,#ee609c 100% )',
      },

      animation: {
        gradient: 'gradient 4s linear infinite',
      },
      keyframes: {
        gradient: {
          to: { 'background-position': '200%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
