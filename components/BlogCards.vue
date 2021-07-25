<template>
  <div class="grid-blog">
    <div
      v-for="article of articles"
      :key="article.slug"
      class="flex flex-col bg-alt-light dark:bg-primary"
    >
      <nuxt-link
        v-show="article.img"
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
        />
      </nuxt-link>
      <div class="p-4 flex flex-col justify-between h-full w-full space-y-1.5">
        <div class="flex flex-wrap items-center space-x-2 text-xs font-light">
          <span
            v-for="tag in article.tags || []"
            :key="tag"
            class="px-1.5 py-0.5 border border-primary border-opacity-40 text-primary text-opacity-75 dark:border-secondary dark:border-opacity-40 dark:text-secondary dark:text-opacity-75"
          >
            {{ tag }}
          </span>
        </div>
        <nuxt-link
          :to="{
            name: 'blog-slug',
            params: { slug: article.slug }
          }"
        >
          <h2 class="font-mono text-xl font-bold cursor-pointer">{{ article.title }}</h2>
        </nuxt-link>
        <div class="text-sm">
          by
          <NuxtLink
            :to="`/author/${article.author.name}`"
            class="hover:underline"
          >
            {{ article.author.name }}
          </NuxtLink>
        </div>
        <p class="flex-grow text-sm font-bold text-opacity-75 text-primary dark:text-secondary dark:text-opacity-50">
          {{ article.description }}
        </p>
        <nuxt-link
          class="px-3 py-2 transition-colors border border-primary bg-primary text-secondary w-max dark:border-secondary dark:bg-transparent dark:hover:bg-secondary dark:hover:text-primary hover:bg-dark"
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
  import Vue, { PropType } from 'vue'
  import { IContentDocument } from '@nuxt/content/types/content'

  export default Vue.extend({
    props: {
      articles: {
        type: Array as PropType<Array<IContentDocument | null>>,
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
