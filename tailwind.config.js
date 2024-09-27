/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'display': ['Playfair Display', 'serif'],
        'Montaga': ['Montaga', 'serif'],
        'Poiret One': ['Poiret One', 'cursive'],
      },
    },
  },
  plugins: [],
}