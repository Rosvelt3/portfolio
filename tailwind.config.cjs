/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "4rem",
          lg: "8rem",
          xl: "10rem",
          "2xl": "12rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
