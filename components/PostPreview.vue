<template>
  <a :href="`/blog/${post.slug}`">
    <div
      class="
        w-full
        border-4
        rounded-lg
        p-8
        flex flex-col
        justify-start
        transition
        duration-500
        ease-in-out
        transform
        border-purple-400
        md:hover:scale-95 md:hover:bg-blue-50 md:hover:border-blue-200
      "
    >
      <!-- <nuxt-img
        class="rounded-lg"
        :src="post.image"
        preset="preview"
        width="400"
        height="300"
      /> -->
      <ul v-if="post.tags" class="flex space-x-3 mt-2 mb-4">
        <Tag v-for="tag in post.tags" :key="tag" :tag="tag" />
      </ul>
      <PostHeader :title="post.title" />
      <p class="pt-4 pb-8">{{ post.description }}</p>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
