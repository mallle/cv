<template>
  <div class="mt-4 mb-8">
    <img
      class="mt-4 mb-2 shadow-md mx-auto"
      :class="classes"
      :src="`/blog/${src}`"
      :alt="alt"
    />
    <p v-if="description">{{ description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
    classes: {
      type: String,
      required: false,
      default: 'w-full md:w-1/2',
    },
  },
}
</script>
