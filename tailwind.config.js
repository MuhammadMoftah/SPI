/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          indigo: "#273D6C",
          "mid-blue": "#83D1E7",
          "celestial-blue": "#5B9DCD",
          aqua: "#83D1E7",
          dark: "#070707",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
