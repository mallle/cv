<template>
  <div class="section">
    <ul v-if="article.tags" class="flex space-x-3 mb-4">
      <Tag v-for="tag in article.tags" :key="tag" :tag="tag" />
    </ul>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  layout: 'slim',
  async asyncData({ $content, params, error }) {
    const slug = params.slug
    const article = await $content(slug)
      .fetch()
      .catch((_err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      article,
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
code {
  word-wrap: break-word;
  @apply bg-yellow-100;
}
</style>
