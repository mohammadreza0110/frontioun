/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        primary:{
          light:'#fff',
          dark:'#64748b'
        }
      }
    },
  },

  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
