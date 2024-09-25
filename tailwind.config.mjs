import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Variable", defaultTheme?.fontFamily?.sans],
        robo: ["Roboto"],
        pubsans: ["'Public sans Variable'"],
        manrope: ["Manrope Variable"],
        pjsans: ["'Plus Jakarta Sans Variable'"],
        exotwo: ["'Exo 2 Variable'"],
      },
      colors: {
        primary: "#404be0",
        secondary: "#1c2161",
        dark: "#111",
        neutral_text: "#505161",
      },
    },
  },
  plugins: [],
};
