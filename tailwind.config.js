/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customgreen: "#46DBC9",
        customviolet: "#5B4DBC",
        customblack: "#000000",
        buttoncream: "#FFECED",
        customgray: "#ACACAC",
      },
    },
  },
  plugins: [],
};
