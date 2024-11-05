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
            transform: "translateY(0rem)",
          },
          "50%": {
            transform: "translateY(-0.5rem)",
          },
          "100%": {
            transform: "translateY(0rem)",
          },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite"
      },
    },
  },
  plugins: [],
}

