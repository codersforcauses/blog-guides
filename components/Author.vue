<template>
  <div class="w-2/5 mb-6 lg:w-full lg:mb-12">
    <nuxt-link
      :to="{ name: 'author-slug', params: { slug: encodeURIComponent(author.name.toLowerCase()) } }"
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

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
