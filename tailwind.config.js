/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        titleColor: {},
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "slide-down": {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(100%)", opacity: 0 },
        },
        "early-exit": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-down": "slide-down 1s ease-out forwards",
        "early-exit": "early-exit 1s ease-out forwards",
      },
      fontFamily: {
        Merich: ["Merich"],
        Kelsi: ["Kelsi"],
        Neue: ["Neue"],
      },
      screens: { ...defaultTheme.screens, xs: "500px" },
      backgroundImage: {
        gradient:
          "linear-gradient(180deg, rgba(0,70,255,1) 0%, rgba(0,155,255,1) 100%)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
