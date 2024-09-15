/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#F94695",
        secondary: "#161622",
        fade: "rgba(255, 255, 255, 0.05)",
      },
      colors: {
        transparent: {
          50: "rgba(255, 255, 255, 0.05)",
          100: "rgba(255, 255, 255, 0.12)",
          700: "rgba(255, 255, 255, 0.7)",
          900: "rgba(255, 255, 255, 0.9)",
        },
      },
      fontFamily: {
        pf: ["PingFang-Regular", "sans-serif"],
        pfbold: ["PingFang-Bold", "sans-serif"],
        pflight: ["PingFang-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
}
