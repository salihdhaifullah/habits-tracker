/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./App.tsx"],
  theme: {
    extend: {
      colors: {
        "primary": "#4ade80",
        "secondary": "#1e293b",
        "title": "#e5e7eb",
        "body": "#9ca3af"
      }
    },
  },
  plugins: [],
}

