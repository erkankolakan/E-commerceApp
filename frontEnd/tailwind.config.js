/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fonts: {
        bakbakOne: "./assets/fonts/BakbakOne-Regular.ttf",
        bold: "./assets/fonts/Poppins-Bold.ttf",
        extraBold: "./assets/fonts/Poppins-ExtraBold.ttf",
        light: "./assets/fonts/Poppins-Light.ttf",
        medium: "./assets/fonts/Poppins-Medium.ttf",
        regular: "./assets/fonts/Poppins-Regular.ttf",
        semiBold: "./assets/fonts/Poppins-SemiBold.ttf",
      },
      colors: {
        primary: "#2A4D50",
        primaryDark: "#007984",
        secondary: "#DDF0FF",
        secondaryDark: "#AEC8DD",
        tertiary: "#FF7754",
        gray: "#83829A",
        gray2: "#C1C0C8",
        offwhite: "#F3F4F8",
        white: "#FFFFFF",
        black: "#000000",
        red: "#e81e4d",
        green: "#00C135",
        lightWhite: "#FAFAFC",
        beyazark: "#F1F1F1",
        beyazbo: "#dddddd",
        gri: "#3E3E3E",
        gri2: "#3a3a3a",
      },
    },
  },
  plugins: [],
};
