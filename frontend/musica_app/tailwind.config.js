/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        gridTemplateColumns: {
            '66': 'repeat:(66%, 1fr)',
        }
    },
  },
  plugins: [],
}

