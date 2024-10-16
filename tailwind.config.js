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
        Beckman: ["Beckman"],
        Merich: ["Merich"],
        Kelsi: ["Kelsi"],
        Mont: ["mont"],
        Carving: ["Carving"],
        Neue: ["Neue"],
      },
      screens: { ...defaultTheme.screens, xss: "375px" },
      backgroundImage: {
        spinColor:
          "conic-gradient(from 0turn, #213, #112 5%, #112 60%, #213 95%)",
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
