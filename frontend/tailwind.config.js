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
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
