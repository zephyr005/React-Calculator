/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        "primary": "#2B2B2B",
        "errorMsg" : "#FB184E",
      }
    },
  },
  plugins: [],
}

