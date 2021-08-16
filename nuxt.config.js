import highlightjs from 'highlight.js/lib/common'
import hljsDefineGraphQL from 'highlightjs-graphql'

// register the required languages or add  plugins.
// Refer to https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md for the full list
hljsDefineGraphQL(highlightjs)

// unregister unnecessary languages
highlightjs.unregisterLanguage('bash')
highlightjs.unregisterLanguage('cpp')
highlightjs.unregisterLanguage('php-template')
highlightjs.unregisterLanguage('yaml')
highlightjs.unregisterLanguage('python-repl')
highlightjs.unregisterLanguage('csharp')
highlightjs.unregisterLanguage('diff')
highlightjs.unregisterLanguage('ruby')
highlightjs.unregisterLanguage('go')
highlightjs.unregisterLanguage('ini')
highlightjs.unregisterLanguage('java')
highlightjs.unregisterLanguage('kotlin')
highlightjs.unregisterLanguage('less')
highlightjs.unregisterLanguage('lua')
highlightjs.unregisterLanguage('makefile')
highlightjs.unregisterLanguage('perl')
highlightjs.unregisterLanguage('objectivec')
highlightjs.unregisterLanguage('r')
highlightjs.unregisterLanguage('rust')
highlightjs.unregisterLanguage('scss')
highlightjs.unregisterLanguage('swift')
highlightjs.unregisterLanguage('vbnet')

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
