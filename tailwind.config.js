/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // if you're using App Router
  ],
  theme: {
    extend: {
      colors: {
        primary: '#43814F',
        hoverPrimary: '#468852',
        heading: '#3A3530',
        para: '#4a4746',
        mainbg: '#F7F5F1',
        border:'#DFDCD9',
        borderfocus:'#B9B7B4',
      },
      fontFamily: {
        spacemono: ['"Space Mono"', 'monospace'],
        figtree:['"Figtree"', 'monospace'],
        outfit:['"Outfit"', 'monospace'],
      },
    },
  },
  plugins: [],
}
