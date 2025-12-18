/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./kindeSrc/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'kinde-primary': 'var(--kinde-button-primary-background-color)',
        'kinde-secondary': 'var(--kinde-button-secondary-background-color)',
        'kinde-secondary-border': 'var(--kinde-button-secondary-border-color)',
      },
      fontFamily: {
        'kinde': 'var(--kinde-base-font-family)',
      },
      borderRadius: {
        'kinde': 'var(--kinde-button-border-radius)',
        'kinde-select': 'var(--kinde-control-select-text-border-radius)',
      }
    },
  },
  plugins: [],
}
