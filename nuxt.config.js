export default {
  target: 'static',
  head: {
    title: 'Guides | Coders for Causes',
    htmlAttrs: {
      lang: 'en-AU'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Guides by the Coders for Causes committee for coders.'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Guides | Coders for Causes'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Guides by the Coders for Causes committee for coders.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://og-social-cards.vercel.app/**.%2Fguides**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcodersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:creator',
        content: '@codersforcauses'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://guides.codersforcauses.org/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Guides | Coders for Causes'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Guides by the Coders for Causes committee for coders.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://og-social-cards.vercel.app/**.%2Fguides**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcodersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://guides.codersforcauses.org/'
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
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'
  ],
  modules: [
    '@nuxt/content'
  ],
  content: {
    markdown: {
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
