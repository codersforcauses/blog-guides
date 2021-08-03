export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en-AU'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:creator',
        content: '@codersforcauses'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:image:width',
        content: '512'
      },
      {
        property: 'og:image:height',
        content: '293'
      },
      {
        property: 'og:site_name',
        content: 'Coders for Causes'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  modules: ['@nuxt/content'],
  content: {
    fullTextSearchFields: ['title', 'slug'],
    markdown: {
      remarkPlugins: [['remark-emoji', { emoticon: true }]],
      prism: {
        theme: 'prism-themes/themes/prism-a11y-dark.css'
      }
    },
    nestedProperties: ['author.name']
  },
  build: {},
  colorMode: {
    classSuffix: ''
  },
  googleFonts: {
    families: {
      'IBM+Plex+Mono': true,
      'IBM+Plex+Sans': true,
      'Material+Icons+Sharp': true
    },
    display: 'swap'
  }
}
