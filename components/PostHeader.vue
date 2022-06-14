<template>
  <div
    class="
      p-6
      rounded-md
      w-full
      bg-purple-400
      min-h-64
      text-white text-4xl
      justify-center
      items-center
      mb-6
    "
  >
    <p class="p-6">{{ title }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
