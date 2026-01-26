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
      screens: {
        '3xl': '1600px',
        'rx': '1360px',
        'rk': '1100px',
        'mf': '950px',
        'mp': '980px',
        'mc': '900px',
        'mk': '850px',
        'mh': '700px',
        'sh': '600px',
        'sd': '550px',
        'sa': '500px',
        'sp': '450px',
        'sk': '400px',
        'sn': '425px',
        'sc': '360px',
        'sr': '340px',
        'sb': '300px',
      }
    },
  },
  plugins: [],
}
