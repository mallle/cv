<template>
  <div class="cv-section">
    <h1>Blog</h1>
    <h2 class="mb-12">
      Welcome to my blog - here I will post about Dart and Flutter, and maybe
      sometimes a bit about Vue and Nuxt.js.
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
      <PostPreview v-for="post in posts" :key="post.title" :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'slim',
  async asyncData({ $content }) {
    const posts = await $content()
      .only(['title', 'image', 'tags', 'slug', 'description'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts,
    }
  },
}
</script>
