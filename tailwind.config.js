/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        expand: "expand 3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
