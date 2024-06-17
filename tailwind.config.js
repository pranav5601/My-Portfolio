/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#FF7F3E",
        tertiary: "#150050",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "430px",
        ss: {
          max: "640px",
          min: "430px",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.svg')",
      },
      variants: {
        fill: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};
