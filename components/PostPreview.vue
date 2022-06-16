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
      <PostHeader :title="post.title" />
      <div class="pt-0 px-2">
        <p class="pb-2 italic text-gray-600 text-right">
          Updated: {{ formatDate }}
        </p>
        <p>{{ post.description }}</p>
        <ul v-if="post.tags" class="flex space-x-3 mt-8 mb-4">
          <Tag v-for="tag in post.tags" :key="tag" :tag="tag" />
        </ul>
      </div>
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
  computed: {
    formatDate() {
      const date = new Date(this.post.updatedAt)
      return [
        this.padTo2Digits(date.getDate()),
        this.padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('-')
    },
  },
  methods: {
    padTo2Digits(num) {
      return num.toString().padStart(2, '0')
    },
  },
}
</script>
