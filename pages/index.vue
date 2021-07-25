<template>
  <main class="container px-3 py-8 mx-auto mt-16 space-y-8">
    <h1 class="text-4xl">Blog Posts</h1>
    <blog-cards :articles="articles" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const articles = await $content(params.slug)
      .only(['title', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
      .sortBy('updatedAt', 'desc')
      .fetch()
    return { articles }
  },
})
</script>
