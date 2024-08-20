/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-theme": "#f28022",
        "gray-effect": "#676767",
      }
    },
  },
  plugins: [],
}

