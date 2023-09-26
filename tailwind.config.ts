import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      zIndex: {
        '999': '999',
      },
      maxWidth: {
        'screen-3xl': '1920px',
      },
      width: {
        '95per': '95%',
      },
      colors: {
        'main-colorA': 'var(--main-colorA)',
        'main-colorB': 'var(--main-colorB)',
        'sub-colorA': 'var(--sub-colorA)',
        'font-colorA': 'var(--font-colorA)',
        'font-colorB': 'var(--font-colorB)',
        'white-colorA': 'var(--white-colorA)',
      },
    },
  },
  plugins: [],
};
export default config;
