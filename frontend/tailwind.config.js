/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        p1: "#D02F3D"
      },
      textColor: {
        primary: "#141716",
        secondary: "#FFFFFF",
        third: "#C2C2C2"
      },
      backgroundColor: {
        primary: "#FAFBFC",
        secondary: '#F1F1F1',
        third: "#EAEAEA",
        red: '#FFEEEE'
      }
    },
  },
  plugins: [],
}