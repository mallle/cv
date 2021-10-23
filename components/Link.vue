<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="link"
    :class="classes"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
      required: true,
    },
    classes: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<style scoped>
.link {
  @apply text-purple-400  hover:text-pink-500 cursor-pointer break-words;
}
</style>
