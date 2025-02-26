/** @type {import('tailwindcss').Config} */
// tailwind.config.cjs
module.exports = {
  //   content: ["./build/**/*.{html,js}"],
  content: ["./build/*.html", "./build/js/*.js"],

  theme: {
    extend: {
      screens: {
        xs: "480px",
        "3xl": "1600px",
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
    },
  },
  plugins: [],
};
