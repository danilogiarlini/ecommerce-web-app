/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts, tsx, js, jsx}',
    './components/**/*.{ts, tsx, js, jsx}',
    './pages/**/*.{ts, tsx, js, jsx}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

