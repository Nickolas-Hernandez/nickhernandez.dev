/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0E141A',
        'secondary': '#2E49C6',
        'neutral': '#8E98AA',
        'neutral-dark': '#19202A',
        'dark': '#0A0E12',
      },
      fontFamily: {
        'Heading': ['"Rival Sans"', 'sans-serif'],
        'body': ['"Proxima Nova"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
