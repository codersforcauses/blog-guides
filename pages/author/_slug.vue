<template>
  <main>
    <div class="border-b bg-primary border-secondary">
      <div class="container px-3 pt-5 pb-24 mx-auto md:pb-32">
        <nuxt-link
          to="/"
          class="flex items-center px-1 py-2 -ml-2 space-x-1 border border-transparent w-max text-secondary hover:border-secondary hover:bg-secondary hover:text-primary"
        >
          <span class="material-icons-sharp">arrow_back</span>
          <span class="font-bold"> Back to All Articles </span>
        </nuxt-link>
      </div>
    </div>
    <template v-if="articles">
      <div class="container flex items-center px-3 mx-auto">
        <div
          class="flex items-center justify-center w-32 h-32 -mt-16 font-mono border border-secondary bg-primary text-7xl text-secondary md:w-40 md:h-40 md:-mt-20"
        >
          <img
            v-if="author.img"
            loading="lazy"
            :src="author.img"
            :alt="author.name"
            class="object-cover w-full h-full"
          />
          <span v-else class="uppercase">{{ initials }}</span>
        </div>
        <div class="ml-4">
          {{ author.name }}
        </div>
      </div>
      <p class="container px-3 mx-auto mt-4">
        {{ author.bio }}
      </p>

      <div class="container px-3 mx-auto mt-8 mb-8 md:mt-16">
        <h1 class="mb-4 text-2xl font-bold">
          Articles by {{ author.name }}:
        </h1>
        <blog-cards :articles="articles" />
      </div>
    </template>
  </main>
</template>

<script lang="ts">
import { defineComponent, computed, useContext, useStatic } from '@nuxtjs/composition-api'
import { AuthorProps, BlogProps } from '@/types/global';

export default defineComponent({
  setup () {
    const { $content, params } = useContext()
    const slug = computed(() => decodeURIComponent(params.value.slug))

    const articles = useStatic(async slug => (
      await $content()
        .where({
          'author.name': {
            $regex: [slug, 'i']
          }
        })
        .without(['body', 'toc', 'dir', 'updatedAt', 'createdAt'])
        .sortBy('createdAt', 'asc')
        .fetch<BlogProps>()
    ), slug, 'articles')

    const names = Array.isArray(articles) && articles[0].author.name.split(' ') || ['Anonymous']
    const initials = computed<string>(() => names.length > 2 ? `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}` : names[0].charAt(0))

    const defaultAuthor: Omit<AuthorProps, 'img'> = {
      name: 'Coders for Causes',
      bio: 'We are a non-profit that builds software for other charities and non-profits'
    }

    return {
      articles,
      initials,
      author: Array.isArray(articles) && (articles[0].author as AuthorProps) || defaultAuthor
    }
  },
  head() {
    const author = this.author as Omit<AuthorProps, 'img'>
    return {
      title: `${author.name} | Coders for Causes`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: author.bio
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${author.name} | Coders for Causes`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: author.bio
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://og-social-cards.vercel.app/**.%2F${encodeURIComponent(
            author.name.split('-').join('_')
          )}**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcodersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg`
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://guides.codersforcauses.org/blog/${author.name}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${author.name} | Coders for Causes`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: author.bio
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://og-social-cards.vercel.app/**.%2F${encodeURIComponent(
            author.name.split('-').join('_')
          )}**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcodersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://guides.codersforcauses.org/blog/${author.name}`
        }
      ]
    }
  }
})
</script>
