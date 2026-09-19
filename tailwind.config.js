/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F0E3",
        cream: "#FFF9EF",
        maroon: "#6E1F2E",
        wine: "#42131E",
        gold: "#B5965A",
        brown: "#291C1A"
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        italic: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
}