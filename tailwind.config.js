/* eslint-disable import/no-extraneous-dependencies */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dokdo: ['var(--font-east-sea-dokdo)'],
        notoSans: ['var(--font-noto-sans-kr)'],
        sans: fontFamily.sans,
      },
    },
  },
  plugins: [],
};
