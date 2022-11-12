/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF8600",
        "secondary": "#FFB800",
        "dark-bg": "#F8FAFC",
        "light-bg": "#FFFFFF",
      }
    },
  },
  plugins: [],
}
