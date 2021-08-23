<template>
  <article class="max-w-none">
    <div v-show="article.img" class="relative w-screen h-96">
      <img
        loading="lazy"
        :src="article.img"
        :alt="article.alt"
        class="absolute z-0 object-cover w-full h-full"
      />
    </div>
    <div class="container relative gap-16 px-3 py-8 mx-auto blog-grid lg:gap-24">
      <div>
        <h1 class="mb-4 text-3xl sm:text-4xl md:text-5xl">
          {{ article.title }}
        </h1>
        <span class="md:hidden">
          <p class="mb-0">
            by
            <nuxt-link
              class="focus:outline-none focus:ring focus:ring-accent"
              :to="{ name: 'author-slug', params: { slug: encodeURIComponent(article.author.name.toLowerCase()) } }"
            >
              {{ article.author.name }}
            </nuxt-link>
          </p>
          <p class="mb-4">
            <small>Last Updated: {{ formatDate(article.updatedAt) }}</small>
          </p>
        </span>
        <!-- content from markdown -->
        <nuxt-content :document="article" />
        <div class="flex justify-between mt-4">
          <nuxt-link
            v-if="prev"
            :to="{ name: 'blog-slug', params: { slug: encodeURIComponent(prev.slug.toLowerCase()) } }"
            class="flex items-center max-w-sm py-2 pr-2 font-bold border border-primary hover:bg-primary hover:text-secondary focus:outline-none focus:bg-primary focus:text-secondary dark:border-secondary dark:hover:bg-secondary dark:hover:text-primary dark:focus:bg-secondary dark:focus:text-primary"
          >
            <span class="mr-2 material-icons-sharp">chevron_left</span>
            {{ prev.title }}
          </nuxt-link>
          <span v-else>&nbsp;</span>
          <nuxt-link
            v-if="next"
            :to="{ name: 'blog-slug', params: { slug: encodeURIComponent(next.slug.toLowerCase()) } }"
            class="flex items-center max-w-xs py-2 pl-2 font-bold border border-primary hover:bg-primary hover:text-secondary focus:outline-none focus:bg-primary focus:text-secondary dark:border-secondary dark:hover:bg-secondary dark:hover:text-primary dark:focus:bg-secondary dark:focus:text-primary"
          >
            {{ next.title }}
            <span class="ml-2 material-icons-sharp">chevron_right</span>
          </nuxt-link>
          <span v-else>&nbsp;</span>
        </div>
      </div>
      <div class="hidden grid-cols-2 gap-4 md:grid lg:block">
        <div>
          <p class="mb-1">{{ article.description }}</p>
          <p class="mb-4">
            <small>Last Updated: {{ formatDate(article.updatedAt) }}</small>
          </p>
          <!-- table of contents -->
          <nav v-show="article.toc.length > 0" class="mb-4">
            <small class="font-mono">Table of Contents</small>
            <ul class="opacity-75">
              <li
                v-for="link of article.toc"
                :key="link.id"
                class="list-inside"
                :class="{
                  'font-semibold py-1 list-square': link.depth === 2,
                  'ml-2 pb-1 list-disc text-sm': link.depth === 3
                }"
              >
                <nuxt-link :to="`#${link.id}`" class="hover:underline">
                  {{ link.text }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <!-- content author component -->
        <author :author="article.author" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData({ $content, params }) {
    const article = await $content(decodeURIComponent(params.slug)).fetch()

    const [prev, next] = await $content()
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  head() {
    return {
      title: `${this.article.title} | Coders for Causes`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.article.title} | Coders for Causes`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://og-social-cards.vercel.app/**.%2F${encodeURIComponent(
            this.article.slug.split('-').join('_')
          )}**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcodersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg`
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://guides.codersforcauses.org/blog/${this.article.slug}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.article.title} | Coders for Causes`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://og-social-cards.vercel.app/**.%2F${encodeURIComponent(
            this.article.slug.split('-').join('_')
          )}**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcodersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://guides.codersforcauses.org/blog/${this.article.slug}`
        }
      ]
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 1024px) {
  .blog-grid {
    grid-template-columns: 1fr 16rem;
  }
}

.list-square {
  list-style-type: square;
}
</style>
