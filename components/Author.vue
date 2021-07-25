<template>
  <div class="w-full mb-6 md:mb-12">
    <nuxt-link
      :to="`/author/${author.name}`"
      class="flex flex-col bg-alt-light dark:bg-primary"
    >
      <img
        v-if="author.img"
        loading="lazy"
        class="object-cover w-full h-48"
        :src="author.img"
        :alt="`${author.name}'s photo`"
      />
      <div class="flex flex-col p-3">
        <h4 class="text-sm font-semibold">Author</h4>
        <p>{{ author.name }}</p>
        <p class="text-sm">{{ author.bio }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { AuthorProps } from '@/types/global'

export default Vue.extend({
  props: {
    author: {
      type: Object as PropType<AuthorProps>,
      required: true
    }
  }
})
</script>
