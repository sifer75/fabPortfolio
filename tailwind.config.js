/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-background": "spin-bg 3s linear infinite",
      },
      keyframes: {
        "spin-bg": {
          "0%": {
            "--border-angle": "0turn",
          },
          "100%": {
            "--border-angle": "1turn",
          },
        },
      },
      fontFamily: {
        Beckman: ["Beckman"],
        Merich: ["Merich"],
        Kelsi: ["Kelsi"],
      },
      screens: {
        xxs: "375px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        spinColor:
          "conic-gradient(from 0turn, #213, #112 5%, #112 60%, #213 95%)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
