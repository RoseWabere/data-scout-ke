/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F172A',
          'navy-dark': '#020617',
          // New accent – muted slate blue (readable, premium)
          accent: {
            DEFAULT: '#4A6B8A',   // light mode
            dark: '#6B9EC2',      // dark mode
          },
          // Old teal removed. If needed for legacy, keep but don't use.
        },
        // Warm neutral for light mode (default)
        warm: {
          50: '#F8F7F4',   // page background
          100: '#F0EFEA',
          200: '#E4E2DF',
          300: '#D1CDC7',
          400: '#B8B2AA',
          500: '#9E968C',
          600: '#7F776E',
          700: '#5F5952',
          800: '#3F3B36',
          900: '#201E1B',
        },
        // Cool neutrals for dark mode (used via dark: modifier)
        cool: {
          50: '#F5F6F8',
          100: '#E6E9ED',
          200: '#CDD2D9',
          300: '#A9B1BC',
          400: '#848E9C',
          500: '#636C7A',
          600: '#4A515C',
          700: '#343A42',
          800: '#1E2127',
          900: '#0A0C10',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}