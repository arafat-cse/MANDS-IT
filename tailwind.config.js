/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Saira", "sans-serif"],
      }
    },
  },
  plugins: [],
};
