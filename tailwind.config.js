/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Header: "#2ca58d",
        transparents: "rgba(0,0,0,0.82)",
        Transparent: "rgba(0,0,0,0.1)",
        main: "#7FDBFF",
        SubMain: "#191970",
        dry: "#00006F",
        dryBlue: "#103C65",
        glass: "rgb(255, 255,255, 0.1)",
      },
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
};
