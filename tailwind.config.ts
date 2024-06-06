import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    colors: {
      lightPurple: '#9D58F9',
      darkPurple: '#7B24BD',
      blue: {
        default: '#418DDE',
        hover: '#3B59F5',
      },
      pink: {
        default: '#DE5F83',
        hover: '#F5376D',
      },
      white: '#FAFAFA',
      black: '#101010',
      bgWhite: '#FAFAFA',
      bgBlack: '#0d0314',
    },
    extend: {
      animation: {
        bounce: 'bounce 1500ms ease-in-out infinite',
      },
      fontSize: {
        header1: '48px',
        header2: '40px',
        header3: '32px',
        button: '28px',
        body1: '18px',
        body2: '16px',
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
} satisfies Config;
