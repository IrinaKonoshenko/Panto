/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        accent: "#E58411",
        input: "rgba(255, 255, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
