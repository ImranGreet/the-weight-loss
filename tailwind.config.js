/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7F1E6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
