<template>
  <header
    class="bg-primary text-secondary inset-x-0 py-3"
    :class="{ 'fixed top-0': $nuxt.$route.name === 'index' }"
  >
    <div class="container mx-auto px-3 flex items-center justify-between">
      <nuxt-link to="/" class="font-mono text-lg font-bold">cfc</nuxt-link>
      <div class="h-full flex items-center w-24 sm:w-72">
        <button
          :title="`Switch to ${toggleHeading} mode`"
          class="relative p-2 flex items-center w-12 h-10"
          @click="$colorMode.preference = toggleHeading"
        >
          <transition name="fade">
            <span
              v-if="$colorMode.preference === 'light'"
              key="dark"
              class="absolute material-icons-sharp"
            >
              dark_mode
            </span>
            <span
              v-else
              key="light"
              class="absolute material-icons-sharp"
            >
              light_mode
            </span>
          </transition>
        </button>
        <div class="relative w-full h-10 ml-6">
          <!-- <autocomplete
            auto-select
            :search="search"
            :get-result-value="getOptions"
            placeholder="Search Articles"
            aria-label="Search Articles"
            base-class="search"
            class="search-articles"
            @submit="submit"
          /> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue'
  // import Autocomplete from '@trevoreyre/autocomplete-vue'
  import { ContentProps } from '@/types/global'

  export default Vue.extend({
    // components: {
    //   Autocomplete
    // },
    computed: {
      toggleHeading(): 'dark' | 'light' {
        return this.$colorMode.preference === 'light' ? 'dark' : 'light'
      }
    },
    methods: {
      async search(searchQuery: string) {
        if (!searchQuery) return []

        return await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .fetch()
      },
      getOptions(result: ContentProps): string {
        return result.title
      },
      submit(result: ContentProps) {
        this.$router.push({
          name: 'blog-slug',
          params: { slug: result.slug }
        })
      }
    }
  })
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
