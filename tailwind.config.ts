import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    colors: {
      lightPurple: '#9D58F9',
      darkPurple: '#7B24BD',
      blue: '#418dde',
      pink: '#de5f83',
      white: '#FAFAFA',
      black: '#101010',
      bgWhite: '#FAFAFA',
      bgBlack: '#0d0314',
    },
    extend: {
      fontSize: {
        header1: '48px',
        header2: '40px',
        header3: '32px',
        button: '28px',
        body1: '18px',
        body2: '16px',
      },
    },
  },
  plugins: [],
} satisfies Config;
