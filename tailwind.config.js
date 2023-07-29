/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Header: "#2ca58d",
        Text: "#00030f",
        Button: "#2ca58d",
        transparents: "rgba(0,0,0,0.82)",
        Transparent: "rgba(0,0,0,0.5)",
        main: "#080A1A",
        SubMain: "#F20000",
        dry: "#0b0F29",
        start: "#FFB000",
        Text: "#C0C0C0",
        border: "#4b5563",
        dryGray: "#E0D5D5",
        glass: "rgb(255, 255,255, 0.5)",
      }
    },
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit")
  ],
}