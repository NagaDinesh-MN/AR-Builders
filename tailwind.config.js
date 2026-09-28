/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        deep: "#111111",
        surface: "#1A1A1A",
        border: "#2A2A2A",
        gold: "#C8A96E",
        goldlight: "#E8D5B0",
        offwhite: "#F8F5F0",
        muted: "#888880",
        cream: "#F5F0E8",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
