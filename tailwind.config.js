/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fff",
          dark: "#64748b",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        },
        screens: {
          "2xl": "1440px",
        },
      },
    },
  },
};
