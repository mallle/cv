<template>
  <div class="section">
    <h1>Blog</h1>
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
}
</script>
