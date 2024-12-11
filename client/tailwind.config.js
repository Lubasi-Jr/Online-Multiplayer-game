/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marker: ["Permanent Marker", "cursive"],
        magic: ["Yusei Magic", "sans-serif"],
      },
      colors: {
        customBlue: "#D4EBF8",
        customNavy: "#1F509A",
      },
    },
  },
  plugins: [],
};
