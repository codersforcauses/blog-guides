<template>
  <main class="container px-3 py-8 mx-auto mt-16 space-y-8">
    <h1 class="text-4xl">Blog Posts</h1>
    <blog-cards :articles="articles" />
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'
import { BlogProps } from '@/types/global';

export default defineComponent({
  setup () {
    const { $content } = useContext()

    const articles = useAsync(async () => (
      await $content()
        .only(['title', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
        .sortBy('updatedAt', 'desc')
        .fetch<BlogProps>()
    ))

    return {
      articles
    }
  }
})
</script>
