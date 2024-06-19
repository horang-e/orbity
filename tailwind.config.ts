import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#1560FB',
        'front-end': { 200: '#1560FB', 100: '#6FB5FB' },
        'back-end': { 200: '#0EC19B', 100: '#6AD191' },
        designer: { 200: '#FF8E72', 100: '#FF9B93' },
        pm: { 200: '#8E52FE', 100: '#BAA3D8' },
        grey: {
          100: '#E1E1E1',
          200: '#A2A2A2',
          300: '#7E7E7E',
          400: '#3E3E3E',
          500: '#1E1E1E',
        },
      },
    },
  },
  plugins: [],
};
export default config;
