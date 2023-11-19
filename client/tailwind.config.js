/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rambow: {
          100: "#FFF2D8",
          200: "#EAD7BB",
          300: "#BCA37F",
          400: "#113946",
        },
      },

      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
