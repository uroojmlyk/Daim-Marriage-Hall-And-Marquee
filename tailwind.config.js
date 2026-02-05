/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        'gold': '#D4AF37',
        'maroon': '#800000',
        'cream': '#F5F5DC',
        'navy': '#000080',
      },
    },
  },
  plugins: [],
}