/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        accent: "#E58411",
        orange100: "#F6B76F",
        orange200: "#F6973F",
        input: "rgba(255, 255, 255, 0.15)",
        black100: "#1E1E1E",
        black200: "#0D1B39",
        black300: "#1E2833",
        black400: "rgba(30, 40, 51, 1)",
        gray100: "#F7F7F7",
        gray200: "#EEE",
        gray300: "#8D8D8D",
        grey400: "rgba(247, 247, 247, 1)",
        grey500: "rgba(250, 250, 250, 1)",
        "dark-black": "#0D1B39",
      },
    },
  },
  plugins: [],
};
