/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        accent: "#E58411",
        input: "rgba(255, 255, 255, 0.15)",
        black100: "#1E1E1E",
        gray100: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
