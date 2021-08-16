import highlightjs from 'highlight.js/lib/core'
import hljsDefineGraphQL from 'highlightjs-graphql'

// register the required languages.
// Refer to https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md for the full list
hljsDefineGraphQL(highlightjs)
highlightjs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
highlightjs.registerLanguage('c', require('highlight.js/lib/languages/c'))
highlightjs.registerLanguage('php', require('highlight.js/lib/languages/php'))
highlightjs.registerLanguage('html', require('highlight.js/lib/languages/xml'))
highlightjs.registerLanguage(
  'js',
  require('highlight.js/lib/languages/javascript')
)
highlightjs.registerLanguage('json', require('highlight.js/lib/languages/json'))

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
  css: ['@assets/css/code.css'],
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
      highlighter(rawCode, lang, { fileName, lineHighlights }) {
        const highlightedCode = (
          lang
            ? highlightjs.highlight(rawCode, { language: lang })
            : highlightjs.highlightAuto(rawCode)
        ).value

        return `<pre class="nuxt-content-highlight">${
          fileName ? `<span class="filename">${fileName}</span>` : ''
        }<code class="hljs ${lang}">${highlightedCode}</code></pre>`
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
