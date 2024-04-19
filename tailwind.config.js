/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      "body-color": "#959CB1",
    },
    screens: {
      'xs': "450px",
      // => @media (min-width: 450px) { ... }

      'sm': {'max': '576px'},
      // => @media (max-width: 576px) { ... }

      'md': "650px",
      // => @media (min-width: 768px) { ... }

      'lg': "992px",
      // => @media (min-width: 992px) { ... }

      'xl': "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        typing: {
          from: { width: "0" },
          to: { width: "16ch" }
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        typing: "typing 4s steps(16) infinite alternate",
      },
    },
    variants: {
      animation: ["motion-safe"]
  },
  },
  plugins: [],
};
