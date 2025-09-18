/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00B140",
          teal: "#00C7B1",
          blue: "#0094FF",
          purple: "#6A00FF",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #00B140, #00C7B1, #0094FF, #6A00FF)",
      },
    },
  },
  plugins: [],
}