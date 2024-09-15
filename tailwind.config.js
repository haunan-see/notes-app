/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        fade: "rgba(255, 255, 255, 0.05)",
      },
      colors: {
        transparent: {
          100: "rgba(255, 255, 255, 0.12)",
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
