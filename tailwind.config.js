/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      turrerRod: "'Turret Road', sans-serif",
      pixelify: "'Pixelify Sans', sans-serif",
      orbitron: "'Orbitron', sans-serif",
      poppins: "'Poppins', sans-serif",
      Nossifer: "'Nosifer', sans-serif",
      satisfy: "'Satisfy', cursive",
      Ysabeau: "'Ysabeau', sans-serif",
      serif: "'DM Serif Display', serif",
      julius: "'Julius Sans One', sans-serif",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
