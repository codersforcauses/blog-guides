<template>
  <main>
    <div class="border-b bg-primary border-secondary">
      <div class="container px-3 pt-5 pb-24 mx-auto md:pb-32">
        <NuxtLink
          to="/"
          class="flex items-center px-1 py-2 -ml-2 space-x-1 border border-transparent w-max text-secondary hover:border-secondary hover:bg-secondary hover:text-primary"
        >
          <span class="material-icons-sharp">arrow_back</span>
          <span class="font-bold"> Back to All Articles </span>
        </NuxtLink>
      </div>
    </div>
    <div class="container flex items-center px-3 mx-auto">
      <div
        class="flex items-center justify-center w-32 h-32 -mt-16 font-mono border border-secondary bg-primary text-7xl text-secondary md:w-40 md:h-40 md:-mt-20"
      >
        <img
          v-if="articles[0].author.img"
          loading="lazy"
          :src="articles[0].author.img"
          :alt="articles[0].author.name"
          class="object-cover w-full h-full"
        />
        <span v-else class="uppercase">{{ initials }}</span>
      </div>
      <div class="ml-4">
        {{ articles[0].author.name }}
      </div>
    </div>
    <p class="container px-3 mx-auto mt-4">
      {{ articles[0].author.bio }}
    </p>

    <div class="container px-3 mx-auto mt-8 mb-8 md:mt-16">
      <h1 class="mb-4 text-2xl font-bold">
        Articles by {{ articles[0].author.name }}:
      </h1>
      <blog-cards :articles="articles" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, computed, useContext, useStatic } from '@nuxtjs/composition-api'
import { BlogProps } from '@/types/global';

export default defineComponent({
  setup () {
    const { $content, params } = useContext()
    const slug = computed(() => params.value.slug);

    const articles = useStatic(async slug => {
      const res = await $content()
        .where({
          'author.name': {
            $regex: [slug, 'i']
          }
        })
        .without(['body', 'toc', 'dir', 'updatedAt', 'createdAt'])
        .sortBy('createdAt', 'asc')
        .fetch<BlogProps>()

      return res
    }, slug, 'articles')

    const names = Array.isArray(articles) && articles[0].author.name.split(' ') || ['Anonymous']
    const initials = computed<string>(() => names.length > 2 ? `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}` : names[0].charAt(0))

    return {
      articles,
      initials
    }
  }
})
</script>
