<template>
  <div class="section">
    <h1>My Blog</h1>
    <h4 class="mb-10">
      Welcome to my blog - here I will post about Dart and Flutter 📱🚀.
    </h4>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 pt-8">
      <PostPreview v-for="post in posts" :key="post.title" :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'slim',
  async asyncData({ $content }) {
    const posts = await $content()
      .only(['title', 'image', 'tags', 'slug', 'description', 'updatedAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts,
    }
  },
  head() {
    return {
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return titleChunk ? `${titleChunk} Blog` : 'Blog'
      },
    }
  },
}
</script>
