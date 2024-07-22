/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Beckman: ["Beckman"],
        Merich: ["Merich"],
        Kelsi: ["Kelsi"],
      },
    },
    // keyframes: {
    //   defilement: {
    //     "0%": { transform: "translateX(0%)" },
    //     "100%": { transform: "translateX(-100%)" },
    //   },
    // },
  },
  plugins: [],
};
