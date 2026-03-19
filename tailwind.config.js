/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f1e3',
        ink: '#1f2937',
        library: {
          50: '#f4efe8',
          100: '#e8dccd',
          200: '#d8c1a7',
          300: '#c6a17d',
          400: '#b78358',
          500: '#9a643d',
          600: '#7f4f31',
          700: '#653f29',
          800: '#4f3223',
          900: '#342117'
        },
        cedar: {
          100: '#e8f0ec',
          300: '#9bb7a8',
          500: '#4f7a67',
          600: '#3f6253',
          700: '#2f4a3f'
        },
        goldleaf: {
          100: '#fff4d6',
          300: '#f2d27a',
          500: '#d4a93d',
          600: '#b88d24'
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 45px rgba(52, 33, 23, 0.12)',
      },
      backgroundImage: {
        'library-radial': 'radial-gradient(circle at top, rgba(255,244,214,0.9), rgba(247,241,227,0.95) 45%, rgba(232,220,205,0.9) 100%)',
      },
    },
  },
  plugins: [],
}
