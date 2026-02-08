/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fff8f2",
        blush: "#f7d7d9",
        rose: "#e8a6a4",
        burgundy: "#6d3b3b",
        soft: "#f3ece8",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(120, 90, 90, 0.12)",
        hero: "0 20px 40px rgba(95, 45, 45, 0.1)",
      },
    },
  },
  plugins: [],
};
