<template>
  <main class="container px-3 py-8 mx-auto mt-16 space-y-8">
    <h1 class="text-4xl">Blog Posts</h1>
    <blog-cards :articles="articles" />
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'
import { BlogProps } from '@/types/global'

export default defineComponent({
  setup () {
    const { $content } = useContext()

    const articles = useAsync(async () => (
      await $content()
        .only(['title', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
        .sortBy('createdAt', 'desc')
        .fetch<BlogProps>()
    ))

    return {
      articles
    }
  },
  head: {
    title: 'Guides | Coders for Causes',
    meta: [
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
        hid: 'og:url',
        property: 'og:url',
        content: 'https://guides.codersforcauses.org/'
      }
    ]
  }
})
</script>
