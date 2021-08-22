module.exports = {
  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.js'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      mono: ['IBM Plex Mono', 'mono']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#000000',
      secondary: '#ffffff',
      accent: '#01f1cc',
      alt: {
        light: '#e9ecef',
        dark: '#111111'
      }
    },
    extend: {}
  },
  variants: {
    extend: {
      width: ['focus-within'],
      left: ['focus-within']
    }
  },
  plugins: []
}
