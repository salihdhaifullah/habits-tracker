/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary": "#0891b2",
        "secondary": "",
        "title": "#e5e7eb",
        "body": "#9ca3af",
        "background": "black",
      }
    },
  },
  plugins: [],
}

