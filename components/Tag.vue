<template>
  <li class="text-gray-600 font-bold bg-yellow-100 rounded-lg px-2 py-1">
    {{ tag }}
  </li>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
}
</script>
