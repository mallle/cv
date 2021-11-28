<template>
  <div class="flex flex-col items-center mr-8 mt-8 colored justify-end">
    <i :class="icon" class="text-7xl"></i>
    <p class="mt-2 font-mono">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      requried: false,
      default: 'Description',
    },
    icon: {
      type: String,
      requried: false,
      default: 'devicon-php-plain',
    },
  },
}
</script>

<style scoped>
.colored {
  @apply text-purple-400 hover:text-yellow-200;
}
</style>
