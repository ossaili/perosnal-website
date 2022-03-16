const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.xl'),
          fontFamily: theme('fontFamily.raleway'),
          fontWeight: 'bold',
          letterSpacing: '0.3rem',
        },
        p: {
          fontSize: theme('fontSize.md'),
          fontFamily: theme('fontFamily.raleway'),
          fontWeight: '300',
        },
      });
    }),
  ],
};
