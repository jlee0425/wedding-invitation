const { fontFamily } = require( 'tailwindcss/defaultTheme' );

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'var(--font-east-sea-dokdo)', ...fontFamily.sans ]
      }
    },
  },
  plugins: [],
};
