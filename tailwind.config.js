/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hack-red': '#EC3750',
        'hack-dark': '#0D0D0D',
        'hack-blue': '#338EDA',
        'hack-yellow': '#FFCD38',
        'hack-green': '#33D6A6',
      },
      fontFamily: {
        'sans': ['Phantom Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
