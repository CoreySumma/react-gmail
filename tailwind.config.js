/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,jsx}",
    "./pages/**/*.{html,jsx}",
    "./index.html",
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,pug,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
