/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "theme-100": "#ff386f",
        "theme-200": "#cc0130",
        "theme-300": "#151515",
        "theme-400": "#CAD5E2",
      },
      fontFamily: {
        'custom-100': ['Jost', 'sans-serif'],
        'custom-200': ['Staatliches', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
};
