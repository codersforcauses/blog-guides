<template>
  <div class="grid-blog">
    <div
      v-for="article of articles"
      :key="article.slug"
      class="flex flex-col bg-alt-light dark:bg-primary"
    >
      <nuxt-link
        v-show="article.img"
        tabindex="-1"
        :to="{
          name: 'blog-slug',
          params: { slug: article.slug }
        }"
      >
        <img
          loading="lazy"
          :src="article.img"
          :alt="article.alt || 'Article header image'"
          class="object-cover w-full h-48 cursor-pointer"
          :class="{ 'object-left' : article.tags.includes('cfc')}"
        />
      </nuxt-link>
      <div class="p-4 flex flex-col justify-between h-full w-full space-y-1.5">
        <div v-show="article.tags.length > 0" class="flex flex-wrap items-center space-x-2 text-xs font-light">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="px-1.5 py-0.5 border border-primary border-opacity-40 text-primary text-opacity-75 dark:border-secondary dark:border-opacity-40 dark:text-secondary dark:text-opacity-75"
          >
            {{ tag }}
          </span>
        </div>
        <nuxt-link
          tabindex="-1"
          :to="{
            name: 'blog-slug',
            params: { slug: article.slug }
          }"
        >
          <h2 class="font-mono text-xl font-bold cursor-pointer">{{ article.title }}</h2>
        </nuxt-link>
        <div class="text-sm">
          by
          <nuxt-link
            :to="{
              name: 'author-slug',
              params: { slug: encodeURIComponent(article.author.name.toLowerCase()) }
            }"
            class="hover:underline focus:outline-none focus:underline focus:ring-1 focus:ring-accent"
          >
            {{ article.author.name }}
          </nuxt-link>
        </div>
        <p class="flex-grow text-sm font-bold text-opacity-75 text-primary dark:text-secondary dark:text-opacity-50">
          {{ article.description }}
        </p>
        <nuxt-link
          class="px-3 py-2 transition-colors border border-primary bg-primary text-secondary w-max focus:outline-none focus:ring focus:ring-inset focus:ring-accent dark:border-secondary dark:bg-transparent dark:hover:bg-secondary dark:hover:text-primary hover:bg-dark"
          :to="{
            name: 'blog-slug',
            params: { slug: article.slug }
          }"
        >
          Read more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ContentProps } from '@/types/global'

export default defineComponent({
  props: {
    articles: {
      type: Array as () => Array<ContentProps>,
      default: null
    }
  }
})
</script>

<style scoped>
.grid-blog {
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  @apply grid gap-8;
}
</style>
