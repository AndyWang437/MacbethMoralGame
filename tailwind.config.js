/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'macbeth-red': '#8B0000',
        'macbeth-gold': '#D4AF37',
        'macbeth-dark': '#1A1A1A',
        'macbeth-light': '#F5F5DC',
        'macbeth-parchment': '#F5F0E6',
        'macbeth-shadow': '#2A2A2A',
        'macbeth-blood': '#660000',
      },
      fontFamily: {
        'serif': ['Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'display': ['Cinzel', 'serif'],
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'battlefield': "url('/images/battlefield.jpg')",
        'castle': "url('/images/castle.jpg')",
        'throne-room': "url('/images/throne-room.jpg')",
        'banquet-hall': "url('/images/banquet-hall.jpg')",
        'witches-cavern': "url('/images/witches-cavern.jpg')",
      },
      animation: {
        'flicker': 'flicker 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #D4AF37, 0 0 10px #D4AF37, 0 0 15px #D4AF37' },
          '100%': { boxShadow: '0 0 10px #D4AF37, 0 0 20px #D4AF37, 0 0 30px #D4AF37' },
        },
      },
    },
  },
  plugins: [],
} 