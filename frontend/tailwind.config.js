/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway"],
        Convergence: ["Convergence"],
      },
      colors: {
        customYellow: "#fff9c9",
        customGray: '#817a78'
      },
      width: {
        '1524': '1524px',
      },
      height: {
        '810': '810px',
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
