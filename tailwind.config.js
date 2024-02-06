/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A1D2C8",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
