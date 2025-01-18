/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Move this to the top level
  theme: {
    extend: {}, // Add any customizations here
  },
  plugins: [
    require('daisyui'), // DaisyUI plugin is included correctly
  ],
}
