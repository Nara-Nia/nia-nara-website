import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1500ms ease-in-out infinite',
      },
      fontSize: {
        button: ['28px', '36px'],
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
} satisfies Config;
