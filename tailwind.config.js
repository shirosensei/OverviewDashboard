/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: 'repeat(3, minmax(200px, 1fr))', // Custom grid template
        custom1: 'repeeat(auto-fill, minmax(200px, 1fr))', // Custom grid template
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif', 'Roboto'], // Add Inter font
      },
      boxShadow: {
        'custom': '0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 5px 22px rgba(0, 0, 0, 0.04)', // Custom box shadow
      },
    },
  },
  plugins: [],
}

