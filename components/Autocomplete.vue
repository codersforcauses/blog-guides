<template>
  <div>
    <div class="absolute z-20 w-10 h-10 transition-all duration-300 max-container top-3 right-3 bg-secondary bg-opacity-80 text-primary sm:w-full sm:relative sm:top-auto sm:right-auto sm:focus-within:left-auto focus-within:left-3 focus-within:w-full focus-within:bg-opacity-100">
      <span
        class="absolute h-10 p-1 text-2xl select-none material-icons-sharp text-primary"
        @click="$refs.search.focus()"
      >
        search
      </span>
      <input
        ref="search"
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

<script>
export default {
  data() {
    return {
      showOptions: false,
      query: '',
      articles: []
    }
  },
  watch: {
    async query(val) {
      if(!val) {
        this.showOptions = false
        this.articles = []
        return
      }

      this.showOptions = true
      this.articles = await this.$content()
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(6)
        .search(val)
        .fetch()
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
}
</script>

<style scoped>
.max-container {
  max-width: calc(100vw - 1.5rem);
}
</style>
