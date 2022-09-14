/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
