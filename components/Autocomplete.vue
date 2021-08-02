<template>
  <div>
    <div class="relative z-20 h-full ml-4 bg-secondary bg-opacity-80 text-primary focus-within:bg-opacity-100">
      <span class="absolute flex items-center h-full px-1 text-2xl material-icons-sharp text-primary">
        search
      </span>
      <input
        v-model="query"
        type="search"
        placeholder="Search Articles"
        autocomplete="off"
        class="w-full h-full py-2 pl-8 pr-2 bg-transparent border border-b-0 border-primary placeholder-opacity-60 placeholder-primary focus:outline-none"
        @focus="display"
      />
      <div v-show="showOptions" class="absolute w-full border border-t-0 bg-secondary text-primary border-primary">
        <div v-if="articles.length > 0" class="flex flex-col">
          <nuxt-link
            v-for="article of articles"
            :key="article.slug"
            class="px-2 py-1 duration-75 hover:bg-primary hover:text-secondary focus:bg-primary focus:text-secondary focus:outline-none"
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            @click.native="query = ''"
          >
            {{ article.title }}
          </nuxt-link>
        </div>
        <span v-else class="flex justify-center py-2 italic">
          No articles found
        </span>
      </div>
    </div>
    <button
      v-show="query && showOptions"
      class="absolute inset-0 z-10 w-screen h-screen bg-transparent cursor-default"
      @click="reset"
      @focus="reset"
    >
      <span class="sr-only">
        Close search results
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ssrRef, useContext, watch } from '@nuxtjs/composition-api'
import { BlogProps, ContentProps } from '@/types/global'

export default defineComponent({
  setup() {
    const showOptions = ssrRef(false)
    const query = ssrRef('')
    const articles = ssrRef<Array<ContentProps | never>>([])
    const { $content } = useContext()

    watch(query, async query => {
      if(!query) {
        showOptions.value = false
        articles.value = []
        return
      }

      showOptions.value = true
      articles.value = await $content()
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(6)
        .search(query)
        .fetch<BlogProps>() as Array<ContentProps>
    })

    return {
      query,
      showOptions,
      articles
    }
  },
  methods: {
    display()  {
      if (this.query)
      this.showOptions = true
    },
    reset() {
      this.showOptions = false
    }
  }
})
</script>
