import hljs from 'highlight.js/lib/common'
import hljsDefineGraphQL from 'highlightjs-graphql'

// register the required languages or add  plugins.
// Refer to https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md for the full list
hljsDefineGraphQL(hljs)

// unregister unnecessary languages
hljs.unregisterLanguage('bash')
hljs.unregisterLanguage('cpp')
hljs.unregisterLanguage('php-template')
hljs.unregisterLanguage('yaml')
hljs.unregisterLanguage('python-repl')
hljs.unregisterLanguage('csharp')
hljs.unregisterLanguage('diff')
hljs.unregisterLanguage('ruby')
hljs.unregisterLanguage('go')
hljs.unregisterLanguage('ini')
hljs.unregisterLanguage('java')
hljs.unregisterLanguage('kotlin')
hljs.unregisterLanguage('less')
hljs.unregisterLanguage('lua')
hljs.unregisterLanguage('makefile')
hljs.unregisterLanguage('perl')
hljs.unregisterLanguage('objectivec')
hljs.unregisterLanguage('r')
hljs.unregisterLanguage('rust')
hljs.unregisterLanguage('scss')
hljs.unregisterLanguage('swift')
hljs.unregisterLanguage('vbnet')

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
  loading: false,
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
        let lines = ''
        let div = ''

        // custom line highlighter
        if (lineHighlights) {
          // split individual and ranged lines
          const needHighlight = lineHighlights.split(',')

          const lineNumbers = []
          needHighlight.forEach((line) => {
            if (line.includes('-')) {
              // convert strings from range to numbers
              // eg: 1-4 becomes 1,2,3,4
              const [num1, num2] = line.split('-').map((i) => Number(i))
              const diff = num2 - num1 + 1

              lineNumbers.push(
                ...Array(diff)
                  .fill()
                  .map((_, i) => num1 + i)
              )
            } else {
              lineNumbers.push(Number(line))
            }
          })

          const emptyLines = Array(rawCode.match(/\n/g).length).fill('<br>')
          emptyLines.forEach((l, i) => {
            lines += lineNumbers.includes(i + 1)
              ? '<div class="highlight-line"> </div>'
              : l
          })
          div = emptyLines ? `<div class="highlight">${lines}</div>` : ''
        }

        const highlightedCode = (
          lang
            ? hljs.highlight(rawCode, { language: lang })
            : hljs.highlightAuto(rawCode)
        ).value

        const filename = `<span class="filename">${fileName || lang}</span>`
        const clipboard = `<button class="clipboard"><span class="material-icons-sharp">content_paste</span></button>`

        return `<pre>${div}${filename}<code class="hljs ${lang}">${highlightedCode}</code>${clipboard}</pre>`
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
