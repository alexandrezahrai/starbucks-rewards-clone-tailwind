/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "575px",
        lg: "992px",
        xl: "1358px",
      },
      container: {
        padding: {
          DEFAULT: "36px",
          md: "44px",
        },
      },
      colors: {
        "green-dark": "#1e3932",
        "green-primary": "#008248",
        "blue-light": "#d4e9e2",
        "blue-white": "#f1f8f6",
        "cream": "#f3f1e7",
        "gold": "#cba258",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
