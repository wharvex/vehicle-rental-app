/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        grey: "rgba(0, 0, 0, 0.5)",
      },
      spacing: {},
      fontFamily: {
        "reg-heading": "'Fira Sans'",
        "hfb-extra-small": "Cabin",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "13xl": "32px",
      "11xl": "30px",
      "17xl": "36px",
      "9xl": "28px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
