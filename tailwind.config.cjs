/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Merriweather", "serif"],
      "sans-serif": ["Noto Sans", "sans-serif"],
      mono: ["Fira Code", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
