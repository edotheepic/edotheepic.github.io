/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0rem) scale(1.1)",
          },
          "50%": {
            transform: "translateY(-0.5rem) scale(1.1)",
          },
          "100%": {
            transform: "translateY(0rem) scale(1.1)",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        blink: "blink 1s infinite"
      },
    },
  },
  plugins: [],
}
