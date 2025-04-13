/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dull": "var(--color-primary-dull)",
        secondary: "var(--color-secondary)",
        tetiary: "var(--color-tetiary)",
        "tetiary-dull": "var(--color-tetiary-dull)",
      },
      fontFamily: {
        secondary: "var(--font-secondary)",
        tetiary: "var(--font-tetiary)",
      },
    },
  },
  plugins: [],
};
