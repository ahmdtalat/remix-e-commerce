module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'fill-available': '-webkit-fill-available;'
      },
      gridTemplateColumns: {
        card: 'repeat(auto-fill, minmax(320px, 1fr))'
      },
      gridTemplateRows: {
        card: 'repeat(auto-fill, minmax(420px, 1fr))'
      }
    }
  },
  variants: {},
  plugins: []
}
