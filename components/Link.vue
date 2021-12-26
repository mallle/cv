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

<style>
.link {
  @apply cursor-pointer break-words;
  @apply rounded-md p-4 my-4 text-center;
}

.link-secondary {
  @apply bg-blue-200 md:hover:bg-purple-300 text-white md:hover:text-white;
}

.link-primary {
  @apply bg-purple-300 md:hover:bg-blue-200 text-white md:hover:text-white;
}
</style>
