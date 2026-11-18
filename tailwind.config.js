/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          'soft-pink': '#FFF0F3',
          'rose': '#F78DA7',
          'sunset': '#FF8A3D',
          'peach': '#FFB36B',
          'charcoal': '#211A20',
          'white': '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        display: ['Arial', 'Helvetica', 'sans-serif'],
        mono: ['Arial', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'soft-glow': '0 10px 30px -10px rgba(247, 141, 167, 0.25)',
        'sunset-glow': '0 12px 32px -8px rgba(255, 138, 61, 0.35)',
        'card-subtle': '0 4px 20px -2px rgba(33, 26, 32, 0.04), 0 2px 6px -1px rgba(33, 26, 32, 0.02)',
        'card-hover': '0 20px 40px -12px rgba(33, 26, 32, 0.08), 0 0 25px -5px rgba(255, 138, 61, 0.15)',
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(135deg, #FF8A3D 0%, #F78DA7 100%)',
        'soft-gradient': 'linear-gradient(135deg, #FFF0F3 0%, #FFFFFF 100%)',
        'peach-rose-gradient': 'linear-gradient(135deg, #FFB36B 0%, #F78DA7 100%)',
      },
    },
  },
  plugins: [],
};
