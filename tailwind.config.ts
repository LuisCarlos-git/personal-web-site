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
        'primary-dark': '#272D37',
        'secondary-dark': '#1F252A',
      },
      borderColor: {
        'primary-dark': '#BDBFC1',
      },
      textColor: {
        'primary-dark': '#BDBFC1',
        'secondary-dark': '#7E8285',
        'active-dark': '#CB5D2C',
      },
    },
  },
  plugins: [],
};
export default config;
