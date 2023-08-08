/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F0C91A", 
        secondary: "#341D12",
        accent: "#DD9A00",
        txtcolor: "#1E1E1E",
        bgcolor: "#F2F2F2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gsub: ["gsub", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}