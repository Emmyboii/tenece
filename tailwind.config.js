/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        sanss: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
