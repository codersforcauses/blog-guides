<template>
  <article class="w-screen">
    <div v-show="article.img" class="relative w-screen h-96">
      <img
        loading="lazy"
        :src="article.img"
        :alt="article.alt"
        class="absolute object-cover w-full h-full"
      />
    </div>
    <div class="container relative gap-16 px-3 py-8 mx-auto blog-grid lg:gap-24">
      <div>
        <h1 class="mb-4 text-4xl md:text-5xl">
          {{ article.title }}
        </h1>
        <span class="md:hidden">
          <p class="mb-0">
            by
            <NuxtLink :to="`/author/${article.author.name}`">
              {{ article.author.name }}
            </NuxtLink>
          </p>
          <p class="mb-4">
            <small>Last Updated: {{ formatDate(article.updatedAt) }}</small>
          </p>
        </span>
        <!-- content from markdown -->
        <nuxt-content :document="article" />
        <div class="flex justify-between">
          <nuxt-link
            v-if="prev"
            :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
            class="flex items-center max-w-sm py-2 pr-2 font-bold border border-primary hover:bg-primary hover:text-secondary dark:border-secondary dark:hover:bg-secondary dark:hover:text-primary"
          >
            <span class="mr-2 material-icons-sharp">chevron_left</span>
            {{ prev.title }}
          </nuxt-link>
          <span v-else>&nbsp;</span>
          <nuxt-link
            v-if="next"
            :to="{ name: 'blog-slug', params: { slug: next.slug } }"
            class="flex items-center max-w-xs py-2 pl-2 font-bold border border-primary hover:bg-primary hover:text-secondary dark:border-secondary dark:hover:bg-secondary dark:hover:text-primary"
          >
            {{ next.title }}
            <span class="ml-2 material-icons-sharp">chevron_right</span>
          </nuxt-link>
          <span v-else>&nbsp;</span>
        </div>
      </div>
      <div class="static top-0 hidden md:block">
        <p class="mb-1">{{ article.description }}</p>
        <p class="mb-4">
          <small>Last Updated: {{ formatDate(article.updatedAt) }}</small>
        </p>
        <!-- table of contents -->
        <div class="sticky top-0 overflow-y-auto">
          <nav v-if="article.toc.length > 0" class="mb-4">
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

          <!-- content author component -->
          <author :author="article.author" />
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

type DataProps = Record<'article' | 'prev' | 'next', IContentDocument | null>

export default Vue.extend({
  async asyncData({ $content, params }): Promise<DataProps> {
    const article = await $content(params.slug).fetch() as IContentDocument
    const [prev, next] = await $content()
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch() as Array<IContentDocument | null>
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
    formatDate(date: string): string {
      return new Date(date).toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
})
</script>

<style>
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

/* .nuxt-content-highlight {
  @apply relative;
}
.nuxt-content-highlight .filename {
  @apply absolute right-0 text-primary font-light z-10 mr-2 mt-1 text-sm;
}
.nuxt-content-highlight pre {
  border-radius: 0 !important;
}
.nuxt-content > * {
  @apply mb-4;
}
.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  @apply font-mono font-bold;
}
.nuxt-content h2 {
  font-size: 28px;
}
.nuxt-content h3 {
  font-size: 22px;
}
.nuxt-content p {
  @apply mb-4;
}
.nuxt-content code {
  @apply font-semibold;
}
.nuxt-content blockquote {
  @apply pl-4 py-2 border-l-4 border-primary;
}
.nuxt-content blockquote p {
  @apply italic m-0;
}
.nuxt-content a:hover {
  text-decoration: underline;
}
.nuxt-content ol {
  @apply list-inside list-decimal;
}
.nuxt-content ul {
  list-style-type: square;
  @apply list-inside;
}
.nuxt-content-editor {
  @apply bg-primary dark:bg-secondary;
} */
</style>
